// ============================================================
// CF-Edge Relay — Refactored v3.0.0
// Based on: CFnew Terminal v2.9.8c
// All identifiers translated to English. Core logic unchanged.
// ============================================================

import { connect } from 'cloudflare:sockets';

const base64TextDecoder = new TextDecoder();

function decodeBase64(text) {
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return base64TextDecoder.decode(bytes);
}

// ---- Runtime configuration state ----
let AUTH_UUID = '351c9981-04b6-4103-aa4b-864aa9c91469';
let fallbackAddress = '';
let socks5Config = '';
let customPreferredAddressList = [];
let customPreferredDomainList = [];
let enableProxyDowngrade = false;
let disableNonTLS = false;
let disablePreferred = false;
let enableRegionMatching = true;
let currentWorkerRegion = '';
let manualWorkerRegion = '';
let preferredAddressSource = '';
let customPath = '';
let enableVless = true;
let enableTrojan = false;
let enableXhttp = false;
let transportPath = '';
let enableECH = false;
let customDNS = 'https://223.5.5.5/dns-query';
let customECHDomain = 'cloudflare-ech.com';
let customALPN = '';
let subscriptionConverterUrl = decodeBase64('aHR0cHM6Ly91cmwudjEubWsvc3Vi');

const REMOTE_CONFIG_URL = 'https://raw.githubusercontent.com/byJoey/test/refs/heads/main/tist.ini';

let enablePreferredDomain = true;
let enablePreferredIP = true;
let enableGitHubPreferred = true;
let enableNativeAddress = false;

// ---- KV-backed configuration ----
let kvStore = null;
let kvConfig = {};
let kvConfigLastLoad = 0;
const KV_CACHE_TTL = 30 * 1000; // 30s cache window
let kvConfigVersion = '';

const CONFIG_DEFAULTS = {
  wk: '', ev: 'yes', et: 'no', ex: 'no', ech: 'no', tp: '',
  customDNS: 'https://223.5.5.5/dns-query',
  customECHDomain: 'cloudflare-ech.com',
  alpn: '', d: '', p: '', yx: '', yxURL: '', s: '', homepage: '',
  scu: decodeBase64('aHR0cHM6Ly91cmwudjEubWsvc3Vi'),
  ena: 'no', epd: 'yes', epi: 'yes', egi: 'yes',
  ae: '', rm: '', qj: '', dkby: 'no', yxby: '',
  ipv4: 'yes', ipv6: 'yes',
  ispMobile: 'yes', ispUnicom: 'yes', ispTelecom: 'yes'
};

function isTruthy(value, defaultEnabled = false) {
  if (value === undefined || value === null || value === '') return defaultEnabled;
  if (value === true || value === false) return value;
  const text = String(value).trim().toLowerCase();
  if (text === 'yes' || text === 'true' || text === '1' || text === 'on') return true;
  if (text === 'no' || text === 'false' || text === '0' || text === 'off') return false;
  return defaultEnabled;
}

function normalizeToggle(value, defaultEnabled = false) {
  return isTruthy(value, defaultEnabled) ? 'yes' : 'no';
}

function getConfigToggle(key, defaultEnabled = false, fallback = undefined) {
  const defaultValue = fallback !== undefined ? fallback : (defaultEnabled ? 'yes' : 'no');
  return isTruthy(getConfigValue(key, defaultValue), defaultEnabled);
}

function getConfigText(key, defaultValue = '', fallback = undefined) {
  const value = getConfigValue(key, fallback !== undefined ? fallback : defaultValue);
  return value === undefined || value === null ? defaultValue : String(value);
}

function buildEffectiveConfig(config) {
  const snapshot = { ...CONFIG_DEFAULTS, ...config };
  ['ev', 'et', 'ex', 'ech', 'ena', 'epd', 'epi', 'egi', 'ipv4', 'ipv6',
   'ispMobile', 'ispUnicom', 'ispTelecom'].forEach(key => {
    snapshot[key] = normalizeToggle(snapshot[key], isTruthy(CONFIG_DEFAULTS[key]));
  });
  if (snapshot.ev === 'no' && snapshot.et === 'no' && snapshot.ex === 'no') {
    snapshot.ev = 'yes';
  }
  if (snapshot.ech === 'yes') snapshot.dkby = 'yes';
  return snapshot;
}

function readEnvValue(env, ...names) {
  if (!env) return undefined;
  for (const name of names) {
    if (env[name] !== undefined && env[name] !== null && env[name] !== '') return env[name];
  }
  return undefined;
}

function getEnvConfigSnapshot(env = {}) {
  const mapping = {
    wk: ['wk', 'WK'], ev: ['ev', 'EV'], et: ['et', 'ET'], ex: ['ex', 'EX'],
    ech: ['ech', 'ECH'], tp: ['tp', 'TP'],
    customDNS: ['customDNS', 'CUSTOMDNS', 'CUSTOM_DNS'],
    customECHDomain: ['customECHDomain', 'CUSTOMECHDOMAIN', 'CUSTOM_ECH_DOMAIN'],
    alpn: ['alpn', 'ALPN'], d: ['d', 'D'], p: ['p', 'P'],
    yx: ['yx', 'YX'], yxURL: ['yxURL', 'YXURL', 'YX_URL'],
    s: ['s', 'S'], homepage: ['homepage', 'HOMEPAGE'], scu: ['scu', 'SCU'],
    ena: ['ena', 'ENA'], epd: ['epd', 'EPD'], epi: ['epi', 'EPI'], egi: ['egi', 'EGI'],
    ae: ['ae', 'AE'], rm: ['rm', 'RM'], qj: ['qj', 'QJ'],
    dkby: ['dkby', 'DKBY'], yxby: ['yxby', 'YXBY'],
    ipv4: ['ipv4', 'IPV4'], ipv6: ['ipv6', 'IPV6'],
    ispMobile: ['ispMobile', 'ISPMOBILE', 'ISP_MOBILE'],
    ispUnicom: ['ispUnicom', 'ISPUNICOM', 'ISP_UNICOM'],
    ispTelecom: ['ispTelecom', 'ISPTELECOM', 'ISP_TELECOM']
  };
  const snapshot = {};
  for (const [key, names] of Object.entries(mapping)) {
    const value = readEnvValue(env, ...names);
    if (value !== undefined) snapshot[key] = value;
  }
  return snapshot;
}

function getEffectiveConfigSnapshot(env = {}) {
  return buildEffectiveConfig({ ...getEnvConfigSnapshot(env), ...kvConfig });
}

// ---- Region mapping ----
const REGION_MAP = {
  HK: ['🇭🇰 Hong Kong', 'HK', 'Hong Kong'],
  US: ['🇺🇸 United States', 'US', 'United States'],
  SG: ['🇸🇬 Singapore', 'SG', 'Singapore'],
  JP: ['🇯🇵 Japan', 'JP', 'Japan'],
  KR: ['🇰🇷 South Korea', 'KR', 'South Korea'],
  DE: ['🇩🇪 Germany', 'DE', 'Germany'],
  SE: ['🇸🇪 Sweden', 'SE', 'Sweden'],
  NL: ['🇳🇱 Netherlands', 'NL', 'Netherlands'],
  FI: ['🇫🇮 Finland', 'FI', 'Finland'],
  GB: ['🇬🇧 United Kingdom', 'GB', 'United Kingdom'],
  Oracle: ['Oracle', 'Oracle'],
  DigitalOcean: ['DigitalOcean', 'DigitalOcean'],
  Vultr: ['Vultr', 'Vultr'],
  Multacom: ['Multacom', 'Multacom']
};

let backupAddressList = [
  { domain: decodeBase64('UHJveHlJUC5ISy5DTUxpdXNzc3MubmV0'), region: 'HK', regionCode: 'HK', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5VUy5DTUxpdXNzc3MubmV0'), region: 'US', regionCode: 'US', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5TRy5DTUxpdXNzc3MubmV0'), region: 'SG', regionCode: 'SG', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5KUC5DTUxpdXNzc3MubmV0'), region: 'JP', regionCode: 'JP', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5LUi5DTUxpdXNzc3MubmV0'), region: 'KR', regionCode: 'KR', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5ERS5DTUxpdXNzc3MubmV0'), region: 'DE', regionCode: 'DE', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5TRS5DTUxpdXNzc3MubmV0'), region: 'SE', regionCode: 'SE', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5OTC5DTUxpdXNzc3MubmV0'), region: 'NL', regionCode: 'NL', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5GSS5DTUxpdXNzc3MubmV0'), region: 'FI', regionCode: 'FI', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5HQi5DTUxpdXNzc3MubmV0'), region: 'GB', regionCode: 'GB', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5PcmFjbGUuY21saXVzc3NzLm5ldA=='), region: 'Oracle', regionCode: 'Oracle', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5EaWdpdGFsT2NlYW4uQ01MaXVzc3NzLm5ldA=='), region: 'DigitalOcean', regionCode: 'DigitalOcean', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5WdWx0ci5DTUxpdXNzc3MubmV0'), region: 'Vultr', regionCode: 'Vultr', port: 443 },
  { domain: decodeBase64('UHJveHlJUC5NdWx0YWNvbS5DTUxpdXNzc3MubmV0'), region: 'Multacom', regionCode: 'Multacom', port: 443 }
];

const DIRECT_DOMAIN_LIST = [
  { name: 'cloudflare.182682.xyz', domain: 'cloudflare.182682.xyz' },
  { name: 'speed.marisalnc.com', domain: 'speed.marisalnc.com' },
  { domain: 'freeyx.cloudflare88.eu.org' },
  { domain: 'bestcf.top' },
  { domain: 'cdn.2020111.xyz' },
  { domain: 'cfip.cfcdn.vip' },
  { domain: 'cf.0sm.com' },
  { domain: 'cf.090227.xyz' },
  { domain: 'cf.zhetengsha.eu.org' },
  { domain: 'cloudflare.9jy.cc' },
  { domain: 'cf.zerone-cdn.pp.ua' },
  { domain: 'cfip.1323123.xyz' },
  { domain: 'cnamefuckxxs.yuchen.icu' },
  { domain: 'cloudflare-ip.mofashi.ltd' },
  { domain: '115155.xyz' },
  { domain: 'cname.xirancdn.us' },
  { domain: 'f3058171cad.002404.xyz' },
  { domain: '8.889288.xyz' },
  { domain: 'cdn.tzpro.xyz' },
  { domain: 'cf.877771.xyz' },
  { domain: 'xn--b6gac.eu.org' }
];

// ---- Protocol error constants ----
const ERR_INVALID_DATA = atob('aW52YWxpZCBkYXRh');
const ERR_INVALID_USER = atob('aW52YWxpZCB1c2Vy');
const ERR_UNSUPPORTED_COMMAND = atob('Y29tbWFuZCBpcyBub3Qgc3VwcG9ydGVk');
const ERR_UDP_DNS_ONLY = atob('VURQIHByb3h5IG9ubHkgZW5hYmxlIGZvciBETlMgd2hpY2ggaXMgcG9ydCA1Mw==');
const ERR_INVALID_ADDRESS_TYPE = atob('aW52YWxpZCBhZGRyZXNzVHlwZQ==');
const ERR_EMPTY_ADDRESS = atob('YWRkcmVzc1ZhbHVlIGlzIGVtcHR5');
const ERR_WS_NOT_OPEN = atob('d2ViU29ja2V0LmVhZHlTdGF0ZSBpcyBub3Qgb3Blbg==');
const ERR_INVALID_UUID_STRING = atob('U3RyaW5naWZpZWQgaWRlbnRpZmllciBpcyBpbnZhbGlk');
const ERR_INVALID_SOCKS_ADDRESS = atob('SW52YWxpZCBTT0NLUyBhZGRyZXNzIGZvcm1hdA==');
const ERR_SOCKS_NO_METHODS = atob('bm8gYWNjZXB0YWJsZSBtZXRob2Rz');
const ERR_SOCKS_NEEDS_AUTH = atob('c29ja3Mgc2VydmVyIG5lZWRzIGF1dGg=');
const ERR_SOCKS_AUTH_FAILED = atob('ZmFpbCB0byBhdXRoIHNvY2tzIHNlcnZlcg==');
const ERR_SOCKS_CONNECT_FAILED = atob('ZmFpbCB0byBvcGVuIHNvY2tzIGNvbm5lY3Rpb24=');

let parsedSocks5Config = {};
let isProxyEnabled = false;

// ---- Protocol constants ----
const ADDR_TYPE_IPV4 = 1;
const ADDR_TYPE_DOMAIN = 2;
const ADDR_TYPE_IPV6 = 3;
const TRANSPORT_CHUNK_SIZE = 64 * 1024;
const DOWNLOAD_PACKET_SIZE = 32 * 1024;
const DOWNLOAD_TAIL = 512;
const DOWNLOAD_DELAY = 0;
const UPLOAD_PACKET_SIZE = 16 * 1024;
const UPLOAD_QUEUE_LIMIT = 256 * 1024;
const CONNECT_RACE_COUNT = 2;
const FIRST_BYTE_TIMEOUT = 3500;

const sharedDecoder = new TextDecoder();
const uuidBytesCache = new Map();
// ============================================================
// Validation helpers
// ============================================================
function isValidUuidFormat(str) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

function isValidAddress(addr) {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (ipv4Regex.test(addr)) return true;
  const ipv6FullRegex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (ipv6FullRegex.test(addr)) return true;
  const ipv6CompactRegex = /^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
  if (ipv6CompactRegex.test(addr)) return true;
  return false;
}

// ============================================================
// Node naming helpers
// ============================================================
function createNodeNamer(skip = false) {
  // If a preferred-address source URL is configured, skip numbering
  const hasSource = typeof preferredAddressSource !== 'undefined' && preferredAddressSource && preferredAddressSource.trim();
  let skipNumbering = hasSource || skip;
  const counters = {};

  function setSkipNumbering(value) {
    if (!hasSource) skipNumbering = value;
  }

  function namer(baseName, nodeName = null) {
    if (skipNumbering || (baseName && baseName.includes('.'))) {
      return nodeName || baseName;
    }
    if (!counters[baseName]) counters[baseName] = 0;
    counters[baseName]++;
    const index = String(counters[baseName]).padStart(2, '0');
    return `${nodeName || baseName}-${index}`;
  }

  return { namer, setSkipNumbering };
}

function normalizeNodeHost(host) {
  return String(host || '').trim().replace(/^\[([^\]]+)\]$/, '$1');
}

function sanitizeNodeAliasPart(value, fallback = 'Node') {
  let text = String(value || '').trim();
  if (!text || /^自定义优选-/i.test(text)) text = fallback;
  text = text
    .replace(/^\[([^\]]+)\]$/, '$1')
    .replace(/^https?:\/\//i, '')
    .replace(/[/?#].*$/, '')
    .replace(/\s+/g, '_');
  return text || fallback;
}

function getNodeAliasBase(item) {
  const host = normalizeNodeHost(item?.ip || item?.domain || '');
  if (host && host.includes(':') && /^[0-9a-fA-F:.]+$/.test(host)) return 'IPv6优选';
  if (host && !isValidAddress(host)) return '优选域名';
  const ispPart = sanitizeNodeAliasPart(item?.isp || item?.name || '', 'IPv4优选');
  const coloPart = sanitizeNodeAliasPart(item?.colo || '', '');
  return coloPart ? `${ispPart}-${coloPart}` : ispPart;
}

function createPreferredNodeNamer(skipNumbering = false) {
  const counters = {};
  return (item) => {
    const base = getNodeAliasBase(item);
    if (skipNumbering) return base;
    counters[base] = (counters[base] || 0) + 1;
    return `${base}-${String(counters[base]).padStart(2, '0')}`;
  };
}

// ============================================================
// ALPN helpers
// ============================================================
function normalizeAlpn(value) {
  const allowed = ['', 'h3', 'h2', 'http/1.1', 'h3,h2', 'h2,http/1.1', 'h3,h2,http/1.1'];
  const alpn = String(value || '').trim();
  return allowed.includes(alpn) ? alpn : '';
}

function applyAlpnToParams(params) {
  const alpn = normalizeAlpn(customALPN);
  if (alpn) params.set('alpn', alpn);
}

// ============================================================
// KV-backed configuration management
// ============================================================
async function initKvStore(env) {
  if (env.C) {
    try {
      kvStore = env.C;
      await loadKvConfig();
    } catch (err) {
      kvStore = null;
    }
  }
}

async function loadKvConfig(force = false) {
  if (!kvStore) return;

  // Within the short cache window, trust the cache to avoid hammering KV
  if (!force && kvConfigLastLoad > 0 && Date.now() - kvConfigLastLoad < KV_CACHE_TTL) {
    return;
  }

  try {
    // Read the small version key c_ver (~13B) for cross-isolate cache invalidation
    let version = '';
    try {
      version = (await kvStore.get('c_ver')) || '';
    } catch (ignored) {}

    // Version unchanged and cache present: just refresh the timestamp
    if (!force && version && version === kvConfigVersion && kvConfig && Object.keys(kvConfig).length > 0) {
      kvConfigLastLoad = Date.now();
      return;
    }

    const configData = await kvStore.get('c');
    if (configData) {
      kvConfig = JSON.parse(configData);
    }
    kvConfigVersion = version;
    kvConfigLastLoad = Date.now();
  } catch (err) {
    // On read failure, keep the existing cache to avoid losing config on transient faults
    if (!kvConfig) kvConfig = {};
  }
}

async function saveKvConfig() {
  if (!kvStore) return;
  try {
    const configString = JSON.stringify(kvConfig);
    await kvStore.put('c', configString);
    // Write a version stamp so other isolates see the change on their next request
    const newVersion = String(Date.now());
    kvConfigVersion = newVersion;
    try {
      await kvStore.put('c_ver', newVersion);
    } catch (ignored) {}
    kvConfigLastLoad = Date.now();
  } catch (err) {
    throw err;
  }
}

function getConfigValue(key, defaultValue = '') {
  if (kvConfig[key] !== undefined) return kvConfig[key];
  return defaultValue;
}

async function setConfigValue(key, value) {
  kvConfig[key] = value;
  await saveKvConfig();
}

// ============================================================
// Region detection & backup address selection
// ============================================================
async function detectWorkerRegion(request) {
  try {
    const cfCountry = request.cf?.country;
    if (cfCountry) {
      const countryToRegion = {
        US: 'US', SG: 'SG', JP: 'JP', KR: 'KR', DE: 'DE',
        SE: 'SE', NL: 'NL', FI: 'FI', GB: 'GB',
        CN: 'SG', TW: 'JP', AU: 'SG', CA: 'US',
        FR: 'DE', IT: 'DE', ES: 'DE', CH: 'DE', AT: 'DE',
        BE: 'NL', DK: 'SE', NO: 'SE', IE: 'GB'
      };
      if (countryToRegion[cfCountry]) return countryToRegion[cfCountry];
    }
    return 'SG';
  } catch (err) {
    return 'SG';
  }
}

async function checkAddressAvailability(domain, port = 443, timeout = 2000) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(`https://${domain}`, {
      method: 'HEAD',
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CF-IP-Checker/1.0)' }
    });
    clearTimeout(timer);
    return response.status < 500;
  } catch (err) {
    return true;
  }
}

async function getBackupAddress(workerRegion = '', useRegionMatching = enableRegionMatching) {
  if (backupAddressList.length === 0) return null;

  const available = backupAddressList.map(addr => ({ ...addr, available: true }));

  if (useRegionMatching && workerRegion) {
    const regionSorted = getRegionSortedAddresses(workerRegion, available, useRegionMatching);
    if (regionSorted.length > 0) return regionSorted[0];
  }
  return available[0];
}

function getNearbyRegions(region) {
  const map = {
    US: ['SG', 'JP', 'KR'],
    SG: ['JP', 'KR', 'US'],
    JP: ['SG', 'KR', 'US'],
    KR: ['JP', 'SG', 'US'],
    DE: ['NL', 'GB', 'SE', 'FI'],
    SE: ['DE', 'NL', 'FI', 'GB'],
    NL: ['DE', 'GB', 'SE', 'FI'],
    FI: ['SE', 'DE', 'NL', 'GB'],
    GB: ['DE', 'NL', 'SE', 'FI']
  };
  return map[region] || [];
}

function getRegionPriorityList(region) {
  const nearby = getNearbyRegions(region);
  const all = ['US', 'SG', 'JP', 'KR', 'DE', 'SE', 'NL', 'FI', 'GB'];
  return [region, ...nearby, ...all.filter(r => r !== region && !nearby.includes(r))];
}

function getRegionSortedAddresses(workerRegion, availableList, useRegionMatching = enableRegionMatching) {
  if (!useRegionMatching || !workerRegion) return availableList;
  const priority = getRegionPriorityList(workerRegion);
  const result = [];
  for (const region of priority) {
    const regionAddrs = availableList.filter(addr => addr.regionCode === region);
    result.push(...regionAddrs);
  }
  return result;
}

function parseAddressPort(input) {
  // Bracketed IPv6 with optional port: [2001:db8::1]:443
  if (input.includes('[') && input.includes(']')) {
    const match = input.match(/^\[([^\]]+)\](?::(\d+))?$/);
    if (match) {
      return { address: match[1], port: match[2] ? parseInt(match[2], 10) : null };
    }
  }
  const colonIndex = input.lastIndexOf(':');
  if (colonIndex > 0) {
    const address = input.substring(0, colonIndex);
    const portString = input.substring(colonIndex + 1);
    const port = parseInt(portString, 10);
    // If address still contains ':', it's a bare IPv6 — treat whole string as address
    if (!address.includes(':') && !isNaN(port) && port > 0 && port <= 65535) {
      return { address, port };
    }
  }
  return { address: input, port: null };
}

// ============================================================
// Main Worker entry point
// ============================================================
export default {
  async fetch(request, env, ctx) {
    try {
      const isWebSocket = request.headers.get('Upgrade') === atob('d2Vic29ja2V0');
      const isPost = request.method === 'POST';
      const requestUrl = new URL(request.url);
      const pathSegments = requestUrl.pathname.split('/').filter(seg => seg);

      // Reject unknown paths unless they match the UUID or custom path
      if (!isWebSocket && !isPost && requestUrl.pathname !== '/') {
        const envUuid = (env.u || env.U || '').toLowerCase();
        const envPath = (env.d || env.D || '').toLowerCase();
        const firstSeg = pathSegments[0] || '';
        const cleanPath = envPath.startsWith('/') ? envPath.substring(1) : envPath;
        if (firstSeg !== envUuid && (cleanPath ? firstSeg !== cleanPath : false)) {
          return new Response('Not Found', { status: 404 });
        }
      }

      await initKvStore(env);

      AUTH_UUID = (env.u || env.U || AUTH_UUID).toLowerCase();
      const pathValue = (env.d || env.D || AUTH_UUID).toLowerCase();
      const configProxy = getConfigValue('p', env.p || env.P);
      let isCustomAddress = false;

      const manualRegion = getConfigValue('wk', env.wk || env.WK);
      if (manualRegion && manualRegion.trim()) {
        manualWorkerRegion = manualRegion.trim().toUpperCase();
        currentWorkerRegion = manualWorkerRegion;
      } else if (configProxy && configProxy.trim()) {
        isCustomAddress = true;
        currentWorkerRegion = 'CUSTOM';
      } else {
        currentWorkerRegion = await detectWorkerRegion(request);
      }

      const regionMatchControl = getConfigTextValue('rm', CONFIG_DEFAULTS.rm, env.rm || env.RM);
      enableRegionMatching = !(regionMatchControl && regionMatchControl.toLowerCase() === 'no');

      const fallbackValue = getConfigTextValue('p', CONFIG_DEFAULTS.p, env.p || env.P);
      fallbackAddress = fallbackValue ? fallbackValue.trim() : '';

      socks5Config = getConfigTextValue('s', CONFIG_DEFAULTS.s, env.s || env.S);
      if (socks5Config) {
        try {
          parsedSocks5Config = parseSocksConfig(socks5Config);
          isProxyEnabled = true;
        } catch (err) {
          isProxyEnabled = false;
        }
      } else {
        parsedSocks5Config = {};
        isProxyEnabled = false;
      }

      // Parse custom preferred addresses (yx)
      const customPreferred = getConfigValue('yx', env.yx || env.YX);
      if (customPreferred) {
        try {
          const preferredList = customPreferred.split(',').map(item => item.trim()).filter(item => item);
          customPreferredAddressList = [];
          customPreferredDomainList = [];
          preferredList.forEach(item => {
            let nodeName = '';
            let addressPart = item;
            if (item.includes('#')) {
              const parts = item.split('#');
              addressPart = parts[0].trim();
              nodeName = parts[1].trim();
            }
            const { address, port } = parseAddressPort(addressPart);
            if (!nodeName) {
              nodeName = '自定义优选-' + address + (port ? ':' + port : '');
            }
            if (isValidAddress(address)) {
              customPreferredAddressList.push({ ip: address, port, isp: nodeName });
            } else {
              customPreferredDomainList.push({ domain: address, port, name: nodeName });
            }
          });
        } catch (err) {
          customPreferredAddressList = [];
          customPreferredDomainList = [];
        }
      }

      const downgradeControl = getConfigTextValue('qj', CONFIG_DEFAULTS.qj, env.qj || env.QJ);
      enableProxyDowngrade = !!(downgradeControl && downgradeControl.toLowerCase() === 'no');

      const tlsControl = getConfigTextValue('dkby', CONFIG_DEFAULTS.dkby, env.dkby || env.DKBY);
      disableNonTLS = !!(tlsControl && tlsControl.toLowerCase() === 'yes');

      const preferredControl = getConfigTextValue('yxby', CONFIG_DEFAULTS.yxby, env.yxby || env.YXBY);
      disablePreferred = !!(preferredControl && preferredControl.toLowerCase() === 'yes');

      enableVless = getConfigToggle('ev', true, env.ev);
      enableTrojan = getConfigToggle('et', false, env.et);
      transportPath = getConfigTextValue('tp', CONFIG_DEFAULTS.tp, env.tp);
      enableXhttp = getConfigToggle('ex', false, env.ex);
      subscriptionConverterUrl = getConfigTextValue('scu', CONFIG_DEFAULTS.scu, env.scu);
      enablePreferredDomain = getConfigToggle('epd', true, env.epd || env.EPD);
      enablePreferredIP = getConfigToggle('epi', true, env.epi || env.EPI);
      enableGitHubPreferred = getConfigToggle('egi', true, env.egi || env.EGI);
      enableNativeAddress = getConfigToggle('ena', false, env.ena || env.ENA);
      enableECH = getConfigToggle('ech', false, env.ech || env.ECH);

      // Load custom DNS and ECH domain config
      customDNS = getConfigTextValue('customDNS', CONFIG_DEFAULTS.customDNS).trim() || CONFIG_DEFAULTS.customDNS;
      customECHDomain = getConfigTextValue('customECHDomain', CONFIG_DEFAULTS.customECHDomain).trim() || CONFIG_DEFAULTS.customECHDomain;
      customALPN = normalizeAlpn(getConfigTextValue('alpn', CONFIG_DEFAULTS.alpn, env.alpn || env.ALPN));

      // If ECH is enabled, force TLS-only mode (ECH requires TLS; avoid port 80 interference)
      if (enableECH) {
        disableNonTLS = true;
        const currentDkby = getConfigValue('dkby', '');
        if (currentDkby !== 'yes') {
          await setConfigValue('dkby', 'yes');
        }
      }

      if (!enableVless && !enableTrojan && !enableXhttp) {
        enableVless = true;
      }

      preferredAddressSource = getConfigTextValue('yxURL', CONFIG_DEFAULTS.yxURL, env.yxURL || env.YXURL);
      customPath = getConfigTextValue('d', CONFIG_DEFAULTS.d, env.d || env.D);

      const url = new URL(request.url);

      // ---- /api/config endpoint ----
      if (url.pathname.includes('/api/config')) {
        const segments = url.pathname.split('/').filter(seg => seg);
        const apiIndex = segments.indexOf('api');
        if (apiIndex > 0) {
          const prefixSegments = segments.slice(0, apiIndex);
          const prefixPath = prefixSegments.join('/');
          let isValid = false;
          if (customPath && customPath.trim()) {
            const cleanCustomPath = customPath.trim().startsWith('/') ? customPath.trim().substring(1) : customPath.trim();
            isValid = prefixPath === cleanCustomPath;
          } else {
            isValid = isValidUuidFormat(prefixPath) && prefixPath === AUTH_UUID;
          }
          if (isValid) {
            return await handleConfigApi(request, env);
          }
          return new Response(JSON.stringify({ error: '路径验证失败' }), {
            status: 403, headers: { 'Content-Type': 'application/json' }
          });
        }
        return new Response(JSON.stringify({ error: '无效的API路径' }), {
          status: 404, headers: { 'Content-Type': 'application/json' }
        });
      }

      // ---- /api/preferred-ips endpoint ----
      if (url.pathname.includes('/api/preferred-ips')) {
        const segments = url.pathname.split('/').filter(seg => seg);
        const apiIndex = segments.indexOf('api');
        if (apiIndex > 0) {
          const prefixSegments = segments.slice(0, apiIndex);
          const prefixPath = prefixSegments.join('/');
          let isValid = false;
          if (customPath && customPath.trim()) {
            const cleanCustomPath = customPath.trim().startsWith('/') ? customPath.trim().substring(1) : customPath.trim();
            isValid = prefixPath === cleanCustomPath;
          } else {
            isValid = isValidUuidFormat(prefixPath) && prefixPath === AUTH_UUID;
          }
          if (isValid) {
            return await handlePreferredIpsApi(request);
          }
          return new Response(JSON.stringify({ error: '路径验证失败' }), {
            status: 403, headers: { 'Content-Type': 'application/json' }
          });
        }
        return new Response(JSON.stringify({ error: '无效的API路径' }), {
          status: 404, headers: { 'Content-Type': 'application/json' }
        });
      }

      // ---- XHTTP (extended transport) POST handling ----
      if (request.method === 'POST' && enableXhttp) {
        const xhttpResult = await handleXhttpRequest(request);
        if (xhttpResult) {
          ctx.waitUntil(xhttpResult.closed);
          return new Response(xhttpResult.readable, {
            headers: {
              'X-Accel-Buffering': 'no',
              'Cache-Control': 'no-store',
              Connection: 'keep-alive',
              'User-Agent': 'Go-http-client/2.0',
              'Content-Type': 'application/grpc'
            }
          });
        }
        return new Response('Internal Server Error', { status: 500 });
      }

      // ---- WebSocket upgrade ----
      if (request.headers.get('Upgrade') === atob('d2Vic29ja2V0')) {
        return await handleWebSocketRequest(request);
      }

      // ---- GET routes ----
      if (request.method === 'GET') {
        // /{UUID}/region or /{customPath}/region
        if (url.pathname.endsWith('/region')) {
          const segments = url.pathname.split('/').filter(seg => seg);
          if (segments.length === 2 && segments[1] === 'region') {
            const prefixPath = segments[0];
            let isValid = false;
            if (customPath && customPath.trim()) {
              const cleanCustomPath = customPath.trim().startsWith('/') ? customPath.trim().substring(1) : customPath.trim();
              isValid = prefixPath === cleanCustomPath;
            } else {
              isValid = isValidUuidFormat(prefixPath) && prefixPath === AUTH_UUID;
            }
            if (isValid) {
              const proxyConfig = getConfigValue('p', env.p || env.P);
              const manualRegionValue = getConfigValue('wk', env.wk || env.WK);
              if (manualRegionValue && manualRegionValue.trim()) {
                return new Response(JSON.stringify({
                  region: manualRegionValue.trim().toUpperCase(),
                  detectionMethod: '手动指定地区',
                  manualRegion: manualRegionValue.trim().toUpperCase(),
                  timestamp: new Date().toISOString()
                }), { headers: { 'Content-Type': 'application/json' } });
              } else if (proxyConfig && proxyConfig.trim()) {
                return new Response(JSON.stringify({
                  region: 'CUSTOM',
                  detectionMethod: decodeBase64('6Ieq5a6a5LmJUHJveHlJUOaooeW8jw=='),
                  ci: proxyConfig,
                  timestamp: new Date().toISOString()
                }), { headers: { 'Content-Type': 'application/json' } });
              } else {
                const region = await detectWorkerRegion(request);
                return new Response(JSON.stringify({
                  region,
                  detectionMethod: 'API检测',
                  timestamp: new Date().toISOString()
                }), { headers: { 'Content-Type': 'application/json' } });
              }
            }
            return new Response(JSON.stringify({ error: '访问被拒绝', message: '路径验证失败' }), {
              status: 403, headers: { 'Content-Type': 'application/json' }
            });
          }
        }

        // /{UUID}/test-api or /{customPath}/test-api
        if (url.pathname.endsWith('/test-api')) {
          const segments = url.pathname.split('/').filter(seg => seg);
          if (segments.length === 2 && segments[1] === 'test-api') {
            const prefixPath = segments[0];
            let isValid = false;
            if (customPath && customPath.trim()) {
              const cleanCustomPath = customPath.trim().startsWith('/') ? customPath.trim().substring(1) : customPath.trim();
              isValid = prefixPath === cleanCustomPath;
            } else {
              isValid = isValidUuidFormat(prefixPath) && prefixPath === AUTH_UUID;
            }
            if (isValid) {
              try {
                const testRegion = await detectWorkerRegion(request);
                return new Response(JSON.stringify({
                  detectedRegion: testRegion,
                  message: 'API测试完成',
                  timestamp: new Date().toISOString()
                }), { headers: { 'Content-Type': 'application/json' } });
              } catch (err) {
                return new Response(JSON.stringify({ error: err.message, message: 'API测试失败' }), {
                  status: 500, headers: { 'Content-Type': 'application/json' }
                });
              }
            }
            return new Response(JSON.stringify({ error: '访问被拒绝', message: '路径验证失败' }), {
              status: 403, headers: { 'Content-Type': 'application/json' }
            });
          }
        }

        // Root path: custom homepage or default terminal page
        if (url.pathname === '/') {
          const customHomepage = getConfigValue('homepage', env.homepage || env.HOMEPAGE);
          if (customHomepage && customHomepage.trim()) {
            try {
              const homeResponse = await fetch(customHomepage.trim(), {
                method: 'GET',
                headers: {
                  'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0',
                  'Accept': request.headers.get('Accept') || '*/*',
                  'Accept-Language': request.headers.get('Accept-Language') || 'en-US,en;q=0.9'
                },
                redirect: 'follow'
              });
              if (homeResponse.ok) {
                const contentType = homeResponse.headers.get('Content-Type') || 'text/html; charset=utf-8';
                const content = await homeResponse.text();
                return new Response(content, {
                  status: homeResponse.status,
                  headers: {
                    'Content-Type': contentType,
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                  }
                });
              }
            } catch (err) {
              console.error('获取自定义首页失败:', err);
            }
          }

          // Language detection: Cookie first, then Accept-Language
          const cookieHeader = request.headers.get('Cookie') || '';
          let cookieLang = null;
          if (cookieHeader) {
            const cookies = cookieHeader.split(';').map(c => c.trim());
            for (const cookie of cookies) {
              if (cookie.startsWith('preferredLanguage=')) {
                cookieLang = cookie.split('=')[1];
                break;
              }
            }
          }

          let isPersian = false;
          if (cookieLang === 'fa' || cookieLang === 'fa-IR') {
            isPersian = true;
          } else if (cookieLang === 'zh' || cookieLang === 'zh-CN') {
            isPersian = false;
          } else {
            const acceptLang = request.headers.get('Accept-Language') || '';
            const browserLang = acceptLang.split(',')[0].split('-')[0].toLowerCase();
            isPersian = browserLang === 'fa' || acceptLang.includes('fa-IR') || acceptLang.includes('fa');
          }

          // NOTE: The terminal entry page UI is rebuilt in Part 5 (Glassmorphism).
          // The original Matrix terminal HTML is intentionally omitted here.
          return await renderEntryPage(isPersian, customPath);
        }

        // Subscription routes (custom path mode)
        if (customPath && customPath.trim()) {
          const cleanCustomPath = customPath.trim().startsWith('/') ? customPath.trim() : '/' + customPath.trim();
          const normalizedCustomPath = cleanCustomPath.endsWith('/') && cleanCustomPath.length > 1 ? cleanCustomPath.slice(0, -1) : cleanCustomPath;
          const normalizedPath = url.pathname.endsWith('/') && url.pathname.length > 1 ? url.pathname.slice(0, -1) : url.pathname;

          if (normalizedPath === normalizedCustomPath) {
            return await handleSubscriptionPage(request, AUTH_UUID);
          }
          if (normalizedPath === normalizedCustomPath + '/sub') {
            return await handleSubscriptionRequest(request, AUTH_UUID, url);
          }
          if (url.pathname.length > 1 && url.pathname !== '/') {
            const user = url.pathname.replace(/\/$/, '').replace('/sub', '').substring(1);
            if (isValidUuidFormat(user)) {
              return new Response(JSON.stringify({
                error: '访问被拒绝',
                message: '当前 Worker 已启用自定义路径模式，UUID 访问已禁用'
              }), { status: 403, headers: { 'Content-Type': 'application/json' } });
            }
          }
        } else {
          // UUID mode
          if (url.pathname.length > 1 && url.pathname !== '/' && !url.pathname.includes('/sub')) {
            const user = url.pathname.replace(/\/$/, '').substring(1);
            if (isValidUuidFormat(user)) {
              if (user === AUTH_UUID) {
                return await handleSubscriptionPage(request, user);
              }
              return new Response(JSON.stringify({ error: 'UUID错误 请注意变量名称是u不是uuid' }), {
                status: 403, headers: { 'Content-Type': 'application/json' }
              });
            }
          }
          if (url.pathname.includes('/sub')) {
            const segments = url.pathname.split('/');
            if (segments.length === 2 && segments[1] === 'sub') {
              const user = segments[0].substring(1);
              if (isValidUuidFormat(user)) {
                if (user === AUTH_UUID) {
                  return await handleSubscriptionRequest(request, user, url);
                }
                return new Response(JSON.stringify({ error: 'UUID错误' }), {
                  status: 403, headers: { 'Content-Type': 'application/json' }
                });
              }
            }
          }
        }

        if (url.pathname.toLowerCase().includes(`/${pathValue}`)) {
          return await handleSubscriptionRequest(request, AUTH_UUID);
        }
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), {
        status: 404, headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(err.toString(), { status: 500 });
    }
  }
};
// ============================================================
// Byte helpers
// ============================================================
function toUint8Array(chunk) {
  if (chunk instanceof Uint8Array) return chunk;
  if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
  if (ArrayBuffer.isView(chunk)) return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  return new Uint8Array(chunk);
}

function concatUint8Arrays(head, body) {
  const a = toUint8Array(head);
  const b = toUint8Array(body);
  const out = new Uint8Array(a.byteLength + b.byteLength);
  out.set(a);
  out.set(b, a.byteLength);
  return out;
}

// ============================================================
// Upload chunk queue (bounded, coalescing)
// ============================================================
function createChunkQueue(targetSize, maxBytes = targetSize, maxItems = Math.max(1, maxBytes >> 8)) {
  let queue = [];
  let head = 0;
  let queuedBytes = 0;
  let scratch = null;

  function compact() {
    if (head > 32 && head * 2 >= queue.length) {
      queue = queue.slice(head);
      head = 0;
    }
  }

  function shift() {
    if (head >= queue.length) return null;
    const data = queue[head];
    queue[head++] = undefined;
    queuedBytes -= data.byteLength;
    compact();
    return data;
  }

  return {
    get empty() {
      return head >= queue.length;
    },
    clear() {
      queue = [];
      head = 0;
      queuedBytes = 0;
    },
    sow(data) {
      const len = data?.byteLength || 0;
      if (!len) return true;
      if (queuedBytes + len > maxBytes || queue.length - head >= maxItems) return false;
      queue.push(data);
      queuedBytes += len;
      return true;
    },
    bundle(seed = null) {
      seed ||= shift();
      if (!seed || head >= queue.length || seed.byteLength >= targetSize) return [seed, false];
      let total = seed.byteLength;
      let end = head;
      while (end < queue.length) {
        const next = queue[end];
        const combined = total + next.byteLength;
        if (combined > targetSize) break;
        total = combined;
        end++;
      }
      if (end === head) return [seed, false];
      const out = scratch ||= new Uint8Array(targetSize);
      out.set(seed);
      let offset = seed.byteLength;
      while (head < end) {
        const item = queue[head];
        queue[head++] = undefined;
        queuedBytes -= item.byteLength;
        out.set(item, offset);
        offset += item.byteLength;
      }
      compact();
      return [out.subarray(0, total), true];
    }
  };
}

// ============================================================
// Download batcher (coalesces small frames before WS send)
// ============================================================
function createDownloadBatcher(webSocket) {
  const packetSize = DOWNLOAD_PACKET_SIZE;
  const tail = DOWNLOAD_TAIL;
  const idleThreshold = Math.max(4096, tail << 3);
  let buffer = new Uint8Array(packetSize);
  let used = 0;
  let timer = 0;
  let scheduled = false;
  let tick = 0;
  let tickKey = 0;
  let deferCount = 0;

  function flush() {
    if (timer) clearTimeout(timer);
    timer = 0;
    scheduled = false;
    if (!used) return;
    if (webSocket.readyState === 1) webSocket.send(buffer.subarray(0, used).slice());
    buffer = new Uint8Array(packetSize);
    used = 0;
    deferCount = 0;
  }

  function schedule() {
    if (timer || scheduled) return;
    scheduled = true;
    tickKey = tick;
    queueMicrotask(() => {
      scheduled = false;
      if (!used || timer) return;
      if (packetSize - used < tail) return flush();
      timer = setTimeout(() => {
        timer = 0;
        if (!used) return;
        if (packetSize - used < tail) return flush();
        if (deferCount < 2 && (tick !== tickKey || used < idleThreshold)) {
          deferCount++;
          tickKey = tick;
          return schedule();
        }
        flush();
      }, Math.max(DOWNLOAD_DELAY, 1));
    });
  }

  return {
    send(chunk) {
      const data = toUint8Array(chunk);
      let offset = 0;
      const len = data.byteLength;
      if (!len) return;
      while (offset < len) {
        if (!used && len - offset >= packetSize) {
          const size = Math.min(packetSize, len - offset);
          if (webSocket.readyState === 1) {
            webSocket.send(offset || size !== len ? data.subarray(offset, offset + size) : data);
          }
          offset += size;
          continue;
        }
        const size = Math.min(packetSize - used, len - offset);
        buffer.set(data.subarray(offset, offset + size), used);
        used += size;
        offset += size;
        tick++;
        if (used === packetSize || packetSize - used < tail) flush();
        else schedule();
      }
    },
    flush
  };
}

// ============================================================
// Socket open / connect (with racing)
// ============================================================
function openSocket(address, port, fetcher = null) {
  const target = { hostname: address, port };
  if (fetcher && typeof fetcher.connect === 'function') return fetcher.connect(target);
  return connect(target);
}

async function openSocketSafe(address, port, fetcher = null) {
  try {
    const socket = openSocket(address, port, fetcher);
    if (socket?.opened) await socket.opened;
    return socket;
  } catch (err) {
    if (!fetcher) throw err;
    const socket = connect({ hostname: address, port });
    if (socket?.opened) await socket.opened;
    return socket;
  }
}

async function connectSocket(address, port, fetcher = null, raceCount = 1) {
  const count = Math.max(1, raceCount | 0);
  if (count <= 1) return openSocketSafe(address, port, fetcher);
  const attempts = Array.from({ length: count }, () => openSocketSafe(address, port, fetcher));
  const winner = await Promise.any(attempts);
  attempts.forEach(p => {
    p.then(sock => {
      if (sock !== winner) {
        try { sock.close(); } catch (ignored) {}
      }
    }, () => {});
  });
  return winner;
}

// ============================================================
// UUID byte matching
// ============================================================
function getUuidBytes(token) {
  if (uuidBytesCache.has(token)) return uuidBytesCache.get(token);
  const hex = String(token || '').replace(/-/g, '');
  if (hex.length !== 32) return null;
  const bytes = new Uint8Array(16);
  for (let i = 0; i < 16; i++) {
    const value = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    if (Number.isNaN(value)) return null;
    bytes[i] = value;
  }
  if (uuidBytesCache.size > 16) uuidBytesCache.clear();
  uuidBytesCache.set(token, bytes);
  return bytes;
}

function matchUuidAt(bytes, offset, token) {
  const id = getUuidBytes(token);
  return !!id &&
    bytes[offset] === id[0] && bytes[offset + 1] === id[1] &&
    bytes[offset + 2] === id[2] && bytes[offset + 3] === id[3] &&
    bytes[offset + 4] === id[4] && bytes[offset + 5] === id[5] &&
    bytes[offset + 6] === id[6] && bytes[offset + 7] === id[7] &&
    bytes[offset + 8] === id[8] && bytes[offset + 9] === id[9] &&
    bytes[offset + 10] === id[10] && bytes[offset + 11] === id[11] &&
    bytes[offset + 12] === id[12] && bytes[offset + 13] === id[13] &&
    bytes[offset + 14] === id[14] && bytes[offset + 15] === id[15];
}

// ============================================================
// VLESS WebSocket header parser
// ============================================================
function parseVlessWsHeader(chunk, token) {
  const bytes = toUint8Array(chunk);
  if (bytes.byteLength < 24) return { hasError: true, message: ERR_INVALID_DATA };

  const version = bytes.subarray(0, 1);
  if (!matchUuidAt(bytes, 1, token)) return { hasError: true, message: ERR_INVALID_USER };

  const addonsLen = bytes[17];
  const commandIndex = 18 + addonsLen;
  if (bytes.byteLength < commandIndex + 5) return { hasError: true, message: ERR_INVALID_DATA };

  const command = bytes[commandIndex];
  let isUDP = false;
  if (command === 1) {
    // TCP
  } else if (command === 2) {
    isUDP = true;
  } else {
    return { hasError: true, message: ERR_UNSUPPORTED_COMMAND };
  }

  const portIndex = 19 + addonsLen;
  const port = bytes[portIndex] << 8 | bytes[portIndex + 1];

  let addressIndex = portIndex + 2;
  let addressLength = 0;
  let valueIndex = addressIndex + 1;
  let hostname = '';
  const addressType = bytes[addressIndex];

  switch (addressType) {
    case ADDR_TYPE_IPV4:
      addressLength = 4;
      if (bytes.byteLength < valueIndex + addressLength) return { hasError: true, message: ERR_INVALID_DATA };
      hostname = `${bytes[valueIndex]}.${bytes[valueIndex + 1]}.${bytes[valueIndex + 2]}.${bytes[valueIndex + 3]}`;
      break;
    case ADDR_TYPE_DOMAIN:
      if (bytes.byteLength < valueIndex + 1) return { hasError: true, message: ERR_INVALID_DATA };
      addressLength = bytes[valueIndex++];
      if (bytes.byteLength < valueIndex + addressLength) return { hasError: true, message: ERR_INVALID_DATA };
      hostname = sharedDecoder.decode(bytes.subarray(valueIndex, valueIndex + addressLength));
      break;
    case ADDR_TYPE_IPV6: {
      addressLength = 16;
      if (bytes.byteLength < valueIndex + addressLength) return { hasError: true, message: ERR_INVALID_DATA };
      const groups = [];
      const view = new DataView(bytes.buffer, bytes.byteOffset + valueIndex, addressLength);
      for (let i = 0; i < 8; i++) groups.push(view.getUint16(i * 2).toString(16));
      hostname = groups.join(':');
      break;
    }
    default:
      return { hasError: true, message: `${ERR_INVALID_ADDRESS_TYPE}: ${addressType}` };
  }

  if (!hostname) return { hasError: true, message: `${ERR_EMPTY_ADDRESS}: ${addressType}` };

  return {
    hasError: false,
    addressType,
    port,
    hostname,
    isUDP,
    rawIndex: valueIndex + addressLength,
    version
  };
}

// ============================================================
// WebSocket → ReadableStream (with early-data support)
// ============================================================
function makeWebSocketStream(socket, earlyDataHeader) {
  let cancelled = false;
  return new ReadableStream({
    start(controller) {
      socket.addEventListener('message', event => {
        if (!cancelled) controller.enqueue(toUint8Array(event.data));
      });
      socket.addEventListener('close', () => {
        if (!cancelled) {
          closeSocketSafe(socket);
          controller.close();
        }
      });
      socket.addEventListener('error', err => controller.error(err));
      const { earlyData, error } = decodeBase64ToArray(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(toUint8Array(earlyData));
    },
    cancel() {
      cancelled = true;
      closeSocketSafe(socket);
    }
  });
}

// ============================================================
// Remote → WebSocket relay (with first-byte timeout retry)
// ============================================================
async function relayConnection(remoteSocket, webSocket, headerData, retryCallback) {
  let header = headerData;
  let hasData = false;
  let retried = false;

  // Key: direct connect may handshake but yield no data for a long time;
  // a timeout triggers the downgrade/retry path.
  let firstByteTimer = null;
  if (retryCallback) {
    firstByteTimer = setTimeout(() => {
      if (!hasData && !retried) {
        retried = true;
        try { remoteSocket.close && remoteSocket.close(); } catch (ignored) {}
        retryCallback();
      }
    }, FIRST_BYTE_TIMEOUT);
  }

  const batcher = createDownloadBatcher(webSocket);
  let reader = null;
  let byob = true;
  let buffer = new ArrayBuffer(TRANSPORT_CHUNK_SIZE);

  try {
    try {
      reader = remoteSocket.readable.getReader({ mode: 'byob' });
    } catch (ignored) {
      byob = false;
      reader = remoteSocket.readable.getReader();
    }

    for (;;) {
      const result = byob
        ? await reader.read(new Uint8Array(buffer, 0, TRANSPORT_CHUNK_SIZE))
        : await reader.read();
      if (result.done) break;

      const readValue = result.value;
      let chunk = toUint8Array(readValue);
      const reuseBuffer = byob && readValue?.buffer instanceof ArrayBuffer && readValue.buffer.byteLength >= TRANSPORT_CHUNK_SIZE
        ? readValue.buffer
        : new ArrayBuffer(TRANSPORT_CHUNK_SIZE);

      if (!chunk.byteLength) continue;

      if (!hasData) {
        hasData = true;
        if (firstByteTimer) {
          clearTimeout(firstByteTimer);
          firstByteTimer = null;
        }
      }

      if (webSocket.readyState !== 1) throw new Error(ERR_WS_NOT_OPEN);

      if (header) {
        chunk = concatUint8Arrays(header, chunk);
        header = null;
      }

      if (chunk.byteLength >= TRANSPORT_CHUNK_SIZE >> 1) {
        batcher.flush();
        webSocket.send(chunk);
        if (byob) buffer = new ArrayBuffer(TRANSPORT_CHUNK_SIZE);
      } else {
        batcher.send(chunk.slice());
        if (byob) buffer = reuseBuffer;
      }
    }
    batcher.flush();
  } catch (err) {
    // Don't close the WS if retry already fired (retry re-attaches a new socket)
    if (!retried) closeSocketSafe(webSocket);
  } finally {
    try { batcher.flush(); } catch (ignored) {}
    try { reader?.releaseLock(); } catch (ignored) {}
  }

  if (firstByteTimer) {
    clearTimeout(firstByteTimer);
    firstByteTimer = null;
  }
  if (!hasData && !retried && retryCallback) retryCallback();
}

// ============================================================
// UDP / DNS passthrough
// ============================================================
async function handleUdpDatagram(udpChunk, webSocket, header, fetcher = null) {
  try {
    const socket = await connectSocket('8.8.4.4', 53, fetcher, 1);
    const writer = socket.writable.getWriter();
    await writer.write(udpChunk);
    writer.releaseLock();
    await relayConnection(socket, webSocket, header, null);
  } catch (err) {}
}

// ============================================================
// SOCKS5 upstream proxy
// ============================================================
async function connectViaSocks5(addressType, address, port, proxyConfig = parsedSocks5Config) {
  const { username, password, hostname, socksPort } = proxyConfig;
  const socket = connect({ hostname, port: socksPort });
  const writer = socket.writable.getWriter();

  await writer.write(new Uint8Array(username ? [5, 2, 0, 2] : [5, 1, 0]));
  const reader = socket.readable.getReader();
  let reply = (await reader.read()).value;

  if (reply[0] !== 5 || reply[1] === 255) throw new Error(ERR_SOCKS_NO_METHODS);

  if (reply[1] === 2) {
    if (!username || !password) throw new Error(ERR_SOCKS_NEEDS_AUTH);
    const encoder = new TextEncoder();
    const authRequest = new Uint8Array([1, username.length, ...encoder.encode(username), password.length, ...encoder.encode(password)]);
    await writer.write(authRequest);
    reply = (await reader.read()).value;
    if (reply[0] !== 1 || reply[1] !== 0) throw new Error(ERR_SOCKS_AUTH_FAILED);
  }

  const encoder = new TextEncoder();
  let addressBytes;
  switch (addressType) {
    case ADDR_TYPE_IPV4:
      addressBytes = new Uint8Array([1, ...address.split('.').map(Number)]);
      break;
    case ADDR_TYPE_DOMAIN:
      addressBytes = new Uint8Array([3, address.length, ...encoder.encode(address)]);
      break;
    case ADDR_TYPE_IPV6:
      addressBytes = new Uint8Array([4, ...address.split(':').flatMap(h => [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2), 16)])]);
      break;
    default:
      throw new Error(ERR_INVALID_ADDRESS_TYPE);
  }

  await writer.write(new Uint8Array([5, 1, 0, ...addressBytes, port >> 8, port & 255]));
  reply = (await reader.read()).value;
  if (reply[1] !== 0) throw new Error(ERR_SOCKS_CONNECT_FAILED);

  writer.releaseLock();
  reader.releaseLock();
  return socket;
}

function parseSocksConfig(input) {
  let [hostPart, authPart] = input.split('@').reverse();
  let username, password, hostname, socksPort;

  if (authPart) {
    const authFields = authPart.split(':');
    if (authFields.length !== 2) throw new Error(ERR_INVALID_SOCKS_ADDRESS);
    [username, password] = authFields;
  }

  const hostFields = hostPart.split(':');
  socksPort = Number(hostFields.pop());
  if (isNaN(socksPort)) throw new Error(ERR_INVALID_SOCKS_ADDRESS);
  hostname = hostFields.join(':');
  if (hostname.includes(':') && !/^\[.*\]$/.test(hostname)) throw new Error(ERR_INVALID_SOCKS_ADDRESS);

  return { username, password, hostname, socksPort };
}

// ============================================================
// Remote connect with fallback / downgrade / retry
// ============================================================
async function connectRemote(addressType, host, portNumber, rawData, webSocket, header, remoteRef, requestFallback = '', requestRegion = '', requestRegionMatch = null, requestProxyConfig = null, fetcher = null) {
  // Prefer client path params, then fall back to global config
  const effectiveFallback = requestFallback || fallbackAddress;
  const effectiveRegion = requestRegion || currentWorkerRegion;
  const effectiveRegionMatch = requestRegionMatch !== null ? requestRegionMatch : enableRegionMatching;
  const effectiveProxyConfig = requestProxyConfig || parsedSocks5Config;
  const effectiveProxyEnabled = requestProxyConfig ? true : isProxyEnabled;

  const initialData = toUint8Array(rawData);

  async function connectAndSend(address, port, viaProxy = false) {
    const remoteSock = viaProxy
      ? await connectViaSocks5(addressType, address, port, effectiveProxyConfig)
      : await connectSocket(address, port, fetcher, CONNECT_RACE_COUNT);
    const writer = remoteSock.writable.getWriter();
    if (initialData.byteLength) await writer.write(initialData);
    return { remoteSock, writer };
  }

  function detachCurrent(remoteSock, writer) {
    if (remoteRef.socket !== remoteSock) return;
    try { writer?.releaseLock(); } catch (ignored) {}
    remoteRef.socket = null;
    remoteRef.writer = null;
  }

  function attachRemote(remoteSock, writer, retryCallback) {
    try {
      if (remoteRef.writer && remoteRef.writer !== writer) remoteRef.writer.releaseLock();
    } catch (ignored) {}
    remoteRef.socket = remoteSock;
    remoteRef.writer = writer;
    remoteRef.drainUpload?.();

    remoteSock.closed.catch(() => {}).finally(() => {
      if (remoteRef.socket === remoteSock) closeSocketSafe(webSocket);
    });

    relayConnection(remoteSock, webSocket, header, retryCallback).finally(() => {
      if (remoteRef.socket === remoteSock) {
        try { writer.releaseLock(); } catch (ignored) {}
        remoteRef.writer = null;
      }
    });
  }

  async function handleRetry() {
    if (enableProxyDowngrade && effectiveProxyEnabled) {
      try {
        const { remoteSock: proxySock, writer: proxyWriter } = await connectAndSend(host, portNumber, true);
        attachRemote(proxySock, proxyWriter, null);
        return;
      } catch (proxyErr) {
        let backupHost, backupPort;
        if (effectiveFallback && effectiveFallback.trim()) {
          const parsed = parseAddressPort(effectiveFallback);
          backupHost = parsed.address;
          backupPort = parsed.port || portNumber;
        } else {
          const backup = await getBackupAddress(effectiveRegion, effectiveRegionMatch);
          backupHost = backup ? backup.domain : host;
          backupPort = backup ? backup.port : portNumber;
        }
        try {
          const { remoteSock: fbSock, writer: fbWriter } = await connectAndSend(backupHost, backupPort, false);
          attachRemote(fbSock, fbWriter, null);
        } catch (fbErr) {
          closeSocketSafe(webSocket);
        }
      }
    } else {
      let backupHost, backupPort;
      if (effectiveFallback && effectiveFallback.trim()) {
        const parsed = parseAddressPort(effectiveFallback);
        backupHost = parsed.address;
        backupPort = parsed.port || portNumber;
      } else {
        const backup = await getBackupAddress(effectiveRegion, effectiveRegionMatch);
        backupHost = backup ? backup.domain : host;
        backupPort = backup ? backup.port : portNumber;
      }
      try {
        const { remoteSock: fbSock, writer: fbWriter } = await connectAndSend(backupHost, backupPort, effectiveProxyEnabled);
        attachRemote(fbSock, fbWriter, null);
      } catch (fbErr) {
        closeSocketSafe(webSocket);
      }
    }
  }

  try {
    const { remoteSock: sock, writer } = await connectAndSend(host, portNumber, enableProxyDowngrade ? false : effectiveProxyEnabled);
    attachRemote(sock, writer, () => {
      detachCurrent(sock, writer);
      handleRetry();
    });
  } catch (err) {
    await handleRetry();
  }
}

// ============================================================
// WebSocket request handler (VLESS / Trojan detection)
// ============================================================
async function handleWebSocketRequest(request) {
  // Read client override params from the request URL path query
  const requestUrl = new URL(request.url);
  const requestFallback = requestUrl.searchParams.get('p') || '';
  const requestRegion = (requestUrl.searchParams.get('wk') || '').toUpperCase();
  const requestRegionMatchStr = requestUrl.searchParams.get('rm') || '';
  const requestRegionMatch = requestRegionMatchStr ? requestRegionMatchStr.toLowerCase() !== 'no' : null;
  const requestProxyStr = requestUrl.searchParams.get('s') || '';
  let requestProxyConfig = null;
  if (requestProxyStr) {
    try { requestProxyConfig = parseSocksConfig(requestProxyStr); } catch (ignored) {}
  }

  // Resolve the effective region for this connection.
  // Priority: client path param wk > global manualWorkerRegion > auto-detect
  let effectiveRegion = currentWorkerRegion;
  if (!effectiveRegion || effectiveRegion === '') {
    if (requestRegion) {
      effectiveRegion = requestRegion;
    } else if (manualWorkerRegion && manualWorkerRegion.trim()) {
      effectiveRegion = manualWorkerRegion.trim().toUpperCase();
    } else {
      effectiveRegion = await detectWorkerRegion(request);
    }
  } else if (requestRegion) {
    effectiveRegion = requestRegion;
  }

  const wsPair = new WebSocketPair();
  const [clientWs, serverWs] = Object.values(wsPair);
  serverWs.accept();
  serverWs.binaryType = 'arraybuffer';

  let remoteRef = { socket: null, writer: null, drainUpload: null };
  let isDnsMode = false;
  let protocolType = null;
  let draining = false;
  let closed = false;

  const uploadQueue = createChunkQueue(UPLOAD_PACKET_SIZE, UPLOAD_QUEUE_LIMIT, UPLOAD_QUEUE_LIMIT >> 8);
  const fetcher = request.fetcher;

  function releaseRemoteWriter() {
    try { remoteRef.writer?.releaseLock(); } catch (ignored) {}
    remoteRef.writer = null;
  }

  function closeAll() {
    if (closed) return;
    closed = true;
    uploadQueue.clear();
    releaseRemoteWriter();
    try { remoteRef.socket?.close(); } catch (ignored) {}
    closeSocketSafe(serverWs);
  }

  function enqueueUpload(chunk) {
    const data = toUint8Array(chunk);
    if (!data.byteLength) return true;
    if (!uploadQueue.sow(data)) {
      closeAll();
      return false;
    }
    remoteRef.drainUpload();
    return true;
  }

  async function drainUploadQueue() {
    if (draining || closed || !remoteRef.writer) return;
    draining = true;
    try {
      for (;;) {
        if (closed || !remoteRef.writer) break;
        const [data] = uploadQueue.bundle();
        if (!data) break;
        await remoteRef.writer.write(data);
      }
    } catch (ignored) {
      closeAll();
    } finally {
      draining = false;
      if (!uploadQueue.empty && !closed && remoteRef.writer) queueMicrotask(drainUploadQueue);
    }
  }

  remoteRef.drainUpload = () => {
    if (!draining && !uploadQueue.empty && remoteRef.writer) queueMicrotask(drainUploadQueue);
  };

  const earlyDataHeader = request.headers.get(atob('c2VjLXdlYnNvY2tldC1wcm90b2NvbA==')) || '';
  const readable = makeWebSocketStream(serverWs, earlyDataHeader);

  readable.pipeTo(new WritableStream({
    async write(chunk) {
      if (closed) return;
      const data = toUint8Array(chunk);

      if (isDnsMode) return await handleUdpDatagram(data, serverWs, null, fetcher);

      if (remoteRef.socket && remoteRef.writer) {
        if (!enqueueUpload(data)) throw new Error('upload queue overflow');
        return;
      }
      if (protocolType) {
        if (!enqueueUpload(data)) throw new Error('upload queue overflow');
        return;
      }

      if (!protocolType) {
        // Try VLESS first
        if (enableVless && data.byteLength >= 24) {
          const vlessResult = parseVlessWsHeader(data, AUTH_UUID);
          if (!vlessResult.hasError) {
            protocolType = decodeBase64('dmxlc3M=');
            const { addressType, port, hostname, rawIndex, version, isUDP } = vlessResult;
            if (isUDP) {
              if (port === 53) isDnsMode = true;
              else throw new Error(ERR_UDP_DNS_ONLY);
            }
            const responseHeader = new Uint8Array([version[0], 0]);
            const rawClientData = data.subarray(rawIndex);
            if (isDnsMode) return handleUdpDatagram(rawClientData, serverWs, responseHeader, fetcher);
            await connectRemote(addressType, hostname, port, rawClientData, serverWs, responseHeader, remoteRef, requestFallback, effectiveRegion, requestRegionMatch, requestProxyConfig, fetcher);
            return;
          }
        }
        // Then try Trojan
        if (enableTrojan && data.byteLength >= 56) {
          const trojanResult = await parseTrojanHeader(data, AUTH_UUID);
          if (!trojanResult.hasError) {
            protocolType = atob('dHJvamFu');
            const { addressType, port, hostname, rawClientData } = trojanResult;
            await connectRemote(addressType, hostname, port, rawClientData, serverWs, null, remoteRef, requestFallback, effectiveRegion, requestRegionMatch, requestProxyConfig, fetcher);
            return;
          }
        }
        throw new Error('Invalid protocol or authentication failed');
      }
    }
  })).catch(err => {
    closeAll();
  });

  return new Response(null, { status: 101, webSocket: clientWs });
}

// ============================================================
// Trojan header parser (SHA-224 password)
// ============================================================
async function parseTrojanHeader(buffer, token) {
  const bytes = toUint8Array(buffer);
  const passwordSource = transportPath || token;
  const hashedPassword = await sha224Hex(passwordSource);

  if (bytes.byteLength < 56) {
    return { hasError: true, message: 'invalid ' + atob('dHJvamFu') + ' data - too short' };
  }

  let offset = 56;
  if (bytes[56] !== 0x0d || bytes[57] !== 0x0a) {
    return { hasError: true, message: 'invalid ' + atob('dHJvamFu') + ' header format (missing CR LF)' };
  }

  const password = sharedDecoder.decode(bytes.subarray(0, offset));
  if (password !== hashedPassword) {
    return { hasError: true, message: 'invalid ' + atob('dHJvamFu') + ' password' };
  }

  const socksBuffer = bytes.subarray(offset + 2);
  if (socksBuffer.byteLength < 6) {
    return { hasError: true, message: atob('aW52YWxpZCBTT0NLUzUgcmVxdWVzdCBkYXRh') };
  }

  const view = new DataView(socksBuffer.buffer, socksBuffer.byteOffset, socksBuffer.byteLength);
  const command = view.getUint8(0);
  if (command !== 1) {
    return { hasError: true, message: 'unsupported command, only TCP (CONNECT) is allowed' };
  }

  const addressType = view.getUint8(1);
  let addressLength = 0;
  let addressIndex = 2;
  let address = '';

  switch (addressType) {
    case 1:
      addressLength = 4;
      address = socksBuffer.subarray(addressIndex, addressIndex + addressLength).join('.');
      break;
    case 3:
      addressLength = socksBuffer[addressIndex];
      addressIndex += 1;
      address = sharedDecoder.decode(socksBuffer.subarray(addressIndex, addressIndex + addressLength));
      break;
    case 4: {
      addressLength = 16;
      const dataView = new DataView(socksBuffer.buffer, socksBuffer.byteOffset + addressIndex, addressLength);
      const groups = [];
      for (let i = 0; i < 8; i++) groups.push(dataView.getUint16(i * 2).toString(16));
      address = groups.join(':');
      break;
    }
    default:
      return { hasError: true, message: `invalid addressType is ${addressType}` };
  }

  if (!address) {
    return { hasError: true, message: `address is empty, addressType is ${addressType}` };
  }

  const portIndex = addressIndex + addressLength;
  const remotePort = new DataView(socksBuffer.buffer, socksBuffer.byteOffset + portIndex, 2).getUint16(0);

  return {
    hasError: false,
    addressRemote: address,
    addressType,
    port: remotePort,
    hostname: address,
    rawClientData: socksBuffer.subarray(portIndex + 4)
  };
}

// ============================================================
// SHA-224 (manual implementation) for Trojan password
// ============================================================
async function sha224Hex(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  let H = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];

  const messageLength = data.length;
  const bitLength = messageLength * 8;
  const paddedLength = Math.ceil((messageLength + 9) / 64) * 64;
  const padded = new Uint8Array(paddedLength);
  padded.set(data);
  padded[messageLength] = 0x80;
  const paddedView = new DataView(padded.buffer);
  paddedView.setUint32(paddedLength - 4, bitLength, false);

  for (let block = 0; block < paddedLength; block += 64) {
    const w = new Uint32Array(64);
    for (let i = 0; i < 16; i++) w[i] = paddedView.getUint32(block + i * 4, false);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[i] + w[i]) >>> 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e;
      e = (d + temp1) >>> 0;
      d = c; c = b; b = a;
      a = (temp1 + temp2) >>> 0;
    }

    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }

  const result = [];
  for (let i = 0; i < 7; i++) {
    result.push(
      ((H[i] >>> 24) & 0xff).toString(16).padStart(2, '0'),
      ((H[i] >>> 16) & 0xff).toString(16).padStart(2, '0'),
      ((H[i] >>> 8) & 0xff).toString(16).padStart(2, '0'),
      (H[i] & 0xff).toString(16).padStart(2, '0')
    );
  }
  return result.join('');
}

function rotr(value, shift) {
  return (value >>> shift) | (value << (32 - shift));
}

// ============================================================
// XHTTP (extended transport over HTTP POST)
// ============================================================
let xhttpActiveConnections = 0;
const XHTTP_BUFFER_SIZE = 128 * 1024;
const XHTTP_CONNECT_TIMEOUT = 5000;
const XHTTP_IDLE_TIMEOUT = 45000;
const XHTTP_CONNECT_RETRIES = 2;
const XHTTP_MAX_CONNECTIONS = 32;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function verifyXhttpUuid(candidate, expected) {
  for (let i = 0; i < 16; i++) {
    if (candidate[i] !== expected[i]) return false;
  }
  return true;
}

class XhttpCounter {
  #total;
  constructor() { this.#total = 0; }
  get() { return this.#total; }
  add(size) { this.#total += size; }
}

function concatTypedArrays(first, ...rest) {
  let length = first.length;
  for (const arr of rest) length += arr.length;
  const result = new first.constructor(length);
  result.set(first, 0);
  length = first.length;
  for (const arr of rest) {
    result.set(arr, length);
    length += arr.length;
  }
  return result;
}

function parseXhttpUuid(uuidStr) {
  uuidStr = uuidStr.replaceAll('-', '');
  const bytes = [];
  for (let i = 0; i < 16; i++) {
    bytes.push(parseInt(uuidStr.substr(i * 2, 2), 16));
  }
  return bytes;
}

function getXhttpBuffer(size) {
  return new Uint8Array(new ArrayBuffer(size || XHTTP_BUFFER_SIZE));
}

async function readXhttpHeader(body, uuidString) {
  const reader = body.getReader({ mode: 'byob' });
  try {
    let result = await reader.readAtLeast(1 + 16 + 1, getXhttpBuffer());
    let needed = 0;
    let index = 0;
    let cached = result.value;
    needed += result.value.length;

    const version = cached[0];
    const uuidBytes = cached.slice(1, 1 + 16);
    const expectedUuid = parseXhttpUuid(uuidString);
    if (!verifyXhttpUuid(uuidBytes, expectedUuid)) return 'invalid UUID';

    const addonsLen = cached[1 + 16];
    const commandOffset = 1 + 16 + 1 + addonsLen + 1 + 2 + 1;
    if (commandOffset + 1 > needed) {
      if (result.done) return 'header too short';
      index = commandOffset + 1 - needed;
      result = await reader.readAtLeast(index, getXhttpBuffer());
      needed += result.value.length;
      cached = concatTypedArrays(cached, result.value);
    }

    const command = cached[1 + 16 + 1 + addonsLen];
    if (command !== 1) return `unsupported command: ${command}`;

    const port = (cached[commandOffset - 1 - 2] << 8) + cached[commandOffset - 1 - 1];
    const addressType = cached[commandOffset - 1];

    let headerLength = -1;
    if (addressType === ADDR_TYPE_IPV4) headerLength = commandOffset + 4;
    else if (addressType === ADDR_TYPE_IPV6) headerLength = commandOffset + 16;
    else if (addressType === ADDR_TYPE_DOMAIN) headerLength = commandOffset + 1 + cached[commandOffset];
    if (headerLength < 0) return 'read address type failed';

    index = headerLength - needed;
    if (index > 0) {
      if (result.done) return 'read address failed';
      result = await reader.readAtLeast(index, getXhttpBuffer());
      needed += result.value.length;
      cached = concatTypedArrays(cached, result.value);
    }

    let hostname = '';
    index = commandOffset;
    switch (addressType) {
      case ADDR_TYPE_IPV4:
        hostname = cached.slice(index, index + 4).join('.');
        break;
      case ADDR_TYPE_DOMAIN:
        hostname = new TextDecoder().decode(cached.slice(index + 1, index + 1 + cached[index]));
        break;
      case ADDR_TYPE_IPV6:
        hostname = cached.slice(index, index + 16)
          .reduce((acc, val, idx, arr) => idx % 2 ? acc.concat(((arr[idx - 1] << 8) + val).toString(16)) : acc, [])
          .join(':');
        break;
    }
    if (hostname.length < 1) return 'failed to parse hostname';

    const data = cached.slice(headerLength);
    return {
      hostname,
      port,
      data,
      resp: new Uint8Array([version, 0]),
      reader,
      done: result.done
    };
  } catch (err) {
    try { reader.releaseLock(); } catch (ignored) {}
    throw err;
  }
}

async function pumpXhttpUpload(counter, writer, parsed) {
  async function writeChunk(chunk) {
    if (!chunk || chunk.length === 0) return;
    counter.add(chunk.length);
    try {
      await writer.write(chunk);
    } catch (err) {
      throw err;
    }
  }

  try {
    await writeChunk(parsed.data);
    let chunkCount = 0;
    while (!parsed.done) {
      const result = await parsed.reader.read(getXhttpBuffer());
      if (result.done) break;
      await writeChunk(result.value);
      parsed.done = result.done;
      chunkCount++;
      if (chunkCount % 10 === 0) await sleep(0);
      if (!result.value || result.value.length === 0) await sleep(2);
    }
  } catch (err) {
    throw err;
  }
}

function createXhttpUploader(parsed, writable) {
  const counter = new XhttpCounter();
  const writer = writable.getWriter();
  const done = (async () => {
    try {
      await pumpXhttpUpload(counter, writer, parsed);
    } catch (err) {
      throw err;
    } finally {
      try { await writer.close(); } catch (err) {}
    }
  })();
  return {
    counter,
    done,
    abort: () => { try { writer.abort(); } catch (ignored) {} }
  };
}

function createXhttpDownloader(respHeader, readable) {
  const counter = new XhttpCounter();
  let stream;

  const done = new Promise((resolve, reject) => {
    stream = new TransformStream({
      start(controller) {
        counter.add(respHeader.length);
        controller.enqueue(respHeader);
      },
      transform(chunk, controller) {
        counter.add(chunk.length);
        controller.enqueue(chunk);
      },
      cancel(reason) {
        reject(`download cancelled: ${reason}`);
      }
    }, null, new ByteLengthQueuingStrategy({ highWaterMark: XHTTP_BUFFER_SIZE }));

    let lastActivity = Date.now();
    const idleTimer = setInterval(() => {
      if (Date.now() - lastActivity > XHTTP_IDLE_TIMEOUT) {
        try { stream.writable.abort?.('idle timeout'); } catch (ignored) {}
        clearInterval(idleTimer);
        reject('idle timeout');
      }
    }, 5000);

    const reader = readable.getReader();
    const writer = stream.writable.getWriter();

    (async () => {
      try {
        let chunkCount = 0;
        while (true) {
          const result = await reader.read();
          if (result.done) break;
          lastActivity = Date.now();
          await writer.write(result.value);
          chunkCount++;
          if (chunkCount % 5 === 0) await sleep(0);
        }
        await writer.close();
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        try { reader.releaseLock(); } catch (ignored) {}
        try { writer.releaseLock(); } catch (ignored) {}
        clearInterval(idleTimer);
      }
    })();
  });

  return {
    readable: stream.readable,
    counter,
    done,
    abort: () => {
      try { stream.readable.cancel(); } catch (ignored) {}
      try { stream.writable.abort(); } catch (ignored) {}
    }
  };
}

async function connectXhttpRemote(parsed, ...fallbackHosts) {
  let attempts = 0;
  let lastError;

  const hostList = [parsed.hostname, ...fallbackHosts.filter(h => h && h !== parsed.hostname)];
  for (const hostname of hostList) {
    if (!hostname) continue;
    attempts = 0;
    while (attempts < XHTTP_CONNECT_RETRIES) {
      attempts++;
      try {
        const remote = connect({ hostname, port: parsed.port });
        const timeoutPromise = sleep(XHTTP_CONNECT_TIMEOUT).then(() => {
          throw new Error(atob('Y29ubmVjdCB0aW1lb3V0'));
        });
        await Promise.race([remote.opened, timeoutPromise]);

        const uploader = createXhttpUploader(parsed, remote.writable);
        const downloader = createXhttpDownloader(parsed.resp, remote.readable);
        return {
          downloader,
          uploader,
          close: () => { try { remote.close(); } catch (ignored) {} }
        };
      } catch (err) {
        lastError = err;
        if (attempts < XHTTP_CONNECT_RETRIES) await sleep(500 * attempts);
      }
    }
  }
  return null;
}

async function handleXhttpClient(body, uuid) {
  if (xhttpActiveConnections >= XHTTP_MAX_CONNECTIONS) {
    return new Response('Too many connections', { status: 429 });
  }
  xhttpActiveConnections++;

  let released = false;
  const release = () => {
    if (!released) {
      xhttpActiveConnections = Math.max(0, xhttpActiveConnections - 1);
      released = true;
    }
  };

  try {
    const parsed = await readXhttpHeader(body, uuid);
    if (typeof parsed !== 'object' || !parsed) return null;

    const remoteConn = await connectXhttpRemote(parsed, fallbackAddress, '13.230.34.30');
    if (remoteConn === null) return null;

    const closed = Promise.race([
      (async () => { try { await remoteConn.downloader.done; } catch (err) {} })(),
      (async () => { try { await remoteConn.uploader.done; } catch (err) {} })(),
      sleep(XHTTP_IDLE_TIMEOUT).then(() => {})
    ]).finally(() => {
      try { remoteConn.close(); } catch (ignored) {}
      try { remoteConn.downloader.abort(); } catch (ignored) {}
      try { remoteConn.uploader.abort(); } catch (ignored) {}
      release();
    });

    return { readable: remoteConn.downloader.readable, closed };
  } catch (err) {
    release();
    return null;
  }
}

async function handleXhttpRequest(request) {
  try {
    return await handleXhttpClient(request.body, AUTH_UUID);
  } catch (err) {
    return null;
  }
}

// ============================================================
// Misc helpers
// ============================================================
function decodeBase64ToArray(b64String) {
  if (!b64String) return { error: null };
  try {
    b64String = b64String.replace(/-/g, '+').replace(/_/g, '/');
    return {
      earlyData: Uint8Array.from(atob(b64String), c => c.charCodeAt(0)).buffer,
      error: null
    };
  } catch (err) {
    return { error: err };
  }
}

function closeSocketSafe(socket) {
  try {
    if (socket.readyState === 1 || socket.readyState === 2) socket.close();
  } catch (err) {}
}

const HEX_TABLE = Array.from({ length: 256 }, (v, i) => (i + 256).toString(16).slice(1));

function formatUuid(bytes, offset = 0) {
  const id = (
    HEX_TABLE[bytes[offset]] + HEX_TABLE[bytes[offset + 1]] + HEX_TABLE[bytes[offset + 2]] + HEX_TABLE[bytes[offset + 3]] + '-' +
    HEX_TABLE[bytes[offset + 4]] + HEX_TABLE[bytes[offset + 5]] + '-' +
    HEX_TABLE[bytes[offset + 6]] + HEX_TABLE[bytes[offset + 7]] + '-' +
    HEX_TABLE[bytes[offset + 8]] + HEX_TABLE[bytes[offset + 9]] + '-' +
    HEX_TABLE[bytes[offset + 10]] + HEX_TABLE[bytes[offset + 11]] + HEX_TABLE[bytes[offset + 12]] +
    HEX_TABLE[bytes[offset + 13]] + HEX_TABLE[bytes[offset + 14]] + HEX_TABLE[bytes[offset + 15]]
  ).toLowerCase();
  if (!isValidUuidFormat(id)) throw new TypeError(ERR_INVALID_UUID_STRING);
  return id;
}
// ============================================================
// YAML / host helpers
// ============================================================
function yamlQuote(value) {
  if (value == null) return '""';
  const text = String(value);
  return '"' + text.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

function normalizeHost(hostname) {
  if (!hostname) return hostname;
  const text = String(hostname);
  if (text.startsWith('[') && text.endsWith(']')) return text.slice(1, -1);
  return text;
}

// ============================================================
// Share link → generic node object
// ============================================================
function parseShareLink(link) {
  try {
    if (link.startsWith(decodeBase64('dmxlc3M6Ly8='))) {
      const url = new URL(link);
      const params = new URLSearchParams(url.search);
      return {
        proto: decodeBase64('dmxlc3M='),
        name: decodeURIComponent(url.hash.substring(1)) || url.hostname + ':' + url.port,
        uuid: url.username,
        server: normalizeHost(url.hostname),
        port: parseInt(url.port) || 443,
        tls: params.get('security') === 'tls' || params.get('security') === 'reality',
        network: params.get('type') || 'ws',
        path: params.get('path') || '/?ed=2048',
        host: normalizeHost(params.get('host') || url.hostname),
        sni: normalizeHost(params.get('sni') || params.get('host') || url.hostname),
        alpn: (params.get('alpn') || '').split(',').map(s => s.trim()).filter(Boolean),
        fp: params.get('fp') || 'chrome',
        flow: params.get('flow') || '',
        encryption: params.get('encryption') || 'none',
        mode: params.get('mode') || '',
        ech: params.get('ech') || ''
      };
    }
    if (link.startsWith(decodeBase64('dHJvamFuOi8v'))) {
      const url = new URL(link);
      const params = new URLSearchParams(url.search);
      return {
        proto: decodeBase64('dHJvamFu'),
        name: decodeURIComponent(url.hash.substring(1)) || url.hostname + ':' + url.port,
        password: decodeURIComponent(url.username),
        server: normalizeHost(url.hostname),
        port: parseInt(url.port) || 443,
        tls: true,
        network: params.get('type') || 'ws',
        path: params.get('path') || '/?ed=2048',
        host: normalizeHost(params.get('host') || url.hostname),
        sni: normalizeHost(params.get('sni') || params.get('host') || url.hostname),
        alpn: (params.get('alpn') || '').split(',').map(s => s.trim()).filter(Boolean),
        fp: params.get('fp') || 'chrome',
        ech: params.get('ech') || ''
      };
    }
  } catch (ignored) {}
  return null;
}

// ============================================================
// Clash policy-group helpers
// ============================================================
function buildClashProxyGroup(nodeNames, options = {}) {
  const { directFirst = false, extraGroups = [] } = options;
  const nodeLines = nodeNames.length
    ? nodeNames.map(name => `      - ${yamlQuote(name)}`).join('\n')
    : '      - DIRECT';
  const lines = [];
  if (directFirst) {
    lines.push('      - "🎯 全球直连"', '      - "🚀 节点选择"');
  } else {
    lines.push('      - "🚀 节点选择"', '      - "🎯 全球直连"');
  }
  for (const group of extraGroups) lines.push(`      - ${yamlQuote(group)}`);
  lines.push(nodeLines);
  return lines.join('\n');
}

function buildPolicyGroupList(nodeNames, options = {}) {
  const { directFirst = false, extraGroups = [], compact = false } = options;
  const separator = compact ? ',' : ', ';
  const nodeList = nodeNames.length ? nodeNames.join(separator) : 'DIRECT';
  const parts = [];
  if (directFirst) parts.push('🎯 全球直连', '🚀 节点选择');
  else parts.push('🚀 节点选择', '🎯 全球直连');
  parts.push(...extraGroups);
  if (nodeNames.length) parts.push(nodeList);
  return parts.join(separator);
}

// ============================================================
// Clash node block (block-style YAML)
// ============================================================
function buildClashNodeBlock(node) {
  const lines = [];
  const server = normalizeHost(node.server);
  const host = normalizeHost(node.host) || server;
  const sni = normalizeHost(node.sni) || host;
  lines.push(`  - name: ${yamlQuote(node.name)}`);
  lines.push(`    type: ${node.proto}`);
  lines.push(`    server: ${yamlQuote(server)}`);
  lines.push(`    port: ${node.port}`);
  if (node.proto === decodeBase64('dmxlc3M=')) {
    lines.push(`    uuid: ${node.uuid}`);
    lines.push(`    udp: true`);
    lines.push(`    tls: ${node.tls ? 'true' : 'false'}`);
    if (node.flow) lines.push(`    flow: ${yamlQuote(node.flow)}`);
    lines.push(`    client-fingerprint: ${yamlQuote(node.fp || 'chrome')}`);
  } else if (node.proto === decodeBase64('dHJvamFu')) {
    lines.push(`    password: ${yamlQuote(node.password)}`);
    lines.push(`    udp: true`);
    lines.push(`    client-fingerprint: ${yamlQuote(node.fp || 'chrome')}`);
  }
  if (node.tls) {
    lines.push(`    servername: ${yamlQuote(sni)}`);
    if (node.alpn && node.alpn.length) {
      lines.push(`    alpn: [${node.alpn.map(a => yamlQuote(a)).join(', ')}]`);
    }
    lines.push(`    skip-cert-verify: false`);
  }
  if (node.network === 'ws' || node.network === 'xhttp') {
    lines.push(`    network: ws`);
    lines.push(`    ws-opts:`);
    lines.push(`      path: ${yamlQuote(node.path)}`);
    lines.push(`      headers:`);
    lines.push(`        Host: ${yamlQuote(host)}`);
  } else if (node.network === 'grpc') {
    lines.push(`    network: grpc`);
    lines.push(`    grpc-opts:`);
    lines.push(`      grpc-service-name: ${yamlQuote(node.path)}`);
  }
  if (node.ech) {
    const echDomain = customECHDomain || 'cloudflare-ech.com';
    lines.push(`    ech-opts:`);
    lines.push(`      enable: true`);
    lines.push(`      query-server-name: ${yamlQuote(echDomain)}`);
  }
  return lines.join('\n');
}

// ============================================================
// Clash YAML generator (Loyalsoldier rule-providers)
// ============================================================
function generateClashYaml(linkList) {
  const nodes = linkList.map(parseShareLink).filter(n => n && (n.proto === decodeBase64('dmxlc3M=') || n.proto === decodeBase64('dHJvamFu')));
  const nodeNames = nodes.map(n => n.name);
  const dnsServer = customDNS || 'https://223.5.5.5/dns-query';

  const header = [
    'mixed-port: 7890', 'allow-lan: true', 'mode: rule', 'log-level: info',
    'ipv6: true', 'external-controller: 127.0.0.1:9090', 'unified-delay: true',
    'tcp-concurrent: true', 'geodata-mode: true', 'geo-auto-update: true',
    'geo-update-interval: 24', 'geox-url:',
    '  geoip: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat"',
    '  geosite: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat"',
    '  mmdb: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb"',
    '  asn: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"',
    'sniffer:', '  enable: true', '  force-dns-mapping: true', '  parse-pure-ip: true',
    '  sniff:', '    HTTP:', '      ports: [80, 8080-8880]', '      override-destination: true',
    '    TLS:', '      ports: [443, 8443]', '    QUIC:', '      ports: [443, 8443]',
    'dns:', '  enable: true', '  listen: 0.0.0.0:1053', '  ipv6: true',
    '  enhanced-mode: fake-ip', '  fake-ip-range: 198.18.0.1/16', '  fake-ip-filter:',
    '    - "*.lan"', '    - "+.local"', '    - "+.market.xiaomi.com"',
    '    - "+.msftconnecttest.com"', '    - "+.msftncsi.com"',
    '    - "localhost.ptlogin2.qq.com"', '    - "+.srv.nintendo.net"',
    '    - "+.stun.playstation.net"', '    - "+.xboxlive.com"',
    '  default-nameserver:', '    - 223.5.5.5', '    - 119.29.29.29',
    '  nameserver:', `    - ${dnsServer}`, '    - https://119.29.29.29/dns-query',
    '  fallback:', '    - https://1.1.1.1/dns-query', '    - https://8.8.8.8/dns-query',
    '  fallback-filter:', '    geoip: true', '    geoip-code: CN', '    ipcidr:',
    '      - 240.0.0.0/4', ''
  ];

  const proxies = ['proxies:'];
  for (const node of nodes) proxies.push(buildClashNodeBlock(node));

  const nodeOnly = nodeNames.length
    ? nodeNames.map(name => `      - ${yamlQuote(name)}`).join('\n')
    : '      - DIRECT';

  const proxyGroups = [
    decodeBase64('cHJveHktZ3JvdXBzOg=='),
    '  - name: "🚀 节点选择"', '    type: select', '    proxies:', '      - "🎯 全球直连"', nodeOnly,
    '  - name: "🌍 国外媒体"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames),
    '  - name: "📺 哔哩哔哩"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames, { directFirst: true }),
    '  - name: "📹 油管视频"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames, { extraGroups: ['🌍 国外媒体'] }),
    '  - name: "🎬 奈飞视频"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames, { extraGroups: ['🌍 国外媒体'] }),
    '  - name: "📲 电报信息"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames),
    '  - name: "🌐 谷歌服务"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames),
    '  - name: "🤖 OpenAI"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames),
    '  - name: "Ⓜ️ 微软服务"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames, { directFirst: true }),
    '  - name: "🍎 苹果服务"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames, { directFirst: true }),
    '  - name: "🎯 全球直连"', '    type: select', '    proxies:', '      - DIRECT',
    '  - name: "🛑 全球拦截"', '    type: select', '    proxies:', '      - REJECT', '      - DIRECT',
    '  - name: "🍃 应用净化"', '    type: select', '    proxies:', '      - REJECT', '      - DIRECT',
    '  - name: "🐟 漏网之鱼"', '    type: select', '    proxies:', buildClashProxyGroup(nodeNames), ''
  ];

  const ruleBase = decodeBase64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0xveWFsc29sZGllci9jbGFzaC1ydWxlc0ByZWxlYXNl');
  const provider = (name, behavior) => [
    `  ${name}:`, `    type: http`, `    behavior: ${behavior}`,
    `    url: "${ruleBase}/${name}.txt"`, `    path: ./rulesets/loyalsoldier/${name}.txt`,
    `    interval: 86400`
  ].join('\n');

  const ruleProviders = [
    'rule-providers:',
    provider('reject', 'domain'), provider('icloud', 'domain'), provider('apple', 'domain'),
    provider('google', 'domain'), provider(decodeBase64('cHJveHk='), 'domain'),
    provider('direct', 'domain'), provider('private', 'domain'), provider('gfw', 'domain'),
    provider('greatfire', 'domain'), provider('tld-not-cn', 'domain'),
    provider('telegramcidr', 'ipcidr'), provider('cncidr', 'ipcidr'),
    provider('lancidr', 'ipcidr'), provider('applications', 'classical'), ''
  ];

  const rules = [
    'rules:',
    '  - DOMAIN-SUFFIX,acl4.ssr,🎯 全球直连',
    '  - DOMAIN-SUFFIX,local,🎯 全球直连',
    decodeBase64('ICAtIERPTUFJTixjbGFzaC5yYXpvcmQudG9wLPCfjq8g5YWo55CD55u06L+e'),
    '  - DOMAIN,yacd.haishan.me,🎯 全球直连',
    '  - DOMAIN,yacd.metacubex.one,🎯 全球直连',
    '  - DOMAIN,d.metacubex.one,🎯 全球直连',
    '  - DOMAIN-SUFFIX,googleapis.cn,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,gstatic.com,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,xn--ngstr-lra8j.com,🌐 谷歌服务',
    '  - DOMAIN-SUFFIX,googlevideo.com,📹 油管视频',
    '  - DOMAIN-SUFFIX,googleusercontent.com,🌐 谷歌服务',
    '  - DOMAIN-KEYWORD,youtube,📹 油管视频',
    '  - DOMAIN-SUFFIX,youtube.com,📹 油管视频',
    '  - DOMAIN-SUFFIX,youtu.be,📹 油管视频',
    '  - DOMAIN-KEYWORD,netflix,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxext.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxso.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflxvideo.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflximg.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,nflximg.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,netflix.com,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,netflix.net,🎬 奈飞视频',
    '  - DOMAIN-SUFFIX,bilibili.com,📺 哔哩哔哩',
    '  - DOMAIN-SUFFIX,bilivideo.com,📺 哔哩哔哩',
    '  - DOMAIN-SUFFIX,hdslb.com,📺 哔哩哔哩',
    '  - DOMAIN-KEYWORD,openai,🤖 OpenAI',
    '  - DOMAIN-KEYWORD,chatgpt,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,openai.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,chatgpt.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,oaistatic.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,anthropic.com,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,claude.ai,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,perplexity.ai,🤖 OpenAI',
    '  - DOMAIN-SUFFIX,gemini.google.com,🤖 OpenAI',
    '  - RULE-SET,applications,🎯 全球直连',
    '  - RULE-SET,private,🎯 全球直连',
    '  - RULE-SET,reject,🛑 全球拦截',
    '  - RULE-SET,icloud,🍎 苹果服务',
    '  - RULE-SET,apple,🍎 苹果服务',
    '  - RULE-SET,google,🌐 谷歌服务',
    decodeBase64('ICAtIFJVTEUtU0VULHByb3h5LPCfmoAg6IqC54K56YCJ5oup'),
    '  - RULE-SET,gfw,🚀 节点选择',
    '  - RULE-SET,greatfire,🚀 节点选择',
    '  - RULE-SET,tld-not-cn,🚀 节点选择',
    '  - RULE-SET,direct,🎯 全球直连',
    '  - RULE-SET,lancidr,🎯 全球直连,no-resolve',
    '  - RULE-SET,cncidr,🎯 全球直连,no-resolve',
    '  - RULE-SET,telegramcidr,📲 电报信息,no-resolve',
    '  - GEOIP,LAN,🎯 全球直连,no-resolve',
    '  - GEOIP,CN,🎯 全球直连,no-resolve',
    '  - MATCH,🐟 漏网之鱼'
  ];

  return [header.join('\n'), proxies.join('\n'), '', proxyGroups.join('\n'), ruleProviders.join('\n'), rules.join('\n'), ''].join('\n');
}

// ============================================================
// sing-box JSON generator (MetaCubeX SRS rule-sets)
// ============================================================
function generateSingBoxJson(linkList) {
  const nodes = linkList.map(parseShareLink).filter(n => n && (n.proto === decodeBase64('dmxlc3M=') || n.proto === decodeBase64('dHJvamFu')));
  const dnsServer = customDNS || 'https://223.5.5.5/dns-query';
  const outboundTags = nodes.map(n => n.name);

  function buildOutbound(node) {
    const out = {
      type: node.proto,
      tag: node.name,
      server: normalizeHost(node.server),
      server_port: node.port
    };
    if (node.proto === decodeBase64('dmxlc3M=')) {
      out.uuid = node.uuid;
      if (node.flow) out.flow = node.flow;
    } else {
      out.password = node.password;
    }
    if (node.tls) {
      out.tls = {
        enabled: true,
        server_name: node.sni,
        insecure: false,
        utls: { enabled: true, fingerprint: node.fp || 'chrome' }
      };
      if (node.alpn && node.alpn.length) out.tls.alpn = node.alpn;
      if (node.ech) {
        out.tls.ech = {
          enabled: true,
          pq_signature_schemes_enabled: false,
          dynamic_record_sizing_disabled: false
        };
      }
    }
    if (node.network === 'ws' || node.network === 'xhttp') {
      out.transport = {
        type: 'ws',
        path: node.path,
        headers: { Host: node.host },
        max_early_data: 2048,
        early_data_header_name: 'Sec-WebSocket-Protocol'
      };
    } else if (node.network === 'grpc') {
      out.transport = { type: 'grpc', service_name: node.path };
    }
    return out;
  }

  const geositeBase = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite';
  const geoipBase = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip';
  const geositeRule = tag => ({
    tag: `geosite-${tag}`, type: 'remote', format: 'binary',
    url: `${geositeBase}/${tag}.srs`, download_detour: 'direct'
  });
  const geoipRule = tag => ({
    tag: `geoip-${tag}`, type: 'remote', format: 'binary',
    url: `${geoipBase}/${tag}.srs`, download_detour: 'direct'
  });

  const config = {
    log: { level: 'info', timestamp: true },
    dns: {
      servers: [
        { tag: 'remote', address: dnsServer, detour: 'select' },
        { tag: 'local', address: '223.5.5.5', detour: 'direct' },
        { tag: 'fakeip', address: 'fakeip' },
        { tag: 'block', address: 'rcode://success' }
      ],
      rules: [
        { outbound: 'any', server: 'local' },
        { rule_set: 'geosite-category-ads-all', server: 'block' },
        { rule_set: 'geosite-cn', server: 'local' },
        { query_type: ['A', 'AAAA'], server: 'fakeip' }
      ],
      fakeip: { enabled: true, inet4_range: '198.18.0.0/15', inet6_range: 'fc00::/18' },
      independent_cache: true,
      strategy: 'ipv4_only'
    },
    inbounds: [
      {
        type: 'mixed', tag: 'mixed-in', listen: '127.0.0.1', listen_port: 2080,
        sniff: true, sniff_override_destination: true
      },
      {
        type: 'tun', tag: 'tun-in', interface_name: decodeBase64('c2luZy1ib3g='),
        address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'], mtu: 9000,
        auto_route: true, strict_route: true, stack: 'mixed',
        sniff: true, sniff_override_destination: true
      }
    ],
    outbounds: [
      { type: 'selector', tag: 'select', outbounds: ['direct', ...outboundTags], default: outboundTags[0] || 'direct' },
      { type: 'selector', tag: '🌍 国外媒体', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '📲 电报信息', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🌐 谷歌服务', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🤖 OpenAI', outbounds: ['select', 'direct', ...outboundTags] },
      { type: 'selector', tag: 'Ⓜ️ 微软服务', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '🍎 苹果服务', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '📺 哔哩哔哩', outbounds: ['direct', 'select', ...outboundTags] },
      { type: 'selector', tag: '📹 油管视频', outbounds: ['select', '🌍 国外媒体', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🎬 奈飞视频', outbounds: ['select', '🌍 国外媒体', 'direct', ...outboundTags] },
      { type: 'selector', tag: '🎯 全球直连', outbounds: ['direct'] },
      { type: 'selector', tag: '🐟 漏网之鱼', outbounds: ['select', 'direct', ...outboundTags] },
      ...nodes.map(buildOutbound),
      { type: 'direct', tag: 'direct' },
      { type: 'block', tag: 'block' },
      { type: 'dns', tag: 'dns-out' }
    ],
    route: {
      rule_set: [
        geositeRule('cn'), geositeRule('private'), geositeRule('apple'), geositeRule('apple-cn'),
        geositeRule('microsoft'), geositeRule('microsoft@cn'), geositeRule('google'),
        geositeRule('telegram'), geositeRule('openai'), geositeRule('anthropic'),
        geositeRule('youtube'), geositeRule('netflix'), geositeRule('disney'),
        geositeRule('spotify'), geositeRule('tiktok'), geositeRule('twitter'),
        geositeRule('facebook'), geositeRule('github'), geositeRule('geolocation-!cn'),
        geositeRule('category-ads-all'), geoipRule('cn'), geoipRule('private'), geoipRule('telegram')
      ],
      rules: [
        { protocol: 'dns', outbound: 'dns-out' },
        { ip_is_private: true, outbound: 'direct' },
        { rule_set: 'geosite-category-ads-all', outbound: 'block' },
        { rule_set: 'geosite-private', outbound: 'direct' },
        { rule_set: 'geosite-apple-cn', outbound: 'direct' },
        { rule_set: 'geosite-microsoft@cn', outbound: 'direct' },
        { rule_set: 'geosite-apple', outbound: '🍎 苹果服务' },
        { rule_set: 'geosite-microsoft', outbound: 'Ⓜ️ 微软服务' },
        { rule_set: 'geosite-openai', outbound: '🤖 OpenAI' },
        { rule_set: 'geosite-anthropic', outbound: '🤖 OpenAI' },
        { rule_set: 'geosite-telegram', outbound: '📲 电报信息' },
        { rule_set: 'geoip-telegram', outbound: '📲 电报信息' },
        { rule_set: 'geosite-google', outbound: '🌐 谷歌服务' },
        { rule_set: 'geosite-youtube', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-netflix', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-disney', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-spotify', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-tiktok', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-twitter', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-facebook', outbound: '🌍 国外媒体' },
        { rule_set: 'geosite-github', outbound: 'select' },
        { rule_set: 'geosite-geolocation-!cn', outbound: 'select' },
        { rule_set: 'geosite-cn', outbound: 'direct' },
        { rule_set: 'geoip-cn', outbound: 'direct' },
        { ip_is_private: true, outbound: 'direct' }
      ],
      final: '🐟 漏网之鱼',
      auto_detect_interface: true
    },
    experimental: {
      cache_file: { enabled: true, store_fakeip: true },
      clash_api: { external_controller: '127.0.0.1:9090' }
    }
  };

  return JSON.stringify(config, null, 2);
}

// ============================================================
// Surge INI generator (ACL4SSR rule-set)
// ============================================================
const ACL4SSR_BASE = decodeBase64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0FDTDRTU1IvQUNMNFNTUkBtYXN0ZXIvQ2xhc2g=');
const aclRule = name => `${ACL4SSR_BASE}/${name}.list`;

function generateSurgeIni(linkList) {
  const nodes = linkList.map(parseShareLink).filter(n => n && n.proto === decodeBase64('dHJvamFu'));
  const dnsServer = customDNS || '223.5.5.5';
  const nodeNames = nodes.map(n => n.name);

  const lines = [
    '[General]', 'loglevel = notify',
    'internet-test-url = http://www.apple.com/library/test/success.html',
    decodeBase64('cHJveHktdGVzdC11cmwgPSBodHRwOi8vd3d3LmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNA=='),
    'test-timeout = 3',
    `dns-server = ${dnsServer.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}, 119.29.29.29, system`,
    'encrypted-dns-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query',
    'ipv6 = true', 'allow-wifi-access = false', 'wifi-access-http-port = 6152',
    decodeBase64('d2lmaS1hY2Nlc3Mtc29ja3M1LXBvcnQgPSA2MTUz'),
    decodeBase64('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwgMTkyLjE2OC4wLjAvMTYsIDEwLjAuMC4wLzgsIDE3Mi4xNi4wLjAvMTIsIGxvY2FsaG9zdCwgKi5sb2NhbCwgY2FwdGl2ZS5hcHBsZS5jb20='),
    'exclude-simple-hostnames = true', 'show-error-page-for-reject = true', '',
    decodeBase64('W1Byb3h5XQ==')
  ];

  for (const node of nodes) {
    lines.push(`${node.name} = ${decodeBase64('dHJvamFu')}, ${node.server}, ${node.port}, password=${node.password}, sni=${node.sni}, ws=true, ws-path=${node.path}, ws-headers=Host:${node.host}, skip-cert-verify=false, tfo=true`);
  }
  if (!nodes.length) lines.push('Direct = direct');

  lines.push('');
  lines.push(decodeBase64('W1Byb3h5IEdyb3VwXQ=='));
  const nodeList = nodeNames.length ? nodeNames.join(', ') : 'DIRECT';
  lines.push(`🚀 节点选择 = select, 🎯 全球直连, ${nodeList}`);
  lines.push(`🌍 国外媒体 = select, ${buildPolicyGroupList(nodeNames)}`);
  lines.push(`📺 哔哩哔哩 = select, ${buildPolicyGroupList(nodeNames, { directFirst: true })}`);
  lines.push(`📹 油管视频 = select, ${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`🎬 奈飞视频 = select, ${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'] })}`);
  lines.push(`📲 电报信息 = select, ${buildPolicyGroupList(nodeNames)}`);
  lines.push(`🌐 谷歌服务 = select, ${buildPolicyGroupList(nodeNames)}`);
  lines.push(`🤖 OpenAI = select, ${buildPolicyGroupList(nodeNames)}`);
  lines.push(`Ⓜ️ 微软服务 = select, ${buildPolicyGroupList(nodeNames, { directFirst: true })}`);
  lines.push(`🍎 苹果服务 = select, ${buildPolicyGroupList(nodeNames, { directFirst: true })}`);
  lines.push(`🎯 全球直连 = select, DIRECT`);
  lines.push(`🛑 全球拦截 = select, REJECT, DIRECT`);
  lines.push(`🐟 漏网之鱼 = select, ${buildPolicyGroupList(nodeNames)}`);
  lines.push('');
  lines.push('[Rule]');
  lines.push(`RULE-SET,${aclRule('LocalAreaNetwork')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('UnBan')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('BanAD')},🛑 全球拦截`);
  lines.push(`RULE-SET,${aclRule('BanProgramAD')},🛑 全球拦截`);
  lines.push(`RULE-SET,${aclRule('GoogleFCM')},🌐 谷歌服务`);
  lines.push(`RULE-SET,${aclRule('GoogleCN')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('SteamCN')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('Microsoft')},Ⓜ️ 微软服务`);
  lines.push(`RULE-SET,${aclRule('Apple')},🍎 苹果服务`);
  lines.push(`RULE-SET,${aclRule('Telegram')},📲 电报信息`);
  lines.push(`RULE-SET,${aclRule('OpenAi')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Claude')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Copilot')},🤖 OpenAI`);
  lines.push(`RULE-SET,${aclRule('Netflix')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('YouTube')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('Disney')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('Spotify')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('TikTok')},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule('BiliBili')},📺 哔哩哔哩`);
  lines.push(`RULE-SET,${aclRule(decodeBase64('UHJveHlNZWRpYQ=='))},🌍 国外媒体`);
  lines.push(`RULE-SET,${aclRule(decodeBase64('UHJveHlHRldsaXN0'))},🚀 节点选择`);
  lines.push(`RULE-SET,${aclRule('ChinaDomain')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('ChinaCompanyIp')},🎯 全球直连`);
  lines.push(`RULE-SET,${aclRule('ChinaIp')},🎯 全球直连`);
  lines.push('GEOIP,CN,🎯 全球直连');
  lines.push('FINAL,🐟 漏网之鱼,dns-failed');

  return lines.join('\n');
}

// ============================================================
// Loon INI generator
// ============================================================
function generateLoonIni(linkList) {
  const nodes = linkList.map(parseShareLink).filter(n => n && (n.proto === decodeBase64('dmxlc3M=') || n.proto === decodeBase64('dHJvamFu')));
  const nodeNames = nodes.map(n => n.name);

  const lines = [
    '[General]', 'ip-mode = dual',
    `dns-server = ${(customDNS || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')},119.29.29.29,system`,
    'doh-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query',
    decodeBase64('YWxsb3ctdWRwLXByb3h5ID0gdHJ1ZQ=='),
    'allow-wifi-access = false', 'sni-sniffing = true',
    decodeBase64('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwxOTIuMTY4LjAuMC8xNiwxMC4wLjAuMC84LDE3Mi4xNi4wLjAvMTIsbG9jYWxob3N0LCoubG9jYWwsY2FwdGl2ZS5hcHBsZS5jb20='),
    'bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32',
    '', decodeBase64('W1Byb3h5XQ==')
  ];

  for (const node of nodes) {
    if (node.proto === decodeBase64('dmxlc3M=')) {
      const parts = [`${node.server}`, `${node.port}`, `udp=true`, `username=${node.uuid}`,
        `transport=ws`, `path=${node.path}`, `host=${node.host}`, `over-tls=${node.tls ? 'true' : 'false'}`];
      if (node.tls) {
        parts.push(`tls-name=${node.sni}`);
        if (node.alpn && node.alpn.length) parts.push(`alpn=${node.alpn.join(':')}`);
        parts.push(`skip-cert-verify=false`);
      }
      lines.push(`${node.name} = ${decodeBase64('dmxlc3M=')},${parts.join(',')}`);
    } else {
      const parts = [`${node.server}`, `${node.port}`, `password=${node.password}`,
        `transport=ws`, `path=${node.path}`, `host=${node.host}`, `over-tls=true`, `tls-name=${node.sni}`];
      if (node.alpn && node.alpn.length) parts.push(`alpn=${node.alpn.join(':')}`);
      parts.push(`skip-cert-verify=false`);
      lines.push(`${node.name} = ${decodeBase64('dHJvamFu')},${parts.join(',')}`);
    }
  }

  lines.push('');
  lines.push(decodeBase64('W1Byb3h5IEdyb3VwXQ=='));
  const nodeList = nodeNames.length ? nodeNames.join(',') : 'DIRECT';
  lines.push(`🚀 节点选择 = select,🎯 全球直连,${nodeList}`);
  lines.push(`🌍 国外媒体 = select,${buildPolicyGroupList(nodeNames, { compact: true })}`);
  lines.push(`📺 哔哩哔哩 = select,${buildPolicyGroupList(nodeNames, { directFirst: true, compact: true })}`);
  lines.push(`📹 油管视频 = select,${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'], compact: true })}`);
  lines.push(`🎬 奈飞视频 = select,${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'], compact: true })}`);
  lines.push(`📲 电报信息 = select,${buildPolicyGroupList(nodeNames, { compact: true })}`);
  lines.push(`🌐 谷歌服务 = select,${buildPolicyGroupList(nodeNames, { compact: true })}`);
  lines.push(`🤖 OpenAI = select,${buildPolicyGroupList(nodeNames, { compact: true })}`);
  lines.push(`Ⓜ️ 微软服务 = select,${buildPolicyGroupList(nodeNames, { directFirst: true, compact: true })}`);
  lines.push(`🍎 苹果服务 = select,${buildPolicyGroupList(nodeNames, { directFirst: true, compact: true })}`);
  lines.push(`🎯 全球直连 = select,DIRECT`);
  lines.push(`🛑 全球拦截 = select,REJECT,DIRECT`);
  lines.push(`🐟 漏网之鱼 = select,${buildPolicyGroupList(nodeNames, { compact: true })}`);
  lines.push('');
  lines.push('[Remote Rule]');
  lines.push(`${aclRule('LocalAreaNetwork')}, policy=🎯 全球直连, tag=局域网, enabled=true`);
  lines.push(`${aclRule('BanAD')}, policy=🛑 全球拦截, tag=广告拦截, enabled=true`);
  lines.push(`${aclRule('BanProgramAD')}, policy=🛑 全球拦截, tag=应用广告, enabled=true`);
  lines.push(`${aclRule('GoogleCN')}, policy=🎯 全球直连, tag=GoogleCN, enabled=true`);
  lines.push(`${aclRule('SteamCN')}, policy=🎯 全球直连, tag=SteamCN, enabled=true`);
  lines.push(`${aclRule('Microsoft')}, policy=Ⓜ️ 微软服务, tag=微软, enabled=true`);
  lines.push(`${aclRule('Apple')}, policy=🍎 苹果服务, tag=苹果, enabled=true`);
  lines.push(`${aclRule('Telegram')}, policy=📲 电报信息, tag=电报, enabled=true`);
  lines.push(`${aclRule('OpenAi')}, policy=🤖 OpenAI, tag=OpenAI, enabled=true`);
  lines.push(`${aclRule('Netflix')}, policy=🌍 国外媒体, tag=Netflix, enabled=true`);
  lines.push(`${aclRule('YouTube')}, policy=🌍 国外媒体, tag=YouTube, enabled=true`);
  lines.push(`${aclRule('Disney')}, policy=🌍 国外媒体, tag=Disney, enabled=true`);
  lines.push(`${aclRule('Spotify')}, policy=🌍 国外媒体, tag=Spotify, enabled=true`);
  lines.push(`${aclRule('TikTok')}, policy=🌍 国外媒体, tag=TikTok, enabled=true`);
  lines.push(`${aclRule('BiliBili')}, policy=📺 哔哩哔哩, tag=哔哩哔哩, enabled=true`);
  lines.push(`${aclRule(decodeBase64('UHJveHlNZWRpYQ=='))}, policy=🌍 国外媒体, tag=${decodeBase64('5Luj55CG5aqS5L2T')}, enabled=true`);
  lines.push(`${aclRule(decodeBase64('UHJveHlHRldsaXN0'))}, policy=🚀 节点选择, tag=${decodeBase64('5Luj55CG5YiX6KGo')}, enabled=true`);
  lines.push(`${aclRule('ChinaDomain')}, policy=🎯 全球直连, tag=中国域名, enabled=true`);
  lines.push(`${aclRule('ChinaIp')}, policy=🎯 全球直连, tag=中国IP, enabled=true`);
  lines.push('');
  lines.push('[Rule]');
  lines.push('GEOIP,CN,🎯 全球直连');
  lines.push('FINAL,🐟 漏网之鱼');

  return lines.join('\n');
}

// ============================================================
// Quantumult X generator
// ============================================================
function generateQuantumultX(linkList) {
  const nodes = linkList.map(parseShareLink).filter(n => n && (n.proto === decodeBase64('dmxlc3M=') || n.proto === decodeBase64('dHJvamFu')));
  const nodeNames = nodes.map(n => n.name);
  const qxBase = decodeBase64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL2JsYWNrbWF0cml4Ny9pb3NfcnVsZV9zY3JpcHRAbWFzdGVyL3J1bGUvUXVhbnR1bXVsdFg=');

  const lines = [
    '[general]',
    'network_check_url=http://www.gstatic.com/generate_204',
    'server_check_url=http://www.gstatic.com/generate_204',
    'profile_img_url=https://fastly.jsdelivr.net/gh/byJoey/cfnew@main/snippets/logo.png',
    'dns_exclusion_list=*.cmpassport.com, *.jegotrip.com.cn, *.icloud.com, *.icloud.com.cn, *.apple.com, *.weibo.com, *.qq.com',
    'running_mode_trigger=filter', '',
    '[dns]',
    `server=${(customDNS || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')}`,
    'server=119.29.29.29',
    'server=https://223.5.5.5/dns-query',
    'server=https://1.12.12.12/dns-query', '',
    '[server_local]'
  ];

  for (const node of nodes) {
    if (node.proto === decodeBase64('dmxlc3M=')) {
      const parts = [`${node.server}:${node.port}`, `method=none`, `password=${node.uuid}`,
        `obfs=${node.tls ? 'wss' : 'ws'}`, `obfs-host=${node.host}`, `obfs-uri=${node.path}`];
      if (node.tls) parts.push(`tls-verification=true`, `tls13=true`);
      parts.push(`tag=${node.name}`);
      lines.push(`${decodeBase64('dmxlc3M=')}=${parts.join(', ')}`);
    } else {
      const parts = [`${node.server}:${node.port}`, `password=${node.password}`, `over-tls=true`,
        `tls-host=${node.sni}`, `obfs=wss`, `obfs-host=${node.host}`, `obfs-uri=${node.path}`,
        `tls-verification=true`, `tag=${node.name}`];
      lines.push(`${decodeBase64('dHJvamFu')}=${parts.join(', ')}`);
    }
  }

  lines.push('');
  lines.push('[policy]');
  const nodeList = nodeNames.length ? nodeNames.join(', ') : 'direct';
  lines.push(`static=🚀 节点选择, ${nodeList}, direct, img-url=${decodeBase64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0tvb2xzb24vUXVyZUBtYXN0ZXIvSWNvblNldC9Db2xvci9Qcm94eS5wbmc=')}`);
  lines.push(`static=🌍 国外媒体, ${buildPolicyGroupList(nodeNames)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png`);
  lines.push(`static=📺 哔哩哔哩, ${buildPolicyGroupList(nodeNames, { directFirst: true })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png`);
  lines.push(`static=📹 油管视频, ${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'] })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png`);
  lines.push(`static=🎬 奈飞视频, ${buildPolicyGroupList(nodeNames, { extraGroups: ['🌍 国外媒体'] })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png`);
  lines.push(`static=📲 电报信息, ${buildPolicyGroupList(nodeNames)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png`);
  lines.push(`static=🌐 谷歌服务, ${buildPolicyGroupList(nodeNames)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png`);
  lines.push(`static=🤖 OpenAI, ${buildPolicyGroupList(nodeNames)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png`);
  lines.push(`static=Ⓜ️ 微软服务, ${buildPolicyGroupList(nodeNames, { directFirst: true })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png`);
  lines.push(`static=🍎 苹果服务, ${buildPolicyGroupList(nodeNames, { directFirst: true })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png`);
  lines.push(`static=🎯 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png`);
  lines.push(`static=🛑 全球拦截, reject, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png`);
  lines.push(`static=🐟 漏网之鱼, ${buildPolicyGroupList(nodeNames)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png`);
  lines.push('');
  lines.push('[filter_remote]');
  lines.push(`${qxBase}/Lan/Lan.list, tag=局域网, force-policy=🎯 全球直连, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Advertising/Advertising.list, tag=广告拦截, force-policy=🛑 全球拦截, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Microsoft/Microsoft.list, tag=微软, force-policy=Ⓜ️ 微软服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Apple/Apple.list, tag=苹果, force-policy=🍎 苹果服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Telegram/Telegram.list, tag=电报, force-policy=📲 电报信息, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Google/Google.list, tag=谷歌, force-policy=🌐 谷歌服务, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/OpenAI/OpenAI.list, tag=OpenAI, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Claude/Claude.list, tag=Claude, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/YouTube/YouTube.list, tag=YouTube, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Netflix/Netflix.list, tag=Netflix, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Disney/Disney.list, tag=Disney, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Spotify/Spotify.list, tag=Spotify, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/TikTok/TikTok.list, tag=TikTok, force-policy=🌍 国外媒体, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/BiliBili/BiliBili.list, tag=哔哩哔哩, force-policy=📺 哔哩哔哩, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/Global/Global.list, tag=全球加速, force-policy=🚀 节点选择, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push(`${qxBase}/ChinaMax/ChinaMax.list, tag=中国直连, force-policy=🎯 全球直连, update-interval=86400, opt-parser=false, enabled=true`);
  lines.push('');
  lines.push('[filter_local]');
  lines.push('geoip, cn, 🎯 全球直连');
  lines.push('final, 🐟 漏网之鱼');

  return lines.join('\n');
}

// ============================================================
// ECH config fetcher (DoH queries)
// ============================================================
let echDebugInfo = '';

async function fetchEchConfig(domain) {
  if (!enableECH) {
    echDebugInfo = 'ECH功能已禁用';
    return null;
  }
  echDebugInfo = '';
  const steps = [];

  try {
    // 1) Google DNS for cloudflare-ech.com
    steps.push('尝试使用 Google DNS 查询 cloudflare-ech.com...');
    const googleUrl = `https://v.recipes/dns/dns.google/dns-query?name=cloudflare-ech.com&type=65`;
    const googleResp = await fetch(googleUrl, { headers: { 'Accept': 'application/json' } });
    steps.push(`Google DNS 响应状态: ${googleResp.status}`);

    if (googleResp.ok) {
      const data = await googleResp.json();
      steps.push(`Google DNS 返回数据: ${JSON.stringify(data).substring(0, 200)}...`);
      if (data.Answer && data.Answer.length > 0) {
        steps.push(`找到 ${data.Answer.length} 条答案记录`);
        for (const answer of data.Answer) {
          if (answer.data) {
            steps.push(`解析答案数据: ${typeof answer.data}, 长度: ${String(answer.data).length}`);
            const dataStr = typeof answer.data === 'string' ? answer.data : JSON.stringify(answer.data);
            const match = dataStr.match(/ech=([^\s"']+)/);
            if (match && match[1]) {
              echDebugInfo = steps.join('\n') + '\n✅ 成功从 Google DNS 获取 ECH 配置';
              return match[1];
            }
            if (answer.data && !dataStr.includes('ech=')) {
              try {
                const decoded = atob(answer.data);
                steps.push(`尝试 base64 解码，解码后长度: ${decoded.length}`);
                const decodedMatch = decoded.match(/ech=([^\s"']+)/);
                if (decodedMatch && decodedMatch[1]) {
                  echDebugInfo = steps.join('\n') + '\n✅ 成功从 Google DNS (base64解码) 获取 ECH 配置';
                  return decodedMatch[1];
                }
              } catch (err) {
                steps.push(`base64 解码失败: ${err.message}`);
              }
            }
          }
        }
      } else {
        steps.push('Google DNS 未返回答案记录');
      }
    } else {
      steps.push(`Google DNS 请求失败: ${googleResp.status}`);
    }

    // 2) Google DNS for the target domain
    steps.push(`尝试使用 Google DNS 查询目标域名 ${domain}...`);
    const targetUrl = `https://v.recipes/dns/dns.google/dns-query?name=${encodeURIComponent(domain)}&type=65`;
    const targetResp = await fetch(targetUrl, { headers: { 'Accept': 'application/json' } });
    steps.push(`Google DNS (目标域名) 响应状态: ${targetResp.status}`);

    if (targetResp.ok) {
      const data = await targetResp.json();
      steps.push(`Google DNS (目标域名) 返回数据: ${JSON.stringify(data).substring(0, 200)}...`);
      if (data.Answer && data.Answer.length > 0) {
        steps.push(`找到 ${data.Answer.length} 条答案记录`);
        for (const answer of data.Answer) {
          if (answer.data) {
            const dataStr = typeof answer.data === 'string' ? answer.data : JSON.stringify(answer.data);
            const match = dataStr.match(/ech=([^\s"']+)/);
            if (match && match[1]) {
              echDebugInfo = steps.join('\n') + '\n✅ 成功从 Google DNS (目标域名) 获取 ECH 配置';
              return match[1];
            }
            try {
              const decoded = atob(answer.data);
              const decodedMatch = decoded.match(/ech=([^\s"']+)/);
              if (decodedMatch && decodedMatch[1]) {
                echDebugInfo = steps.join('\n') + '\n✅ 成功从 Google DNS (目标域名, base64解码) 获取 ECH 配置';
                return decodedMatch[1];
              }
            } catch (err) {
              steps.push(`base64 解码失败: ${err.message}`);
            }
          }
        }
      } else {
        steps.push('Google DNS (目标域名) 未返回答案记录');
      }
    } else {
      steps.push(`Google DNS (目标域名) 请求失败: ${targetResp.status}`);
    }

    // 3) Cloudflare DNS fallback
    steps.push('尝试使用 Cloudflare DNS 作为备选...');
    const cfUrl = `https://cloudflare-dns.com/dns-query?name=cloudflare-ech.com&type=65`;
    const cfResp = await fetch(cfUrl, { headers: { 'Accept': 'application/dns-json' } });
    steps.push(`Cloudflare DNS 响应状态: ${cfResp.status}`);

    if (cfResp.ok) {
      const data = await cfResp.json();
      steps.push(`Cloudflare DNS 返回数据: ${JSON.stringify(data).substring(0, 200)}...`);
      if (data.Answer && data.Answer.length > 0) {
        steps.push(`找到 ${data.Answer.length} 条答案记录`);
        for (const answer of data.Answer) {
          if (answer.data) {
            const match = answer.data.match(/ech=([^\s"']+)/);
            if (match && match[1]) {
              echDebugInfo = steps.join('\n') + '\n✅ 成功从 Cloudflare DNS 获取 ECH 配置';
              return match[1];
            }
          }
        }
      } else {
        steps.push('Cloudflare DNS 未返回答案记录');
      }
    } else {
      steps.push(`Cloudflare DNS 请求失败: ${cfResp.status}`);
    }

    echDebugInfo = steps.join('\n') + '\n❌ 所有DNS查询均失败，未获取到ECH配置';
    return null;
  } catch (err) {
    echDebugInfo = steps.join('\n') + '\n❌ 获取ECH配置时发生错误: ' + err.message;
    return null;
  }
}

// ============================================================
// VLESS link generator
// ============================================================
function generateVlessLinks(list, user, workerDomain, echConfig = null, skipNumbering = false, aliasNamer = null) {
  const cfHttpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const cfHttpsPorts = [443, 2053, 2083, 2087, 2096, 8443];
  const defaultHttpsPorts = [443];
  const defaultHttpPorts = disableNonTLS ? [] : [80];
  const links = [];
  const wsPath = '/?ed=2048';
  const proto = atob('dmxlc3M=');
  const makeName = aliasNamer || createPreferredNodeNamer(skipNumbering);

  for (const item of list) {
    const safeAddr = item.ip.includes(':') ? `[${item.ip}]` : item.ip;
    let portConfigs = [];

    if (item.port) {
      const port = item.port;
      if (cfHttpsPorts.includes(port)) {
        portConfigs.push({ port, tls: true });
      } else if (cfHttpPorts.includes(port)) {
        if (!disableNonTLS) portConfigs.push({ port, tls: false });
      } else {
        portConfigs.push({ port, tls: true });
      }
    } else {
      defaultHttpsPorts.forEach(p => portConfigs.push({ port: p, tls: true }));
      defaultHttpPorts.forEach(p => portConfigs.push({ port: p, tls: false }));
    }

    for (const { port, tls } of portConfigs) {
      const nodeName = makeName(item);
      if (tls) {
        const params = new URLSearchParams({
          encryption: 'none', security: 'tls', sni: workerDomain,
          fp: enableECH ? 'chrome' : 'randomized', type: 'ws',
          host: workerDomain, path: wsPath
        });
        applyAlpnToParams(params);
        if (enableECH) {
          const dns = customDNS || 'https://223.5.5.5/dns-query';
          const echDomain = customECHDomain || 'cloudflare-ech.com';
          params.set('ech', `${echDomain}+${dns}`);
        }
        links.push(`${proto}://${user}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      } else {
        const params = new URLSearchParams({
          encryption: 'none', security: 'none', type: 'ws',
          host: workerDomain, path: wsPath
        });
        links.push(`${proto}://${user}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      }
    }
  }
  return links;
}

// ============================================================
// Trojan link generator
// ============================================================
async function generateTrojanLinks(list, user, workerDomain, echConfig = null, skipNumbering = false, aliasNamer = null) {
  const cfHttpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const cfHttpsPorts = [443, 2053, 2083, 2087, 2096, 8443];
  const defaultHttpsPorts = [443];
  const defaultHttpPorts = disableNonTLS ? [] : [80];
  const links = [];
  const wsPath = '/?ed=2048';
  const password = transportPath || user;
  const makeName = aliasNamer || createPreferredNodeNamer(skipNumbering);

  for (const item of list) {
    const safeAddr = item.ip.includes(':') ? `[${item.ip}]` : item.ip;
    let portConfigs = [];

    if (item.port) {
      const port = item.port;
      if (cfHttpsPorts.includes(port)) {
        portConfigs.push({ port, tls: true });
      } else if (cfHttpPorts.includes(port)) {
        if (!disableNonTLS) portConfigs.push({ port, tls: false });
      } else {
        portConfigs.push({ port, tls: true });
      }
    } else {
      defaultHttpsPorts.forEach(p => portConfigs.push({ port: p, tls: true }));
      defaultHttpPorts.forEach(p => portConfigs.push({ port: p, tls: false }));
    }

    for (const { port, tls } of portConfigs) {
      const nodeName = makeName(item);
      if (tls) {
        const params = new URLSearchParams({
          security: 'tls', sni: workerDomain, fp: 'chrome',
          type: 'ws', host: workerDomain, path: wsPath
        });
        applyAlpnToParams(params);
        if (enableECH) {
          const dns = customDNS || 'https://223.5.5.5/dns-query';
          const echDomain = customECHDomain || 'cloudflare-ech.com';
          params.set('ech', `${echDomain}+${dns}`);
        }
        links.push(`${atob('dHJvamFuOi8v')}${password}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      } else {
        const params = new URLSearchParams({
          security: 'none', type: 'ws', host: workerDomain, path: wsPath
        });
        links.push(`${atob('dHJvamFuOi8v')}${password}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
      }
    }
  }
  return links;
}

// ============================================================
// XHTTP link generator
// ============================================================
function generateXhttpLinks(list, user, workerDomain, echConfig = null, skipNumbering = false, aliasNamer = null) {
  const links = [];
  const nodePath = user.substring(0, 8);
  const makeName = aliasNamer || createPreferredNodeNamer(skipNumbering);

  for (const item of list) {
    const safeAddr = item.ip.includes(':') ? `[${item.ip}]` : item.ip;
    const port = item.port || 443;
    const nodeName = makeName(item);
    const params = new URLSearchParams({
      encryption: 'none', security: 'tls', sni: workerDomain, fp: 'chrome',
      type: 'xhttp', host: workerDomain, path: `/${nodePath}`, mode: 'stream-one'
    });
    applyAlpnToParams(params);
    if (enableECH) {
      const dns = customDNS || 'https://223.5.5.5/dns-query';
      const echDomain = customECHDomain || 'cloudflare-ech.com';
      params.set('ech', `${echDomain}+${dns}`);
    }
    links.push(`${decodeBase64('dmxlc3M6Ly8=')}${user}@${safeAddr}:${port}?${params.toString()}#${encodeURIComponent(nodeName)}`);
  }
  return links;
}

// ============================================================
// GitHub-sourced preferred list generators
// ============================================================
function generateVlessLinksFromGitHub(list, user, workerDomain, echConfig = null, skipNumbering = false, aliasNamer = null) {
  const cfHttpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const cfHttpsPorts = [443, 2053, 2083, 2087, 2096, 8443];
  const links = [];
  const wsPath = '/?ed=2048';
  const proto = atob('dmxlc3M=');
  const makeName = aliasNamer || createPreferredNodeNamer(skipNumbering);

  for (const item of list) {
    const port = item.port;
    const safeAddr = item.ip.includes(':') ? `[${item.ip}]` : item.ip;
    if (cfHttpsPorts.includes(port)) {
      const nodeName = makeName(item);
      let link = `${proto}://${user}@${safeAddr}:${port}?encryption=none&security=tls&sni=${workerDomain}&fp=${enableECH ? 'chrome' : 'randomized'}&type=ws&host=${workerDomain}&path=${wsPath}`;
      if (customALPN) link += `&alpn=${encodeURIComponent(customALPN)}`;
      if (enableECH) {
        const dns = customDNS || 'https://223.5.5.5/dns-query';
        const echDomain = customECHDomain || 'cloudflare-ech.com';
        link += `&ech=${encodeURIComponent(`${echDomain}+${dns}`)}`;
      }
      link += `#${encodeURIComponent(nodeName)}`;
      links.push(link);
    } else if (cfHttpPorts.includes(port)) {
      if (!disableNonTLS) {
        const nodeName = makeName(item);
        links.push(`${proto}://${user}@${safeAddr}:${port}?encryption=none&security=none&type=ws&host=${workerDomain}&path=${wsPath}#${encodeURIComponent(nodeName)}`);
      }
    } else {
      const nodeName = makeName(item);
      let link = `${proto}://${user}@${safeAddr}:${port}?encryption=none&security=tls&sni=${workerDomain}&fp=${enableECH ? 'chrome' : 'randomized'}&type=ws&host=${workerDomain}&path=${wsPath}`;
      if (customALPN) link += `&alpn=${encodeURIComponent(customALPN)}`;
      if (enableECH) {
        const dns = customDNS || 'https://223.5.5.5/dns-query';
        const echDomain = customECHDomain || 'cloudflare-ech.com';
        link += `&ech=${encodeURIComponent(`${echDomain}+${dns}`)}`;
      }
      link += `#${encodeURIComponent(nodeName)}`;
      links.push(link);
    }
  }
  return links;
}

async function generateTrojanLinksFromGitHub(list, user, workerDomain, echConfig = null, skipNumbering = false, aliasNamer = null) {
  const cfHttpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const cfHttpsPorts = [443, 2053, 2083, 2087, 2096, 8443];
  const links = [];
  const wsPath = '/?ed=2048';
  const password = transportPath || user;
  const makeName = aliasNamer || createPreferredNodeNamer(skipNumbering);

  for (const item of list) {
    const port = item.port;
    const safeAddr = item.ip.includes(':') ? `[${item.ip}]` : item.ip;
    if (cfHttpsPorts.includes(port)) {
      const nodeName = makeName(item);
      let link = `${atob('dHJvamFuOi8v')}${password}@${safeAddr}:${port}?security=tls&sni=${workerDomain}&fp=chrome&type=ws&host=${workerDomain}&path=${wsPath}`;
      if (customALPN) link += `&alpn=${encodeURIComponent(customALPN)}`;
      if (enableECH) {
        const dns = customDNS || 'https://223.5.5.5/dns-query';
        const echDomain = customECHDomain || 'cloudflare-ech.com';
        link += `&ech=${encodeURIComponent(`${echDomain}+${dns}`)}`;
      }
      link += `#${encodeURIComponent(nodeName)}`;
      links.push(link);
    } else if (cfHttpPorts.includes(port)) {
      if (!disableNonTLS) {
        const nodeName = makeName(item);
        links.push(`${atob('dHJvamFuOi8v')}${password}@${safeAddr}:${port}?security=none&type=ws&host=${workerDomain}&path=${wsPath}#${encodeURIComponent(nodeName)}`);
      }
    } else {
      const nodeName = makeName(item);
      let link = `${atob('dHJvamFuOi8v')}${password}@${safeAddr}:${port}?security=tls&sni=${workerDomain}&fp=chrome&type=ws&host=${workerDomain}&path=${wsPath}`;
      if (customALPN) link += `&alpn=${encodeURIComponent(customALPN)}`;
      if (enableECH) {
        const dns = customDNS || 'https://223.5.5.5/dns-query';
        const echDomain = customECHDomain || 'cloudflare-ech.com';
        link += `&ech=${encodeURIComponent(`${echDomain}+${dns}`)}`;
      }
      link += `#${encodeURIComponent(nodeName)}`;
      links.push(link);
    }
  }
  return links;
}

// ============================================================
// Preferred IP fetching (wetest.vip pages)
// ============================================================
async function fetchPreferredAddressList() {
  const v4Url = "https://www.wetest.vip/page/cloudflare/address_v4.html";
  const v6Url = "https://www.wetest.vip/page/cloudflare/address_v6.html";
  let results = [];

  const ipv4Enabled = getConfigValue('ipv4', '') === '' || getConfigValue('ipv4', 'yes') !== 'no';
  const ipv6Enabled = getConfigValue('ipv6', '') === '' || getConfigValue('ipv6', 'yes') !== 'no';
  const mobileEnabled = getConfigValue('ispMobile', '') === '' || getConfigValue('ispMobile', 'yes') !== 'no';
  const unicomEnabled = getConfigValue('ispUnicom', '') === '' || getConfigValue('ispUnicom', 'yes') !== 'no';
  const telecomEnabled = getConfigValue('ispTelecom', '') === '' || getConfigValue('ispTelecom', 'yes') !== 'no';

  try {
    const fetches = [];
    fetches.push(ipv4Enabled ? parsePreferredPage(v4Url) : Promise.resolve([]));
    fetches.push(ipv6Enabled ? parsePreferredPage(v6Url) : Promise.resolve([]));
    const [v4List, v6List] = await Promise.all(fetches);
    results = [...v4List, ...v6List];

    if (results.length > 0) {
      results = results.filter(item => {
        const isp = item.isp || '';
        if (isp.includes('移动') && !mobileEnabled) return false;
        if (isp.includes('联通') && !unicomEnabled) return false;
        if (isp.includes('电信') && !telecomEnabled) return false;
        return true;
      });
    }
    if (results.length > 0) return results;
  } catch (ignored) {}
  return [];
}

async function parsePreferredPage(url) {
  try {
    const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!resp.ok) return [];
    const page = await resp.text();
    const results = [];
    const rowRegex = /<tr[\s\S]*?<\/tr>/g;
    const cellRegex = /<td data-label="线路名称">(.+?)<\/td>[\s\S]*?<td data-label="优选地址">([\d.:a-fA-F]+)<\/td>[\s\S]*?<td data-label="数据中心">(.+?)<\/td>/;
    let match;
    while ((match = rowRegex.exec(page)) !== null) {
      const row = match[0];
      const cells = row.match(cellRegex);
      if (cells && cells[1] && cells[2]) {
        const colo = cells[3] ? cells[3].trim().replace(/<.*?>/g, '') : '';
        results.push({
          isp: cells[1].trim().replace(/<.*?>/g, ''),
          ip: cells[2].trim(),
          colo
        });
      }
    }
    return results;
  } catch (err) {
    return [];
  }
}

// ============================================================
// GitHub preferred list fetcher
// ============================================================
async function fetchGitHubPreferredList() {
  const url = preferredAddressSource;
  try {
    const urlList = url.includes(',')
      ? url.split(',').map(u => u.trim()).filter(u => u)
      : [url];
    const apiResults = await fetchPreferredApi(urlList, '443', 5000);
    if (apiResults.length > 0) {
      const results = [];
      const regex = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
      for (const item of apiResults) {
        const m = item.match(regex);
        if (m) {
          results.push({ ip: m[1], port: parseInt(m[2] || '443', 10), name: m[3]?.trim() || m[1] });
        }
      }
      return results;
    }

    const resp = await fetch(url);
    if (!resp.ok) return [];
    const text = await resp.text();
    const results = [];
    const lines = text.trim().replace(/\r/g, "").split('\n');
    const lineRegex = /^([^:]+):(\d+)#(.*)$/;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      const m = trimmed.match(lineRegex);
      if (m) {
        results.push({ ip: m[1], port: parseInt(m[2], 10), name: m[3].trim() || m[1] });
      }
    }
    return results;
  } catch (err) {
    return [];
  }
}

// ============================================================
// Preferred API fetcher (multi-URL, multi-format)
// ============================================================
async function fetchPreferredApi(urlList, defaultPort = '443', timeout = 3000) {
  if (!urlList?.length) return [];
  const resultSet = new Set();

  await Promise.allSettled(urlList.map(async url => {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);
      const resp = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);

      let text = '';
      try {
        const buffer = await resp.arrayBuffer();
        const contentType = (resp.headers.get('content-type') || '').toLowerCase();
        const charset = contentType.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || '';
        let decoders = ['utf-8', 'gb2312'];
        if (charset.includes('gb') || charset.includes('gbk') || charset.includes('gb2312')) {
          decoders = ['gb2312', 'utf-8'];
        }
        let decoded = false;
        for (const enc of decoders) {
          try {
            const result = new TextDecoder(enc).decode(buffer);
            if (result && result.length > 0 && !result.includes('\ufffd')) {
              text = result;
              decoded = true;
              break;
            } else if (result && result.length > 0) {
              continue;
            }
          } catch (ignored) {
            continue;
          }
        }
        if (!decoded) text = await resp.text();
        if (!text || text.trim().length === 0) return;
      } catch (ignored) {
        return;
      }

      const lines = text.trim().split('\n').map(l => l.trim()).filter(l => l);
      const isCsv = lines.length > 1 && lines[0].includes(',');
      const ipv6Pattern = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;

      if (!isCsv) {
        lines.forEach(line => {
          const hashIndex = line.indexOf('#');
          const [hostPart, remark] = hashIndex > -1
            ? [line.substring(0, hashIndex), line.substring(hashIndex)]
            : [line, ''];
          let hasPort = false;
          if (hostPart.startsWith('[')) {
            hasPort = /\]:(\d+)$/.test(hostPart);
          } else {
            const colonIndex = hostPart.lastIndexOf(':');
            hasPort = colonIndex > -1 && /^\d+$/.test(hostPart.substring(colonIndex + 1));
          }
          const port = new URL(url).searchParams.get('port') || defaultPort;
          resultSet.add(hasPort ? line : `${hostPart}:${port}${remark}`);
        });
      } else {
        const headers = lines[0].split(',').map(h => h.trim());
        const dataLines = lines.slice(1);
        if (headers.includes('IP地址') && headers.includes('端口') && headers.includes('数据中心')) {
          const ipIndex = headers.indexOf('IP地址');
          const portIndex = headers.indexOf('端口');
          const remarkIndex = headers.indexOf('国家') > -1 ? headers.indexOf('国家')
            : headers.indexOf('城市') > -1 ? headers.indexOf('城市') : headers.indexOf('数据中心');
          const tlsIndex = headers.indexOf('TLS');
          dataLines.forEach(line => {
            const cols = line.split(',').map(c => c.trim());
            if (tlsIndex !== -1 && cols[tlsIndex]?.toLowerCase() !== 'true') return;
            const wrappedIp = ipv6Pattern.test(cols[ipIndex]) ? `[${cols[ipIndex]}]` : cols[ipIndex];
            resultSet.add(`${wrappedIp}:${cols[portIndex]}#${cols[remarkIndex]}`);
          });
        } else if (headers.some(h => h.includes('IP')) && headers.some(h => h.includes('延迟')) && headers.some(h => h.includes('下载速度'))) {
          const ipIndex = headers.findIndex(h => h.includes('IP'));
          const latencyIndex = headers.findIndex(h => h.includes('延迟'));
          const speedIndex = headers.findIndex(h => h.includes('下载速度'));
          const port = new URL(url).searchParams.get('port') || defaultPort;
          dataLines.forEach(line => {
            const cols = line.split(',').map(c => c.trim());
            const wrappedIp = ipv6Pattern.test(cols[ipIndex]) ? `[${cols[ipIndex]}]` : cols[ipIndex];
            resultSet.add(`${wrappedIp}:${port}#CF优选 ${cols[latencyIndex]}ms ${cols[speedIndex]}MB/s`);
          });
        }
      }
    } catch (ignored) {}
  }));

  return Array.from(resultSet);
}

// ============================================================
// Main subscription request handler
// ============================================================
async function handleSubscriptionRequest(request, user, url = null) {
  if (!url) url = new URL(request.url);
  const finalLinks = [];
  const workerDomain = url.hostname;
  const target = url.searchParams.get('target') || 'base64';
  const aliasNamer = createPreferredNodeNamer(false);

  let echConfig = null;
  if (enableECH) {
    const dns = customDNS || 'https://223.5.5.5/dns-query';
    const echDomain = customECHDomain || 'cloudflare-ech.com';
    echConfig = `${echDomain}+${dns}`;
  }

  async function addNodesFromList(list) {
    if (enableVless) {
      finalLinks.push(...generateVlessLinks(list, user, workerDomain, echConfig, false, aliasNamer));
    }
    if (enableTrojan) {
      finalLinks.push(...(await generateTrojanLinks(list, user, workerDomain, echConfig, false, aliasNamer)));
    }
    if (enableXhttp) {
      finalLinks.push(...generateXhttpLinks(list, user, workerDomain, echConfig, false, aliasNamer));
    }
  }

  // Native address
  if (enableNativeAddress) {
    if (currentWorkerRegion === 'CUSTOM') {
      await addNodesFromList([{ ip: workerDomain, isp: '原生地址' }]);
    } else {
      try {
        await addNodesFromList([{ ip: workerDomain, isp: '原生地址' }]);
      } catch (err) {
        if (!currentWorkerRegion) currentWorkerRegion = await detectWorkerRegion(request);
        const backup = await getBackupAddress(currentWorkerRegion);
        if (backup) {
          fallbackAddress = backup.domain + ':' + backup.port;
          await addNodesFromList([{ ip: backup.domain, isp: decodeBase64('UHJveHlJUC0=') + currentWorkerRegion }]);
        } else {
          await addNodesFromList([{ ip: workerDomain, isp: '原生地址' }]);
        }
      }
    }
  }

  const hasCustomPreferred = customPreferredAddressList.length > 0 || customPreferredDomainList.length > 0;

  if (disablePreferred) {
    // skip
  } else if (hasCustomPreferred) {
    if (customPreferredAddressList.length > 0 && enablePreferredIP) {
      await addNodesFromList(customPreferredAddressList);
    }
    if (customPreferredDomainList.length > 0 && enablePreferredDomain) {
      const domainList = customPreferredDomainList.map(d => ({ ip: d.domain, isp: d.name || d.domain }));
      await addNodesFromList(domainList);
    }
  } else {
    if (enablePreferredDomain) {
      const domainList = DIRECT_DOMAIN_LIST.map(d => ({ ip: d.domain, isp: d.name || d.domain }));
      await addNodesFromList(domainList);
    }
    if (enablePreferredIP) {
      if (!preferredAddressSource) {
        try {
          const addrList = await fetchPreferredAddressList();
          if (addrList.length > 0) await addNodesFromList(addrList);
        } catch (err) {
          if (!currentWorkerRegion) currentWorkerRegion = await detectWorkerRegion(request);
          const backup = await getBackupAddress(currentWorkerRegion);
          if (backup) {
            fallbackAddress = backup.domain + ':' + backup.port;
            await addNodesFromList([{ ip: backup.domain, isp: decodeBase64('UHJveHlJUC0=') + currentWorkerRegion }]);
          }
        }
      }
    }
    if (enableGitHubPreferred) {
      try {
        const githubList = await fetchGitHubPreferredList();
        if (githubList.length > 0) {
          if (enableVless) {
            finalLinks.push(...generateVlessLinksFromGitHub(githubList, user, workerDomain, echConfig, false, aliasNamer));
          }
          if (enableTrojan) {
            finalLinks.push(...(await generateTrojanLinksFromGitHub(githubList, user, workerDomain, echConfig, false, aliasNamer)));
          }
          if (enableXhttp) {
            finalLinks.push(...generateXhttpLinks(githubList, user, workerDomain, echConfig, false, aliasNamer));
          }
        }
      } catch (err) {
        if (!currentWorkerRegion) currentWorkerRegion = await detectWorkerRegion(request);
        const backup = await getBackupAddress(currentWorkerRegion);
        if (backup) {
          fallbackAddress = backup.domain + ':' + backup.port;
          await addNodesFromList([{ ip: backup.domain, isp: decodeBase64('UHJveHlJUC0=') + currentWorkerRegion }]);
        }
      }
    }
  }

  if (finalLinks.length === 0) {
    const errorNote = "所有节点获取失败";
    const proto = atob('dmxlc3M=');
    const errorLink = `${proto}://00000000-0000-0000-0000-000000000000@127.0.0.1:80?encryption=none&security=none&type=ws&host=error.com&path=%2F#${encodeURIComponent(errorNote)}`;
    finalLinks.push(errorLink);
  }

  let content;
  let contentType = 'text/plain; charset=utf-8';

  switch (target.toLowerCase()) {
    case atob('Y2xhc2g='):
    case atob('Y2xhc2hy'):
    case decodeBase64('c3Rhc2g='):
    case 'meta':
    case decodeBase64('Y2xhc2htZXRh'):
      content = generateClashYaml(finalLinks);
      contentType = 'text/yaml; charset=utf-8';
      break;
    case atob('c3VyZ2U='):
    case atob('c3VyZ2Uy'):
    case atob('c3VyZ2Uz'):
    case atob('c3VyZ2U0'):
      content = generateSurgeIni(finalLinks);
      break;
    case atob('cXVhbnR1bXVsdA=='):
    case atob('cXVhbng='):
    case decodeBase64('cXVhbng='):
      content = generateQuantumultX(finalLinks);
      break;
    case atob('c3M='):
    case atob('c3Ny'):
      content = btoa(finalLinks.join('\n'));
      break;
    case atob('djJyYXk='):
      content = btoa(finalLinks.join('\n'));
      break;
    case atob('bG9vbg=='):
      content = generateLoonIni(finalLinks);
      break;
    case atob('c2luZ2JveA=='):
    case decodeBase64('c2luZy1ib3g='):
    case decodeBase64('c2luZ2JveA=='):
      content = generateSingBoxJson(finalLinks);
      contentType = 'application/json; charset=utf-8';
      break;
    default:
      content = btoa(finalLinks.join('\n'));
  }

  const responseHeaders = {
    'Content-Type': contentType,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  };

  if (enableECH) {
    responseHeaders['X-ECH-Status'] = 'ENABLED';
    if (echConfig) responseHeaders['X-ECH-Config-Length'] = String(echConfig.length);
  }

  return new Response(content, { headers: responseHeaders });
}

// ============================================================
// Config API handler (GET/POST)
// ============================================================
async function handleConfigApi(request, env = {}) {
  if (request.method === 'GET') {
    if (!kvStore) {
      return new Response(JSON.stringify({ error: 'KV存储未配置', kvEnabled: false }), {
        status: 503, headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ ...getEffectiveConfigSnapshot(env), kvEnabled: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } else if (request.method === 'POST') {
    if (!kvStore) {
      return new Response(JSON.stringify({ success: false, message: 'KV存储未配置，无法保存配置' }), {
        status: 503, headers: { 'Content-Type': 'application/json' }
      });
    }
    try {
      const newConfig = await request.json();
      for (const [key, value] of Object.entries(newConfig)) {
        if (value === '' || value === null || value === undefined) {
          delete kvConfig[key];
        } else {
          kvConfig[key] = value;
        }
      }
      await saveKvConfig();
      refreshConfigState();
      if (newConfig.yx !== undefined) refreshCustomPreferredLists();
      return new Response(JSON.stringify({
        success: true, message: '配置已保存', config: getEffectiveConfigSnapshot(env)
      }), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, message: '保存配置失败: ' + err.message }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405, headers: { 'Content-Type': 'application/json' }
  });
}

// ============================================================
// Preferred-IPs API handler (GET/POST/DELETE)
// ============================================================
async function handlePreferredIpsApi(request) {
  if (!kvStore) {
    return new Response(JSON.stringify({
      success: false, error: 'KV存储未配置', message: '需要配置KV存储才能使用此功能'
    }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  const apiEnabled = getConfigValue('ae', '') === 'yes';
  if (!apiEnabled) {
    return new Response(JSON.stringify({
      success: false, error: 'API功能未启用',
      message: '出于安全考虑，优选IP API功能默认关闭。请在配置管理页面开启"允许API管理"选项后使用。'
    }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    if (request.method === 'GET') {
      const yxValue = getConfigValue('yx', '');
      const items = parsePreferredArray(yxValue);
      return new Response(JSON.stringify({ success: true, count: items.length, data: items }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (request.method === 'POST') {
      const body = await request.json();
      const toAdd = Array.isArray(body) ? body : [body];
      if (toAdd.length === 0) {
        return new Response(JSON.stringify({ success: false, error: '请求数据为空', message: '请提供IP数据' }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      const yxValue = getConfigValue('yx', '');
      let items = parsePreferredArray(yxValue);
      const added = [];
      const skipped = [];
      const errors = [];

      for (const item of toAdd) {
        if (!item.ip) {
          errors.push({ ip: '未知', reason: 'IP地址是必需的' });
          continue;
        }
        const port = item.port || 443;
        const name = item.name || `API优选-${item.ip}:${port}`;
        if (!isValidAddress(item.ip) && !isValidDomain(item.ip)) {
          errors.push({ ip: item.ip, reason: '无效的IP或域名格式' });
          continue;
        }
        const exists = items.some(i => i.ip === item.ip && i.port === port);
        if (exists) {
          skipped.push({ ip: item.ip, port, reason: '已存在' });
          continue;
        }
        const newItem = { ip: item.ip, port, name, addedAt: new Date().toISOString() };
        items.push(newItem);
        added.push(newItem);
      }

      if (added.length > 0) {
        const newYx = serializePreferredArray(items);
        await setConfigValue('yx', newYx);
        refreshCustomPreferredLists();
      }

      return new Response(JSON.stringify({
        success: added.length > 0,
        message: `成功添加 ${added.length} 个IP`,
        added: added.length, skipped: skipped.length, errors: errors.length,
        data: {
          addedIPs: added,
          skippedIPs: skipped.length > 0 ? skipped : undefined,
          errors: errors.length > 0 ? errors : undefined
        }
      }), { headers: { 'Content-Type': 'application/json' } });
    } else if (request.method === 'DELETE') {
      const body = await request.json();
      if (body.all === true) {
        const yxValue = getConfigValue('yx', '');
        const items = parsePreferredArray(yxValue);
        const count = items.length;
        await setConfigValue('yx', '');
        refreshCustomPreferredLists();
        return new Response(JSON.stringify({
          success: true, message: `已清空所有优选IP，共删除 ${count} 个`, deletedCount: count
        }), { headers: { 'Content-Type': 'application/json' } });
      }
      if (!body.ip) {
        return new Response(JSON.stringify({
          success: false, error: 'IP地址是必需的',
          message: '请提供要删除的ip字段，或使用 {"all": true} 清空所有'
        }), { status: 400, headers: { 'Content-Type': 'application/json' } });
      }
      const port = body.port || 443;
      const yxValue = getConfigValue('yx', '');
      let items = parsePreferredArray(yxValue);
      const originalLen = items.length;
      const filtered = items.filter(i => !(i.ip === body.ip && i.port === port));
      if (filtered.length === originalLen) {
        return new Response(JSON.stringify({
          success: false, error: '优选IP不存在', message: `${body.ip}:${port} 未找到`
        }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      }
      const newYx = serializePreferredArray(filtered);
      await setConfigValue('yx', newYx);
      refreshCustomPreferredLists();
      return new Response(JSON.stringify({
        success: true, message: '优选IP已删除', deleted: { ip: body.ip, port }
      }), { headers: { 'Content-Type': 'application/json' } });
    } else {
      return new Response(JSON.stringify({
        success: false, error: '不支持的请求方法', message: '支持的方法: GET, POST, DELETE'
      }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (err) {
    return new Response(JSON.stringify({
      success: false, error: '处理请求失败', message: err.message
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

// ============================================================
// Config state refresh helpers
// ============================================================
function refreshConfigState() {
  const effective = getEffectiveConfigSnapshot();
  const manualRegion = effective.wk;
  if (manualRegion && manualRegion.trim()) {
    manualWorkerRegion = manualRegion.trim().toUpperCase();
    currentWorkerRegion = manualWorkerRegion;
  } else {
    const proxyValue = effective.p;
    if (proxyValue && proxyValue.trim()) {
      currentWorkerRegion = 'CUSTOM';
    } else {
      manualWorkerRegion = '';
      currentWorkerRegion = '';
    }
  }
  enableRegionMatching = !(effective.rm && effective.rm.toLowerCase() === 'no');
  enableVless = effective.ev === 'yes';
  enableTrojan = effective.et === 'yes';
  enableXhttp = effective.ex === 'yes';
  transportPath = effective.tp || '';
  subscriptionConverterUrl = effective.scu || CONFIG_DEFAULTS.scu;
  enablePreferredDomain = effective.epd === 'yes';
  enablePreferredIP = effective.epi === 'yes';
  enableGitHubPreferred = effective.egi === 'yes';
  enableNativeAddress = effective.ena === 'yes';
  enableECH = effective.ech === 'yes';
  customDNS = effective.customDNS || CONFIG_DEFAULTS.customDNS;
  customECHDomain = effective.customECHDomain || CONFIG_DEFAULTS.customECHDomain;
  customALPN = normalizeAlpn(effective.alpn || '');
  disableNonTLS = effective.dkby === 'yes' || enableECH;
  enableProxyDowngrade = !!(effective.qj && effective.qj.toLowerCase() === 'no');
  customPath = effective.d || '';
  preferredAddressSource = effective.yxURL || '';
  fallbackAddress = effective.p ? effective.p.trim() : '';
  socks5Config = effective.s || '';
  if (socks5Config) {
    try {
      parsedSocks5Config = parseSocksConfig(socks5Config);
      isProxyEnabled = true;
    } catch (err) {
      isProxyEnabled = false;
    }
  } else {
    parsedSocks5Config = {};
    isProxyEnabled = false;
  }
  disablePreferred = !!(effective.yxby && effective.yxby.toLowerCase() === 'yes');
}

function refreshCustomPreferredLists() {
  const yxValue = getConfigValue('yx', '');
  if (yxValue) {
    try {
      const preferredList = yxValue.split(',').map(item => item.trim()).filter(item => item);
      customPreferredAddressList = [];
      customPreferredDomainList = [];
      preferredList.forEach(item => {
        let nodeName = '';
        let addressPart = item;
        if (item.includes('#')) {
          const parts = item.split('#');
          addressPart = parts[0].trim();
          nodeName = parts[1].trim();
        }
        const { address, port } = parseAddressPort(addressPart);
        if (!nodeName) nodeName = '自定义优选-' + address + (port ? ':' + port : '');
        if (isValidAddress(address)) {
          customPreferredAddressList.push({ ip: address, port, isp: nodeName });
        } else {
          customPreferredDomainList.push({ domain: address, port, name: nodeName });
        }
      });
    } catch (err) {
      customPreferredAddressList = [];
      customPreferredDomainList = [];
    }
  } else {
    customPreferredAddressList = [];
    customPreferredDomainList = [];
  }
}

function parsePreferredArray(value) {
  if (!value || !value.trim()) return [];
  const items = value.split(',').map(item => item.trim()).filter(item => item);
  const result = [];
  for (const item of items) {
    let nodeName = '';
    let addressPart = item;
    if (item.includes('#')) {
      const parts = item.split('#');
      addressPart = parts[0].trim();
      nodeName = parts[1].trim();
    }
    const { address, port } = parseAddressPort(addressPart);
    if (!nodeName) nodeName = address + (port ? ':' + port : '');
    result.push({ ip: address, port: port || 443, name: nodeName, addedAt: new Date().toISOString() });
  }
  return result;
}

function serializePreferredArray(array) {
  if (!array || array.length === 0) return '';
  return array.map(item => {
    const port = item.port || 443;
    return `${item.ip}:${port}#${item.name}`;
  }).join(',');
}

function isValidDomain(domain) {
  const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(domain);
}

async function parseTextToArray(content) {
  let processed = content.replace(/[\t"'\r\n]+/g, ',').replace(/,+/g, ',');
  if (processed.charAt(0) == ',') processed = processed.slice(1);
  if (processed.charAt(processed.length - 1) == ',') processed = processed.slice(0, processed.length - 1);
  return processed.split(',');
}
// ============================================================
// UI — Glassmorphism design system (replaces Matrix terminal)
// ============================================================
const UI_FONT_LINK = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">';

function uiBaseStyles() {
  return `
:root{
  --bg-0:#070b15; --bg-1:#0b1222; --bg-2:#101a30;
  --glass:rgba(255,255,255,.045); --glass-2:rgba(255,255,255,.075);
  --stroke:rgba(255,255,255,.09); --stroke-2:rgba(255,255,255,.17);
  --t0:#eef2f9; --t1:#a9b4c9; --t2:#67718c;
  --teal:#2dd4bf; --cyan:#38bdf8; --amber:#fbbf24; --rose:#fb7185; --violet:#a78bfa; --green:#4ade80;
  --g-teal:rgba(45,212,191,.15); --g-amber:rgba(251,191,36,.12); --g-violet:rgba(167,139,250,.12);
  --shadow:0 20px 50px -18px rgba(2,6,18,.7);
  --r:14px;
}
[data-theme="light"]{
  --bg-0:#eef1f8; --bg-1:#f7f9fd; --bg-2:#ffffff;
  --glass:rgba(255,255,255,.62); --glass-2:rgba(255,255,255,.82);
  --stroke:rgba(15,23,42,.09); --stroke-2:rgba(15,23,42,.16);
  --t0:#0e1626; --t1:#48546c; --t2:#8b95ab;
  --g-teal:rgba(13,148,136,.12); --g-amber:rgba(217,119,6,.10); --g-violet:rgba(124,58,237,.10);
  --shadow:0 18px 44px -20px rgba(30,41,59,.28);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family:'Vazirmatn','Space Grotesk',system-ui,sans-serif;
  background:var(--bg-0); color:var(--t0);
  min-height:100vh; overflow-x:hidden; position:relative;
  transition:background .35s ease,color .35s ease;
}
/* layered ambient background: base gradient + dot grid + structured glows */
body::before{
  content:""; position:fixed; inset:0; z-index:-3;
  background:
    radial-gradient(1100px 620px at 12% -8%, var(--g-teal), transparent 60%),
    radial-gradient(900px 560px at 96% 18%, var(--g-violet), transparent 58%),
    radial-gradient(820px 520px at 68% 108%, var(--g-amber), transparent 60%),
    linear-gradient(160deg, var(--bg-1), var(--bg-0) 55%);
}
body::after{
  content:""; position:fixed; inset:0; z-index:-2; pointer-events:none;
  background-image:radial-gradient(var(--stroke) 1px, transparent 1px);
  background-size:26px 26px;
  mask-image:radial-gradient(ellipse at 50% 18%, #000 12%, transparent 78%);
  opacity:.55;
}
::selection{background:var(--teal);color:#04231e}
::-webkit-scrollbar{width:9px;height:9px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,var(--teal),var(--cyan));border-radius:99px}

h1,h2,h3,.disp{font-family:'Space Grotesk','Vazirmatn',sans-serif;letter-spacing:-.01em}

/* ---------- glass surfaces ---------- */
.glass{
  background:linear-gradient(150deg,var(--glass-2),var(--glass));
  border:1px solid var(--stroke);
  border-radius:var(--r);
  backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
  box-shadow:var(--shadow), inset 0 1px 0 rgba(255,255,255,.06);
  position:relative; overflow:hidden;
}
.glass::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);opacity:.6;pointer-events:none}
.card{padding:22px 24px}
.card + .card{margin-top:18px}

.eyebrow{font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--teal);display:flex;align-items:center;gap:8px}
.eyebrow::before{content:"";width:18px;height:2px;background:var(--teal);border-radius:2px;box-shadow:0 0 8px var(--teal)}
.card h2{font-size:17px;margin:8px 0 4px}
.card .hint{font-size:12.5px;color:var(--t2);line-height:1.7}

/* ---------- top bar ---------- */
.topbar{
  position:sticky;top:0;z-index:60;
  display:flex;align-items:center;gap:14px;
  padding:14px clamp(16px,4vw,36px);
  background:linear-gradient(180deg,var(--glass-2),var(--glass));
  border-bottom:1px solid var(--stroke);
  backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px);
}
.brand{display:flex;align-items:center;gap:11px;font-family:'Space Grotesk';font-weight:700;font-size:16px;letter-spacing:.02em}
.brand .mark{
  width:32px;height:32px;border-radius:9px;flex:none;position:relative;
  background:conic-gradient(from 210deg,var(--teal),var(--cyan),var(--violet),var(--teal));
  box-shadow:0 0 18px var(--g-teal);
}
.brand .mark::after{content:"";position:absolute;inset:5px;border-radius:6px;background:var(--bg-1)}
.brand .mark::before{content:"";position:absolute;inset:11px;border-radius:50%;background:var(--teal);box-shadow:0 0 10px var(--teal);z-index:1;animation:pulse 2.4s ease-in-out infinite}
.brand small{display:block;font-size:10px;color:var(--t2);letter-spacing:.18em;font-weight:600}
.spacer{flex:1}

.pill{
  display:inline-flex;align-items:center;gap:8px;
  padding:7px 13px;border-radius:99px;font-size:12px;font-weight:600;
  background:var(--glass);border:1px solid var(--stroke);color:var(--t1);
}
.pill .dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 9px var(--green);animation:pulse 1.8s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.8)}}

.icon-btn,.select-wrap select{
  appearance:none;-webkit-appearance:none;
  background:var(--glass);border:1px solid var(--stroke);color:var(--t1);
  border-radius:10px;font-family:inherit;font-size:12.5px;font-weight:600;
  cursor:pointer;transition:all .22s ease;
}
.icon-btn{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;font-size:16px}
.icon-btn:hover{border-color:var(--stroke-2);color:var(--t0);transform:translateY(-1px);box-shadow:0 6px 16px -8px var(--g-teal)}
.select-wrap{position:relative}
.select-wrap select{padding:9px 32px 9px 13px;outline:none}
.select-wrap::after{content:"▾";position:absolute;right:11px;top:50%;transform:translateY(-50%);color:var(--t2);pointer-events:none;font-size:11px}
[dir="rtl"] .select-wrap::after{right:auto;left:11px}
.select-wrap select:hover{border-color:var(--stroke-2);color:var(--t0)}
.select-wrap select option{background:var(--bg-2);color:var(--t0)}

/* ---------- layout ---------- */
.wrap{max-width:1160px;margin:0 auto;padding:26px clamp(16px,4vw,36px) 130px}
.grid{display:grid;gap:18px}
.grid-2{grid-template-columns:1fr 1fr}
@media(max-width:900px){.grid-2{grid-template-columns:1fr}}

/* ---------- entry page ---------- */
.entry{min-height:calc(100vh - 67px);display:grid;grid-template-columns:1.05fr .95fr;gap:34px;align-items:center;padding:34px clamp(16px,5vw,56px) 60px;max-width:1180px;margin:0 auto}
@media(max-width:920px){.entry{grid-template-columns:1fr;gap:26px;padding-top:26px}}
.entry .lead h1{font-size:clamp(30px,4.6vw,46px);line-height:1.16;margin:14px 0 12px;font-weight:700}
.entry .lead h1 .accent{color:var(--teal);text-shadow:0 0 26px var(--g-teal)}
.entry .lead p{color:var(--t1);font-size:14.5px;line-height:1.9;max-width:46ch}
.readouts{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}

/* orbital relay animation */
.orbit{position:relative;width:min(300px,64vw);aspect-ratio:1;margin:8px 0 4px}
.orbit .ring{position:absolute;inset:0;border:1px dashed var(--stroke-2);border-radius:50%;animation:spin 26s linear infinite}
.orbit .ring.r2{inset:13%;animation-duration:18s;animation-direction:reverse;border-color:var(--stroke)}
.orbit .ring.r3{inset:27%;animation-duration:12s}
.orbit .core{position:absolute;inset:42%;border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--cyan),var(--teal) 60%,transparent 75%);box-shadow:0 0 34px var(--g-teal),0 0 70px var(--g-teal);animation:pulse 3s ease-in-out infinite}
.orbit .node{position:absolute;width:10px;height:10px;border-radius:50%;top:-5px;left:50%;margin-left:-5px}
.orbit .node.n1{background:var(--teal);box-shadow:0 0 12px var(--teal)}
.orbit .node.n2{background:var(--amber);box-shadow:0 0 12px var(--amber)}
.orbit .node.n3{background:var(--violet);box-shadow:0 0 12px var(--violet)}
@keyframes spin{to{transform:rotate(360deg)}}

/* ---------- forms & controls ---------- */
.field{margin-bottom:16px}
.field label{display:block;font-size:12.5px;font-weight:700;color:var(--t1);margin-bottom:7px;letter-spacing:.02em}
.field .sub{font-size:11.5px;color:var(--t2);margin-top:6px;line-height:1.7}
.input,select.input,textarea.input{
  width:100%;padding:11px 13px;border-radius:11px;outline:none;
  background:var(--glass);border:1px solid var(--stroke);color:var(--t0);
  font-family:inherit;font-size:13.5px;transition:all .22s ease;
}
.input::placeholder{color:var(--t2)}
.input:focus{border-color:var(--teal);box-shadow:0 0 0 3px var(--g-teal),0 0 18px var(--g-teal)}
.input[disabled]{opacity:.45;cursor:not-allowed}
select.input option{background:var(--bg-2)}

.switch{display:flex;align-items:center;gap:11px;cursor:pointer;padding:9px 0;user-select:none}
.switch input{display:none}
.switch .track{width:40px;height:22px;border-radius:99px;background:var(--glass-2);border:1px solid var(--stroke-2);position:relative;transition:all .25s ease;flex:none}
.switch .track::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--t2);transition:all .25s cubic-bezier(.34,1.56,.64,1)}
.switch input:checked + .track{background:linear-gradient(90deg,var(--teal),var(--cyan));border-color:transparent;box-shadow:0 0 14px var(--g-teal)}
.switch input:checked + .track::after{left:20px;background:#fff}
[dir="rtl"] .switch .track::after{left:auto;right:2px}
[dir="rtl"] .switch input:checked + .track::after{right:20px}
.switch .lbl{font-size:13px;font-weight:600;color:var(--t1)}
.switch:hover .lbl{color:var(--t0)}

.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  padding:11px 20px;border-radius:11px;border:1px solid var(--stroke-2);
  background:var(--glass-2);color:var(--t0);font-family:inherit;font-size:13px;font-weight:700;
  cursor:pointer;transition:all .22s ease;letter-spacing:.02em;
}
.btn:hover{transform:translateY(-2px);border-color:var(--teal);box-shadow:0 10px 24px -10px var(--g-teal)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(120deg,var(--teal),var(--cyan));border-color:transparent;color:#04231e;box-shadow:0 8px 26px -8px var(--g-teal)}
.btn-primary:hover{box-shadow:0 14px 34px -8px var(--g-teal);filter:brightness(1.06)}
.btn-danger{color:var(--rose);border-color:rgba(251,113,133,.4)}
.btn-danger:hover{border-color:var(--rose);box-shadow:0 10px 24px -10px rgba(251,113,133,.3)}
.btn-block{width:100%}
.btn[disabled]{opacity:.5;pointer-events:none}

/* client grid */
.client-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:11px;margin-top:14px}
.client-btn{
  padding:15px 10px;border-radius:12px;text-align:center;cursor:pointer;
  background:var(--glass);border:1px solid var(--stroke);color:var(--t1);
  font-family:'Space Grotesk';font-weight:700;font-size:12px;letter-spacing:.08em;
  transition:all .24s ease;position:relative;overflow:hidden;
}
.client-btn::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(255,255,255,.09),transparent);transform:translateX(-110%);transition:transform .55s ease}
.client-btn:hover::before{transform:translateX(110%)}
.client-btn:hover{transform:translateY(-3px);color:var(--teal);border-color:var(--teal);box-shadow:0 12px 26px -12px var(--g-teal)}
.sub-url{
  margin-top:15px;padding:13px 15px;border-radius:11px;display:none;
  background:var(--glass);border:1px dashed var(--stroke-2);
  font-family:'Space Grotesk',monospace;font-size:12px;color:var(--teal);
  word-break:break-all;line-height:1.7;cursor:pointer;transition:all .2s;
}
.sub-url:hover{border-color:var(--teal);box-shadow:0 0 16px var(--g-teal)}

/* status rows */
.status-row{display:flex;align-items:center;gap:11px;padding:10px 2px;border-bottom:1px dashed var(--stroke);font-size:13px}
.status-row:last-child{border-bottom:none}
.status-row .k{color:var(--t2);min-width:118px;font-size:12px;font-weight:600}
.status-row .v{color:var(--t0);font-weight:600;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.status-row .v .ok{color:var(--green)} .status-row .v .warn{color:var(--amber)} .status-row .v .err{color:var(--rose)}

/* latency results */
.lat-item{display:flex;align-items:center;gap:11px;padding:9px 11px;border-bottom:1px dashed var(--stroke);font-size:12.5px}
.lat-item:last-child{border-bottom:none}
.lat-item .addr{font-family:'Space Grotesk',monospace;color:var(--cyan);flex:1;word-break:break-all}
.lat-item .ms{color:var(--amber);font-weight:700;font-family:'Space Grotesk'}
.lat-item .colo{color:var(--t2);font-size:11.5px}
.lat-item input{accent-color:var(--teal);width:16px;height:16px;cursor:pointer}

/* toast */
.toast-stack{position:fixed;top:78px;inset-inline-end:18px;z-index:200;display:flex;flex-direction:column;gap:10px;max-width:min(380px,calc(100vw - 30px));pointer-events:none}
.toast{
  pointer-events:auto;display:flex;gap:11px;align-items:flex-start;
  padding:13px 15px;border-radius:12px;
  background:linear-gradient(150deg,var(--glass-2),var(--glass));
  border:1px solid var(--stroke-2);backdrop-filter:blur(16px);
  box-shadow:var(--shadow);font-size:12.5px;line-height:1.6;color:var(--t0);
  transform:translateX(120%);opacity:0;transition:all .38s cubic-bezier(.22,1,.36,1);
  border-inline-start:3px solid var(--teal);
}
[dir="rtl"] .toast{transform:translateX(-120%)}
.toast.show{transform:translateX(0);opacity:1}
.toast .ic{font-size:15px;flex:none}
.toast.success{border-inline-start-color:var(--green)} .toast.success .ic{color:var(--green)}
.toast.error{border-inline-start-color:var(--rose)} .toast.error .ic{color:var(--rose)}
.toast.warn{border-inline-start-color:var(--amber)} .toast.warn .ic{color:var(--amber)}
.toast.info{border-inline-start-color:var(--cyan)} .toast.info .ic{color:var(--cyan)}

/* floating action bar */
.fab-bar{
  position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:150;
  display:flex;align-items:center;gap:10px;padding:9px;border-radius:16px;
  background:linear-gradient(150deg,var(--glass-2),var(--glass));
  border:1px solid var(--stroke-2);backdrop-filter:blur(20px);box-shadow:var(--shadow);
}
.fab-bar .sep{width:1px;height:26px;background:var(--stroke-2)}
.fab-save{min-width:158px}
.fab-bar.dirty .fab-save{animation:glowpulse 1.4s ease-in-out infinite}
@keyframes glowpulse{0%,100%{box-shadow:0 8px 26px -8px var(--g-teal)}50%{box-shadow:0 8px 40px -4px var(--g-teal),0 0 0 3px var(--g-teal)}}

/* scroll reveal */
.reveal{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s cubic-bezier(.22,1,.36,1)}
.reveal.in{opacity:1;transform:translateY(0)}

a.link{color:var(--cyan);text-decoration:none;font-weight:600;font-size:13px;border-bottom:1px dashed transparent;transition:all .2s}
a.link:hover{color:var(--teal);border-bottom-color:var(--teal)}
.links-row{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;margin-top:14px}
.kv-badge{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:10px;font-size:12.5px;font-weight:700;margin-bottom:16px}
.kv-badge.on{background:var(--g-teal);color:var(--teal);border:1px solid rgba(45,212,191,.35)}
.kv-badge.off{background:rgba(251,191,36,.1);color:var(--amber);border:1px solid rgba(251,191,36,.35)}
.divider{height:1px;background:linear-gradient(90deg,transparent,var(--stroke-2),transparent);margin:18px 0}
.section-label{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);margin:16px 0 10px}
`;
}

function uiThemeScript() {
  return `
(function(){
  var t = localStorage.getItem('ui-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
function toggleTheme(){
  var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', cur);
  localStorage.setItem('ui-theme', cur);
  var b = document.getElementById('themeBtn');
  if (b) b.textContent = cur === 'light' ? '☾' : '☀';
}
function setLang(lang){
  localStorage.setItem('preferredLanguage', lang);
  var d = new Date(); d.setFullYear(d.getFullYear() + 1);
  document.cookie = 'preferredLanguage=' + lang + '; path=/; expires=' + d.toUTCString() + '; SameSite=Lax';
  window.location.reload();
}
function toast(msg, type){
  type = type || 'success';
  var stack = document.getElementById('toastStack'); if(!stack) return;
  var icons = {success:'✓', error:'✕', warn:'⚠', info:'ℹ'};
  var el = document.createElement('div');
  el.className = 'toast ' + type;
  var ic = document.createElement('span'); ic.className='ic'; ic.textContent = icons[type]||'ℹ';
  var bd = document.createElement('span'); bd.textContent = msg;
  el.appendChild(ic); el.appendChild(bd);
  stack.appendChild(el);
  requestAnimationFrame(function(){ el.classList.add('show'); });
  setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ el.remove(); }, 400); }, 3400);
}
document.addEventListener('DOMContentLoaded', function(){
  var tb = document.getElementById('themeBtn');
  if (tb) tb.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '☾' : '☀';
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.08}) : null;
  document.querySelectorAll('.reveal').forEach(function(el){ if(io){ io.observe(el);} else { el.classList.add('in'); } });
});
`;
}

// ============================================================
// Entry page (replaces Matrix terminal)
// ============================================================
async function renderEntryPage(isPersian, customPath) {
  const lang = isPersian ? 'fa-IR' : 'en-US';
  const dir = isPersian ? 'rtl' : 'ltr';
  const T = isPersian ? {
    brandSub: 'کنسول رله لبه', title: 'اتصال به', accent: 'رله لبه',
    desc: 'شناسه یا مسیر خود را وارد کنید تا به داشبورد مدیریت اشتراک و تنظیمات پروکسی دسترسی پیدا کنید. اتصال شما از طریق لبه Cloudflare مسیریابی می‌شود.',
    inputUuid: 'مقدار متغیر U (UUID) را وارد کنید…',
    inputPath: 'مقدار متغیر D (مسیر) را وارد کنید…',
    labelUuid: 'شناسه UUID', labelPath: 'مسیر سفارشی',
    connect: 'اتصال', connecting: 'در حال اتصال…',
    errUuid: 'فرمت UUID نامعتبر است', errEmpty: 'لطفاً یک مقدار وارد کنید',
    region: 'منطقه', secure: 'رمزگذاری‌شده', edge: 'لبه فعال', lang: 'زبان'
  } : {
    brandSub: 'EDGE RELAY CONSOLE', title: 'Connect to', accent: 'Edge Relay',
    desc: 'Enter your identifier or path to access the subscription and proxy configuration dashboard. Your traffic is routed through the Cloudflare edge.',
    inputUuid: 'Enter your U variable (UUID)…',
    inputPath: 'Enter your D variable (path)…',
    labelUuid: 'UUID Identifier', labelPath: 'Custom Path',
    connect: 'Connect', connecting: 'Connecting…',
    errUuid: 'Invalid UUID format', errEmpty: 'Please enter a value',
    region: 'Region', secure: 'Encrypted', edge: 'Edge Online', lang: 'Language'
  };
  const usePath = !!(customPath && customPath.trim());
  const html = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" data-theme="dark">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${T.brandSub}</title>${UI_FONT_LINK}
<style>${uiBaseStyles()}</style>
</head>
<body>
<div class="topbar">
  <div class="brand"><span class="mark"></span><span>CF·Edge<small>${T.brandSub}</small></span></div>
  <div class="spacer"></div>
  <span class="pill"><span class="dot"></span>${T.edge}</span>
  <div class="select-wrap"><select onchange="setLang(this.value)">
    <option value="en" ${!isPersian ? 'selected' : ''}>EN · English</option>
    <option value="fa" ${isPersian ? 'selected' : ''}>FA · فارسی</option>
  </select></div>
  <button class="icon-btn" id="themeBtn" onclick="toggleTheme()" aria-label="theme">☀</button>
</div>

<div class="entry">
  <div class="lead reveal in">
    <span class="eyebrow">CLOUDFLARE WORKERS · VLESS / TROJAN / XHTTP</span>
    <h1>${T.title} <span class="accent">${T.accent}</span></h1>
    <p>${T.desc}</p>
    <div class="orbit" aria-hidden="true">
      <div class="ring r1"><span class="node n1"></span></div>
      <div class="ring r2"><span class="node n2"></span></div>
      <div class="ring r3"><span class="node n3"></span></div>
      <div class="core"></div>
    </div>
    <div class="readouts">
      <span class="pill"><span class="dot"></span>${T.secure}</span>
      <span class="pill">◈ ${T.region}: <b id="regionPill" style="margin-inline-start:5px">…</b></span>
    </div>
  </div>

  <div class="glass card reveal in">
    <span class="eyebrow">${usePath ? T.labelPath : T.labelUuid}</span>
    <h2 style="margin-bottom:16px">${usePath ? T.labelPath : T.labelUuid}</h2>
    <div class="field">
      <input class="input" id="authInput" type="text"
        placeholder="${usePath ? T.inputPath : T.inputUuid}" autofocus
        autocomplete="off" spellcheck="false">
      <div class="sub" id="authErr" style="color:var(--rose);display:none"></div>
    </div>
    <button class="btn btn-primary btn-block" id="connectBtn" onclick="doConnect()">
      <span>⇢</span><span id="connectLbl">${T.connect}</span>
    </button>
  </div>
</div>

<div class="toast-stack" id="toastStack"></div>
<script>${uiThemeScript()}
var CUSTOM_PATH = ${JSON.stringify(usePath)};
var T_ERR_UUID = ${JSON.stringify(T.errUuid)};
var T_ERR_EMPTY = ${JSON.stringify(T.errEmpty)};
var T_CONNECTING = ${JSON.stringify(T.connecting)};
function isValidUuid(s){ return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\$/i.test(s); }
function doConnect(){
  var inp = document.getElementById('authInput');
  var err = document.getElementById('authErr');
  var v = inp.value.trim();
  err.style.display = 'none';
  if(!v){ err.textContent = T_ERR_EMPTY; err.style.display='block'; return; }
  if(!CUSTOM_PATH && !isValidUuid(v)){ err.textContent = T_ERR_UUID; err.style.display='block'; return; }
  document.getElementById('connectLbl').textContent = T_CONNECTING;
  document.getElementById('connectBtn').disabled = true;
  var target = '/' + (CUSTOM_PATH ? v.replace(/^\\//,'') : v);
  setTimeout(function(){ window.location.href = target; }, 450);
}
document.getElementById('authInput').addEventListener('keydown', function(e){
  if(e.key === 'Enter') doConnect();
});
(function(){
  var p = document.getElementById('regionPill');
  fetch('/region').then(function(r){ return r.json(); }).then(function(d){
    if(p && d.region) p.textContent = d.region;
  }).catch(function(){ if(p) p.textContent = '—'; });
})();
</script>
</body>
</html>`;
  return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

// ============================================================
// Dashboard page (replaces the old subscription/terminal page)
// ============================================================
async function handleSubscriptionPage(request, user = null) {
  if (!user) user = AUTH_UUID;
  const cookieHeader = request.headers.get('Cookie') || '';
  let cookieLang = null;
  if (cookieHeader) {
    for (const c of cookieHeader.split(';').map(x => x.trim())) {
      if (c.startsWith('preferredLanguage=')) { cookieLang = c.split('=')[1]; break; }
    }
  }
  let isPersian = false;
  if (cookieLang === 'fa' || cookieLang === 'fa-IR') isPersian = true;
  else if (cookieLang === 'en' || cookieLang === 'en-US') isPersian = false;
  else {
    const al = request.headers.get('Accept-Language') || '';
    const bl = al.split(',')[0].split('-')[0].toLowerCase();
    isPersian = (bl === 'fa') || al.includes('fa-IR') || al.includes('fa');
  }
  const lang = isPersian ? 'fa-IR' : 'en-US';
  const dir = isPersian ? 'rtl' : 'ltr';

  const T = isPersian ? {
    brandSub: 'داشبورد مدیریت', online: 'آنلاین',
    clients: 'انتخاب کلاینت', clientsHint: 'برای تولید لینک اشتراک مخصوص هر کلاینت کلیک کنید. لینک به‌صورت خودکار کپی می‌شود.',
    status: 'وضعیت سیستم', checking: 'در حال بررسی…',
    workerRegion: 'منطقه Worker', detectMethod: 'روش تشخیص', proxyIp: 'وضعیت ProxyIP',
    currentIp: 'IP فعلی', ech: 'وضعیت ECH', regionMatch: 'تطبیق منطقه', selLogic: 'منطق انتخاب',
    selLogicText: 'هم‌منطقه ← مجاور ← سایر',
    config: 'مدیریت تنظیمات', kvOn: '✓ ذخیره‌سازی KV فعال است', kvOff: '⚠ ذخیره‌سازی KV فعال نیست',
    region: 'تعیین منطقه (wk)', autoDetect: 'تشخیص خودکار',
    protocols: 'انتخاب پروتکل', enVless: 'فعال‌سازی VLESS', enTrojan: 'فعال‌سازی Trojan', enXhttp: 'فعال‌سازی xhttp',
    enEch: 'فعال‌سازی ECH', echHint: 'پیکربندی ECH به‌طور خودکار از DoH دریافت و به لینک‌ها اضافه می‌شود',
    customDns: 'سرور DNS سفارشی', echDomain: 'دامنه ECH سفارشی', alpn: 'TLS ALPN', alpnDefault: 'پیش‌فرض (مذاکره توسط کلاینت)',
    trojanPass: 'رمز عبور Trojan (tp)', trojanPassPh: 'خالی بگذارید تا از UUID استفاده شود',
    homepage: 'URL صفحه اصلی سفارشی (homepage)', homepagePh: 'مثال: https://example.com',
    customPath: 'مسیر سفارشی (d)', customIp: 'ProxyIP سفارشی (p)',
    prefIps: 'لیست IP ترجیحی (yx)', prefUrl: 'URL منبع IP ترجیحی (yxURL)',
    socks: 'پیکربندی SOCKS5 (s)',
    latency: 'تست تاخیر', latIp: 'IP/دامنه تست', latIpPh: 'چند مورد با کاما جدا شوند', latPort: 'پورت',
    threads: 'رشته‌ها', start: 'شروع تست', stop: 'توقف', testing: 'در حال تست…', done: 'تست کامل شد',
    overwrite: 'افزودن (جایگزین)', append: 'افزودن (ادامه)', selectAll: 'انتخاب همه',
    advanced: 'کنترل پیشرفته', subConv: 'آدرس تبدیل اشتراک (scu)',
    prefTypes: 'نوع ترجیحی داخلی', enNative: 'آدرس اصلی', enPrefDom: 'دامنه ترجیحی', enPrefIp: 'IP ترجیحی', enGithub: 'ترجیح سفارشی',
    ipFilters: 'فیلتر IP', apiMgmt: 'اجازه مدیریت API (ae)', apiDefault: 'پیش‌فرض (بسته)', apiYes: 'فعال',
    rm: 'تطبیق منطقه (rm)', rmDefault: 'پیش‌فرض (فعال)', rmNo: 'بستن',
    qj: 'کنترل کاهش سطح (qj)', qjDefault: 'پیش‌فرض', qjNo: 'فعال‌سازی کاهش',
    dkby: 'کنترل TLS (dkby)', dkbyDefault: 'پیش‌فرض (همه گره‌ها)', dkbyYes: 'فقط TLS',
    yxby: 'کنترل ترجیحی (yxby)', yxbyDefault: 'پیش‌فرض (فعال)', yxbyYes: 'بستن ترجیح',
    save: 'ذخیره همه', refresh: 'تازه‌سازی', reset: 'بازنشانی',
    saved: 'تنظیمات ذخیره شد', saveFail: 'ذخیره ناموفق', copied: 'لینک اشتراک کپی شد',
    links: 'لینک‌های مرتبط', github: 'پروژه GitHub', tools: 'ابزار ترجیح IP',
    curConfig: 'پیکربندی فعلی', pathType: 'نوع مسیر', uuidMode: 'مسیر UUID (u)', pathMode: 'مسیر سفارشی (d)',
    confirmReset: 'همه تنظیمات بازنشانی شود؟', needOne: 'حداقل یک پروتکل را فعال کنید',
    regionNames: { HK:'🇭🇰 هنگ کنگ', US:'🇺🇸 آمریکا', SG:'🇸🇬 سنگاپور', JP:'🇯🇵 ژاپن', KR:'🇰🇷 کره جنوبی', DE:'🇩🇪 آلمان', SE:'🇸🇪 سوئد', NL:'🇳🇱 هلند', FI:'🇫🇮 فنلاند', GB:'🇬🇧 بریتانیا' }
  } : {
    brandSub: 'MANAGEMENT DASHBOARD', online: 'Online',
    clients: 'Select Client', clientsHint: 'Click to generate a client-specific subscription link. It is copied automatically.',
    status: 'System Status', checking: 'Checking…',
    workerRegion: 'Worker Region', detectMethod: 'Detection Method', proxyIp: 'ProxyIP Status',
    currentIp: 'Current IP', ech: 'ECH Status', regionMatch: 'Region Match', selLogic: 'Selection Logic',
    selLogicText: 'Same region → Nearby → Others',
    config: 'Configuration', kvOn: '✓ KV storage enabled', kvOff: '⚠ KV storage not configured',
    region: 'Worker Region (wk)', autoDetect: 'Auto detect',
    protocols: 'Protocols', enVless: 'Enable VLESS', enTrojan: 'Enable Trojan', enXhttp: 'Enable xhttp',
    enEch: 'Enable ECH', echHint: 'ECH config is fetched automatically via DoH and appended to links',
    customDns: 'Custom DNS server', echDomain: 'Custom ECH domain', alpn: 'TLS ALPN', alpnDefault: 'Default (client negotiates)',
    trojanPass: 'Trojan password (tp)', trojanPassPh: 'Leave empty to use UUID',
    homepage: 'Custom homepage URL (homepage)', homepagePh: 'e.g. https://example.com',
    customPath: 'Custom path (d)', customIp: 'Custom ProxyIP (p)',
    prefIps: 'Preferred IP list (yx)', prefUrl: 'Preferred IP source URL (yxURL)',
    socks: 'SOCKS5 config (s)',
    latency: 'Latency Test', latIp: 'Test IP/domain', latIpPh: 'Separate multiple with commas', latPort: 'Port',
    threads: 'Threads', start: 'Start test', stop: 'Stop', testing: 'Testing…', done: 'Test complete',
    overwrite: 'Add (replace)', append: 'Add (append)', selectAll: 'Select all',
    advanced: 'Advanced Controls', subConv: 'Subscription converter (scu)',
    prefTypes: 'Built-in preferred types', enNative: 'Native address', enPrefDom: 'Preferred domain', enPrefIp: 'Preferred IP', enGithub: 'Custom preferred',
    ipFilters: 'IP Filters', apiMgmt: 'Allow API management (ae)', apiDefault: 'Default (off)', apiYes: 'Enabled',
    rm: 'Region matching (rm)', rmDefault: 'Default (on)', rmNo: 'Off',
    qj: 'Downgrade control (qj)', qjDefault: 'Default', qjNo: 'Enable downgrade',
    dkby: 'TLS control (dkby)', dkbyDefault: 'Default (all nodes)', dkbyYes: 'TLS only',
    yxby: 'Preferred control (yxby)', yxbyDefault: 'Default (on)', yxbyYes: 'Disable preferred',
    save: 'Save All', refresh: 'Refresh', reset: 'Reset',
    saved: 'Configuration saved', saveFail: 'Save failed', copied: 'Subscription link copied',
    links: 'Related Links', github: 'GitHub Project', tools: 'Preferred IP Tools',
    curConfig: 'Current Config', pathType: 'Path Type', uuidMode: 'UUID path (u)', pathMode: 'Custom path (d)',
    confirmReset: 'Reset all configuration?', needOne: 'Enable at least one protocol',
    regionNames: { HK:'🇭🇰 Hong Kong', US:'🇺🇸 United States', SG:'🇸🇬 Singapore', JP:'🇯🇵 Japan', KR:'🇰🇷 South Korea', DE:'🇩🇪 Germany', SE:'🇸🇪 Sweden', NL:'🇳🇱 Netherlands', FI:'🇫🇮 Finland', GB:'🇬🇧 United Kingdom' }
  };

  const regionOptions = Object.keys(T.regionNames).map(code =>
    `<option value="${code}">${T.regionNames[code]}</option>`).join('');

  const html = `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}" data-theme="dark">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${T.brandSub}</title>${UI_FONT_LINK}
<style>${uiBaseStyles()}</style>
</head>
<body>
<div class="topbar">
  <div class="brand"><span class="mark"></span><span>CF·Edge<small>${T.brandSub}</small></span></div>
  <span class="pill"><span class="dot"></span>${T.online}</span>
  <div class="spacer"></div>
  <div class="select-wrap"><select onchange="setLang(this.value)">
    <option value="en" ${!isPersian ? 'selected' : ''}>EN · English</option>
    <option value="fa" ${isPersian ? 'selected' : ''}>FA · فارسی</option>
  </select></div>
  <button class="icon-btn" id="themeBtn" onclick="toggleTheme()" aria-label="theme">☀</button>
</div>

<div class="wrap">
  <div class="grid">

    <!-- CLIENTS -->
    <div class="glass card reveal">
      <span class="eyebrow">SUBSCRIPTION</span>
      <h2>${T.clients}</h2>
      <p class="hint">${T.clientsHint}</p>
      <div class="client-grid">
        <button class="client-btn" onclick="genLink('clash','CLASH')">CLASH</button>
        <button class="client-btn" onclick="genLink('clash','STASH')">STASH</button>
        <button class="client-btn" onclick="genLink('surge','SURGE')">SURGE</button>
        <button class="client-btn" onclick="genLink('singbox','SING-BOX')">SING-BOX</button>
        <button class="client-btn" onclick="genLink('loon','LOON')">LOON</button>
        <button class="client-btn" onclick="genLink('quanx','QUANTUMULT X')">QUANTUMULT X</button>
        <button class="client-btn" onclick="genLink('v2ray','V2RAY')">V2RAY</button>
        <button class="client-btn" onclick="genLink('v2ray','V2RAYNG')">V2RAYNG</button>
        <button class="client-btn" onclick="genLink('v2ray','NEKORAY')">NEKORAY</button>
        <button class="client-btn" onclick="genLink('v2ray','Shadowrocket')">SHADOWROCKET</button>
      </div>
      <div class="sub-url" id="subUrl" onclick="copySub()" title="Copy"></div>
    </div>

    <!-- STATUS -->
    <div class="glass card reveal">
      <span class="eyebrow">LIVE</span>
      <h2>${T.status}</h2>
      <div style="margin-top:12px">
        <div class="status-row"><span class="k">${T.workerRegion}</span><span class="v" id="stRegion">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.detectMethod}</span><span class="v" id="stMethod">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.proxyIp}</span><span class="v" id="stProxy">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.currentIp}</span><span class="v" id="stIp">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.ech}</span><span class="v" id="stEch">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.regionMatch}</span><span class="v" id="stMatch">${T.checking}</span></div>
        <div class="status-row"><span class="k">${T.selLogic}</span><span class="v">${T.selLogicText}</span></div>
      </div>
    </div>
  </div>

  <!-- CONFIG -->
  <div class="glass card reveal" id="configCard" style="margin-top:18px">
    <span class="eyebrow">KV BACKED</span>
    <h2>${T.config}</h2>
    <div id="kvBadge" class="kv-badge off" style="margin-top:12px">…</div>

    <div id="configBody" style="display:none">
      <div class="grid grid-2">
        <div>
          <div class="section-label">${T.protocols}</div>
          <label class="switch"><input type="checkbox" id="ev" checked><span class="track"></span><span class="lbl">${T.enVless}</span></label>
          <label class="switch"><input type="checkbox" id="et"><span class="track"></span><span class="lbl">${T.enTrojan}</span></label>
          <label class="switch"><input type="checkbox" id="ex"><span class="track"></span><span class="lbl">${T.enXhttp}</span></label>
          <label class="switch"><input type="checkbox" id="ech"><span class="track"></span><span class="lbl">${T.enEch}</span></label>
          <div class="field"><div class="sub">${T.echHint}</div></div>

          <div class="section-label">${T.region}</div>
          <div class="field"><select class="input" id="wkRegion"><option value="">${T.autoDetect}</option>${regionOptions}</select></div>

          <div class="section-label">${T.ipFilters}</div>
          <label class="switch"><input type="checkbox" id="ipv4" checked><span class="track"></span><span class="lbl">IPv4</span></label>
          <label class="switch"><input type="checkbox" id="ipv6" checked><span class="track"></span><span class="lbl">IPv6</span></label>
          <label class="switch"><input type="checkbox" id="ispMobile" checked><span class="track"></span><span class="lbl">${isPersian ? 'همراه (移动)' : 'Mobile (移动)'}</span></label>
          <label class="switch"><input type="checkbox" id="ispUnicom" checked><span class="track"></span><span class="lbl">${isPersian ? 'لیانتونگ (联通)' : 'Unicom (联通)'}</span></label>
          <label class="switch"><input type="checkbox" id="ispTelecom" checked><span class="track"></span><span class="lbl">${isPersian ? 'تلکام (电信)' : 'Telecom (电信)'}</span></label>
        </div>

        <div>
          <div class="field"><label>${T.customDns}</label><input class="input" id="customDNS" placeholder="https://223.5.5.5/dns-query"></div>
          <div class="field"><label>${T.echDomain}</label><input class="input" id="customECHDomain" placeholder="cloudflare-ech.com"></div>
          <div class="field"><label>${T.alpn}</label>
            <select class="input" id="alpn"><option value="">${T.alpnDefault}</option><option>h3</option><option>h2</option><option>http/1.1</option><option>h3,h2</option><option>h2,http/1.1</option><option>h3,h2,http/1.1</option></select>
          </div>
          <div class="field"><label>${T.trojanPass}</label><input class="input" id="tp" placeholder="${T.trojanPassPh}"></div>
          <div class="field"><label>${T.homepage}</label><input class="input" id="customHomepage" placeholder="${T.homepagePh}"></div>
          <div class="field"><label>${T.customPath}</label><input class="input" id="customPath" placeholder="/mypath"></div>
          <div class="field"><label>${T.customIp}</label><input class="input" id="customIP" placeholder="1.2.3.4:443"></div>
          <div class="field"><label>${T.prefIps}</label><input class="input" id="yx" placeholder="1.2.3.4:443#Node,example.com:8443#Node2"></div>
          <div class="field"><label>${T.prefUrl}</label><input class="input" id="yxURL" placeholder="https://…"></div>
          <div class="field"><label>${T.socks}</label><input class="input" id="socksConfig" placeholder="user:pass@host:port"></div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- LATENCY -->
      <div class="section-label">⚡ ${T.latency}</div>
      <div class="grid grid-2">
        <div class="field"><label>${T.latIp}</label><input class="input" id="latInput" placeholder="${T.latIpPh}"></div>
        <div style="display:flex;gap:10px">
          <div class="field" style="flex:1"><label>${T.latPort}</label><input class="input" id="latPort" type="number" value="443"></div>
          <div class="field" style="flex:1"><label>${T.threads}</label><input class="input" id="latThreads" type="number" value="5"></div>
          <div class="field" style="align-self:flex-end"><button class="btn" id="latStart" onclick="startLatency()">▶ ${T.start}</button></div>
        </div>
      </div>
      <div id="latStatus" class="hint" style="margin:6px 0 10px;display:none"></div>
      <div id="latResults" style="display:none;max-height:240px;overflow-y:auto;background:var(--glass);border:1px solid var(--stroke);border-radius:11px;padding:4px 8px"></div>
      <div id="latActions" style="display:none;gap:10px;margin-top:12px;flex-wrap:wrap">
        <button class="btn" onclick="latSelectAll()">${T.selectAll}</button>
        <button class="btn btn-primary" onclick="latAdd('overwrite')">${T.overwrite}</button>
        <button class="btn" onclick="latAdd('append')">${T.append}</button>
      </div>

      <div class="divider"></div>

      <!-- ADVANCED -->
      <div class="section-label">${T.advanced}</div>
      <div class="grid grid-2">
        <div>
          <div class="field"><label>${T.subConv}</label><input class="input" id="scu" placeholder="https://url.v1.mk/sub"></div>
          <div class="section-label">${T.prefTypes}</div>
          <label class="switch"><input type="checkbox" id="ena"><span class="track"></span><span class="lbl">${T.enNative}</span></label>
          <label class="switch"><input type="checkbox" id="epd" checked><span class="track"></span><span class="lbl">${T.enPrefDom}</span></label>
          <label class="switch"><input type="checkbox" id="epi" checked><span class="track"></span><span class="lbl">${T.enPrefIp}</span></label>
          <label class="switch"><input type="checkbox" id="egi" checked><span class="track"></span><span class="lbl">${T.enGithub}</span></label>
        </div>
        <div>
          <div class="field"><label>${T.apiMgmt}</label><select class="input" id="ae"><option value="">${T.apiDefault}</option><option value="yes">${T.apiYes}</option></select></div>
          <div class="field"><label>${T.rm}</label><select class="input" id="rm"><option value="">${T.rmDefault}</option><option value="no">${T.rmNo}</option></select></div>
          <div class="field"><label>${T.qj}</label><select class="input" id="qj"><option value="">${T.qjDefault}</option><option value="no">${T.qjNo}</option></select></div>
          <div class="field"><label>${T.dkby}</label><select class="input" id="dkby"><option value="">${T.dkbyDefault}</option><option value="yes">${T.dkbyYes}</option></select></div>
          <div class="field"><label>${T.yxby}</label><select class="input" id="yxby"><option value="">${T.yxbyDefault}</option><option value="yes">${T.yxbyYes}</option></select></div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="section-label">${T.curConfig}</div>
      <pre id="curConfig" style="background:var(--glass);border:1px solid var(--stroke);border-radius:11px;padding:14px;font-size:11.5px;color:var(--t1);overflow-x:auto;line-height:1.7;font-family:'Space Grotesk',monospace">…</pre>
    </div>
  </div>

  <!-- LINKS -->
  <div class="glass card reveal" style="margin-top:18px">
    <span class="eyebrow">RESOURCES</span>
    <h2>${T.links}</h2>
    <div class="links-row">
      <a class="link" href="https://github.com/byJoey/cfnew" target="_blank">${T.github}</a>
      <a class="link" href="https://github.com/byJoey/yx-tools/releases/" target="_blank">${T.tools}</a>
      <a class="link" href="https://www.youtube.com/@joeyblog" target="_blank">YouTube @joeyblog</a>
    </div>
  </div>
</div>

<div class="toast-stack" id="toastStack"></div>
<div class="fab-bar" id="fabBar">
  <button class="btn" onclick="loadConfig()" title="${T.refresh}">↻</button>
  <span class="sep"></span>
  <button class="btn btn-primary fab-save" onclick="saveAll()"><span>▣</span>${T.save}</button>
  <span class="sep"></span>
  <button class="btn btn-danger" onclick="resetAll()" title="${T.reset}">⌫</button>
</div>

<script>${uiThemeScript()}
var T = ${JSON.stringify(T)};
var BASE = window.location.pathname.replace(/\\/\$/, '');
var SUB = BASE + '/sub';
var API = BASE + '/api/config';
var latAbort = null, latResultsArr = [];

/* ---------- client links ---------- */
var SCHEMES = {
  'CLASH':'clash://install-config?url=', 'STASH':'stash://install?url=',
  'SURGE':'surge:///install-config?url=', 'SING-BOX':'sing-box://install-config?url=',
  'LOON':'loon://install?url=', 'QUANTUMULT X':'quantumult-x://install-config?url=',
  'V2RAYNG':'v2rayng://install?url=', 'NEKORAY':'nekoray://install-config?url=',
  'Shadowrocket':'shadowrocket://add/'
};
var TARGETS = { 'CLASH':'clash','STASH':'clash','SURGE':'surge','SING-BOX':'singbox','LOON':'loon','QUANTUMULT X':'quanx' };
function genLink(kind, name){
  var url = SUB;
  if (TARGETS[name]) url = SUB + '?target=' + TARGETS[name];
  var el = document.getElementById('subUrl');
  el.textContent = url; el.style.display = 'block';
  var scheme = SCHEMES[name];
  var done = function(){ toast(name + ' · ' + T.copied, 'success'); };
  var copy = function(){ if(navigator.clipboard){ navigator.clipboard.writeText(url).then(done, done);} else done(); };
  if (scheme){ tryDeepLink(scheme + encodeURIComponent(url), copy); } else { copy(); }
}
function copySub(){
  var el = document.getElementById('subUrl');
  if (el.textContent && navigator.clipboard) navigator.clipboard.writeText(el.textContent).then(function(){ toast(T.copied,'success'); });
}
function tryDeepLink(url, fallback){
  var opened = false, called = false, t0 = Date.now();
  var onBlur = function(){ if (Date.now() - t0 < 3000) opened = true; };
  window.addEventListener('blur', onBlur);
  var f = document.createElement('iframe');
  f.style.display='none'; f.src = url; document.body.appendChild(f);
  setTimeout(function(){
    f.remove(); window.removeEventListener('blur', onBlur);
    if (!called){ called = true; if (!opened) fallback(); }
  }, 2200);
}

/* ---------- system status ---------- */
function checkStatus(){
  fetch(BASE + '/region').then(function(r){ return r.json(); }).then(function(d){
    var rn = T.regionNames[d.region] || d.region || '—';
    document.getElementById('stRegion').innerHTML = '<span class="ok">●</span> ' + rn;
    document.getElementById('stMethod').textContent = d.detectionMethod || '—';
    var isCustom = d.region === 'CUSTOM';
    document.getElementById('stProxy').innerHTML = isCustom ? '<span class="warn">●</span> ' + (d.ci||'Custom') : '<span class="ok">●</span> 10/10';
    document.getElementById('stIp').innerHTML = '<span class="ok">●</span> ' + (isCustom ? (d.ci||'Custom') : 'Smart');
    document.getElementById('stMatch').innerHTML = isCustom ? '<span class="warn">●</span> Off' : '<span class="ok">●</span> On';
  }).catch(function(){
    ['stRegion','stMethod','stProxy','stIp','stMatch'].forEach(function(id){
      document.getElementById(id).innerHTML = '<span class="err">●</span> —';
    });
  });
  fetch(SUB).then(function(r){
    var s = r.headers.get('X-ECH-Status');
    document.getElementById('stEch').innerHTML = s === 'ENABLED' ? '<span class="ok">●</span> Enabled' : '<span class="warn">●</span> Disabled';
  }).catch(function(){
    document.getElementById('stEch').innerHTML = '<span class="err">●</span> —';
  });
}

/* ---------- config ---------- */
var FIELDS = ['wkRegion:wk','customDNS:customDNS','customECHDomain:customECHDomain','alpn:alpn','tp:tp','customHomepage:homepage','customPath:d','customIP:p','yx:yx','yxURL:yxURL','socksConfig:s','scu:scu','ae:ae','rm:rm','qj:qj','dkby:dkby','yxby:yxby'];
var SWITCHES = ['ev:ev:true','et:et:false','ex:ex:false','ech:ech:false','ena:ena:false','epd:epd:true','epi:epi:true','egi:egi:true','ipv4:ipv4:true','ipv6:ipv6:true','ispMobile:ispMobile:true','ispUnicom:ispUnicom:true','ispTelecom:ispTelecom:true'];
function truthy(v, d){ if(v===undefined||v===null||v==='')return d; if(v===true||v===false)return v; var s=String(v).toLowerCase(); if(s==='yes'||s==='true'||s==='1'||s==='on')return true; if(s==='no'||s==='false'||s==='0'||s==='off')return false; return d; }
function loadConfig(){
  fetch(API).then(function(r){
    var badge = document.getElementById('kvBadge');
    if (r.status === 503){ badge.className='kv-badge off'; badge.textContent=T.kvOff; document.getElementById('configBody').style.display='none'; return null; }
    return r.json();
  }).then(function(cfg){
    if(!cfg) return;
    document.getElementById('kvBadge').className='kv-badge on';
    document.getElementById('kvBadge').textContent=T.kvOn;
    document.getElementById('configBody').style.display='block';
    FIELDS.forEach(function(pair){ var p=pair.split(':'); var el=document.getElementById(p[0]); if(el) el.value = cfg[p[1]]||''; });
    SWITCHES.forEach(function(trip){ var p=trip.split(':'); var el=document.getElementById(p[0]); if(el) el.checked = truthy(cfg[p[1]], p[2]==='true'); });
    syncProtocol();
    var shown = {};
    Object.keys(cfg).forEach(function(k){ if(k!=='kvEnabled') shown[k]=cfg[k]; });
    document.getElementById('curConfig').textContent = JSON.stringify(shown, null, 2);
  }).catch(function(e){
    document.getElementById('kvBadge').className='kv-badge off';
    document.getElementById('kvBadge').textContent=T.kvOff + ' · ' + e.message;
  });
}
function syncProtocol(){
  var ev=document.getElementById('ev'), et=document.getElementById('et'), ex=document.getElementById('ex');
  if(!ev.checked && !et.checked && !ex.checked) ev.checked = true;
  if(document.getElementById('ech').checked) document.getElementById('dkby').value='yes';
}
document.addEventListener('change', function(e){
  if (e.target && e.target.id && (e.target.tagName==='INPUT'||e.target.tagName==='SELECT')){
    if(['latInput','latPort','latThreads'].indexOf(e.target.id)===-1) syncProtocol();
    document.getElementById('fabBar').classList.add('dirty');
  }
});
function collect(){
  var cfg = {};
  FIELDS.forEach(function(pair){ var p=pair.split(':'); var el=document.getElementById(p[0]); cfg[p[1]] = el?el.value:''; });
  SWITCHES.forEach(function(trip){ var p=trip.split(':'); var el=document.getElementById(p[0]); cfg[p[1]] = (el&&el.checked)?'yes':'no'; });
  if(cfg.ev==='no'&&cfg.et==='no'&&cfg.ex==='no') cfg.ev='yes';
  if(cfg.ech==='yes') cfg.dkby='yes';
  return cfg;
}
function saveAll(){
  syncProtocol();
  var cfg = collect();
  fetch(API, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(cfg) })
    .then(function(r){ return r.json().then(function(d){ return {ok:r.ok, d:d}; }); })
    .then(function(res){
      if(res.d && res.d.success){ toast(T.saved,'success'); document.getElementById('fabBar').classList.remove('dirty'); setTimeout(function(){ loadConfig(); }, 600); }
      else { toast((res.d&&res.d.message)||T.saveFail,'error'); }
    }).catch(function(e){ toast(T.saveFail+': '+e.message,'error'); });
}
function resetAll(){
  if(!confirm(T.confirmReset)) return;
  var empty = {};
  FIELDS.forEach(function(pair){ empty[pair.split(':')[1]]=''; });
  SWITCHES.forEach(function(trip){ empty[trip.split(':')[1]]=''; });
  fetch(API, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(empty) })
    .then(function(r){ return r.json(); }).then(function(d){
      if(d.success){ toast(T.saved,'success'); setTimeout(function(){ window.location.reload(); }, 800); }
      else toast(d.message||T.saveFail,'error');
    }).catch(function(e){ toast(T.saveFail+': '+e.message,'error'); });
}

/* ---------- latency test ---------- */
function ipToHex(ip){
  var p = ip.split('.'); if(p.length!==4) return null; var h='';
  for(var i=0;i<4;i++){ var n=parseInt(p[i]); if(isNaN(n)||n<0||n>255) return null; h += ('0'+n.toString(16)).slice(-2); }
  return h;
}
function testOne(host, port, signal){
  var clean = host.replace(/^\\[|\\]\$/g,'');
  var hex = ipToHex(clean);
  var domain = (hex||clean) + '.nip.lfree.org';
  var url = 'https://' + domain + ':' + port + '/';
  var t0 = Date.now();
  return fetch(url, { signal: signal }).then(function(r){
    if(!r.ok) return { success:false, latency: Date.now()-t0, host:host, port:port };
    return r.text().then(function(txt){
      var colo=''; try{ colo = JSON.parse(txt).colo || ''; }catch(e){}
      var t1 = Date.now();
      return fetch(url, { signal: signal }).then(function(r2){
        return r2.text().then(function(){ return { success:true, latency: Date.now()-t1, colo:colo, host:host, port:port }; });
      });
    });
  }).catch(function(e){ return { success:false, latency:-1, host:host, port:port, error: e.name==='AbortError'?'timeout':e.message }; });
}
function startLatency(){
  var input = document.getElementById('latInput').value.trim();
  var port = document.getElementById('latPort').value || '443';
  var threads = parseInt(document.getElementById('latThreads').value)||5;
  if(!input){ toast(T.latIpPh,'warn'); return; }
  var targets = input.split(',').map(function(s){return s.trim();}).filter(Boolean);
  latAbort = new AbortController();
  latResultsArr = [];
  var res = document.getElementById('latResults'); res.innerHTML=''; res.style.display='block';
  document.getElementById('latActions').style.display='flex';
  var st = document.getElementById('latStatus'); st.style.display='block';
  var btn = document.getElementById('latStart'); btn.disabled = true; btn.textContent = '… ' + T.testing;
  var done = 0;
  function render(r, idx){
    if(!r.success) return;
    var div = document.createElement('div'); div.className='lat-item'; div.dataset.index=idx;
    var cb = document.createElement('input'); cb.type='checkbox'; cb.checked=true; cb.dataset.index=idx;
    var addr = document.createElement('span'); addr.className='addr'; addr.textContent = r.host+':'+r.port;
    var colo = document.createElement('span'); colo.className='colo'; colo.textContent = r.colo||'';
    var ms = document.createElement('span'); ms.className='ms'; ms.textContent = r.latency+'ms';
    div.appendChild(cb); div.appendChild(addr); div.appendChild(colo); div.appendChild(ms);
    res.appendChild(div);
  }
  (function run(i){
    if(i>=targets.length || latAbort.signal.aborted){
      btn.disabled=false; btn.textContent='▶ '+T.start;
      st.textContent = T.done + ' · ' + latResultsArr.filter(function(x){return x.success;}).length + '/' + targets.length;
      return;
    }
    var batch = targets.slice(i, i+threads);
    Promise.all(batch.map(function(t){
      var parts = t.split('#'); var hp = parts[0]; var name = parts[1]||'';
      var h = hp, p = port;
      var ci = hp.lastIndexOf(':');
      if(ci>-1 && !hp.startsWith('[') && /^\\d+\$/.test(hp.substring(ci+1))){ h=hp.substring(0,ci); p=hp.substring(ci+1); }
      return testOne(h, p, latAbort.signal).then(function(r){ r.nodeName = name||r.host; return r; });
    })).then(function(results){
      results.forEach(function(r){ if(r){ var idx=latResultsArr.length; latResultsArr.push(r); render(r, idx); done++; } });
      st.textContent = T.testing + ' ' + done + '/' + targets.length;
      run(i+threads);
    });
  })(0);
}
function latSelectAll(){
  document.querySelectorAll('#latResults input[type=checkbox]').forEach(function(c){ c.checked=true; });
}
function latAdd(mode){
  var sel = [];
  document.querySelectorAll('#latResults input[type=checkbox]:checked').forEach(function(c){
    var r = latResultsArr[parseInt(c.dataset.index)];
    if(r && r.success) sel.push(r.host+':'+r.port+'#'+(r.colo||r.nodeName||r.host));
  });
  if(!sel.length){ toast('—','warn'); return; }
  var yx = document.getElementById('yx');
  var add = sel.join(',');
  yx.value = (mode==='append' && yx.value.trim()) ? yx.value.trim()+','+add : add;
  document.getElementById('fabBar').classList.add('dirty');
  toast('✓ ' + sel.length + ' · yx', 'success');
}

document.addEventListener('DOMContentLoaded', function(){
  checkStatus();
  loadConfig();
  var ech = document.getElementById('ech');
  if(ech) ech.addEventListener('change', syncProtocol);
});
</script>
</body>
</html>`;
  return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
