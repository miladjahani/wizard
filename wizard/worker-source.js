// CFnew - ç»ˆç«¯ v2.9.8c
// ç‰ˆوœ¬: v2.9.8c 
import { connect as è؟‍وژ¥ } from 'cloudflare:sockets';
const هں؛ç،€64و–‡وœ¬è§£ç په™¨ = new TextDecoder();
function è§£ç پ64(و–‡وœ¬) {
  const ن؛Œè؟›هˆ¶ = atob(و–‡وœ¬);
  const ه­—èٹ‚ = new Uint8Array(ن؛Œè؟›هˆ¶.length);
  for (let ç´¢ه¼• = 0; ç´¢ه¼• < ن؛Œè؟›هˆ¶.length; ç´¢ه¼•++) ه­—èٹ‚[ç´¢ه¼•] = ن؛Œè؟›هˆ¶.charCodeAt(ç´¢ه¼•);
  return هں؛ç،€64و–‡وœ¬è§£ç په™¨.decode(ه­—èٹ‚);
}
let è®¤è¯پن»¤ç‰Œ = '351c9981-04b6-4103-aa4b-864aa9c91469';
let ه›‍é€€هœ°ه‌€ = '';
let ن»£çگ†5é…چç½® = '';
let è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
let è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
let هگ¯ç”¨ن»£çگ†é™چç؛§ = false;
let ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ = false;
let ç¦پç”¨ن¼کé€‰ = false;
let هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ = true;
let ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = '';
let و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛ = '';
let ن¼کé€‰هœ°ه‌€و؛گ = '';
let è‡ھه®ڑن¹‰è·¯ه¾„ = '';
let هگ¯ç”¨وکژو–‡ = true;
let هگ¯ç”¨وœ¨é©¬ = false;
let هگ¯ç”¨و‰©ه±•ن¼ è¾“ = false;
let ن¼ è¾“è·¯ه¾„ = '';
// هگ¯ç”¨ECHهٹںèƒ½ï¼ˆtrueهگ¯ç”¨ï¼Œfalseç¦پç”¨ï¼‰
let هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ = false;
// è‡ھه®ڑن¹‰DNSوœچهٹ،ه™¨ï¼ˆé»کè®¤ï¼ڑhttps://223.5.5.5/dns-queryï¼‰
let è‡ھه®ڑن¹‰هںںهگچç³»ç»ں = 'https://223.5.5.5/dns-query';
// è‡ھه®ڑن¹‰ECHهںںهگچï¼ˆé»کè®¤ï¼ڑcloudflare-ech.comï¼‰
let è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ = 'cloudflare-ech.com';
let è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•† = '';
let è®¢éک…è½¬وچ¢وژ¥هڈ£ = è§£ç پ64('aHR0cHM6Ly91cmwudjEubWsvc3Vi');
// è؟œç¨‹é…چç½®URLï¼ˆç،¬ç¼–ç پï¼‰
const è؟œç¨‹é…چç½®ç½‘ه‌€ = 'https://raw.githubusercontent.com/byJoey/test/refs/heads/main/tist.ini';
let هگ¯ç”¨ن¼کé€‰هںںهگچ = true; // ن¼کé€‰هںںهگچé»کè®¤ه…³é—­
let هگ¯ç”¨ن¼کé€‰هœ°ه‌€ = true;
let هگ¯ç”¨ن»“ه؛“ن¼کé€‰ = true;
let هگ¯ç”¨هژںç”ںهœ°ه‌€ = false; // هژںç”ںهœ°ه‌€é»کè®¤ه…³é—­          

let é”®ه€¼ه­که‚¨ = null;
let é”®ه€¼é…چç½® = {};
let é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ = 0;
const é”®ه€¼ç¼“ه­کوœںé™گ = 30 * 1000; // 30ç§’ç¼“ه­کï¼ˆçں­çھ—هڈ£ه†…è·³è؟‡ç‰ˆوœ¬و£€وں¥ï¼‰
let é”®ه€¼é…چç½®ç‰ˆوœ¬ = '';
const é…چç½®é»کè®¤ه€¼ = {
  wk: '',
  ev: 'yes',
  et: 'no',
  ex: 'no',
  ech: 'no',
  tp: '',
  customDNS: 'https://223.5.5.5/dns-query',
  customECHDomain: 'cloudflare-ech.com',
  alpn: '',
  d: '',
  p: '',
  yx: '',
  yxURL: '',
  s: '',
  homepage: '',
  scu: è§£ç پ64('aHR0cHM6Ly91cmwudjEubWsvc3Vi'),
  ena: 'no',
  epd: 'yes',
  epi: 'yes',
  egi: 'yes',
  ae: '',
  rm: '',
  qj: '',
  dkby: 'no',
  yxby: '',
  ipv4: 'yes',
  ipv6: 'yes',
  ispMobile: 'yes',
  ispUnicom: 'yes',
  ispTelecom: 'yes'
};

function وک¯هگ¦ه¼€هگ¯ه€¼(ه€¼, é»کè®¤هگ¯ç”¨ = false) {
  if (ه€¼ === undefined || ه€¼ === null || ه€¼ === '') return é»کè®¤هگ¯ç”¨;
  if (ه€¼ === true || ه€¼ === false) return ه€¼;
  const و–‡وœ¬ = String(ه€¼).trim().toLowerCase();
  if (و–‡وœ¬ === 'yes' || و–‡وœ¬ === 'true' || و–‡وœ¬ === '1' || و–‡وœ¬ === 'on') return true;
  if (و–‡وœ¬ === 'no' || و–‡وœ¬ === 'false' || و–‡وœ¬ === '0' || و–‡وœ¬ === 'off') return false;
  return é»کè®¤هگ¯ç”¨;
}

function ه½’ن¸€é…چç½®ه¼€ه…³(ه€¼, é»کè®¤هگ¯ç”¨ = false) {
  return وک¯هگ¦ه¼€هگ¯ه€¼(ه€¼, é»کè®¤هگ¯ç”¨) ? 'yes' : 'no';
}

function èژ·هڈ–é…چç½®ه¼€ه…³ه€¼(é”®, é»کè®¤هگ¯ç”¨ = false, ه¤‡ç”¨ه€¼ = undefined) {
  const é»کè®¤ه€¼ = ه¤‡ç”¨ه€¼ !== undefined ? ه¤‡ç”¨ه€¼ : (é»کè®¤هگ¯ç”¨ ? 'yes' : 'no');
  return وک¯هگ¦ه¼€هگ¯ه€¼(èژ·هڈ–é…چç½®ه€¼(é”®, é»کè®¤ه€¼), é»کè®¤هگ¯ç”¨);
}

function èژ·هڈ–é…چç½®و–‡وœ¬ه€¼(é”®, é»کè®¤ه€¼ = '', ه¤‡ç”¨ه€¼ = undefined) {
  const ه€¼ = èژ·هڈ–é…چç½®ه€¼(é”®, ه¤‡ç”¨ه€¼ !== undefined ? ه¤‡ç”¨ه€¼ : é»کè®¤ه€¼);
  return ه€¼ === undefined || ه€¼ === null ? é»کè®¤ه€¼ : String(ه€¼);
}

function و•´çگ†وœ‰و•ˆé…چç½®(é…چç½®) {
  const ه؟«ç…§ = {
    ...é…چç½®é»کè®¤ه€¼,
    ...é…چç½®
  };
  ['ev', 'et', 'ex', 'ech', 'ena', 'epd', 'epi', 'egi', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'].forEach(é”® => {
    ه؟«ç…§[é”®] = ه½’ن¸€é…چç½®ه¼€ه…³(ه؟«ç…§[é”®], وک¯هگ¦ه¼€هگ¯ه€¼(é…چç½®é»کè®¤ه€¼[é”®]));
  });
  if (ه؟«ç…§.ev === 'no' && ه؟«ç…§.et === 'no' && ه؟«ç…§.ex === 'no') {
    ه؟«ç…§.ev = 'yes';
  }
  if (ه؟«ç…§.ech === 'yes') {
    ه؟«ç…§.dkby = 'yes';
  }
  return ه؟«ç…§;
}

function è¯»هڈ–çژ¯ه¢ƒé…چç½®ه€¼(çژ¯ه¢ƒه€¼, ...هگچç§°هˆ—è،¨) {
  if (!çژ¯ه¢ƒه€¼) return undefined;
  for (const هگچç§° of هگچç§°هˆ—è،¨) {
    if (çژ¯ه¢ƒه€¼[هگچç§°] !== undefined && çژ¯ه¢ƒه€¼[هگچç§°] !== null && çژ¯ه¢ƒه€¼[هگچç§°] !== '') {
      return çژ¯ه¢ƒه€¼[هگچç§°];
    }
  }
  return undefined;
}

function èژ·هڈ–çژ¯ه¢ƒé…چç½®ه؟«ç…§(çژ¯ه¢ƒه€¼ = {}) {
  const وک ه°„ = {
    wk: ['wk', 'WK'],
    ev: ['ev', 'EV'],
    et: ['et', 'ET'],
    ex: ['ex', 'EX'],
    ech: ['ech', 'ECH'],
    tp: ['tp', 'TP'],
    customDNS: ['customDNS', 'CUSTOMDNS', 'CUSTOM_DNS'],
    customECHDomain: ['customECHDomain', 'CUSTOMECHDOMAIN', 'CUSTOM_ECH_DOMAIN'],
    alpn: ['alpn', 'ALPN'],
    d: ['d', 'D'],
    p: ['p', 'P'],
    yx: ['yx', 'YX'],
    yxURL: ['yxURL', 'YXURL', 'YX_URL'],
    s: ['s', 'S'],
    homepage: ['homepage', 'HOMEPAGE'],
    scu: ['scu', 'SCU'],
    ena: ['ena', 'ENA'],
    epd: ['epd', 'EPD'],
    epi: ['epi', 'EPI'],
    egi: ['egi', 'EGI'],
    ae: ['ae', 'AE'],
    rm: ['rm', 'RM'],
    qj: ['qj', 'QJ'],
    dkby: ['dkby', 'DKBY'],
    yxby: ['yxby', 'YXBY'],
    ipv4: ['ipv4', 'IPV4'],
    ipv6: ['ipv6', 'IPV6'],
    ispMobile: ['ispMobile', 'ISPMOBILE', 'ISP_MOBILE'],
    ispUnicom: ['ispUnicom', 'ISPUNICOM', 'ISP_UNICOM'],
    ispTelecom: ['ispTelecom', 'ISPTELECOM', 'ISP_TELECOM']
  };
  const ه؟«ç…§ = {};
  for (const [é”®, هگچç§°هˆ—è،¨] of Object.entries(وک ه°„)) {
    const ه€¼ = è¯»هڈ–çژ¯ه¢ƒé…چç½®ه€¼(çژ¯ه¢ƒه€¼, ...هگچç§°هˆ—è،¨);
    if (ه€¼ !== undefined) ه؟«ç…§[é”®] = ه€¼;
  }
  return ه؟«ç…§;
}

function èژ·هڈ–وœ‰و•ˆé…چç½®ه؟«ç…§(çژ¯ه¢ƒه€¼ = {}) {
  return و•´çگ†وœ‰و•ˆé…چç½®({
    ...èژ·هڈ–çژ¯ه¢ƒé…چç½®ه؟«ç…§(çژ¯ه¢ƒه€¼),
    ...é”®ه€¼é…چç½®
  });
}
const هœ°هŒ؛وک ه°„ = {
  'HK': ['ًں‡­ًں‡° é¦™و¸¯', 'HK', 'Hong Kong'],
  'US': ['ًں‡؛ًں‡¸ ç¾ژه›½', 'US', 'United States'],
  'SG': ['ًں‡¸ًں‡¬ و–°هٹ ه‌،', 'SG', 'Singapore'],
  'JP': ['ًں‡¯ًں‡µ و—¥وœ¬', 'JP', 'Japan'],
  'KR': ['ًں‡°ًں‡· éں©ه›½', 'KR', 'South Korea'],
  'DE': ['ًں‡©ًں‡ھ ه¾·ه›½', 'DE', 'Germany'],
  'SE': ['ًں‡¸ًں‡ھ ç‘‍ه…¸', 'SE', 'Sweden'],
  'NL': ['ًں‡³ًں‡± èچ·ه…°', 'NL', 'Netherlands'],
  'FI': ['ًں‡«ًں‡® èٹ¬ه…°', 'FI', 'Finland'],
  'GB': ['ًں‡¬ًں‡§ è‹±ه›½', 'GB', 'United Kingdom'],
  'Oracle': ['ç”²éھ¨و–‡', 'Oracle'],
  'DigitalOcean': ['و•°ç پوµ·', 'DigitalOcean'],
  'Vultr': ['Vultr', 'Vultr'],
  'Multacom': ['Multacom', 'Multacom']
};
let ه¤‡ç”¨هœ°ه‌€هˆ—è،¨ = [{
  domain: è§£ç پ64('UHJveHlJUC5ISy5DTUxpdXNzc3MubmV0'),
  region: 'HK',
  regionCode: 'HK',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5VUy5DTUxpdXNzc3MubmV0'),
  region: 'US',
  regionCode: 'US',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5TRy5DTUxpdXNzc3MubmV0'),
  region: 'SG',
  regionCode: 'SG',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5KUC5DTUxpdXNzc3MubmV0'),
  region: 'JP',
  regionCode: 'JP',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5LUi5DTUxpdXNzc3MubmV0'),
  region: 'KR',
  regionCode: 'KR',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5ERS5DTUxpdXNzc3MubmV0'),
  region: 'DE',
  regionCode: 'DE',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5TRS5DTUxpdXNzc3MubmV0'),
  region: 'SE',
  regionCode: 'SE',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5OTC5DTUxpdXNzc3MubmV0'),
  region: 'NL',
  regionCode: 'NL',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5GSS5DTUxpdXNzc3MubmV0'),
  region: 'FI',
  regionCode: 'FI',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5HQi5DTUxpdXNzc3MubmV0'),
  region: 'GB',
  regionCode: 'GB',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5PcmFjbGUuY21saXVzc3NzLm5ldA=='),
  region: 'Oracle',
  regionCode: 'Oracle',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5EaWdpdGFsT2NlYW4uQ01MaXVzc3NzLm5ldA=='),
  region: 'DigitalOcean',
  regionCode: 'DigitalOcean',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5WdWx0ci5DTUxpdXNzc3MubmV0'),
  region: 'Vultr',
  regionCode: 'Vultr',
  port: 443
}, {
  domain: è§£ç پ64('UHJveHlJUC5NdWx0YWNvbS5DTUxpdXNzc3MubmV0'),
  region: 'Multacom',
  regionCode: 'Multacom',
  port: 443
}];
const ç›´è؟‍هںںهگچهˆ—è،¨ = [{
  name: "cloudflare.182682.xyz",
  domain: "cloudflare.182682.xyz"
}, {
  name: "speed.marisalnc.com",
  domain: "speed.marisalnc.com"
}, {
  domain: "freeyx.cloudflare88.eu.org"
}, {
  domain: "bestcf.top"
}, {
  domain: "cdn.2020111.xyz"
}, {
  domain: "cfip.cfcdn.vip"
}, {
  domain: "cf.0sm.com"
}, {
  domain: "cf.090227.xyz"
}, {
  domain: "cf.zhetengsha.eu.org"
}, {
  domain: "cloudflare.9jy.cc"
}, {
  domain: "cf.zerone-cdn.pp.ua"
}, {
  domain: "cfip.1323123.xyz"
}, {
  domain: "cnamefuckxxs.yuchen.icu"
}, {
  domain: "cloudflare-ip.mofashi.ltd"
}, {
  domain: "115155.xyz"
}, {
  domain: "cname.xirancdn.us"
}, {
  domain: "f3058171cad.002404.xyz"
}, {
  domain: "8.889288.xyz"
}, {
  domain: "cdn.tzpro.xyz"
}, {
  domain: "cf.877771.xyz"
}, {
  domain: "xn--b6gac.eu.org"
}];
const é”™è¯¯_و— و•ˆو•°وچ® = atob('aW52YWxpZCBkYXRh');
const é”™è¯¯_و— و•ˆç”¨وˆ· = atob('aW52YWxpZCB1c2Vy');
const é”™è¯¯_ن¸چو”¯وŒپه‘½ن»¤ = atob('Y29tbWFuZCBpcyBub3Qgc3VwcG9ydGVk');
const é”™è¯¯_ن»…و”¯وŒپهںںهگچç³»ç»ںç”¨وˆ·و•°وچ®وٹ¥ = atob('VURQIHByb3h5IG9ubHkgZW5hYmxlIGZvciBETlMgd2hpY2ggaXMgcG9ydCA1Mw==');
const é”™è¯¯_و— و•ˆهœ°ه‌€ç±»ه‍‹ = atob('aW52YWxpZCBhZGRyZXNzVHlwZQ==');
const é”™è¯¯_ç©؛هœ°ه‌€ = atob('YWRkcmVzc1ZhbHVlIGlzIGVtcHR5');
const é”™è¯¯_ç½‘é،µه¥—وژ¥ه­—وœھو‰“ه¼€ = atob('d2ViU29ja2V0LmVhZHlTdGF0ZSBpcyBub3Qgb3Blbg==');
const é”™è¯¯_و— و•ˆو ‡è¯†ه­—ç¬¦ن¸² = atob('U3RyaW5naWZpZWQgaWRlbnRpZmllciBpcyBpbnZhbGlk');
const é”™è¯¯_و— و•ˆن»£çگ†هœ°ه‌€ = atob('SW52YWxpZCBTT0NLUyBhZGRyZXNzIGZvcm1hdA==');
const é”™è¯¯_ن»£çگ†و— هڈ¯ç”¨و–¹و³• = atob('bm8gYWNjZXB0YWJsZSBtZXRob2Rz');
const é”™è¯¯_ن»£çگ†éœ€è¦پè®¤è¯پ = atob('c29ja3Mgc2VydmVyIG5lZWRzIGF1dGg=');
const é”™è¯¯_ن»£çگ†è®¤è¯په¤±è´¥ = atob('ZmFpbCB0byBhdXRoIHNvY2tzIHNlcnZlcg==');
const é”™è¯¯_ن»£çگ†è؟‍وژ¥ه¤±è´¥ = atob('ZmFpbCB0byBvcGVuIHNvY2tzIGNvbm5lY3Rpb24=');
let ه·²è§£و‍گن»£çگ†5é…چç½® = {};
let وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = false;
const هœ°ه‌€ç±»ه‍‹_ه››ç‰ˆ = 1;
const هœ°ه‌€ç±»ه‍‹_ç½‘ه‌€ = 2;
const هœ°ه‌€ç±»ه‍‹_ه…­ç‰ˆ = 3;
const ن¼ è¾“ه‌—ه¤§ه°ڈ = 64 * 1024;
const ن¼ è¾“ن¸‹è½½هŒ…ه¤§ه°ڈ = 32 * 1024;
const ن¼ è¾“ن¸‹è½½ه°¾éƒ¨ = 512;
const ن¼ è¾“ن¸‹è½½ه»¶è؟ں = 0;
const ن¼ è¾“ن¸ٹن¼ هŒ…ه¤§ه°ڈ = 16 * 1024;
const ن¼ è¾“ن¸ٹن¼ éکںهˆ—ن¸ٹé™گ = 256 * 1024;
const ن¼ è¾“è؟‍وژ¥ç«‍é€ںو•° = 2;
const é¦–ه­—èٹ‚è¶…و—¶ = 3500;
const ه…±ن؛«è§£ç په™¨ = new TextDecoder();
const ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک = new Map();
function وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(ه­—ç¬¦ن¸²) {
  const ç”¨وˆ·و­£هˆ™ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return ç”¨وˆ·و­£هˆ™.test(ه­—ç¬¦ن¸²);
}
function وک¯هگ¦وœ‰و•ˆهœ°ه‌€(هœ°ه‌€792) {
  const ه€¼4و­£هˆ™ = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (ه€¼4و­£هˆ™.test(هœ°ه‌€792)) return true;
  const ه€¼6و­£هˆ™ = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (ه€¼6و­£هˆ™.test(هœ°ه‌€792)) return true;
  const ه€¼6ه€¼و­£هˆ™ = /^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
  if (ه€¼6ه€¼و­£هˆ™.test(هœ°ه‌€792)) return true;
  return false;
}
function هˆ›ه»؛èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ = false) {
  // ه¦‚و‍œé…چç½®ن؛† yxURLï¼Œهˆ™è·³è؟‡ç¼–هڈ·
  const ه€¼è·³è؟‡ = typeof ن¼کé€‰هœ°ه‌€و؛گ !== 'undefined' && ن¼کé€‰هœ°ه‌€و؛گ && ن¼کé€‰هœ°ه‌€و؛گ.trim();
  let è·³è؟‡ç¼–هڈ·791 = ه€¼è·³è؟‡ || è·³è؟‡;
  const è®،و•°ه™¨ç»„790 = {};
  function è®¾ç½®è·³è؟‡ç¼–هڈ·(وœ¬هœ°ه€¼789) {
    if (!ه€¼è·³è؟‡) {
      è·³è؟‡ç¼–هڈ·791 = وœ¬هœ°ه€¼789;
    }
  }
  function ه¤„çگ†ه‘½هگچه™¨(هں؛ç،€هگچç§°, èٹ‚ç‚¹هگچç§°788 = null) {
    if (è·³è؟‡ç¼–هڈ·791 || هں؛ç،€هگچç§° && هں؛ç،€هگچç§°.includes('.')) {
      return èٹ‚ç‚¹هگچç§°788 || هں؛ç،€هگچç§°;
    }
    if (!è®،و•°ه™¨ç»„790[هں؛ç،€هگچç§°]) è®،و•°ه™¨ç»„790[هں؛ç،€هگچç§°] = 0;
    è®،و•°ه™¨ç»„790[هں؛ç،€هگچç§°]++;
    const ç´¢ه¼•787 = String(è®،و•°ه™¨ç»„790[هں؛ç،€هگچç§°]).padStart(2, '0');
    return `${èٹ‚ç‚¹هگچç§°788 || هں؛ç،€هگچç§°}-${ç´¢ه¼•787}`;
  }
  return {
    namer: ه¤„çگ†ه‘½هگچه™¨,
    setSkipNumbering: è®¾ç½®è·³è؟‡ç¼–هڈ·
  };
}
function è§„èŒƒهŒ–èٹ‚ç‚¹ن¸»وœ؛(ن¸»وœ؛786) {
  return String(ن¸»وœ؛786 || '').trim().replace(/^\[([^\]]+)\]$/, '$1');
}
function ه¤„çگ†ه€¼èٹ‚ç‚¹هˆ«هگچéƒ¨هˆ†(ه€¼785, ه›‍é€€ = 'Node') {
  let و–‡وœ¬784 = String(ه€¼785 || '').trim();
  if (!و–‡وœ¬784 || /^è‡ھه®ڑن¹‰ن¼کé€‰-/i.test(و–‡وœ¬784)) و–‡وœ¬784 = ه›‍é€€;
  و–‡وœ¬784 = و–‡وœ¬784.replace(/^\[([^\]]+)\]$/, '$1').replace(/^https?:\/\//i, '').replace(/[/?#].*$/, '').replace(/\s+/g, '_');
  return و–‡وœ¬784 || ه›‍é€€;
}
function èژ·هڈ–ه€¼èٹ‚ç‚¹هˆ«هگچهں؛ç،€(é،¹ç›®783) {
  const ن¸»وœ؛782 = è§„èŒƒهŒ–èٹ‚ç‚¹ن¸»وœ؛(é،¹ç›®783?.ip || é،¹ç›®783?.domain || '');
  if (ن¸»وœ؛782 && ن¸»وœ؛782.includes(':') && /^[0-9a-fA-F:.]+$/.test(ن¸»وœ؛782)) return 'IPv6ن¼کé€‰';
  if (ن¸»وœ؛782 && !وک¯هگ¦وœ‰و•ˆهœ°ه‌€(ن¸»وœ؛782)) return 'ن¼کé€‰هںںهگچ';
  const وœ¬هœ°ه€¼781 = ه¤„çگ†ه€¼èٹ‚ç‚¹هˆ«هگچéƒ¨هˆ†(é،¹ç›®783?.isp || é،¹ç›®783?.name || '', 'IPv4ن¼کé€‰');
  const وœ؛وˆ؟780 = ه¤„çگ†ه€¼èٹ‚ç‚¹هˆ«هگچéƒ¨هˆ†(é،¹ç›®783?.colo || '', '');
  return وœ؛وˆ؟780 ? `${وœ¬هœ°ه€¼781}-${وœ؛وˆ؟780}` : وœ¬هœ°ه€¼781;
}
function هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·779 = false) {
  const è®،و•°ه™¨ç»„ = {};
  return é،¹ç›®778 => {
    const هں؛ç،€ = èژ·هڈ–ه€¼èٹ‚ç‚¹هˆ«هگچهں؛ç،€(é،¹ç›®778);
    if (è·³è؟‡ç¼–هڈ·779) return هں؛ç،€;
    è®،و•°ه™¨ç»„[هں؛ç،€] = (è®،و•°ه™¨ç»„[هں؛ç،€] || 0) + 1;
    return `${هں؛ç،€}-${String(è®،و•°ه™¨ç»„[هں؛ç،€]).padStart(2, '0')}`;
  };
}
function è§„èŒƒهŒ–ه؛”ç”¨ه±‚هچڈè®®هچڈه•†(ه€¼777) {
  const وœ¬هœ°ه€¼776 = ['', 'h3', 'h2', 'http/1.1', 'h3,h2', 'h2,http/1.1', 'h3,h2,http/1.1'];
  const ه؛”ç”¨ه±‚هچڈè®®هچڈه•†775 = String(ه€¼777 || '').trim();
  return وœ¬هœ°ه€¼776.includes(ه؛”ç”¨ه±‚هچڈè®®هچڈه•†775) ? ه؛”ç”¨ه±‚هچڈè®®هچڈه•†775 : '';
}
function ه¤„çگ†ه€¼ه؛”ç”¨ه±‚هچڈè®®هچڈه•†ه€¼(هڈ‚و•°774) {
  const ه؛”ç”¨ه±‚هچڈè®®هچڈه•† = è§„èŒƒهŒ–ه؛”ç”¨ه±‚هچڈè®®هچڈه•†(è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†);
  if (ه؛”ç”¨ه±‚هچڈè®®هچڈه•†) هڈ‚و•°774.set('alpn', ه؛”ç”¨ه±‚هچڈè®®هچڈه•†);
}
async function ه¤„çگ†ه€¼é”®ه€¼ه€¼(وœ¬هœ°ه€¼773) {
  if (وœ¬هœ°ه€¼773.C) {
    try {
      é”®ه€¼ه­که‚¨ = وœ¬هœ°ه€¼773.C;
      await هٹ è½½é”®ه€¼é…چç½®();
    } catch (é”™è¯¯772) {
      é”®ه€¼ه­که‚¨ = null;
    }
  } else {}
}
async function هٹ è½½é”®ه€¼é…چç½®(وœ¬هœ°ه€¼771 = false) {
  if (!é”®ه€¼ه­که‚¨) {
    return;
  }

  // çں­çھ—هڈ£ه†…ه®Œه…¨ن؟،ن»»ç¼“ه­کï¼Œéپ؟ه…چé«کé¢‘è¯·و±‚و—¶و‰“çˆ† KV
  if (!وœ¬هœ°ه€¼771 && é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ > 0 && Date.now() - é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ < é”®ه€¼ç¼“ه­کوœںé™گ) {
    return;
  }
  try {
    // è¯»هڈ–ه°ڈن½“ç§¯çڑ„ç‰ˆوœ¬é”® c_verï¼ˆç؛¦ 13Bï¼‰ï¼Œç”¨ن؛ژè·¨ isolate ç¼“ه­که¤±و•ˆ
    let وœ¬هœ°ه€¼770 = '';
    try {
      وœ¬هœ°ه€¼770 = (await é”®ه€¼ه­که‚¨.get('c_ver')) || '';
    } catch (ه؟½ç•¥ه€¼769) {}

    // ç‰ˆوœ¬وœھهڈکهŒ–ن¸”ه·²وœ‰ç¼“ه­کï¼Œن»…هˆ·و–°و—¶é—´وˆ³ï¼Œè·³è؟‡ه®Œو•´è¯»هڈ–
    if (!وœ¬هœ°ه€¼771 && وœ¬هœ°ه€¼770 && وœ¬هœ°ه€¼770 === é”®ه€¼é…چç½®ç‰ˆوœ¬ && é”®ه€¼é…چç½® && Object.keys(é”®ه€¼é…چç½®).length > 0) {
      é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ = Date.now();
      return;
    }
    const é…چç½®و•°وچ® = await é”®ه€¼ه­که‚¨.get('c');
    if (é…چç½®و•°وچ®) {
      é”®ه€¼é…چç½® = JSON.parse(é…چç½®و•°وچ®);
    }
    é”®ه€¼é…چç½®ç‰ˆوœ¬ = وœ¬هœ°ه€¼770;
    é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ = Date.now();
  } catch (é”™è¯¯768) {
    // è¯»هڈ–ه¤±è´¥و—¶ن؟‌ç•™çژ°وœ‰ç¼“ه­کï¼Œéپ؟ه…چن¸´و—¶و•…éڑœه¯¼è‡´é…چç½®ن¸¢ه¤±
    if (!é”®ه€¼é…چç½®) é”®ه€¼é…چç½® = {};
  }
}
async function ن؟‌ه­کé”®ه€¼é…چç½®() {
  if (!é”®ه€¼ه­که‚¨) {
    return;
  }
  try {
    const é…چç½®ه­—ç¬¦ن¸² = JSON.stringify(é”®ه€¼é…چç½®);
    await é”®ه€¼ه­که‚¨.put('c', é…چç½®ه­—ç¬¦ن¸²);
    // ه†™ه…¥ç‰ˆوœ¬هڈ·ï¼Œè®©ه…¶ه®ƒ isolate هœ¨ن¸‹و¬،è¯·و±‚و—¶èƒ½ç«‹هچ³çœ‹هˆ°هڈکو›´
    const و–°ه€¼ = String(Date.now());
    é”®ه€¼é…چç½®ç‰ˆوœ¬ = و–°ه€¼;
    try {
      await é”®ه€¼ه­که‚¨.put('c_ver', و–°ه€¼);
    } catch (ه؟½ç•¥ه€¼767) {}
    é”®ه€¼é…چç½®ن¸ٹو¬،هٹ è½½ = Date.now();
  } catch (é”™è¯¯766) {
    throw é”™è¯¯766;
  }
}
function èژ·هڈ–é…چç½®ه€¼(é”®765, é»کè®¤ه€¼ = '') {
  if (é”®ه€¼é…چç½®[é”®765] !== undefined) {
    return é”®ه€¼é…چç½®[é”®765];
  }
  return é»کè®¤ه€¼;
}
async function è®¾ç½®é…چç½®ه€¼(é”®764, ه€¼763) {
  é”®ه€¼é…چç½®[é”®764] = ه€¼763;
  await ن؟‌ه­کé”®ه€¼é…چç½®();
}
async function و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚762) {
  try {
    const ن؛‘ه¢™ه›½ه®¶ = è¯·و±‚762.cf?.country;
    if (ن؛‘ه¢™ه›½ه®¶) {
      const ه›½ه®¶ه€¼هœ°هŒ؛ = {
        'US': 'US',
        'SG': 'SG',
        'JP': 'JP',
        'KR': 'KR',
        'DE': 'DE',
        'SE': 'SE',
        'NL': 'NL',
        'FI': 'FI',
        'GB': 'GB',
        'CN': 'SG',
        'TW': 'JP',
        'AU': 'SG',
        'CA': 'US',
        'FR': 'DE',
        'IT': 'DE',
        'ES': 'DE',
        'CH': 'DE',
        'AT': 'DE',
        'BE': 'NL',
        'DK': 'SE',
        'NO': 'SE',
        'IE': 'GB'
      };
      if (ه›½ه®¶ه€¼هœ°هŒ؛[ن؛‘ه¢™ه›½ه®¶]) {
        return ه›½ه®¶ه€¼هœ°هŒ؛[ن؛‘ه¢™ه›½ه®¶];
      }
    }
    return 'SG';
  } catch (é”™è¯¯761) {
    return 'SG';
  }
}
async function و£€وں¥هœ°ه‌€هڈ¯ç”¨و€§(هںںهگچ760, ç«¯هڈ£759 = 443, è¶…و—¶758 = 2000) {
  try {
    const وژ§هˆ¶ه™¨757 = new AbortController();
    const è¶…و—¶و ‡è¯†756 = setTimeout(() => وژ§هˆ¶ه™¨757.abort(), è¶…و—¶758);
    const ه“چه؛”755 = await fetch(`https://${هںںهگچ760}`, {
      method: 'HEAD',
      signal: وژ§هˆ¶ه™¨757.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CF-IP-Checker/1.0)'
      }
    });
    clearTimeout(è¶…و—¶و ‡è¯†756);
    return ه“چه؛”755.status < 500;
  } catch (é”™è¯¯754) {
    return true;
  }
}
async function èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه·¥ن½œه™¨هœ°هŒ؛753 = '', ه€¼هœ°هŒ؛هŒ¹é…چ752 = هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ) {
  if (ه¤‡ç”¨هœ°ه‌€هˆ—è،¨.length === 0) {
    return null;
  }
  const هڈ¯ç”¨هœ°ه‌€هˆ—è،¨751 = ه¤‡ç”¨هœ°ه‌€هˆ—è،¨.map(هœ°ه‌€750 => ({
    ...هœ°ه‌€750,
    available: true
  }));
  if (ه€¼هœ°هŒ؛هŒ¹é…چ752 && ه·¥ن½œه™¨هœ°هŒ؛753) {
    const ه€¼هœ°ه‌€هˆ—è،¨749 = èژ·هڈ–ه€¼هœ°هŒ؛ه€¼(ه·¥ن½œه™¨هœ°هŒ؛753, هڈ¯ç”¨هœ°ه‌€هˆ—è،¨751, ه€¼هœ°هŒ؛هŒ¹é…چ752);
    if (ه€¼هœ°ه‌€هˆ—è،¨749.length > 0) {
      const ه·²é€‰هœ°ه‌€748 = ه€¼هœ°ه‌€هˆ—è،¨749[0];
      return ه·²é€‰هœ°ه‌€748;
    }
  }
  const ه·²é€‰هœ°ه‌€ = هڈ¯ç”¨هœ°ه‌€هˆ—è،¨751[0];
  return ه·²é€‰هœ°ه‌€;
}
function èژ·هڈ–ه€¼ه€¼(هœ°هŒ؛747) {
  const ه€¼وک ه°„ = {
    'US': ['SG', 'JP', 'KR'],
    'SG': ['JP', 'KR', 'US'],
    'JP': ['SG', 'KR', 'US'],
    'KR': ['JP', 'SG', 'US'],
    'DE': ['NL', 'GB', 'SE', 'FI'],
    'SE': ['DE', 'NL', 'FI', 'GB'],
    'NL': ['DE', 'GB', 'SE', 'FI'],
    'FI': ['SE', 'DE', 'NL', 'GB'],
    'GB': ['DE', 'NL', 'SE', 'FI']
  };
  return ه€¼وک ه°„[هœ°هŒ؛747] || [];
}
function èژ·هڈ–ه€¼ه€¼ه€¼ه€¼(هœ°هŒ؛746) {
  const ه€¼ه€¼745 = èژ·هڈ–ه€¼ه€¼(هœ°هŒ؛746);
  const ه€¼ه€¼744 = ['US', 'SG', 'JP', 'KR', 'DE', 'SE', 'NL', 'FI', 'GB'];
  return [هœ°هŒ؛746, ...ه€¼ه€¼745, ...ه€¼ه€¼744.filter(ç»“و‍œه€¼743 => ç»“و‍œه€¼743 !== هœ°هŒ؛746 && !ه€¼ه€¼745.includes(ç»“و‍œه€¼743))];
}
function èژ·هڈ–ه€¼هœ°هŒ؛ه€¼(ه·¥ن½œه™¨هœ°هŒ؛, هڈ¯ç”¨هœ°ه‌€هˆ—è،¨, ه€¼هœ°هŒ؛هŒ¹é…چ = هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ) {
  if (!ه€¼هœ°هŒ؛هŒ¹é…چ || !ه·¥ن½œه™¨هœ°هŒ؛) {
    return هڈ¯ç”¨هœ°ه‌€هˆ—è،¨;
  }
  const ه€¼ه€¼742 = èژ·هڈ–ه€¼ه€¼ه€¼ه€¼(ه·¥ن½œه™¨هœ°هŒ؛);
  const ه€¼هœ°ه‌€هˆ—è،¨741 = [];
  for (const هœ°هŒ؛ of ه€¼ه€¼742) {
    const هœ°هŒ؛هœ°ه‌€هˆ—è،¨ = هڈ¯ç”¨هœ°ه‌€هˆ—è،¨.filter(هœ°ه‌€740 => هœ°ه‌€740.regionCode === هœ°هŒ؛);
    ه€¼هœ°ه‌€هˆ—è،¨741.push(...هœ°هŒ؛هœ°ه‌€هˆ—è،¨);
  }
  return ه€¼هœ°ه‌€هˆ—è،¨741;
}
function è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(è¾“ه…¥) {
  if (è¾“ه…¥.includes('[') && è¾“ه…¥.includes(']')) {
    const وœ¬هœ°ه€¼739 = è¾“ه…¥.match(/^\[([^\]]+)\](?::(\d+))?$/);
    if (وœ¬هœ°ه€¼739) {
      return {
        address: وœ¬هœ°ه€¼739[1],
        port: وœ¬هœ°ه€¼739[2] ? parseInt(وœ¬هœ°ه€¼739[2], 10) : null
      };
    }
  }
  const ه€¼ه€¼ç´¢ه¼•738 = è¾“ه…¥.lastIndexOf(':');
  if (ه€¼ه€¼ç´¢ه¼•738 > 0) {
    const هœ°ه‌€737 = è¾“ه…¥.substring(0, ه€¼ه€¼ç´¢ه¼•738);
    const ç«¯هڈ£ه­—ç¬¦ن¸² = è¾“ه…¥.substring(ه€¼ه€¼ç´¢ه¼•738 + 1);
    const ç«¯هڈ£736 = parseInt(ç«¯هڈ£ه­—ç¬¦ن¸², 10);

    // address هگ« ':' è¯´وکژوک¯è£¸ IPv6ï¼ˆه¦‚ 2001:db8::1ï¼‰ï¼Œو•´ن½“ه½“هœ°ه‌€ï¼Œو— ç«¯هڈ£
    if (!هœ°ه‌€737.includes(':') && !isNaN(ç«¯هڈ£736) && ç«¯هڈ£736 > 0 && ç«¯هڈ£736 <= 65535) {
      return {
        address: هœ°ه‌€737,
        port: ç«¯هڈ£736
      };
    }
  }
  return {
    address: è¾“ه…¥,
    port: null
  };
}
export default {
  async fetch(è¯·و±‚735, وœ¬هœ°ه€¼734, وœ¬هœ°ه€¼733) {
    try {
      const وک¯هگ¦ç½‘é،µه¥—وژ¥ه­— = è¯·و±‚735.headers.get('Upgrade') === atob('d2Vic29ja2V0');
      const وک¯هگ¦ه€¼732 = è¯·و±‚735.method === 'POST';
      const è¯·و±‚ç½‘ه‌€731 = new URL(è¯·و±‚735.url);
      const è·¯ه¾„ه€¼730 = è¯·و±‚ç½‘ه‌€731.pathname.split('/').filter(هڈ‚و•°ه€¼729 => هڈ‚و•°ه€¼729);
      if (!وک¯هگ¦ç½‘é،µه¥—وژ¥ه­— && !وک¯هگ¦ه€¼732 && è¯·و±‚ç½‘ه‌€731.pathname !== '/') {
        const ه€¼ه€¼728 = (وœ¬هœ°ه€¼734.u || وœ¬هœ°ه€¼734.U || '').toLowerCase();
        const ه€¼ه€¼727 = (وœ¬هœ°ه€¼734.d || وœ¬هœ°ه€¼734.D || '').toLowerCase();
        const é¦–و¬،ه€¼ = è·¯ه¾„ه€¼730[0] || '';
        const و¸…çگ†ه€¼ = ه€¼ه€¼727.startsWith('/') ? ه€¼ه€¼727.substring(1) : ه€¼ه€¼727;
        if (é¦–و¬،ه€¼ !== ه€¼ه€¼728 && (و¸…çگ†ه€¼ ? é¦–و¬،ه€¼ !== و¸…çگ†ه€¼ : false)) {
          return new Response('Not Found', {
            status: 404
          });
        }
      }
      await ه¤„çگ†ه€¼é”®ه€¼ه€¼(وœ¬هœ°ه€¼734);
      è®¤è¯پن»¤ç‰Œ = (وœ¬هœ°ه€¼734.u || وœ¬هœ°ه€¼734.U || è®¤è¯پن»¤ç‰Œ).toLowerCase();
      const ه€¼è·¯ه¾„ = (وœ¬هœ°ه€¼734.d || وœ¬هœ°ه€¼734.D || è®¤è¯پن»¤ç‰Œ).toLowerCase();
      const وœ¬هœ°ه€¼726 = èژ·هڈ–é…چç½®ه€¼('p', وœ¬هœ°ه€¼734.p || وœ¬هœ°ه€¼734.P);
      let ه€¼è‡ھه®ڑن¹‰هœ°ه‌€ = false;
      const و‰‹هٹ¨هœ°هŒ؛725 = èژ·هڈ–é…چç½®ه€¼('wk', وœ¬هœ°ه€¼734.wk || وœ¬هœ°ه€¼734.WK);
      if (و‰‹هٹ¨هœ°هŒ؛725 && و‰‹هٹ¨هœ°هŒ؛725.trim()) {
        و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛ = و‰‹هٹ¨هœ°هŒ؛725.trim().toUpperCase();
        ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛;
      } else if (وœ¬هœ°ه€¼726 && وœ¬هœ°ه€¼726.trim()) {
        ه€¼è‡ھه®ڑن¹‰هœ°ه‌€ = true;
        ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = 'CUSTOM';
      } else {
        ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚735);
      }
      const هœ°هŒ؛هŒ¹é…چوژ§هˆ¶724 = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('rm', é…چç½®é»کè®¤ه€¼.rm, وœ¬هœ°ه€¼734.rm || وœ¬هœ°ه€¼734.RM);
      هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ = !(هœ°هŒ؛هŒ¹é…چوژ§هˆ¶724 && هœ°هŒ؛هŒ¹é…چوژ§هˆ¶724.toLowerCase() === 'no');
      const ه€¼ه›‍é€€723 = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('p', é…چç½®é»کè®¤ه€¼.p, وœ¬هœ°ه€¼734.p || وœ¬هœ°ه€¼734.P);
      ه›‍é€€هœ°ه‌€ = ه€¼ه›‍é€€723 ? ه€¼ه›‍é€€723.trim() : '';
      ن»£çگ†5é…چç½® = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('s', é…چç½®é»کè®¤ه€¼.s, وœ¬هœ°ه€¼734.s || وœ¬هœ°ه€¼734.S);
      if (ن»£çگ†5é…چç½®) {
        try {
          ه·²è§£و‍گن»£çگ†5é…چç½® = è§£و‍گن»£çگ†é…چç½®(ن»£çگ†5é…چç½®);
          وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = true;
        } catch (é”™è¯¯722) {
          وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = false;
        }
      } else {
        ه·²è§£و‍گن»£çگ†5é…چç½® = {};
        وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = false;
      }
      const è‡ھه®ڑن¹‰ن¼کé€‰ = èژ·هڈ–é…چç½®ه€¼('yx', وœ¬هœ°ه€¼734.yx || وœ¬هœ°ه€¼734.YX);
      if (è‡ھه®ڑن¹‰ن¼کé€‰) {
        try {
          const ن¼کé€‰هˆ—è،¨721 = è‡ھه®ڑن¹‰ن¼کé€‰.split(',').map(é،¹ç›®720 => é،¹ç›®720.trim()).filter(é،¹ç›®719 => é،¹ç›®719);
          è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
          è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
          ن¼کé€‰هˆ—è،¨721.forEach(é،¹ç›®718 => {
            let èٹ‚ç‚¹هگچç§°717 = '';
            let هœ°ه‌€éƒ¨هˆ†716 = é،¹ç›®718;
            if (é،¹ç›®718.includes('#')) {
              const éƒ¨هˆ†هˆ—è،¨715 = é،¹ç›®718.split('#');
              هœ°ه‌€éƒ¨هˆ†716 = éƒ¨هˆ†هˆ—è،¨715[0].trim();
              èٹ‚ç‚¹هگچç§°717 = éƒ¨هˆ†هˆ—è،¨715[1].trim();
            }
            const {
              address: هœ°ه‌€714,
              port: ç«¯هڈ£713
            } = è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(هœ°ه‌€éƒ¨هˆ†716);
            if (!èٹ‚ç‚¹هگچç§°717) {
              èٹ‚ç‚¹هگچç§°717 = 'è‡ھه®ڑن¹‰ن¼کé€‰-' + هœ°ه‌€714 + (ç«¯هڈ£713 ? ':' + ç«¯هڈ£713 : '');
            }
            if (وک¯هگ¦وœ‰و•ˆهœ°ه‌€(هœ°ه‌€714)) {
              è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨.push({
                ip: هœ°ه‌€714,
                port: ç«¯هڈ£713,
                isp: èٹ‚ç‚¹هگچç§°717
              });
            } else {
              è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨.push({
                domain: هœ°ه‌€714,
                port: ç«¯هڈ£713,
                name: èٹ‚ç‚¹هگچç§°717
              });
            }
          });
        } catch (é”™è¯¯712) {
          è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
          è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
        }
      }
      const ه€¼وژ§هˆ¶711 = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('qj', é…چç½®é»کè®¤ه€¼.qj, وœ¬هœ°ه€¼734.qj || وœ¬هœ°ه€¼734.QJ);
      هگ¯ç”¨ن»£çگ†é™چç؛§ = !!(ه€¼وژ§هˆ¶711 && ه€¼وژ§هˆ¶711.toLowerCase() === 'no');
      const ه€¼وژ§هˆ¶710 = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('dkby', é…چç½®é»کè®¤ه€¼.dkby, وœ¬هœ°ه€¼734.dkby || وœ¬هœ°ه€¼734.DKBY);
      ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ = !!(ه€¼وژ§هˆ¶710 && ه€¼وژ§هˆ¶710.toLowerCase() === 'yes');
      const ه€¼وژ§هˆ¶709 = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('yxby', é…چç½®é»کè®¤ه€¼.yxby, وœ¬هœ°ه€¼734.yxby || وœ¬هœ°ه€¼734.YXBY);
      ç¦پç”¨ن¼کé€‰ = !!(ه€¼وژ§هˆ¶709 && ه€¼وژ§هˆ¶709.toLowerCase() === 'yes');
      هگ¯ç”¨وکژو–‡ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('ev', true, وœ¬هœ°ه€¼734.ev);
      هگ¯ç”¨وœ¨é©¬ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('et', false, وœ¬هœ°ه€¼734.et);
      ن¼ è¾“è·¯ه¾„ = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('tp', é…چç½®é»کè®¤ه€¼.tp, وœ¬هœ°ه€¼734.tp);
      هگ¯ç”¨و‰©ه±•ن¼ è¾“ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('ex', false, وœ¬هœ°ه€¼734.ex);
      è®¢éک…è½¬وچ¢وژ¥هڈ£ = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('scu', é…چç½®é»کè®¤ه€¼.scu, وœ¬هœ°ه€¼734.scu);
      هگ¯ç”¨ن¼کé€‰هںںهگچ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('epd', true, وœ¬هœ°ه€¼734.epd || وœ¬هœ°ه€¼734.EPD);
      هگ¯ç”¨ن¼کé€‰هœ°ه‌€ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('epi', true, وœ¬هœ°ه€¼734.epi || وœ¬هœ°ه€¼734.EPI);
      هگ¯ç”¨ن»“ه؛“ن¼کé€‰ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('egi', true, وœ¬هœ°ه€¼734.egi || وœ¬هœ°ه€¼734.EGI);
      هگ¯ç”¨هژںç”ںهœ°ه‌€ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('ena', false, وœ¬هœ°ه€¼734.ena || وœ¬هœ°ه€¼734.ENA);
      هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ = èژ·هڈ–é…چç½®ه¼€ه…³ه€¼('ech', false, وœ¬هœ°ه€¼734.ech || وœ¬هœ°ه€¼734.ECH);

      // هٹ è½½è‡ھه®ڑن¹‰DNSه’ŒECHهںںهگچé…چç½®
      è‡ھه®ڑن¹‰هںںهگچç³»ç»ں = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('customDNS', é…چç½®é»کè®¤ه€¼.customDNS).trim() || é…چç½®é»کè®¤ه€¼.customDNS;
      è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('customECHDomain', é…چç½®é»کè®¤ه€¼.customECHDomain).trim() || é…چç½®é»کè®¤ه€¼.customECHDomain;
      è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•† = è§„èŒƒهŒ–ه؛”ç”¨ه±‚هچڈè®®هچڈه•†(èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('alpn', é…چç½®é»کè®¤ه€¼.alpn, وœ¬هœ°ه€¼734.alpn || وœ¬هœ°ه€¼734.ALPN));

      // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œè‡ھهٹ¨هگ¯ç”¨ن»…TLSو¨،ه¼ڈï¼ˆéپ؟ه…چ80ç«¯هڈ£ه¹²و‰°ï¼‰
      // ECHéœ€è¦پTLSو‰چèƒ½ه·¥ن½œï¼Œو‰€ن»¥ه؟…é،»ç¦پç”¨é‌‍TLSèٹ‚ç‚¹
      if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ = true;
        // و£€وں¥ KV ن¸­وک¯هگ¦وœ‰ dkby: yesï¼Œو²،وœ‰ه°±ç›´وژ¥ه†™ه…¥
        const ه½“ه‰چه€¼ = èژ·هڈ–é…چç½®ه€¼('dkby', '');
        if (ه½“ه‰چه€¼ !== 'yes') {
          await è®¾ç½®é…چç½®ه€¼('dkby', 'yes');
        }
      }
      if (!هگ¯ç”¨وکژو–‡ && !هگ¯ç”¨وœ¨é©¬ && !هگ¯ç”¨و‰©ه±•ن¼ è¾“) {
        هگ¯ç”¨وکژو–‡ = true;
      }
      ن¼کé€‰هœ°ه‌€و؛گ = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('yxURL', é…چç½®é»کè®¤ه€¼.yxURL, وœ¬هœ°ه€¼734.yxURL || وœ¬هœ°ه€¼734.YXURL);
      è‡ھه®ڑن¹‰è·¯ه¾„ = èژ·هڈ–é…چç½®و–‡وœ¬ه€¼('d', é…چç½®é»کè®¤ه€¼.d, وœ¬هœ°ه€¼734.d || وœ¬هœ°ه€¼734.D);
      const ç½‘ه‌€698 = new URL(è¯·و±‚735.url);
      if (ç½‘ه‌€698.pathname.includes('/api/config')) {
        const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨697 = ç½‘ه‌€698.pathname.split('/').filter(هڈ‚و•°ه€¼696 => هڈ‚و•°ه€¼696);
        const وژ¥هڈ£ç´¢ه¼•695 = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨697.indexOf('api');
        if (وژ¥هڈ£ç´¢ه¼•695 > 0) {
          const è·¯ه¾„ه€¼694 = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨697.slice(0, وژ¥هڈ£ç´¢ه¼•695);
          const è·¯ه¾„ه€¼693 = è·¯ه¾„ه€¼694.join('/');
          let وک¯هگ¦وœ‰و•ˆ692 = false;
          if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
            const و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„691 = è‡ھه®ڑن¹‰è·¯ه¾„.trim().startsWith('/') ? è‡ھه®ڑن¹‰è·¯ه¾„.trim().substring(1) : è‡ھه®ڑن¹‰è·¯ه¾„.trim();
            وک¯هگ¦وœ‰و•ˆ692 = è·¯ه¾„ه€¼693 === و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„691;
          } else {
            وک¯هگ¦وœ‰و•ˆ692 = وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(è·¯ه¾„ه€¼693) && è·¯ه¾„ه€¼693 === è®¤è¯پن»¤ç‰Œ;
          }
          if (وک¯هگ¦وœ‰و•ˆ692) {
            return await ه¤„çگ†é…چç½®وژ¥هڈ£(è¯·و±‚735, وœ¬هœ°ه€¼734);
          } else {
            return new Response(JSON.stringify({
              error: 'è·¯ه¾„éھŒè¯په¤±è´¥'
            }), {
              status: 403,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
        }
        return new Response(JSON.stringify({
          error: 'و— و•ˆçڑ„APIè·¯ه¾„'
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (ç½‘ه‌€698.pathname.includes('/api/preferred-ips')) {
        const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨690 = ç½‘ه‌€698.pathname.split('/').filter(هڈ‚و•°ه€¼689 => هڈ‚و•°ه€¼689);
        const وژ¥هڈ£ç´¢ه¼• = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨690.indexOf('api');
        if (وژ¥هڈ£ç´¢ه¼• > 0) {
          const è·¯ه¾„ه€¼688 = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨690.slice(0, وژ¥هڈ£ç´¢ه¼•);
          const è·¯ه¾„ه€¼687 = è·¯ه¾„ه€¼688.join('/');
          let وک¯هگ¦وœ‰و•ˆ686 = false;
          if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
            const و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„685 = è‡ھه®ڑن¹‰è·¯ه¾„.trim().startsWith('/') ? è‡ھه®ڑن¹‰è·¯ه¾„.trim().substring(1) : è‡ھه®ڑن¹‰è·¯ه¾„.trim();
            وک¯هگ¦وœ‰و•ˆ686 = è·¯ه¾„ه€¼687 === و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„685;
          } else {
            وک¯هگ¦وœ‰و•ˆ686 = وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(è·¯ه¾„ه€¼687) && è·¯ه¾„ه€¼687 === è®¤è¯پن»¤ç‰Œ;
          }
          if (وک¯هگ¦وœ‰و•ˆ686) {
            return await ه¤„çگ†ن¼کé€‰هœ°ه‌€هˆ—è،¨وژ¥هڈ£(è¯·و±‚735);
          } else {
            return new Response(JSON.stringify({
              error: 'è·¯ه¾„éھŒè¯په¤±è´¥'
            }), {
              status: 403,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
        }
        return new Response(JSON.stringify({
          error: 'و— و•ˆçڑ„APIè·¯ه¾„'
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (è¯·و±‚735.method === 'POST' && هگ¯ç”¨و‰©ه±•ن¼ è¾“) {
        const ç»“و‍œه€¼684 = await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼(è¯·و±‚735);
        if (ç»“و‍œه€¼684) {
          وœ¬هœ°ه€¼733.waitUntil(ç»“و‍œه€¼684.closed);
          return new Response(ç»“و‍œه€¼684.readable, {
            headers: {
              'X-Accel-Buffering': 'no',
              'Cache-Control': 'no-store',
              Connection: 'keep-alive',
              'User-Agent': 'Go-http-client/2.0',
              'Content-Type': 'application/grpc'
            }
          });
        }
        return new Response('Internal Server Error', {
          status: 500
        });
      }
      if (è¯·و±‚735.headers.get('Upgrade') === atob('d2Vic29ja2V0')) {
        return await ه¤„çگ†ç½‘é،µه¥—وژ¥ه­—è¯·و±‚(è¯·و±‚735);
      }
      if (è¯·و±‚735.method === 'GET') {
        // ه¤„çگ† /{UUID}/region وˆ– /{è‡ھه®ڑن¹‰è·¯ه¾„}/region
        if (ç½‘ه‌€698.pathname.endsWith('/region')) {
          const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨683 = ç½‘ه‌€698.pathname.split('/').filter(هڈ‚و•°ه€¼682 => هڈ‚و•°ه€¼682);
          if (è·¯ه¾„éƒ¨هˆ†هˆ—è،¨683.length === 2 && è·¯ه¾„éƒ¨هˆ†هˆ—è،¨683[1] === 'region') {
            const è·¯ه¾„ه€¼681 = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨683[0];
            let وک¯هگ¦وœ‰و•ˆ680 = false;
            if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
              // ن½؟ç”¨è‡ھه®ڑن¹‰è·¯ه¾„
              const و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„679 = è‡ھه®ڑن¹‰è·¯ه¾„.trim().startsWith('/') ? è‡ھه®ڑن¹‰è·¯ه¾„.trim().substring(1) : è‡ھه®ڑن¹‰è·¯ه¾„.trim();
              وک¯هگ¦وœ‰و•ˆ680 = è·¯ه¾„ه€¼681 === و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„679;
            } else {
              // ن½؟ç”¨UUIDè·¯ه¾„
              وک¯هگ¦وœ‰و•ˆ680 = وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(è·¯ه¾„ه€¼681) && è·¯ه¾„ه€¼681 === è®¤è¯پن»¤ç‰Œ;
            }
            if (وک¯هگ¦وœ‰و•ˆ680) {
              const وœ¬هœ°ه€¼678 = èژ·هڈ–é…چç½®ه€¼('p', وœ¬هœ°ه€¼734.p || وœ¬هœ°ه€¼734.P);
              const و‰‹هٹ¨هœ°هŒ؛677 = èژ·هڈ–é…چç½®ه€¼('wk', وœ¬هœ°ه€¼734.wk || وœ¬هœ°ه€¼734.WK);
              if (و‰‹هٹ¨هœ°هŒ؛677 && و‰‹هٹ¨هœ°هŒ؛677.trim()) {
                return new Response(JSON.stringify({
                  region: و‰‹هٹ¨هœ°هŒ؛677.trim().toUpperCase(),
                  detectionMethod: 'و‰‹هٹ¨وŒ‡ه®ڑهœ°هŒ؛',
                  manualRegion: و‰‹هٹ¨هœ°هŒ؛677.trim().toUpperCase(),
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } else if (وœ¬هœ°ه€¼678 && وœ¬هœ°ه€¼678.trim()) {
                return new Response(JSON.stringify({
                  region: 'CUSTOM',
                  detectionMethod: è§£ç پ64('6Ieq5a6a5LmJUHJveHlJUOaooeW8jw=='),
                  ci: وœ¬هœ°ه€¼678,
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } else {
                const ه€¼هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚735);
                return new Response(JSON.stringify({
                  region: ه€¼هœ°هŒ؛,
                  detectionMethod: 'APIو£€وµ‹',
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            } else {
              return new Response(JSON.stringify({
                error: 'è®؟é—®è¢«و‹’ç»‌',
                message: 'è·¯ه¾„éھŒè¯په¤±è´¥'
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        }

        // ه¤„çگ† /{UUID}/test-api وˆ– /{è‡ھه®ڑن¹‰è·¯ه¾„}/test-api
        if (ç½‘ه‌€698.pathname.endsWith('/test-api')) {
          const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨676 = ç½‘ه‌€698.pathname.split('/').filter(هڈ‚و•°ه€¼675 => هڈ‚و•°ه€¼675);
          if (è·¯ه¾„éƒ¨هˆ†هˆ—è،¨676.length === 2 && è·¯ه¾„éƒ¨هˆ†هˆ—è،¨676[1] === 'test-api') {
            const è·¯ه¾„ه€¼ = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨676[0];
            let وک¯هگ¦وœ‰و•ˆ = false;
            if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
              // ن½؟ç”¨è‡ھه®ڑن¹‰è·¯ه¾„
              const و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„674 = è‡ھه®ڑن¹‰è·¯ه¾„.trim().startsWith('/') ? è‡ھه®ڑن¹‰è·¯ه¾„.trim().substring(1) : è‡ھه®ڑن¹‰è·¯ه¾„.trim();
              وک¯هگ¦وœ‰و•ˆ = è·¯ه¾„ه€¼ === و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„674;
            } else {
              // ن½؟ç”¨UUIDè·¯ه¾„
              وک¯هگ¦وœ‰و•ˆ = وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(è·¯ه¾„ه€¼) && è·¯ه¾„ه€¼ === è®¤è¯پن»¤ç‰Œ;
            }
            if (وک¯هگ¦وœ‰و•ˆ) {
              try {
                const وµ‹è¯•هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚735);
                return new Response(JSON.stringify({
                  detectedRegion: وµ‹è¯•هœ°هŒ؛,
                  message: 'APIوµ‹è¯•ه®Œوˆگ',
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } catch (é”™è¯¯673) {
                return new Response(JSON.stringify({
                  error: é”™è¯¯673.message,
                  message: 'APIوµ‹è¯•ه¤±è´¥'
                }), {
                  status: 500,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            } else {
              return new Response(JSON.stringify({
                error: 'è®؟é—®è¢«و‹’ç»‌',
                message: 'è·¯ه¾„éھŒè¯په¤±è´¥'
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        }
        if (ç½‘ه‌€698.pathname === '/') {
          // و£€وں¥وک¯هگ¦وœ‰è‡ھه®ڑن¹‰é¦–é،µURLé…چç½®
          const è‡ھه®ڑن¹‰ه€¼ = èژ·هڈ–é…چç½®ه€¼('homepage', وœ¬هœ°ه€¼734.homepage || وœ¬هœ°ه€¼734.HOMEPAGE);
          if (è‡ھه®ڑن¹‰ه€¼ && è‡ھه®ڑن¹‰ه€¼.trim()) {
            try {
              // ن»ژè‡ھه®ڑن¹‰URLèژ·هڈ–ه†…ه®¹
              const ه€¼ه“چه؛” = await fetch(è‡ھه®ڑن¹‰ه€¼.trim(), {
                method: 'GET',
                headers: {
                  'User-Agent': è¯·و±‚735.headers.get('User-Agent') || 'Mozilla/5.0',
                  'Accept': è¯·و±‚735.headers.get('Accept') || '*/*',
                  'Accept-Language': è¯·و±‚735.headers.get('Accept-Language') || 'en-US,en;q=0.9'
                },
                redirect: 'follow'
              });
              if (ه€¼ه“چه؛”.ok) {
                // èژ·هڈ–ه“چه؛”ه†…ه®¹
                const ه†…ه®¹ç±»ه‍‹672 = ه€¼ه“چه؛”.headers.get('Content-Type') || 'text/html; charset=utf-8';
                const ه†…ه®¹671 = await ه€¼ه“چه؛”.text();

                // è؟”ه›‍è‡ھه®ڑن¹‰é¦–é،µه†…ه®¹
                return new Response(ه†…ه®¹671, {
                  status: ه€¼ه“چه؛”.status,
                  headers: {
                    'Content-Type': ه†…ه®¹ç±»ه‍‹672,
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                  }
                });
              }
            } catch (é”™è¯¯670) {
              // ه¦‚و‍œèژ·هڈ–ه¤±è´¥ï¼Œç»§ç»­ن½؟ç”¨é»کè®¤ç»ˆç«¯é،µé‌¢
              console.error('èژ·هڈ–è‡ھه®ڑن¹‰é¦–é،µه¤±è´¥:', é”™è¯¯670);
            }
          }
          // ن¼که…ˆو£€وں¥Cookieن¸­çڑ„è¯­è¨€è®¾ç½®
          const ه‡­وچ®ه¤´éƒ¨669 = è¯·و±‚735.headers.get('Cookie') || '';
          let è¯­è¨€و‌¥و؛گه‡­وچ®668 = null;
          if (ه‡­وچ®ه¤´éƒ¨669) {
            const وœ¬هœ°ه€¼667 = ه‡­وچ®ه¤´éƒ¨669.split(';').map(ن¸™ه€¼666 => ن¸™ه€¼666.trim());
            for (const ه‡­وچ®665 of وœ¬هœ°ه€¼667) {
              if (ه‡­وچ®665.startsWith('preferredLanguage=')) {
                è¯­è¨€و‌¥و؛گه‡­وچ®668 = ه‡­وچ®665.split('=')[1];
                break;
              }
            }
          }
          let وک¯هگ¦ه€¼664 = false;
          if (è¯­è¨€و‌¥و؛گه‡­وچ®668 === 'fa' || è¯­è¨€و‌¥و؛گه‡­وچ®668 === 'fa-IR') {
            وک¯هگ¦ه€¼664 = true;
          } else if (è¯­è¨€و‌¥و؛گه‡­وچ®668 === 'zh' || è¯­è¨€و‌¥و؛گه‡­وچ®668 === 'zh-CN') {
            وک¯هگ¦ه€¼664 = false;
          } else {
            // ه¦‚و‍œو²،وœ‰Cookieï¼Œن½؟ç”¨وµڈè§ˆه™¨è¯­è¨€و£€وµ‹
            const وژ¥هڈ—è¯­è¨€663 = è¯·و±‚735.headers.get('Accept-Language') || '';
            const وµڈè§ˆه™¨è¯­è¨€662 = وژ¥هڈ—è¯­è¨€663.split(',')[0].split('-')[0].toLowerCase();
            وک¯هگ¦ه€¼664 = وµڈè§ˆه™¨è¯­è¨€662 === 'fa' || وژ¥هڈ—è¯­è¨€663.includes('fa-IR') || وژ¥هڈ—è¯­è¨€663.includes('fa');
          }
          const è¯­è¨€ = وک¯هگ¦ه€¼664 ? 'fa' : 'zh-CN';
          const è¯­è¨€ه€¼661 = وک¯هگ¦ه€¼664 ? 'fa-IR' : 'zh-CN';
          const وœ¬هœ°ه€¼660 = {
            zh: {
              title: 'ç»ˆç«¯ v2.9.8c',
              terminal: 'ç»ˆç«¯ v2.9.8c',
              congratulations: 'وپ­ه–œن½ و‌¥هˆ°è؟™',
              enterU: 'è¯·è¾“ه…¥ن½ Uهڈکé‡ڈçڑ„ه€¼',
              enterD: 'è¯·è¾“ه…¥ن½ Dهڈکé‡ڈçڑ„ه€¼',
              command: 'ه‘½ن»¤: connect [',
              uuid: 'UUID',
              path: 'PATH',
              inputU: 'è¾“ه…¥Uهڈکé‡ڈçڑ„ه†…ه®¹ه¹¶ن¸”ه›‍è½¦...',
              inputD: 'è¾“ه…¥Dهڈکé‡ڈçڑ„ه†…ه®¹ه¹¶ن¸”ه›‍è½¦...',
              connecting: 'و­£هœ¨è؟‍وژ¥...',
              invading: 'و­£هœ¨ه…¥ن¾µ...',
              success: 'è؟‍وژ¥وˆگهٹںï¼پè؟”ه›‍ç»“و‍œ...',
              error: 'é”™è¯¯: و— و•ˆçڑ„UUIDو ¼ه¼ڈ',
              reenter: 'è¯·é‡چو–°è¾“ه…¥وœ‰و•ˆçڑ„UUID'
            },
            fa: {
              title: 'طھط±ظ…غŒظ†ط§ظ„ v2.9.8c',
              terminal: 'طھط±ظ…غŒظ†ط§ظ„ v2.9.8c',
              congratulations: 'طھط¨ط±غŒع© ظ…غŒâ€Œع¯ظˆغŒغŒظ… ط¨ظ‡ ط´ظ…ط§',
              enterU: 'ظ„ط·ظپط§ ظ…ظ‚ط¯ط§ط± ظ…طھط؛غŒط± U ط®ظˆط¯ ط±ط§ ظˆط§ط±ط¯ ع©ظ†غŒط¯',
              enterD: 'ظ„ط·ظپط§ ظ…ظ‚ط¯ط§ط± ظ…طھط؛غŒط± D ط®ظˆط¯ ط±ط§ ظˆط§ط±ط¯ ع©ظ†غŒط¯',
              command: 'ط¯ط³طھظˆط±: connect [',
              uuid: 'UUID',
              path: 'PATH',
              inputU: 'ظ…ط­طھظˆغŒط§طھ ظ…طھط؛غŒط± U ط±ط§ ظˆط§ط±ط¯ ع©ط±ط¯ظ‡ ظˆ Enter ط±ط§ ط¨ط²ظ†غŒط¯...',
              inputD: 'ظ…ط­طھظˆغŒط§طھ ظ…طھط؛غŒط± D ط±ط§ ظˆط§ط±ط¯ ع©ط±ط¯ظ‡ ظˆ Enter ط±ط§ ط¨ط²ظ†غŒط¯...',
              connecting: 'ط¯ط± ط­ط§ظ„ ط§طھطµط§ظ„...',
              invading: 'ط¯ط± ط­ط§ظ„ ظ†ظپظˆط°...',
              success: 'ط§طھطµط§ظ„ ظ…ظˆظپظ‚! ط¯ط± ط­ط§ظ„ ط¨ط§ط²ع¯ط´طھ ظ†طھغŒط¬ظ‡...',
              error: 'ط®ط·ط§: ظپط±ظ…طھ UUID ظ†ط§ظ…ط¹طھط¨ط±',
              reenter: 'ظ„ط·ظپط§ UUID ظ…ط¹طھط¨ط± ط±ط§ ط¯ظˆط¨ط§ط±ظ‡ ظˆط§ط±ط¯ ع©ظ†غŒط¯'
            }
          };
          const ç؟»è¯‘ه€¼659 = وœ¬هœ°ه€¼660[وک¯هگ¦ه€¼664 ? 'fa' : 'zh'];
          const ç»ˆç«¯é،µé‌¢ = `<!DOCTYPE html>
    <html lang="${è¯­è¨€ه€¼661}" dir="${وک¯هگ¦ه€¼664 ? 'rtl' : 'ltr'}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${ç؟»è¯‘ه€¼659.title}</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
            :root {
                --md-bg: #141218;
                --md-bg-2: #1D1B20;
                --md-surface: #211F26;
                --md-surface-2: #2B2930;
                --md-surface-3: #36343B;
                --md-primary: #D0BCFF;
                --md-primary-d: #B69DF8;
                --md-on-primary: #381E72;
                --md-secondary: #EFB8C8;
                --md-secondary-d: #7D5260;
                --md-tertiary: #9A82DB;
                --md-yellow: #FFD54F;
                --md-success: #81C995;
                --md-error: #F2B8B5;
                --md-warning: #FDD663;
                --md-text: #E6E0E9;
                --md-text-dim: #CAC4D0;
                --md-outline: rgba(230, 224, 233, 0.18);
                --md-font: 'Google Sans Text', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                --cp-bg: var(--md-bg);
                --cp-bg-2: var(--md-bg-2);
                --cp-cyan: var(--md-primary);
                --cp-cyan-d: var(--md-primary-d);
                --cp-pink: var(--md-secondary);
                --cp-pink-d: var(--md-secondary-d);
                --cp-purple: var(--md-tertiary);
                --cp-yellow: var(--md-yellow);
                --cp-mint: var(--md-success);
                --cp-red: var(--md-error);
                --cp-text: var(--md-text);
                --cp-text-dim: var(--md-text-dim);
                --cp-border: var(--md-outline);
                --cp-grid: transparent;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { height: 100%; }
            body {
                font-family: var(--md-font);
                background:
                    radial-gradient(circle at 15% 15%, rgba(208,188,255,0.16) 0%, transparent 40%),
                    radial-gradient(circle at 85% 85%, rgba(239,184,200,0.14) 0%, transparent 40%),
                    var(--md-bg);
                color: var(--md-text);
                min-height: 100vh;
                overflow-x: hidden;
                position: relative;
                display: flex; justify-content: center; align-items: center;
                padding: 24px;
            }
            body::before, body::after { content: none; }
            .matrix-bg, .matrix-code-rain, .matrix-column, .matrix-rain { display: none !important; }

            .terminal {
                width: 100%; max-width: 440px;
                background: var(--md-surface);
                border: 1px solid var(--md-outline);
                border-radius: 28px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3);
                position: relative; z-index: 1;
                overflow: hidden;
            }
            .terminal::before { content: none; }
            .terminal-header {
                background: var(--md-surface-2);
                padding: 20px 24px;
                border-bottom: 1px solid var(--md-outline);
                display: flex; align-items: center; gap: 14px;
                position: relative;
            }
            .terminal-header::after { content: none; }
            .terminal-buttons { display: flex; gap: 8px; }
            .terminal-button {
                width: 11px; height: 11px; border-radius: 50%;
                background: var(--md-secondary);
                border: none;
            }
            .terminal-button:nth-child(2) { background: var(--md-warning); }
            .terminal-button:nth-child(3) { background: var(--md-success); }
            .terminal-title {
                color: var(--md-text);
                font-size: 15px; font-weight: 500;
                letter-spacing: 0.01em;
            }
            .terminal-title::before { content: ""; }
            .terminal-body {
                padding: 28px 24px; max-height: 60vh;
                overflow-y: auto; font-size: 14.5px;
                line-height: 1.7;
                position: relative;
            }
            .terminal-body::-webkit-scrollbar { width: 6px; }
            .terminal-body::-webkit-scrollbar-thumb {
                background: var(--md-primary-d); border-radius: 3px;
            }
            .terminal-line {
                margin-bottom: 14px; display: flex; align-items: center; gap: 10px;
                flex-wrap: wrap;
            }
            .terminal-prompt {
                display: none;
            }
            .terminal-prompt::before { content: none; }
            .terminal-input {
                background: var(--md-surface-2);
                border: 1.5px solid var(--md-outline);
                border-radius: 16px;
                outline: none;
                color: var(--md-text);
                font-family: inherit;
                font-size: 15px; flex: 1; min-width: 0;
                padding: 14px 16px;
                caret-color: var(--md-primary);
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            .terminal-input:focus {
                border-color: var(--md-primary);
                box-shadow: 0 0 0 3px rgba(208,188,255,0.18);
            }
            .terminal-input::placeholder { color: var(--md-text-dim); opacity: 0.75; }
            .terminal-cursor { display: none; }
            .terminal-output { color: var(--md-text-dim); margin: 4px 0; }
            .terminal-error  { color: var(--md-error); margin: 4px 0; font-weight: 500; }
            .terminal-success{ color: var(--md-success); margin: 4px 0; font-weight: 500; }

            .cp-hud {
                position: fixed; top: 20px; right: 20px;
                color: var(--md-text-dim);
                font-family: var(--md-font);
                font-size: 11px; letter-spacing: 0.05em;
                text-align: right;
                opacity: 0.7;
                z-index: 1000;
                display: none;
            }
            .cp-hud .cp-hud-label { color: var(--md-primary); }
            .cp-hud .cp-hud-line { display: block; }
            .cp-lang-wrapper {
                position: fixed; top: 20px; left: 20px; z-index: 1000;
                display: flex; align-items: center; gap: 8px;
            }
            .cp-lang-tag { display: none; }
            #languageSelector {
                background: var(--md-surface-2);
                border: 1px solid var(--md-outline);
                border-radius: 20px;
                color: var(--md-text);
                padding: 8px 16px;
                font-family: inherit;
                font-size: 13px;
                cursor: pointer;
            }
            #languageSelector option { background: var(--md-surface-2); color: var(--md-text); }

            /* FX toggle */
            .cp-fx-toggle {
                position: fixed; top: 20px; right: 20px; z-index: 1001;
                background: var(--md-surface-2);
                border: 1px solid var(--md-outline);
                border-radius: 20px;
                color: var(--md-text-dim);
                padding: 8px 16px;
                font-family: inherit;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .cp-fx-toggle:hover { color: var(--md-primary); border-color: var(--md-primary); }
            .cp-fx-toggle .cp-fx-dot { width: 8px; height: 8px; background: var(--md-success); border-radius: 50%; transition: all 0.2s; }
            body.fx-off .cp-fx-toggle .cp-fx-dot { background: transparent; border: 1px solid var(--md-text-dim); }

            .cp-glitch {
                font-family: var(--md-font);
                font-weight: 500;
                color: var(--md-text);
            }
        </style>
    </head>
    <body>
        <div class="matrix-bg"></div>
        <div class="matrix-code-rain" id="matrixCodeRain"></div>
            <div class="cp-hud">
                <span class="cp-hud-line"><span class="cp-hud-label">SYS::</span> ${ç؟»è¯‘ه€¼659.terminal}</span>
                <span class="cp-hud-line"><span class="cp-hud-label">NODE::</span> NIGHT_CITY</span>
                <span class="cp-hud-line"><span class="cp-hud-label">LINK::</span> SECURE / ENC</span>
            </div>
            <div class="cp-lang-wrapper">
                <span class="cp-lang-tag">LANG_</span>
                <select id="languageSelector" onchange="هˆ‡وچ¢è¯­è¨€(this.value)">
                    <option value="zh" ${!وک¯هگ¦ه€¼664 ? 'selected' : ''}>ًں‡¨ًں‡³ ن¸­و–‡</option>
                    <option value="fa" ${وک¯هگ¦ه€¼664 ? 'selected' : ''}>ًں‡®ًں‡· ظپط§ط±ط³غŒ</option>
                </select>
            </div>
            <button type="button" id="cpFxToggle" class="cp-fx-toggle" onclick="window.هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ()" title="${وک¯هگ¦ه€¼664 ? 'طھط؛غŒغŒط± ط§ظپع©طھâ€Œظ‡ط§غŒ طµظپط­ظ‡' : 'هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ'}" aria-label="FX toggle">
                <span class="cp-fx-dot" aria-hidden="true"></span>
                <span id="cpFxLabel">FX: ON</span>
            </button>
        <div class="terminal">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <div class="terminal-button"></div>
                    <div class="terminal-button"></div>
                    <div class="terminal-button"></div>
                </div>
                    <div class="terminal-title cp-glitch">${ç؟»è¯‘ه€¼659.terminal}</div>
            </div>
            <div class="terminal-body" id="terminalBody">
                <div class="terminal-line">
                    <span class="terminal-prompt">root:~$</span>
                        <span class="terminal-output">${ç؟»è¯‘ه€¼659.congratulations}</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root:~$</span>
                        <span class="terminal-output">${è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim() ? ç؟»è¯‘ه€¼659.enterD : ç؟»è¯‘ه€¼659.enterU}</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root:~$</span>
                        <span class="terminal-output">${ç؟»è¯‘ه€¼659.command}${è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim() ? ç؟»è¯‘ه€¼659.path : ç؟»è¯‘ه€¼659.uuid}]</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root:~$</span>
                        <input type="text" class="terminal-input" id="uuidInput" placeholder="${è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim() ? ç؟»è¯‘ه€¼659.inputD : ç؟»è¯‘ه€¼659.inputU}" autofocus>
                    <span class="terminal-cursor"></span>
                </div>
            </div>
        </div>
        <script>
// é،µé‌¢ç‰¹و•ˆه›¾ه½¢هŒ–ه¼€ه…³ (localStorage وŒپن¹…هŒ–)
window.ه؛”ç”¨é،µé‌¢ç‰¹و•ˆ = function () {
  var وœ¬هœ°ه€¼10009 = localStorage.getItem('cp-fx-off') === '1';
  document.body.classList.toggle('fx-off', وœ¬هœ°ه€¼10009);
  var وœ¬هœ°ه€¼10008 = document.getElementById('cpFxLabel');
  if (وœ¬هœ°ه€¼10008) وœ¬هœ°ه€¼10008.textContent = وœ¬هœ°ه€¼10009 ? 'FX: OFF' : 'FX: ON';
  if (وœ¬هœ°ه€¼10009) {
    var وœ¬هœ°ه€¼10007 = document.getElementById('matrixCodeRain');
    if (وœ¬هœ°ه€¼10007) وœ¬هœ°ه€¼10007.innerHTML = '';
  } else if (typeof هˆ›ه»؛çں©éکµé›¨ === 'function') {
    var ç»“و‍œه€¼ = document.getElementById('matrixCodeRain');
    if (ç»“و‍œه€¼ && !ç»“و‍œه€¼.firstChild) هˆ›ه»؛çں©éکµé›¨();
  }
};
window.هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ = function () {
  var وœ¬هœ°ه€¼10006 = localStorage.getItem('cp-fx-off') === '1';
  localStorage.setItem('cp-fx-off', وœ¬هœ°ه€¼10006 ? '0' : '1');
  window.ه؛”ç”¨é،µé‌¢ç‰¹و•ˆ();
};
(function () {
  if (localStorage.getItem('cp-fx-off') === '1') {
    document.documentElement.classList.add('fx-off-preload');
    document.addEventListener('DOMContentLoaded', function () {
      document.body.classList.add('fx-off');
    });
  }
})();
function هˆ›ه»؛çں©éکµé›¨() {
  if (document.body && document.body.classList.contains('fx-off')) return;
  const çں©éکµه€¼ = document.getElementById('matrixCodeRain');
  if (!çں©éکµه€¼) return;
  const èµ›هچڑه­—ç¬¦هˆ—è،¨ = '01م‚¢م‚¤م‚¦م‚¨م‚ھم‚«م‚­م‚¯م‚±م‚³م‚µم‚·م‚¹م‚»م‚½م‚؟مƒپمƒ„مƒ†مƒˆمƒٹمƒ‹مƒŒمƒچمƒژ$%#@!?<>+=ABCDEF';
  const è°ƒè‰²و‌؟ = ['#D0BCFF', '#EFB8C8', '#9A82DB', '#81C995'];
  const هˆ—و•° = Math.floor(window.innerWidth / 20);
  for (let ç´¢ه¼•ه€¼ = 0; ç´¢ه¼•ه€¼ < هˆ—و•°; ç´¢ه¼•ه€¼++) {
    const هˆ—10005 = document.createElement('div');
    هˆ—10005.className = 'matrix-column';
    هˆ—10005.style.left = ç´¢ه¼•ه€¼ * 20 + 'px';
    هˆ—10005.style.animationDelay = -Math.random() * 15 + 's';
    هˆ—10005.style.animationDuration = Math.random() * 14 + 8 + 's';
    هˆ—10005.style.fontSize = Math.random() * 4 + 12 + 'px';
    هˆ—10005.style.opacity = (Math.random() * 0.7 + 0.3).toFixed(2);
    let و–‡وœ¬ = '';
    const ه­—ç¬¦و•°é‡ڈ = Math.floor(Math.random() * 30 + 18);
    for (let و¬،ç´¢ه¼•ه€¼ = 0; و¬،ç´¢ه¼•ه€¼ < ه­—ç¬¦و•°é‡ڈ; و¬،ç´¢ه¼•ه€¼++) {
      const ه­—ç¬¦ = èµ›هچڑه­—ç¬¦هˆ—è،¨[Math.floor(Math.random() * èµ›هچڑه­—ç¬¦هˆ—è،¨.length)];
      const ه€¼ه¼؛è°ƒ = Math.random() > 0.85;
      const é¢œè‰² = ه€¼ه¼؛è°ƒ ? è°ƒè‰²و‌؟[Math.floor(Math.random() * è°ƒè‰²و‌؟.length)] : '';
      و–‡وœ¬ += é¢œè‰² ? '<span style="color:' + é¢œè‰² + ';">' + ه­—ç¬¦ + '</span><br>' : '<span>' + ه­—ç¬¦ + '</span><br>';
    }
    هˆ—10005.innerHTML = و–‡وœ¬;
    çں©éکµه€¼.appendChild(هˆ—10005);
  }
  setInterval(function () {
    const هˆ—هˆ—è،¨ = çں©éکµه€¼.querySelectorAll('.matrix-column');
    هˆ—هˆ—è،¨.forEach(function (هˆ—) {
      if (Math.random() > 0.94) {
        const ه­—ç¬¦هˆ—è،¨ = هˆ—.querySelectorAll('span');
        if (ه­—ç¬¦هˆ—è،¨.length > 0) {
          const ç›®و ‡ = ه­—ç¬¦هˆ—è،¨[Math.floor(Math.random() * ه­—ç¬¦هˆ—è،¨.length)];
          const وœ¬هœ°ه€¼10004 = ç›®و ‡.style.color;
          ç›®و ‡.style.color = '#ffffff';
          ç›®و ‡.style.textShadow = '0 0 10px #ffffff, 0 0 18px #D0BCFF';
          setTimeout(function () {
            ç›®و ‡.style.color = وœ¬هœ°ه€¼10004;
            ç›®و ‡.style.textShadow = '';
          }, 200);
        }
      }
    });
  }, 110);
}
function وک¯هگ¦وœ‰و•ˆه”¯ن¸€و ‡è¯†(ه”¯ن¸€و ‡è¯†) {
  const ه”¯ن¸€و ‡è¯†و­£هˆ™ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return ه”¯ن¸€و ‡è¯†و­£هˆ™.test(ه”¯ن¸€و ‡è¯†);
}
function و·»هٹ ç»ˆç«¯è،Œ(ه†…ه®¹, ç±»ه‍‹ = 'output') {
  const ç»ˆç«¯ن¸»ن½“ = document.getElementById('terminalBody');
  const è،Œ = document.createElement('div');
  è،Œ.className = 'terminal-line';
  const وڈگç¤؛ç¬¦ = document.createElement('span');
  وڈگç¤؛ç¬¦.className = 'terminal-prompt';
  وڈگç¤؛ç¬¦.textContent = 'root:~$';
  const è¾“ه‡؛ = document.createElement('span');
  è¾“ه‡؛.className = 'terminal-' + ç±»ه‍‹;
  è¾“ه‡؛.textContent = ه†…ه®¹;
  è،Œ.appendChild(وڈگç¤؛ç¬¦);
  è،Œ.appendChild(è¾“ه‡؛);
  ç»ˆç«¯ن¸»ن½“.appendChild(è،Œ);
  ç»ˆç«¯ن¸»ن½“.scrollTop = ç»ˆç«¯ن¸»ن½“.scrollHeight;
}
function ه¤„çگ†ه”¯ن¸€و ‡è¯†è¾“ه…¥() {
  const è¾“ه…¥10003 = document.getElementById('uuidInput');
  const è¾“ه…¥ه€¼ = è¾“ه…¥10003.value.trim();
  const è‡ھه®ڑن¹‰è·¯ه¾„ = '${è‡ھه®ڑن¹‰è·¯ه¾„}';
  if (è¾“ه…¥ه€¼) {
    و·»هٹ ç»ˆç«¯è،Œ(atob('Y29ubmVjdCA=') + è¾“ه…¥ه€¼, 'output');
    const وœ¬هœ°ه€¼ = {
      zh: {
        connecting: 'و­£هœ¨è؟‍وژ¥...',
        invading: 'و­£هœ¨ه…¥ن¾µ...',
        success: 'è؟‍وژ¥وˆگهٹںï¼پè؟”ه›‍ç»“و‍œ...',
        error: 'é”™è¯¯: و— و•ˆçڑ„UUIDو ¼ه¼ڈ',
        reenter: 'è¯·é‡چو–°è¾“ه…¥وœ‰و•ˆçڑ„UUID'
      },
      fa: {
        connecting: 'ط¯ط± ط­ط§ظ„ ط§طھطµط§ظ„...',
        invading: 'ط¯ط± ط­ط§ظ„ ظ†ظپظˆط°...',
        success: 'ط§طھطµط§ظ„ ظ…ظˆظپظ‚! ط¯ط± ط­ط§ظ„ ط¨ط§ط²ع¯ط´طھ ظ†طھغŒط¬ظ‡...',
        error: 'ط®ط·ط§: ظپط±ظ…طھ UUID ظ†ط§ظ…ط¹طھط¨ط±',
        reenter: 'ظ„ط·ظپط§ UUID ظ…ط¹طھط¨ط± ط±ط§ ط¯ظˆط¨ط§ط±ظ‡ ظˆط§ط±ط¯ ع©ظ†غŒط¯'
      }
    };
    const وµڈè§ˆه™¨è¯­è¨€ = navigator.language || navigator.userLanguage || '';
    const وک¯هگ¦ه€¼ = وµڈè§ˆه™¨è¯­è¨€.includes('fa') || وµڈè§ˆه™¨è¯­è¨€.includes('fa-IR');
    const ç؟»è¯‘ه€¼ = وœ¬هœ°ه€¼[وک¯هگ¦ه€¼ ? 'fa' : 'zh'];
    if (è‡ھه®ڑن¹‰è·¯ه¾„) {
      const و¸…çگ†è¾“ه…¥ = è¾“ه…¥ه€¼.startsWith('/') ? è¾“ه…¥ه€¼ : '/' + è¾“ه…¥ه€¼;
      و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.connecting, 'output');
      setTimeout(() => {
        و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.success, 'success');
        setTimeout(() => {
          window.location.href = و¸…çگ†è¾“ه…¥;
        }, 1000);
      }, 500);
    } else {
      if (وک¯هگ¦وœ‰و•ˆه”¯ن¸€و ‡è¯†(è¾“ه…¥ه€¼)) {
        و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.invading, 'output');
        setTimeout(() => {
          و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.success, 'success');
          setTimeout(() => {
            window.location.href = '/' + è¾“ه…¥ه€¼;
          }, 1000);
        }, 500);
      } else {
        و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.error, 'error');
        و·»هٹ ç»ˆç«¯è،Œ(ç؟»è¯‘ه€¼.reenter, 'output');
      }
    }
    è¾“ه…¥10003.value = '';
  }
}
function هˆ‡وچ¢è¯­è¨€(è¯­è¨€) {
  localStorage.setItem('preferredLanguage', è¯­è¨€);
  // è®¾ç½®Cookieï¼ˆوœ‰و•ˆوœں1ه¹´ï¼‰
  const è؟‡وœںو—¥وœں10002 = new Date();
  è؟‡وœںو—¥وœں10002.setFullYear(è؟‡وœںو—¥وœں10002.getFullYear() + 1);
  document.cookie = 'preferredLanguage=' + è¯­è¨€ + '; path=/; expires=' + è؟‡وœںو—¥وœں10002.toUTCString() + '; SameSite=Lax';
  // هˆ·و–°é،µé‌¢ï¼Œن¸چن½؟ç”¨URLهڈ‚و•°
  window.location.reload();
}

// é،µé‌¢هٹ è½½و—¶و£€وں¥ localStorage ه’Œ Cookieï¼Œه¹¶و¸…çگ†URLهڈ‚و•°
window.addEventListener('DOMContentLoaded', function () {
  function èژ·هڈ–ه‡­وچ®(هگچç§°) {
    const ه€¼ = '; ' + document.cookie;
    const éƒ¨هˆ†هˆ—è،¨ = ه€¼.split('; ' + هگچç§° + '=');
    if (éƒ¨هˆ†هˆ—è،¨.length === 2) return éƒ¨هˆ†هˆ—è،¨.pop().split(';').shift();
    return null;
  }
  const ه·²ن؟‌ه­کè¯­è¨€ = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®('preferredLanguage');
  const ç½‘ه‌€هڈ‚و•° = new URLSearchParams(window.location.search);
  const ç½‘ه‌€è¯­è¨€ = ç½‘ه‌€هڈ‚و•°.get('lang');

  // ه¦‚و‍œURLن¸­وœ‰è¯­è¨€هڈ‚و•°ï¼Œç§»é™¤ه®ƒه¹¶è®¾ç½®Cookie
  if (ç½‘ه‌€è¯­è¨€) {
    const ه½“ه‰چç½‘ه‌€ = new URL(window.location.href);
    ه½“ه‰چç½‘ه‌€.searchParams.delete('lang');
    const و–°ç½‘ه‌€ = ه½“ه‰چç½‘ه‌€.toString();

    // è®¾ç½®Cookie
    const è؟‡وœںو—¥وœں10001 = new Date();
    è؟‡وœںو—¥وœں10001.setFullYear(è؟‡وœںو—¥وœں10001.getFullYear() + 1);
    document.cookie = 'preferredLanguage=' + ç½‘ه‌€è¯­è¨€ + '; path=/; expires=' + è؟‡وœںو—¥وœں10001.toUTCString() + '; SameSite=Lax';
    localStorage.setItem('preferredLanguage', ç½‘ه‌€è¯­è¨€);

    // ن½؟ç”¨history APIç§»é™¤URLهڈ‚و•°ï¼Œن¸چهˆ·و–°é،µé‌¢
    window.history.replaceState({}, '', و–°ç½‘ه‌€);
  } else if (ه·²ن؟‌ه­کè¯­è¨€) {
    // ه¦‚و‍œlocalStorageن¸­وœ‰ن½†Cookieن¸­و²،وœ‰ï¼ŒهگŒو­¥هˆ°Cookie
    const è؟‡وœںو—¥وœں = new Date();
    è؟‡وœںو—¥وœں.setFullYear(è؟‡وœںو—¥وœں.getFullYear() + 1);
    document.cookie = 'preferredLanguage=' + ه·²ن؟‌ه­کè¯­è¨€ + '; path=/; expires=' + è؟‡وœںو—¥وœں.toUTCString() + '; SameSite=Lax';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  try {
    هˆ›ه»؛çں©éکµé›¨();
  } catch (ن؛‹ن»¶ه€¼10000) {}
  const è¾“ه…¥ = document.getElementById('uuidInput');
  if (è¾“ه…¥) {
    è¾“ه…¥.focus();
    è¾“ه…¥.addEventListener('keypress', function (ن؛‹ن»¶ه€¼) {
      if (ن؛‹ن»¶ه€¼.key === 'Enter') {
        ه¤„çگ†ه”¯ن¸€و ‡è¯†è¾“ه…¥();
      }
    });
  }
});
</script>
    </body>
    </html>`;
          return new Response(ç»ˆç«¯é،µé‌¢, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8'
            }
          });
        }
        if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
          const و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„ = è‡ھه®ڑن¹‰è·¯ه¾„.trim().startsWith('/') ? è‡ھه®ڑن¹‰è·¯ه¾„.trim() : '/' + è‡ھه®ڑن¹‰è·¯ه¾„.trim();
          const è§„èŒƒهŒ–è‡ھه®ڑن¹‰è·¯ه¾„ = و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„.endsWith('/') && و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„.length > 1 ? و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„.slice(0, -1) : و¸…çگ†è‡ھه®ڑن¹‰è·¯ه¾„;
          const è§„èŒƒهŒ–è·¯ه¾„ = ç½‘ه‌€698.pathname.endsWith('/') && ç½‘ه‌€698.pathname.length > 1 ? ç½‘ه‌€698.pathname.slice(0, -1) : ç½‘ه‌€698.pathname;
          if (è§„èŒƒهŒ–è·¯ه¾„ === è§„èŒƒهŒ–è‡ھه®ڑن¹‰è·¯ه¾„) {
            return await ه¤„çگ†è®¢éک…ه€¼(è¯·و±‚735, è®¤è¯پن»¤ç‰Œ);
          }
          if (è§„èŒƒهŒ–è·¯ه¾„ === è§„èŒƒهŒ–è‡ھه®ڑن¹‰è·¯ه¾„ + '/sub') {
            return await ه¤„çگ†è®¢éک…è¯·و±‚(è¯·و±‚735, è®¤è¯پن»¤ç‰Œ, ç½‘ه‌€698);
          }
          if (ç½‘ه‌€698.pathname.length > 1 && ç½‘ه‌€698.pathname !== '/') {
            const ç”¨وˆ·658 = ç½‘ه‌€698.pathname.replace(/\/$/, '').replace('/sub', '').substring(1);
            if (وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(ç”¨وˆ·658)) {
              return new Response(JSON.stringify({
                error: 'è®؟é—®è¢«و‹’ç»‌',
                message: 'ه½“ه‰چ Worker ه·²هگ¯ç”¨è‡ھه®ڑن¹‰è·¯ه¾„و¨،ه¼ڈï¼ŒUUID è®؟é—®ه·²ç¦پç”¨'
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        } else {
          if (ç½‘ه‌€698.pathname.length > 1 && ç½‘ه‌€698.pathname !== '/' && !ç½‘ه‌€698.pathname.includes('/sub')) {
            const ç”¨وˆ·657 = ç½‘ه‌€698.pathname.replace(/\/$/, '').substring(1);
            if (وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(ç”¨وˆ·657)) {
              if (ç”¨وˆ·657 === è®¤è¯پن»¤ç‰Œ) {
                return await ه¤„çگ†è®¢éک…ه€¼(è¯·و±‚735, ç”¨وˆ·657);
              } else {
                return new Response(JSON.stringify({
                  error: 'UUIDé”™è¯¯ è¯·و³¨و„ڈهڈکé‡ڈهگچç§°وک¯uن¸چوک¯uuid'
                }), {
                  status: 403,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            }
          }
          if (ç½‘ه‌€698.pathname.includes('/sub')) {
            const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨ = ç½‘ه‌€698.pathname.split('/');
            if (è·¯ه¾„éƒ¨هˆ†هˆ—è،¨.length === 2 && è·¯ه¾„éƒ¨هˆ†هˆ—è،¨[1] === 'sub') {
              const ç”¨وˆ·656 = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨[0].substring(1);
              if (وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(ç”¨وˆ·656)) {
                if (ç”¨وˆ·656 === è®¤è¯پن»¤ç‰Œ) {
                  return await ه¤„çگ†è®¢éک…è¯·و±‚(è¯·و±‚735, ç”¨وˆ·656, ç½‘ه‌€698);
                } else {
                  return new Response(JSON.stringify({
                    error: 'UUIDé”™è¯¯'
                  }), {
                    status: 403,
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                }
              }
            }
          }
        }
        if (ç½‘ه‌€698.pathname.toLowerCase().includes(`/${ه€¼è·¯ه¾„}`)) {
          return await ه¤„çگ†è®¢éک…è¯·و±‚(è¯·و±‚735, è®¤è¯پن»¤ç‰Œ);
        }
      }
      return new Response(JSON.stringify({
        error: 'Not Found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (é”™è¯¯655) {
      return new Response(é”™è¯¯655.toString(), {
        status: 500
      });
    }
  }
};
function ç”ںوˆگه€¼é…چç½®654(é“¾وژ¥هˆ—è،¨653) {
  return btoa(é“¾وژ¥هˆ—è،¨653.join('\n'));
}

// è§£و‍گهˆ†ن؛«é“¾وژ¥ه¹¶ç”ںوˆگه®¢وˆ·ç«¯èٹ‚ç‚¹é…چç½®
function è§£و‍گé“¾وژ¥ه€¼ه€¼èٹ‚ç‚¹(é“¾وژ¥652) {
  try {
    // è§£و‍گç¬¬ن¸€ç±»é“¾وژ¥
    if (é“¾وژ¥652.startsWith(è§£ç پ64('dmxlc3M6Ly8='))) {
      const ç½‘ه‌€651 = new URL(é“¾وژ¥652);
      const هگچç§°650 = decodeURIComponent(ç½‘ه‌€651.hash.substring(1));
      const ه”¯ن¸€و ‡è¯†649 = ç½‘ه‌€651.username;
      const وœ¬هœ°ه€¼648 = ç½‘ه‌€651.hostname;
      const ç«¯هڈ£647 = parseInt(ç½‘ه‌€651.port) || 443;
      const هڈ‚و•°646 = new URLSearchParams(ç½‘ه‌€651.search);
      const ن¼ è¾“ه±‚ه®‰ه…¨645 = هڈ‚و•°646.get('security') === 'tls' || هڈ‚و•°646.get('tls') === 'true';
      const وœ¬هœ°ه€¼644 = هڈ‚و•°646.get('type') || 'ws';
      const è·¯ه¾„643 = هڈ‚و•°646.get('path') || '/?ed=2048';
      const ن¸»وœ؛642 = هڈ‚و•°646.get('host') || وœ¬هœ°ه€¼648;
      const وœ¬هœ°ه€¼641 = هڈ‚و•°646.get('sni') || ن¸»وœ؛642;
      const ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹640 = هڈ‚و•°646.get('alpn') || '';
      const وœ¬هœ°ه€¼639 = هڈ‚و•°646.get('fp') || هڈ‚و•°646.get('client-fingerprint') || 'chrome';
      const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™638 = هڈ‚و•°646.get('ech');
      const èٹ‚ç‚¹637 = {
        name: هگچç§°650,
        type: è§£ç پ64('dmxlc3M='),
        server: وœ¬هœ°ه€¼648,
        port: ç«¯هڈ£647,
        uuid: ه”¯ن¸€و ‡è¯†649,
        tls: ن¼ è¾“ه±‚ه®‰ه…¨645,
        network: وœ¬هœ°ه€¼644,
        'client-fingerprint': وœ¬هœ°ه€¼639
      };
      if (ن¼ è¾“ه±‚ه®‰ه…¨645) {
        èٹ‚ç‚¹637.servername = وœ¬هœ°ه€¼641;
        if (ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹640) èٹ‚ç‚¹637.alpn = ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹640.split(',').map(ç”²ه€¼636 => ç”²ه€¼636.trim()).filter(Boolean);
        èٹ‚ç‚¹637['skip-cert-verify'] = false;
      }
      if (وœ¬هœ°ه€¼644 === 'ws') {
        èٹ‚ç‚¹637['ws-opts'] = {
          path: è·¯ه¾„643,
          headers: {
            Host: ن¸»وœ؛642
          }
        };
      }
      if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™638) {
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ635 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        èٹ‚ç‚¹637['ech-opts'] = {
          enable: true,
          'query-server-name': هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ635
        };
      }
      return èٹ‚ç‚¹637;
    }

    // è§£و‍گç¬¬ن؛Œç±»é“¾وژ¥
    if (é“¾وژ¥652.startsWith(è§£ç پ64('dHJvamFuOi8v'))) {
      const ç½‘ه‌€634 = new URL(é“¾وژ¥652);
      const هگچç§°633 = decodeURIComponent(ç½‘ه‌€634.hash.substring(1));
      const ه¯†ç پ632 = ç½‘ه‌€634.username;
      const وœ¬هœ°ه€¼631 = ç½‘ه‌€634.hostname;
      const ç«¯هڈ£630 = parseInt(ç½‘ه‌€634.port) || 443;
      const هڈ‚و•°629 = new URLSearchParams(ç½‘ه‌€634.search);
      const وœ¬هœ°ه€¼628 = هڈ‚و•°629.get('type') || 'ws';
      const è·¯ه¾„ = هڈ‚و•°629.get('path') || '/?ed=2048';
      const ن¸»وœ؛627 = هڈ‚و•°629.get('host') || وœ¬هœ°ه€¼631;
      const وœچهٹ،هگچç§°وŒ‡ç¤؛626 = هڈ‚و•°629.get('sni') || ن¸»وœ؛627;
      const ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹ = هڈ‚و•°629.get('alpn') || '';
      const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ = هڈ‚و•°629.get('ech');
      const èٹ‚ç‚¹ = {
        name: هگچç§°633,
        type: è§£ç پ64('dHJvamFu'),
        server: وœ¬هœ°ه€¼631,
        port: ç«¯هڈ£630,
        password: ه¯†ç پ632,
        network: وœ¬هœ°ه€¼628,
        sni: وœچهٹ،هگچç§°وŒ‡ç¤؛626,
        'skip-cert-verify': false
      };
      if (ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹) èٹ‚ç‚¹.alpn = ه؛”ç”¨ه±‚هچڈè®®هچڈه•†هژںه§‹.split(',').map(ç”²ه€¼625 => ç”²ه€¼625.trim()).filter(Boolean);
      if (وœ¬هœ°ه€¼628 === 'ws') {
        èٹ‚ç‚¹['ws-opts'] = {
          path: è·¯ه¾„,
          headers: {
            Host: ن¸»وœ؛627
          }
        };
      }
      if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ624 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        èٹ‚ç‚¹['ech-opts'] = {
          enable: true,
          'query-server-name': هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ624
        };
      }
      return èٹ‚ç‚¹;
    }
  } catch (ن؛‹ن»¶ه€¼623) {
    return null;
  }
  return null;
}

// ============================================================
// ه†…éƒ¨و ¼ه¼ڈè½¬وچ¢ه™¨ - ن¸چن¾‌èµ–ه¤–éƒ¨وœچهٹ،
// ============================================================

// ç”¨ن؛ژ YAML ه¼•هڈ·هŒ…è£¹ï¼ˆéپ؟ه…چ IPv6 و–¹و‹¬هڈ·م€پé€—هڈ·ç­‰è¢«è§£و‍گن¸؛و•°ç»„ï¼‰
function ه¤„çگ†وœ¬هœ°ه€¼622(هڈ–ه€¼621) {
  if (هڈ–ه€¼621 == null) return '""';
  const ه­—ç¬¦ن¸²ه€¼620 = String(هڈ–ه€¼621);
  return '"' + ه­—ç¬¦ن¸²ه€¼620.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

// URL.hostname ه¯¹ IPv6 ن¼ڑه¸¦و–¹و‹¬هڈ·ï¼Œç›´وژ¥ه†™ه…¥ YAML ن¼ڑè¢«ه½“وˆگو•°ç»„
function è§„èŒƒهŒ–ه€¼ن¸»وœ؛(ن¸»وœ؛هگچ619) {
  if (!ن¸»وœ؛هگچ619) return ن¸»وœ؛هگچ619;
  const ه¤´ه€¼618 = String(ن¸»وœ؛هگچ619);
  if (ه¤´ه€¼618.startsWith('[') && ه¤´ه€¼618.endsWith(']')) return ه¤´ه€¼618.slice(1, -1);
  return ه¤´ه€¼618;
}

// Clash ç­–ç•¥ç»„ proxiesï¼ڑç­–ç•¥ç»„ + ه…¨éƒ¨èٹ‚ç‚¹ï¼ˆéپ؟ه…چهˆ†ç»„é‡Œهڈھوœ‰م€Œèٹ‚ç‚¹é€‰و‹©م€چو²،وœ‰ه…·ن½“èٹ‚ç‚¹ï¼‰
function ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨617, وœ¬هœ°ه€¼616 = {}) {
  const {
    directFirst: ç›´è؟‍é¦–و¬،615 = false,
    extraGroups: ه€¼ه€¼614 = []
  } = وœ¬هœ°ه€¼616;
  const èٹ‚ç‚¹è،Œهˆ—è،¨ = هگچç§°هˆ—è،¨617.length ? هگچç§°هˆ—è،¨617.map(و•°é‡ڈه€¼613 => `      - ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼613)}`).join('\n') : '      - DIRECT';
  const è،Œهˆ—è،¨612 = [];
  if (ç›´è؟‍é¦–و¬،615) {
    è،Œهˆ—è،¨612.push('      - "ًںژ¯ ه…¨çگƒç›´è؟‍"', '      - "ًںڑ€ èٹ‚ç‚¹é€‰و‹©"');
  } else {
    è،Œهˆ—è،¨612.push('      - "ًںڑ€ èٹ‚ç‚¹é€‰و‹©"', '      - "ًںژ¯ ه…¨çگƒç›´è؟‍"');
  }
  for (const وœ¬هœ°ه€¼611 of ه€¼ه€¼614) è،Œهˆ—è،¨612.push(`      - ${ه¤„çگ†وœ¬هœ°ه€¼622(وœ¬هœ°ه€¼611)}`);
  è،Œهˆ—è،¨612.push(èٹ‚ç‚¹è،Œهˆ—è،¨);
  return è،Œهˆ—è،¨612.join('\n');
}

// Surge / Loon ç­–ç•¥ç»„هˆ—è،¨ï¼ڑç­–ç•¥ç»„ + ه…¨éƒ¨èٹ‚ç‚¹
function ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨610, وœ¬هœ°ه€¼609 = {}) {
  const {
    directFirst: ç›´è؟‍é¦–و¬، = false,
    extraGroups: ه€¼ه€¼608 = [],
    compact: وœ¬هœ°ه€¼607 = false
  } = وœ¬هœ°ه€¼609;
  const وœ¬هœ°ه€¼606 = وœ¬هœ°ه€¼607 ? ',' : ', ';
  const هˆ—è،¨605 = هگچç§°هˆ—è،¨610.length ? هگچç§°هˆ—è،¨610.join(وœ¬هœ°ه€¼606) : 'DIRECT';
  const éƒ¨هˆ†هˆ—è،¨604 = [];
  if (ç›´è؟‍é¦–و¬،) éƒ¨هˆ†هˆ—è،¨604.push('ًںژ¯ ه…¨çگƒç›´è؟‍', 'ًںڑ€ èٹ‚ç‚¹é€‰و‹©');else éƒ¨هˆ†هˆ—è،¨604.push('ًںڑ€ èٹ‚ç‚¹é€‰و‹©', 'ًںژ¯ ه…¨çگƒç›´è؟‍');
  éƒ¨هˆ†هˆ—è،¨604.push(...ه€¼ه€¼608);
  if (هگچç§°هˆ—è،¨610.length) éƒ¨هˆ†هˆ—è،¨604.push(هˆ—è،¨605);
  return éƒ¨هˆ†هˆ—è،¨604.join(وœ¬هœ°ه€¼606);
}

// è§£و‍گن»»و„ڈهˆ†ن؛«é“¾وژ¥ن¸؛é€ڑç”¨èٹ‚ç‚¹ه¯¹è±،
function è§£و‍گه€¼é“¾وژ¥(é“¾وژ¥603) {
  try {
    if (é“¾وژ¥603.startsWith(è§£ç پ64('dmxlc3M6Ly8='))) {
      const ç½‘ه‌€602 = new URL(é“¾وژ¥603);
      const هڈ‚و•°ه€¼601 = new URLSearchParams(ç½‘ه‌€602.search);
      return {
        proto: è§£ç پ64('dmxlc3M='),
        name: decodeURIComponent(ç½‘ه‌€602.hash.substring(1)) || ç½‘ه‌€602.hostname + ':' + ç½‘ه‌€602.port,
        uuid: ç½‘ه‌€602.username,
        server: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(ç½‘ه‌€602.hostname),
        port: parseInt(ç½‘ه‌€602.port) || 443,
        tls: هڈ‚و•°ه€¼601.get('security') === 'tls' || هڈ‚و•°ه€¼601.get('security') === 'reality',
        network: هڈ‚و•°ه€¼601.get('type') || 'ws',
        path: هڈ‚و•°ه€¼601.get('path') || '/?ed=2048',
        host: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(هڈ‚و•°ه€¼601.get('host') || ç½‘ه‌€602.hostname),
        sni: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(هڈ‚و•°ه€¼601.get('sni') || هڈ‚و•°ه€¼601.get('host') || ç½‘ه‌€602.hostname),
        alpn: (هڈ‚و•°ه€¼601.get('alpn') || '').split(',').map(ه­—ç¬¦ن¸²ه€¼600 => ه­—ç¬¦ن¸²ه€¼600.trim()).filter(Boolean),
        fp: هڈ‚و•°ه€¼601.get('fp') || 'chrome',
        flow: هڈ‚و•°ه€¼601.get('flow') || '',
        encryption: هڈ‚و•°ه€¼601.get('encryption') || 'none',
        mode: هڈ‚و•°ه€¼601.get('mode') || '',
        ech: هڈ‚و•°ه€¼601.get('ech') || ''
      };
    }
    if (é“¾وژ¥603.startsWith(è§£ç پ64('dHJvamFuOi8v'))) {
      const ç½‘ه‌€599 = new URL(é“¾وژ¥603);
      const هڈ‚و•°ه€¼ = new URLSearchParams(ç½‘ه‌€599.search);
      return {
        proto: è§£ç پ64('dHJvamFu'),
        name: decodeURIComponent(ç½‘ه‌€599.hash.substring(1)) || ç½‘ه‌€599.hostname + ':' + ç½‘ه‌€599.port,
        password: decodeURIComponent(ç½‘ه‌€599.username),
        server: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(ç½‘ه‌€599.hostname),
        port: parseInt(ç½‘ه‌€599.port) || 443,
        tls: true,
        network: هڈ‚و•°ه€¼.get('type') || 'ws',
        path: هڈ‚و•°ه€¼.get('path') || '/?ed=2048',
        host: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(هڈ‚و•°ه€¼.get('host') || ç½‘ه‌€599.hostname),
        sni: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(هڈ‚و•°ه€¼.get('sni') || هڈ‚و•°ه€¼.get('host') || ç½‘ه‌€599.hostname),
        alpn: (هڈ‚و•°ه€¼.get('alpn') || '').split(',').map(ه­—ç¬¦ن¸²ه€¼598 => ه­—ç¬¦ن¸²ه€¼598.trim()).filter(Boolean),
        fp: هڈ‚و•°ه€¼.get('fp') || 'chrome',
        ech: هڈ‚و•°ه€¼.get('ech') || ''
      };
    }
  } catch (ن؛‹ن»¶ه€¼597) {}
  return null;
}

// هچ•ن¸ھèٹ‚ç‚¹ â†’ Clash ه‌—ç؛§ YAMLï¼ˆéپ؟ه…چ flow style è§£و‍گé”™è¯¯ï¼‰
function و‍„ه»؛ه€¼èٹ‚ç‚¹è،Œ(و•°é‡ڈه€¼596) {
  const è،Œهˆ—è،¨595 = [];
  const وœ¬هœ°ه€¼594 = è§„èŒƒهŒ–ه€¼ن¸»وœ؛(و•°é‡ڈه€¼596.server);
  const ن¸»وœ؛593 = è§„èŒƒهŒ–ه€¼ن¸»وœ؛(و•°é‡ڈه€¼596.host) || وœ¬هœ°ه€¼594;
  const وœچهٹ،هگچç§°وŒ‡ç¤؛592 = è§„èŒƒهŒ–ه€¼ن¸»وœ؛(و•°é‡ڈه€¼596.sni) || ن¸»وœ؛593;
  è،Œهˆ—è،¨595.push(`  - name: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.name)}`);
  è،Œهˆ—è،¨595.push(`    type: ${و•°é‡ڈه€¼596.proto}`);
  è،Œهˆ—è،¨595.push(`    server: ${ه¤„çگ†وœ¬هœ°ه€¼622(وœ¬هœ°ه€¼594)}`);
  è،Œهˆ—è،¨595.push(`    port: ${و•°é‡ڈه€¼596.port}`);
  if (و•°é‡ڈه€¼596.proto === è§£ç پ64('dmxlc3M=')) {
    è،Œهˆ—è،¨595.push(`    uuid: ${و•°é‡ڈه€¼596.uuid}`);
    è،Œهˆ—è،¨595.push(`    udp: true`);
    è،Œهˆ—è،¨595.push(`    tls: ${و•°é‡ڈه€¼596.tls ? 'true' : 'false'}`);
    if (و•°é‡ڈه€¼596.flow) è،Œهˆ—è،¨595.push(`    flow: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.flow)}`);
    è،Œهˆ—è،¨595.push(`    client-fingerprint: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.fp || 'chrome')}`);
  } else if (و•°é‡ڈه€¼596.proto === è§£ç پ64('dHJvamFu')) {
    è،Œهˆ—è،¨595.push(`    password: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.password)}`);
    è،Œهˆ—è،¨595.push(`    udp: true`);
    è،Œهˆ—è،¨595.push(`    client-fingerprint: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.fp || 'chrome')}`);
  }
  if (و•°é‡ڈه€¼596.tls) {
    è،Œهˆ—è،¨595.push(`    servername: ${ه¤„çگ†وœ¬هœ°ه€¼622(وœچهٹ،هگچç§°وŒ‡ç¤؛592)}`);
    if (و•°é‡ڈه€¼596.alpn && و•°é‡ڈه€¼596.alpn.length) {
      è،Œهˆ—è،¨595.push(`    alpn: [${و•°é‡ڈه€¼596.alpn.map(ç”²ه€¼591 => ه¤„çگ†وœ¬هœ°ه€¼622(ç”²ه€¼591)).join(', ')}]`);
    }
    è،Œهˆ—è،¨595.push(`    skip-cert-verify: false`);
  }
  if (و•°é‡ڈه€¼596.network === 'ws' || و•°é‡ڈه€¼596.network === 'xhttp') {
    è،Œهˆ—è،¨595.push(`    network: ws`);
    è،Œهˆ—è،¨595.push(`    ws-opts:`);
    è،Œهˆ—è،¨595.push(`      path: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.path)}`);
    è،Œهˆ—è،¨595.push(`      headers:`);
    è،Œهˆ—è،¨595.push(`        Host: ${ه¤„çگ†وœ¬هœ°ه€¼622(ن¸»وœ؛593)}`);
  } else if (و•°é‡ڈه€¼596.network === 'grpc') {
    è،Œهˆ—è،¨595.push(`    network: grpc`);
    è،Œهˆ—è،¨595.push(`    grpc-opts:`);
    è،Œهˆ—è،¨595.push(`      grpc-service-name: ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼596.path)}`);
  }
  if (و•°é‡ڈه€¼596.ech) {
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ590 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
    è،Œهˆ—è،¨595.push(`    ech-opts:`);
    è،Œهˆ—è،¨595.push(`      enable: true`);
    è،Œهˆ—è،¨595.push(`      query-server-name: ${ه¤„çگ†وœ¬هœ°ه€¼622(هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ590)}`);
  }
  return è،Œهˆ—è،¨595.join('\n');
}

// ه†…éƒ¨ç”ںوˆگ Clash YAMLï¼ˆه®Œو•´è§„هˆ™é›†ï¼ڑLoyalsoldier rule-providersï¼‰
function ç”ںوˆگه€¼ه€¼589(é“¾وژ¥هˆ—è،¨588, وœ¬هœ°ه€¼587 = {}) {
  const èٹ‚ç‚¹هˆ—è،¨586 = é“¾وژ¥هˆ—è،¨588.map(è§£و‍گه€¼é“¾وژ¥).filter(و•°é‡ڈه€¼585 => و•°é‡ڈه€¼585 && (و•°é‡ڈه€¼585.proto === è§£ç پ64('dmxlc3M=') || و•°é‡ڈه€¼585.proto === è§£ç پ64('dHJvamFu')));
  const هگچç§°هˆ—è،¨584 = èٹ‚ç‚¹هˆ—è،¨586.map(و•°é‡ڈه€¼583 => و•°é‡ڈه€¼583.name);
  const هںںهگچç³»ç»ںه€¼582 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
  const ه¤´éƒ¨581 = ['mixed-port: 7890', 'allow-lan: true', 'mode: rule', 'log-level: info', 'ipv6: true', 'external-controller: 127.0.0.1:9090', 'unified-delay: true', 'tcp-concurrent: true', 'geodata-mode: true', 'geo-auto-update: true', 'geo-update-interval: 24', 'geox-url:', '  geoip: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat"', '  geosite: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat"', '  mmdb: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb"', '  asn: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"', 'sniffer:', '  enable: true', '  force-dns-mapping: true', '  parse-pure-ip: true', '  sniff:', '    HTTP:', '      ports: [80, 8080-8880]', '      override-destination: true', '    TLS:', '      ports: [443, 8443]', '    QUIC:', '      ports: [443, 8443]', 'dns:', '  enable: true', '  listen: 0.0.0.0:1053', '  ipv6: true', '  enhanced-mode: fake-ip', '  fake-ip-range: 198.18.0.1/16', '  fake-ip-filter:', '    - "*.lan"', '    - "+.local"', '    - "+.market.xiaomi.com"', '    - "+.msftconnecttest.com"', '    - "+.msftncsi.com"', '    - "localhost.ptlogin2.qq.com"', '    - "+.srv.nintendo.net"', '    - "+.stun.playstation.net"', '    - "+.xboxlive.com"', '  default-nameserver:', '    - 223.5.5.5', '    - 119.29.29.29', '  nameserver:', `    - ${هںںهگچç³»ç»ںه€¼582}`, '    - https://119.29.29.29/dns-query', '  fallback:', '    - https://1.1.1.1/dns-query', '    - https://8.8.8.8/dns-query', '  fallback-filter:', '    geoip: true', '    geoip-code: CN', '    ipcidr:', '      - 240.0.0.0/4', ''];
  const ه€¼ه€¼580 = ['proxies:'];
  for (const و•°é‡ڈه€¼579 of èٹ‚ç‚¹هˆ—è،¨586) ه€¼ه€¼580.push(و‍„ه»؛ه€¼èٹ‚ç‚¹è،Œ(و•°é‡ڈه€¼579));
  const èٹ‚ç‚¹ن»… = هگچç§°هˆ—è،¨584.length ? هگچç§°هˆ—è،¨584.map(و•°é‡ڈه€¼578 => `      - ${ه¤„çگ†وœ¬هœ°ه€¼622(و•°é‡ڈه€¼578)}`).join('\n') : '      - DIRECT';
  const ه€¼ه€¼577 = [è§£ç پ64('cHJveHktZ3JvdXBzOg=='), '  - name: "ًںڑ€ èٹ‚ç‚¹é€‰و‹©"', '    type: select', '    proxies:', '      - "ًںژ¯ ه…¨çگƒç›´è؟‍"', èٹ‚ç‚¹ن»…, '  - name: "ًںŒچ ه›½ه¤–هھ’ن½“"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584), '  - name: "ًں“؛ ه“”ه“©ه“”ه“©"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584, {
    directFirst: true
  }), '  - name: "ًں“¹ و²¹ç®،è§†é¢‘"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  }), '  - name: "ًںژ¬ ه¥ˆé£‍è§†é¢‘"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  }), '  - name: "ًں“² ç”µوٹ¥ن؟،وپ¯"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584), '  - name: "ًںŒگ è°·و­Œوœچهٹ،"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584), '  - name: "ًں¤– OpenAI"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584), '  - name: "â“‚ï¸ڈ ه¾®è½¯وœچهٹ،"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584, {
    directFirst: true
  }), '  - name: "ًںچژ è‹¹و‍œوœچهٹ،"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584, {
    directFirst: true
  }), '  - name: "ًںژ¯ ه…¨çگƒç›´è؟‍"', '    type: select', '    proxies:', '      - DIRECT', '  - name: "ًں›‘ ه…¨çگƒو‹¦وˆھ"', '    type: select', '    proxies:', '      - REJECT', '      - DIRECT', '  - name: "ًںچƒ ه؛”ç”¨ه‡€هŒ–"', '    type: select', '    proxies:', '      - REJECT', '      - DIRECT', '  - name: "ًںگں و¼ڈç½‘ن¹‹é±¼"', '    type: select', '    proxies:', ه¤„çگ†ه€¼é€‰و‹©ه€¼(هگچç§°هˆ—è،¨584), ''];

  // Loyalsoldier è§„هˆ™و؛گ - CDN: jsDelivr
  const ه€¼هں؛ç،€576 = è§£ç پ64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0xveWFsc29sZGllci9jbGFzaC1ydWxlc0ByZWxlYXNl');
  const وڈگن¾›ه™¨ = (هگچç§°575, وœ¬هœ°ه€¼574) => [`  ${هگچç§°575}:`, `    type: http`, `    behavior: ${وœ¬هœ°ه€¼574}`, `    url: "${ه€¼هں؛ç،€576}/${هگچç§°575}.txt"`, `    path: ./rulesets/loyalsoldier/${هگچç§°575}.txt`, `    interval: 86400`].join('\n');
  const è§„هˆ™ه€¼ = ['rule-providers:', وڈگن¾›ه™¨('reject', 'domain'), وڈگن¾›ه™¨('icloud', 'domain'), وڈگن¾›ه™¨('apple', 'domain'), وڈگن¾›ه™¨('google', 'domain'), وڈگن¾›ه™¨(è§£ç پ64('cHJveHk='), 'domain'), وڈگن¾›ه™¨('direct', 'domain'), وڈگن¾›ه™¨('private', 'domain'), وڈگن¾›ه™¨('gfw', 'domain'), وڈگن¾›ه™¨('greatfire', 'domain'), وڈگن¾›ه™¨('tld-not-cn', 'domain'), وڈگن¾›ه™¨('telegramcidr', 'ipcidr'), وڈگن¾›ه™¨('cncidr', 'ipcidr'), وڈگن¾›ه™¨('lancidr', 'ipcidr'), وڈگن¾›ه™¨('applications', 'classical'), ''];
  const è§„هˆ™هˆ—è،¨ = ['rules:', '  - DOMAIN-SUFFIX,acl4.ssr,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - DOMAIN-SUFFIX,local,ًںژ¯ ه…¨çگƒç›´è؟‍', è§£ç پ64('ICAtIERPTUFJTixjbGFzaC5yYXpvcmQudG9wLPCfjq8g5YWo55CD55u06L+e'), '  - DOMAIN,yacd.haishan.me,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - DOMAIN,yacd.metacubex.one,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - DOMAIN,d.metacubex.one,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - DOMAIN-SUFFIX,googleapis.cn,ًںŒگ è°·و­Œوœچهٹ،', '  - DOMAIN-SUFFIX,gstatic.com,ًںŒگ è°·و­Œوœچهٹ،', '  - DOMAIN-SUFFIX,xn--ngstr-lra8j.com,ًںŒگ è°·و­Œوœچهٹ،', '  - DOMAIN-SUFFIX,googlevideo.com,ًں“¹ و²¹ç®،è§†é¢‘', '  - DOMAIN-SUFFIX,googleusercontent.com,ًںŒگ è°·و­Œوœچهٹ،', '  - DOMAIN-KEYWORD,youtube,ًں“¹ و²¹ç®،è§†é¢‘', '  - DOMAIN-SUFFIX,youtube.com,ًں“¹ و²¹ç®،è§†é¢‘', '  - DOMAIN-SUFFIX,youtu.be,ًں“¹ و²¹ç®،è§†é¢‘', '  - DOMAIN-KEYWORD,netflix,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,nflxext.com,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,nflxso.net,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,nflxvideo.net,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,nflximg.com,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,nflximg.net,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,netflix.com,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,netflix.net,ًںژ¬ ه¥ˆé£‍è§†é¢‘', '  - DOMAIN-SUFFIX,bilibili.com,ًں“؛ ه“”ه“©ه“”ه“©', '  - DOMAIN-SUFFIX,bilivideo.com,ًں“؛ ه“”ه“©ه“”ه“©', '  - DOMAIN-SUFFIX,hdslb.com,ًں“؛ ه“”ه“©ه“”ه“©', '  - DOMAIN-KEYWORD,openai,ًں¤– OpenAI', '  - DOMAIN-KEYWORD,chatgpt,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,openai.com,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,chatgpt.com,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,oaistatic.com,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,oaiusercontent.com,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,anthropic.com,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,claude.ai,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,perplexity.ai,ًں¤– OpenAI', '  - DOMAIN-SUFFIX,gemini.google.com,ًں¤– OpenAI', '  - RULE-SET,applications,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - RULE-SET,private,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - RULE-SET,reject,ًں›‘ ه…¨çگƒو‹¦وˆھ', '  - RULE-SET,icloud,ًںچژ è‹¹و‍œوœچهٹ،', '  - RULE-SET,apple,ًںچژ è‹¹و‍œوœچهٹ،', '  - RULE-SET,google,ًںŒگ è°·و­Œوœچهٹ،', è§£ç پ64('ICAtIFJVTEUtU0VULHByb3h5LPCfmoAg6IqC54K56YCJ5oup'), '  - RULE-SET,gfw,ًںڑ€ èٹ‚ç‚¹é€‰و‹©', '  - RULE-SET,greatfire,ًںڑ€ èٹ‚ç‚¹é€‰و‹©', '  - RULE-SET,tld-not-cn,ًںڑ€ èٹ‚ç‚¹é€‰و‹©', '  - RULE-SET,direct,ًںژ¯ ه…¨çگƒç›´è؟‍', '  - RULE-SET,lancidr,ًںژ¯ ه…¨çگƒç›´è؟‍,no-resolve', '  - RULE-SET,cncidr,ًںژ¯ ه…¨çگƒç›´è؟‍,no-resolve', '  - RULE-SET,telegramcidr,ًں“² ç”µوٹ¥ن؟،وپ¯,no-resolve', '  - GEOIP,LAN,ًںژ¯ ه…¨çگƒç›´è؟‍,no-resolve', '  - GEOIP,CN,ًںژ¯ ه…¨çگƒç›´è؟‍,no-resolve', '  - MATCH,ًںگں و¼ڈç½‘ن¹‹é±¼'];
  return [ه¤´éƒ¨581.join('\n'), ه€¼ه€¼580.join('\n'), '', ه€¼ه€¼577.join('\n'), è§„هˆ™ه€¼.join('\n'), è§„هˆ™هˆ—è،¨.join('\n'), ''].join('\n');
}

// ه†…éƒ¨ç”ںوˆگ JSON ه®¢وˆ·ç«¯é…چç½®ï¼ˆه®Œو•´è§„هˆ™é›†ï¼ڑMetaCubeX é•œهƒڈï¼‰
function ç”ںوˆگه€¼ه€¼و•°وچ®ه¯¹è±،(é“¾وژ¥هˆ—è،¨573) {
  const èٹ‚ç‚¹هˆ—è،¨572 = é“¾وژ¥هˆ—è،¨573.map(è§£و‍گه€¼é“¾وژ¥).filter(و•°é‡ڈه€¼571 => و•°é‡ڈه€¼571 && (و•°é‡ڈه€¼571.proto === è§£ç پ64('dmxlc3M=') || و•°é‡ڈه€¼571.proto === è§£ç پ64('dHJvamFu')));
  const هںںهگچç³»ç»ںه€¼570 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
  const ه‡؛ç«™ه€¼ = èٹ‚ç‚¹هˆ—è،¨572.map(و•°é‡ڈه€¼569 => و•°é‡ڈه€¼569.name);
  function ه¤„çگ†èٹ‚ç‚¹ه€¼ه‡؛ç«™(و•°é‡ڈه€¼568) {
    const è¾“ه‡؛567 = {
      type: و•°é‡ڈه€¼568.proto,
      tag: و•°é‡ڈه€¼568.name,
      server: è§„èŒƒهŒ–ه€¼ن¸»وœ؛(و•°é‡ڈه€¼568.server),
      server_port: و•°é‡ڈه€¼568.port
    };
    if (و•°é‡ڈه€¼568.proto === è§£ç پ64('dmxlc3M=')) {
      è¾“ه‡؛567.uuid = و•°é‡ڈه€¼568.uuid;
      if (و•°é‡ڈه€¼568.flow) è¾“ه‡؛567.flow = و•°é‡ڈه€¼568.flow;
    } else {
      è¾“ه‡؛567.password = و•°é‡ڈه€¼568.password;
    }
    if (و•°é‡ڈه€¼568.tls) {
      è¾“ه‡؛567.tls = {
        enabled: true,
        server_name: و•°é‡ڈه€¼568.sni,
        insecure: false,
        utls: {
          enabled: true,
          fingerprint: و•°é‡ڈه€¼568.fp || 'chrome'
        }
      };
      if (و•°é‡ڈه€¼568.alpn && و•°é‡ڈه€¼568.alpn.length) è¾“ه‡؛567.tls.alpn = و•°é‡ڈه€¼568.alpn;
      if (و•°é‡ڈه€¼568.ech) {
        è¾“ه‡؛567.tls.ech = {
          enabled: true,
          pq_signature_schemes_enabled: false,
          dynamic_record_sizing_disabled: false
        };
      }
    }
    if (و•°é‡ڈه€¼568.network === 'ws' || و•°é‡ڈه€¼568.network === 'xhttp') {
      è¾“ه‡؛567.transport = {
        type: 'ws',
        path: و•°é‡ڈه€¼568.path,
        headers: {
          Host: و•°é‡ڈه€¼568.host
        },
        max_early_data: 2048,
        early_data_header_name: 'Sec-WebSocket-Protocol'
      };
    } else if (و•°é‡ڈه€¼568.network === 'grpc') {
      è¾“ه‡؛567.transport = {
        type: 'grpc',
        service_name: و•°é‡ڈه€¼568.path
      };
    }
    return è¾“ه‡؛567;
  }

  // è؟œç«¯ SRS و–‡ن»¶ï¼ˆCDNï¼ڑjsDelivr é•œهƒڈ MetaCubeX è½¬وچ¢çڑ„ SagerNet و•°وچ®ï¼‰
  const ه€¼هں؛ç،€ه€¼ = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite';
  const ه€¼هں؛ç،€هœ°ه‌€ = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip';
  const ه€¼è§„هˆ™566 = وœ¬هœ°ه€¼565 => ({
    tag: `geosite-${وœ¬هœ°ه€¼565}`,
    type: 'remote',
    format: 'binary',
    url: `${ه€¼هں؛ç،€ه€¼}/${وœ¬هœ°ه€¼565}.srs`,
    download_detour: 'direct'
  });
  const هœ°ه‌€è§„هˆ™ = وœ¬هœ°ه€¼564 => ({
    tag: `geoip-${وœ¬هœ°ه€¼564}`,
    type: 'remote',
    format: 'binary',
    url: `${ه€¼هں؛ç،€هœ°ه‌€}/${وœ¬هœ°ه€¼564}.srs`,
    download_detour: 'direct'
  });
  const é…چç½® = {
    log: {
      level: 'info',
      timestamp: true
    },
    dns: {
      servers: [{
        tag: 'remote',
        address: هںںهگچç³»ç»ںه€¼570,
        detour: 'select'
      }, {
        tag: 'local',
        address: '223.5.5.5',
        detour: 'direct'
      }, {
        tag: 'fakeip',
        address: 'fakeip'
      }, {
        tag: 'block',
        address: 'rcode://success'
      }],
      rules: [{
        outbound: 'any',
        server: 'local'
      }, {
        rule_set: 'geosite-category-ads-all',
        server: 'block'
      }, {
        rule_set: 'geosite-cn',
        server: 'local'
      }, {
        query_type: ['A', 'AAAA'],
        server: 'fakeip'
      }],
      fakeip: {
        enabled: true,
        inet4_range: '198.18.0.0/15',
        inet6_range: 'fc00::/18'
      },
      independent_cache: true,
      strategy: 'ipv4_only'
    },
    inbounds: [{
      type: 'mixed',
      tag: 'mixed-in',
      listen: '127.0.0.1',
      listen_port: 2080,
      sniff: true,
      sniff_override_destination: true
    }, {
      type: 'tun',
      tag: 'tun-in',
      interface_name: è§£ç پ64('c2luZy1ib3g='),
      address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'],
      mtu: 9000,
      auto_route: true,
      strict_route: true,
      stack: 'mixed',
      sniff: true,
      sniff_override_destination: true
    }],
    outbounds: [{
      type: 'selector',
      tag: 'select',
      outbounds: ['direct', ...ه‡؛ç«™ه€¼],
      default: ه‡؛ç«™ه€¼[0] || 'direct'
    }, {
      type: 'selector',
      tag: 'ًںŒچ ه›½ه¤–هھ’ن½“',
      outbounds: ['select', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًں“² ç”µوٹ¥ن؟،وپ¯',
      outbounds: ['select', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًںŒگ è°·و­Œوœچهٹ،',
      outbounds: ['select', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًں¤– OpenAI',
      outbounds: ['select', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'â“‚ï¸ڈ ه¾®è½¯وœچهٹ،',
      outbounds: ['direct', 'select', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًںچژ è‹¹و‍œوœچهٹ،',
      outbounds: ['direct', 'select', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًں“؛ ه“”ه“©ه“”ه“©',
      outbounds: ['direct', 'select', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًں“¹ و²¹ç®،è§†é¢‘',
      outbounds: ['select', 'ًںŒچ ه›½ه¤–هھ’ن½“', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًںژ¬ ه¥ˆé£‍è§†é¢‘',
      outbounds: ['select', 'ًںŒچ ه›½ه¤–هھ’ن½“', 'direct', ...ه‡؛ç«™ه€¼]
    }, {
      type: 'selector',
      tag: 'ًںژ¯ ه…¨çگƒç›´è؟‍',
      outbounds: ['direct']
    }, {
      type: 'selector',
      tag: 'ًںگں و¼ڈç½‘ن¹‹é±¼',
      outbounds: ['select', 'direct', ...ه‡؛ç«™ه€¼]
    }, ...èٹ‚ç‚¹هˆ—è،¨572.map(ه¤„çگ†èٹ‚ç‚¹ه€¼ه‡؛ç«™), {
      type: 'direct',
      tag: 'direct'
    }, {
      type: 'block',
      tag: 'block'
    }, {
      type: 'dns',
      tag: 'dns-out'
    }],
    route: {
      rule_set: [ه€¼è§„هˆ™566('cn'), ه€¼è§„هˆ™566('private'), ه€¼è§„هˆ™566('apple'), ه€¼è§„هˆ™566('apple-cn'), ه€¼è§„هˆ™566('microsoft'), ه€¼è§„هˆ™566('microsoft@cn'), ه€¼è§„هˆ™566('google'), ه€¼è§„هˆ™566('telegram'), ه€¼è§„هˆ™566('openai'), ه€¼è§„هˆ™566('anthropic'), ه€¼è§„هˆ™566('youtube'), ه€¼è§„هˆ™566('netflix'), ه€¼è§„هˆ™566('disney'), ه€¼è§„هˆ™566('spotify'), ه€¼è§„هˆ™566('tiktok'), ه€¼è§„هˆ™566('twitter'), ه€¼è§„هˆ™566('facebook'), ه€¼è§„هˆ™566('github'), ه€¼è§„هˆ™566('geolocation-!cn'), ه€¼è§„هˆ™566('category-ads-all'), هœ°ه‌€è§„هˆ™('cn'), هœ°ه‌€è§„هˆ™('private'), هœ°ه‌€è§„هˆ™('telegram')],
      rules: [{
        protocol: 'dns',
        outbound: 'dns-out'
      }, {
        ip_is_private: true,
        outbound: 'direct'
      }, {
        rule_set: 'geosite-category-ads-all',
        outbound: 'block'
      }, {
        rule_set: 'geosite-private',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-apple-cn',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-microsoft@cn',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-apple',
        outbound: 'ًںچژ è‹¹و‍œوœچهٹ،'
      }, {
        rule_set: 'geosite-microsoft',
        outbound: 'â“‚ï¸ڈ ه¾®è½¯وœچهٹ،'
      }, {
        rule_set: 'geosite-openai',
        outbound: 'ًں¤– OpenAI'
      }, {
        rule_set: 'geosite-anthropic',
        outbound: 'ًں¤– OpenAI'
      }, {
        rule_set: 'geosite-telegram',
        outbound: 'ًں“² ç”µوٹ¥ن؟،وپ¯'
      }, {
        rule_set: 'geoip-telegram',
        outbound: 'ًں“² ç”µوٹ¥ن؟،وپ¯'
      }, {
        rule_set: 'geosite-google',
        outbound: 'ًںŒگ è°·و­Œوœچهٹ،'
      }, {
        rule_set: 'geosite-youtube',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-netflix',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-disney',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-spotify',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-tiktok',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-twitter',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-facebook',
        outbound: 'ًںŒچ ه›½ه¤–هھ’ن½“'
      }, {
        rule_set: 'geosite-github',
        outbound: 'select'
      }, {
        rule_set: 'geosite-geolocation-!cn',
        outbound: 'select'
      }, {
        rule_set: 'geosite-cn',
        outbound: 'direct'
      }, {
        rule_set: 'geoip-cn',
        outbound: 'direct'
      }, {
        ip_is_private: true,
        outbound: 'direct'
      }],
      final: 'ًںگں و¼ڈç½‘ن¹‹é±¼',
      auto_detect_interface: true
    },
    experimental: {
      cache_file: {
        enabled: true,
        store_fakeip: true
      },
      clash_api: {
        external_controller: '127.0.0.1:9090'
      }
    }
  };
  return JSON.stringify(é…چç½®, null, 2);
}

// ACL4SSR è§„هˆ™و؛گï¼ˆCDNï¼ڑjsDelivr é•œهƒڈ GitHubï¼‰
const ه€¼هں؛ç،€ = è§£ç پ64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0FDTDRTU1IvQUNMNFNTUkBtYXN0ZXIvQ2xhc2g=');
const ه€¼è§„هˆ™ = هگچç§°563 => `${ه€¼هں؛ç،€}/${هگچç§°563}.list`;

// ه†…éƒ¨ç”ںوˆگ ini ه®¢وˆ·ç«¯é…چç½®ï¼ˆه®Œو•´ ACL4SSR è§„هˆ™é›†ï¼‰
function ç”ںوˆگه€¼ه€¼562(é“¾وژ¥هˆ—è،¨561) {
  const èٹ‚ç‚¹هˆ—è،¨560 = é“¾وژ¥هˆ—è،¨561.map(è§£و‍گه€¼é“¾وژ¥).filter(و•°é‡ڈه€¼559 => و•°é‡ڈه€¼559 && و•°é‡ڈه€¼559.proto === è§£ç پ64('dHJvamFu'));
  const هںںهگچç³»ç»ںه€¼558 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || '223.5.5.5';
  const هگچç§°هˆ—è،¨557 = èٹ‚ç‚¹هˆ—è،¨560.map(و•°é‡ڈه€¼556 => و•°é‡ڈه€¼556.name);
  const è،Œهˆ—è،¨555 = ['[General]', 'loglevel = notify', 'internet-test-url = http://www.apple.com/library/test/success.html', è§£ç پ64('cHJveHktdGVzdC11cmwgPSBodHRwOi8vd3d3LmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNA=='), 'test-timeout = 3', `dns-server = ${هںںهگچç³»ç»ںه€¼558.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}, 119.29.29.29, system`, 'encrypted-dns-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query', 'ipv6 = true', 'allow-wifi-access = false', 'wifi-access-http-port = 6152', è§£ç پ64('d2lmaS1hY2Nlc3Mtc29ja3M1LXBvcnQgPSA2MTUz'), è§£ç پ64('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwgMTkyLjE2OC4wLjAvMTYsIDEwLjAuMC4wLzgsIDE3Mi4xNi4wLjAvMTIsIGxvY2FsaG9zdCwgKi5sb2NhbCwgY2FwdGl2ZS5hcHBsZS5jb20='), 'exclude-simple-hostnames = true', 'show-error-page-for-reject = true', '', è§£ç پ64('W1Byb3h5XQ==')];
  for (const و•°é‡ڈه€¼554 of èٹ‚ç‚¹هˆ—è،¨560) {
    const وœچهٹ،هگچç§°وŒ‡ç¤؛ = و•°é‡ڈه€¼554.sni;
    è،Œهˆ—è،¨555.push(`${و•°é‡ڈه€¼554.name} = ${è§£ç پ64('dHJvamFu')}, ${و•°é‡ڈه€¼554.server}, ${و•°é‡ڈه€¼554.port}, password=${و•°é‡ڈه€¼554.password}, sni=${وœچهٹ،هگچç§°وŒ‡ç¤؛}, ws=true, ws-path=${و•°é‡ڈه€¼554.path}, ws-headers=Host:${و•°é‡ڈه€¼554.host}, skip-cert-verify=false, tfo=true`);
  }
  if (!èٹ‚ç‚¹هˆ—è،¨560.length) {
    è،Œهˆ—è،¨555.push('Direct = direct');
  }
  è،Œهˆ—è،¨555.push('');
  è،Œهˆ—è،¨555.push(è§£ç پ64('W1Byb3h5IEdyb3VwXQ=='));
  const هˆ—è،¨553 = هگچç§°هˆ—è،¨557.length ? هگچç§°هˆ—è،¨557.join(', ') : 'DIRECT';
  è،Œهˆ—è،¨555.push(`ًںڑ€ èٹ‚ç‚¹é€‰و‹© = select, ًںژ¯ ه…¨çگƒç›´è؟‍, ${هˆ—è،¨553}`);
  è،Œهˆ—è،¨555.push(`ًںŒچ ه›½ه¤–هھ’ن½“ = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557)}`);
  è،Œهˆ—è،¨555.push(`ًں“؛ ه“”ه“©ه“”ه“© = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557, {
    directFirst: true
  })}`);
  è،Œهˆ—è،¨555.push(`ًں“¹ و²¹ç®،è§†é¢‘ = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  })}`);
  è،Œهˆ—è،¨555.push(`ًںژ¬ ه¥ˆé£‍è§†é¢‘ = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  })}`);
  è،Œهˆ—è،¨555.push(`ًں“² ç”µوٹ¥ن؟،وپ¯ = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557)}`);
  è،Œهˆ—è،¨555.push(`ًںŒگ è°·و­Œوœچهٹ، = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557)}`);
  è،Œهˆ—è،¨555.push(`ًں¤– OpenAI = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557)}`);
  è،Œهˆ—è،¨555.push(`â“‚ï¸ڈ ه¾®è½¯وœچهٹ، = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557, {
    directFirst: true
  })}`);
  è،Œهˆ—è،¨555.push(`ًںچژ è‹¹و‍œوœچهٹ، = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557, {
    directFirst: true
  })}`);
  è،Œهˆ—è،¨555.push(`ًںژ¯ ه…¨çگƒç›´è؟‍ = select, DIRECT`);
  è،Œهˆ—è،¨555.push(`ًں›‘ ه…¨çگƒو‹¦وˆھ = select, REJECT, DIRECT`);
  è،Œهˆ—è،¨555.push(`ًںگں و¼ڈç½‘ن¹‹é±¼ = select, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨557)}`);
  è،Œهˆ—è،¨555.push('');
  è،Œهˆ—è،¨555.push('[Rule]');
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('LocalAreaNetwork')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('UnBan')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('BanAD')},ًں›‘ ه…¨çگƒو‹¦وˆھ`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('BanProgramAD')},ًں›‘ ه…¨çگƒو‹¦وˆھ`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('GoogleFCM')},ًںŒگ è°·و­Œوœچهٹ،`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('GoogleCN')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('SteamCN')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Microsoft')},â“‚ï¸ڈ ه¾®è½¯وœچهٹ،`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Apple')},ًںچژ è‹¹و‍œوœچهٹ،`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Telegram')},ًں“² ç”µوٹ¥ن؟،وپ¯`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('OpenAi')},ًں¤– OpenAI`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Claude')},ًں¤– OpenAI`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Copilot')},ًں¤– OpenAI`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Netflix')},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('YouTube')},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Disney')},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('Spotify')},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('TikTok')},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('BiliBili')},ًں“؛ ه“”ه“©ه“”ه“©`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™(è§£ç پ64('UHJveHlNZWRpYQ=='))},ًںŒچ ه›½ه¤–هھ’ن½“`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™(è§£ç پ64('UHJveHlHRldsaXN0'))},ًںڑ€ èٹ‚ç‚¹é€‰و‹©`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('ChinaDomain')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('ChinaCompanyIp')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push(`RULE-SET,${ه€¼è§„هˆ™('ChinaIp')},ًںژ¯ ه…¨çگƒç›´è؟‍`);
  è،Œهˆ—è،¨555.push('GEOIP,CN,ًںژ¯ ه…¨çگƒç›´è؟‍');
  è،Œهˆ—è،¨555.push('FINAL,ًںگں و¼ڈç½‘ن¹‹é±¼,dns-failed');
  return è،Œهˆ—è،¨555.join('\n');
}

// ه†…éƒ¨ç”ںوˆگهڈ¦ن¸€ç±» ini ه®¢وˆ·ç«¯é…چç½®
function ç”ںوˆگه€¼ه€¼552(é“¾وژ¥هˆ—è،¨551) {
  const èٹ‚ç‚¹هˆ—è،¨550 = é“¾وژ¥هˆ—è،¨551.map(è§£و‍گه€¼é“¾وژ¥).filter(و•°é‡ڈه€¼549 => و•°é‡ڈه€¼549 && (و•°é‡ڈه€¼549.proto === è§£ç پ64('dmxlc3M=') || و•°é‡ڈه€¼549.proto === è§£ç پ64('dHJvamFu')));
  const هگچç§°هˆ—è،¨548 = èٹ‚ç‚¹هˆ—è،¨550.map(و•°é‡ڈه€¼547 => و•°é‡ڈه€¼547.name);
  const è،Œهˆ—è،¨546 = ['[General]', 'ip-mode = dual', `dns-server = ${(è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')},119.29.29.29,system`, 'doh-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query', è§£ç پ64('YWxsb3ctdWRwLXByb3h5ID0gdHJ1ZQ=='), 'allow-wifi-access = false', 'sni-sniffing = true', è§£ç پ64('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwxOTIuMTY4LjAuMC8xNiwxMC4wLjAuMC84LDE3Mi4xNi4wLjAvMTIsbG9jYWxob3N0LCoubG9jYWwsY2FwdGl2ZS5hcHBsZS5jb20='), 'bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32', '', è§£ç پ64('W1Byb3h5XQ==')];
  for (const و•°é‡ڈه€¼545 of èٹ‚ç‚¹هˆ—è،¨550) {
    if (و•°é‡ڈه€¼545.proto === è§£ç پ64('dmxlc3M=')) {
      const éƒ¨هˆ†هˆ—è،¨544 = [`${و•°é‡ڈه€¼545.server}`, `${و•°é‡ڈه€¼545.port}`, `udp=true`, `username=${و•°é‡ڈه€¼545.uuid}`, `transport=ws`, `path=${و•°é‡ڈه€¼545.path}`, `host=${و•°é‡ڈه€¼545.host}`, `over-tls=${و•°é‡ڈه€¼545.tls ? 'true' : 'false'}`];
      if (و•°é‡ڈه€¼545.tls) {
        éƒ¨هˆ†هˆ—è،¨544.push(`tls-name=${و•°é‡ڈه€¼545.sni}`);
        if (و•°é‡ڈه€¼545.alpn && و•°é‡ڈه€¼545.alpn.length) éƒ¨هˆ†هˆ—è،¨544.push(`alpn=${و•°é‡ڈه€¼545.alpn.join(':')}`);
        éƒ¨هˆ†هˆ—è،¨544.push(`skip-cert-verify=false`);
      }
      è،Œهˆ—è،¨546.push(`${و•°é‡ڈه€¼545.name} = ${è§£ç پ64('dmxlc3M=')},${éƒ¨هˆ†هˆ—è،¨544.join(',')}`);
    } else {
      const éƒ¨هˆ†هˆ—è،¨543 = [`${و•°é‡ڈه€¼545.server}`, `${و•°é‡ڈه€¼545.port}`, `password=${و•°é‡ڈه€¼545.password}`, `transport=ws`, `path=${و•°é‡ڈه€¼545.path}`, `host=${و•°é‡ڈه€¼545.host}`, `over-tls=true`, `tls-name=${و•°é‡ڈه€¼545.sni}`];
      if (و•°é‡ڈه€¼545.alpn && و•°é‡ڈه€¼545.alpn.length) éƒ¨هˆ†هˆ—è،¨543.push(`alpn=${و•°é‡ڈه€¼545.alpn.join(':')}`);
      éƒ¨هˆ†هˆ—è،¨543.push(`skip-cert-verify=false`);
      è،Œهˆ—è،¨546.push(`${و•°é‡ڈه€¼545.name} = ${è§£ç پ64('dHJvamFu')},${éƒ¨هˆ†هˆ—è،¨543.join(',')}`);
    }
  }
  è،Œهˆ—è،¨546.push('');
  è،Œهˆ—è،¨546.push(è§£ç پ64('W1Byb3h5IEdyb3VwXQ=='));
  const هˆ—è،¨542 = هگچç§°هˆ—è،¨548.length ? هگچç§°هˆ—è،¨548.join(',') : 'DIRECT';
  è،Œهˆ—è،¨546.push(`ًںڑ€ èٹ‚ç‚¹é€‰و‹© = select,ًںژ¯ ه…¨çگƒç›´è؟‍,${هˆ—è،¨542}`);
  è،Œهˆ—è،¨546.push(`ًںŒچ ه›½ه¤–هھ’ن½“ = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًں“؛ ه“”ه“©ه“”ه“© = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    directFirst: true,
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًں“¹ و²¹ç®،è§†é¢‘ = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“'],
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًںژ¬ ه¥ˆé£‍è§†é¢‘ = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“'],
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًں“² ç”µوٹ¥ن؟،وپ¯ = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًںŒگ è°·و­Œوœچهٹ، = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًں¤– OpenAI = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`â“‚ï¸ڈ ه¾®è½¯وœچهٹ، = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    directFirst: true,
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًںچژ è‹¹و‍œوœچهٹ، = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    directFirst: true,
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push(`ًںژ¯ ه…¨çگƒç›´è؟‍ = select,DIRECT`);
  è،Œهˆ—è،¨546.push(`ًں›‘ ه…¨çگƒو‹¦وˆھ = select,REJECT,DIRECT`);
  è،Œهˆ—è،¨546.push(`ًںگں و¼ڈç½‘ن¹‹é±¼ = select,${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨548, {
    compact: true
  })}`);
  è،Œهˆ—è،¨546.push('');
  è،Œهˆ—è،¨546.push('[Remote Rule]');
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('LocalAreaNetwork')}, policy=ًںژ¯ ه…¨çگƒç›´è؟‍, tag=ه±€هںںç½‘, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('BanAD')}, policy=ًں›‘ ه…¨çگƒو‹¦وˆھ, tag=ه¹؟ه‘ٹو‹¦وˆھ, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('BanProgramAD')}, policy=ًں›‘ ه…¨çگƒو‹¦وˆھ, tag=ه؛”ç”¨ه¹؟ه‘ٹ, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('GoogleCN')}, policy=ًںژ¯ ه…¨çگƒç›´è؟‍, tag=GoogleCN, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('SteamCN')}, policy=ًںژ¯ ه…¨çگƒç›´è؟‍, tag=SteamCN, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Microsoft')}, policy=â“‚ï¸ڈ ه¾®è½¯وœچهٹ،, tag=ه¾®è½¯, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Apple')}, policy=ًںچژ è‹¹و‍œوœچهٹ،, tag=è‹¹و‍œ, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Telegram')}, policy=ًں“² ç”µوٹ¥ن؟،وپ¯, tag=ç”µوٹ¥, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('OpenAi')}, policy=ًں¤– OpenAI, tag=OpenAI, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Netflix')}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=Netflix, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('YouTube')}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=YouTube, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Disney')}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=Disney, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('Spotify')}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=Spotify, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('TikTok')}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=TikTok, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('BiliBili')}, policy=ًں“؛ ه“”ه“©ه“”ه“©, tag=ه“”ه“©ه“”ه“©, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™(è§£ç پ64('UHJveHlNZWRpYQ=='))}, policy=ًںŒچ ه›½ه¤–هھ’ن½“, tag=${è§£ç پ64('5Luj55CG5aqS5L2T')}, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™(è§£ç پ64('UHJveHlHRldsaXN0'))}, policy=ًںڑ€ èٹ‚ç‚¹é€‰و‹©, tag=${è§£ç پ64('5Luj55CG5YiX6KGo')}, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('ChinaDomain')}, policy=ًںژ¯ ه…¨çگƒç›´è؟‍, tag=ن¸­ه›½هںںهگچ, enabled=true`);
  è،Œهˆ—è،¨546.push(`${ه€¼è§„هˆ™('ChinaIp')}, policy=ًںژ¯ ه…¨çگƒç›´è؟‍, tag=ن¸­ه›½IP, enabled=true`);
  è،Œهˆ—è،¨546.push('');
  è،Œهˆ—è،¨546.push('[Rule]');
  è،Œهˆ—è،¨546.push('GEOIP,CN,ًںژ¯ ه…¨çگƒç›´è؟‍');
  è،Œهˆ—è،¨546.push('FINAL,ًںگں و¼ڈç½‘ن¹‹é±¼');
  return è،Œهˆ—è،¨546.join('\n');
}

// ه†…éƒ¨ç”ںوˆگهœˆهڈ‰é…چç½®ï¼ˆه®Œو•´ ACL4SSR è؟œç«¯ filter èµ„و؛گï¼‰
function ç”ںوˆگه€¼ه€¼(é“¾وژ¥هˆ—è،¨541) {
  const èٹ‚ç‚¹هˆ—è،¨ = é“¾وژ¥هˆ—è،¨541.map(è§£و‍گه€¼é“¾وژ¥).filter(و•°é‡ڈه€¼540 => و•°é‡ڈه€¼540 && (و•°é‡ڈه€¼540.proto === è§£ç پ64('dmxlc3M=') || و•°é‡ڈه€¼540.proto === è§£ç پ64('dHJvamFu')));
  const هگچç§°هˆ—è،¨ = èٹ‚ç‚¹هˆ—è،¨.map(و•°é‡ڈه€¼539 => و•°é‡ڈه€¼539.name);
  const هœˆهڈ‰هں؛ç،€é…چç½® = è§£ç پ64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL2JsYWNrbWF0cml4Ny9pb3NfcnVsZV9zY3JpcHRAbWFzdGVyL3J1bGUvUXVhbnR1bXVsdFg=');
  const è،Œهˆ—è،¨538 = ['[general]', 'network_check_url=http://www.gstatic.com/generate_204', 'server_check_url=http://www.gstatic.com/generate_204', 'profile_img_url=https://fastly.jsdelivr.net/gh/byJoey/cfnew@main/snippets/logo.png', 'dns_exclusion_list=*.cmpassport.com, *.jegotrip.com.cn, *.icloud.com, *.icloud.com.cn, *.apple.com, *.weibo.com, *.qq.com', 'running_mode_trigger=filter', '', '[dns]', `server=${(è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')}`, 'server=119.29.29.29', 'server=https://223.5.5.5/dns-query', 'server=https://1.12.12.12/dns-query', '', '[server_local]'];
  for (const و•°é‡ڈه€¼537 of èٹ‚ç‚¹هˆ—è،¨) {
    if (و•°é‡ڈه€¼537.proto === è§£ç پ64('dmxlc3M=')) {
      const éƒ¨هˆ†هˆ—è،¨536 = [`${و•°é‡ڈه€¼537.server}:${و•°é‡ڈه€¼537.port}`, `method=none`, `password=${و•°é‡ڈه€¼537.uuid}`, `obfs=${و•°é‡ڈه€¼537.tls ? 'wss' : 'ws'}`, `obfs-host=${و•°é‡ڈه€¼537.host}`, `obfs-uri=${و•°é‡ڈه€¼537.path}`];
      if (و•°é‡ڈه€¼537.tls) éƒ¨هˆ†هˆ—è،¨536.push(`tls-verification=true`, `tls13=true`);
      éƒ¨هˆ†هˆ—è،¨536.push(`tag=${و•°é‡ڈه€¼537.name}`);
      è،Œهˆ—è،¨538.push(`${è§£ç پ64('dmxlc3M=')}=${éƒ¨هˆ†هˆ—è،¨536.join(', ')}`);
    } else {
      const éƒ¨هˆ†هˆ—è،¨535 = [`${و•°é‡ڈه€¼537.server}:${و•°é‡ڈه€¼537.port}`, `password=${و•°é‡ڈه€¼537.password}`, `over-tls=true`, `tls-host=${و•°é‡ڈه€¼537.sni}`, `obfs=wss`, `obfs-host=${و•°é‡ڈه€¼537.host}`, `obfs-uri=${و•°é‡ڈه€¼537.path}`, `tls-verification=true`, `tag=${و•°é‡ڈه€¼537.name}`];
      è،Œهˆ—è،¨538.push(`${è§£ç پ64('dHJvamFu')}=${éƒ¨هˆ†هˆ—è،¨535.join(', ')}`);
    }
  }
  è،Œهˆ—è،¨538.push('');
  è،Œهˆ—è،¨538.push('[policy]');
  const هˆ—è،¨534 = هگچç§°هˆ—è،¨.length ? هگچç§°هˆ—è،¨.join(', ') : 'direct';
  è،Œهˆ—è،¨538.push(`static=ًںڑ€ èٹ‚ç‚¹é€‰و‹©, ${هˆ—è،¨534}, direct, img-url=${è§£ç پ64('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0tvb2xzb24vUXVyZUBtYXN0ZXIvSWNvblNldC9Db2xvci9Qcm94eS5wbmc=')}`);
  è،Œهˆ—è،¨538.push(`static=ًںŒچ ه›½ه¤–هھ’ن½“, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png`);
  è،Œهˆ—è،¨538.push(`static=ًں“؛ ه“”ه“©ه“”ه“©, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨, {
    directFirst: true
  })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png`);
  è،Œهˆ—è،¨538.push(`static=ًں“¹ و²¹ç®،è§†é¢‘, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png`);
  è،Œهˆ—è،¨538.push(`static=ًںژ¬ ه¥ˆé£‍è§†é¢‘, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨, {
    extraGroups: ['ًںŒچ ه›½ه¤–هھ’ن½“']
  })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png`);
  è،Œهˆ—è،¨538.push(`static=ًں“² ç”µوٹ¥ن؟،وپ¯, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png`);
  è،Œهˆ—è،¨538.push(`static=ًںŒگ è°·و­Œوœچهٹ،, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png`);
  è،Œهˆ—è،¨538.push(`static=ًں¤– OpenAI, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png`);
  è،Œهˆ—è،¨538.push(`static=â“‚ï¸ڈ ه¾®è½¯وœچهٹ،, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨, {
    directFirst: true
  })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png`);
  è،Œهˆ—è،¨538.push(`static=ًںچژ è‹¹و‍œوœچهٹ،, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨, {
    directFirst: true
  })}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png`);
  è،Œهˆ—è،¨538.push(`static=ًںژ¯ ه…¨çگƒç›´è؟‍, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png`);
  è،Œهˆ—è،¨538.push(`static=ًں›‘ ه…¨çگƒو‹¦وˆھ, reject, direct, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png`);
  è،Œهˆ—è،¨538.push(`static=ًںگں و¼ڈç½‘ن¹‹é±¼, ${ه¤„çگ†ه€¼ه€¼هˆ—è،¨(هگچç§°هˆ—è،¨)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png`);
  è،Œهˆ—è،¨538.push('');
  è،Œهˆ—è،¨538.push('[filter_remote]');
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Lan/Lan.list, tag=ه±€هںںç½‘, force-policy=ًںژ¯ ه…¨çگƒç›´è؟‍, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Advertising/Advertising.list, tag=ه¹؟ه‘ٹو‹¦وˆھ, force-policy=ًں›‘ ه…¨çگƒو‹¦وˆھ, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Microsoft/Microsoft.list, tag=ه¾®è½¯, force-policy=â“‚ï¸ڈ ه¾®è½¯وœچهٹ،, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Apple/Apple.list, tag=è‹¹و‍œ, force-policy=ًںچژ è‹¹و‍œوœچهٹ،, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Telegram/Telegram.list, tag=ç”µوٹ¥, force-policy=ًں“² ç”µوٹ¥ن؟،وپ¯, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Google/Google.list, tag=è°·و­Œ, force-policy=ًںŒگ è°·و­Œوœچهٹ،, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/OpenAI/OpenAI.list, tag=OpenAI, force-policy=ًں¤– OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Claude/Claude.list, tag=Claude, force-policy=ًں¤– OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/YouTube/YouTube.list, tag=YouTube, force-policy=ًںŒچ ه›½ه¤–هھ’ن½“, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Netflix/Netflix.list, tag=Netflix, force-policy=ًںŒچ ه›½ه¤–هھ’ن½“, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Disney/Disney.list, tag=Disney, force-policy=ًںŒچ ه›½ه¤–هھ’ن½“, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Spotify/Spotify.list, tag=Spotify, force-policy=ًںŒچ ه›½ه¤–هھ’ن½“, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/TikTok/TikTok.list, tag=TikTok, force-policy=ًںŒچ ه›½ه¤–هھ’ن½“, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/BiliBili/BiliBili.list, tag=ه“”ه“©ه“”ه“©, force-policy=ًں“؛ ه“”ه“©ه“”ه“©, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/Global/Global.list, tag=ه…¨çگƒهٹ é€ں, force-policy=ًںڑ€ èٹ‚ç‚¹é€‰و‹©, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push(`${هœˆهڈ‰هں؛ç،€é…چç½®}/ChinaMax/ChinaMax.list, tag=ن¸­ه›½ç›´è؟‍, force-policy=ًںژ¯ ه…¨çگƒç›´è؟‍, update-interval=86400, opt-parser=false, enabled=true`);
  è،Œهˆ—è،¨538.push('');
  è،Œهˆ—è،¨538.push('[filter_local]');
  è،Œهˆ—è،¨538.push('geoip, cn, ًںژ¯ ه…¨çگƒç›´è؟‍');
  è،Œهˆ—è،¨538.push('final, ًںگں و¼ڈç½‘ن¹‹é±¼');
  return è،Œهˆ—è،¨538.join('\n');
}

// ه…¼ه®¹و—§è°ƒç”¨هگچ
async function ç”ںوˆگه€¼é…چç½®533(é“¾وژ¥هˆ—è،¨532) {
  return ç”ںوˆگه€¼ه€¼589(é“¾وژ¥هˆ—è،¨532);
}
function ç”ںوˆگه€¼é…چç½®531(é“¾وژ¥هˆ—è،¨530) {
  return ç”ںوˆگه€¼ه€¼562(é“¾وژ¥هˆ—è،¨530);
}
function ç”ںوˆگه€¼é…چç½®529(é“¾وژ¥هˆ—è،¨528) {
  return ç”ںوˆگه€¼ه€¼552(é“¾وژ¥هˆ—è،¨528);
}
function ç”ںوˆگه€¼ه€¼é…چç½®527(é“¾وژ¥هˆ—è،¨526) {
  return ç”ںوˆگه€¼ه€¼(é“¾وژ¥هˆ—è،¨526);
}
function ç”ںوˆگه€¼ه€¼é…چç½®(é“¾وژ¥هˆ—è،¨525) {
  return ç”ںوˆگه€¼ه€¼و•°وچ®ه¯¹è±،(é“¾وژ¥هˆ—è،¨525);
}
function ç”ںوˆگه€¼é…چç½®(é“¾وژ¥هˆ—è،¨524) {
  return btoa(é“¾وژ¥هˆ—è،¨524.join('\n'));
}
function ç”ںوˆگه€¼2ه€¼é…چç½®(é“¾وژ¥هˆ—è،¨523) {
  return btoa(é“¾وژ¥هˆ—è،¨523.join('\n'));
}

// ه…¨ه±€هڈکé‡ڈه­که‚¨ECHè°ƒè¯•ن؟،وپ¯
let هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = '';
async function èژ·هڈ–هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®(هںںهگچ522) {
  if (!هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = 'ECHهٹںèƒ½ه·²ç¦پç”¨';
    return null;
  }
  هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = '';
  const è°ƒè¯•و­¥éھ¤ = [];
  try {
    // ن¼که…ˆن½؟ç”¨ Google DNS وں¥è¯¢ cloudflare-ech.com çڑ„ ECH é…چç½®
    è°ƒè¯•و­¥éھ¤.push('ه°‌è¯•ن½؟ç”¨ Google DNS وں¥è¯¢ cloudflare-ech.com...');
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچç½‘ه‌€ = `https://v.recipes/dns/dns.google/dns-query?name=cloudflare-ech.com&type=65`;
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه“چه؛” = await fetch(هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچç½‘ه‌€, {
      headers: {
        'Accept': 'application/json'
      }
    });
    è°ƒè¯•و­¥éھ¤.push(`Google DNS ه“چه؛”çٹ¶و€پ: ${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه“چه؛”.status}`);
    if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه“چه؛”.ok) {
      const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ® = await هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه“چه؛”.json();
      è°ƒè¯•و­¥éھ¤.push(`Google DNS è؟”ه›‍و•°وچ®: ${JSON.stringify(هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ®).substring(0, 200)}...`);
      if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ®.Answer && هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ®.Answer.length > 0) {
        è°ƒè¯•و­¥éھ¤.push(`و‰¾هˆ° ${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ®.Answer.length} و‌،ç­”و،ˆè®°ه½•`);
        for (const وœ¬هœ°ه€¼521 of هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™و•°وچ®.Answer) {
          if (وœ¬هœ°ه€¼521.data) {
            è°ƒè¯•و­¥éھ¤.push(`è§£و‍گç­”و،ˆو•°وچ®: ${typeof وœ¬هœ°ه€¼521.data}, é•؟ه؛¦: ${String(وœ¬هœ°ه€¼521.data).length}`);
            // Google DNS è؟”ه›‍çڑ„و•°وچ®و ¼ه¼ڈهڈ¯èƒ½ن¸چهگŒï¼Œéœ€è¦پè§£و‍گ
            const و•°وچ®ه­—ç¬¦ن¸²520 = typeof وœ¬هœ°ه€¼521.data === 'string' ? وœ¬هœ°ه€¼521.data : JSON.stringify(وœ¬هœ°ه€¼521.data);
            const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼519 = و•°وچ®ه­—ç¬¦ن¸²520.match(/ech=([^\s"']+)/);
            if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼519 && هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼519[1]) {
              هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâœ… وˆگهٹںن»ژ Google DNS èژ·هڈ– ECH é…چç½®';
              return هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼519[1];
            }
            // ه¦‚و‍œو²،وœ‰و‰¾هˆ°ï¼Œه°‌è¯•ç›´وژ¥ن½؟ç”¨ dataï¼ˆهڈ¯èƒ½وک¯ base64 ç¼–ç پçڑ„ï¼‰
            if (وœ¬هœ°ه€¼521.data && !و•°وچ®ه­—ç¬¦ن¸²520.includes('ech=')) {
              try {
                const ه·²è§£ç پ518 = atob(وœ¬هœ°ه€¼521.data);
                è°ƒè¯•و­¥éھ¤.push(`ه°‌è¯• base64 è§£ç پï¼Œè§£ç پهگژé•؟ه؛¦: ${ه·²è§£ç پ518.length}`);
                const ه·²è§£ç په€¼517 = ه·²è§£ç پ518.match(/ech=([^\s"']+)/);
                if (ه·²è§£ç په€¼517 && ه·²è§£ç په€¼517[1]) {
                  هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâœ… وˆگهٹںن»ژ Google DNS (base64è§£ç پ) èژ·هڈ– ECH é…چç½®';
                  return ه·²è§£ç په€¼517[1];
                }
              } catch (ن؛‹ن»¶ه€¼516) {
                è°ƒè¯•و­¥éھ¤.push(`base64 è§£ç په¤±è´¥: ${ن؛‹ن»¶ه€¼516.message}`);
              }
            }
          }
        }
      } else {
        è°ƒè¯•و­¥éھ¤.push('Google DNS وœھè؟”ه›‍ç­”و،ˆè®°ه½•');
      }
    } else {
      è°ƒè¯•و­¥éھ¤.push(`Google DNS è¯·و±‚ه¤±è´¥: ${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه“چه؛”.status}`);
    }

    // ه¦‚و‍œ cloudflare-ech.com وں¥è¯¢ه¤±è´¥ï¼Œه°‌è¯•ن½؟ç”¨ Google DNS وں¥è¯¢ç›®و ‡هںںهگچçڑ„ HTTPS è®°ه½•
    è°ƒè¯•و­¥éھ¤.push(`ه°‌è¯•ن½؟ç”¨ Google DNS وں¥è¯¢ç›®و ‡هںںهگچ ${هںںهگچ522}...`);
    const هٹ ه¯†هںںهگچوں¥è¯¢ç½‘ه‌€ = `https://v.recipes/dns/dns.google/dns-query?name=${encodeURIComponent(هںںهگچ522)}&type=65`;
    const ه“چه؛”515 = await fetch(هٹ ه¯†هںںهگچوں¥è¯¢ç½‘ه‌€, {
      headers: {
        'Accept': 'application/json'
      }
    });
    è°ƒè¯•و­¥éھ¤.push(`Google DNS (ç›®و ‡هںںهگچ) ه“چه؛”çٹ¶و€پ: ${ه“چه؛”515.status}`);
    if (ه“چه؛”515.ok) {
      const و•°وچ®514 = await ه“چه؛”515.json();
      è°ƒè¯•و­¥éھ¤.push(`Google DNS (ç›®و ‡هںںهگچ) è؟”ه›‍و•°وچ®: ${JSON.stringify(و•°وچ®514).substring(0, 200)}...`);
      if (و•°وچ®514.Answer && و•°وچ®514.Answer.length > 0) {
        è°ƒè¯•و­¥éھ¤.push(`و‰¾هˆ° ${و•°وچ®514.Answer.length} و‌،ç­”و،ˆè®°ه½•`);
        for (const وœ¬هœ°ه€¼513 of و•°وچ®514.Answer) {
          if (وœ¬هœ°ه€¼513.data) {
            const و•°وچ®ه­—ç¬¦ن¸² = typeof وœ¬هœ°ه€¼513.data === 'string' ? وœ¬هœ°ه€¼513.data : JSON.stringify(وœ¬هœ°ه€¼513.data);
            const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼512 = و•°وچ®ه­—ç¬¦ن¸².match(/ech=([^\s"']+)/);
            if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼512 && هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼512[1]) {
              هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâœ… وˆگهٹںن»ژ Google DNS (ç›®و ‡هںںهگچ) èژ·هڈ– ECH é…چç½®';
              return هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼512[1];
            }
            // ه°‌è¯• base64 è§£ç پ
            try {
              const ه·²è§£ç پ511 = atob(وœ¬هœ°ه€¼513.data);
              const ه·²è§£ç په€¼ = ه·²è§£ç پ511.match(/ech=([^\s"']+)/);
              if (ه·²è§£ç په€¼ && ه·²è§£ç په€¼[1]) {
                هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâœ… وˆگهٹںن»ژ Google DNS (ç›®و ‡هںںهگچ, base64è§£ç پ) èژ·هڈ– ECH é…چç½®';
                return ه·²è§£ç په€¼[1];
              }
            } catch (ن؛‹ن»¶ه€¼510) {
              è°ƒè¯•و­¥éھ¤.push(`base64 è§£ç په¤±è´¥: ${ن؛‹ن»¶ه€¼510.message}`);
            }
          }
        }
      } else {
        è°ƒè¯•و­¥éھ¤.push('Google DNS (ç›®و ‡هںںهگچ) وœھè؟”ه›‍ç­”و،ˆè®°ه½•');
      }
    } else {
      è°ƒè¯•و­¥éھ¤.push(`Google DNS (ç›®و ‡هںںهگچ) è¯·و±‚ه¤±è´¥: ${ه“چه؛”515.status}`);
    }

    // ه¦‚و‍œ Google DNS ه¤±è´¥ï¼Œه°‌è¯•ن½؟ç”¨ Cloudflare DNS ن½œن¸؛ه¤‡é€‰
    è°ƒè¯•و­¥éھ¤.push('ه°‌è¯•ن½؟ç”¨ Cloudflare DNS ن½œن¸؛ه¤‡é€‰...');
    const ن؛‘ه¢™هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ç½‘ه‌€ = `https://cloudflare-dns.com/dns-query?name=cloudflare-ech.com&type=65`;
    const ن؛‘ه¢™ه“چه؛” = await fetch(ن؛‘ه¢™هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ç½‘ه‌€, {
      headers: {
        'Accept': 'application/dns-json'
      }
    });
    è°ƒè¯•و­¥éھ¤.push(`Cloudflare DNS ه“چه؛”çٹ¶و€پ: ${ن؛‘ه¢™ه“چه؛”.status}`);
    if (ن؛‘ه¢™ه“چه؛”.ok) {
      const ن؛‘ه¢™و•°وچ® = await ن؛‘ه¢™ه“چه؛”.json();
      è°ƒè¯•و­¥éھ¤.push(`Cloudflare DNS è؟”ه›‍و•°وچ®: ${JSON.stringify(ن؛‘ه¢™و•°وچ®).substring(0, 200)}...`);
      if (ن؛‘ه¢™و•°وچ®.Answer && ن؛‘ه¢™و•°وچ®.Answer.length > 0) {
        è°ƒè¯•و­¥éھ¤.push(`و‰¾هˆ° ${ن؛‘ه¢™و•°وچ®.Answer.length} و‌،ç­”و،ˆè®°ه½•`);
        for (const وœ¬هœ°ه€¼509 of ن؛‘ه¢™و•°وچ®.Answer) {
          if (وœ¬هœ°ه€¼509.data) {
            const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼ = وœ¬هœ°ه€¼509.data.match(/ech=([^\s"']+)/);
            if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼ && هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼[1]) {
              هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâœ… وˆگهٹںن»ژ Cloudflare DNS èژ·هڈ– ECH é…چç½®';
              return هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه€¼[1];
            }
          }
        }
      } else {
        è°ƒè¯•و­¥éھ¤.push('Cloudflare DNS وœھè؟”ه›‍ç­”و،ˆè®°ه½•');
      }
    } else {
      è°ƒè¯•و­¥éھ¤.push(`Cloudflare DNS è¯·و±‚ه¤±è´¥: ${ن؛‘ه¢™ه“چه؛”.status}`);
    }
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâ‌Œ و‰€وœ‰DNSوں¥è¯¢ه‌‡ه¤±è´¥ï¼Œوœھèژ·هڈ–هˆ°ECHé…چç½®';
    return null;
  } catch (é”™è¯¯508) {
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™è°ƒè¯•ه€¼ = è°ƒè¯•و­¥éھ¤.join('\\n') + '\\nâ‌Œ èژ·هڈ–ECHé…چç½®و—¶هڈ‘ç”ںé”™è¯¯: ' + é”™è¯¯508.message;
    return null;
  }
}
async function ه¤„çگ†è®¢éک…è¯·و±‚(è¯·و±‚507, ç”¨وˆ·506, ç½‘ه‌€505 = null) {
  if (!ç½‘ه‌€505) ç½‘ه‌€505 = new URL(è¯·و±‚507.url);
  const وœ€ç»ˆé“¾وژ¥هˆ—è،¨ = [];
  const ه·¥ن½œه™¨هںںهگچ504 = ç½‘ه‌€505.hostname;
  const ç›®و ‡503 = ç½‘ه‌€505.searchParams.get('target') || 'base64';
  const هˆ«هگچه‘½هگچه™¨502 = هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(false);

  // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œن½؟ç”¨è‡ھه®ڑن¹‰ه€¼
  let هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501 = null;
  if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
    const هںںهگچç³»ç»ںه€¼500 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ499 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501 = `${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ499}+${هںںهگچç³»ç»ںه€¼500}`;
  }
  async function و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(هˆ—è،¨498) {
    if (هگ¯ç”¨وکژو–‡) {
      وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...ç”ںوˆگé“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨498, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502));
    }
    if (هگ¯ç”¨وœ¨é©¬) {
      وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...(await ç”ںوˆگوœ¨é©¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨498, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502)));
    }
    if (هگ¯ç”¨و‰©ه±•ن¼ è¾“) {
      وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...ç”ںوˆگو‰©ه±•è¶…و–‡وœ¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨498, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502));
    }
  }
  if (هگ¯ç”¨هژںç”ںهœ°ه‌€) {
    if (ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ === 'CUSTOM') {
      const هژںç”ںهˆ—è،¨497 = [{
        ip: ه·¥ن½œه™¨هںںهگچ504,
        isp: 'هژںç”ںهœ°ه‌€'
      }];
      await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(هژںç”ںهˆ—è،¨497);
    } else {
      try {
        const هژںç”ںهˆ—è،¨496 = [{
          ip: ه·¥ن½œه™¨هںںهگچ504,
          isp: 'هژںç”ںهœ°ه‌€'
        }];
        await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(هژںç”ںهˆ—è،¨496);
      } catch (é”™è¯¯495) {
        if (!ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛) {
          ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚507);
        }
        const ه€¼ه¤‡ç”¨هœ°ه‌€494 = await èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛);
        if (ه€¼ه¤‡ç”¨هœ°ه‌€494) {
          ه›‍é€€هœ°ه‌€ = ه€¼ه¤‡ç”¨هœ°ه‌€494.domain + ':' + ه€¼ه¤‡ç”¨هœ°ه‌€494.port;
          const ه¤‡ç”¨هˆ—è،¨493 = [{
            ip: ه€¼ه¤‡ç”¨هœ°ه‌€494.domain,
            isp: è§£ç پ64('UHJveHlJUC0=') + ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛
          }];
          await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(ه¤‡ç”¨هˆ—è،¨493);
        } else {
          const هژںç”ںهˆ—è،¨ = [{
            ip: ه·¥ن½œه™¨هںںهگچ504,
            isp: 'هژںç”ںهœ°ه‌€'
          }];
          await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(هژںç”ںهˆ—è،¨);
        }
      }
    }
  }
  const وک¯هگ¦وœ‰è‡ھه®ڑن¹‰ن¼کé€‰ = è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨.length > 0 || è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨.length > 0;
  if (ç¦پç”¨ن¼کé€‰) {} else if (وک¯هگ¦وœ‰è‡ھه®ڑن¹‰ن¼کé€‰) {
    if (è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨.length > 0 && هگ¯ç”¨ن¼کé€‰هœ°ه‌€) {
      await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨);
    }
    if (è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨.length > 0 && هگ¯ç”¨ن¼کé€‰هںںهگچ) {
      const è‡ھه®ڑن¹‰هںںهگچهˆ—è،¨ = è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨.map(ن¸په€¼492 => ({
        ip: ن¸په€¼492.domain,
        isp: ن¸په€¼492.name || ن¸په€¼492.domain
      }));
      await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(è‡ھه®ڑن¹‰هںںهگچهˆ—è،¨);
    }
  } else {
    if (هگ¯ç”¨ن¼کé€‰هںںهگچ) {
      const هںںهگچهˆ—è،¨ = ç›´è؟‍هںںهگچهˆ—è،¨.map(ن¸په€¼491 => ({
        ip: ن¸په€¼491.domain,
        isp: ن¸په€¼491.name || ن¸په€¼491.domain
      }));
      await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(هںںهگچهˆ—è،¨);
    }
    if (هگ¯ç”¨ن¼کé€‰هœ°ه‌€) {
      if (!ن¼کé€‰هœ°ه‌€و؛گ) {
        try {
          const ه€¼هœ°ه‌€هˆ—è،¨490 = await èژ·هڈ–ه€¼هœ°ه‌€هˆ—è،¨();
          if (ه€¼هœ°ه‌€هˆ—è،¨490.length > 0) {
            await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(ه€¼هœ°ه‌€هˆ—è،¨490);
          }
        } catch (é”™è¯¯489) {
          if (!ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛) {
            ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚507);
          }
          const ه€¼ه¤‡ç”¨هœ°ه‌€488 = await èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛);
          if (ه€¼ه¤‡ç”¨هœ°ه‌€488) {
            ه›‍é€€هœ°ه‌€ = ه€¼ه¤‡ç”¨هœ°ه‌€488.domain + ':' + ه€¼ه¤‡ç”¨هœ°ه‌€488.port;
            const ه¤‡ç”¨هˆ—è،¨487 = [{
              ip: ه€¼ه¤‡ç”¨هœ°ه‌€488.domain,
              isp: è§£ç پ64('UHJveHlJUC0=') + ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛
            }];
            await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(ه¤‡ç”¨هˆ—è،¨487);
          }
        }
      }
    }
    if (هگ¯ç”¨ن»“ه؛“ن¼کé€‰) {
      try {
        const و–°هœ°ه‌€هˆ—è،¨ = await èژ·هڈ–ه€¼è§£و‍گو–°هœ°ه‌€هˆ—è،¨();
        if (و–°هœ°ه‌€هˆ—è،¨.length > 0) {
          if (هگ¯ç”¨وکژو–‡) {
            وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...ç”ںوˆگé“¾وژ¥هˆ—è،¨و‌¥و؛گو–°هœ°ه‌€هˆ—è،¨(و–°هœ°ه‌€هˆ—è،¨, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502));
          }
          if (هگ¯ç”¨وœ¨é©¬) {
            وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...(await ç”ںوˆگوœ¨é©¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو–°هœ°ه‌€هˆ—è،¨(و–°هœ°ه‌€هˆ—è،¨, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502)));
          }
          if (هگ¯ç”¨و‰©ه±•ن¼ è¾“) {
            وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(...ç”ںوˆگو‰©ه±•è¶…و–‡وœ¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(و–°هœ°ه‌€هˆ—è،¨, ç”¨وˆ·506, ه·¥ن½œه™¨هںںهگچ504, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501, false, هˆ«هگچه‘½هگچه™¨502));
          }
        }
      } catch (é”™è¯¯486) {
        if (!ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛) {
          ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚507);
        }
        const ه€¼ه¤‡ç”¨هœ°ه‌€485 = await èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛);
        if (ه€¼ه¤‡ç”¨هœ°ه‌€485) {
          ه›‍é€€هœ°ه‌€ = ه€¼ه¤‡ç”¨هœ°ه‌€485.domain + ':' + ه€¼ه¤‡ç”¨هœ°ه‌€485.port;
          const ه¤‡ç”¨هˆ—è،¨ = [{
            ip: ه€¼ه¤‡ç”¨هœ°ه‌€485.domain,
            isp: è§£ç پ64('UHJveHlJUC0=') + ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛
          }];
          await و·»هٹ èٹ‚ç‚¹هˆ—è،¨و‌¥و؛گهˆ—è،¨(ه¤‡ç”¨هˆ—è،¨);
        }
      }
    }
  }
  if (وœ€ç»ˆé“¾وژ¥هˆ—è،¨.length === 0) {
    const é”™è¯¯ه¤‡و³¨ = "و‰€وœ‰èٹ‚ç‚¹èژ·هڈ–ه¤±è´¥";
    const هچڈè®®484 = atob('dmxlc3M=');
    const é”™è¯¯é“¾وژ¥ = `${هچڈè®®484}://00000000-0000-0000-0000-000000000000@127.0.0.1:80?encryption=none&security=none&type=ws&host=error.com&path=%2F#${encodeURIComponent(é”™è¯¯ه¤‡و³¨)}`;
    وœ€ç»ˆé“¾وژ¥هˆ—è،¨.push(é”™è¯¯é“¾وژ¥);
  }
  let è®¢éک…ه†…ه®¹;
  let ه†…ه®¹ç±»ه‍‹483 = 'text/plain; charset=utf-8';
  switch (ç›®و ‡503.toLowerCase()) {
    case atob('Y2xhc2g='):
    case atob('Y2xhc2hy'):
    case è§£ç پ64('c3Rhc2g='):
    case 'meta':
    case è§£ç پ64('Y2xhc2htZXRh'):
      è®¢éک…ه†…ه®¹ = ç”ںوˆگه€¼ه€¼589(وœ€ç»ˆé“¾وژ¥هˆ—è،¨);
      ه†…ه®¹ç±»ه‍‹483 = 'text/yaml; charset=utf-8';
      break;
    case atob('c3VyZ2U='):
    case atob('c3VyZ2Uy'):
    case atob('c3VyZ2Uz'):
    case atob('c3VyZ2U0'):
      è®¢éک…ه†…ه®¹ = ç”ںوˆگه€¼ه€¼562(وœ€ç»ˆé“¾وژ¥هˆ—è،¨);
      ه†…ه®¹ç±»ه‍‹483 = 'text/plain; charset=utf-8';
      break;
    case atob('cXVhbnR1bXVsdA=='):
    case atob('cXVhbng='):
    case è§£ç پ64('cXVhbng='):
      è®¢éک…ه†…ه®¹ = ç”ںوˆگه€¼ه€¼(وœ€ç»ˆé“¾وژ¥هˆ—è،¨);
      ه†…ه®¹ç±»ه‍‹483 = 'text/plain; charset=utf-8';
      break;
    case atob('c3M='):
    case atob('c3Ny'):
      è®¢éک…ه†…ه®¹ = btoa(وœ€ç»ˆé“¾وژ¥هˆ—è،¨.join('\n'));
      break;
    case atob('djJyYXk='):
      è®¢éک…ه†…ه®¹ = btoa(وœ€ç»ˆé“¾وژ¥هˆ—è،¨.join('\n'));
      break;
    case atob('bG9vbg=='):
      è®¢éک…ه†…ه®¹ = ç”ںوˆگه€¼ه€¼552(وœ€ç»ˆé“¾وژ¥هˆ—è،¨);
      ه†…ه®¹ç±»ه‍‹483 = 'text/plain; charset=utf-8';
      break;
    case atob('c2luZ2JveA=='):
    case è§£ç پ64('c2luZy1ib3g='):
    case è§£ç پ64('c2luZ2JveA=='):
      è®¢éک…ه†…ه®¹ = ç”ںوˆگه€¼ه€¼و•°وچ®ه¯¹è±،(وœ€ç»ˆé“¾وژ¥هˆ—è،¨);
      ه†…ه®¹ç±»ه‍‹483 = 'application/json; charset=utf-8';
      break;
    default:
      è®¢éک…ه†…ه®¹ = btoa(وœ€ç»ˆé“¾وژ¥هˆ—è،¨.join('\n'));
  }
  const ه“چه؛”ه¤´éƒ¨هˆ—è،¨ = {
    'Content-Type': ه†…ه®¹ç±»ه‍‹483,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  };

  // و·»هٹ ECHçٹ¶و€پهˆ°ه“چه؛”ه¤´
  if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
    ه“چه؛”ه¤´éƒ¨هˆ—è،¨['X-ECH-Status'] = 'ENABLED';
    if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501) {
      ه“چه؛”ه¤´éƒ¨هˆ—è،¨['X-ECH-Config-Length'] = String(هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®501.length);
    }
  }
  return new Response(è®¢éک…ه†…ه®¹, {
    headers: ه“چه؛”ه¤´éƒ¨هˆ—è،¨
  });
}
function ç”ںوˆگé“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨482, ç”¨وˆ·481, ه·¥ن½œه™¨هںںهگچ480, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®479 = null, è·³è؟‡ç¼–هڈ·478 = false, هˆ«هگچه‘½هگچه™¨477 = null) {
  const ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£476 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£475 = [443, 2053, 2083, 2087, 2096, 8443];
  const é»کè®¤ه®‰ه…¨è¶…و–‡وœ¬ه€¼474 = [443];
  const é»کè®¤è¶…و–‡وœ¬ه€¼473 = ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ ? [] : [80];
  const é“¾وژ¥هˆ—è،¨472 = [];
  const ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„471 = '/?ed=2048';
  const هچڈè®®470 = atob('dmxlc3M=');
  const هˆ¶ن½œèٹ‚ç‚¹هگچç§°469 = هˆ«هگچه‘½هگچه™¨477 || هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·478);
  for (const é،¹ç›®468 of هˆ—è،¨482) {
    const ه®‰ه…¨هœ°ه‌€467 = é،¹ç›®468.ip.includes(':') ? `[${é،¹ç›®468.ip}]` : é،¹ç›®468.ip;
    let ه€¼ه€¼ç”ںوˆگ466 = [];
    if (é،¹ç›®468.port) {
      const ç«¯هڈ£465 = é،¹ç›®468.port;
      if (ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£475.includes(ç«¯هڈ£465)) {
        ه€¼ه€¼ç”ںوˆگ466.push({
          port: ç«¯هڈ£465,
          tls: true
        });
      } else if (ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£476.includes(ç«¯هڈ£465)) {
        if (!ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨) {
          ه€¼ه€¼ç”ںوˆگ466.push({
            port: ç«¯هڈ£465,
            tls: false
          });
        }
      } else {
        ه€¼ه€¼ç”ںوˆگ466.push({
          port: ç«¯هڈ£465,
          tls: true
        });
      }
    } else {
      é»کè®¤ه®‰ه…¨è¶…و–‡وœ¬ه€¼474.forEach(ç«¯هڈ£464 => {
        ه€¼ه€¼ç”ںوˆگ466.push({
          port: ç«¯هڈ£464,
          tls: true
        });
      });
      é»کè®¤è¶…و–‡وœ¬ه€¼473.forEach(ç«¯هڈ£463 => {
        ه€¼ه€¼ç”ںوˆگ466.push({
          port: ç«¯هڈ£463,
          tls: false
        });
      });
    }
    for (const {
      port: ç«¯هڈ£462,
      tls: ن¼ è¾“ه±‚ه®‰ه…¨461
    } of ه€¼ه€¼ç”ںوˆگ466) {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°460 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°469(é،¹ç›®468);
      if (ن¼ è¾“ه±‚ه®‰ه…¨461) {
        const ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°459 = new URLSearchParams({
          encryption: 'none',
          security: 'tls',
          sni: ه·¥ن½œه™¨هںںهگچ480,
          fp: هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ ? 'chrome' : 'randomized',
          type: 'ws',
          host: ه·¥ن½œه™¨هںںهگچ480,
          path: ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„471
        });
        ه¤„çگ†ه€¼ه؛”ç”¨ه±‚هچڈè®®هچڈه•†ه€¼(ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°459);

        // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
        if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
          const هںںهگچç³»ç»ںه€¼458 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
          const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ457 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
          ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°459.set('ech', `${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ457}+${هںںهگچç³»ç»ںه€¼458}`);
        }
        é“¾وژ¥هˆ—è،¨472.push(`${هچڈè®®470}://${ç”¨وˆ·481}@${ه®‰ه…¨هœ°ه‌€467}:${ç«¯هڈ£462}?${ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°459.toString()}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°460)}`);
      } else {
        const ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°456 = new URLSearchParams({
          encryption: 'none',
          security: 'none',
          type: 'ws',
          host: ه·¥ن½œه™¨هںںهگچ480,
          path: ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„471
        });
        é“¾وژ¥هˆ—è،¨472.push(`${هچڈè®®470}://${ç”¨وˆ·481}@${ه®‰ه…¨هœ°ه‌€467}:${ç«¯هڈ£462}?${ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°456.toString()}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°460)}`);
      }
    }
  }
  return é“¾وژ¥هˆ—è،¨472;
}
async function ç”ںوˆگوœ¨é©¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨455, ç”¨وˆ·454, ه·¥ن½œه™¨هںںهگچ453, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®452 = null, è·³è؟‡ç¼–هڈ·451 = false, هˆ«هگچه‘½هگچه™¨450 = null) {
  const ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£449 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£448 = [443, 2053, 2083, 2087, 2096, 8443];
  const é»کè®¤ه®‰ه…¨è¶…و–‡وœ¬ه€¼ = [443];
  const é»کè®¤è¶…و–‡وœ¬ه€¼ = ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ ? [] : [80];
  const é“¾وژ¥هˆ—è،¨447 = [];
  const ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„446 = '/?ed=2048';
  const ه¯†ç پ445 = ن¼ è¾“è·¯ه¾„ || ç”¨وˆ·454;
  const هˆ¶ن½œèٹ‚ç‚¹هگچç§°444 = هˆ«هگچه‘½هگچه™¨450 || هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·451);
  for (const é،¹ç›®443 of هˆ—è،¨455) {
    const ه®‰ه…¨هœ°ه‌€442 = é،¹ç›®443.ip.includes(':') ? `[${é،¹ç›®443.ip}]` : é،¹ç›®443.ip;
    let ه€¼ه€¼ç”ںوˆگ = [];
    if (é،¹ç›®443.port) {
      const ç«¯هڈ£441 = é،¹ç›®443.port;
      if (ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£448.includes(ç«¯هڈ£441)) {
        ه€¼ه€¼ç”ںوˆگ.push({
          port: ç«¯هڈ£441,
          tls: true
        });
      } else if (ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£449.includes(ç«¯هڈ£441)) {
        if (!ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨) {
          ه€¼ه€¼ç”ںوˆگ.push({
            port: ç«¯هڈ£441,
            tls: false
          });
        }
      } else {
        ه€¼ه€¼ç”ںوˆگ.push({
          port: ç«¯هڈ£441,
          tls: true
        });
      }
    } else {
      é»کè®¤ه®‰ه…¨è¶…و–‡وœ¬ه€¼.forEach(ç«¯هڈ£440 => {
        ه€¼ه€¼ç”ںوˆگ.push({
          port: ç«¯هڈ£440,
          tls: true
        });
      });
      é»کè®¤è¶…و–‡وœ¬ه€¼.forEach(ç«¯هڈ£439 => {
        ه€¼ه€¼ç”ںوˆگ.push({
          port: ç«¯هڈ£439,
          tls: false
        });
      });
    }
    for (const {
      port: ç«¯هڈ£438,
      tls: ن¼ è¾“ه±‚ه®‰ه…¨
    } of ه€¼ه€¼ç”ںوˆگ) {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°437 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°444(é،¹ç›®443);
      if (ن¼ è¾“ه±‚ه®‰ه…¨) {
        const ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°436 = new URLSearchParams({
          security: 'tls',
          sni: ه·¥ن½œه™¨هںںهگچ453,
          fp: 'chrome',
          type: 'ws',
          host: ه·¥ن½œه™¨هںںهگچ453,
          path: ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„446
        });
        ه¤„çگ†ه€¼ه؛”ç”¨ه±‚هچڈè®®هچڈه•†ه€¼(ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°436);

        // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
        if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
          const هںںهگچç³»ç»ںه€¼435 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
          const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ434 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
          ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°436.set('ech', `${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ434}+${هںںهگچç³»ç»ںه€¼435}`);
        }
        é“¾وژ¥هˆ—è،¨447.push(`${atob('dHJvamFuOi8v')}${ه¯†ç پ445}@${ه®‰ه…¨هœ°ه‌€442}:${ç«¯هڈ£438}?${ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°436.toString()}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°437)}`);
      } else {
        const ç½‘é،µه¥—وژ¥ه­—هڈ‚و•° = new URLSearchParams({
          security: 'none',
          type: 'ws',
          host: ه·¥ن½œه™¨هںںهگچ453,
          path: ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„446
        });
        é“¾وژ¥هˆ—è،¨447.push(`${atob('dHJvamFuOi8v')}${ه¯†ç پ445}@${ه®‰ه…¨هœ°ه‌€442}:${ç«¯هڈ£438}?${ç½‘é،µه¥—وژ¥ه­—هڈ‚و•°.toString()}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°437)}`);
      }
    }
  }
  return é“¾وژ¥هˆ—è،¨447;
}
async function èژ·هڈ–ه€¼هœ°ه‌€هˆ—è،¨() {
  const ه€¼4ç½‘ه‌€1 = "https://www.wetest.vip/page/cloudflare/address_v4.html";
  const ه€¼6ç½‘ه‌€1 = "https://www.wetest.vip/page/cloudflare/address_v6.html";
  let ç»“و‍œهˆ—è،¨433 = [];

  // è¯»هڈ–ç­›é€‰é…چç½®ï¼ˆé»کè®¤ه…¨éƒ¨هگ¯ç”¨ï¼‰
  const ه€¼4ه·²هگ¯ç”¨ = èژ·هڈ–é…چç½®ه€¼('ipv4', '') === '' || èژ·هڈ–é…چç½®ه€¼('ipv4', 'yes') !== 'no';
  const ه€¼6ه·²هگ¯ç”¨ = èژ·هڈ–é…چç½®ه€¼('ipv6', '') === '' || èژ·هڈ–é…چç½®ه€¼('ipv6', 'yes') !== 'no';
  const ه€¼ه€¼432 = èژ·هڈ–é…چç½®ه€¼('ispMobile', '') === '' || èژ·هڈ–é…چç½®ه€¼('ispMobile', 'yes') !== 'no';
  const ه€¼ه€¼431 = èژ·هڈ–é…چç½®ه€¼('ispUnicom', '') === '' || èژ·هڈ–é…چç½®ه€¼('ispUnicom', 'yes') !== 'no';
  const ه€¼ه€¼430 = èژ·هڈ–é…چç½®ه€¼('ispTelecom', '') === '' || èژ·هڈ–é…چç½®ه€¼('ispTelecom', 'yes') !== 'no';
  try {
    const èژ·هڈ–و‰؟è¯؛هˆ—è،¨ = [];
    if (ه€¼4ه·²هگ¯ç”¨) {
      èژ·هڈ–و‰؟è¯؛هˆ—è،¨.push(èژ·هڈ–ه€¼è§£و‍گه€¼(ه€¼4ç½‘ه‌€1));
    } else {
      èژ·هڈ–و‰؟è¯؛هˆ—è،¨.push(Promise.resolve([]));
    }
    if (ه€¼6ه·²هگ¯ç”¨) {
      èژ·هڈ–و‰؟è¯؛هˆ—è،¨.push(èژ·هڈ–ه€¼è§£و‍گه€¼(ه€¼6ç½‘ه‌€1));
    } else {
      èژ·هڈ–و‰؟è¯؛هˆ—è،¨.push(Promise.resolve([]));
    }
    const [ه€¼4هˆ—è،¨, ه€¼6هˆ—è،¨] = await Promise.all(èژ·هڈ–و‰؟è¯؛هˆ—è،¨);
    ç»“و‍œهˆ—è،¨433 = [...ه€¼4هˆ—è،¨, ...ه€¼6هˆ—è،¨];

    // وŒ‰è؟گèگ¥ه•†ç­›é€‰
    if (ç»“و‍œهˆ—è،¨433.length > 0) {
      ç»“و‍œهˆ—è،¨433 = ç»“و‍œهˆ—è،¨433.filter(é،¹ç›®429 => {
        const وœ¬هœ°ه€¼428 = é،¹ç›®429.isp || '';
        if (وœ¬هœ°ه€¼428.includes('ç§»هٹ¨') && !ه€¼ه€¼432) return false;
        if (وœ¬هœ°ه€¼428.includes('èپ”é€ڑ') && !ه€¼ه€¼431) return false;
        if (وœ¬هœ°ه€¼428.includes('ç”µن؟،') && !ه€¼ه€¼430) return false;
        return true;
      });
    }
    if (ç»“و‍œهˆ—è،¨433.length > 0) {
      return ç»“و‍œهˆ—è،¨433;
    }
  } catch (ن؛‹ن»¶ه€¼427) {}
  return [];
}
async function èژ·هڈ–ه€¼è§£و‍گه€¼(ç½‘ه‌€426) {
  try {
    const ه“چه؛”425 = await fetch(ç½‘ه‌€426, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    if (!ه“چه؛”425.ok) {
      return [];
    }
    const é،µé‌¢ = await ه“چه؛”425.text();
    const ç»“و‍œهˆ—è،¨424 = [];
    const ه€¼و­£هˆ™423 = /<tr[\s\S]*?<\/tr>/g;
    const ه€¼و­£هˆ™422 = /<td data-label="ç؛؟è·¯هگچç§°">(.+?)<\/td>[\s\S]*?<td data-label="ن¼کé€‰هœ°ه‌€">([\d.:a-fA-F]+)<\/td>[\s\S]*?<td data-label="و•°وچ®ن¸­ه؟ƒ">(.+?)<\/td>/;
    let وœ¬هœ°ه€¼421;
    while ((وœ¬هœ°ه€¼421 = ه€¼و­£هˆ™423.exec(é،µé‌¢)) !== null) {
      const ه€¼é،µé‌¢420 = وœ¬هœ°ه€¼421[0];
      const ه€¼ه€¼419 = ه€¼é،µé‌¢420.match(ه€¼و­£هˆ™422);
      if (ه€¼ه€¼419 && ه€¼ه€¼419[1] && ه€¼ه€¼419[2]) {
        const وœ؛وˆ؟ = ه€¼ه€¼419[3] ? ه€¼ه€¼419[3].trim().replace(/<.*?>/g, '') : '';
        ç»“و‍œهˆ—è،¨424.push({
          isp: ه€¼ه€¼419[1].trim().replace(/<.*?>/g, ''),
          ip: ه€¼ه€¼419[2].trim(),
          colo: وœ؛وˆ؟
        });
      }
    }
    if (ç»“و‍œهˆ—è،¨424.length === 0) {}
    return ç»“و‍œهˆ—è،¨424;
  } catch (é”™è¯¯418) {
    return [];
  }
}
async function ه¤„çگ†ç½‘é،µه¥—وژ¥ه­—è¯·و±‚(è¯·و±‚417) {
  // ن»ژè¯·و±‚URLçڑ„path queryن¸­è¯»هڈ–ه®¢وˆ·ç«¯è‡ھه®ڑن¹‰هڈ‚و•°
  // ن»ژ path query è¯»هڈ–è¦†ç›–هڈ‚و•°
  const è¯·و±‚ç½‘ه‌€ = new URL(è¯·و±‚417.url);
  const è¯·و±‚ه›‍é€€416 = è¯·و±‚ç½‘ه‌€.searchParams.get('p') || '';
  const è¯·و±‚هœ°هŒ؛415 = (è¯·و±‚ç½‘ه‌€.searchParams.get('wk') || '').toUpperCase();
  const è¯·و±‚ه€¼ه­—ç¬¦ن¸² = è¯·و±‚ç½‘ه‌€.searchParams.get('rm') || '';
  const è¯·و±‚ه€¼414 = è¯·و±‚ه€¼ه­—ç¬¦ن¸² ? è¯·و±‚ه€¼ه­—ç¬¦ن¸².toLowerCase() !== 'no' : null;
  const è¯·و±‚ن»£çگ†ه­—ç¬¦ن¸² = è¯·و±‚ç½‘ه‌€.searchParams.get('s') || '';
  let è¯·و±‚ن»£çگ†é…چç½®413 = null;
  if (è¯·و±‚ن»£çگ†ه­—ç¬¦ن¸²) {
    try {
      è¯·و±‚ن»£çگ†é…چç½®413 = è§£و‍گن»£çگ†é…چç½®(è¯·و±‚ن»£çگ†ه­—ç¬¦ن¸²);
    } catch (ه؟½ç•¥ه€¼412) {}
  }

  // و£€وµ‹ه¹¶è®¾ç½®ه½“ه‰چWorkerهœ°هŒ؛ï¼Œç،®ن؟‌WebSocketè¯·و±‚èƒ½و­£ç،®è؟›è،Œه°±è؟‘هŒ¹é…چ
  // ن¼که…ˆç؛§ï¼ڑه®¢وˆ·ç«¯pathهڈ‚و•°wk > ه…¨ه±€manualWorkerRegion > è‡ھهٹ¨و£€وµ‹
  let ه®‍é™…هœ°هŒ؛411 = ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛;
  if (!ه®‍é™…هœ°هŒ؛411 || ه®‍é™…هœ°هŒ؛411 === '') {
    if (è¯·و±‚هœ°هŒ؛415) {
      ه®‍é™…هœ°هŒ؛411 = è¯·و±‚هœ°هŒ؛415;
    } else if (و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛ && و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛.trim()) {
      ه®‍é™…هœ°هŒ؛411 = و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛.trim().toUpperCase();
    } else {
      ه®‍é™…هœ°هŒ؛411 = await و£€وµ‹ه·¥ن½œه™¨هœ°هŒ؛(è¯·و±‚417);
    }
  } else if (è¯·و±‚هœ°هŒ؛415) {
    ه®‍é™…هœ°هŒ؛411 = è¯·و±‚هœ°هŒ؛415;
  }
  const ç½‘é،µه¥—وژ¥ه­—ه€¼ = new WebSocketPair();
  const [ه®¢وˆ·ç«¯ه€¼, ه€¼ه€¼410] = Object.values(ç½‘é،µه¥—وژ¥ه­—ه€¼);
  ه€¼ه€¼410.accept();
  ه€¼ه€¼410.binaryType = 'arraybuffer';
  let è؟œç¨‹è؟‍وژ¥ه€¼409 = {
    socket: null,
    writer: null,
    drainUpload: null
  };
  let وک¯هگ¦هںںهگچç³»ç»ںه€¼ = false;
  let هچڈè®®ç±»ه‍‹ = null;
  let ه€¼ه€¼408 = false;
  let ن¼ è¾“ه€¼ = false;
  const ه€¼éکںهˆ— = هˆ›ه»؛ه‌—éکںهˆ—(ن¼ è¾“ن¸ٹن¼ هŒ…ه¤§ه°ڈ, ن¼ è¾“ن¸ٹن¼ éکںهˆ—ن¸ٹé™گ, ن¼ è¾“ن¸ٹن¼ éکںهˆ—ن¸ٹé™گ >> 8);
  const è¯·و±‚ه€¼407 = è¯·و±‚417.fetcher;
  function ه¤„çگ†ه€¼è؟œç¨‹ه†™ه…¥ه™¨() {
    try {
      è؟œç¨‹è؟‍وژ¥ه€¼409.writer?.releaseLock();
    } catch (ه؟½ç•¥ه€¼406) {}
    è؟œç¨‹è؟‍وژ¥ه€¼409.writer = null;
  }
  function ه…³é—­ن¼ è¾“() {
    if (ن¼ è¾“ه€¼) return;
    ن¼ è¾“ه€¼ = true;
    ه€¼éکںهˆ—.clear();
    ه¤„çگ†ه€¼è؟œç¨‹ه†™ه…¥ه™¨();
    try {
      è؟œç¨‹è؟‍وژ¥ه€¼409.socket?.close();
    } catch (ه؟½ç•¥ه€¼405) {}
    ه…³é—­ه¥—وژ¥ه­—ه€¼(ه€¼ه€¼410);
  }
  function ه¤„çگ†éکںهˆ—ه€¼(ه‌—404) {
    const و•°وچ®403 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه‌—404);
    if (!و•°وچ®403.byteLength) return true;
    if (!ه€¼éکںهˆ—.sow(و•°وچ®403)) {
      ه…³é—­ن¼ è¾“();
      return false;
    }
    è؟œç¨‹è؟‍وژ¥ه€¼409.drainUpload();
    return true;
  }
  async function ه¤„çگ†ه€¼ه€¼402() {
    if (ه€¼ه€¼408 || ن¼ è¾“ه€¼ || !è؟œç¨‹è؟‍وژ¥ه€¼409.writer) return;
    ه€¼ه€¼408 = true;
    try {
      for (;;) {
        if (ن¼ è¾“ه€¼ || !è؟œç¨‹è؟‍وژ¥ه€¼409.writer) break;
        const [و•°وچ®401] = ه€¼éکںهˆ—.bundle();
        if (!و•°وچ®401) break;
        await è؟œç¨‹è؟‍وژ¥ه€¼409.writer.write(و•°وچ®401);
      }
    } catch (ه؟½ç•¥ه€¼400) {
      ه…³é—­ن¼ è¾“();
    } finally {
      ه€¼ه€¼408 = false;
      if (!ه€¼éکںهˆ—.empty && !ن¼ è¾“ه€¼ && è؟œç¨‹è؟‍وژ¥ه€¼409.writer) queueMicrotask(ه¤„çگ†ه€¼ه€¼402);
    }
  }
  è؟œç¨‹è؟‍وژ¥ه€¼409.drainUpload = () => {
    if (!ه€¼ه€¼408 && !ه€¼éکںهˆ—.empty && è؟œç¨‹è؟‍وژ¥ه€¼409.writer) queueMicrotask(ه¤„çگ†ه€¼ه€¼402);
  };
  const ه€¼و•°وچ®399 = è¯·و±‚417.headers.get(atob('c2VjLXdlYnNvY2tldC1wcm90b2NvbA==')) || '';
  const وœ¬هœ°ه€¼398 = هˆ¶ن½œه€¼وµپ(ه€¼ه€¼410, ه€¼و•°وچ®399);
  وœ¬هœ°ه€¼398.pipeTo(new WritableStream({
    async write(ه‌—397) {
      if (ن¼ è¾“ه€¼) return;
      const و•°وچ®396 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه‌—397);
      if (وک¯هگ¦هںںهگچç³»ç»ںه€¼) return await ه¤„çگ†ه€¼ç”¨وˆ·و•°وچ®وٹ¥(و•°وچ®396, ه€¼ه€¼410, null, è¯·و±‚ه€¼407);
      if (è؟œç¨‹è؟‍وژ¥ه€¼409.socket && è؟œç¨‹è؟‍وژ¥ه€¼409.writer) {
        if (!ه¤„çگ†éکںهˆ—ه€¼(و•°وچ®396)) throw new Error('upload queue overflow');
        return;
      }
      if (هچڈè®®ç±»ه‍‹) {
        if (!ه¤„çگ†éکںهˆ—ه€¼(و•°وچ®396)) throw new Error('upload queue overflow');
        return;
      }
      if (!هچڈè®®ç±»ه‍‹) {
        if (هگ¯ç”¨وکژو–‡ && و•°وچ®396.byteLength >= 24) {
          const è½»é‡ڈهچڈè®®ç»“و‍œ = è§£و‍گç½‘é،µه¥—وژ¥ه­—ه€¼ه¤´éƒ¨(و•°وچ®396, è®¤è¯پن»¤ç‰Œ);
          if (!è½»é‡ڈهچڈè®®ç»“و‍œ.hasError) {
            هچڈè®®ç±»ه‍‹ = è§£ç پ64('dmxlc3M=');
            const {
              addressType: هœ°ه‌€ç±»ه‍‹395,
              port: ç«¯هڈ£394,
              hostname: ن¸»وœ؛هگچ393,
              rawIndex: هژںه§‹ç´¢ه¼•,
              version: وœ¬هœ°ه€¼392,
              isUDP: وک¯هگ¦ç”¨وˆ·و•°وچ®وٹ¥391
            } = è½»é‡ڈهچڈè®®ç»“و‍œ;
            if (وک¯هگ¦ç”¨وˆ·و•°وچ®وٹ¥391) {
              if (ç«¯هڈ£394 === 53) وک¯هگ¦هںںهگچç³»ç»ںه€¼ = true;else throw new Error(é”™è¯¯_ن»…و”¯وŒپهںںهگچç³»ç»ںç”¨وˆ·و•°وچ®وٹ¥);
            }
            const ه€¼ه¤´éƒ¨390 = new Uint8Array([وœ¬هœ°ه€¼392[0], 0]);
            const هژںه§‹و•°وچ®389 = و•°وچ®396.subarray(هژںه§‹ç´¢ه¼•);
            if (وک¯هگ¦هںںهگچç³»ç»ںه€¼) return ه¤„çگ†ه€¼ç”¨وˆ·و•°وچ®وٹ¥(هژںه§‹و•°وچ®389, ه€¼ه€¼410, ه€¼ه¤´éƒ¨390, è¯·و±‚ه€¼407);
            await ه¤„çگ†ه€¼ه€¼384(هœ°ه‌€ç±»ه‍‹395, ن¸»وœ؛هگچ393, ç«¯هڈ£394, هژںه§‹و•°وچ®389, ه€¼ه€¼410, ه€¼ه¤´éƒ¨390, è؟œç¨‹è؟‍وژ¥ه€¼409, è¯·و±‚ه›‍é€€416, ه®‍é™…هœ°هŒ؛411, è¯·و±‚ه€¼414, è¯·و±‚ن»£çگ†é…چç½®413, è¯·و±‚ه€¼407);
            return;
          }
        }
        if (هگ¯ç”¨وœ¨é©¬ && و•°وچ®396.byteLength >= 56) {
          const ه€¼ç»“و‍œ = await è§£و‍گوœ¨é©¬ه¤´éƒ¨(و•°وچ®396, è®¤è¯پن»¤ç‰Œ);
          if (!ه€¼ç»“و‍œ.hasError) {
            هچڈè®®ç±»ه‍‹ = atob('dHJvamFu');
            const {
              addressType: هœ°ه‌€ç±»ه‍‹388,
              port: ç«¯هڈ£387,
              hostname: ن¸»وœ؛هگچ386,
              rawClientData: هژںه§‹ه®¢وˆ·ç«¯و•°وچ®
            } = ه€¼ç»“و‍œ;
            await ه¤„çگ†ه€¼ه€¼384(هœ°ه‌€ç±»ه‍‹388, ن¸»وœ؛هگچ386, ç«¯هڈ£387, هژںه§‹ه®¢وˆ·ç«¯و•°وچ®, ه€¼ه€¼410, null, è؟œç¨‹è؟‍وژ¥ه€¼409, è¯·و±‚ه›‍é€€416, ه®‍é™…هœ°هŒ؛411, è¯·و±‚ه€¼414, è¯·و±‚ن»£çگ†é…چç½®413, è¯·و±‚ه€¼407);
            return;
          }
        }
        throw new Error('Invalid protocol or authentication failed');
      }
    }
  })).catch(é”™è¯¯385 => {
    ه…³é—­ن¼ è¾“();
  });
  return new Response(null, {
    status: 101,
    webSocket: ه®¢وˆ·ç«¯ه€¼
  });
}
async function ه¤„çگ†ه€¼ه€¼384(هœ°ه‌€ç±»ه‍‹383, ن¸»وœ؛, ç«¯هڈ£و•°ه­—, هژںه§‹و•°وچ®, ç½‘é،µه¥—وژ¥ه­—382, ه€¼ه¤´éƒ¨381, è؟œç¨‹è؟‍وژ¥ه€¼, è¯·و±‚ه›‍é€€ = '', è¯·و±‚هœ°هŒ؛ = '', è¯·و±‚ه€¼380 = null, è¯·و±‚ن»£çگ†é…چç½® = null, è¯·و±‚ه€¼379 = null) {
  // ن¼که…ˆن½؟ç”¨ه®¢وˆ·ç«¯pathهڈ‚و•°ï¼Œه…¶و¬،ه›‍é€€هˆ°ه…¨ه±€é…چç½®
  const ه®‍é™…ه›‍é€€ = è¯·و±‚ه›‍é€€ || ه›‍é€€هœ°ه‌€;
  const ه®‍é™…هœ°هŒ؛ = è¯·و±‚هœ°هŒ؛ || ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛;
  const ه®‍é™…هœ°هŒ؛هŒ¹é…چ = è¯·و±‚ه€¼380 !== null ? è¯·و±‚ه€¼380 : هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ;
  const ه®‍é™…ن»£çگ†é…چç½® = è¯·و±‚ن»£çگ†é…چç½® || ه·²è§£و‍گن»£çگ†5é…چç½®;
  const ه®‍é™…ن»£çگ†ه·²هگ¯ç”¨ = è¯·و±‚ن»£çگ†é…چç½® ? true : وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨;
  const ه€¼و•°وچ®378 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(هژںه§‹و•°وچ®);
  async function è؟‍وژ¥ه€¼هڈ‘é€پ(هœ°ه‌€377, ç«¯هڈ£376, ه€¼ن»£çگ† = false) {
    const è؟œç¨‹ه€¼375 = ه€¼ن»£çگ† ? await ه¤„çگ†ه€¼ن»£çگ†è؟‍وژ¥(هœ°ه‌€ç±»ه‍‹383, هœ°ه‌€377, ç«¯هڈ£376, ه®‍é™…ن»£çگ†é…چç½®) : await è؟‍وژ¥ه€¼ه¥—وژ¥ه­—(هœ°ه‌€377, ç«¯هڈ£376, è¯·و±‚ه€¼379, ن¼ è¾“è؟‍وژ¥ç«‍é€ںو•°);
    const ه†™ه…¥ه™¨374 = è؟œç¨‹ه€¼375.writable.getWriter();
    if (ه€¼و•°وچ®378.byteLength) await ه†™ه…¥ه™¨374.write(ه€¼و•°وچ®378);
    return {
      remoteSock: è؟œç¨‹ه€¼375,
      writer: ه†™ه…¥ه™¨374
    };
  }
  function ه¤„çگ†ه€¼ه€¼ه½“ه‰چ(è؟œç¨‹ه€¼373, ه†™ه…¥ه™¨372) {
    if (è؟œç¨‹è؟‍وژ¥ه€¼.socket !== è؟œç¨‹ه€¼373) return;
    try {
      ه†™ه…¥ه™¨372?.releaseLock();
    } catch (ه؟½ç•¥ه€¼371) {}
    è؟œç¨‹è؟‍وژ¥ه€¼.socket = null;
    è؟œç¨‹è؟‍وژ¥ه€¼.writer = null;
  }
  function ه¤„çگ†ه€¼è؟œç¨‹(è؟œç¨‹ه€¼370, ه†™ه…¥ه™¨369, é‡چè¯•ه€¼368) {
    try {
      if (è؟œç¨‹è؟‍وژ¥ه€¼.writer && è؟œç¨‹è؟‍وژ¥ه€¼.writer !== ه†™ه…¥ه™¨369) {
        è؟œç¨‹è؟‍وژ¥ه€¼.writer.releaseLock();
      }
    } catch (ه؟½ç•¥ه€¼367) {}
    è؟œç¨‹è؟‍وژ¥ه€¼.socket = è؟œç¨‹ه€¼370;
    è؟œç¨‹è؟‍وژ¥ه€¼.writer = ه†™ه…¥ه™¨369;
    è؟œç¨‹è؟‍وژ¥ه€¼.drainUpload?.();
    è؟œç¨‹ه€¼370.closed.catch(() => {}).finally(() => {
      if (è؟œç¨‹è؟‍وژ¥ه€¼.socket === è؟œç¨‹ه€¼370) ه…³é—­ه¥—وژ¥ه­—ه€¼(ç½‘é،µه¥—وژ¥ه­—382);
    });
    è؟‍وژ¥ه€¼279(è؟œç¨‹ه€¼370, ç½‘é،µه¥—وژ¥ه­—382, ه€¼ه¤´éƒ¨381, é‡چè¯•ه€¼368).finally(() => {
      if (è؟œç¨‹è؟‍وژ¥ه€¼.socket === è؟œç¨‹ه€¼370) {
        try {
          ه†™ه…¥ه™¨369.releaseLock();
        } catch (ه؟½ç•¥ه€¼366) {}
        è؟œç¨‹è؟‍وژ¥ه€¼.writer = null;
      }
    });
  }
  async function ه¤„çگ†é‡چè¯•è؟‍وژ¥() {
    if (هگ¯ç”¨ن»£çگ†é™چç؛§ && ه®‍é™…ن»£çگ†ه·²هگ¯ç”¨) {
      try {
        const {
          remoteSock: ن»£çگ†ه¥—وژ¥ه­—,
          writer: ن»£çگ†ه†™ه…¥ه™¨
        } = await è؟‍وژ¥ه€¼هڈ‘é€پ(ن¸»وœ؛, ç«¯هڈ£و•°ه­—, true);
        ه¤„çگ†ه€¼è؟œç¨‹(ن»£çگ†ه¥—وژ¥ه­—, ن»£çگ†ه†™ه…¥ه™¨, null);
        return;
      } catch (ن»£çگ†é”™è¯¯) {
        let ه¤‡ç”¨ن¸»وœ؛365, ه¤‡ç”¨ç«¯هڈ£364;
        if (ه®‍é™…ه›‍é€€ && ه®‍é™…ه›‍é€€.trim()) {
          const ه·²è§£و‍گ363 = è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(ه®‍é™…ه›‍é€€);
          ه¤‡ç”¨ن¸»وœ؛365 = ه·²è§£و‍گ363.address;
          ه¤‡ç”¨ç«¯هڈ£364 = ه·²è§£و‍گ363.port || ç«¯هڈ£و•°ه­—;
        } else {
          const ه€¼ه¤‡ç”¨هœ°ه‌€362 = await èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه®‍é™…هœ°هŒ؛, ه®‍é™…هœ°هŒ؛هŒ¹é…چ);
          ه¤‡ç”¨ن¸»وœ؛365 = ه€¼ه¤‡ç”¨هœ°ه‌€362 ? ه€¼ه¤‡ç”¨هœ°ه‌€362.domain : ن¸»وœ؛;
          ه¤‡ç”¨ç«¯هڈ£364 = ه€¼ه¤‡ç”¨هœ°ه‌€362 ? ه€¼ه¤‡ç”¨هœ°ه‌€362.port : ç«¯هڈ£و•°ه­—;
        }
        try {
          const {
            remoteSock: ه›‍é€€ه¥—وژ¥ه­—361,
            writer: ه›‍é€€ه†™ه…¥ه™¨360
          } = await è؟‍وژ¥ه€¼هڈ‘é€پ(ه¤‡ç”¨ن¸»وœ؛365, ه¤‡ç”¨ç«¯هڈ£364, false);
          ه¤„çگ†ه€¼è؟œç¨‹(ه›‍é€€ه¥—وژ¥ه­—361, ه›‍é€€ه†™ه…¥ه™¨360, null);
        } catch (ه›‍é€€é”™è¯¯359) {
          ه…³é—­ه¥—وژ¥ه­—ه€¼(ç½‘é،µه¥—وژ¥ه­—382);
        }
      }
    } else {
      let ه¤‡ç”¨ن¸»وœ؛, ه¤‡ç”¨ç«¯هڈ£;
      if (ه®‍é™…ه›‍é€€ && ه®‍é™…ه›‍é€€.trim()) {
        const ه·²è§£و‍گ = è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(ه®‍é™…ه›‍é€€);
        ه¤‡ç”¨ن¸»وœ؛ = ه·²è§£و‍گ.address;
        ه¤‡ç”¨ç«¯هڈ£ = ه·²è§£و‍گ.port || ç«¯هڈ£و•°ه­—;
      } else {
        const ه€¼ه¤‡ç”¨هœ°ه‌€ = await èژ·هڈ–ه€¼ه¤‡ç”¨هœ°ه‌€(ه®‍é™…هœ°هŒ؛, ه®‍é™…هœ°هŒ؛هŒ¹é…چ);
        ه¤‡ç”¨ن¸»وœ؛ = ه€¼ه¤‡ç”¨هœ°ه‌€ ? ه€¼ه¤‡ç”¨هœ°ه‌€.domain : ن¸»وœ؛;
        ه¤‡ç”¨ç«¯هڈ£ = ه€¼ه¤‡ç”¨هœ°ه‌€ ? ه€¼ه¤‡ç”¨هœ°ه‌€.port : ç«¯هڈ£و•°ه­—;
      }
      try {
        const {
          remoteSock: ه›‍é€€ه¥—وژ¥ه­—,
          writer: ه›‍é€€ه†™ه…¥ه™¨
        } = await è؟‍وژ¥ه€¼هڈ‘é€پ(ه¤‡ç”¨ن¸»وœ؛, ه¤‡ç”¨ç«¯هڈ£, ه®‍é™…ن»£çگ†ه·²هگ¯ç”¨);
        ه¤„çگ†ه€¼è؟œç¨‹(ه›‍é€€ه¥—وژ¥ه­—, ه›‍é€€ه†™ه…¥ه™¨, null);
      } catch (ه›‍é€€é”™è¯¯) {
        ه…³é—­ه¥—وژ¥ه­—ه€¼(ç½‘é،µه¥—وژ¥ه­—382);
      }
    }
  }
  try {
    const {
      remoteSock: ه€¼ه¥—وژ¥ه­—358,
      writer: ه€¼ه†™ه…¥ه™¨
    } = await è؟‍وژ¥ه€¼هڈ‘é€پ(ن¸»وœ؛, ç«¯هڈ£و•°ه­—, هگ¯ç”¨ن»£çگ†é™چç؛§ ? false : ه®‍é™…ن»£çگ†ه·²هگ¯ç”¨);
    ه¤„çگ†ه€¼è؟œç¨‹(ه€¼ه¥—وژ¥ه­—358, ه€¼ه†™ه…¥ه™¨, () => {
      ه¤„çگ†ه€¼ه€¼ه½“ه‰چ(ه€¼ه¥—وژ¥ه­—358, ه€¼ه†™ه…¥ه™¨);
      ه¤„çگ†é‡چè¯•è؟‍وژ¥();
    });
  } catch (é”™è¯¯357) {
    await ه¤„çگ†é‡چè¯•è؟‍وژ¥();
  }
}
function ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه‌—356) {
  if (ه‌—356 instanceof Uint8Array) return ه‌—356;
  if (ه‌—356 instanceof ArrayBuffer) return new Uint8Array(ه‌—356);
  if (ArrayBuffer.isView(ه‌—356)) return new Uint8Array(ه‌—356.buffer, ه‌—356.byteOffset, ه‌—356.byteLength);
  return new Uint8Array(ه‌—356);
}
function و‹¼وژ¥ه€¼8و•°ç»„(ه¤´éƒ¨355, ن¸»ن½“354) {
  const ه¤´ه€¼353 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه¤´éƒ¨355);
  const ن¹™ه€¼352 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ن¸»ن½“354);
  const è¾“ه‡؛351 = new Uint8Array(ه¤´ه€¼353.byteLength + ن¹™ه€¼352.byteLength);
  è¾“ه‡؛351.set(ه¤´ه€¼353);
  è¾“ه‡؛351.set(ن¹™ه€¼352, ه¤´ه€¼353.byteLength);
  return è¾“ه‡؛351;
}
function هˆ›ه»؛ه‌—éکںهˆ—(وœ¬هœ°ه€¼350, ه€¼ه€¼349 = وœ¬هœ°ه€¼350, é،¹ç›®هˆ—è،¨ن¸ٹé™گ = Math.max(1, ه€¼ه€¼349 >> 8)) {
  let éکںهˆ— = [];
  let ه¤´éƒ¨348 = 0;
  let ه€¼ه­—èٹ‚347 = 0;
  let ه€¼ç¼“ه†²346 = null;
  function ه¤„çگ†وœ¬هœ°ه€¼345() {
    if (ه¤´éƒ¨348 > 32 && ه¤´éƒ¨348 * 2 >= éکںهˆ—.length) {
      éکںهˆ— = éکںهˆ—.slice(ه¤´éƒ¨348);
      ه¤´éƒ¨348 = 0;
    }
  }
  function ه¤„çگ†وœ¬هœ°ه€¼344() {
    if (ه¤´éƒ¨348 >= éکںهˆ—.length) return null;
    const و•°وچ®343 = éکںهˆ—[ه¤´éƒ¨348];
    éکںهˆ—[ه¤´éƒ¨348++] = undefined;
    ه€¼ه­—èٹ‚347 -= و•°وچ®343.byteLength;
    ه¤„çگ†وœ¬هœ°ه€¼345();
    return و•°وچ®343;
  }
  return {
    get empty() {
      return ه¤´éƒ¨348 >= éکںهˆ—.length;
    },
    clear() {
      éکںهˆ— = [];
      ه¤´éƒ¨348 = 0;
      ه€¼ه­—èٹ‚347 = 0;
    },
    sow(و•°وچ®342) {
      const و•°é‡ڈه€¼ = و•°وچ®342?.byteLength || 0;
      if (!و•°é‡ڈه€¼) return true;
      if (ه€¼ه­—èٹ‚347 + و•°é‡ڈه€¼ > ه€¼ه€¼349 || éکںهˆ—.length - ه¤´éƒ¨348 >= é،¹ç›®هˆ—è،¨ن¸ٹé™گ) return false;
      éکںهˆ—.push(و•°وچ®342);
      ه€¼ه­—èٹ‚347 += و•°é‡ڈه€¼;
      return true;
    },
    bundle(و•°وچ®341 = null) {
      و•°وچ®341 ||= ه¤„çگ†وœ¬هœ°ه€¼344();
      if (!و•°وچ®341 || ه¤´éƒ¨348 >= éکںهˆ—.length || و•°وچ®341.byteLength >= وœ¬هœ°ه€¼350) return [و•°وچ®341, false];
      let وœ¬هœ°ه€¼340 = و•°وچ®341.byteLength;
      let ç»“و‌ں = ه¤´éƒ¨348;
      while (ç»“و‌ں < éکںهˆ—.length) {
        const وœ¬هœ°ه€¼339 = éکںهˆ—[ç»“و‌ں];
        const ه€¼ه€¼338 = وœ¬هœ°ه€¼340 + وœ¬هœ°ه€¼339.byteLength;
        if (ه€¼ه€¼338 > وœ¬هœ°ه€¼350) break;
        وœ¬هœ°ه€¼340 = ه€¼ه€¼338;
        ç»“و‌ں++;
      }
      if (ç»“و‌ں === ه¤´éƒ¨348) return [و•°وچ®341, false];
      const è¾“ه‡؛ = ه€¼ç¼“ه†²346 ||= new Uint8Array(وœ¬هœ°ه€¼350);
      è¾“ه‡؛.set(و•°وچ®341);
      let هپڈç§»337 = و•°وچ®341.byteLength;
      while (ه¤´éƒ¨348 < ç»“و‌ں) {
        const وœ¬هœ°ه€¼336 = éکںهˆ—[ه¤´éƒ¨348];
        éکںهˆ—[ه¤´éƒ¨348++] = undefined;
        ه€¼ه­—èٹ‚347 -= وœ¬هœ°ه€¼336.byteLength;
        è¾“ه‡؛.set(وœ¬هœ°ه€¼336, هپڈç§»337);
        هپڈç§»337 += وœ¬هœ°ه€¼336.byteLength;
      }
      ه¤„çگ†وœ¬هœ°ه€¼345();
      return [è¾“ه‡؛.subarray(0, وœ¬هœ°ه€¼340), true];
    }
  };
}
function هˆ›ه»؛ه€¼ه€¼(ç½‘é،µه¥—وژ¥ه­—335) {
  const وœ¬هœ°ه€¼334 = ن¼ è¾“ن¸‹è½½هŒ…ه¤§ه°ڈ;
  const ه°¾éƒ¨ = ن¼ è¾“ن¸‹è½½ه°¾éƒ¨;
  const ه€¼ه€¼333 = Math.max(4096, ه°¾éƒ¨ << 3);
  let وœ¬هœ°ه€¼332 = new Uint8Array(وœ¬هœ°ه€¼334);
  let ه€¼ه­—èٹ‚ = 0;
  let è®،و—¶ه™¨ = 0;
  let ه€¼ه€¼331 = false;
  let وœ¬هœ°ه€¼330 = 0;
  let ه€¼é”® = 0;
  let ه€¼ه€¼329 = 0;
  function هˆ·و–°() {
    if (è®،و—¶ه™¨) clearTimeout(è®،و—¶ه™¨);
    è®،و—¶ه™¨ = 0;
    ه€¼ه€¼331 = false;
    if (!ه€¼ه­—èٹ‚) return;
    if (ç½‘é،µه¥—وژ¥ه­—335.readyState === 1) ç½‘é،µه¥—وژ¥ه­—335.send(وœ¬هœ°ه€¼332.subarray(0, ه€¼ه­—èٹ‚).slice());
    وœ¬هœ°ه€¼332 = new Uint8Array(وœ¬هœ°ه€¼334);
    ه€¼ه­—èٹ‚ = 0;
    ه€¼ه€¼329 = 0;
  }
  function ه¤„çگ†وœ¬هœ°ه€¼() {
    if (è®،و—¶ه™¨ || ه€¼ه€¼331) return;
    ه€¼ه€¼331 = true;
    ه€¼é”® = وœ¬هœ°ه€¼330;
    queueMicrotask(() => {
      ه€¼ه€¼331 = false;
      if (!ه€¼ه­—èٹ‚ || è®،و—¶ه™¨) return;
      if (وœ¬هœ°ه€¼334 - ه€¼ه­—èٹ‚ < ه°¾éƒ¨) return هˆ·و–°();
      è®،و—¶ه™¨ = setTimeout(() => {
        è®،و—¶ه™¨ = 0;
        if (!ه€¼ه­—èٹ‚) return;
        if (وœ¬هœ°ه€¼334 - ه€¼ه­—èٹ‚ < ه°¾éƒ¨) return هˆ·و–°();
        if (ه€¼ه€¼329 < 2 && (وœ¬هœ°ه€¼330 !== ه€¼é”® || ه€¼ه­—èٹ‚ < ه€¼ه€¼333)) {
          ه€¼ه€¼329++;
          ه€¼é”® = وœ¬هœ°ه€¼330;
          return ه¤„çگ†وœ¬هœ°ه€¼();
        }
        هˆ·و–°();
      }, Math.max(ن¼ è¾“ن¸‹è½½ه»¶è؟ں, 1));
    });
  }
  return {
    send(ه‌—328) {
      const و•°وچ®327 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه‌—328);
      let هپڈç§»326 = 0;
      const وœ¬هœ°ه€¼325 = و•°وچ®327.byteLength;
      if (!وœ¬هœ°ه€¼325) return;
      while (هپڈç§»326 < وœ¬هœ°ه€¼325) {
        if (!ه€¼ه­—èٹ‚ && وœ¬هœ°ه€¼325 - هپڈç§»326 >= وœ¬هœ°ه€¼334) {
          const ه¤§ه°ڈ324 = Math.min(وœ¬هœ°ه€¼334, وœ¬هœ°ه€¼325 - هپڈç§»326);
          if (ç½‘é،µه¥—وژ¥ه­—335.readyState === 1) ç½‘é،µه¥—وژ¥ه­—335.send(هپڈç§»326 || ه¤§ه°ڈ324 !== وœ¬هœ°ه€¼325 ? و•°وچ®327.subarray(هپڈç§»326, هپڈç§»326 + ه¤§ه°ڈ324) : و•°وچ®327);
          هپڈç§»326 += ه¤§ه°ڈ324;
          continue;
        }
        const ه¤§ه°ڈ323 = Math.min(وœ¬هœ°ه€¼334 - ه€¼ه­—èٹ‚, وœ¬هœ°ه€¼325 - هپڈç§»326);
        وœ¬هœ°ه€¼332.set(و•°وچ®327.subarray(هپڈç§»326, هپڈç§»326 + ه¤§ه°ڈ323), ه€¼ه­—èٹ‚);
        ه€¼ه­—èٹ‚ += ه¤§ه°ڈ323;
        هپڈç§»326 += ه¤§ه°ڈ323;
        وœ¬هœ°ه€¼330++;
        if (ه€¼ه­—èٹ‚ === وœ¬هœ°ه€¼334 || وœ¬هœ°ه€¼334 - ه€¼ه­—èٹ‚ < ه°¾éƒ¨) هˆ·و–°();else ه¤„çگ†وœ¬هœ°ه€¼();
      }
    },
    flush: هˆ·و–°
  };
}
function ه¤„çگ†و‰“ه¼€ه€¼ه¥—وژ¥ه­—(هœ°ه‌€322, ç«¯هڈ£321, è¯·و±‚ه€¼320 = null) {
  const ç›®و ‡ = {
    hostname: هœ°ه‌€322,
    port: ç«¯هڈ£321
  };
  if (è¯·و±‚ه€¼320 && typeof è¯·و±‚ه€¼320.connect === 'function') return è¯·و±‚ه€¼320.connect(ç›®و ‡);
  return è؟‍وژ¥(ç›®و ‡);
}
async function ه¤„çگ†و‰“ه¼€ه€¼ه¥—وژ¥ه­—ه€¼(هœ°ه‌€319, ç«¯هڈ£318, è¯·و±‚ه€¼317 = null) {
  try {
    const ه¥—وژ¥ه­—316 = ه¤„çگ†و‰“ه¼€ه€¼ه¥—وژ¥ه­—(هœ°ه‌€319, ç«¯هڈ£318, è¯·و±‚ه€¼317);
    if (ه¥—وژ¥ه­—316?.opened) await ه¥—وژ¥ه­—316.opened;
    return ه¥—وژ¥ه­—316;
  } catch (é”™è¯¯315) {
    if (!è¯·و±‚ه€¼317) throw é”™è¯¯315;
    const ه¥—وژ¥ه­—314 = è؟‍وژ¥({
      hostname: هœ°ه‌€319,
      port: ç«¯هڈ£318
    });
    if (ه¥—وژ¥ه­—314?.opened) await ه¥—وژ¥ه­—314.opened;
    return ه¥—وژ¥ه­—314;
  }
}
async function è؟‍وژ¥ه€¼ه¥—وژ¥ه­—(هœ°ه‌€313, ç«¯هڈ£312, è¯·و±‚ه€¼311 = null, ç«‍é€ںو•°é‡ڈ = 1) {
  const و•°é‡ڈ = Math.max(1, ç«‍é€ںو•°é‡ڈ | 0);
  if (و•°é‡ڈ <= 1) return ه¤„çگ†و‰“ه¼€ه€¼ه¥—وژ¥ه­—ه€¼(هœ°ه‌€313, ç«¯هڈ£312, è¯·و±‚ه€¼311);
  const وœ¬هœ°ه€¼310 = Array.from({
    length: و•°é‡ڈ
  }, () => ه¤„çگ†و‰“ه¼€ه€¼ه¥—وژ¥ه­—ه€¼(هœ°ه‌€313, ç«¯هڈ£312, è¯·و±‚ه€¼311));
  const وœ¬هœ°ه€¼309 = await Promise.any(وœ¬هœ°ه€¼310);
  وœ¬هœ°ه€¼310.forEach(وœ¬هœ°ه€¼308 => {
    وœ¬هœ°ه€¼308.then(ه¥—وژ¥ه­—307 => {
      if (ه¥—وژ¥ه­—307 !== وœ¬هœ°ه€¼309) {
        try {
          ه¥—وژ¥ه­—307.close();
        } catch (ه؟½ç•¥ه€¼306) {}
      }
    }, () => {});
  });
  return وœ¬هœ°ه€¼309;
}
function èژ·هڈ–ه”¯ن¸€و ‡è¯†ه­—èٹ‚(ن»¤ç‰Œ305) {
  if (ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک.has(ن»¤ç‰Œ305)) return ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک.get(ن»¤ç‰Œ305);
  const هچپه…­è؟›هˆ¶ = String(ن»¤ç‰Œ305 || '').replace(/-/g, '');
  if (هچپه…­è؟›هˆ¶.length !== 32) return null;
  const ه­—èٹ‚304 = new Uint8Array(16);
  for (let ç´¢ه¼•ه€¼303 = 0; ç´¢ه¼•ه€¼303 < 16; ç´¢ه¼•ه€¼303++) {
    const ه€¼302 = Number.parseInt(هچپه…­è؟›هˆ¶.slice(ç´¢ه¼•ه€¼303 * 2, ç´¢ه¼•ه€¼303 * 2 + 2), 16);
    if (Number.isNaN(ه€¼302)) return null;
    ه­—èٹ‚304[ç´¢ه¼•ه€¼303] = ه€¼302;
  }
  if (ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک.size > 16) ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک.clear();
  ه”¯ن¸€و ‡è¯†ه­—èٹ‚ç¼“ه­ک.set(ن»¤ç‰Œ305, ه­—èٹ‚304);
  return ه­—èٹ‚304;
}
function ه¤„çگ†ه€¼ه”¯ن¸€و ‡è¯†(ه­—èٹ‚301, هپڈç§»300, ن»¤ç‰Œ299) {
  const و ‡è¯†298 = èژ·هڈ–ه”¯ن¸€و ‡è¯†ه­—èٹ‚(ن»¤ç‰Œ299);
  return !!و ‡è¯†298 && ه­—èٹ‚301[هپڈç§»300] === و ‡è¯†298[0] && ه­—èٹ‚301[هپڈç§»300 + 1] === و ‡è¯†298[1] && ه­—èٹ‚301[هپڈç§»300 + 2] === و ‡è¯†298[2] && ه­—èٹ‚301[هپڈç§»300 + 3] === و ‡è¯†298[3] && ه­—èٹ‚301[هپڈç§»300 + 4] === و ‡è¯†298[4] && ه­—èٹ‚301[هپڈç§»300 + 5] === و ‡è¯†298[5] && ه­—èٹ‚301[هپڈç§»300 + 6] === و ‡è¯†298[6] && ه­—èٹ‚301[هپڈç§»300 + 7] === و ‡è¯†298[7] && ه­—èٹ‚301[هپڈç§»300 + 8] === و ‡è¯†298[8] && ه­—èٹ‚301[هپڈç§»300 + 9] === و ‡è¯†298[9] && ه­—èٹ‚301[هپڈç§»300 + 10] === و ‡è¯†298[10] && ه­—èٹ‚301[هپڈç§»300 + 11] === و ‡è¯†298[11] && ه­—èٹ‚301[هپڈç§»300 + 12] === و ‡è¯†298[12] && ه­—èٹ‚301[هپڈç§»300 + 13] === و ‡è¯†298[13] && ه­—èٹ‚301[هپڈç§»300 + 14] === و ‡è¯†298[14] && ه­—èٹ‚301[هپڈç§»300 + 15] === و ‡è¯†298[15];
}
function è§£و‍گç½‘é،µه¥—وژ¥ه­—ه€¼ه¤´éƒ¨(ه‌—297, ن»¤ç‰Œ) {
  const ه­—èٹ‚296 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه‌—297);
  if (ه­—èٹ‚296.byteLength < 24) return {
    hasError: true,
    message: é”™è¯¯_و— و•ˆو•°وچ®
  };
  const وœ¬هœ°ه€¼295 = ه­—èٹ‚296.subarray(0, 1);
  if (!ه¤„çگ†ه€¼ه”¯ن¸€و ‡è¯†(ه­—èٹ‚296, 1, ن»¤ç‰Œ)) return {
    hasError: true,
    message: é”™è¯¯_و— و•ˆç”¨وˆ·
  };
  const ه€¼é•؟ه؛¦294 = ه­—èٹ‚296[17];
  const ه‘½ن»¤ç´¢ه¼• = 18 + ه€¼é•؟ه؛¦294;
  if (ه­—èٹ‚296.byteLength < ه‘½ن»¤ç´¢ه¼• + 5) return {
    hasError: true,
    message: é”™è¯¯_و— و•ˆو•°وچ®
  };
  const ه‘½ن»¤293 = ه­—èٹ‚296[ه‘½ن»¤ç´¢ه¼•];
  let وک¯هگ¦ç”¨وˆ·و•°وچ®وٹ¥ = false;
  if (ه‘½ن»¤293 === 1) {} else if (ه‘½ن»¤293 === 2) {
    وک¯هگ¦ç”¨وˆ·و•°وچ®وٹ¥ = true;
  } else {
    return {
      hasError: true,
      message: é”™è¯¯_ن¸چو”¯وŒپه‘½ن»¤
    };
  }
  const ç«¯هڈ£ç´¢ه¼•292 = 19 + ه€¼é•؟ه؛¦294;
  const ç«¯هڈ£291 = ه­—èٹ‚296[ç«¯هڈ£ç´¢ه¼•292] << 8 | ه­—èٹ‚296[ç«¯هڈ£ç´¢ه¼•292 + 1];
  let هœ°ه‌€ç´¢ه¼•290 = ç«¯هڈ£ç´¢ه¼•292 + 2,
    هœ°ه‌€é•؟ه؛¦289 = 0,
    هœ°ه‌€ه€¼ç´¢ه¼• = هœ°ه‌€ç´¢ه¼•290 + 1,
    ن¸»وœ؛هگچ288 = '';
  const هœ°ه‌€ç±»ه‍‹287 = ه­—èٹ‚296[هœ°ه‌€ç´¢ه¼•290];
  switch (هœ°ه‌€ç±»ه‍‹287) {
    case هœ°ه‌€ç±»ه‍‹_ه››ç‰ˆ:
      هœ°ه‌€é•؟ه؛¦289 = 4;
      if (ه­—èٹ‚296.byteLength < هœ°ه‌€ه€¼ç´¢ه¼• + هœ°ه‌€é•؟ه؛¦289) return {
        hasError: true,
        message: é”™è¯¯_و— و•ˆو•°وچ®
      };
      ن¸»وœ؛هگچ288 = `${ه­—èٹ‚296[هœ°ه‌€ه€¼ç´¢ه¼•]}.${ه­—èٹ‚296[هœ°ه‌€ه€¼ç´¢ه¼• + 1]}.${ه­—èٹ‚296[هœ°ه‌€ه€¼ç´¢ه¼• + 2]}.${ه­—èٹ‚296[هœ°ه‌€ه€¼ç´¢ه¼• + 3]}`;
      break;
    case هœ°ه‌€ç±»ه‍‹_ç½‘ه‌€:
      if (ه­—èٹ‚296.byteLength < هœ°ه‌€ه€¼ç´¢ه¼• + 1) return {
        hasError: true,
        message: é”™è¯¯_و— و•ˆو•°وچ®
      };
      هœ°ه‌€é•؟ه؛¦289 = ه­—èٹ‚296[هœ°ه‌€ه€¼ç´¢ه¼•++];
      if (ه­—èٹ‚296.byteLength < هœ°ه‌€ه€¼ç´¢ه¼• + هœ°ه‌€é•؟ه؛¦289) return {
        hasError: true,
        message: é”™è¯¯_و— و•ˆو•°وچ®
      };
      ن¸»وœ؛هگچ288 = ه…±ن؛«è§£ç په™¨.decode(ه­—èٹ‚296.subarray(هœ°ه‌€ه€¼ç´¢ه¼•, هœ°ه‌€ه€¼ç´¢ه¼• + هœ°ه‌€é•؟ه؛¦289));
      break;
    case هœ°ه‌€ç±»ه‍‹_ه…­ç‰ˆ:
      هœ°ه‌€é•؟ه؛¦289 = 16;
      if (ه­—èٹ‚296.byteLength < هœ°ه‌€ه€¼ç´¢ه¼• + هœ°ه‌€é•؟ه؛¦289) return {
        hasError: true,
        message: é”™è¯¯_و— و•ˆو•°وچ®
      };
      const ه€¼6286 = [];
      const ه€¼6è§†ه›¾ = new DataView(ه­—èٹ‚296.buffer, ه­—èٹ‚296.byteOffset + هœ°ه‌€ه€¼ç´¢ه¼•, هœ°ه‌€é•؟ه؛¦289);
      for (let ç´¢ه¼•ه€¼285 = 0; ç´¢ه¼•ه€¼285 < 8; ç´¢ه¼•ه€¼285++) ه€¼6286.push(ه€¼6è§†ه›¾.getUint16(ç´¢ه¼•ه€¼285 * 2).toString(16));
      ن¸»وœ؛هگچ288 = ه€¼6286.join(':');
      break;
    default:
      return {
        hasError: true,
        message: `${é”™è¯¯_و— و•ˆهœ°ه‌€ç±»ه‍‹}: ${هœ°ه‌€ç±»ه‍‹287}`
      };
  }
  if (!ن¸»وœ؛هگچ288) return {
    hasError: true,
    message: `${é”™è¯¯_ç©؛هœ°ه‌€}: ${هœ°ه‌€ç±»ه‍‹287}`
  };
  return {
    hasError: false,
    addressType: هœ°ه‌€ç±»ه‍‹287,
    port: ç«¯هڈ£291,
    hostname: ن¸»وœ؛هگچ288,
    isUDP: وک¯هگ¦ç”¨وˆ·و•°وچ®وٹ¥,
    rawIndex: هœ°ه‌€ه€¼ç´¢ه¼• + هœ°ه‌€é•؟ه؛¦289,
    version: وœ¬هœ°ه€¼295
  };
}
function هˆ¶ن½œه€¼وµپ(ه¥—وژ¥ه­—284, ه€¼و•°وچ®ه¤´éƒ¨) {
  let وœ¬هœ°ه€¼283 = false;
  return new ReadableStream({
    start(وژ§هˆ¶ه™¨282) {
      ه¥—وژ¥ه­—284.addEventListener('message', ن؛‹ن»¶ => {
        if (!وœ¬هœ°ه€¼283) وژ§هˆ¶ه™¨282.enqueue(ه¤„çگ†ه€¼ه€¼8و•°ç»„(ن؛‹ن»¶.data));
      });
      ه¥—وژ¥ه­—284.addEventListener('close', () => {
        if (!وœ¬هœ°ه€¼283) {
          ه…³é—­ه¥—وژ¥ه­—ه€¼(ه¥—وژ¥ه­—284);
          وژ§هˆ¶ه™¨282.close();
        }
      });
      ه¥—وژ¥ه­—284.addEventListener('error', é”™è¯¯281 => وژ§هˆ¶ه™¨282.error(é”™è¯¯281));
      const {
        earlyData: ه€¼و•°وچ®,
        error: é”™è¯¯280
      } = ه¤„çگ†هں؛ç،€64ه€¼و•°ç»„(ه€¼و•°وچ®ه¤´éƒ¨);
      if (é”™è¯¯280) وژ§هˆ¶ه™¨282.error(é”™è¯¯280);else if (ه€¼و•°وچ®) وژ§هˆ¶ه™¨282.enqueue(ه¤„çگ†ه€¼ه€¼8و•°ç»„(ه€¼و•°وچ®));
    },
    cancel() {
      وœ¬هœ°ه€¼283 = true;
      ه…³é—­ه¥—وژ¥ه­—ه€¼(ه¥—وژ¥ه­—284);
    }
  });
}
async function è؟‍وژ¥ه€¼279(è؟œç¨‹ه¥—وژ¥ه­—, ç½‘é،µه¥—وژ¥ه­—278, ه¤´éƒ¨و•°وچ®, é‡چè¯•ه€¼) {
  let ه¤´éƒ¨277 = ه¤´éƒ¨و•°وچ®,
    وک¯هگ¦وœ‰و•°وچ® = false,
    وœ¬هœ°ه€¼276 = false;

  // ه…³é”®ï¼ڑç›´è؟‍وœ‰و—¶وڈ،و‰‹وˆگهٹںن½†è؟œç«¯é•؟و—¶é—´و— و•°وچ®ï¼Œéœ€è¦پè¶…و—¶è§¦هڈ‘é™چç؛§
  let é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨ = null;
  if (é‡چè¯•ه€¼) {
    é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨ = setTimeout(() => {
      if (!وک¯هگ¦وœ‰و•°وچ® && !وœ¬هœ°ه€¼276) {
        وœ¬هœ°ه€¼276 = true;
        try {
          è؟œç¨‹ه¥—وژ¥ه­—.close && è؟œç¨‹ه¥—وژ¥ه­—.close();
        } catch (ه؟½ç•¥ه€¼275) {}
        é‡چè¯•ه€¼();
      }
    }, é¦–ه­—èٹ‚è¶…و—¶);
  }
  const وœ¬هœ°ه€¼274 = هˆ›ه»؛ه€¼ه€¼(ç½‘é،µه¥—وژ¥ه­—278);
  let è¯»هڈ–ه™¨273 = null;
  let وœ¬هœ°ه€¼272 = true;
  let ç¼“ه†²271 = new ArrayBuffer(ن¼ è¾“ه‌—ه¤§ه°ڈ);
  try {
    try {
      è¯»هڈ–ه™¨273 = è؟œç¨‹ه¥—وژ¥ه­—.readable.getReader({
        mode: 'byob'
      });
    } catch (ه؟½ç•¥ه€¼270) {
      وœ¬هœ°ه€¼272 = false;
      è¯»هڈ–ه™¨273 = è؟œç¨‹ه¥—وژ¥ه­—.readable.getReader();
    }
    for (;;) {
      const ç»“و‍œ269 = وœ¬هœ°ه€¼272 ? await è¯»هڈ–ه™¨273.read(new Uint8Array(ç¼“ه†²271, 0, ن¼ è¾“ه‌—ه¤§ه°ڈ)) : await è¯»هڈ–ه™¨273.read();
      if (ç»“و‍œ269.done) break;
      const è¯»هڈ–ه€¼ = ç»“و‍œ269.value;
      let ه‌—268 = ه¤„çگ†ه€¼ه€¼8و•°ç»„(è¯»هڈ–ه€¼);
      const ه€¼ç¼“ه†² = وœ¬هœ°ه€¼272 && è¯»هڈ–ه€¼?.buffer instanceof ArrayBuffer && è¯»هڈ–ه€¼.buffer.byteLength >= ن¼ è¾“ه‌—ه¤§ه°ڈ ? è¯»هڈ–ه€¼.buffer : new ArrayBuffer(ن¼ è¾“ه‌—ه¤§ه°ڈ);
      if (!ه‌—268.byteLength) continue;
      if (!وک¯هگ¦وœ‰و•°وچ®) {
        وک¯هگ¦وœ‰و•°وچ® = true;
        if (é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨) {
          clearTimeout(é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨);
          é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨ = null;
        }
      }
      if (ç½‘é،µه¥—وژ¥ه­—278.readyState !== 1) throw new Error(é”™è¯¯_ç½‘é،µه¥—وژ¥ه­—وœھو‰“ه¼€);
      if (ه¤´éƒ¨277) {
        ه‌—268 = و‹¼وژ¥ه€¼8و•°ç»„(ه¤´éƒ¨277, ه‌—268);
        ه¤´éƒ¨277 = null;
      }
      if (ه‌—268.byteLength >= ن¼ è¾“ه‌—ه¤§ه°ڈ >> 1) {
        وœ¬هœ°ه€¼274.flush();
        ç½‘é،µه¥—وژ¥ه­—278.send(ه‌—268);
        if (وœ¬هœ°ه€¼272) ç¼“ه†²271 = new ArrayBuffer(ن¼ è¾“ه‌—ه¤§ه°ڈ);
      } else {
        وœ¬هœ°ه€¼274.send(ه‌—268.slice());
        if (وœ¬هœ°ه€¼272) ç¼“ه†²271 = ه€¼ç¼“ه†²;
      }
    }
    وœ¬هœ°ه€¼274.flush();
  } catch (é”™è¯¯267) {
    // ه·²ç»ڈè§¦هڈ‘ retry و—¶ن¸چè¦په…³é—­ WSï¼ˆretry ن¼ڑé‡چو–°وŒ‚è½½و–° socketï¼‰
    if (!وœ¬هœ°ه€¼276) ه…³é—­ه¥—وژ¥ه­—ه€¼(ç½‘é،µه¥—وژ¥ه­—278);
  } finally {
    try {
      وœ¬هœ°ه€¼274.flush();
    } catch (ه؟½ç•¥ه€¼266) {}
    try {
      è¯»هڈ–ه™¨273?.releaseLock();
    } catch (ه؟½ç•¥ه€¼265) {}
  }
  if (é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨) {
    clearTimeout(é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨);
    é¦–و¬،ه­—èٹ‚è®،و—¶ه™¨ = null;
  }
  if (!وک¯هگ¦وœ‰و•°وچ® && !وœ¬هœ°ه€¼276 && é‡چè¯•ه€¼) é‡چè¯•ه€¼();
}
async function ه¤„çگ†ه€¼ç”¨وˆ·و•°وچ®وٹ¥(ç”¨وˆ·و•°وچ®وٹ¥ه‌—, ç½‘é،µه¥—وژ¥ه­—, ه€¼ه¤´éƒ¨, è¯·و±‚ه€¼ = null) {
  try {
    const ه€¼ه¥—وژ¥ه­— = await è؟‍وژ¥ه€¼ه¥—وژ¥ه­—('8.8.4.4', 53, è¯·و±‚ه€¼, 1);
    let ه¤´éƒ¨ = ه€¼ه¤´éƒ¨;
    const ه†™ه…¥ه™¨264 = ه€¼ه¥—وژ¥ه­—.writable.getWriter();
    await ه†™ه…¥ه™¨264.write(ç”¨وˆ·و•°وچ®وٹ¥ه‌—);
    ه†™ه…¥ه™¨264.releaseLock();
    await è؟‍وژ¥ه€¼279(ه€¼ه¥—وژ¥ه­—, ç½‘é،µه¥—وژ¥ه­—, ه¤´éƒ¨, null);
  } catch (é”™è¯¯263) {}
}
async function ه¤„çگ†ه€¼ن»£çگ†è؟‍وژ¥(هœ°ه‌€ç±»ه‍‹, هœ°ه‌€262, ç«¯هڈ£261, ن»£çگ†é…چç½® = ه·²è§£و‍گن»£çگ†5é…چç½®) {
  const {
    username: وœ¬هœ°ه€¼260,
    password: ه¯†ç پ259,
    hostname: ن¸»وœ؛هگچ258,
    socksPort: ن»£çگ†ç«¯هڈ£257
  } = ن»£çگ†é…چç½®;
  const ه¥—وژ¥ه­—256 = è؟‍وژ¥({
    hostname: ن¸»وœ؛هگچ258,
    port: ن»£çگ†ç«¯هڈ£257
  });
  const ه†™ه…¥ه™¨255 = ه¥—وژ¥ه­—256.writable.getWriter();
  await ه†™ه…¥ه™¨255.write(new Uint8Array(وœ¬هœ°ه€¼260 ? [5, 2, 0, 2] : [5, 1, 0]));
  const è¯»هڈ–ه™¨254 = ه¥—وژ¥ه­—256.readable.getReader();
  let وœ¬هœ°ه€¼253 = (await è¯»هڈ–ه™¨254.read()).value;
  if (وœ¬هœ°ه€¼253[0] !== 5 || وœ¬هœ°ه€¼253[1] === 255) throw new Error(é”™è¯¯_ن»£çگ†و— هڈ¯ç”¨و–¹و³•);
  if (وœ¬هœ°ه€¼253[1] === 2) {
    if (!وœ¬هœ°ه€¼260 || !ه¯†ç پ259) throw new Error(é”™è¯¯_ن»£çگ†éœ€è¦پè®¤è¯پ);
    const ç¼–ç په™¨252 = new TextEncoder();
    const è®¤è¯پè¯·و±‚ = new Uint8Array([1, وœ¬هœ°ه€¼260.length, ...ç¼–ç په™¨252.encode(وœ¬هœ°ه€¼260), ه¯†ç پ259.length, ...ç¼–ç په™¨252.encode(ه¯†ç پ259)]);
    await ه†™ه…¥ه™¨255.write(è®¤è¯پè¯·و±‚);
    وœ¬هœ°ه€¼253 = (await è¯»هڈ–ه™¨254.read()).value;
    if (وœ¬هœ°ه€¼253[0] !== 1 || وœ¬هœ°ه€¼253[1] !== 0) throw new Error(é”™è¯¯_ن»£çگ†è®¤è¯په¤±è´¥);
  }
  const ç¼–ç په™¨251 = new TextEncoder();
  let وœ¬هœ°ه€¼250;
  switch (هœ°ه‌€ç±»ه‍‹) {
    case هœ°ه‌€ç±»ه‍‹_ه››ç‰ˆ:
      وœ¬هœ°ه€¼250 = new Uint8Array([1, ...هœ°ه‌€262.split('.').map(Number)]);
      break;
    case هœ°ه‌€ç±»ه‍‹_ç½‘ه‌€:
      وœ¬هœ°ه€¼250 = new Uint8Array([3, هœ°ه‌€262.length, ...ç¼–ç په™¨251.encode(هœ°ه‌€262)]);
      break;
    case هœ°ه‌€ç±»ه‍‹_ه…­ç‰ˆ:
      وœ¬هœ°ه€¼250 = new Uint8Array([4, ...هœ°ه‌€262.split(':').flatMap(و¨ھه€¼ => [parseInt(و¨ھه€¼.slice(0, 2), 16), parseInt(و¨ھه€¼.slice(2), 16)])]);
      break;
    default:
      throw new Error(é”™è¯¯_و— و•ˆهœ°ه‌€ç±»ه‍‹);
  }
  await ه†™ه…¥ه™¨255.write(new Uint8Array([5, 1, 0, ...وœ¬هœ°ه€¼250, ç«¯هڈ£261 >> 8, ç«¯هڈ£261 & 255]));
  وœ¬هœ°ه€¼253 = (await è¯»هڈ–ه™¨254.read()).value;
  if (وœ¬هœ°ه€¼253[1] !== 0) throw new Error(é”™è¯¯_ن»£çگ†è؟‍وژ¥ه¤±è´¥);
  ه†™ه…¥ه™¨255.releaseLock();
  è¯»هڈ–ه™¨254.releaseLock();
  return ه¥—وژ¥ه­—256;
}
function è§£و‍گن»£çگ†é…چç½®(هœ°ه‌€249) {
  let [وœ¬هœ°ه€¼248, وœ¬هœ°ه€¼247] = هœ°ه‌€249.split("@").reverse();
  let وœ¬هœ°ه€¼246, ه¯†ç پ245, ن¸»وœ؛هگچ244, ن»£çگ†ç«¯هڈ£;
  if (وœ¬هœ°ه€¼247) {
    const وœ¬هœ°ه€¼243 = وœ¬هœ°ه€¼247.split(":");
    if (وœ¬هœ°ه€¼243.length !== 2) throw new Error(é”™è¯¯_و— و•ˆن»£çگ†هœ°ه‌€);
    [وœ¬هœ°ه€¼246, ه¯†ç پ245] = وœ¬هœ°ه€¼243;
  }
  const وœ¬هœ°ه€¼242 = وœ¬هœ°ه€¼248.split(":");
  ن»£çگ†ç«¯هڈ£ = Number(وœ¬هœ°ه€¼242.pop());
  if (isNaN(ن»£çگ†ç«¯هڈ£)) throw new Error(é”™è¯¯_و— و•ˆن»£çگ†هœ°ه‌€);
  ن¸»وœ؛هگچ244 = وœ¬هœ°ه€¼242.join(":");
  if (ن¸»وœ؛هگچ244.includes(":") && !/^\[.*\]$/.test(ن¸»وœ؛هگچ244)) throw new Error(é”™è¯¯_و— و•ˆن»£çگ†هœ°ه‌€);
  return {
    username: وœ¬هœ°ه€¼246,
    password: ه¯†ç پ245,
    hostname: ن¸»وœ؛هگچ244,
    socksPort: ن»£çگ†ç«¯هڈ£
  };
}
async function ه¤„çگ†è®¢éک…ه€¼(è¯·و±‚241, ç”¨وˆ·240 = null) {
  if (!ç”¨وˆ·240) ç”¨وˆ·240 = è®¤è¯پن»¤ç‰Œ;
  const ç½‘ه‌€239 = new URL(è¯·و±‚241.url);
  // ن¼که…ˆو£€وں¥Cookieن¸­çڑ„è¯­è¨€è®¾ç½®
  const ه‡­وچ®ه¤´éƒ¨ = è¯·و±‚241.headers.get('Cookie') || '';
  let è¯­è¨€و‌¥و؛گه‡­وچ® = null;
  if (ه‡­وچ®ه¤´éƒ¨) {
    const وœ¬هœ°ه€¼238 = ه‡­وچ®ه¤´éƒ¨.split(';').map(ن¸™ه€¼237 => ن¸™ه€¼237.trim());
    for (const ه‡­وچ® of وœ¬هœ°ه€¼238) {
      if (ه‡­وچ®.startsWith('preferredLanguage=')) {
        è¯­è¨€و‌¥و؛گه‡­وچ® = ه‡­وچ®.split('=')[1];
        break;
      }
    }
  }
  let وک¯هگ¦ه€¼236 = false;
  if (è¯­è¨€و‌¥و؛گه‡­وچ® === 'fa' || è¯­è¨€و‌¥و؛گه‡­وچ® === 'fa-IR') {
    وک¯هگ¦ه€¼236 = true;
  } else if (è¯­è¨€و‌¥و؛گه‡­وچ® === 'zh' || è¯­è¨€و‌¥و؛گه‡­وچ® === 'zh-CN') {
    وک¯هگ¦ه€¼236 = false;
  } else {
    // ه¦‚و‍œو²،وœ‰Cookieï¼Œن½؟ç”¨وµڈè§ˆه™¨è¯­è¨€و£€وµ‹
    const وژ¥هڈ—è¯­è¨€ = è¯·و±‚241.headers.get('Accept-Language') || '';
    const وµڈè§ˆه™¨è¯­è¨€ = وژ¥هڈ—è¯­è¨€.split(',')[0].split('-')[0].toLowerCase();
    وک¯هگ¦ه€¼236 = وµڈè§ˆه™¨è¯­è¨€ === 'fa' || وژ¥هڈ—è¯­è¨€.includes('fa-IR') || وژ¥هڈ—è¯­è¨€.includes('fa');
  }
  const è¯­è¨€ه€¼ = وک¯هگ¦ه€¼236 ? 'fa-IR' : 'zh-CN';
  const وœ¬هœ°ه€¼235 = {
    zh: {
      title: è§£ç پ64('6K6i6ZiF5Lit5b+D'),
      subtitle: 'ه¤ڑه®¢وˆ·ç«¯و”¯وŒپ â€¢ و™؛èƒ½ن¼کé€‰ â€¢ ن¸€é”®ç”ںوˆگ',
      selectClient: '[ é€‰و‹©ه®¢وˆ·ç«¯ ]',
      systemStatus: '[ ç³»ç»ںçٹ¶و€پ ]',
      configManagement: '[ é…چç½®ç®،çگ† ]',
      relatedLinks: '[ ç›¸ه…³é“¾وژ¥ ]',
      checking: 'و£€وµ‹ن¸­...',
      workerRegion: 'Workerهœ°هŒ؛: ',
      detectionMethod: 'و£€وµ‹و–¹ه¼ڈ: ',
      proxyIPStatus: è§£ç پ64('UHJveHlJUOeKtuaAgTog'),
      currentIP: 'ه½“ه‰چن½؟ç”¨IP: ',
      regionMatch: 'هœ°هŒ؛هŒ¹é…چ: ',
      selectionLogic: 'é€‰و‹©é€»è¾‘: ',
      kvStatusChecking: 'و£€وµ‹KVçٹ¶و€پن¸­...',
      kvEnabled: 'âœ… KVه­که‚¨ه·²هگ¯ç”¨ï¼Œهڈ¯ن»¥ن½؟ç”¨é…چç½®ç®،çگ†هٹںèƒ½',
      kvDisabled: 'âڑ ï¸ڈ KVه­که‚¨وœھهگ¯ç”¨وˆ–وœھé…چç½®',
      specifyRegion: 'وŒ‡ه®ڑهœ°هŒ؛ (wk):',
      autoDetect: 'è‡ھهٹ¨و£€وµ‹',
      saveRegion: 'ن؟‌ه­کهœ°هŒ؛é…چç½®',
      protocolSelection: è§£ç پ64('5Y2P6K6u6YCJ5oupOg=='),
      enableVLESS: è§£ç پ64('5ZCv55SoIFZMRVNTIOWNj+iurg=='),
      enableTrojan: è§£ç پ64('5ZCv55SoIFRyb2phbiDljY/orq4='),
      enableXhttp: è§£ç پ64('5ZCv55SoIHhodHRwIOWNj+iurg=='),
      trojanPassword: è§£ç پ64('VHJvamFuIOWvhueggSAo5Y+v6YCJKTo='),
      customPath: 'è‡ھه®ڑن¹‰è·¯ه¾„ (d):',
      customIP: è§£ç پ64('6Ieq5a6a5LmJUHJveHlJUCAocCk6'),
      preferredIPs: 'ن¼کé€‰IPهˆ—è،¨ (yx):',
      preferredIPsURL: 'ن¼کé€‰IPو‌¥و؛گURL (yxURL):',
      latencyTest: 'ه»¶è؟ںوµ‹è¯•',
      latencyTestIP: 'وµ‹è¯•IP/هںںهگچ:',
      latencyTestIPPlaceholder: 'è¾“ه…¥IPوˆ–هںںهگچï¼Œه¤ڑن¸ھç”¨é€—هڈ·هˆ†éڑ”',
      latencyTestPort: 'ç«¯هڈ£:',
      startTest: 'ه¼€ه§‹وµ‹è¯•',
      stopTest: 'هپœو­¢وµ‹è¯•',
      testResult: 'وµ‹è¯•ç»“و‍œ:',
      addToYx: 'و·»هٹ هˆ°ن¼کé€‰هˆ—è،¨',
      addSelectedToYx: 'و·»هٹ é€‰ن¸­é،¹هˆ°ن¼کé€‰هˆ—è،¨',
      selectAll: 'ه…¨é€‰',
      deselectAll: 'هڈ–و¶ˆه…¨é€‰',
      testingInProgress: 'وµ‹è¯•ن¸­...',
      testComplete: 'وµ‹è¯•ه®Œوˆگ',
      latencyMs: 'ه»¶è؟ں',
      timeout: 'è¶…و—¶',
      ipSource: 'IPو‌¥و؛گ:',
      manualInput: 'و‰‹هٹ¨è¾“ه…¥',
      cfRandomIP: 'CFéڑڈوœ؛IP',
      urlFetch: 'URLèژ·هڈ–',
      randomCount: 'ç”ںوˆگو•°é‡ڈ:',
      fetchURL: 'èژ·هڈ–URL:',
      fetchURLPlaceholder: 'è¾“ه…¥ن¼کé€‰IPçڑ„URLهœ°ه‌€',
      generateIP: 'ç”ںوˆگIP',
      fetchIP: 'èژ·هڈ–IP',
      socks5Config: è§£ç پ64('U09DS1M16YWN572uIChzKTo='),
      customHomepage: 'è‡ھه®ڑن¹‰é¦–é،µURL (homepage):',
      customHomepagePlaceholder: 'ن¾‹ه¦‚: https://example.com',
      customHomepageHint: 'è®¾ç½®è‡ھه®ڑن¹‰URLن½œن¸؛é¦–é،µن¼ھè£…م€‚è®؟é—®و ¹è·¯ه¾„ / و—¶ه°†وک¾ç¤؛è¯¥URLçڑ„ه†…ه®¹م€‚ç•™ç©؛هˆ™وک¾ç¤؛é»کè®¤ç»ˆç«¯é،µé‌¢م€‚',
      saveConfig: 'ن؟‌ه­کé…چç½®',
      advancedControl: 'é«کç؛§وژ§هˆ¶',
      subscriptionConverter: è§£ç پ64('6K6i6ZiF6L2s5o2i5Zyw5Z2AOg=='),
      builtinPreferred: 'ه†…ç½®ن¼کé€‰ç±»ه‍‹:',
      enablePreferredDomain: 'هگ¯ç”¨ن¼کé€‰هںںهگچ',
      enablePreferredIP: 'هگ¯ç”¨ن¼کé€‰ IP',
      enableNativeAddress: 'هگ¯ç”¨هژںç”ںهœ°ه‌€',
      enableGitHubPreferred: 'هگ¯ç”¨è‡ھه®ڑن¹‰ن¼کé€‰',
      allowAPIManagement: 'ه…پè®¸APIç®،çگ† (ae):',
      regionMatching: 'هœ°هŒ؛هŒ¹é…چ (rm):',
      downgradeControl: 'é™چç؛§وژ§هˆ¶ (qj):',
      tlsControl: 'TLSوژ§هˆ¶ (dkby):',
      preferredControl: 'ن¼کé€‰وژ§هˆ¶ (yxby):',
      saveAdvanced: 'ن؟‌ه­کé«کç؛§é…چç½®',
      loading: 'هٹ è½½ن¸­...',
      currentConfig: 'ًں“چ ه½“ه‰چè·¯ه¾„é…چç½®',
      refreshConfig: 'هˆ·و–°é…چç½®',
      resetConfig: 'é‡چç½®é…چç½®',
      subscriptionCopied: è§£ç پ64('6K6i6ZiF6ZO+5o6l5bey5aSN5Yi2'),
      autoSubscriptionCopied: è§£ç پ64('6Ieq5Yqo6K+G5Yir6K6i6ZiF6ZO+5o6l5bey5aSN5Yi277yM5a6i5oi356uv6K6/6Zeu5pe25Lya5qC55o2uVXNlci1BZ2VudOiHquWKqOivhuWIq+W5tui/lOWbnuWvueW6lOagvOW8jw=='),
      trojanPasswordPlaceholder: 'ç•™ç©؛هˆ™è‡ھهٹ¨ن½؟ç”¨ UUID',
      trojanPasswordHint: è§£ç پ64('6K6+572u6Ieq5a6a5LmJIFRyb2phbiDlr4bnoIHjgILnlZnnqbrliJnkvb/nlKggVVVJROOAguWuouaIt+err+S8muiHquWKqOWvueWvhueggei/m+ihjCBTSEEyMjQg5ZOI5biM44CC'),
      protocolHint: è§£ç پ64('5Y+v5Lul5ZCM5pe25ZCv55So5aSa5Liq5Y2P6K6u44CC6K6i6ZiF5bCG55Sf5oiQ6YCJ5Lit5Y2P6K6u55qE6IqC54K544CCPGJyPuKAoiBWTEVTUyBXUzog5Z+65LqOIFdlYlNvY2tldCDnmoTmoIflh4bljY/orq48YnI+4oCiIFRyb2phbjog5L2/55SoIFNIQTIyNCDlr4bnoIHorqTor4E8YnI+4oCiIHhodHRwOiDln7rkuo4gSFRUUCBQT1NUIOeahOS8quijheWNj+iuru+8iOmcgOimgee7keWumuiHquWumuS5ieWfn+WQjeW5tuW8gOWQryBnUlBD77yJ'),
      enableECH: 'هگ¯ç”¨ ECH (Encrypted Client Hello)',
      enableECHHint: è§£ç پ64('5ZCv55So5ZCO77yM5q+P5qyh5Yi35paw6K6i6ZiF5pe25Lya6Ieq5Yqo5LuOIERvSCDojrflj5bmnIDmlrDnmoQgRUNIIOmFjee9ruW5tua3u+WKoOWIsOmTvuaOpeS4rQ=='),
      customDNS: 'è‡ھه®ڑن¹‰ DNS وœچهٹ،ه™¨',
      customDNSPlaceholder: 'ن¾‹ه¦‚: https://223.5.5.5/dns-query',
      customDNSHint: 'ç”¨ن؛ژECHé…چç½®وں¥è¯¢çڑ„DNSوœچهٹ،ه™¨هœ°ه‌€ï¼ˆDoHو ¼ه¼ڈï¼‰',
      customECHDomain: 'è‡ھه®ڑن¹‰ ECH هںںهگچ',
      customECHDomainPlaceholder: 'ن¾‹ه¦‚: cloudflare-ech.com',
      customECHDomainHint: 'ECHé…چç½®ن¸­ن½؟ç”¨çڑ„هںںهگچï¼Œç•™ç©؛هˆ™ن½؟ç”¨é»کè®¤ه€¼',
      alpn: 'TLS ALPN',
      alpnDefault: 'é»کè®¤ï¼ˆç•™ç©؛ï¼Œç”±ه®¢وˆ·ç«¯هچڈه•†ï¼‰',
      alpnHint: 'ن»…و·»هٹ هˆ° TLS èٹ‚ç‚¹é“¾وژ¥هڈ‚و•°ï¼›ç•™ç©؛هˆ™ن¸چه†™ alpnم€‚',
      saveProtocol: è§£ç پ64('5L+d5a2Y5Y2P6K6u6YWN572u'),
      subscriptionConverterPlaceholder: 'é»کè®¤: https://url.v1.mk/sub',
      subscriptionConverterHint: è§£ç پ64('6K6i6ZiF6L2s5o2i5bey5YaF6YOo5a6e546w77yM5peg6ZyA5aSW6YOoIEFQSeOAguatpOmhueS7heS9nOWFvOWuueS/neeVme+8jOWPr+eVmeepuuOAgg=='),
      builtinPreferredHint: è§£ç پ64('5o6n5Yi26K6i6ZiF5Lit5YyF5ZCr5ZOq5Lqb5YaF572u5LyY6YCJ6IqC54K544CC6buY6K6k5YWo6YOo5ZCv55So44CC'),
      apiEnabledDefault: 'é»کè®¤ï¼ˆه…³é—­APIï¼‰',
      apiEnabledYes: 'ه¼€هگ¯APIç®،çگ†',
      apiEnabledHint: 'âڑ ï¸ڈ ه®‰ه…¨وڈگé†’ï¼ڑه¼€هگ¯هگژه…پè®¸é€ڑè؟‡APIهٹ¨و€پو·»هٹ ن¼کé€‰IPم€‚ه»؛è®®ن»…هœ¨éœ€è¦پو—¶ه¼€هگ¯م€‚',
      regionMatchingDefault: 'é»کè®¤ï¼ˆهگ¯ç”¨هœ°هŒ؛هŒ¹é…چï¼‰',
      regionMatchingNo: 'ه…³é—­هœ°هŒ؛هŒ¹é…چ',
      regionMatchingHint: 'è®¾ç½®ن¸؛"ه…³é—­"و—¶ن¸چè؟›è،Œهœ°هŒ؛و™؛èƒ½هŒ¹é…چ',
      downgradeControlDefault: 'é»کè®¤ï¼ˆن¸چهگ¯ç”¨é™چç؛§ï¼‰',
      downgradeControlNo: 'هگ¯ç”¨é™چç؛§و¨،ه¼ڈ',
      downgradeControlHint: è§£ç پ64('6K6+572u5Li6IuWQr+eUqCLml7bvvJpDRuebtOi/nuWksei0peKGklNPQ0tTNei/nuaOpeKGkmZhbGxiYWNr5Zyw5Z2A'),
      tlsControlDefault: 'é»کè®¤ï¼ˆن؟‌ç•™و‰€وœ‰èٹ‚ç‚¹ï¼‰',
      tlsControlYes: 'ن»…TLSèٹ‚ç‚¹',
      tlsControlHint: 'è®¾ç½®ن¸؛"ن»…TLSèٹ‚ç‚¹"و—¶هڈھç”ںوˆگه¸¦TLSçڑ„èٹ‚ç‚¹ï¼Œن¸چç”ںوˆگé‌‍TLSèٹ‚ç‚¹ï¼ˆه¦‚80ç«¯هڈ£ï¼‰',
      preferredControlDefault: 'é»کè®¤ï¼ˆهگ¯ç”¨ن¼کé€‰ï¼‰',
      preferredControlYes: 'ه…³é—­ن¼کé€‰',
      preferredControlHint: 'è®¾ç½®ن¸؛"ه…³é—­ن¼کé€‰"و—¶هڈھن½؟ç”¨هژںç”ںهœ°ه‌€ï¼Œن¸چç”ںوˆگن¼کé€‰IPه’Œهںںهگچèٹ‚ç‚¹',
      regionNames: {
        HK: 'ًں‡­ًں‡° é¦™و¸¯',
        US: 'ًں‡؛ًں‡¸ ç¾ژه›½',
        SG: 'ًں‡¸ًں‡¬ و–°هٹ ه‌،',
        JP: 'ًں‡¯ًں‡µ و—¥وœ¬',
        KR: 'ًں‡°ًں‡· éں©ه›½',
        DE: 'ًں‡©ًں‡ھ ه¾·ه›½',
        SE: 'ًں‡¸ًں‡ھ ç‘‍ه…¸',
        NL: 'ًں‡³ًں‡± èچ·ه…°',
        FI: 'ًں‡«ًں‡® èٹ¬ه…°',
        GB: 'ًں‡¬ًں‡§ è‹±ه›½'
      },
      terminal: 'ç»ˆç«¯ v2.9.8c',
      githubProject: 'GitHub é،¹ç›®',
      ن¼کé€‰ه·¥ه…·: 'ن¼کé€‰ه·¥ه…·',
      autoDetectClient: 'è‡ھهٹ¨è¯†هˆ«',
      selectionLogicText: 'هگŒهœ°هŒ؛ â†’ é‚»è؟‘هœ°هŒ؛ â†’ ه…¶ن»–هœ°هŒ؛',
      customIPDisabledHint: è§£ç پ64('5L2/55So6Ieq5a6a5LmJUHJveHlJUOaXtu+8jOWcsOWMuumAieaLqeW3suemgeeUqA=='),
      customIPMode: è§£ç پ64('6Ieq5a6a5LmJUHJveHlJUOaooeW8jyAocOWPmOmHj+WQr+eUqCk='),
      customIPModeDesc: 'è‡ھه®ڑن¹‰IPو¨،ه¼ڈ (ه·²ç¦پç”¨هœ°هŒ؛هŒ¹é…چ)',
      usingCustomProxyIP: è§£ç پ64('5L2/55So6Ieq5a6a5LmJUHJveHlJUDog'),
      customIPConfig: ' (pهڈکé‡ڈé…چç½®)',
      customIPModeDisabled: 'è‡ھه®ڑن¹‰IPو¨،ه¼ڈï¼Œهœ°هŒ؛é€‰و‹©ه·²ç¦پç”¨',
      manualRegion: 'و‰‹هٹ¨وŒ‡ه®ڑهœ°هŒ؛',
      manualRegionDesc: ' (و‰‹هٹ¨وŒ‡ه®ڑ)',
      proxyIPAvailable: è§£ç پ64('MTAvMTAg5Y+v55SoIChQcm94eUlQ5Z+f5ZCN6aKE6K6+5Y+v55SoKQ=='),
      smartSelection: 'و™؛èƒ½ه°±è؟‘é€‰و‹©ن¸­',
      sameRegionIP: 'هگŒهœ°هŒ؛IPهڈ¯ç”¨ (1ن¸ھ)',
      cloudflareDetection: 'Cloudflareه†…ç½®و£€وµ‹',
      detectionFailed: 'و£€وµ‹ه¤±è´¥',
      apiTestResult: 'APIو£€وµ‹ç»“و‍œ: ',
      apiTestTime: 'و£€وµ‹و—¶é—´: ',
      apiTestFailed: 'APIو£€وµ‹ه¤±è´¥: ',
      unknownError: 'وœھçں¥é”™è¯¯',
      apiTestError: 'APIوµ‹è¯•ه¤±è´¥: ',
      kvNotConfigured: 'KVه­که‚¨وœھé…چç½®ï¼Œو— و³•ن½؟ç”¨é…چç½®ç®،çگ†هٹںèƒ½م€‚\\n\\nè¯·هœ¨Cloudflare Workersن¸­:\\n1. هˆ›ه»؛KVه‘½هگچç©؛é—´\\n2. ç»‘ه®ڑçژ¯ه¢ƒهڈکé‡ڈ C\\n3. é‡چو–°éƒ¨ç½²ن»£ç پ',
      kvNotEnabled: 'KVه­که‚¨وœھé…چç½®',
      kvCheckFailed: 'KVه­که‚¨و£€وµ‹ه¤±è´¥: ه“چه؛”و ¼ه¼ڈé”™è¯¯',
      kvCheckFailedStatus: 'KVه­که‚¨و£€وµ‹ه¤±è´¥ - çٹ¶و€پç پ: ',
      kvCheckFailedError: 'KVه­که‚¨و£€وµ‹ه¤±è´¥ - é”™è¯¯: '
    },
    fa: {
      title: 'ظ…ط±ع©ط² ط§ط´طھط±ط§ع©',
      subtitle: 'ظ¾ط´طھغŒط¨ط§ظ†غŒ ع†ظ†ط¯ ع©ظ„ط§غŒظ†طھ â€¢ ط§ظ†طھط®ط§ط¨ ظ‡ظˆط´ظ…ظ†ط¯ â€¢ طھظˆظ„غŒط¯ غŒع© ع©ظ„غŒع©غŒ',
      selectClient: '[ ط§ظ†طھط®ط§ط¨ ع©ظ„ط§غŒظ†طھ ]',
      systemStatus: '[ ظˆط¶ط¹غŒطھ ط³غŒط³طھظ… ]',
      configManagement: '[ ظ…ط¯غŒط±غŒطھ طھظ†ط¸غŒظ…ط§طھ ]',
      relatedLinks: '[ ظ„غŒظ†ع©â€Œظ‡ط§غŒ ظ…ط±طھط¨ط· ]',
      checking: 'ط¯ط± ط­ط§ظ„ ط¨ط±ط±ط³غŒ...',
      workerRegion: 'ظ…ظ†ط·ظ‚ظ‡ Worker: ',
      detectionMethod: 'ط±ظˆط´ طھط´ط®غŒطµ: ',
      proxyIPStatus: è§£ç پ64('2YjYtti524zYqiBQcm94eUlQOiA='),
      currentIP: 'IP ظپط¹ظ„غŒ: ',
      regionMatch: 'طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡: ',
      selectionLogic: 'ظ…ظ†ط·ظ‚ ط§ظ†طھط®ط§ط¨: ',
      kvStatusChecking: 'ط¯ط± ط­ط§ظ„ ط¨ط±ط±ط³غŒ ظˆط¶ط¹غŒطھ KV...',
      kvEnabled: 'âœ… ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظپط¹ط§ظ„ ط§ط³طھطŒ ظ…غŒâ€Œطھظˆط§ظ†غŒط¯ ط§ط² ظ…ط¯غŒط±غŒطھ طھظ†ط¸غŒظ…ط§طھ ط§ط³طھظپط§ط¯ظ‡ ع©ظ†غŒط¯',
      kvDisabled: 'âڑ ï¸ڈ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظپط¹ط§ظ„ ظ†غŒط³طھ غŒط§ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھ',
      specifyRegion: 'طھط¹غŒغŒظ† ظ…ظ†ط·ظ‚ظ‡ (wk):',
      autoDetect: 'طھط´ط®غŒطµ ط®ظˆط¯ع©ط§ط±',
      saveRegion: 'ط°ط®غŒط±ظ‡ طھظ†ط¸غŒظ…ط§طھ ظ…ظ†ط·ظ‚ظ‡',
      protocolSelection: 'ط§ظ†طھط®ط§ط¨ ظ¾ط±ظˆطھع©ظ„:',
      enableVLESS: è§£ç پ64('2YHYudin2YTigIzYs9in2LLbjCDZvtix2YjYqtqp2YQgVkxFU1M='),
      enableTrojan: è§£ç پ64('2YHYudin2YTigIzYs9in2LLbjCDZvtix2YjYqtqp2YQgVHJvamFu'),
      enableXhttp: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ظ¾ط±ظˆطھع©ظ„ xhttp',
      enableECH: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ECH (Encrypted Client Hello)',
      enableECHHint: 'ظ¾ط³ ط§ط² ظپط¹ط§ظ„â€Œط³ط§ط²غŒطŒ ط¯ط± ظ‡ط± ط¨ط§ط± طھط§ط²ظ‡â€Œط³ط§ط²غŒ ط§ط´طھط±ط§ع©طŒ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ECH ط¨ظ‡â€Œط±ظˆط² ط¨ظ‡â€Œط·ظˆط± ط®ظˆط¯ع©ط§ط± ط§ط² DoH ط¯ط±غŒط§ظپطھ ط´ط¯ظ‡ ظˆ ط¨ظ‡ ظ„غŒظ†ع©â€Œظ‡ط§ ط§ط¶ط§ظپظ‡ ظ…غŒâ€Œط´ظˆط¯',
      customDNS: 'ط³ط±ظˆط± DNS ط³ظپط§ط±ط´غŒ',
      customDNSPlaceholder: 'ظ…ط«ط§ظ„: https://223.5.5.5/dns-query',
      customDNSHint: 'ط¢ط¯ط±ط³ ط³ط±ظˆط± DNS ط¨ط±ط§غŒ ط¬ط³طھط¬ظˆغŒ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ECH (ظپط±ظ…طھ DoH)',
      customECHDomain: 'ط¯ط§ظ…ظ†ظ‡ ECH ط³ظپط§ط±ط´غŒ',
      customECHDomainPlaceholder: 'ظ…ط«ط§ظ„: cloudflare-ech.com',
      customECHDomainHint: 'ط¯ط§ظ…ظ†ظ‡ ط§ط³طھظپط§ط¯ظ‡ ط´ط¯ظ‡ ط¯ط± ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ECHطŒ ط®ط§ظ„غŒ ط¨ع¯ط°ط§ط±غŒط¯ طھط§ ط§ط² ظ…ظ‚ط¯ط§ط± ظ¾غŒط´â€Œظپط±ط¶ ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯',
      trojanPassword: è§£ç پ64('2LHZhdiyINi52KjZiNixIFRyb2phbiAo2KfYrtiq24zYp9ix24wpOg=='),
      customPath: 'ظ…ط³غŒط± ط³ظپط§ط±ط´غŒ (d):',
      customIP: è§£ç پ64('UHJveHlJUCDYs9mB2KfYsdi024wgKHApOg=='),
      preferredIPs: 'ظ„غŒط³طھ IP طھط±ط¬غŒط­غŒ (yx):',
      preferredIPsURL: 'URL ظ…ظ†ط¨ط¹ IP طھط±ط¬غŒط­غŒ (yxURL):',
      latencyTest: 'طھط³طھ طھط§ط®غŒط±',
      latencyTestIP: 'IP/ط¯ط§ظ…ظ†ظ‡ طھط³طھ:',
      latencyTestIPPlaceholder: 'IP غŒط§ ط¯ط§ظ…ظ†ظ‡ ظˆط§ط±ط¯ ع©ظ†غŒط¯طŒ ع†ظ†ط¯ ظ…ظˆط±ط¯ ط¨ط§ ع©ط§ظ…ط§ ط¬ط¯ط§ ط´ظˆظ†ط¯',
      latencyTestPort: 'ظ¾ظˆط±طھ:',
      startTest: 'ط´ط±ظˆط¹ طھط³طھ',
      stopTest: 'طھظˆظ‚ظپ طھط³طھ',
      testResult: 'ظ†طھغŒط¬ظ‡ طھط³طھ:',
      addToYx: 'ط§ظپط²ظˆط¯ظ† ط¨ظ‡ ظ„غŒط³طھ طھط±ط¬غŒط­غŒ',
      addSelectedToYx: 'ط§ظپط²ظˆط¯ظ† ظ…ظˆط§ط±ط¯ ط§ظ†طھط®ط§ط¨ ط´ط¯ظ‡',
      selectAll: 'ط§ظ†طھط®ط§ط¨ ظ‡ظ…ظ‡',
      deselectAll: 'ظ„ط؛ظˆ ط§ظ†طھط®ط§ط¨',
      testingInProgress: 'ط¯ط± ط­ط§ظ„ طھط³طھ...',
      testComplete: 'طھط³طھ ع©ط§ظ…ظ„ ط´ط¯',
      latencyMs: 'طھط§ط®غŒط±',
      timeout: 'ط²ظ…ط§ظ† طھظ…ط§ظ… ط´ط¯',
      ipSource: 'ظ…ظ†ط¨ط¹ IP:',
      manualInput: 'ظˆط±ظˆط¯غŒ ط¯ط³طھغŒ',
      cfRandomIP: 'IP طھطµط§ط¯ظپغŒ CF',
      urlFetch: 'ط¯ط±غŒط§ظپطھ ط§ط² URL',
      randomCount: 'طھط¹ط¯ط§ط¯ طھظˆظ„غŒط¯:',
      fetchURL: 'URL ط¯ط±غŒط§ظپطھ:',
      fetchURLPlaceholder: 'ط¢ط¯ط±ط³ URL ظ„غŒط³طھ IP ط±ط§ ظˆط§ط±ط¯ ع©ظ†غŒط¯',
      generateIP: 'طھظˆظ„غŒط¯ IP',
      fetchIP: 'ط¯ط±غŒط§ظپطھ IP',
      socks5Config: è§£ç پ64('2KrZhti424zZhdin2KogU09DS1M1IChzKTo='),
      customHomepage: 'URL طµظپط­ظ‡ ط§طµظ„غŒ ط³ظپط§ط±ط´غŒ (homepage):',
      customHomepagePlaceholder: 'ظ…ط«ط§ظ„: https://example.com',
      customHomepageHint: 'طھظ†ط¸غŒظ… URL ط³ظپط§ط±ط´غŒ ط¨ظ‡ ط¹ظ†ظˆط§ظ† ط§ط³طھطھط§ط± طµظپط­ظ‡ ط§طµظ„غŒ. ظ‡ظ†ع¯ط§ظ… ط¯ط³طھط±ط³غŒ ط¨ظ‡ ظ…ط³غŒط± ط§طµظ„غŒ / ظ…ط­طھظˆط§غŒ ط§غŒظ† URL ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯. ط§ع¯ط± ط®ط§ظ„غŒ ط¨ع¯ط°ط§ط±غŒط¯ طµظپط­ظ‡ طھط±ظ…غŒظ†ط§ظ„ ظ¾غŒط´â€Œظپط±ط¶ ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.',
      saveConfig: 'ط°ط®غŒط±ظ‡ طھظ†ط¸غŒظ…ط§طھ',
      advancedControl: 'ع©ظ†طھط±ظ„ ظ¾غŒط´ط±ظپطھظ‡',
      subscriptionConverter: 'ط¢ط¯ط±ط³ طھط¨ط¯غŒظ„ ط§ط´طھط±ط§ع©:',
      builtinPreferred: 'ظ†ظˆط¹ طھط±ط¬غŒط­غŒ ط¯ط§ط®ظ„غŒ:',
      enablePreferredDomain: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط¯ط§ظ…ظ†ظ‡ طھط±ط¬غŒط­غŒ',
      enablePreferredIP: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ IP طھط±ط¬غŒط­غŒ',
      enableNativeAddress: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط¢ط¯ط±ط³ ط§طµظ„غŒ',
      enableGitHubPreferred: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ طھط±ط¬غŒط­ ط³ظپط§ط±ط´غŒ',
      allowAPIManagement: 'ط§ط¬ط§ط²ظ‡ ظ…ط¯غŒط±غŒطھ API (ae):',
      regionMatching: 'طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡ (rm):',
      downgradeControl: 'ع©ظ†طھط±ظ„ ع©ط§ظ‡ط´ ط³ط·ط­ (qj):',
      tlsControl: 'ع©ظ†طھط±ظ„ TLS (dkby):',
      preferredControl: 'ع©ظ†طھط±ظ„ طھط±ط¬غŒط­غŒ (yxby):',
      saveAdvanced: 'ط°ط®غŒط±ظ‡ طھظ†ط¸غŒظ…ط§طھ ظ¾غŒط´ط±ظپطھظ‡',
      loading: 'ط¯ط± ط­ط§ظ„ ط¨ط§ط±ع¯ط°ط§ط±غŒ...',
      currentConfig: 'ًں“چ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ…ط³غŒط± ظپط¹ظ„غŒ',
      refreshConfig: 'طھط§ط²ظ‡â€Œط³ط§ط²غŒ طھظ†ط¸غŒظ…ط§طھ',
      resetConfig: 'ط¨ط§ط²ظ†ط´ط§ظ†غŒ طھظ†ط¸غŒظ…ط§طھ',
      subscriptionCopied: 'ظ„غŒظ†ع© ط§ط´طھط±ط§ع© ع©ظ¾غŒ ط´ط¯',
      autoSubscriptionCopied: 'ظ„غŒظ†ع© ط§ط´طھط±ط§ع© طھط´ط®غŒطµ ط®ظˆط¯ع©ط§ط± ع©ظ¾غŒ ط´ط¯طŒ ع©ظ„ط§غŒظ†طھ ظ‡ظ†ع¯ط§ظ… ط¯ط³طھط±ط³غŒ ط¨ط± ط§ط³ط§ط³ User-Agent ط¨ظ‡ ط·ظˆط± ط®ظˆط¯ع©ط§ط± طھط´ط®غŒطµ ط¯ط§ط¯ظ‡ ظˆ ظ‚ط§ظ„ط¨ ظ…ط±ط¨ظˆط·ظ‡ ط±ط§ ط¨ط±ظ…غŒâ€Œع¯ط±ط¯ط§ظ†ط¯',
      trojanPasswordPlaceholder: 'ط®ط§ظ„غŒ ط¨ع¯ط°ط§ط±غŒط¯ طھط§ ط§ط² UUID ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯',
      trojanPasswordHint: è§£ç پ64('2LHZhdiyINi52KjZiNixIFRyb2phbiDYs9mB2KfYsdi024wg2LHYpyDYqtmG2LjbjNmFINqp2YbbjNivLiDYp9qv2LEg2K7Yp9mE24wg2Kjar9iw2KfYsduM2K8g2KfYsiBVVUlEINin2LPYqtmB2KfYr9mHINmF24zigIzYtNmI2K8uINqp2YTYp9uM2YbYqiDYqNmHINi32YjYsSDYrtmI2K/aqdin2LEg2LHZhdiyINi52KjZiNixINix2Kcg2KjYpyBTSEEyMjQg2YfYtCDZhduM4oCM2qnZhtivLg=='),
      protocolHint: è§£ç پ64('2YXbjOKAjNiq2YjYp9mG24zYryDahtmG2K/bjNmGINm+2LHZiNiq2qnZhCDYsdinINmH2YXYstmF2KfZhiDZgdi52KfZhCDaqdmG24zYry4g2KfYtNiq2LHYp9qpINqv2LHZh+KAjNmH2KfbjCDZvtix2YjYqtqp2YTigIzZh9in24wg2KfZhtiq2K7Yp9ioINi02K/ZhyDYsdinINiq2YjZhNuM2K8g2YXbjOKAjNqp2YbYry48YnI+4oCiIFZMRVNTIFdTOiDZvtix2YjYqtqp2YQg2KfYs9iq2KfZhtiv2KfYsdivINmF2KjYqtmG24wg2KjYsSBXZWJTb2NrZXQ8YnI+4oCiIFRyb2phbjog2KfYrdix2KfYsiDZh9mI24zYqiDYqNinINix2YXYsiDYudio2YjYsSBTSEEyMjQ8YnI+4oCiIHhodHRwOiDZvtix2YjYqtqp2YQg2KfYs9iq2KrYp9ixINmF2KjYqtmG24wg2KjYsSBIVFRQIFBPU1QgKNmG24zYp9iyINio2Ycg2KfYqti12KfZhCDYr9in2YXZhtmHINiz2YHYp9ix2LTbjCDZiCDZgdi52KfZhOKAjNiz2KfYstuMIGdSUEMg2K/Yp9ix2K8p'),
      alpn: 'TLS ALPN',
      alpnDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ط®ط§ظ„غŒطŒ ظ…ط°ط§ع©ط±ظ‡ طھظˆط³ط· ع©ظ„ط§غŒظ†طھ)',
      alpnHint: 'ظپظ‚ط· ط¨ظ‡ ظ„غŒظ†ع©â€Œظ‡ط§غŒ TLS ط§ط¶ط§ظپظ‡ ظ…غŒâ€Œط´ظˆط¯ط› ط§ع¯ط± ط®ط§ظ„غŒ ط¨ط§ط´ط¯ alpn ظ†ظˆط´طھظ‡ ظ†ظ…غŒâ€Œط´ظˆط¯.',
      saveProtocol: 'ط°ط®غŒط±ظ‡ طھظ†ط¸غŒظ…ط§طھ ظ¾ط±ظˆطھع©ظ„',
      subscriptionConverterPlaceholder: 'ظ¾غŒط´â€Œظپط±ط¶: https://url.v1.mk/sub',
      subscriptionConverterHint: 'طھط¨ط¯غŒظ„ ط§ط´طھط±ط§ع© ط¨ظ‡ طµظˆط±طھ ط¯ط§ط®ظ„غŒ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ط§ط³طھ ظˆ ظ†غŒط§ط²غŒ ط¨ظ‡ API ط®ط§ط±ط¬غŒ ظ†ط¯ط§ط±ط¯. ط§غŒظ† ظپغŒظ„ط¯ ظپظ‚ط· ط¨ط±ط§غŒ ط³ط§ط²ع¯ط§ط±غŒ ط­ظپط¸ ط´ط¯ظ‡ ظˆ ظ…غŒâ€Œطھظˆط§ظ† ط¢ظ† ط±ط§ ط®ط§ظ„غŒ ع¯ط°ط§ط´طھ.',
      builtinPreferredHint: 'ع©ظ†طھط±ظ„ ط§غŒظ†ع©ظ‡ ع©ط¯ط§ظ… ع¯ط±ظ‡â€Œظ‡ط§غŒ طھط±ط¬غŒط­غŒ ط¯ط§ط®ظ„غŒ ط¯ط± ط§ط´طھط±ط§ع© ع¯ظ†ط¬ط§ظ†ط¯ظ‡ ط´ظˆظ†ط¯. ط¨ظ‡ ط·ظˆط± ظ¾غŒط´â€Œظپط±ط¶ ظ‡ظ…ظ‡ ظپط¹ط§ظ„ ظ‡ط³طھظ†ط¯.',
      apiEnabledDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ط¨ط³طھظ† API)',
      apiEnabledYes: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ظ…ط¯غŒط±غŒطھ API',
      apiEnabledHint: 'âڑ ï¸ڈ ظ‡ط´ط¯ط§ط± ط§ظ…ظ†غŒطھغŒ: ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط§غŒظ† ع¯ط²غŒظ†ظ‡ ط§ط¬ط§ط²ظ‡ ظ…غŒâ€Œط¯ظ‡ط¯ IP ظ‡ط§غŒ طھط±ط¬غŒط­غŒ ط§ط² ط·ط±غŒظ‚ API ط¨ظ‡ ط·ظˆط± ظ¾ظˆغŒط§ ط§ط¶ط§ظپظ‡ ط´ظˆظ†ط¯. طھظˆطµغŒظ‡ ظ…غŒâ€Œط´ظˆط¯ ظپظ‚ط· ط¯ط± طµظˆط±طھ ظ†غŒط§ط² ظپط¹ط§ظ„ ع©ظ†غŒط¯.',
      regionMatchingDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ظپط¹ط§ظ„â€Œط³ط§ط²غŒ طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡)',
      regionMatchingNo: 'ط¨ط³طھظ† طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡',
      regionMatchingHint: 'ظˆظ‚طھغŒ "ط¨ط³طھظ†" طھظ†ط¸غŒظ… ط´ظˆط¯طŒ طھط·ط¨غŒظ‚ ظ‡ظˆط´ظ…ظ†ط¯ ظ…ظ†ط·ظ‚ظ‡ ط§ظ†ط¬ط§ظ… ظ†ظ…غŒâ€Œط´ظˆط¯',
      downgradeControlDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ط¹ط¯ظ… ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ع©ط§ظ‡ط´ ط³ط·ط­)',
      downgradeControlNo: 'ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط­ط§ظ„طھ ع©ط§ظ‡ط´ ط³ط·ط­',
      downgradeControlHint: è§£ç پ64('2YjZgtiq24wgItmB2LnYp9mEIiDYqtmG2LjbjNmFINi02YjYrzog2KfYqti12KfZhCDZhdiz2KrZgtuM2YUgQ0Yg2YbYp9mF2YjZgdmCIOKGkiDYp9iq2LXYp9mEIFNPQ0tTNSDihpIg2KLYr9ix2LMgZmFsbGJhY2s='),
      tlsControlDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ط­ظپط¸ ظ‡ظ…ظ‡ ع¯ط±ظ‡â€Œظ‡ط§)',
      tlsControlYes: 'ظپظ‚ط· ع¯ط±ظ‡â€Œظ‡ط§غŒ TLS',
      tlsControlHint: 'ظˆظ‚طھغŒ "ظپظ‚ط· ع¯ط±ظ‡â€Œظ‡ط§غŒ TLS" طھظ†ط¸غŒظ… ط´ظˆط¯طŒ ظپظ‚ط· ع¯ط±ظ‡â€Œظ‡ط§غŒ ط¨ط§ TLS طھظˆظ„غŒط¯ ظ…غŒâ€Œط´ظˆظ†ط¯طŒ ع¯ط±ظ‡â€Œظ‡ط§غŒ ط؛غŒط± TLS (ظ…ط§ظ†ظ†ط¯ ظ¾ظˆط±طھ 80) طھظˆظ„غŒط¯ ظ†ظ…غŒâ€Œط´ظˆظ†ط¯',
      preferredControlDefault: 'ظ¾غŒط´â€Œظپط±ط¶ (ظپط¹ط§ظ„â€Œط³ط§ط²غŒ طھط±ط¬غŒط­)',
      preferredControlYes: 'ط¨ط³طھظ† طھط±ط¬غŒط­',
      preferredControlHint: 'ظˆظ‚طھغŒ "ط¨ط³طھظ† طھط±ط¬غŒط­" طھظ†ط¸غŒظ… ط´ظˆط¯طŒ ظپظ‚ط· ط§ط² ط¢ط¯ط±ط³ ط§طµظ„غŒ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯طŒ ع¯ط±ظ‡â€Œظ‡ط§غŒ IP ظˆ ط¯ط§ظ…ظ†ظ‡ طھط±ط¬غŒط­غŒ طھظˆظ„غŒط¯ ظ†ظ…غŒâ€Œط´ظˆظ†ط¯',
      regionNames: {
        HK: 'ًں‡­ًں‡° ظ‡ظ†ع¯ ع©ظ†ع¯',
        US: 'ًں‡؛ًں‡¸ ط¢ظ…ط±غŒع©ط§',
        SG: 'ًں‡¸ًں‡¬ ط³ظ†ع¯ط§ظ¾ظˆط±',
        JP: 'ًں‡¯ًں‡µ عکط§ظ¾ظ†',
        KR: 'ًں‡°ًں‡· ع©ط±ظ‡ ط¬ظ†ظˆط¨غŒ',
        DE: 'ًں‡©ًں‡ھ ط¢ظ„ظ…ط§ظ†',
        SE: 'ًں‡¸ًں‡ھ ط³ظˆط¦ط¯',
        NL: 'ًں‡³ًں‡± ظ‡ظ„ظ†ط¯',
        FI: 'ًں‡«ًں‡® ظپظ†ظ„ط§ظ†ط¯',
        GB: 'ًں‡¬ًں‡§ ط¨ط±غŒطھط§ظ†غŒط§'
      },
      terminal: 'طھط±ظ…غŒظ†ط§ظ„ v2.9.8c',
      githubProject: 'ظ¾ط±ظˆعکظ‡ GitHub',
      ن¼کé€‰ه·¥ه…·: 'ط§ط¨ط²ط§ط± طھط±ط¬غŒط­ IP',
      autoDetectClient: 'طھط´ط®غŒطµ ط®ظˆط¯ع©ط§ط±',
      selectionLogicText: 'ظ‡ظ…â€Œظ…ظ†ط·ظ‚ظ‡ â†’ ظ…ظ†ط·ظ‚ظ‡ ظ…ط¬ط§ظˆط± â†’ ط³ط§غŒط± ظ…ظ†ط§ط·ظ‚',
      customIPDisabledHint: è§£ç پ64('2YfZhtqv2KfZhSDYp9iz2KrZgdin2K/ZhyDYp9iyIFByb3h5SVAg2LPZgdin2LHYtNuM2Iwg2KfZhtiq2K7Yp9ioINmF2YbYt9mC2Ycg2LrbjNix2YHYudin2YQg2KfYs9iq'),
      customIPMode: è§£ç پ64('2K3Yp9mE2KogUHJveHlJUCDYs9mB2KfYsdi024wgKNmF2KrYutuM2LEgcCDZgdi52KfZhCDYp9iz2Kop'),
      customIPModeDesc: 'ط­ط§ظ„طھ IP ط³ظپط§ط±ط´غŒ (طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡ ط؛غŒط±ظپط¹ط§ظ„ ط§ط³طھ)',
      usingCustomProxyIP: è§£ç پ64('2KfYs9iq2YHYp9iv2Ycg2KfYsiBQcm94eUlQINiz2YHYp9ix2LTbjDog'),
      customIPConfig: ' (ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ…طھط؛غŒط± p)',
      customIPModeDisabled: 'ط­ط§ظ„طھ IP ط³ظپط§ط±ط´غŒطŒ ط§ظ†طھط®ط§ط¨ ظ…ظ†ط·ظ‚ظ‡ ط؛غŒط±ظپط¹ط§ظ„ ط§ط³طھ',
      manualRegion: 'طھط¹غŒغŒظ† ظ…ظ†ط·ظ‚ظ‡ ط¯ط³طھغŒ',
      manualRegionDesc: ' (طھط¹غŒغŒظ† ط¯ط³طھغŒ)',
      proxyIPAvailable: è§£ç پ64('MTAvMTAg2K/YsSDYr9iz2KrYsdizICjYr9in2YXZhtmHINm+24zYtOKAjNmB2LHYtiBQcm94eUlQINiv2LEg2K/Ys9iq2LHYsyDYp9iz2Kop'),
      smartSelection: 'ط§ظ†طھط®ط§ط¨ ظ‡ظˆط´ظ…ظ†ط¯ ظ†ط²ط¯غŒع© ط¯ط± ط­ط§ظ„ ط§ظ†ط¬ط§ظ… ط§ط³طھ',
      sameRegionIP: 'IP ظ‡ظ…â€Œظ…ظ†ط·ظ‚ظ‡ ط¯ط± ط¯ط³طھط±ط³ ط§ط³طھ (1)',
      cloudflareDetection: 'طھط´ط®غŒطµ ط¯ط§ط®ظ„غŒ Cloudflare',
      detectionFailed: 'طھط´ط®غŒطµ ظ†ط§ظ…ظˆظپظ‚',
      apiTestResult: 'ظ†طھغŒط¬ظ‡ طھط´ط®غŒطµ API: ',
      apiTestTime: 'ط²ظ…ط§ظ† طھط´ط®غŒطµ: ',
      apiTestFailed: 'طھط´ط®غŒطµ API ظ†ط§ظ…ظˆظپظ‚: ',
      unknownError: 'ط®ط·ط§غŒ ظ†ط§ط´ظ†ط§ط®طھظ‡',
      apiTestError: 'طھط³طھ API ظ†ط§ظ…ظˆظپظ‚: ',
      kvNotConfigured: 'ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھطŒ ظ†ظ…غŒâ€Œطھظˆط§ظ†غŒط¯ ط§ط² ط¹ظ…ظ„ع©ط±ط¯ ظ…ط¯غŒط±غŒطھ طھظ†ط¸غŒظ…ط§طھ ط§ط³طھظپط§ط¯ظ‡ ع©ظ†غŒط¯.\\n\\nظ„ط·ظپط§ ط¯ط± Cloudflare Workers:\\n1. ظپط¶ط§غŒ ظ†ط§ظ… KV ط§غŒط¬ط§ط¯ ع©ظ†غŒط¯\\n2. ظ…طھط؛غŒط± ظ…ط­غŒط·غŒ C ط±ط§ ظ¾غŒظˆظ†ط¯ ط¯ظ‡غŒط¯\\n3. ع©ط¯ ط±ط§ ط¯ظˆط¨ط§ط±ظ‡ ظ…ط³طھظ‚ط± ع©ظ†غŒط¯',
      kvNotEnabled: 'ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھ',
      kvCheckFailed: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚: ط®ط·ط§غŒ ظپط±ظ…طھ ظ¾ط§ط³ط®',
      kvCheckFailedStatus: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚ - ع©ط¯ ظˆط¶ط¹غŒطھ: ',
      kvCheckFailedError: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚ - ط®ط·ط§: '
    }
  };
  const ç؟»è¯‘ه€¼ = وœ¬هœ°ه€¼235[وک¯هگ¦ه€¼236 ? 'fa' : 'zh'];
  const ه€¼é،µé‌¢ = `<!DOCTYPE html>
    <html lang="${è¯­è¨€ه€¼}" dir="${وک¯هگ¦ه€¼236 ? 'rtl' : 'ltr'}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${ç؟»è¯‘ه€¼.title}</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Text:wght@400;500;700&family=Roboto:wght@400;500;700;900&display=swap');
            :root {
                --md-bg: #141218;
                --md-bg-2: #1D1B20;
                --md-surface: #211F26;
                --md-surface-2: #2B2930;
                --md-surface-3: #36343B;
                --md-primary: #D0BCFF;
                --md-primary-d: #B69DF8;
                --md-on-primary: #381E72;
                --md-secondary: #EFB8C8;
                --md-secondary-d: #7D5260;
                --md-tertiary: #9A82DB;
                --md-yellow: #FFD54F;
                --md-success: #81C995;
                --md-error: #F2B8B5;
                --md-warning: #FDD663;
                --md-text: #E6E0E9;
                --md-text-dim: #CAC4D0;
                --md-outline: rgba(230, 224, 233, 0.14);
                --md-outline-strong: rgba(230, 224, 233, 0.28);
                --md-r-sm: 12px;
                --md-r-md: 16px;
                --md-r-lg: 24px;
                --md-r-xl: 28px;
                --md-elev-1: 0 1px 3px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.3);
                --md-elev-2: 0 3px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3);
                --md-elev-3: 0 8px 22px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.3);
                --md-font: 'Google Sans Text', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                --cp-bg: var(--md-bg);
                --cp-bg-2: var(--md-bg-2);
                --cp-bg-3: var(--md-surface);
                --cp-cyan: var(--md-primary);
                --cp-cyan-d: var(--md-primary-d);
                --cp-pink: var(--md-secondary);
                --cp-pink-d: var(--md-secondary-d);
                --cp-purple: var(--md-tertiary);
                --cp-yellow: var(--md-yellow);
                --cp-mint: var(--md-success);
                --cp-amber: var(--md-warning);
                --cp-red: var(--md-error);
                --cp-text: var(--md-text);
                --cp-text-dim: var(--md-text-dim);
                --cp-border: var(--md-outline);
                --cp-border-pink: var(--md-outline);
                --cp-grid: transparent;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { min-height: 100%; }
            body {
                font-family: var(--md-font);
                background:
                    radial-gradient(circle at 12% 8%, rgba(208,188,255,0.14) 0%, transparent 38%),
                    radial-gradient(circle at 88% 92%, rgba(239,184,200,0.12) 0%, transparent 40%),
                    radial-gradient(circle at 90% 5%, rgba(154,130,219,0.10) 0%, transparent 35%),
                    var(--md-bg);
                color: var(--md-text);
                min-height: 100vh;
                overflow-x: hidden;
                position: relative;
            }
            body::before, body::after { content: none; }
            .matrix-bg, .matrix-code-rain, .matrix-column, .matrix-rain { display: none !important; }

            ::selection { background: var(--md-primary); color: var(--md-on-primary); }

            .container {
                max-width: 900px;
                margin: 0 auto;
                padding: 96px 20px 60px;
                position: relative;
                z-index: 1;
            }
            .header {
                text-align: center;
                margin-bottom: 24px;
                padding: 32px 24px;
                position: relative;
                border: none;
                background: linear-gradient(135deg, var(--md-surface), var(--md-surface-2));
                border-radius: var(--md-r-xl);
                box-shadow: var(--md-elev-2);
            }
            .header::before, .header::after { content: none; }
            .title {
                font-size: clamp(1.7rem, 4.2vw, 2.4rem);
                font-weight: 700;
                margin: 0 0 8px;
                color: var(--md-text);
                letter-spacing: 0;
                text-transform: none;
                position: relative;
                animation: none;
            }
            .subtitle {
                color: var(--md-text-dim);
                margin-bottom: 0;
                font-size: 0.95rem;
                letter-spacing: 0;
                text-transform: none;
            }
            .subtitle::before { content: none; }

            .card {
                background: var(--md-surface);
                border: 1px solid var(--md-outline);
                border-radius: var(--md-r-lg);
                padding: 24px 24px 26px;
                margin-bottom: 18px;
                position: relative;
                width: 100%;
                box-shadow: var(--md-elev-1);
            }
            .card::after { content: none; }
            .card-title {
                font-size: 1.02rem;
                margin: 0 0 18px;
                color: var(--md-text);
                letter-spacing: 0;
                text-transform: none;
                display: flex; align-items: center; gap: 10px;
                font-weight: 700;
            }
            .card-title::before {
                content: ""; display: inline-block;
                width: 8px; height: 8px; border-radius: 50%;
                background: var(--md-primary);
                box-shadow: none; transform: none;
            }
            .card-title::after { content: none; }
            h3, h4 {
                color: var(--md-text);
                letter-spacing: 0;
                text-transform: none;
                font-weight: 700;
            }

            .client-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 10px;
                margin: 4px 0 16px;
            }
            .client-btn {
                background: var(--md-surface-2);
                border: 1px solid var(--md-outline);
                border-radius: var(--md-r-md);
                padding: 14px 16px;
                color: var(--md-text);
                font-family: inherit;
                font-weight: 500;
                font-size: 0.86rem;
                letter-spacing: 0;
                text-transform: none;
                cursor: pointer;
                transition: all 0.18s ease;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            .client-btn::before { content: none; }
            .client-btn:hover {
                color: var(--md-on-primary);
                border-color: var(--md-primary);
                background: var(--md-primary);
                box-shadow: var(--md-elev-1);
                transform: translateY(-1px);
            }

            #clientSubscriptionUrl,
            .subscription-url,
            [class*='subscription-url'],
            [class*='c3Vic2NyaXB0aW9u'] {
                background: var(--md-surface-2) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: var(--md-r-md) !important;
                padding: 14px 16px !important;
                word-break: break-all;
                font-family: 'Roboto Mono', monospace;
                color: var(--md-primary) !important;
                margin-top: 14px;
                box-shadow: none !important;
                position: relative;
                overflow-wrap: break-word;
                overflow-x: auto;
                max-width: 100%;
                font-size: 0.85rem;
                line-height: 1.6;
            }
            #clientSubscriptionUrl:empty { display: none !important; }

            .cp-hud { display: none; }
            .cp-lang-wrapper {
                position: fixed; top: 18px; left: 18px; z-index: 1000;
                display: flex; align-items: center; gap: 8px;
            }
            .cp-lang-tag { display: none; }
            #languageSelector {
                background: var(--md-surface-2);
                border: 1px solid var(--md-outline);
                border-radius: 20px;
                color: var(--md-text);
                padding: 8px 16px;
                font-family: inherit;
                font-size: 12.5px;
                cursor: pointer;
                box-shadow: var(--md-elev-1);
            }
            #languageSelector option { background: var(--md-surface-2); color: var(--md-text); }

            /* FX toggle */
            .cp-fx-toggle {
                position: fixed; top: 18px; right: 18px; z-index: 1001;
                background: var(--md-surface-2);
                border: 1px solid var(--md-outline);
                border-radius: 20px;
                color: var(--md-text-dim);
                padding: 8px 16px;
                font-family: inherit;
                font-size: 11.5px;
                letter-spacing: 0;
                text-transform: none;
                cursor: pointer;
                box-shadow: var(--md-elev-1);
                transition: all 0.2s ease;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .cp-fx-toggle:hover { color: var(--md-primary); border-color: var(--md-primary); }
            .cp-fx-toggle .cp-fx-dot { width: 8px; height: 8px; background: var(--md-success); border-radius: 50%; box-shadow: none; transition: all 0.2s; }
            body.fx-off .cp-fx-toggle { color: var(--md-text-dim); border-color: var(--md-outline); box-shadow: none; }
            body.fx-off .cp-fx-toggle .cp-fx-dot { background: transparent; border: 1px solid var(--md-text-dim); box-shadow: none; }
            body.fx-off .matrix-bg,
            body.fx-off .matrix-code-rain,
            body.fx-off .matrix-column { display: none !important; }
            body.fx-off::before, body.fx-off::after { display: none !important; content: none !important; }
            body.fx-off { background: var(--md-bg) !important; }
            body.fx-off * {
                animation: none !important;
                transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s !important;
            }
            body.fx-off .cp-glitch::before,
            body.fx-off .cp-glitch::after { display: none !important; }
            body.fx-off .terminal-cursor::after,
            body.fx-off .cp-fab-save .cp-fab-dot { animation: none !important; }
            body.fx-off .cp-fab-save:hover { transform: none !important; }
            body.fx-off .cp-action-bar.cp-dirty::before { animation: none !important; }
            body.fx-off .header::before { display: none !important; }
            body.fx-off .card { backdrop-filter: none !important; }
            body.fx-off select, body.fx-off input, body.fx-off textarea { backdrop-filter: none !important; }

            /* Status panel inside card */
            #systemStatus {
                background: var(--md-surface-2) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: var(--md-r-md) !important;
                padding: 16px 18px !important;
                margin: 12px 0 0 !important;
                box-shadow: none !important;
                position: relative;
            }
            #systemStatus > div {
                color: var(--md-text) !important;
                font-family: inherit !important;
                margin: 6px 0 !important;
                font-size: 0.85rem !important;
                letter-spacing: 0;
            }
            #systemStatus > div:first-child {
                color: var(--md-primary) !important;
                font-weight: 700 !important;
                letter-spacing: 0 !important;
                margin-bottom: 12px !important;
                text-transform: none;
            }

            /* Force inputs / selects â€” Material outlined fields */
            input[type="text"], input[type="number"], input[type="password"],
            select, textarea {
                background: var(--md-surface-2) !important;
                border: 1.5px solid var(--md-outline) !important;
                border-radius: var(--md-r-sm) !important;
                color: var(--md-text) !important;
                font-family: inherit !important;
                font-size: 13.5px !important;
                padding: 12px 14px !important;
                outline: none;
                transition: border-color 0.2s, box-shadow 0.2s;
                box-shadow: none !important;
                letter-spacing: 0;
            }
            input::placeholder { color: var(--md-text-dim) !important; opacity: 0.7; }
            input:focus, select:focus, textarea:focus {
                border-color: var(--md-primary) !important;
                box-shadow: 0 0 0 3px rgba(208,188,255,0.18) !important;
            }
            select option { background: var(--md-surface-2); color: var(--md-text); }
            input[type="checkbox"], input[type="radio"] {
                accent-color: var(--md-primary);
                width: 18px; height: 18px;
            }

            label {
                color: var(--md-text) !important;
                letter-spacing: 0;
            }
            label[style*="font-weight"], label[style*="bold"] {
                font-weight: 700 !important;
                color: var(--md-text) !important;
                letter-spacing: 0 !important;
                text-transform: none;
                font-size: 0.85rem !important;
            }
            small {
                color: var(--md-text-dim) !important;
                font-size: 0.78rem !important;
                letter-spacing: 0;
                line-height: 1.5;
            }

            /* Buttons â€” Material filled/tonal pill buttons */
            button, input[type="submit"] {
                background: var(--md-surface-3) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: 20px !important;
                color: var(--md-text) !important;
                font-family: inherit !important;
                font-weight: 500 !important;
                cursor: pointer;
                padding: 10px 20px !important;
                letter-spacing: 0 !important;
                text-transform: none;
                font-size: 0.82rem !important;
                transition: all 0.2s ease;
                box-shadow: none;
            }
            button:hover, input[type="submit"]:hover {
                color: var(--md-on-primary) !important;
                border-color: var(--md-primary) !important;
                background: var(--md-primary) !important;
                box-shadow: var(--md-elev-1) !important;
                transform: translateY(-1px);
            }
            button[id*="Reset"], button[onclick*="reset"], button[style*="ff0000"] {
                color: var(--md-error) !important;
                border-color: var(--md-error) !important;
                background: var(--md-surface-3) !important;
            }
            button[id*="Reset"]:hover, button[onclick*="reset"]:hover, button[style*="ff0000"]:hover {
                background: var(--md-error) !important;
                color: var(--md-on-primary) !important;
                box-shadow: var(--md-elev-1) !important;
            }
            button[id="stopLatencyTest"] {
                color: var(--md-error) !important;
                border-color: var(--md-error) !important;
            }

            /* Form sub-cards */
            .card form > div[style*="background: rgba(15, 3, 40"],
            .card form > div[style*="background: rgba(20, 5, 50"],
            div[style*="background: rgba(15, 3, 40"],
            div[style*="background: rgba(20, 5, 50"] {
                background: var(--md-bg-2) !important;
                border: 1px solid var(--md-outline) !important;
                box-shadow: none !important;
                border-radius: var(--md-r-md) !important;
            }

            /* kvStatus / statusMessage / currentConfig / pathTypeInfo */
            #kvStatus, #statusMessage, #currentConfig, #pathTypeInfo {
                background: var(--md-surface-2) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: var(--md-r-md) !important;
                color: var(--md-text) !important;
                font-family: inherit !important;
                box-shadow: none !important;
                padding: 12px 16px !important;
                font-size: 0.85rem !important;
                letter-spacing: 0;
            }
            #pathTypeInfo div:first-child {
                color: var(--md-primary) !important;
                letter-spacing: 0 !important;
            }

            /* Latency Result list */
            #latencyResultsList {
                background: var(--md-surface-2) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: var(--md-r-md) !important;
            }
            #latencyResultsList > div {
                border-bottom: 1px solid var(--md-outline) !important;
            }
            #cityFilterContainer {
                background: var(--md-surface-2) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: var(--md-r-md) !important;
            }

            /* Related links area */
            .card a {
                color: var(--md-primary) !important;
                text-decoration: none;
                letter-spacing: 0;
                text-transform: none;
                font-size: 0.9rem;
                padding: 4px 0;
                border-bottom: 1px solid transparent;
                transition: all 0.2s;
            }
            .card a:hover {
                border-bottom-color: var(--md-primary);
            }

            /* Scrollbars */
            ::-webkit-scrollbar { width: 8px; height: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb {
                background: var(--md-outline-strong);
                border-radius: 4px;
            }

            .cp-glitch { position: relative; display: inline-block; }

            /* Floating action dock - bottom-right anchored FAB cluster */
            .cp-action-bar {
                position: fixed;
                right: 20px;
                bottom: 20px;
                z-index: 99999;
                isolation: isolate;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                gap: 10px;
                padding: 0;
                background: transparent;
                border: 0;
                box-shadow: none;
                max-width: calc(100vw - 32px);
                pointer-events: auto;
            }
            /* Primary SAVE FAB â€” Material extended FAB */
            .cp-fab-save {
                position: relative;
                min-width: 170px;
                padding: 16px 24px !important;
                font-size: 0.88rem !important;
                font-weight: 700 !important;
                letter-spacing: 0 !important;
                text-transform: none;
                color: var(--md-on-primary) !important;
                background: var(--md-primary) !important;
                border: none !important;
                border-radius: 28px !important;
                box-shadow: var(--md-elev-3) !important;
                cursor: pointer;
                transition: transform 0.18s ease, box-shadow 0.25s ease;
                display: inline-flex; align-items: center; gap: 10px;
                white-space: nowrap;
                font-family: inherit !important;
                animation: none;
            }
            .cp-fab-save:hover {
                transform: translateY(-2px);
                box-shadow: var(--md-elev-3), 0 0 0 4px rgba(208,188,255,0.15) !important;
                color: var(--md-on-primary) !important;
            }
            .cp-fab-save .cp-fab-icon {
                font-size: 1.1em;
                line-height: 1;
                color: var(--md-on-primary);
            }
            .cp-fab-save .cp-fab-dot {
                width: 8px; height: 8px; border-radius: 50%;
                background: var(--md-on-primary);
                transform: none;
                margin-left: 2px;
                opacity: 0.4;
                transition: all 0.2s;
            }
            .cp-action-bar.cp-dirty .cp-fab-save {
                animation: cp-fab-dirty-pulse 1.6s ease-in-out infinite;
                color: var(--md-on-primary) !important;
            }
            .cp-action-bar.cp-dirty .cp-fab-save .cp-fab-dot { opacity: 1; }
            @keyframes cp-fab-dirty-pulse {
                0%, 100% { box-shadow: var(--md-elev-3); }
                50%      { box-shadow: var(--md-elev-3), 0 0 0 6px rgba(208,188,255,0.22); }
            }
            /* Secondary mini buttons â€” Material tonal icon buttons */
            .cp-action-btn {
                background: var(--md-surface-3) !important;
                border: 1px solid var(--md-outline) !important;
                border-radius: 50% !important;
                color: var(--md-text) !important;
                font-family: inherit !important;
                font-weight: 500 !important;
                cursor: pointer;
                width: 46px; height: 46px;
                padding: 0 !important;
                letter-spacing: 0 !important;
                font-size: 1.05rem !important;
                transition: all 0.2s ease;
                box-shadow: var(--md-elev-1);
                display: inline-flex; align-items: center; justify-content: center;
                white-space: nowrap;
                position: relative;
            }
            .cp-action-btn .cp-btn-label { display: none; }
            .cp-action-btn::after {
                content: attr(data-tip);
                position: absolute;
                bottom: 100%; right: 50%;
                transform: translate(50%, -8px);
                background: var(--md-surface-3);
                color: var(--md-text);
                font-size: 10.5px;
                letter-spacing: 0;
                text-transform: none;
                padding: 5px 10px;
                border: 1px solid var(--md-outline);
                border-radius: 8px;
                opacity: 0; pointer-events: none;
                transition: opacity 0.2s;
                white-space: nowrap;
                box-shadow: var(--md-elev-1);
            }
            .cp-action-btn:hover::after { opacity: 1; }
            .cp-action-btn:hover {
                color: var(--md-on-primary) !important;
                border-color: var(--md-primary) !important;
                background: var(--md-primary) !important;
                box-shadow: var(--md-elev-2) !important;
                transform: translateY(-2px);
            }
            .cp-action-btn-danger {
                color: var(--md-error) !important;
                border-color: var(--md-error) !important;
                box-shadow: var(--md-elev-1) !important;
            }
            .cp-action-btn-danger:hover {
                background: var(--md-error) !important;
                color: var(--md-on-primary) !important;
                box-shadow: var(--md-elev-2) !important;
            }
            .cp-action-btn-saving,
            .cp-fab-save.cp-action-btn-saving {
                opacity: 0.7;
                pointer-events: none;
                animation: cp-pulse-soft 0.9s ease-in-out infinite !important;
            }
            @keyframes cp-pulse-soft {
                0%, 100% { box-shadow: var(--md-elev-1); }
                50%      { box-shadow: var(--md-elev-3); }
            }
            .container { padding-bottom: 120px; }
            .cp-action-status {
                position: fixed;
                right: 20px;
                bottom: 84px;
                z-index: 99998;
                padding: 10px 16px;
                background: var(--md-surface-3);
                border: 1px solid var(--md-outline);
                border-radius: 20px;
                color: var(--md-success);
                font-size: 0.78rem;
                letter-spacing: 0;
                text-transform: none;
                box-shadow: var(--md-elev-2);
                opacity: 0;
                transform: translateY(8px);
                transition: opacity 0.25s, transform 0.25s;
                pointer-events: none;
                white-space: nowrap;
                max-width: calc(100vw - 44px);
                overflow: hidden; text-overflow: ellipsis;
            }
            .cp-action-status.cp-show { opacity: 1; transform: translateY(0); }
            .cp-action-status.cp-err {
                border-color: var(--md-error);
                color: var(--md-error);
                box-shadow: var(--md-elev-2);
            }
            /* Toast notification stack (top-right) â€” Material snackbars */
            .cp-toast-stack {
                position: fixed;
                top: 84px;
                right: 20px;
                z-index: 100000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: min(400px, calc(100vw - 32px));
                pointer-events: none;
            }
            .cp-toast {
                position: relative;
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 14px 16px;
                background: var(--md-surface-3);
                border: 1px solid var(--md-outline);
                border-radius: var(--md-r-md);
                color: var(--md-text);
                font-size: 0.85rem;
                line-height: 1.45;
                letter-spacing: 0;
                box-shadow: var(--md-elev-3);
                transform: translateX(120%);
                opacity: 0;
                transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s;
                pointer-events: auto;
                overflow: hidden;
                word-break: break-all;
            }
            .cp-toast.cp-show { transform: translateX(0); opacity: 1; }
            .cp-toast.cp-hide { transform: translateX(120%); opacity: 0; }
            .cp-toast::before {
                content: "";
                position: absolute;
                left: 0; top: 0; bottom: 0;
                width: 4px;
                background: var(--md-text-dim);
                border-radius: 4px 0 0 4px;
            }
            .cp-toast-icon {
                font-size: 1.1rem;
                line-height: 1;
                margin-top: 1px;
                flex-shrink: 0;
                color: var(--md-text);
            }
            .cp-toast-body { flex: 1; min-width: 0; }
            .cp-toast-title {
                font-size: 0.7rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                opacity: 0.7;
                margin-bottom: 2px;
            }
            .cp-toast-msg { white-space: pre-wrap; }
            .cp-toast-close {
                position: absolute;
                top: 8px; right: 10px;
                background: transparent;
                border: 0;
                color: inherit;
                font-size: 14px;
                cursor: pointer;
                opacity: 0.55;
                padding: 2px 4px;
                line-height: 1;
                transition: opacity 0.2s;
            }
            .cp-toast-close:hover { opacity: 1; }
            .cp-toast::after { content: none; }
            .cp-toast.cp-toast-success { border-color: var(--md-success); color: var(--md-success); }
            .cp-toast.cp-toast-success::before { background: var(--md-success); }
            .cp-toast.cp-toast-success .cp-toast-icon { color: var(--md-success); }
            .cp-toast.cp-toast-info { border-color: var(--md-primary); color: var(--md-primary); }
            .cp-toast.cp-toast-info::before { background: var(--md-primary); }
            .cp-toast.cp-toast-info .cp-toast-icon { color: var(--md-primary); }
            .cp-toast.cp-toast-warn { border-color: var(--md-warning); color: var(--md-warning); }
            .cp-toast.cp-toast-warn::before { background: var(--md-warning); }
            .cp-toast.cp-toast-warn .cp-toast-icon { color: var(--md-warning); }
            .cp-toast.cp-toast-error { border-color: var(--md-error); color: var(--md-error); }
            .cp-toast.cp-toast-error::before { background: var(--md-error); }
            .cp-toast.cp-toast-error .cp-toast-icon { color: var(--md-error); }

            /* Tiny floating "unsaved" badge on the FAB */
            .cp-action-bar.cp-dirty::before {
                content: "â—ڈ UNSAVED";
                position: absolute;
                top: -24px; right: 6px;
                font-size: 9px;
                letter-spacing: 0.15em;
                color: var(--md-text-dim);
                background: var(--md-surface-3);
                padding: 3px 10px;
                border-radius: 10px;
                border: 1px solid var(--md-outline);
                box-shadow: var(--md-elev-1);
                animation: none;
            }

            @media (max-width: 720px) {
                .container { padding: 88px 14px 140px; }
                .card { padding: 20px 16px; border-radius: var(--md-r-md); }
                .header { padding: 22px 18px; border-radius: var(--md-r-md); }
                .title { font-size: 1.5rem; }
                .cp-hud { font-size: 9px; }
                .cp-action-bar {
                    right: 50%;
                    bottom: 14px;
                    transform: translateX(50%);
                    gap: 8px;
                }
                .cp-fab-save {
                    min-width: 0;
                    padding: 13px 18px !important;
                    font-size: 0.8rem !important;
                    letter-spacing: 0 !important;
                }
                .cp-action-btn { width: 42px; height: 42px; }
                .cp-action-status { right: 50%; transform: translate(50%, 8px); }
                .cp-action-status.cp-show { transform: translate(50%, 0); }
            }
        </style>
    </head>
    <body>
        <div class="matrix-bg"></div>
        <div class="matrix-code-rain" id="matrixCodeRain"></div>
            <div class="cp-hud">
                <span class="cp-hud-line"><span class="cp-hud-label">SYS::</span> ${ç؟»è¯‘ه€¼.terminal}</span>
                <span class="cp-hud-line"><span class="cp-hud-label">NODE::</span> NIGHT_CITY</span>
                <span class="cp-hud-line"><span class="cp-hud-label">LINK::</span> SECURE / ENC</span>
            </div>
            <div class="cp-lang-wrapper">
                <span class="cp-lang-tag">LANG_</span>
                <select id="languageSelector" onchange="هˆ‡وچ¢è¯­è¨€(this.value)">
                    <option value="zh" ${!وک¯هگ¦ه€¼236 ? 'selected' : ''}>ًں‡¨ًں‡³ ن¸­و–‡</option>
                    <option value="fa" ${وک¯هگ¦ه€¼236 ? 'selected' : ''}>ًں‡®ًں‡· ظپط§ط±ط³غŒ</option>
                </select>
            </div>
            <button type="button" id="cpFxToggle" class="cp-fx-toggle" onclick="window.هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ()" title="${وک¯هگ¦ه€¼236 ? 'طھط؛غŒغŒط± ط§ظپع©طھâ€Œظ‡ط§غŒ طµظپط­ظ‡' : 'هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ'}" aria-label="FX toggle">
                <span class="cp-fx-dot" aria-hidden="true"></span>
                <span id="cpFxLabel">FX: ON</span>
            </button>
        <div class="container">
            <div class="header">
                    <h1 class="title cp-glitch" data-text="${ç؟»è¯‘ه€¼.title}">${ç؟»è¯‘ه€¼.title}</h1>
                    <p class="subtitle">${ç؟»è¯‘ه€¼.subtitle}</p>
            </div>
            <div class="card">
                    <h2 class="card-title">${ç؟»è¯‘ه€¼.selectClient}</h2>
                <div class="client-grid">
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('Y2xhc2g='), 'CLASH')">CLASH</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('Y2xhc2g='), 'STASH')">STASH</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('c3VyZ2U='), 'SURGE')">SURGE</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('c2luZ2JveA=='), 'SING-BOX')">SING-BOX</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('bG9vbg=='), 'LOON')">LOON</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('cXVhbng='), 'QUANTUMULT X')">QUANTUMULT X</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('djJyYXk='), 'V2RAY')">V2RAY</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('djJyYXk='), 'V2RAYNG')">V2RAYNG</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('djJyYXk='), 'NEKORAY')">NEKORAY</button>
                    <button class="client-btn" onclick="ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(atob('djJyYXk='), 'Shadowrocket')">Shadowrocket</button>
                </div>
                <div class="subscription-url" id="clientSubscriptionUrl"></div>
            </div>
            <div class="card">
                    <h2 class="card-title">${ç؟»è¯‘ه€¼.systemStatus}</h2>
                <div id="systemStatus" style="margin: 20px 0; padding: 15px; background: rgba(8, 4, 28, 0.8); border: 2px solid #D0BCFF; box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 15px rgba(0, 240, 255, 0.1); position: relative; overflow: hidden;">
                        <div style="color: #D0BCFF; margin-bottom: 15px; font-weight: bold; ">[ ${ç؟»è¯‘ه€¼.checking} ]</div>
                        <div id="regionStatus" style="margin: 8px 0; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; ">${ç؟»è¯‘ه€¼.workerRegion}${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="geoInfo" style="margin: 8px 0; color: #CAC4D0; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 0.9rem; ">${ç؟»è¯‘ه€¼.detectionMethod}${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="backupStatus" style="margin: 8px 0; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; ">${ç؟»è¯‘ه€¼.proxyIPStatus}${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="currentIP" style="margin: 8px 0; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; ">${ç؟»è¯‘ه€¼.currentIP}${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="echStatus" style="margin: 8px 0; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;  font-size: 0.9rem;">ECHçٹ¶و€پ: ${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="regionMatch" style="margin: 8px 0; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; ">${ç؟»è¯‘ه€¼.regionMatch}${ç؟»è¯‘ه€¼.checking}</div>
                        <div id="selectionLogic" style="margin: 8px 0; color: #CAC4D0; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 0.9rem; ">${ç؟»è¯‘ه€¼.selectionLogic}${ç؟»è¯‘ه€¼.selectionLogicText}</div>
                </div>
            </div>
            <div class="card" id="configCard" style="display: none;">
                    <h2 class="card-title">${ç؟»è¯‘ه€¼.configManagement}</h2>
                <div id="kvStatus" style="margin-bottom: 20px; padding: 10px; background: rgba(8, 4, 28, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF;">
                    ${ç؟»è¯‘ه€¼.kvStatusChecking}
                </div>
                <div id="configContent" style="display: none;">
                    <form id="regionForm" style="margin-bottom: 20px;">
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.specifyRegion}</label>
                            <select id="wkRegion" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.autoDetect}</option>
                                    <option value="HK">${ç؟»è¯‘ه€¼.regionNames.HK}</option>
                                    <option value="US">${ç؟»è¯‘ه€¼.regionNames.US}</option>
                                    <option value="SG">${ç؟»è¯‘ه€¼.regionNames.SG}</option>
                                    <option value="JP">${ç؟»è¯‘ه€¼.regionNames.JP}</option>
                                    <option value="KR">${ç؟»è¯‘ه€¼.regionNames.KR}</option>
                                    <option value="DE">${ç؟»è¯‘ه€¼.regionNames.DE}</option>
                                    <option value="SE">${ç؟»è¯‘ه€¼.regionNames.SE}</option>
                                    <option value="NL">${ç؟»è¯‘ه€¼.regionNames.NL}</option>
                                    <option value="FI">${ç؟»è¯‘ه€¼.regionNames.FI}</option>
                                    <option value="GB">${ç؟»è¯‘ه€¼.regionNames.GB}</option>
                            </select>
                                <small id="wkRegionHint" style="color: #CAC4D0; font-size: 0.85rem; display: none;">âڑ ï¸ڈ ${ç؟»è¯‘ه€¼.customIPDisabledHint}</small>
                        </div>
                    </form>
                    <form id="otherConfigForm" style="margin-bottom: 20px;">
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.protocolSelection}</label>
                            <div style="padding: 15px; background: rgba(15, 3, 40, 0.6); border: 1px solid #D0BCFF; border-radius: 5px;">
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="ev" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableVLESS}</span>
                                    </label>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="et" style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableTrojan}</span>
                                    </label>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="ex" style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableXhttp}</span>
                                    </label>
                                </div>
                                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0, 240, 255, 0.3);">
                                    <div style="margin-bottom: 10px;">
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ech" style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                                <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableECH}</span>
                                        </label>
                                        <small style="color: #CAC4D0; font-size: 0.8rem; display: block; margin-top: 5px; margin-left: 26px;">${ç؟»è¯‘ه€¼.enableECHHint}</small>
                                    </div>
                                    <div style="margin-top: 15px; margin-bottom: 10px;">
                                        <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-size: 0.95rem;">${ç؟»è¯‘ه€¼.customDNS}</label>
                                        <input type="text" id="customDNS" placeholder="${ç؟»è¯‘ه€¼.customDNSPlaceholder}" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                        <small style="color: #CAC4D0; font-size: 0.8rem; display: block; margin-top: 5px;">${ç؟»è¯‘ه€¼.customDNSHint}</small>
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-size: 0.95rem;">${ç؟»è¯‘ه€¼.customECHDomain}</label>
                                        <input type="text" id="customECHDomain" placeholder="${ç؟»è¯‘ه€¼.customECHDomainPlaceholder}" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                        <small style="color: #CAC4D0; font-size: 0.8rem; display: block; margin-top: 5px;">${ç؟»è¯‘ه€¼.customECHDomainHint}</small>
                                    </div>
                                    <div style="margin-bottom: 10px;">
                                        <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-size: 0.95rem;">${ç؟»è¯‘ه€¼.alpn}</label>
                                        <select id="alpn" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                            <option value="">${ç؟»è¯‘ه€¼.alpnDefault}</option>
                                            <option value="h3">h3</option>
                                            <option value="h2">h2</option>
                                            <option value="http/1.1">http/1.1</option>
                                            <option value="h3,h2">h3,h2</option>
                                            <option value="h2,http/1.1">h2,http/1.1</option>
                                            <option value="h3,h2,http/1.1">h3,h2,http/1.1</option>
                                        </select>
                                        <small style="color: #CAC4D0; font-size: 0.8rem; display: block; margin-top: 5px;">${ç؟»è¯‘ه€¼.alpnHint}</small>
                                    </div>
                                </div>
                                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0, 240, 255, 0.3);">
                                        <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-size: 0.95rem;">${ç؟»è¯‘ه€¼.trojanPassword}</label>
                                        <input type="text" id="tp" placeholder="${ç؟»è¯‘ه€¼.trojanPasswordPlaceholder}" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                        <small style="color: #CAC4D0; font-size: 0.8rem; display: block; margin-top: 5px;">${ç؟»è¯‘ه€¼.trojanPasswordHint}</small>
                                </div>
                                    <small style="color: #CAC4D0; font-size: 0.85rem; display: block; margin-top: 10px;">${ç؟»è¯‘ه€¼.protocolHint}</small>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.customHomepage}</label>
                                <input type="text" id="customHomepage" placeholder="${ç؟»è¯‘ه€¼.customHomepagePlaceholder}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.customHomepageHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.customPath}</label>
                                <input type="text" id="customPath" placeholder="${وک¯هگ¦ه€¼236 ? 'ظ…ط«ط§ظ„: /mypath غŒط§ ط®ط§ظ„غŒ ط¨ع¯ط°ط§ط±غŒط¯ طھط§ ط§ط² UUID ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯' : 'ن¾‹ه¦‚: /mypath وˆ–ç•™ç©؛ن½؟ç”¨ UUID'}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${وک¯هگ¦ه€¼236 ? è§£ç پ64('2YXYs9uM2LEg2KfYtNiq2LHYp9qpINiz2YHYp9ix2LTbjC4g2Kfar9ixINiu2KfZhNuMINio2q/YsNin2LHbjNivINin2LIgVVVJRCDYqNmHINi52YbZiNin2YYg2YXYs9uM2LEg2KfYs9iq2YHYp9iv2Ycg2YXbjOKAjNi02YjYry4=') : è§£ç پ64('6Ieq5a6a5LmJ6K6i6ZiF6Lev5b6E44CC55WZ56m65YiZ5L2/55SoIFVVSUQg5L2c5Li66Lev5b6E44CC')}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.customIP}</label>
                                <input type="text" id="customIP" placeholder="${وک¯هگ¦ه€¼236 ? 'ظ…ط«ط§ظ„: 1.2.3.4:443' : 'ن¾‹ه¦‚: 1.2.3.4:443'}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${وک¯هگ¦ه€¼236 ? è§£ç پ64('2KLYr9ix2LMg2Ygg2b7ZiNix2KogUHJveHlJUCDYs9mB2KfYsdi024w=') : è§£ç پ64('6Ieq5a6a5LmJUHJveHlJUOWcsOWdgOWSjOerr+WPow==')}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.preferredIPs}</label>
                                <input type="text" id="yx" placeholder="${وک¯هگ¦ه€¼236 ? 'ظ…ط«ط§ظ„: 1.2.3.4:443#ع¯ط±ظ‡ ظ‡ظ†ع¯â€Œع©ظ†ع¯,5.6.7.8:80#ع¯ط±ظ‡ ط¢ظ…ط±غŒع©ط§,example.com:8443#ع¯ط±ظ‡ ط³ظ†ع¯ط§ظ¾ظˆط±' : 'ن¾‹ه¦‚: 1.2.3.4:443#و—¥وœ¬èٹ‚ç‚¹,5.6.7.8:80#ç¾ژه›½èٹ‚ç‚¹,example.com:8443#و–°هٹ ه‌،èٹ‚ç‚¹'}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${وک¯هگ¦ه€¼236 ? 'ظپط±ظ…طھ: IP:ظ¾ظˆط±طھ#ظ†ط§ظ… ع¯ط±ظ‡ غŒط§ IP:ظ¾ظˆط±طھ (ط¨ط¯ظˆظ† # ط§ط² ظ†ط§ظ… ظ¾غŒط´â€Œظپط±ط¶ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯). ظ¾ط´طھغŒط¨ط§ظ†غŒ ط§ط² ع†ظ†ط¯غŒظ† ظ…ظˆط±ط¯طŒ ط¨ط§ ع©ط§ظ…ط§ ط¬ط¯ط§ ظ…غŒâ€Œط´ظˆظ†ط¯. <span style="color: #FDD663;">IP ظ‡ط§غŒ ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡ ط§ط² ط·ط±غŒظ‚ API ط¨ظ‡ ط·ظˆط± ط®ظˆط¯ع©ط§ط± ط¯ط± ط§غŒظ†ط¬ط§ ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆظ†ط¯.</span>' : 'و ¼ه¼ڈ: IP:ç«¯هڈ£#èٹ‚ç‚¹هگچç§° وˆ– IP:ç«¯هڈ£ (و— #هˆ™ن½؟ç”¨é»کè®¤هگچç§°)م€‚و”¯وŒپه¤ڑن¸ھï¼Œç”¨é€—هڈ·هˆ†éڑ”م€‚<span style="color: #FDD663;">APIو·»هٹ çڑ„IPن¼ڑè‡ھهٹ¨وک¾ç¤؛هœ¨è؟™é‡Œم€‚</span>'}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.preferredIPsURL}</label>
                                <input type="text" id="yxURL" placeholder="${وک¯هگ¦ه€¼236 ? 'URL ظ…ظ†ط¨ط¹ ظ„غŒط³طھ IP طھط±ط¬غŒط­غŒ ط±ط§ ظˆط§ط±ط¯ ع©ظ†غŒط¯' : 'è¾“ه…¥ن¼کé€‰IPهˆ—è،¨و‌¥و؛گURL'}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${وک¯هگ¦ه€¼236 ? 'URL ظ…ظ†ط¨ط¹ ظ„غŒط³طھ IP طھط±ط¬غŒط­غŒ ط³ظپط§ط±ط´غŒطŒ ط§ع¯ط± ط®ط§ظ„غŒ ط¨ع¯ط°ط§ط±غŒط¯ ط§ط² ط¢ط¯ط±ط³ ظ¾غŒط´â€Œظپط±ط¶ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯' : 'è‡ھه®ڑن¹‰ن¼کé€‰IPهˆ—è،¨و‌¥و؛گURLï¼Œç•™ç©؛هˆ™ن½؟ç”¨é»کè®¤هœ°ه‌€'}</small>
                        </div>
                        
                        <div style="margin-bottom: 20px; padding: 15px; background: rgba(20, 5, 50, 0.6); border: 2px solid #CAC4D0; border-radius: 8px;">
                            <h4 style="color: #D0BCFF; margin: 0 0 15px 0; font-size: 1.1rem; ">âڑ، ${ç؟»è¯‘ه€¼.latencyTest}</h4>
                            <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; align-items: center;">
                                <div style="min-width: 120px;">
                                    <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${ç؟»è¯‘ه€¼.ipSource}</label>
                                    <select id="ipSourceSelect" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px; cursor: pointer;">
                                        <option value="manual">${ç؟»è¯‘ه€¼.manualInput}</option>
                                        <option value="cfRandom">${ç؟»è¯‘ه€¼.cfRandomIP}</option>
                                        <option value="urlFetch">${ç؟»è¯‘ه€¼.urlFetch}</option>
                                    </select>
                                </div>
                                <div style="width: 100px;">
                                    <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${ç؟»è¯‘ه€¼.latencyTestPort}</label>
                                    <input type="number" id="latencyTestPort" value="443" min="1" max="65535" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                </div>
                                <div id="randomCountDiv" style="width: 100px; display: none;">
                                    <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${ç؟»è¯‘ه€¼.randomCount}</label>
                                    <input type="number" id="randomIPCount" value="20" min="1" max="100" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                </div>
                                <div style="width: 80px;">
                                    <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${وک¯هگ¦ه€¼236 ? 'ط±ط´طھظ‡â€Œظ‡ط§' : 'ç؛؟ç¨‹'}</label>
                                    <input type="number" id="testThreads" value="5" min="1" max="50" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                </div>
                            </div>
                            <div id="manualInputDiv" style="margin-bottom: 10px;">
                                <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${ç؟»è¯‘ه€¼.latencyTestIP}</label>
                                <input type="text" id="latencyTestInput" placeholder="${ç؟»è¯‘ه€¼.latencyTestIPPlaceholder}" style="width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                            </div>
                            <div id="urlFetchDiv" style="margin-bottom: 10px; display: none;">
                                <label style="display: block; margin-bottom: 5px; color: #D0BCFF; font-size: 0.9rem;">${ç؟»è¯‘ه€¼.fetchURL}</label>
                                <div style="display: flex; gap: 8px;">
                                    <input type="text" id="fetchURLInput" placeholder="${ç؟»è¯‘ه€¼.fetchURLPlaceholder}" style="flex: 1; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;">
                                    <button type="button" id="fetchIPBtn" style="background: rgba(0, 200, 255, 0.2); border: 1px solid #00aaff; padding: 8px 16px; color: #00aaff; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; white-space: nowrap;">â¬‡ ${ç؟»è¯‘ه€¼.fetchIP}</button>
                                </div>
                            </div>
                            <div id="cfRandomDiv" style="margin-bottom: 10px; display: none;">
                                <button type="button" id="generateCFIPBtn" style="background: rgba(0, 240, 255, 0.15); border: 1px solid #D0BCFF; padding: 10px 20px; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; width: 100%; transition: all 0.3s;">ًںژ² ${ç؟»è¯‘ه€¼.generateIP}</button>
                            </div>
                            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                                <button type="button" id="startLatencyTest" style="background: rgba(0, 240, 255, 0.2); border: 1px solid #D0BCFF; padding: 8px 16px; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; transition: all 0.3s;">â–¶ ${ç؟»è¯‘ه€¼.startTest}</button>
                                <button type="button" id="stopLatencyTest" style="background: rgba(255, 0, 0, 0.2); border: 1px solid #F2B8B5; padding: 8px 16px; color: #F2B8B5; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; display: none; transition: all 0.3s;">âڈ¹ ${ç؟»è¯‘ه€¼.stopTest}</button>
                            </div>
                            <div id="latencyTestStatus" style="color: #CAC4D0; font-size: 0.9rem; margin-bottom: 10px; display: none;"></div>
                            <div id="latencyTestResults" style="max-height: 250px; overflow-y: auto; display: none;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="color: #D0BCFF; font-weight: bold;">${ç؟»è¯‘ه€¼.testResult}</span>
                                    <div style="display: flex; gap: 8px;">
                                        <button type="button" id="selectAllResults" style="background: transparent; border: 1px solid #CAC4D0; padding: 4px 10px; color: #CAC4D0; font-size: 0.8rem; cursor: pointer;">${ç؟»è¯‘ه€¼.selectAll}</button>
                                        <button type="button" id="deselectAllResults" style="background: transparent; border: 1px solid #CAC4D0; padding: 4px 10px; color: #CAC4D0; font-size: 0.8rem; cursor: pointer;">${ç؟»è¯‘ه€¼.deselectAll}</button>
                                    </div>
                                </div>
                                <div id="cityFilterContainer" style="margin-bottom: 10px; padding: 10px; background: rgba(15, 3, 40, 0.6); border: 1px solid #CAC4D0; border-radius: 4px; display: none;">
                                    <div style="margin-bottom: 8px;">
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF; font-size: 0.9rem;">
                                            <input type="radio" name="cityFilterMode" value="all" checked style="margin-right: 6px; width: 16px; height: 16px; cursor: pointer;">
                                            <span>${وک¯هگ¦ه€¼236 ? 'ه…¨éƒ¨هںژه¸‚' : 'ه…¨éƒ¨هںژه¸‚'}</span>
                                        </label>
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF; font-size: 0.9rem; margin-left: 15px;">
                                            <input type="radio" name="cityFilterMode" value="fastest10" style="margin-right: 6px; width: 16px; height: 16px; cursor: pointer;">
                                            <span>${وک¯هگ¦ه€¼236 ? 'هڈھé€‰و‹©وœ€ه؟«çڑ„10ن¸ھ' : 'هڈھé€‰و‹©وœ€ه؟«çڑ„10ن¸ھ'}</span>
                                        </label>
                                    </div>
                                    <div id="cityCheckboxesContainer" style="display: flex; flex-wrap: wrap; gap: 8px; max-height: 80px; overflow-y: auto; padding: 5px;"></div>
                                </div>
                                <div id="latencyResultsList" style="background: rgba(0, 0, 0, 0.5); border: 1px solid #004400; border-radius: 4px; padding: 10px;"></div>
                                <div style="margin-top: 10px; display: flex; gap: 10px;">
                                    <button type="button" id="overwriteSelectedToYx" style="flex: 1; background: rgba(0, 220, 130, 0.3); border: 1px solid #D0BCFF; padding: 10px 20px; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: bold; cursor: pointer; transition: all 0.3s;">${وک¯هگ¦ه€¼236 ? 'è¦†ç›–و·»هٹ ' : 'è¦†ç›–و·»هٹ '}</button>
                                    <button type="button" id="appendSelectedToYx" style="flex: 1; background: rgba(0, 178, 110, 0.3); border: 1px solid #CAC4D0; padding: 10px 20px; color: #CAC4D0; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: bold; cursor: pointer; transition: all 0.3s;">${وک¯هگ¦ه€¼236 ? 'è؟½هٹ و·»هٹ ' : 'è؟½هٹ و·»هٹ '}</button>
                                </div>
                            </div>
                        </div>

                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.socks5Config}</label>
                                <input type="text" id="socksConfig" placeholder="${وک¯هگ¦ه€¼236 ? 'ظ…ط«ط§ظ„: user:pass@host:port غŒط§ host:port' : 'ن¾‹ه¦‚: user:pass@host:port وˆ– host:port'}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${وک¯هگ¦ه€¼236 ? è§£ç پ64('2KLYr9ix2LMg2b7YsdmI2qnYs9uMIFNPQ0tTNdiMINio2LHYp9uMINin2YbYqtmC2KfZhCDYqtmF2KfZhSDYqtix2KfZgduM2qkg2K7YsdmI2KzbjCDYp9iz2KrZgdin2K/ZhyDZhduM4oCM2LTZiNiv') : è§£ç پ64('U09DS1M15Luj55CG5Zyw5Z2A77yM55So5LqO6L2s5Y+R5omA5pyJ5Ye656uZ5rWB6YeP')}</small>
                        </div>
                    </form>

                    <h3 style="color: #D0BCFF; margin: 20px 0 15px 0; font-size: 1.2rem;">${ç؟»è¯‘ه€¼.advancedControl}</h3>
                    <form id="advancedConfigForm" style="margin-bottom: 20px;">
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.subscriptionConverter}</label>
                                <input type="text" id="scu" placeholder="${ç؟»è¯‘ه€¼.subscriptionConverterPlaceholder}" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.subscriptionConverterHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.builtinPreferred}</label>
                            <div style="padding: 15px; background: rgba(15, 3, 40, 0.6); border: 1px solid #D0BCFF; border-radius: 5px;">
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="ena" style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableNativeAddress}</span>
                                    </label>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="epd" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enablePreferredDomain}</span>
                                    </label>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="epi" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enablePreferredIP}</span>
                                    </label>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                        <input type="checkbox" id="egi" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1.1rem;">${ç؟»è¯‘ه€¼.enableGitHubPreferred}</span>
                                    </label>
                                </div>
                                    <small style="color: #CAC4D0; font-size: 0.85rem; display: block; margin-top: 10px;">${ç؟»è¯‘ه€¼.builtinPreferredHint}</small>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">ن¼کé€‰IPç­›é€‰è®¾ç½®</label>
                            <div style="padding: 15px; background: rgba(15, 3, 40, 0.6); border: 1px solid #D0BCFF; border-radius: 5px;">
                                <div style="margin-bottom: 15px;">
                                    <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">IPç‰ˆوœ¬é€‰و‹©</label>
                                    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ipv4Enabled" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1rem;">IPv4</span>
                                        </label>
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ipv6Enabled" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1rem;">IPv6</span>
                                        </label>
                                    </div>
                                </div>
                                <div style="margin-bottom: 10px;">
                                    <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">è؟گèگ¥ه•†é€‰و‹©</label>
                                    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ispMobile" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1rem;">ç§»هٹ¨</span>
                                        </label>
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ispUnicom" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1rem;">èپ”é€ڑ</span>
                                        </label>
                                        <label style="display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF;">
                                            <input type="checkbox" id="ispTelecom" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer;">
                                            <span style="font-size: 1rem;">ç”µن؟،</span>
                                        </label>
                                    </div>
                                </div>
                                    <small style="color: #CAC4D0; font-size: 0.85rem; display: block; margin-top: 10px;">é€‰و‹©è¦پن½؟ç”¨çڑ„IPç‰ˆوœ¬ه’Œè؟گèگ¥ه•†ï¼Œوœھé€‰ن¸­çڑ„ه°†è¢«è؟‡و»¤</small>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.allowAPIManagement}</label>
                            <select id="apiEnabled" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.apiEnabledDefault}</option>
                                    <option value="yes">${ç؟»è¯‘ه€¼.apiEnabledYes}</option>
                            </select>
                                <small style="color: #FDD663; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.apiEnabledHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.regionMatching}</label>
                            <select id="regionMatching" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.regionMatchingDefault}</option>
                                    <option value="no">${ç؟»è¯‘ه€¼.regionMatchingNo}</option>
                            </select>
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.regionMatchingHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.downgradeControl}</label>
                            <select id="downgradeControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.downgradeControlDefault}</option>
                                    <option value="no">${ç؟»è¯‘ه€¼.downgradeControlNo}</option>
                            </select>
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.downgradeControlHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.tlsControl}</label>
                            <select id="portControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.tlsControlDefault}</option>
                                    <option value="yes">${ç؟»è¯‘ه€¼.tlsControlYes}</option>
                            </select>
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.tlsControlHint}</small>
                        </div>
                        <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; color: #D0BCFF; font-weight: bold; ">${ç؟»è¯‘ه€¼.preferredControl}</label>
                            <select id="preferredControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #D0BCFF; color: #D0BCFF; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;">
                                    <option value="">${ç؟»è¯‘ه€¼.preferredControlDefault}</option>
                                    <option value="yes">${ç؟»è¯‘ه€¼.preferredControlYes}</option>
                            </select>
                                <small style="color: #CAC4D0; font-size: 0.85rem;">${ç؟»è¯‘ه€¼.preferredControlHint}</small>
                        </div>
                    </form>
                    <div id="currentConfig" style="background: rgba(0, 0, 0, 0.9); border: 1px solid #D0BCFF; padding: 15px; margin: 10px 0; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #D0BCFF;">
                            ${ç؟»è¯‘ه€¼.loading}
                    </div>
                    <div id="pathTypeInfo" style="background: rgba(15, 3, 40, 0.7); border: 1px solid #D0BCFF; padding: 15px; margin: 10px 0; font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #D0BCFF;">
                            <div style="font-weight: bold; margin-bottom: 8px; color: #81C995; ">${ç؟»è¯‘ه€¼.currentConfig}</div>
                            <div id="pathTypeStatus">${ç؟»è¯‘ه€¼.checking}</div>
                    </div>
                </div>
                <div id="statusMessage" style="display: none; padding: 10px; margin: 10px 0; border: 1px solid #D0BCFF; background: rgba(8, 4, 28, 0.8); color: #D0BCFF; "></div>
            </div>
            
            <div class="card">
                    <h2 class="card-title">${ç؟»è¯‘ه€¼.relatedLinks}</h2>
                <div style="text-align: center; margin: 20px 0;">
                        <a href="https://github.com/byJoey/cfnew" target="_blank" style="color: #D0BCFF; text-decoration: none; margin: 0 20px; font-size: 1.2rem; ">${ç؟»è¯‘ه€¼.githubProject}</a>
                        <a href="https://github.com/byJoey/yx-tools/releases/" target="_blank" rel="noopener noreferrer" style="color: #D0BCFF; text-decoration: none; margin: 0 20px; font-size: 1.2rem; ">${ç؟»è¯‘ه€¼.ن¼کé€‰ه·¥ه…·}</a>
                    <a href="https://www.youtube.com/@joeyblog" target="_blank" style="color: #D0BCFF; text-decoration: none; margin: 0 20px; font-size: 1.2rem; ">YouTube @joeyblog</a>
                </div>
            </div>
        </div>
        <div id="cpToastStack" class="cp-toast-stack" aria-live="polite" aria-atomic="false"></div>
        <div id="cpActionStatus" class="cp-action-status" role="status" aria-live="polite"></div>
        <div id="cpActionBar" class="cp-action-bar" role="toolbar" aria-label="${ç؟»è¯‘ه€¼.configManagement}">
            <button type="button" id="cpBtnSaveAll" class="cp-fab-save" title="${وک¯هگ¦ه€¼236 ? 'ط°ط®غŒط±ظ‡ ظ‡ظ…ظ‡ طھظ†ط¸غŒظ…ط§طھ' : 'ن؟‌ه­کو‰€وœ‰é…چç½® (Ctrl+S)'}">
                <span class="cp-fab-icon">â–£</span>
                <span>${وک¯هگ¦ه€¼236 ? 'ط°ط®غŒط±ظ‡ ظ‡ظ…ظ‡' : 'ن؟‌ ه­ک ه…¨ éƒ¨'}</span>
                <span class="cp-fab-dot" aria-hidden="true"></span>
            </button>
            <button type="button" id="cpBtnRefresh" class="cp-action-btn" data-tip="${ç؟»è¯‘ه€¼.refreshConfig}" aria-label="${ç؟»è¯‘ه€¼.refreshConfig}">
                <span aria-hidden="true">â†»</span>
                <span class="cp-btn-label">${ç؟»è¯‘ه€¼.refreshConfig}</span>
            </button>
            <button type="button" id="cpBtnReset" class="cp-action-btn cp-action-btn-danger" data-tip="${ç؟»è¯‘ه€¼.resetConfig}" aria-label="${ç؟»è¯‘ه€¼.resetConfig}">
                <span aria-hidden="true">âŒ«</span>
                <span class="cp-btn-label">${ç؟»è¯‘ه€¼.resetConfig}</span>
            </button>
        </div>
        <script>
// هœ°ه‌€ن»ژوœچهٹ،ه™¨é…چç½®و³¨ه…¥
var è®¢éک…è½¬وچ¢ç½‘ه‌€ = "${è®¢éک…è½¬وچ¢وژ¥هڈ£}";
// è؟œç¨‹é…چç½®URLï¼ˆç،¬ç¼–ç پï¼‰
var è؟œç¨‹é…چç½®ç½‘ه‌€ = "${è؟œç¨‹é…چç½®ç½‘ه‌€}";

// ç؟»è¯‘ه¯¹è±،
const وœ¬هœ°ه€¼20215 = {
  zh: {
    subscriptionCopied: '${è§£ç پ64('6K6i6ZiF6ZO+5o6l5bey5aSN5Yi2')}',
    autoSubscriptionCopied: '${è§£ç پ64('6Ieq5Yqo6K+G5Yir6K6i6ZiF6ZO+5o6l5bey5aSN5Yi277yM5a6i5oi356uv6K6/6Zeu5pe25Lya5qC55o2uVXNlci1BZ2VudOiHquWKqOivhuWIq+W5tui/lOWbnuWvueW6lOagvOW8jw==')}'
  },
  fa: {
    subscriptionCopied: 'ظ„غŒظ†ع© ط§ط´طھط±ط§ع© ع©ظ¾غŒ ط´ط¯',
    autoSubscriptionCopied: 'ظ„غŒظ†ع© ط§ط´طھط±ط§ع© طھط´ط®غŒطµ ط®ظˆط¯ع©ط§ط± ع©ظ¾غŒ ط´ط¯طŒ ع©ظ„ط§غŒظ†طھ ظ‡ظ†ع¯ط§ظ… ط¯ط³طھط±ط³غŒ ط¨ط± ط§ط³ط§ط³ User-Agent ط¨ظ‡ ط·ظˆط± ط®ظˆط¯ع©ط§ط± طھط´ط®غŒطµ ط¯ط§ط¯ظ‡ ظˆ ظ‚ط§ظ„ط¨ ظ…ط±ط¨ظˆط·ظ‡ ط±ط§ ط¨ط±ظ…غŒâ€Œع¯ط±ط¯ط§ظ†ط¯'
  }
};
function èژ·هڈ–ه‡­وچ®20214(هگچç§°20213) {
  const ه€¼20212 = '; ' + document.cookie;
  const éƒ¨هˆ†هˆ—è،¨20211 = ه€¼20212.split('; ' + هگچç§°20213 + '=');
  if (éƒ¨هˆ†هˆ—è،¨20211.length === 2) return éƒ¨هˆ†هˆ—è،¨20211.pop().split(';').shift();
  return null;
}
const وµڈè§ˆه™¨è¯­è¨€20210 = navigator.language || navigator.userLanguage || '';
const ه·²ن؟‌ه­کè¯­è¨€20209 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20214('preferredLanguage');
let وک¯هگ¦ه€¼20208 = false;
if (ه·²ن؟‌ه­کè¯­è¨€20209 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20209 === 'fa-IR') {
  وک¯هگ¦ه€¼20208 = true;
} else if (ه·²ن؟‌ه­کè¯­è¨€20209 === 'zh' || ه·²ن؟‌ه­کè¯­è¨€20209 === 'zh-CN') {
  وک¯هگ¦ه€¼20208 = false;
} else {
  وک¯هگ¦ه€¼20208 = وµڈè§ˆه™¨è¯­è¨€20210.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20210.includes('fa-IR');
}
const ç؟»è¯‘ه€¼20207 = وœ¬هœ°ه€¼20215[وک¯هگ¦ه€¼20208 ? 'fa' : 'zh'];
function هˆ‡وچ¢è¯­è¨€(è¯­è¨€) {
  localStorage.setItem('preferredLanguage', è¯­è¨€);
  // è®¾ç½®Cookieï¼ˆوœ‰و•ˆوœں1ه¹´ï¼‰
  const è؟‡وœںو—¥وœں20206 = new Date();
  è؟‡وœںو—¥وœں20206.setFullYear(è؟‡وœںو—¥وœں20206.getFullYear() + 1);
  document.cookie = 'preferredLanguage=' + è¯­è¨€ + '; path=/; expires=' + è؟‡وœںو—¥وœں20206.toUTCString() + '; SameSite=Lax';
  // هˆ·و–°é،µé‌¢ï¼Œن¸چن½؟ç”¨URLهڈ‚و•°
  window.location.reload();
}

// é،µé‌¢هٹ è½½و—¶و£€وں¥ localStorage ه’Œ Cookieï¼Œه¹¶و¸…çگ†URLهڈ‚و•°
window.addEventListener('DOMContentLoaded', function () {
  const ه·²ن؟‌ه­کè¯­è¨€20205 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20214('preferredLanguage');
  const ç½‘ه‌€هڈ‚و•° = new URLSearchParams(window.location.search);
  const ç½‘ه‌€è¯­è¨€ = ç½‘ه‌€هڈ‚و•°.get('lang');

  // ه¦‚و‍œURLن¸­وœ‰è¯­è¨€هڈ‚و•°ï¼Œç§»é™¤ه®ƒه¹¶è®¾ç½®Cookie
  if (ç½‘ه‌€è¯­è¨€) {
    const ه½“ه‰چç½‘ه‌€20204 = new URL(window.location.href);
    ه½“ه‰چç½‘ه‌€20204.searchParams.delete('lang');
    const و–°ç½‘ه‌€ = ه½“ه‰چç½‘ه‌€20204.toString();

    // è®¾ç½®Cookie
    const è؟‡وœںو—¥وœں20203 = new Date();
    è؟‡وœںو—¥وœں20203.setFullYear(è؟‡وœںو—¥وœں20203.getFullYear() + 1);
    document.cookie = 'preferredLanguage=' + ç½‘ه‌€è¯­è¨€ + '; path=/; expires=' + è؟‡وœںو—¥وœں20203.toUTCString() + '; SameSite=Lax';
    localStorage.setItem('preferredLanguage', ç½‘ه‌€è¯­è¨€);

    // ن½؟ç”¨history APIç§»é™¤URLهڈ‚و•°ï¼Œن¸چهˆ·و–°é،µé‌¢
    window.history.replaceState({}, '', و–°ç½‘ه‌€);
  } else if (ه·²ن؟‌ه­کè¯­è¨€20205) {
    // ه¦‚و‍œlocalStorageن¸­وœ‰ن½†Cookieن¸­و²،وœ‰ï¼ŒهگŒو­¥هˆ°Cookie
    const è؟‡وœںو—¥وœں = new Date();
    è؟‡وœںو—¥وœں.setFullYear(è؟‡وœںو—¥وœں.getFullYear() + 1);
    document.cookie = 'preferredLanguage=' + ه·²ن؟‌ه­کè¯­è¨€20205 + '; path=/; expires=' + è؟‡وœںو—¥وœں.toUTCString() + '; SameSite=Lax';
  }
});

// èµ›هچڑوœ‹ه…‹é£ژ toast é€ڑçں¥ (و›؟ن»£ alert)
window.وک¾ç¤؛وڈگç¤؛ = function (و¶ˆوپ¯20202, ç±»ه‍‹20201, وœ¬هœ°ه€¼20200) {
  وœ¬هœ°ه€¼20200 = وœ¬هœ°ه€¼20200 || {};
  var ه †و ˆ = document.getElementById('cpToastStack');
  if (!ه †و ˆ) return;
  var ç±»ه‍‹وک ه°„ = {
    success: 'âœ“',
    info: 'âŒ¬',
    warn: 'âڑ ',
    error: 'âœ•'
  };
  var و ‡é¢کوک ه°„ = {
    success: 'SUCCESS',
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR'
  };
  ç±»ه‍‹20201 = ç±»ه‍‹وک ه°„[ç±»ه‍‹20201] ? ç±»ه‍‹20201 : 'success';
  var وŒپç»­و—¶é—´ = وœ¬هœ°ه€¼20200.duration || 3200;
  var وڈگç¤؛ = document.createElement('div');
  وڈگç¤؛.className = 'cp-toast cp-toast-' + ç±»ه‍‹20201;
  وڈگç¤؛.style.setProperty('--cp-toast-dur', وŒپç»­و—¶é—´ + 'ms');
  var ه›¾و ‡ = document.createElement('span');
  ه›¾و ‡.className = 'cp-toast-icon';
  ه›¾و ‡.textContent = ç±»ه‍‹وک ه°„[ç±»ه‍‹20201];
  var ن¸»ن½“ = document.createElement('div');
  ن¸»ن½“.className = 'cp-toast-body';
  var و ‡é¢ک = document.createElement('div');
  و ‡é¢ک.className = 'cp-toast-title';
  و ‡é¢ک.textContent = وœ¬هœ°ه€¼20200.title || و ‡é¢کوک ه°„[ç±»ه‍‹20201];
  var و¶ˆوپ¯20199 = document.createElement('div');
  و¶ˆوپ¯20199.className = 'cp-toast-msg';
  و¶ˆوپ¯20199.textContent = String(و¶ˆوپ¯20202 == null ? '' : و¶ˆوپ¯20202);
  ن¸»ن½“.appendChild(و ‡é¢ک);
  ن¸»ن½“.appendChild(و¶ˆوپ¯20199);
  var ه…³é—­ = document.createElement('button');
  ه…³é—­.type = 'button';
  ه…³é—­.className = 'cp-toast-close';
  ه…³é—­.setAttribute('aria-label', 'close');
  ه…³é—­.textContent = 'âœ•';
  وڈگç¤؛.appendChild(ه›¾و ‡);
  وڈگç¤؛.appendChild(ن¸»ن½“);
  وڈگç¤؛.appendChild(ه…³é—­);
  ه †و ˆ.appendChild(وڈگç¤؛);
  requestAnimationFrame(function () {
    وڈگç¤؛.classList.add('cp-show');
  });
  var وœ¬هœ°ه€¼20198 = false;
  function ه…³é—­وڈگç¤؛() {
    if (وœ¬هœ°ه€¼20198) return;
    وœ¬هœ°ه€¼20198 = true;
    وڈگç¤؛.classList.remove('cp-show');
    وڈگç¤؛.classList.add('cp-hide');
    setTimeout(function () {
      if (وڈگç¤؛.parentNode) وڈگç¤؛.parentNode.removeChild(وڈگç¤؛);
    }, 400);
  }
  ه…³é—­.addEventListener('click', ه…³é—­وڈگç¤؛);
  var è®،و—¶ه™¨ = setTimeout(ه…³é—­وڈگç¤؛, وŒپç»­و—¶é—´);
  وڈگç¤؛.addEventListener('mouseenter', function () {
    clearTimeout(è®،و—¶ه™¨);
  });
  وڈگç¤؛.addEventListener('mouseleave', function () {
    è®،و—¶ه™¨ = setTimeout(ه…³é—­وڈگç¤؛, 1200);
  });
  return {
    dismiss: ه…³é—­وڈگç¤؛,
    element: وڈگç¤؛
  };
};
function ه°‌è¯•و‰“ه¼€ه؛”ç”¨(و–¹و،ˆç½‘ه‌€20197, ه›‍é€€ه›‍è°ƒ, è¶…و—¶20196) {
  è¶…و—¶20196 = è¶…و—¶20196 || 2500;
  var ه؛”ç”¨ه·²و‰“ه¼€ = false;
  var ه›‍è°ƒه·²و‰§è،Œ = false;
  var ه¼€ه§‹ه€¼ = Date.now();
  var ه€¼ه€¼20195 = function () {
    var è€—و—¶20194 = Date.now() - ه¼€ه§‹ه€¼;
    if (è€—و—¶20194 < 3000 && !ه›‍è°ƒه·²و‰§è،Œ) {
      ه؛”ç”¨ه·²و‰“ه¼€ = true;
    }
  };
  window.addEventListener('blur', ه€¼ه€¼20195);
  var ه€¼ه€¼20193 = function () {
    var è€—و—¶ = Date.now() - ه¼€ه§‹ه€¼;
    if (è€—و—¶ < 3000 && !ه›‍è°ƒه·²و‰§è،Œ) {
      ه؛”ç”¨ه·²و‰“ه¼€ = true;
    }
  };
  document.addEventListener('visibilitychange', ه€¼ه€¼20193);
  var ه†…هµŒو،†و‍¶ = document.createElement('iframe');
  ه†…هµŒو،†و‍¶.style.display = 'none';
  ه†…هµŒو،†و‍¶.style.width = '1px';
  ه†…هµŒو،†و‍¶.style.height = '1px';
  ه†…هµŒو،†و‍¶.src = و–¹و،ˆç½‘ه‌€20197;
  document.body.appendChild(ه†…هµŒو،†و‍¶);
  setTimeout(function () {
    ه†…هµŒو،†و‍¶.parentNode && ه†…هµŒو،†و‍¶.parentNode.removeChild(ه†…هµŒو،†و‍¶);
    window.removeEventListener('blur', ه€¼ه€¼20195);
    document.removeEventListener('visibilitychange', ه€¼ه€¼20193);
    if (!ه›‍è°ƒه·²و‰§è،Œ) {
      ه›‍è°ƒه·²و‰§è،Œ = true;
      if (!ه؛”ç”¨ه·²و‰“ه¼€ && ه›‍é€€ه›‍è°ƒ) {
        ه›‍é€€ه›‍è°ƒ();
      }
    }
  }, è¶…و—¶20196);
}
function ç”ںوˆگه®¢وˆ·ç«¯é“¾وژ¥(ه®¢وˆ·ç«¯ç±»ه‍‹, ه®¢وˆ·ç«¯هگچç§°) {
  var ه½“ه‰چç½‘ه‌€20192 = window.location.href;
  var è®¢éک…ç½‘ه‌€20191 = ه½“ه‰چç½‘ه‌€20192 + "/sub";
  var و–¹و،ˆç½‘ه‌€ = '';
  var وک¾ç¤؛هگچç§° = ه®¢وˆ·ç«¯هگچç§° || '';
  var وœ€ç»ˆç½‘ه‌€ = è®¢éک…ç½‘ه‌€20191;
  if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('djJyYXk=')) {
    وœ€ç»ˆç½‘ه‌€ = è®¢éک…ç½‘ه‌€20191;
    var ç½‘ه‌€ه€¼20190 = document.getElementById("clientSubscriptionUrl");
    ç½‘ه‌€ه€¼20190.textContent = وœ€ç»ˆç½‘ه‌€;
    ç½‘ه‌€ه€¼20190.style.display = "block";
    ç½‘ه‌€ه€¼20190.style.overflowWrap = "break-word";
    ç½‘ه‌€ه€¼20190.style.wordBreak = "break-all";
    ç½‘ه‌€ه€¼20190.style.overflowX = "auto";
    ç½‘ه‌€ه€¼20190.style.maxWidth = "100%";
    ç½‘ه‌€ه€¼20190.style.boxSizing = "border-box";
    if (ه®¢وˆ·ç«¯هگچç§° === 'V2RAY') {
      navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
        وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
      });
    } else if (ه®¢وˆ·ç«¯هگچç§° === 'Shadowrocket') {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('c2hhZG93cm9ja2V0Oi8vYWRkLw==')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      ه°‌è¯•و‰“ه¼€ه؛”ç”¨(و–¹و،ˆç½‘ه‌€, function () {
        navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
          وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
        });
      });
    } else if (ه®¢وˆ·ç«¯هگچç§° === 'V2RAYNG') {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('djJyYXluZzovL2luc3RhbGw/dXJsPQ==')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      ه°‌è¯•و‰“ه¼€ه؛”ç”¨(و–¹و،ˆç½‘ه‌€, function () {
        navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
          وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
        });
      });
    } else if (ه®¢وˆ·ç«¯هگچç§° === 'NEKORAY') {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('bmVrb3JheTovL2luc3RhbGwtY29uZmlnP3VybD0=')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      ه°‌è¯•و‰“ه¼€ه؛”ç”¨(و–¹و،ˆç½‘ه‌€, function () {
        navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
          وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
        });
      });
    }
  } else {
    // ç»ںن¸€èµ°ه†…éƒ¨و ¼ه¼ڈè½¬وچ¢
    وœ€ç»ˆç½‘ه‌€ = è®¢éک…ç½‘ه‌€20191 + (è®¢éک…ç½‘ه‌€20191.includes('?') ? '&' : '?') + "target=" + ه®¢وˆ·ç«¯ç±»ه‍‹;
    var ç½‘ه‌€ه€¼20190 = document.getElementById("clientSubscriptionUrl");
    ç½‘ه‌€ه€¼20190.textContent = وœ€ç»ˆç½‘ه‌€;
    ç½‘ه‌€ه€¼20190.style.display = "block";
    ç½‘ه‌€ه€¼20190.style.overflowWrap = "break-word";
    ç½‘ه‌€ه€¼20190.style.wordBreak = "break-all";
    ç½‘ه‌€ه€¼20190.style.overflowX = "auto";
    ç½‘ه‌€ه€¼20190.style.maxWidth = "100%";
    ç½‘ه‌€ه€¼20190.style.boxSizing = "border-box";
    if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('Y2xhc2g=')) {
      if (ه®¢وˆ·ç«¯هگچç§° === 'STASH') {
        و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('c3Rhc2g6Ly9pbnN0YWxsP3VybD0=')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
        وک¾ç¤؛هگچç§° = 'STASH';
      } else {
        و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('Y2xhc2g6Ly9pbnN0YWxsLWNvbmZpZz91cmw9')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
        وک¾ç¤؛هگچç§° = 'CLASH';
      }
    } else if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('c3VyZ2U=')) {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('c3VyZ2U6Ly8vaW5zdGFsbC1jb25maWc/dXJsPQ==')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      وک¾ç¤؛هگچç§° = 'SURGE';
    } else if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('c2luZ2JveA==')) {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('c2luZy1ib3g6Ly9pbnN0YWxsLWNvbmZpZz91cmw9')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      وک¾ç¤؛هگچç§° = 'SING-BOX';
    } else if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('bG9vbg==')) {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('bG9vbjovL2luc3RhbGw/dXJsPQ==')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      وک¾ç¤؛هگچç§° = 'LOON';
    } else if (ه®¢وˆ·ç«¯ç±»ه‍‹ === atob('cXVhbng=')) {
      و–¹و،ˆç½‘ه‌€ = '${è§£ç پ64('cXVhbnR1bXVsdC14Oi8vaW5zdGFsbC1jb25maWc/dXJsPQ==')}' + encodeURIComponent(وœ€ç»ˆç½‘ه‌€);
      وک¾ç¤؛هگچç§° = 'QUANTUMULT X';
    }
    if (و–¹و،ˆç½‘ه‌€) {
      ه°‌è¯•و‰“ه¼€ه؛”ç”¨(و–¹و،ˆç½‘ه‌€, function () {
        navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
          وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
        });
      });
    } else {
      navigator.clipboard.writeText(وœ€ç»ˆç½‘ه‌€).then(function () {
        وک¾ç¤؛وڈگç¤؛(وک¾ç¤؛هگچç§° + " " + ç؟»è¯‘ه€¼20207.subscriptionCopied, 'success');
      });
    }
  }
}

// é،µé‌¢ç‰¹و•ˆه›¾ه½¢هŒ–ه¼€ه…³ (localStorage وŒپن¹…هŒ–)
window.ه؛”ç”¨é،µé‌¢ç‰¹و•ˆ = function () {
  var وœ¬هœ°ه€¼20189 = localStorage.getItem('cp-fx-off') === '1';
  document.body.classList.toggle('fx-off', وœ¬هœ°ه€¼20189);
  var وœ¬هœ°ه€¼20188 = document.getElementById('cpFxLabel');
  if (وœ¬هœ°ه€¼20188) وœ¬هœ°ه€¼20188.textContent = وœ¬هœ°ه€¼20189 ? 'FX: OFF' : 'FX: ON';
  if (وœ¬هœ°ه€¼20189) {
    var وœ¬هœ°ه€¼20187 = document.getElementById('matrixCodeRain');
    if (وœ¬هœ°ه€¼20187) وœ¬هœ°ه€¼20187.innerHTML = '';
  } else if (typeof هˆ›ه»؛çں©éکµé›¨ === 'function') {
    var ç»“و‍œه€¼ = document.getElementById('matrixCodeRain');
    if (ç»“و‍œه€¼ && !ç»“و‍œه€¼.firstChild) هˆ›ه»؛çں©éکµé›¨();
  }
};
window.هˆ‡وچ¢é،µé‌¢ç‰¹و•ˆ = function () {
  var وœ¬هœ°ه€¼20186 = localStorage.getItem('cp-fx-off') === '1';
  localStorage.setItem('cp-fx-off', وœ¬هœ°ه€¼20186 ? '0' : '1');
  window.ه؛”ç”¨é،µé‌¢ç‰¹و•ˆ();
};
(function () {
  if (localStorage.getItem('cp-fx-off') === '1') {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.classList.add('fx-off');
      var وœ¬هœ°ه€¼20185 = document.getElementById('cpFxLabel');
      if (وœ¬هœ°ه€¼20185) وœ¬هœ°ه€¼20185.textContent = 'FX: OFF';
    });
  }
})();
function هˆ›ه»؛çں©éکµé›¨() {
  if (document.body && document.body.classList.contains('fx-off')) return;
  const çں©éکµه€¼ = document.getElementById('matrixCodeRain');
  if (!çں©éکµه€¼) return;
  const èµ›هچڑه­—ç¬¦هˆ—è،¨ = '01م‚¢م‚¤م‚¦م‚¨م‚ھم‚«م‚­م‚¯م‚±م‚³م‚µم‚·م‚¹م‚»م‚½م‚؟مƒپمƒ„مƒ†مƒˆمƒٹمƒ‹مƒŒمƒچمƒژ$%#@!?<>+=ABCDEF';
  const è°ƒè‰²و‌؟ = ['#D0BCFF', '#EFB8C8', '#9A82DB', '#81C995'];
  const هˆ—و•° = Math.floor(window.innerWidth / 20);
  for (let ç´¢ه¼•ه€¼20184 = 0; ç´¢ه¼•ه€¼20184 < هˆ—و•°; ç´¢ه¼•ه€¼20184++) {
    const هˆ—20183 = document.createElement('div');
    هˆ—20183.className = 'matrix-column';
    هˆ—20183.style.left = ç´¢ه¼•ه€¼20184 * 20 + 'px';
    هˆ—20183.style.animationDelay = -Math.random() * 15 + 's';
    هˆ—20183.style.animationDuration = Math.random() * 14 + 8 + 's';
    هˆ—20183.style.fontSize = Math.random() * 4 + 12 + 'px';
    هˆ—20183.style.opacity = (Math.random() * 0.7 + 0.3).toFixed(2);
    let و–‡وœ¬20182 = '';
    const ه­—ç¬¦و•°é‡ڈ = Math.floor(Math.random() * 30 + 18);
    for (let و¬،ç´¢ه¼•ه€¼ = 0; و¬،ç´¢ه¼•ه€¼ < ه­—ç¬¦و•°é‡ڈ; و¬،ç´¢ه¼•ه€¼++) {
      const ه­—ç¬¦ = èµ›هچڑه­—ç¬¦هˆ—è،¨[Math.floor(Math.random() * èµ›هچڑه­—ç¬¦هˆ—è،¨.length)];
      const ه€¼ه¼؛è°ƒ = Math.random() > 0.85;
      const é¢œè‰² = ه€¼ه¼؛è°ƒ ? è°ƒè‰²و‌؟[Math.floor(Math.random() * è°ƒè‰²و‌؟.length)] : '';
      و–‡وœ¬20182 += é¢œè‰² ? '<span style="color:' + é¢œè‰² + ';">' + ه­—ç¬¦ + '</span><br>' : '<span>' + ه­—ç¬¦ + '</span><br>';
    }
    هˆ—20183.innerHTML = و–‡وœ¬20182;
    çں©éکµه€¼.appendChild(هˆ—20183);
  }
  setInterval(function () {
    const هˆ—هˆ—è،¨ = çں©éکµه€¼.querySelectorAll('.matrix-column');
    هˆ—هˆ—è،¨.forEach(function (هˆ—) {
      if (Math.random() > 0.94) {
        const ه­—ç¬¦هˆ—è،¨ = هˆ—.querySelectorAll('span');
        if (ه­—ç¬¦هˆ—è،¨.length > 0) {
          const ç›®و ‡20181 = ه­—ç¬¦هˆ—è،¨[Math.floor(Math.random() * ه­—ç¬¦هˆ—è،¨.length)];
          const وœ¬هœ°ه€¼20180 = ç›®و ‡20181.style.color;
          ç›®و ‡20181.style.color = '#ffffff';
          ç›®و ‡20181.style.textShadow = '0 0 10px #ffffff, 0 0 18px #D0BCFF';
          setTimeout(function () {
            ç›®و ‡20181.style.color = وœ¬هœ°ه€¼20180;
            ç›®و ‡20181.style.textShadow = '';
          }, 200);
        }
      }
    });
  }, 110);
}
async function و£€وں¥ç³»ç»ںçٹ¶و€پ() {
  try {
    const ن؛‘ه¢™çٹ¶و€پ = document.getElementById('cfStatus');
    const هœ°هŒ؛çٹ¶و€پ = document.getElementById('regionStatus');
    const ه€¼ه€¼20179 = document.getElementById('geoInfo');
    const ه¤‡ç”¨çٹ¶و€پ = document.getElementById('backupStatus');
    const ه½“ه‰چهœ°ه‌€ = document.getElementById('currentIP');
    const هœ°هŒ؛ه€¼ = document.getElementById('regionMatch');

    // èژ·هڈ–ه½“ه‰چè¯­è¨€è®¾ç½®ï¼ˆن¼که…ˆن»ژCookie/localStorageè¯»هڈ–ï¼‰
    function èژ·هڈ–ه‡­وچ®20178(هگچç§°20177) {
      const ه€¼20176 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20175 = ه€¼20176.split('; ' + هگچç§°20177 + '=');
      if (éƒ¨هˆ†هˆ—è،¨20175.length === 2) return éƒ¨هˆ†هˆ—è،¨20175.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€20174 = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€20173 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20178('preferredLanguage');
    let وک¯هگ¦ه€¼20172 = false;
    if (ه·²ن؟‌ه­کè¯­è¨€20173 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20173 === 'fa-IR') {
      وک¯هگ¦ه€¼20172 = true;
    } else if (ه·²ن؟‌ه­کè¯­è¨€20173 === 'zh' || ه·²ن؟‌ه­کè¯­è¨€20173 === 'zh-CN') {
      وک¯هگ¦ه€¼20172 = false;
    } else {
      وک¯هگ¦ه€¼20172 = وµڈè§ˆه™¨è¯­è¨€20174.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20174.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20171 = {
      zh: {
        workerRegion: 'Workerهœ°هŒ؛: ',
        detectionMethod: 'و£€وµ‹و–¹ه¼ڈ: ',
        proxyIPStatus: '${è§£ç پ64('UHJveHlJUOeKtuaAgTog')}',
        currentIP: 'ه½“ه‰چن½؟ç”¨IP: ',
        regionMatch: 'هœ°هŒ؛هŒ¹é…چ: ',
        regionNames: {
          'HK': 'ًں‡­ًں‡° é¦™و¸¯',
          'US': 'ًں‡؛ًں‡¸ ç¾ژه›½',
          'SG': 'ًں‡¸ًں‡¬ و–°هٹ ه‌،',
          'JP': 'ًں‡¯ًں‡µ و—¥وœ¬',
          'KR': 'ًں‡°ًں‡· éں©ه›½',
          'DE': 'ًں‡©ًں‡ھ ه¾·ه›½',
          'SE': 'ًں‡¸ًں‡ھ ç‘‍ه…¸',
          'NL': 'ًں‡³ًں‡± èچ·ه…°',
          'FI': 'ًں‡«ًں‡® èٹ¬ه…°',
          'GB': 'ًں‡¬ًں‡§ è‹±ه›½'
        },
        customIPMode: '${è§£ç پ64('6Ieq5a6a5LmJUHJveHlJUOaooeW8jyAocOWPmOmHj+WQr+eUqCk=')}',
        customIPModeDesc: 'è‡ھه®ڑن¹‰IPو¨،ه¼ڈ (ه·²ç¦پç”¨هœ°هŒ؛هŒ¹é…چ)',
        usingCustomProxyIP: '${è§£ç پ64('5L2/55So6Ieq5a6a5LmJUHJveHlJUDog')}',
        customIPConfig: ' (pهڈکé‡ڈé…چç½®)',
        customIPModeDisabled: 'è‡ھه®ڑن¹‰IPو¨،ه¼ڈï¼Œهœ°هŒ؛é€‰و‹©ه·²ç¦پç”¨',
        manualRegion: 'و‰‹هٹ¨وŒ‡ه®ڑهœ°هŒ؛',
        manualRegionDesc: ' (و‰‹هٹ¨وŒ‡ه®ڑ)',
        proxyIPAvailable: '${è§£ç پ64('MTAvMTAg5Y+v55SoIChQcm94eUlQ5Z+f5ZCN6aKE6K6+5Y+v55SoKQ==')}',
        smartSelection: 'و™؛èƒ½ه°±è؟‘é€‰و‹©ن¸­',
        sameRegionIP: 'هگŒهœ°هŒ؛IPهڈ¯ç”¨ (1ن¸ھ)',
        cloudflareDetection: 'Cloudflareه†…ç½®و£€وµ‹',
        detectionFailed: 'و£€وµ‹ه¤±è´¥',
        unknown: 'وœھçں¥'
      },
      fa: {
        workerRegion: 'ظ…ظ†ط·ظ‚ظ‡ Worker: ',
        detectionMethod: 'ط±ظˆط´ طھط´ط®غŒطµ: ',
        proxyIPStatus: '${è§£ç پ64('2YjYtti524zYqiBQcm94eUlQOiA=')}',
        currentIP: 'IP ظپط¹ظ„غŒ: ',
        regionMatch: 'طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡: ',
        regionNames: {
          'HK': 'ًں‡­ًں‡° ظ‡ظ†ع¯ ع©ظ†ع¯',
          'US': 'ًں‡؛ًں‡¸ ط¢ظ…ط±غŒع©ط§',
          'SG': 'ًں‡¸ًں‡¬ ط³ظ†ع¯ط§ظ¾ظˆط±',
          'JP': 'ًں‡¯ًں‡µ عکط§ظ¾ظ†',
          'KR': 'ًں‡°ًں‡· ع©ط±ظ‡ ط¬ظ†ظˆط¨غŒ',
          'DE': 'ًں‡©ًں‡ھ ط¢ظ„ظ…ط§ظ†',
          'SE': 'ًں‡¸ًں‡ھ ط³ظˆط¦ط¯',
          'NL': 'ًں‡³ًں‡± ظ‡ظ„ظ†ط¯',
          'FI': 'ًں‡«ًں‡® ظپظ†ظ„ط§ظ†ط¯',
          'GB': 'ًں‡¬ًں‡§ ط¨ط±غŒطھط§ظ†غŒط§'
        },
        customIPMode: '${è§£ç پ64('2K3Yp9mE2KogUHJveHlJUCDYs9mB2KfYsdi024wgKNmF2KrYutuM2LEgcCDZgdi52KfZhCDYp9iz2Kop')}',
        customIPModeDesc: 'ط­ط§ظ„طھ IP ط³ظپط§ط±ط´غŒ (طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡ ط؛غŒط±ظپط¹ط§ظ„ ط§ط³طھ)',
        usingCustomProxyIP: '${è§£ç پ64('2KfYs9iq2YHYp9iv2Ycg2KfYsiBQcm94eUlQINiz2YHYp9ix2LTbjDog')}',
        customIPConfig: ' (ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ…طھط؛غŒط± p)',
        customIPModeDisabled: 'ط­ط§ظ„طھ IP ط³ظپط§ط±ط´غŒطŒ ط§ظ†طھط®ط§ط¨ ظ…ظ†ط·ظ‚ظ‡ ط؛غŒط±ظپط¹ط§ظ„ ط§ط³طھ',
        manualRegion: 'طھط¹غŒغŒظ† ظ…ظ†ط·ظ‚ظ‡ ط¯ط³طھغŒ',
        manualRegionDesc: ' (طھط¹غŒغŒظ† ط¯ط³طھغŒ)',
        proxyIPAvailable: '${è§£ç پ64('MTAvMTAg2K/YsSDYr9iz2KrYsdizICjYr9in2YXZhtmHINm+24zYtOKAjNmB2LHYtiBQcm94eUlQINiv2LEg2K/Ys9iq2LHYsyDYp9iz2Kop')}',
        smartSelection: 'ط§ظ†طھط®ط§ط¨ ظ‡ظˆط´ظ…ظ†ط¯ ظ†ط²ط¯غŒع© ط¯ط± ط­ط§ظ„ ط§ظ†ط¬ط§ظ… ط§ط³طھ',
        sameRegionIP: 'IP ظ‡ظ…â€Œظ…ظ†ط·ظ‚ظ‡ ط¯ط± ط¯ط³طھط±ط³ ط§ط³طھ (1)',
        cloudflareDetection: 'طھط´ط®غŒطµ ط¯ط§ط®ظ„غŒ Cloudflare',
        detectionFailed: 'طھط´ط®غŒطµ ظ†ط§ظ…ظˆظپظ‚',
        unknown: 'ظ†ط§ط´ظ†ط§ط®طھظ‡'
      }
    };
    const ç؟»è¯‘ه€¼20170 = وœ¬هœ°ه€¼20171[وک¯هگ¦ه€¼20172 ? 'fa' : 'zh'];
    let ه€¼هœ°هŒ؛20169 = 'US'; // é»کè®¤ه€¼
    let وک¯هگ¦è‡ھه®ڑن¹‰هœ°ه‌€ه€¼ = false;
    let وک¯هگ¦و‰‹هٹ¨هœ°هŒ؛ه€¼ = false;
    try {
      const ه“چه؛”20168 = await fetch(window.location.pathname + '/region');
      const و•°وچ®20167 = await ه“چه؛”20168.json();
      if (و•°وچ®20167.region === 'CUSTOM') {
        وک¯هگ¦è‡ھه®ڑن¹‰هœ°ه‌€ه€¼ = true;
        ه€¼هœ°هŒ؛20169 = 'CUSTOM';

        // èژ·هڈ–è‡ھه®ڑن¹‰IPçڑ„è¯¦ç»†ن؟،وپ¯
        const è‡ھه®ڑن¹‰هœ°ه‌€ه€¼ = و•°وچ®20167.ci || ç؟»è¯‘ه€¼20170.unknown;
        ه€¼ه€¼20179.innerHTML = ç؟»è¯‘ه€¼20170.detectionMethod + '<span style="color: #FDD663;">âڑ™ï¸ڈ ' + ç؟»è¯‘ه€¼20170.customIPMode + '</span>';
        هœ°هŒ؛çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.workerRegion + '<span style="color: #FDD663;">ًں”§ ' + ç؟»è¯‘ه€¼20170.customIPModeDesc + '</span>';

        // وک¾ç¤؛è‡ھه®ڑن¹‰IPé…چç½®çٹ¶و€پï¼ŒهŒ…هگ«ه…·ن½“IP
        if (ه¤‡ç”¨çٹ¶و€پ) ه¤‡ç”¨çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.proxyIPStatus + '<span style="color: #FDD663;">ًں”§ ' + ç؟»è¯‘ه€¼20170.usingCustomProxyIP + è‡ھه®ڑن¹‰هœ°ه‌€ه€¼ + '</span>';
        if (ه½“ه‰چهœ°ه‌€) ه½“ه‰چهœ°ه‌€.innerHTML = ç؟»è¯‘ه€¼20170.currentIP + '<span style="color: #FDD663;">âœ… ' + è‡ھه®ڑن¹‰هœ°ه‌€ه€¼ + ç؟»è¯‘ه€¼20170.customIPConfig + '</span>';
        if (هœ°هŒ؛ه€¼) هœ°هŒ؛ه€¼.innerHTML = ç؟»è¯‘ه€¼20170.regionMatch + '<span style="color: #FDD663;">âڑ ï¸ڈ ' + ç؟»è¯‘ه€¼20170.customIPModeDisabled + '</span>';
        return; // وڈگه‰چè؟”ه›‍ï¼Œن¸چو‰§è،Œهگژç»­çڑ„هœ°هŒ؛هŒ¹é…چé€»è¾‘
      } else if (و•°وچ®20167.detectionMethod === 'و‰‹هٹ¨وŒ‡ه®ڑهœ°هŒ؛' || و•°وچ®20167.detectionMethod === 'طھط¹غŒغŒظ† ظ…ظ†ط·ظ‚ظ‡ ط¯ط³طھغŒ') {
        وک¯هگ¦و‰‹هٹ¨هœ°هŒ؛ه€¼ = true;
        ه€¼هœ°هŒ؛20169 = و•°وچ®20167.region;
        ه€¼ه€¼20179.innerHTML = ç؟»è¯‘ه€¼20170.detectionMethod + '<span style="color: #00b380;">' + ç؟»è¯‘ه€¼20170.manualRegion + '</span>';
        هœ°هŒ؛çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.workerRegion + '<span style="color: #81C995;">ًںژ¯ ' + ç؟»è¯‘ه€¼20170.regionNames[ه€¼هœ°هŒ؛20169] + ç؟»è¯‘ه€¼20170.manualRegionDesc + '</span>';

        // وک¾ç¤؛é…چç½®çٹ¶و€پè€Œن¸چوک¯و£€وµ‹çٹ¶و€پ
        if (ه¤‡ç”¨çٹ¶و€پ) ه¤‡ç”¨çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.proxyIPStatus + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.proxyIPAvailable + '</span>';
        if (ه½“ه‰چهœ°ه‌€) ه½“ه‰چهœ°ه‌€.innerHTML = ç؟»è¯‘ه€¼20170.currentIP + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.smartSelection + '</span>';
        if (هœ°هŒ؛ه€¼) هœ°هŒ؛ه€¼.innerHTML = ç؟»è¯‘ه€¼20170.regionMatch + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.sameRegionIP + '</span>';
        return; // وڈگه‰چè؟”ه›‍ï¼Œن¸چو‰§è،Œهگژç»­çڑ„هœ°هŒ؛هŒ¹é…چé€»è¾‘
      } else if (و•°وچ®20167.region && ç؟»è¯‘ه€¼20170.regionNames[و•°وچ®20167.region]) {
        ه€¼هœ°هŒ؛20169 = و•°وچ®20167.region;
      }
      ه€¼ه€¼20179.innerHTML = ç؟»è¯‘ه€¼20170.detectionMethod + '<span style="color: #81C995;">' + ç؟»è¯‘ه€¼20170.cloudflareDetection + '</span>';
    } catch (ن؛‹ن»¶ه€¼20166) {
      ه€¼ه€¼20179.innerHTML = ç؟»è¯‘ه€¼20170.detectionMethod + '<span style="color: #F2B8B5;">' + ç؟»è¯‘ه€¼20170.detectionFailed + '</span>';
    }
    هœ°هŒ؛çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.workerRegion + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.regionNames[ه€¼هœ°هŒ؛20169] + '</span>';

    // ç›´وژ¥وک¾ç¤؛é…چç½®çٹ¶و€پï¼Œن¸چه†چè؟›è،Œو£€وµ‹
    if (ه¤‡ç”¨çٹ¶و€پ) {
      ه¤‡ç”¨çٹ¶و€پ.innerHTML = ç؟»è¯‘ه€¼20170.proxyIPStatus + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.proxyIPAvailable + '</span>';
    }
    if (ه½“ه‰چهœ°ه‌€) {
      ه½“ه‰چهœ°ه‌€.innerHTML = ç؟»è¯‘ه€¼20170.currentIP + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.smartSelection + '</span>';
    }
    if (هœ°هŒ؛ه€¼) {
      هœ°هŒ؛ه€¼.innerHTML = ç؟»è¯‘ه€¼20170.regionMatch + '<span style="color: #81C995;">âœ… ' + ç؟»è¯‘ه€¼20170.sameRegionIP + '</span>';
    }
  } catch (é”™è¯¯20165) {
    function èژ·هڈ–ه‡­وچ®20164(هگچç§°20163) {
      const ه€¼20162 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20161 = ه€¼20162.split('; ' + هگچç§°20163 + '=');
      if (éƒ¨هˆ†هˆ—è،¨20161.length === 2) return éƒ¨هˆ†هˆ—è،¨20161.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€20160 = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€20159 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20164('preferredLanguage');
    let وک¯هگ¦ه€¼20158 = false;
    if (ه·²ن؟‌ه­کè¯­è¨€20159 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20159 === 'fa-IR') {
      وک¯هگ¦ه€¼20158 = true;
    } else {
      وک¯هگ¦ه€¼20158 = وµڈè§ˆه™¨è¯­è¨€20160.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20160.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20157 = {
      zh: {
        workerRegion: 'Workerهœ°هŒ؛: ',
        detectionMethod: 'و£€وµ‹و–¹ه¼ڈ: ',
        proxyIPStatus: '${è§£ç پ64('UHJveHlJUOeKtuaAgTog')}',
        currentIP: 'ه½“ه‰چن½؟ç”¨IP: ',
        regionMatch: 'هœ°هŒ؛هŒ¹é…چ: ',
        detectionFailed: 'و£€وµ‹ه¤±è´¥'
      },
      fa: {
        workerRegion: 'ظ…ظ†ط·ظ‚ظ‡ Worker: ',
        detectionMethod: 'ط±ظˆط´ طھط´ط®غŒطµ: ',
        proxyIPStatus: '${è§£ç پ64('2YjYtti524zYqiBQcm94eUlQOiA=')}',
        currentIP: 'IP ظپط¹ظ„غŒ: ',
        regionMatch: 'طھط·ط¨غŒظ‚ ظ…ظ†ط·ظ‚ظ‡: ',
        detectionFailed: 'طھط´ط®غŒطµ ظ†ط§ظ…ظˆظپظ‚'
      }
    };
    const ç؟»è¯‘ه€¼20156 = وœ¬هœ°ه€¼20157[وک¯هگ¦ه€¼20158 ? 'fa' : 'zh'];
    document.getElementById('regionStatus').innerHTML = ç؟»è¯‘ه€¼20156.workerRegion + '<span style="color: #F2B8B5;">â‌Œ ' + ç؟»è¯‘ه€¼20156.detectionFailed + '</span>';
    document.getElementById('geoInfo').innerHTML = ç؟»è¯‘ه€¼20156.detectionMethod + '<span style="color: #F2B8B5;">â‌Œ ' + ç؟»è¯‘ه€¼20156.detectionFailed + '</span>';
    document.getElementById('backupStatus').innerHTML = ç؟»è¯‘ه€¼20156.proxyIPStatus + '<span style="color: #F2B8B5;">â‌Œ ' + ç؟»è¯‘ه€¼20156.detectionFailed + '</span>';
    document.getElementById('currentIP').innerHTML = ç؟»è¯‘ه€¼20156.currentIP + '<span style="color: #F2B8B5;">â‌Œ ' + ç؟»è¯‘ه€¼20156.detectionFailed + '</span>';
    document.getElementById('regionMatch').innerHTML = ç؟»è¯‘ه€¼20156.regionMatch + '<span style="color: #F2B8B5;">â‌Œ ' + ç؟»è¯‘ه€¼20156.detectionFailed + '</span>';
  }
}
async function وµ‹è¯•وژ¥هڈ£() {
  try {
    function èژ·هڈ–ه‡­وچ®20155(هگچç§°20154) {
      const ه€¼20153 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20152 = ه€¼20153.split('; ' + هگچç§°20154 + '=');
      if (éƒ¨هˆ†هˆ—è،¨20152.length === 2) return éƒ¨هˆ†هˆ—è،¨20152.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€20151 = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€20150 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20155('preferredLanguage');
    let وک¯هگ¦ه€¼20149 = false;
    if (ه·²ن؟‌ه­کè¯­è¨€20150 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20150 === 'fa-IR') {
      وک¯هگ¦ه€¼20149 = true;
    } else {
      وک¯هگ¦ه€¼20149 = وµڈè§ˆه™¨è¯­è¨€20151.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20151.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20148 = {
      zh: {
        apiTestResult: 'APIو£€وµ‹ç»“و‍œ: ',
        apiTestTime: 'و£€وµ‹و—¶é—´: ',
        apiTestFailed: 'APIو£€وµ‹ه¤±è´¥: ',
        unknownError: 'وœھçں¥é”™è¯¯',
        apiTestError: 'APIوµ‹è¯•ه¤±è´¥: '
      },
      fa: {
        apiTestResult: 'ظ†طھغŒط¬ظ‡ طھط´ط®غŒطµ API: ',
        apiTestTime: 'ط²ظ…ط§ظ† طھط´ط®غŒطµ: ',
        apiTestFailed: 'طھط´ط®غŒطµ API ظ†ط§ظ…ظˆظپظ‚: ',
        unknownError: 'ط®ط·ط§غŒ ظ†ط§ط´ظ†ط§ط®طھظ‡',
        apiTestError: 'طھط³طھ API ظ†ط§ظ…ظˆظپظ‚: '
      }
    };
    const ç؟»è¯‘ه€¼20147 = وœ¬هœ°ه€¼20148[وک¯هگ¦ه€¼20149 ? 'fa' : 'zh'];
    const ه“چه؛”20146 = await fetch(window.location.pathname + '/test-api');
    const و•°وچ®20145 = await ه“چه؛”20146.json();
    if (و•°وچ®20145.detectedRegion) {
      وک¾ç¤؛وڈگç¤؛(ç؟»è¯‘ه€¼20147.apiTestResult + و•°وچ®20145.detectedRegion + '\\n' + ç؟»è¯‘ه€¼20147.apiTestTime + و•°وچ®20145.timestamp, 'info', {
        duration: 5000
      });
    } else {
      وک¾ç¤؛وڈگç¤؛(ç؟»è¯‘ه€¼20147.apiTestFailed + (و•°وچ®20145.error || ç؟»è¯‘ه€¼20147.unknownError), 'error', {
        duration: 4500
      });
    }
  } catch (é”™è¯¯20144) {
    function èژ·هڈ–ه‡­وچ®20143(هگچç§°20142) {
      const ه€¼20141 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20140 = ه€¼20141.split('; ' + هگچç§°20142 + '=');
      if (éƒ¨هˆ†هˆ—è،¨20140.length === 2) return éƒ¨هˆ†هˆ—è،¨20140.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€20139 = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€20138 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20143('preferredLanguage');
    let وک¯هگ¦ه€¼20137 = false;
    if (ه·²ن؟‌ه­کè¯­è¨€20138 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20138 === 'fa-IR') {
      وک¯هگ¦ه€¼20137 = true;
    } else {
      وک¯هگ¦ه€¼20137 = وµڈè§ˆه™¨è¯­è¨€20139.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20139.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20136 = {
      zh: {
        apiTestError: 'APIوµ‹è¯•ه¤±è´¥: '
      },
      fa: {
        apiTestError: 'طھط³طھ API ظ†ط§ظ…ظˆظپظ‚: '
      }
    };
    const ç؟»è¯‘ه€¼20135 = وœ¬هœ°ه€¼20136[وک¯هگ¦ه€¼20137 ? 'fa' : 'zh'];
    وک¾ç¤؛وڈگç¤؛(ç؟»è¯‘ه€¼20135.apiTestError + é”™è¯¯20144.message, 'error', {
      duration: 4500
    });
  }
}

// é…چç½®ç®،çگ†ç›¸ه…³ه‡½و•°
async function و£€وں¥é”®ه€¼çٹ¶و€پ() {
  const وژ¥هڈ£ç½‘ه‌€20134 = window.location.pathname + '/api/config';
  try {
    const ه“چه؛”20133 = await fetch(وژ¥هڈ£ç½‘ه‌€20134);
    function èژ·هڈ–ه‡­وچ®20132(هگچç§°20131) {
      const ه€¼20130 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20129 = ه€¼20130.split('; ' + هگچç§°20131 + '=');
      if (éƒ¨هˆ†هˆ—è،¨20129.length === 2) return éƒ¨هˆ†هˆ—è،¨20129.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€20128 = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€20127 = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®20132('preferredLanguage');
    let وک¯هگ¦ه€¼20126 = false;
    if (ه·²ن؟‌ه­کè¯­è¨€20127 === 'fa' || ه·²ن؟‌ه­کè¯­è¨€20127 === 'fa-IR') {
      وک¯هگ¦ه€¼20126 = true;
    } else {
      وک¯هگ¦ه€¼20126 = وµڈè§ˆه™¨è¯­è¨€20128.includes('fa') || وµڈè§ˆه™¨è¯­è¨€20128.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20125 = {
      zh: {
        kvDisabled: 'âڑ ï¸ڈ KVه­که‚¨وœھهگ¯ç”¨وˆ–وœھé…چç½®',
        kvNotConfigured: 'KVه­که‚¨وœھé…چç½®ï¼Œو— و³•ن½؟ç”¨é…چç½®ç®،çگ†هٹںèƒ½م€‚\\n\\nè¯·هœ¨Cloudflare Workersن¸­:\\n1. هˆ›ه»؛KVه‘½هگچç©؛é—´\\n2. ç»‘ه®ڑçژ¯ه¢ƒهڈکé‡ڈ C\\n3. é‡چو–°éƒ¨ç½²ن»£ç پ',
        kvNotEnabled: 'KVه­که‚¨وœھé…چç½®',
        kvEnabled: 'âœ… KVه­که‚¨ه·²هگ¯ç”¨ï¼Œهڈ¯ن»¥ن½؟ç”¨é…چç½®ç®،çگ†هٹںèƒ½',
        kvCheckFailed: 'âڑ ï¸ڈ KVه­که‚¨و£€وµ‹ه¤±è´¥',
        kvCheckFailedFormat: 'KVه­که‚¨و£€وµ‹ه¤±è´¥: ه“چه؛”و ¼ه¼ڈé”™è¯¯',
        kvCheckFailedStatus: 'KVه­که‚¨و£€وµ‹ه¤±è´¥ - çٹ¶و€پç پ: ',
        kvCheckFailedError: 'KVه­که‚¨و£€وµ‹ه¤±è´¥ - é”™è¯¯: '
      },
      fa: {
        kvDisabled: 'âڑ ï¸ڈ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظپط¹ط§ظ„ ظ†غŒط³طھ غŒط§ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھ',
        kvNotConfigured: 'ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھطŒ ظ†ظ…غŒâ€Œطھظˆط§ظ†غŒط¯ ط§ط² ط¹ظ…ظ„ع©ط±ط¯ ظ…ط¯غŒط±غŒطھ طھظ†ط¸غŒظ…ط§طھ ط§ط³طھظپط§ط¯ظ‡ ع©ظ†غŒط¯.\\n\\nظ„ط·ظپط§ ط¯ط± Cloudflare Workers:\\n1. ظپط¶ط§غŒ ظ†ط§ظ… KV ط§غŒط¬ط§ط¯ ع©ظ†غŒط¯\\n2. ظ…طھط؛غŒط± ظ…ط­غŒط·غŒ C ط±ط§ ظ¾غŒظˆظ†ط¯ ط¯ظ‡غŒط¯\\n3. ع©ط¯ ط±ط§ ط¯ظˆط¨ط§ط±ظ‡ ظ…ط³طھظ‚ط± ع©ظ†غŒط¯',
        kvNotEnabled: 'ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھ',
        kvEnabled: 'âœ… ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظپط¹ط§ظ„ ط§ط³طھطŒ ظ…غŒâ€Œطھظˆط§ظ†غŒط¯ ط§ط² ظ…ط¯غŒط±غŒطھ طھظ†ط¸غŒظ…ط§طھ ط§ط³طھظپط§ط¯ظ‡ ع©ظ†غŒط¯',
        kvCheckFailed: 'âڑ ï¸ڈ ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚',
        kvCheckFailedFormat: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚: ط®ط·ط§غŒ ظپط±ظ…طھ ظ¾ط§ط³ط®',
        kvCheckFailedStatus: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚ - ع©ط¯ ظˆط¶ط¹غŒطھ: ',
        kvCheckFailedError: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚ - ط®ط·ط§: '
      }
    };
    const ç؟»è¯‘ه€¼20124 = وœ¬هœ°ه€¼20125[وک¯هگ¦ه€¼20126 ? 'fa' : 'zh'];
    if (ه“چه؛”20133.status === 503) {
      // KVوœھé…چç½®
      document.getElementById('kvStatus').innerHTML = '<span style="color: #FDD663;">' + ç؟»è¯‘ه€¼20124.kvDisabled + '</span>';
      document.getElementById('configCard').style.display = 'block';
      document.getElementById('currentConfig').textContent = ç؟»è¯‘ه€¼20124.kvNotConfigured;
    } else if (ه“چه؛”20133.ok) {
      try {
        const و•°وچ®20123 = await ه“چه؛”20133.json();

        // و£€وں¥ه“چه؛”وک¯هگ¦هŒ…هگ«KVé…چç½®ن؟،وپ¯
        if (و•°وچ®20123 && و•°وچ®20123.kvEnabled === true) {
          document.getElementById('kvStatus').innerHTML = '<span style="color: #81C995;">' + ç؟»è¯‘ه€¼20124.kvEnabled + '</span>';
          document.getElementById('configContent').style.display = 'block';
          document.getElementById('configCard').style.display = 'block';
          await هٹ è½½ه½“ه‰چé…چç½®();
        } else {
          document.getElementById('kvStatus').innerHTML = '<span style="color: #FDD663;">' + ç؟»è¯‘ه€¼20124.kvDisabled + '</span>';
          document.getElementById('configCard').style.display = 'block';
          document.getElementById('currentConfig').textContent = ç؟»è¯‘ه€¼20124.kvNotEnabled;
        }
      } catch (و•°وچ®ه¯¹è±،é”™è¯¯) {
        document.getElementById('kvStatus').innerHTML = '<span style="color: #FDD663;">' + ç؟»è¯‘ه€¼20124.kvCheckFailed + '</span>';
        document.getElementById('configCard').style.display = 'block';
        document.getElementById('currentConfig').textContent = ç؟»è¯‘ه€¼20124.kvCheckFailedFormat;
      }
    } else {
      document.getElementById('kvStatus').innerHTML = '<span style="color: #FDD663;">' + ç؟»è¯‘ه€¼20124.kvDisabled + '</span>';
      document.getElementById('configCard').style.display = 'block';
      document.getElementById('currentConfig').textContent = ç؟»è¯‘ه€¼20124.kvCheckFailedStatus + ه“چه؛”20133.status;
    }
  } catch (é”™è¯¯20122) {
    function èژ·هڈ–ه‡­وچ®(هگچç§°) {
      const ه€¼20121 = '; ' + document.cookie;
      const éƒ¨هˆ†هˆ—è،¨20120 = ه€¼20121.split('; ' + هگچç§° + '=');
      if (éƒ¨هˆ†هˆ—è،¨20120.length === 2) return éƒ¨هˆ†هˆ—è،¨20120.pop().split(';').shift();
      return null;
    }
    const وµڈè§ˆه™¨è¯­è¨€ = navigator.language || navigator.userLanguage || '';
    const ه·²ن؟‌ه­کè¯­è¨€ = localStorage.getItem('preferredLanguage') || èژ·هڈ–ه‡­وچ®('preferredLanguage');
    let وک¯هگ¦ه€¼ = false;
    if (ه·²ن؟‌ه­کè¯­è¨€ === 'fa' || ه·²ن؟‌ه­کè¯­è¨€ === 'fa-IR') {
      وک¯هگ¦ه€¼ = true;
    } else {
      وک¯هگ¦ه€¼ = وµڈè§ˆه™¨è¯­è¨€.includes('fa') || وµڈè§ˆه™¨è¯­è¨€.includes('fa-IR');
    }
    const وœ¬هœ°ه€¼20119 = {
      zh: {
        kvDisabled: 'âڑ ï¸ڈ KVه­که‚¨وœھهگ¯ç”¨وˆ–وœھé…چç½®',
        kvCheckFailedError: 'KVه­که‚¨و£€وµ‹ه¤±è´¥ - é”™è¯¯: '
      },
      fa: {
        kvDisabled: 'âڑ ï¸ڈ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظپط¹ط§ظ„ ظ†غŒط³طھ غŒط§ ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظ†ط´ط¯ظ‡ ط§ط³طھ',
        kvCheckFailedError: 'ط¨ط±ط±ط³غŒ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ KV ظ†ط§ظ…ظˆظپظ‚ - ط®ط·ط§: '
      }
    };
    const ç؟»è¯‘ه€¼20118 = وœ¬هœ°ه€¼20119[وک¯هگ¦ه€¼ ? 'fa' : 'zh'];
    document.getElementById('kvStatus').innerHTML = '<span style="color: #FDD663;">' + ç؟»è¯‘ه€¼20118.kvDisabled + '</span>';
    document.getElementById('configCard').style.display = 'block';
    document.getElementById('currentConfig').textContent = ç؟»è¯‘ه€¼20118.kvCheckFailedError + é”™è¯¯20122.message;
  }
}
function è¯»هڈ–ه­—و®µه€¼(و ‡è¯†) {
  const ه…ƒç´  = document.getElementById(و ‡è¯†);
  return ه…ƒç´  ? ه…ƒç´ .value : '';
}

function ه†™ه…¥ه­—و®µه€¼(و ‡è¯†, ه€¼ = '') {
  const ه…ƒç´  = document.getElementById(و ‡è¯†);
  if (ه…ƒç´ ) ه…ƒç´ .value = ه€¼ || '';
}

function وک¯هگ¦ه¼€ه…³هگ¯ç”¨(ه€¼, é»کè®¤هگ¯ç”¨ = false) {
  if (ه€¼ === undefined || ه€¼ === null || ه€¼ === '') return é»کè®¤هگ¯ç”¨;
  if (ه€¼ === true || ه€¼ === false) return ه€¼;
  const و–‡وœ¬ = String(ه€¼).trim().toLowerCase();
  if (و–‡وœ¬ === 'yes' || و–‡وœ¬ === 'true' || و–‡وœ¬ === '1' || و–‡وœ¬ === 'on') return true;
  if (و–‡وœ¬ === 'no' || و–‡وœ¬ === 'false' || و–‡وœ¬ === '0' || و–‡وœ¬ === 'off') return false;
  return é»کè®¤هگ¯ç”¨;
}

function ه†™ه…¥ه¼€ه…³ه€¼(و ‡è¯†, ه€¼, é»کè®¤هگ¯ç”¨ = false) {
  const ه…ƒç´  = document.getElementById(و ‡è¯†);
  if (ه…ƒç´ ) ه…ƒç´ .checked = وک¯هگ¦ه¼€ه…³هگ¯ç”¨(ه€¼, é»کè®¤هگ¯ç”¨);
}

function è¯»هڈ–ه¼€ه…³ه€¼(و ‡è¯†, é»کè®¤هگ¯ç”¨ = false) {
  const ه…ƒç´  = document.getElementById(و ‡è¯†);
  if (!ه…ƒç´ ) return é»کè®¤هگ¯ç”¨ ? 'yes' : 'no';
  return ه…ƒç´ .checked ? 'yes' : 'no';
}

function هگŒو­¥هچڈè®®ç•Œé‌¢çٹ¶و€پ() {
  const وکژو–‡ه¼€ه…³ = document.getElementById('ev');
  const وœ¨é©¬ه¼€ه…³ = document.getElementById('et');
  const و‰©ه±•ه¼€ه…³ = document.getElementById('ex');
  if (وکژو–‡ه¼€ه…³ && وœ¨é©¬ه¼€ه…³ && و‰©ه±•ه¼€ه…³ && !وکژو–‡ه¼€ه…³.checked && !وœ¨é©¬ه¼€ه…³.checked && !و‰©ه±•ه¼€ه…³.checked) {
    وکژو–‡ه¼€ه…³.checked = true;
  }
}

function هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ() {
  هگŒو­¥هچڈè®®ç•Œé‌¢çٹ¶و€پ();
  const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،† = document.getElementById('ech');
  const ç«¯هڈ£وژ§هˆ¶ = document.getElementById('portControl');
  if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،† && ç«¯هڈ£وژ§هˆ¶ && هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،†.checked) {
    ç«¯هڈ£وژ§هˆ¶.value = 'yes';
  }
  و›´و–°è·¯ه¾„ç±»ه‍‹çٹ¶و€پ(è¯»هڈ–ه­—و®µه€¼('customPath'));
  و›´و–°ه·¥ن½œه™¨هœ°هŒ؛çٹ¶و€پ();
}

function ه؛”ç”¨é…چç½®هˆ°ç•Œé‌¢(é…چç½®) {
  ه†™ه…¥ه­—و®µه€¼('wkRegion', é…چç½®.wk);
  ه†™ه…¥ه¼€ه…³ه€¼('ev', é…چç½®.ev, true);
  ه†™ه…¥ه¼€ه…³ه€¼('et', é…چç½®.et, false);
  ه†™ه…¥ه¼€ه…³ه€¼('ex', é…چç½®.ex, false);
  ه†™ه…¥ه¼€ه…³ه€¼('ech', é…چç½®.ech, false);
  ه†™ه…¥ه­—و®µه€¼('tp', é…چç½®.tp);
  ه†™ه…¥ه­—و®µه€¼('customDNS', é…چç½®.customDNS);
  ه†™ه…¥ه­—و®µه€¼('customECHDomain', é…چç½®.customECHDomain);
  ه†™ه…¥ه­—و®µه€¼('alpn', é…چç½®.alpn);
  ه†™ه…¥ه­—و®µه€¼('scu', é…چç½®.scu);
  ه†™ه…¥ه¼€ه…³ه€¼('ena', é…چç½®.ena, false);
  ه†™ه…¥ه¼€ه…³ه€¼('epd', é…چç½®.epd, true);
  ه†™ه…¥ه¼€ه…³ه€¼('epi', é…چç½®.epi, true);
  ه†™ه…¥ه¼€ه…³ه€¼('egi', é…چç½®.egi, true);
  ه†™ه…¥ه¼€ه…³ه€¼('ipv4Enabled', é…چç½®.ipv4, true);
  ه†™ه…¥ه¼€ه…³ه€¼('ipv6Enabled', é…چç½®.ipv6, true);
  ه†™ه…¥ه¼€ه…³ه€¼('ispMobile', é…چç½®.ispMobile, true);
  ه†™ه…¥ه¼€ه…³ه€¼('ispUnicom', é…چç½®.ispUnicom, true);
  ه†™ه…¥ه¼€ه…³ه€¼('ispTelecom', é…چç½®.ispTelecom, true);
  ه†™ه…¥ه­—و®µه€¼('customPath', é…چç½®.d);
  ه†™ه…¥ه­—و®µه€¼('customIP', é…چç½®.p);
  ه†™ه…¥ه­—و®µه€¼('yx', é…چç½®.yx);
  ه†™ه…¥ه­—و®µه€¼('yxURL', é…چç½®.yxURL);
  ه†™ه…¥ه­—و®µه€¼('socksConfig', é…چç½®.s);
  ه†™ه…¥ه­—و®µه€¼('customHomepage', é…چç½®.homepage);
  ه†™ه…¥ه­—و®µه€¼('apiEnabled', é…چç½®.ae);
  ه†™ه…¥ه­—و®µه€¼('regionMatching', é…چç½®.rm);
  ه†™ه…¥ه­—و®µه€¼('downgradeControl', é…چç½®.qj);
  ه†™ه…¥ه­—و®µه€¼('portControl', é…چç½®.dkby);
  ه†™ه…¥ه­—و®µه€¼('preferredControl', é…چç½®.yxby);
  هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ();
}

function و”¶é›†ç•Œé‌¢é…چç½®() {
  const é…چç½® = {
    wk: è¯»هڈ–ه­—و®µه€¼('wkRegion'),
    ev: è¯»هڈ–ه¼€ه…³ه€¼('ev', true),
    et: è¯»هڈ–ه¼€ه…³ه€¼('et', false),
    ex: è¯»هڈ–ه¼€ه…³ه€¼('ex', false),
    ech: è¯»هڈ–ه¼€ه…³ه€¼('ech', false),
    tp: è¯»هڈ–ه­—و®µه€¼('tp'),
    customDNS: è¯»هڈ–ه­—و®µه€¼('customDNS'),
    customECHDomain: è¯»هڈ–ه­—و®µه€¼('customECHDomain'),
    alpn: è¯»هڈ–ه­—و®µه€¼('alpn'),
    d: è¯»هڈ–ه­—و®µه€¼('customPath'),
    p: è¯»هڈ–ه­—و®µه€¼('customIP'),
    yx: è¯»هڈ–ه­—و®µه€¼('yx'),
    yxURL: è¯»هڈ–ه­—و®µه€¼('yxURL'),
    s: è¯»هڈ–ه­—و®µه€¼('socksConfig'),
    homepage: è¯»هڈ–ه­—و®µه€¼('customHomepage'),
    scu: è¯»هڈ–ه­—و®µه€¼('scu'),
    ena: è¯»هڈ–ه¼€ه…³ه€¼('ena', false),
    epd: è¯»هڈ–ه¼€ه…³ه€¼('epd', true),
    epi: è¯»هڈ–ه¼€ه…³ه€¼('epi', true),
    egi: è¯»هڈ–ه¼€ه…³ه€¼('egi', true),
    ae: è¯»هڈ–ه­—و®µه€¼('apiEnabled'),
    rm: è¯»هڈ–ه­—و®µه€¼('regionMatching'),
    qj: è¯»هڈ–ه­—و®µه€¼('downgradeControl'),
    dkby: è¯»هڈ–ه­—و®µه€¼('portControl'),
    yxby: è¯»هڈ–ه­—و®µه€¼('preferredControl'),
    ipv4: è¯»هڈ–ه¼€ه…³ه€¼('ipv4Enabled', true),
    ipv6: è¯»هڈ–ه¼€ه…³ه€¼('ipv6Enabled', true),
    ispMobile: è¯»هڈ–ه¼€ه…³ه€¼('ispMobile', true),
    ispUnicom: è¯»هڈ–ه¼€ه…³ه€¼('ispUnicom', true),
    ispTelecom: è¯»هڈ–ه¼€ه…³ه€¼('ispTelecom', true)
  };
  if (é…چç½®.ev === 'no' && é…چç½®.et === 'no' && é…چç½®.ex === 'no') {
    é…چç½®.ev = 'yes';
    ه†™ه…¥ه¼€ه…³ه€¼('ev', 'yes', true);
  }
  if (é…چç½®.ech === 'yes') {
    é…چç½®.dkby = 'yes';
    ه†™ه…¥ه­—و®µه€¼('portControl', 'yes');
  }
  return é…چç½®;
}

async function هٹ è½½ه½“ه‰چé…چç½®() {
  const وژ¥هڈ£ç½‘ه‌€20117 = window.location.pathname + '/api/config';
  try {
    const ه“چه؛”20116 = await fetch(وژ¥هڈ£ç½‘ه‌€20117);
    if (ه“چه؛”20116.status === 503) {
      document.getElementById('currentConfig').textContent = 'KVه­که‚¨وœھé…چç½®ï¼Œو— و³•هٹ è½½é…چç½®';
      return;
    }
    if (!ه“چه؛”20116.ok) {
      const é”™è¯¯و–‡وœ¬20115 = await ه“چه؛”20116.text();
      document.getElementById('currentConfig').textContent = 'هٹ è½½é…چç½®ه¤±è´¥: ' + é”™è¯¯و–‡وœ¬20115;
      return;
    }
    const é…چç½® = await ه“چه؛”20116.json();

    // è؟‡و»¤وژ‰ه†…éƒ¨ه­—و®µ kvEnabled
    const وک¾ç¤؛é…چç½® = {};
    for (const [é”®20114, ه€¼20113] of Object.entries(é…چç½®)) {
      if (é”®20114 !== 'kvEnabled') {
        وک¾ç¤؛é…چç½®[é”®20114] = ه€¼20113;
      }
    }
    let é…چç½®و–‡وœ¬ = 'ه½“ه‰چé…چç½®:\\n';
    if (Object.keys(وک¾ç¤؛é…چç½®).length === 0) {
      é…چç½®و–‡وœ¬ += '(وڑ‚و— é…چç½®)';
    } else {
      for (const [é”®, ه€¼20112] of Object.entries(وک¾ç¤؛é…چç½®)) {
        é…چç½®و–‡وœ¬ += é”® + ': ' + (ه€¼20112 || '(وœھè®¾ç½®)') + '\\n';
      }
    }
    document.getElementById('currentConfig').textContent = é…چç½®و–‡وœ¬;

    ه؛”ç”¨é…چç½®هˆ°ç•Œé‌¢(é…چç½®);
  } catch (é”™è¯¯20111) {
    document.getElementById('currentConfig').textContent = 'هٹ è½½é…چç½®ه¤±è´¥: ' + é”™è¯¯20111.message;
  }
}

// و›´و–°è·¯ه¾„ç±»ه‍‹وک¾ç¤؛
function و›´و–°è·¯ه¾„ç±»ه‍‹çٹ¶و€پ(è‡ھه®ڑن¹‰è·¯ه¾„) {
  const è·¯ه¾„ç±»ه‍‹çٹ¶و€پ = document.getElementById('pathTypeStatus');
  const ه½“ه‰چç½‘ه‌€20110 = window.location.href;
  const è·¯ه¾„éƒ¨هˆ†هˆ—è،¨ = window.location.pathname.split('/').filter(هڈ‚و•°ه€¼20109 => هڈ‚و•°ه€¼20109);
  const ه½“ه‰چè·¯ه¾„ = è·¯ه¾„éƒ¨هˆ†هˆ—è،¨.length > 0 ? è·¯ه¾„éƒ¨هˆ†هˆ—è،¨[0] : '';
  if (è‡ھه®ڑن¹‰è·¯ه¾„ && è‡ھه®ڑن¹‰è·¯ه¾„.trim()) {
    // ن½؟ç”¨è‡ھه®ڑن¹‰è·¯ه¾„ (d)
    è·¯ه¾„ç±»ه‍‹çٹ¶و€پ.innerHTML = '<div style="color: #81C995;">ن½؟ç”¨ç±»ه‍‹: <strong>è‡ھه®ڑن¹‰è·¯ه¾„ (d)</strong></div>' + '<div style="margin-top: 5px; color: #D0BCFF;">ه½“ه‰چè·¯ه¾„: <span style="color: #FDD663;">' + è‡ھه®ڑن¹‰è·¯ه¾„ + '</span></div>' + '<div style="margin-top: 5px; font-size: 0.9rem; color: #CAC4D0;">è®؟é—®هœ°ه‌€: ' + (ه½“ه‰چç½‘ه‌€20110.split('/')[0] + '//' + ه½“ه‰چç½‘ه‌€20110.split('/')[2]) + è‡ھه®ڑن¹‰è·¯ه¾„ + '/sub</div>';
  } else {
    // ن½؟ç”¨ UUID (u)
    è·¯ه¾„ç±»ه‍‹çٹ¶و€پ.innerHTML = '<div style="color: #81C995;">ن½؟ç”¨ç±»ه‍‹: <strong>UUID è·¯ه¾„ (u)</strong></div>' + '<div style="margin-top: 5px; color: #D0BCFF;">ه½“ه‰چè·¯ه¾„: <span style="color: #FDD663;">' + (ه½“ه‰چè·¯ه¾„ || '(UUID)') + '</span></div>' + '<div style="margin-top: 5px; font-size: 0.9rem; color: #CAC4D0;">è®؟é—®هœ°ه‌€: ' + ه½“ه‰چç½‘ه‌€20110.split('/sub')[0] + '/sub</div>';
  }
}

// و›´و–°wkهœ°هŒ؛é€‰و‹©çڑ„هگ¯ç”¨/ç¦پç”¨çٹ¶و€پ
function و›´و–°ه·¥ن½œه™¨هœ°هŒ؛çٹ¶و€پ() {
  const è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥20108 = document.getElementById('customIP');
  const ه€¼هœ°هŒ؛ = document.getElementById('wkRegion');
  const ه€¼هœ°هŒ؛ه€¼ = document.getElementById('wkRegionHint');
  if (è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥20108 && ه€¼هœ°هŒ؛) {
    const وک¯هگ¦وœ‰è‡ھه®ڑن¹‰هœ°ه‌€ = è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥20108.value.trim() !== '';
    ه€¼هœ°هŒ؛.disabled = وک¯هگ¦وœ‰è‡ھه®ڑن¹‰هœ°ه‌€;

    // و·»هٹ è§†è§‰هڈچé¦ˆ
    if (وک¯هگ¦وœ‰è‡ھه®ڑن¹‰هœ°ه‌€) {
      ه€¼هœ°هŒ؛.style.opacity = '0.5';
      ه€¼هœ°هŒ؛.style.cursor = 'not-allowed';
      ه€¼هœ°هŒ؛.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      // وک¾ç¤؛وڈگç¤؛ن؟،وپ¯
      if (ه€¼هœ°هŒ؛ه€¼) {
        ه€¼هœ°هŒ؛ه€¼.style.display = 'block';
        ه€¼هœ°هŒ؛ه€¼.style.color = '#FDD663';
      }
    } else {
      ه€¼هœ°هŒ؛.style.opacity = '1';
      ه€¼هœ°هŒ؛.style.cursor = 'pointer';
      ه€¼هœ°هŒ؛.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      // éڑگè—ڈوڈگç¤؛ن؟،وپ¯
      if (ه€¼هœ°هŒ؛ه€¼) {
        ه€¼هœ°هŒ؛ه€¼.style.display = 'none';
      }
    }
  }
}
async function ن؟‌ه­کé…چç½®(é…چç½®و•°وچ®20107) {
  const وژ¥هڈ£ç½‘ه‌€ = window.location.pathname + '/api/config';
  try {
    const ه“چه؛”20106 = await fetch(وژ¥هڈ£ç½‘ه‌€, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(é…چç½®و•°وچ®20107)
    });
    if (ه“چه؛”20106.status === 503) {
      وک¾ç¤؛çٹ¶و€پ('KVه­که‚¨وœھé…چç½®ï¼Œو— و³•ن؟‌ه­کé…چç½®م€‚è¯·ه…ˆهœ¨Cloudflare Workersن¸­é…چç½®KVه­که‚¨م€‚', 'error');
      return;
    }
    if (!ه“چه؛”20106.ok) {
      const é”™è¯¯و–‡وœ¬20105 = await ه“چه؛”20106.text();

      // ه°‌è¯•è§£و‍گ JSON é”™è¯¯ن؟،وپ¯
      try {
        const é”™è¯¯و•°وچ®20104 = JSON.parse(é”™è¯¯و–‡وœ¬20105);
        وک¾ç¤؛çٹ¶و€پ(é”™è¯¯و•°وچ®20104.message || 'ن؟‌ه­که¤±è´¥', 'error');
      } catch (è§£و‍گé”™è¯¯20103) {
        // ه¦‚و‍œن¸چوک¯ JSONï¼Œç›´وژ¥وک¾ç¤؛و–‡وœ¬
        وک¾ç¤؛çٹ¶و€پ('ن؟‌ه­که¤±è´¥: ' + é”™è¯¯و–‡وœ¬20105, 'error');
      }
      return;
    }
    const ç»“و‍œ20102 = await ه“چه؛”20106.json();
    وک¾ç¤؛çٹ¶و€پ(ç»“و‍œ20102.message, ç»“و‍œ20102.success ? 'success' : 'error');
    if (ç»“و‍œ20102.success) {
      await هٹ è½½ه½“ه‰چé…چç½®();
      // و›´و–°wkهœ°هŒ؛é€‰و‹©çٹ¶و€پ
      و›´و–°ه·¥ن½œه™¨هœ°هŒ؛çٹ¶و€پ();
      // ن؟‌ه­کوˆگهٹںهگژهˆ·و–°é،µé‌¢ن»¥و›´و–°ç³»ç»ںçٹ¶و€پ
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } else {}
  } catch (é”™è¯¯20101) {
    وک¾ç¤؛çٹ¶و€پ('ن؟‌ه­که¤±è´¥: ' + é”™è¯¯20101.message, 'error');
  }
}
function وک¾ç¤؛çٹ¶و€پ(و¶ˆوپ¯20100, ç±»ه‍‹20099) {
  const çٹ¶و€په€¼ = document.getElementById('statusMessage');
  if (çٹ¶و€په€¼) {
    çٹ¶و€په€¼.textContent = و¶ˆوپ¯20100;
    çٹ¶و€په€¼.style.display = 'block';
    çٹ¶و€په€¼.style.color = ç±»ه‍‹20099 === 'success' ? '#D0BCFF' : '#F2B8B5';
    çٹ¶و€په€¼.style.borderColor = ç±»ه‍‹20099 === 'success' ? '#D0BCFF' : '#F2B8B5';
    setTimeout(function () {
      çٹ¶و€په€¼.style.display = 'none';
    }, 3000);
  }
  // هگŒو­¥هœ¨ه؛•éƒ¨و“چن½œو‌،ن¸ٹو–¹ه¼¹ه‡؛éœ“è™¹هڈچé¦ˆ
  if (typeof window.وک¾ç¤؛و“چن½œçٹ¶و€پ === 'function') {
    window.وک¾ç¤؛و“چن½œçٹ¶و€پ(و¶ˆوپ¯20100, ç±»ه‍‹20099 === 'success' ? 'ok' : 'err');
  }
}
async function é‡چç½®ه…¨éƒ¨é…چç½®() {
  if (confirm('ç،®ه®ڑè¦پé‡چç½®و‰€وœ‰é…چç½®هگ—ï¼ںè؟™ه°†و¸…ç©؛و‰€وœ‰KVé…چç½®ï¼Œوپ¢ه¤چن¸؛çژ¯ه¢ƒهڈکé‡ڈè®¾ç½®م€‚')) {
    try {
      const ه“چه؛”20098 = await fetch(window.location.pathname + '/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          wk: '',
          d: '',
          p: '',
          yx: '',
          yxURL: '',
          s: '',
          ae: '',
          rm: '',
          qj: '',
          dkby: '',
          yxby: '',
          ev: '',
          et: '',
          ex: '',
          ech: '',
          tp: '',
          customDNS: '',
          customECHDomain: '',
          scu: '',
          epd: '',
          epi: '',
          egi: '',
          ipv4: '',
          ipv6: '',
          ispMobile: '',
          ispUnicom: '',
          ispTelecom: '',
          homepage: '',
          alpn: ''
        })
      });
      if (ه“چه؛”20098.status === 503) {
        وک¾ç¤؛çٹ¶و€پ('KVه­که‚¨وœھé…چç½®ï¼Œو— و³•é‡چç½®é…چç½®م€‚', 'error');
        return;
      }
      if (!ه“چه؛”20098.ok) {
        const é”™è¯¯و–‡وœ¬ = await ه“چه؛”20098.text();

        // ه°‌è¯•è§£و‍گ JSON é”™è¯¯ن؟،وپ¯
        try {
          const é”™è¯¯و•°وچ® = JSON.parse(é”™è¯¯و–‡وœ¬);
          وک¾ç¤؛çٹ¶و€پ(é”™è¯¯و•°وچ®.message || 'é‡چç½®ه¤±è´¥', 'error');
        } catch (è§£و‍گé”™è¯¯) {
          // ه¦‚و‍œن¸چوک¯ JSONï¼Œç›´وژ¥وک¾ç¤؛و–‡وœ¬
          وک¾ç¤؛çٹ¶و€پ('é‡چç½®ه¤±è´¥: ' + é”™è¯¯و–‡وœ¬, 'error');
        }
        return;
      }
      const ç»“و‍œ20097 = await ه“چه؛”20098.json();
      وک¾ç¤؛çٹ¶و€پ(ç»“و‍œ20097.message || 'é…چç½®ه·²é‡چç½®', ç»“و‍œ20097.success ? 'success' : 'error');
      if (ç»“و‍œ20097.success) {
        await هٹ è½½ه½“ه‰چé…چç½®();
        // و›´و–°wkهœ°هŒ؛é€‰و‹©çٹ¶و€پ
        و›´و–°ه·¥ن½œه™¨هœ°هŒ؛çٹ¶و€پ();
        // هˆ·و–°é،µé‌¢ن»¥و›´و–°ç³»ç»ںçٹ¶و€پ
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      }
    } catch (é”™è¯¯20096) {
      وک¾ç¤؛çٹ¶و€پ('é‡چç½®ه¤±è´¥: ' + é”™è¯¯20096.message, 'error');
    }
  }
}
async function و£€وں¥هٹ ه¯†é—®ه€™çٹ¶و€پ() {
  const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼ = document.getElementById('echStatus');
  if (!هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼) return;
  try {
    const ه½“ه‰چç½‘ه‌€ = window.location.href;
    const è®¢éک…ç½‘ه‌€ = ه½“ه‰چç½‘ه‌€ + '/sub';
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼.innerHTML = 'ECHçٹ¶و€پ: <span style="color: #FDD663;">و£€وµ‹ن¸­...</span>';
    const ه“چه؛”20095 = await fetch(è®¢éک…ç½‘ه‌€, {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      }
    });
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په¤´éƒ¨ = ه“چه؛”20095.headers.get('X-ECH-Status');
    const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®é•؟ه؛¦ = ه“چه؛”20095.headers.get('X-ECH-Config-Length');
    if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په¤´éƒ¨ === 'ENABLED') {
      هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼.innerHTML = 'ECHçٹ¶و€پ: <span style="color: #81C995;">âœ… ه·²هگ¯ç”¨' + (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®é•؟ه؛¦ ? ' (é…چç½®é•؟ه؛¦: ' + هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®é•؟ه؛¦ + ')' : '') + '</span>';
    } else {
      هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼.innerHTML = 'ECHçٹ¶و€پ: <span style="color: #FDD663;">âڑ ï¸ڈ وœھهگ¯ç”¨</span>';
    }
  } catch (é”™è¯¯20094) {
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™çٹ¶و€په€¼.innerHTML = 'ECHçٹ¶و€پ: <span style="color: #F2B8B5;">â‌Œ و£€وµ‹ه¤±è´¥: ' + é”™è¯¯20094.message + '</span>';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  هˆ›ه»؛çں©éکµé›¨();
  و£€وں¥ç³»ç»ںçٹ¶و€پ();
  و£€وں¥é”®ه€¼çٹ¶و€پ();
  و£€وں¥هٹ ه¯†é—®ه€™çٹ¶و€پ();

  // ECH ه¼€هگ¯و—¶è‡ھهٹ¨èپ”هٹ¨ه¼€هگ¯ن»…TLS
  const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،† = document.getElementById('ech');
  const ç«¯هڈ£وژ§هˆ¶ = document.getElementById('portControl');
  if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،† && ç«¯هڈ£وژ§هˆ¶) {
    هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،†.addEventListener('change', function () {
      if (this.checked) {
        // ECH ه¼€هگ¯و—¶ï¼Œè‡ھهٹ¨è®¾ç½®ن»…TLSن¸؛ yes
        ç«¯هڈ£وژ§هˆ¶.value = 'yes';
      }
      هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ();
    });

    // é،µé‌¢هٹ è½½و—¶ï¼Œه¦‚و‍œ ECH ه·²ه‹¾é€‰ï¼Œن¹ںè‡ھهٹ¨è®¾ç½®ن»…TLS
    if (هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ه¤چé€‰و،†.checked) {
      ç«¯هڈ£وژ§هˆ¶.value = 'yes';
    }
  }

  // ç›‘هگ¬customIPè¾“ه…¥و،†هڈکهŒ–ï¼Œه®‍و—¶و›´و–°wkهœ°هŒ؛é€‰و‹©çٹ¶و€پ
  const è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥ = document.getElementById('customIP');
  if (è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥) {
    è‡ھه®ڑن¹‰هœ°ه‌€è¾“ه…¥.addEventListener('input', function () {
      هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ();
    });
  }

  const è‡ھه®ڑن¹‰è·¯ه¾„è¾“ه…¥ = document.getElementById('customPath');
  if (è‡ھه®ڑن¹‰è·¯ه¾„è¾“ه…¥) {
    è‡ھه®ڑن¹‰è·¯ه¾„è¾“ه…¥.addEventListener('input', function () {
      هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ();
    });
  }

  ['ev', 'et', 'ex'].forEach(function (هچڈè®®و ‡è¯†) {
    const هچڈè®®ه¼€ه…³ = document.getElementById(هچڈè®®و ‡è¯†);
    if (هچڈè®®ه¼€ه…³) {
      هچڈè®®ه¼€ه…³.addEventListener('change', function () {
        هگŒو­¥èپ”هٹ¨ç•Œé‌¢çٹ¶و€پ();
      });
    }
  });

  // éک»و­¢è،¨هچ•é»کè®¤وڈگن؛¤ï¼ˆن؟‌ه­کوŒ‰é’®ه·²ç»ںن¸€هˆ°ه؛•éƒ¨و“چن½œو‌،ï¼‰
  ['regionForm', 'otherConfigForm', 'advancedConfigForm'].forEach(function (وœ¬هœ°ه€¼20093) {
    const è،¨هچ•ه€¼ = document.getElementById(وœ¬هœ°ه€¼20093);
    if (è،¨هچ•ه€¼) è،¨هچ•ه€¼.addEventListener('submit', function (ن؛‹ن»¶ه€¼20092) {
      ن؛‹ن»¶ه€¼20092.preventDefault();
    });
  });

  // هœ¨ن»»و„ڈè¾“ه…¥و،†وŒ‰ن¸‹ه›‍è½¦ï¼Œè§¦هڈ‘ç»ںن¸€ن؟‌ه­ک
  document.querySelectorAll('#configContent input[type="text"], #configContent input[type="number"]').forEach(function (وœ¬هœ°ه€¼20091) {
    وœ¬هœ°ه€¼20091.addEventListener('keydown', function (ن؛‹ن»¶ه€¼20090) {
      if (ن؛‹ن»¶ه€¼20090.key === 'Enter') {
        ن؛‹ن»¶ه€¼20090.preventDefault();
        ن؟‌ه­که…¨éƒ¨é…چç½®();
      }
    });
  });

  // ç»ںن¸€ن؟‌ه­کï¼ڑن¸€و¬،و€§و”¶é½گو‰€وœ‰ه­—و®µ
  function و”¶é›†ه…¨éƒ¨é…چç½®() {
    return و”¶é›†ç•Œé‌¢é…چç½®();
  }
  async function ن؟‌ه­که…¨éƒ¨é…چç½®() {
    // è‡³ه°‘هگ¯ç”¨ن¸€ن¸ھé€ڑéپ“
    const ه€¼ه€¼20085 = document.getElementById('ev'),
      ه€¼ه€¼20084 = document.getElementById('et'),
      ه€¼ه€¼20083 = document.getElementById('ex');
    if (ه€¼ه€¼20085 && ه€¼ه€¼20084 && ه€¼ه€¼20083 && !ه€¼ه€¼20085.checked && !ه€¼ه€¼20084.checked && !ه€¼ه€¼20083.checked) {
      وک¾ç¤؛و“چن½œçٹ¶و€پ('${وک¯هگ¦ه€¼236 ? è§£ç پ64('2K3Yr9in2YLZhCDbjNqpINm+2LHZiNiq2qnZhCDYsdinINmB2LnYp9mEINqp2YbbjNivIQ==') : è§£ç پ64('6Iez5bCR6ZyA6KaB5ZCv55So5LiA5Liq5Y2P6K6u77yB')}', 'err');
      وک¾ç¤؛وڈگç¤؛('${وک¯هگ¦ه€¼236 ? è§£ç پ64('2K3Yr9in2YLZhCDbjNqpINm+2LHZiNiq2qnZhCDYsdinINmB2LnYp9mEINqp2YbbjNivIQ==') : è§£ç پ64('6Iez5bCR6ZyA6KaB5ZCv55So5LiA5Liq5Y2P6K6u77yB')}', 'warn');
      return;
    }
    const وœ¬هœ°ه€¼20082 = document.getElementById('cpBtnSaveAll');
    if (وœ¬هœ°ه€¼20082) {
      وœ¬هœ°ه€¼20082.classList.add('cp-action-btn-saving');
      وœ¬هœ°ه€¼20082.disabled = true;
    }
    try {
      await ن؟‌ه­کé…چç½®(و”¶é›†ه…¨éƒ¨é…چç½®());
    } finally {
      if (وœ¬هœ°ه€¼20082) {
        وœ¬هœ°ه€¼20082.classList.remove('cp-action-btn-saving');
        وœ¬هœ°ه€¼20082.disabled = false;
      }
    }
  }
  window.ن؟‌ه­که…¨éƒ¨é…چç½® = ن؟‌ه­که…¨éƒ¨é…چç½®;
  function وک¾ç¤؛و“چن½œçٹ¶و€پ(و¶ˆوپ¯, ç±»ه‍‹) {
    const وœ¬هœ°ه€¼20081 = document.getElementById('cpActionStatus');
    if (!وœ¬هœ°ه€¼20081) return;
    وœ¬هœ°ه€¼20081.textContent = و¶ˆوپ¯;
    وœ¬هœ°ه€¼20081.classList.toggle('cp-err', ç±»ه‍‹ === 'err');
    وœ¬هœ°ه€¼20081.classList.add('cp-show');
    clearTimeout(وک¾ç¤؛و“چن½œçٹ¶و€پ._t);
    وک¾ç¤؛و“چن½œçٹ¶و€پ._t = setTimeout(function () {
      وœ¬هœ°ه€¼20081.classList.remove('cp-show');
    }, 2400);
  }
  window.وک¾ç¤؛و“چن½œçٹ¶و€پ = وک¾ç¤؛و“چن½œçٹ¶و€پ;

  // ç»‘ه®ڑه؛•éƒ¨ç»ںن¸€و“چن½œو‌،
  const ه€¼و“چن½œه€¼ = document.getElementById('cpActionBar');
  const ه€¼ه€¼ن؟‌ه­که€¼ = document.getElementById('cpBtnSaveAll');
  if (ه€¼ه€¼ن؟‌ه­که€¼) ه€¼ه€¼ن؟‌ه­که€¼.addEventListener('click', async function () {
    ه€¼ه€¼ن؟‌ه­که€¼.classList.add('cp-action-btn-saving');
    try {
      await ن؟‌ه­که…¨éƒ¨é…چç½®();
      if (ه€¼و“چن½œه€¼) ه€¼و“چن½œه€¼.classList.remove('cp-dirty');
    } finally {
      ه€¼ه€¼ن؟‌ه­که€¼.classList.remove('cp-action-btn-saving');
    }
  });
  const ه€¼ه€¼ه€¼20080 = document.getElementById('cpBtnRefresh');
  if (ه€¼ه€¼ه€¼20080) ه€¼ه€¼ه€¼20080.addEventListener('click', async function () {
    ه€¼ه€¼ه€¼20080.classList.add('cp-action-btn-saving');
    try {
      await هٹ è½½ه½“ه‰چé…چç½®();
      if (ه€¼و“چن½œه€¼) ه€¼و“چن½œه€¼.classList.remove('cp-dirty');
      وک¾ç¤؛و“چن½œçٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'طھظ†ط¸غŒظ…ط§طھ طھط§ط²ظ‡â€Œط³ط§ط²غŒ ط´ط¯' : 'é…چç½®ه·²هˆ·و–°'}');
    } finally {
      ه€¼ه€¼ه€¼20080.classList.remove('cp-action-btn-saving');
    }
  });
  const ه€¼ه€¼é‡چç½® = document.getElementById('cpBtnReset');
  if (ه€¼ه€¼é‡چç½®) ه€¼ه€¼é‡چç½®.addEventListener('click', é‡چç½®ه…¨éƒ¨é…چç½®);

  // ن؟®و”¹ه­—و®µو—¶وٹٹ FAB و ‡è®°ن¸؛ "وœھن؟‌ه­ک"
  function و ‡è®°ه·²ن؟®و”¹() {
    if (ه€¼و“چن½œه€¼) ه€¼و“چن½œه€¼.classList.add('cp-dirty');
  }
  const ه·²ن؟®و”¹èŒƒه›´ = document.getElementById('configContent') || document;
  ['input', 'change'].forEach(function (وœ¬هœ°ه€¼20079) {
    ه·²ن؟®و”¹èŒƒه›´.addEventListener(وœ¬هœ°ه€¼20079, function (ن؛‹ن»¶ه€¼20078) {
      const وœ¬هœ°ه€¼20077 = ن؛‹ن»¶ه€¼20078.target;
      if (!وœ¬هœ°ه€¼20077 || !وœ¬هœ°ه€¼20077.tagName) return;
      const وœ¬هœ°ه€¼20076 = وœ¬هœ°ه€¼20077.tagName.toLowerCase();
      if (وœ¬هœ°ه€¼20076 === 'input' || وœ¬هœ°ه€¼20076 === 'select' || وœ¬هœ°ه€¼20076 === 'textarea') {
        // è·³è؟‡ه»¶è؟ںوµ‹è¯•ç›¸ه…³è¾“ه…¥ï¼Œéپ؟ه…چè¯¯è§¦
        if (وœ¬هœ°ه€¼20077.id && /^(latencyTestInput|fetchURLInput|latencyTestPort|randomIPCount|testThreads|ipSourceSelect)$/.test(وœ¬هœ°ه€¼20077.id)) return;
        و ‡è®°ه·²ن؟®و”¹();
      }
    });
  });

  // Ctrl+S / Cmd+S è§¦هڈ‘ن؟‌ه­ک
  window.addEventListener('keydown', function (ن؛‹ن»¶ه€¼20075) {
    if ((ن؛‹ن»¶ه€¼20075.ctrlKey || ن؛‹ن»¶ه€¼20075.metaKey) && (ن؛‹ن»¶ه€¼20075.key === 's' || ن؛‹ن»¶ه€¼20075.key === 'S')) {
      ن؛‹ن»¶ه€¼20075.preventDefault();
      if (ه€¼ه€¼ن؟‌ه­که€¼ && !ه€¼ه€¼ن؟‌ه­که€¼.classList.contains('cp-action-btn-saving')) {
        ه€¼ه€¼ن؟‌ه­که€¼.click();
      }
    }
  });
  let وµ‹è¯•ه€¼وژ§هˆ¶ه™¨ = null;
  let وµ‹è¯•ç»“و‍œهˆ—è،¨ = [];
  const ه¼€ه§‹وµ‹è¯•ه€¼ = document.getElementById('startLatencyTest');
  const ه€¼وµ‹è¯•ه€¼ = document.getElementById('stopLatencyTest');
  const وµ‹è¯•çٹ¶و€پ = document.getElementById('latencyTestStatus');
  const وµ‹è¯•ç»“و‍œهˆ—è،¨ه€¼ = document.getElementById('latencyTestResults');
  const ç»“و‍œهˆ—è،¨هˆ—è،¨ = document.getElementById('latencyResultsList');
  const è¦†ç›–ه·²é€‰ه€¼ = document.getElementById('overwriteSelectedToYx');
  const è؟½هٹ ه·²é€‰ه€¼ = document.getElementById('appendSelectedToYx');
  const é€‰و‹©ه€¼ه€¼ = document.getElementById('selectAllResults');
  const ه€¼ه€¼ه€¼ = document.getElementById('deselectAllResults');
  const هœ°ه‌€و؛گé€‰و‹© = document.getElementById('ipSourceSelect');
  const و‰‹هٹ¨è¾“ه…¥ه€¼ = document.getElementById('manualInputDiv');
  const ç½‘ه‌€èژ·هڈ–ه€¼ = document.getElementById('urlFetchDiv');
  const ه»¶è؟ںوµ‹è¯•è¾“ه…¥ = document.getElementById('latencyTestInput');
  const èژ·هڈ–ç½‘ه‌€è¾“ه…¥ = document.getElementById('fetchURLInput');
  const ه»¶è؟ںوµ‹è¯•ç«¯هڈ£ = document.getElementById('latencyTestPort');
  const éڑڈوœ؛هœ°ه‌€و•°é‡ڈ = document.getElementById('randomIPCount');
  const ن؛‘ه¢™éڑڈوœ؛ه€¼ = document.getElementById('cfRandomDiv');
  const éڑڈوœ؛و•°é‡ڈه€¼ = document.getElementById('randomCountDiv');
  const ç”ںوˆگن؛‘ه¢™هœ°ه‌€ه€¼ = document.getElementById('generateCFIPBtn');
  const èژ·هڈ–هœ°ه‌€ه€¼ = document.getElementById('fetchIPBtn');
  if (ه»¶è؟ںوµ‹è¯•è¾“ه…¥) {
    const ه·²ن؟‌ه­کوµ‹è¯•è¾“ه…¥ = localStorage.getItem('latencyTestInput');
    if (ه·²ن؟‌ه­کوµ‹è¯•è¾“ه…¥) ه»¶è؟ںوµ‹è¯•è¾“ه…¥.value = ه·²ن؟‌ه­کوµ‹è¯•è¾“ه…¥;
    ه»¶è؟ںوµ‹è¯•è¾“ه…¥.addEventListener('input', function () {
      localStorage.setItem('latencyTestInput', this.value);
    });
  }
  if (èژ·هڈ–ç½‘ه‌€è¾“ه…¥) {
    const ه·²ن؟‌ه­کèژ·هڈ–ç½‘ه‌€ = localStorage.getItem('fetchURLInput');
    if (ه·²ن؟‌ه­کèژ·هڈ–ç½‘ه‌€) èژ·هڈ–ç½‘ه‌€è¾“ه…¥.value = ه·²ن؟‌ه­کèژ·هڈ–ç½‘ه‌€;
    èژ·هڈ–ç½‘ه‌€è¾“ه…¥.addEventListener('input', function () {
      localStorage.setItem('fetchURLInput', this.value);
    });
  }
  if (ه»¶è؟ںوµ‹è¯•ç«¯هڈ£) {
    const ه·²ن؟‌ه­کç«¯هڈ£ = localStorage.getItem('latencyTestPort');
    if (ه·²ن؟‌ه­کç«¯هڈ£) ه»¶è؟ںوµ‹è¯•ç«¯هڈ£.value = ه·²ن؟‌ه­کç«¯هڈ£;
    ه»¶è؟ںوµ‹è¯•ç«¯هڈ£.addEventListener('input', function () {
      localStorage.setItem('latencyTestPort', this.value);
    });
  }
  if (éڑڈوœ؛هœ°ه‌€و•°é‡ڈ) {
    const ه·²ن؟‌ه­کو•°é‡ڈ = localStorage.getItem('randomIPCount');
    if (ه·²ن؟‌ه­کو•°é‡ڈ) éڑڈوœ؛هœ°ه‌€و•°é‡ڈ.value = ه·²ن؟‌ه­کو•°é‡ڈ;
    éڑڈوœ؛هœ°ه‌€و•°é‡ڈ.addEventListener('input', function () {
      localStorage.setItem('randomIPCount', this.value);
    });
    // هˆ‌ه§‹هŒ–و—¶ï¼Œه¦‚و‍œé»کè®¤وک¯éڑگè—ڈçڑ„ï¼Œهˆ™ç¦پç”¨è¾“ه…¥و،†
    if (éڑڈوœ؛و•°é‡ڈه€¼ && éڑڈوœ؛و•°é‡ڈه€¼.style.display === 'none') {
      éڑڈوœ؛هœ°ه‌€و•°é‡ڈ.disabled = true;
    }
  }
  const وµ‹è¯•ç؛؟ç¨‹و•°è¾“ه…¥ = document.getElementById('testThreads');
  if (وµ‹è¯•ç؛؟ç¨‹و•°è¾“ه…¥) {
    const ه·²ن؟‌ه­کç؛؟ç¨‹و•° = localStorage.getItem('testThreads');
    if (ه·²ن؟‌ه­کç؛؟ç¨‹و•°) وµ‹è¯•ç؛؟ç¨‹و•°è¾“ه…¥.value = ه·²ن؟‌ه­کç؛؟ç¨‹و•°;
    وµ‹è¯•ç؛؟ç¨‹و•°è¾“ه…¥.addEventListener('input', function () {
      localStorage.setItem('testThreads', this.value);
    });
  }
  if (هœ°ه‌€و؛گé€‰و‹©) {
    const ه·²ن؟‌ه­کو؛گ = localStorage.getItem('ipSourceSelect');
    const ه½“ه‰چو؛گ = ه·²ن؟‌ه­کو؛گ || هœ°ه‌€و؛گé€‰و‹©.value || 'manual';
    if (ه·²ن؟‌ه­کو؛گ) {
      هœ°ه‌€و؛گé€‰و‹©.value = ه·²ن؟‌ه­کو؛گ;
    }
    و‰‹هٹ¨è¾“ه…¥ه€¼.style.display = ه½“ه‰چو؛گ === 'manual' ? 'block' : 'none';
    ç½‘ه‌€èژ·هڈ–ه€¼.style.display = ه½“ه‰چو؛گ === 'urlFetch' ? 'block' : 'none';
    ن؛‘ه¢™éڑڈوœ؛ه€¼.style.display = ه½“ه‰چو؛گ === 'cfRandom' ? 'block' : 'none';
    éڑڈوœ؛و•°é‡ڈه€¼.style.display = ه½“ه‰چو؛گ === 'cfRandom' ? 'block' : 'none';
    // ه½“éڑگè—ڈو—¶ç¦پç”¨è¾“ه…¥و،†ï¼Œéپ؟ه…چè،¨هچ•éھŒè¯پé”™è¯¯
    if (éڑڈوœ؛هœ°ه‌€و•°é‡ڈ) {
      éڑڈوœ؛هœ°ه‌€و•°é‡ڈ.disabled = ه½“ه‰چو؛گ !== 'cfRandom';
    }
  }
  const ن؛‘ه¢™ç½‘و®µهˆ—è،¨ = ['173.245.48.0/20', '103.21.244.0/22', '103.22.200.0/22', '103.31.4.0/22', '141.101.64.0/18', '108.162.192.0/18', '190.93.240.0/20', '188.114.96.0/20', '197.234.240.0/22', '198.41.128.0/17', '162.158.0.0/15', '104.16.0.0/13', '104.24.0.0/14', '172.64.0.0/13', '131.0.72.0/22'];
  function ن»ژç½‘و®µç”ںوˆگéڑڈوœ؛هœ°ه‌€(ç½‘و®µ20074) {
    const [هں؛ç،€هœ°ه‌€, ه‰چç¼€é•؟ه؛¦] = ç½‘و®µ20074.split('/');
    const ه‰چç¼€ = parseInt(ه‰چç¼€é•؟ه؛¦);
    const ن¸»وœ؛ه€¼ = 32 - ه‰چç¼€;
    const هœ°ه‌€éƒ¨هˆ†هˆ—è،¨ = هں؛ç،€هœ°ه‌€.split('.').map(هڈ‚و•°ه€¼20073 => parseInt(هڈ‚و•°ه€¼20073));
    const هœ°ه‌€ه€¼ = هœ°ه‌€éƒ¨هˆ†هˆ—è،¨[0] << 24 | هœ°ه‌€éƒ¨هˆ†هˆ—è،¨[1] << 16 | هœ°ه‌€éƒ¨هˆ†هˆ—è،¨[2] << 8 | هœ°ه‌€éƒ¨هˆ†هˆ—è،¨[3];
    const éڑڈوœ؛هپڈç§» = Math.floor(Math.random() * Math.pow(2, ن¸»وœ؛ه€¼));
    const وژ©ç پ = 0xFFFFFFFF << ن¸»وœ؛ه€¼ >>> 0;
    const éڑڈوœ؛هœ°ه‌€ = ((هœ°ه‌€ه€¼ & وژ©ç پ) >>> 0) + éڑڈوœ؛هپڈç§» >>> 0;
    return [éڑڈوœ؛هœ°ه‌€ >>> 24 & 0xFF, éڑڈوœ؛هœ°ه‌€ >>> 16 & 0xFF, éڑڈوœ؛هœ°ه‌€ >>> 8 & 0xFF, éڑڈوœ؛هœ°ه‌€ & 0xFF].join('.');
  }
  function ç”ںوˆگن؛‘ه¢™éڑڈوœ؛هœ°ه‌€(و•°é‡ڈ20072, ç«¯هڈ£20071) {
    const هœ°ه‌€هˆ—è،¨20070 = [];
    for (let ç´¢ه¼•ه€¼20069 = 0; ç´¢ه¼•ه€¼20069 < و•°é‡ڈ20072; ç´¢ه¼•ه€¼20069++) {
      const ç½‘و®µ = ن؛‘ه¢™ç½‘و®µهˆ—è،¨[Math.floor(Math.random() * ن؛‘ه¢™ç½‘و®µهˆ—è،¨.length)];
      const هœ°ه‌€20068 = ن»ژç½‘و®µç”ںوˆگéڑڈوœ؛هœ°ه‌€(ç½‘و®µ);
      هœ°ه‌€هˆ—è،¨20070.push(هœ°ه‌€20068 + ':' + ç«¯هڈ£20071);
    }
    return هœ°ه‌€هˆ—è،¨20070;
  }
  if (هœ°ه‌€و؛گé€‰و‹©) {
    هœ°ه‌€و؛گé€‰و‹©.addEventListener('change', function () {
      const ه€¼ = this.value;
      localStorage.setItem('ipSourceSelect', ه€¼);
      و‰‹هٹ¨è¾“ه…¥ه€¼.style.display = ه€¼ === 'manual' ? 'block' : 'none';
      ç½‘ه‌€èژ·هڈ–ه€¼.style.display = ه€¼ === 'urlFetch' ? 'block' : 'none';
      ن؛‘ه¢™éڑڈوœ؛ه€¼.style.display = ه€¼ === 'cfRandom' ? 'block' : 'none';
      éڑڈوœ؛و•°é‡ڈه€¼.style.display = ه€¼ === 'cfRandom' ? 'block' : 'none';
      // ه½“éڑگè—ڈو—¶ç¦پç”¨è¾“ه…¥و،†ï¼Œéپ؟ه…چè،¨هچ•éھŒè¯پé”™è¯¯
      if (éڑڈوœ؛هœ°ه‌€و•°é‡ڈ) {
        éڑڈوœ؛هœ°ه‌€و•°é‡ڈ.disabled = ه€¼ !== 'cfRandom';
      }
    });
  }
  if (ç”ںوˆگن؛‘ه¢™هœ°ه‌€ه€¼) {
    ç”ںوˆگن؛‘ه¢™هœ°ه‌€ه€¼.addEventListener('click', function () {
      const و•°é‡ڈ = parseInt(document.getElementById('randomIPCount').value) || 20;
      const ç«¯هڈ£20067 = document.getElementById('latencyTestPort').value || '443';
      const هœ°ه‌€هˆ—è،¨ = ç”ںوˆگن؛‘ه¢™éڑڈوœ؛هœ°ه‌€(و•°é‡ڈ, ç«¯هڈ£20067);
      document.getElementById('latencyTestInput').value = هœ°ه‌€هˆ—è،¨.join(',');
      و‰‹هٹ¨è¾“ه…¥ه€¼.style.display = 'block';
      وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'طھظˆظ„غŒط¯ ط´ط¯' : 'ه·²ç”ںوˆگ'} ' + و•°é‡ڈ + ' ${وک¯هگ¦ه€¼236 ? 'IP طھطµط§ط¯ظپغŒ CF' : 'ن¸ھCFéڑڈوœ؛IP'}', 'success');
    });
  }
  if (èژ·هڈ–هœ°ه‌€ه€¼) {
    èژ·هڈ–هœ°ه‌€ه€¼.addEventListener('click', async function () {
      const ç½‘ه‌€è¾“ه…¥ = document.getElementById('fetchURLInput');
      const èژ·هڈ–ç½‘ه‌€ = ç½‘ه‌€è¾“ه…¥.value.trim();
      if (!èژ·هڈ–ç½‘ه‌€) {
        وک¾ç¤؛وڈگç¤؛('${وک¯هگ¦ه€¼236 ? 'ظ„ط·ظپط§ URL ط±ط§ ظˆط§ط±ط¯ ع©ظ†غŒط¯' : 'è¯·è¾“ه…¥URL'}', 'warn');
        return;
      }
      èژ·هڈ–هœ°ه‌€ه€¼.disabled = true;
      èژ·هڈ–هœ°ه‌€ه€¼.textContent = '${وک¯هگ¦ه€¼236 ? 'ط¯ط± ط­ط§ظ„ ط¯ط±غŒط§ظپطھ...' : 'èژ·هڈ–ن¸­...'}';
      try {
        // و”¯وŒپه¤ڑن¸ھ URLï¼ˆé€—هڈ·هˆ†éڑ”ï¼‰ن»¥هڈٹè؟”ه›‍ه†…ه®¹ن¸­é€—هڈ·هˆ†éڑ”çڑ„ه¤ڑن¸ھ IP/èٹ‚ç‚¹
        const ç½‘ه‌€هˆ—è،¨ = Array.from(new Set(èژ·هڈ–ç½‘ه‌€.split(',').map(ç½‘ه‌€ه€¼20066 => ç½‘ه‌€ه€¼20066.trim()).filter(ç½‘ه‌€ه€¼20065 => ç½‘ه‌€ه€¼20065)));
        const ه€¼é،¹ç›®هˆ—è،¨ = [];
        for (const ç½‘ه‌€ه€¼ of ç½‘ه‌€هˆ—è،¨) {
          const ه“چه؛” = await fetch(ç½‘ه‌€ه€¼);
          if (!ه“چه؛”.ok) {
            throw new Error('HTTP ' + ه“چه؛”.status + ' @ ' + ç½‘ه‌€ه€¼);
          }
          const و–‡وœ¬20064 = await ه“چه؛”.text();

          // ه…ˆوŒ‰è،Œهˆ†ه‰²ï¼Œه†چهœ¨و¯ڈè،Œه†…وŒ‰é€—هڈ·هˆ†ه‰²ï¼Œه…¼ه®¹â€œه¤ڑè،Œ + é€—هڈ·هˆ†éڑ”â€‌ن¸¤ç§چو ¼ه¼ڈ
          const ه€¼ç½‘ه‌€é،¹ç›®هˆ—è،¨ = و–‡وœ¬20064.split(/\\r?\\n/).map(è،Œه€¼20063 => è،Œه€¼20063.trim()).filter(è،Œه€¼20062 => è،Œه€¼20062 && !è،Œه€¼20062.startsWith('#')).flatMap(è،Œه€¼ => è،Œه€¼.split(',').map(هڈ‚و•°ه€¼20061 => هڈ‚و•°ه€¼20061.trim()).filter(هڈ‚و•°ه€¼ => هڈ‚و•°ه€¼));
          ه€¼é،¹ç›®هˆ—è،¨.push(...ه€¼ç½‘ه‌€é،¹ç›®هˆ—è،¨);
        }
        if (ه€¼é،¹ç›®هˆ—è،¨.length > 0) {
          document.getElementById('latencyTestInput').value = ه€¼é،¹ç›®هˆ—è،¨.join(',');
          و‰‹هٹ¨è¾“ه…¥ه€¼.style.display = 'block';
          وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ط¯ط±غŒط§ظپطھ ط´ط¯' : 'ه·²èژ·هڈ–'} ' + ه€¼é،¹ç›®هˆ—è،¨.length + ' ${وک¯هگ¦ه€¼236 ? 'IP' : 'ن¸ھIP'}', 'success');
        } else {
          وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ط¯ط§ط¯ظ‡â€Œط§غŒ غŒط§ظپطھ ظ†ط´ط¯' : 'وœھèژ·هڈ–هˆ°و•°وچ®'}', 'error');
        }
      } catch (é”™è¯¯20060) {
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ط®ط·ط§ ط¯ط± ط¯ط±غŒط§ظپطھ' : 'èژ·هڈ–ه¤±è´¥'}: ' + é”™è¯¯20060.message, 'error');
      } finally {
        èژ·هڈ–هœ°ه‌€ه€¼.disabled = false;
        èژ·هڈ–هœ°ه‌€ه€¼.textContent = 'â¬‡ ${وک¯هگ¦ه€¼236 ? 'ط¯ط±غŒط§ظپطھ IP' : 'èژ·هڈ–IP'}';
      }
    });
  }
  if (ه¼€ه§‹وµ‹è¯•ه€¼) {
    ه¼€ه§‹وµ‹è¯•ه€¼.addEventListener('click', async function () {
      const è¾“ه…¥ه€¼20059 = document.getElementById('latencyTestInput');
      const ç«¯هڈ£ه€¼ = document.getElementById('latencyTestPort');
      const ç؛؟ç¨‹و•°ه€¼ = document.getElementById('testThreads');
      const è¾“ه…¥ه€¼ = è¾“ه…¥ه€¼20059.value.trim();
      const é»کè®¤ç«¯هڈ£ = ç«¯هڈ£ه€¼.value || '443';
      const ç؛؟ç¨‹و•° = parseInt(ç؛؟ç¨‹و•°ه€¼.value) || 5;
      if (!è¾“ه…¥ه€¼) {
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ظ„ط·ظپط§ IP غŒط§ ط¯ط§ظ…ظ†ظ‡ ظˆط§ط±ط¯ ع©ظ†غŒط¯' : 'è¯·è¾“ه…¥IPوˆ–هںںهگچ'}', 'error');
        return;
      }
      const وœ¬هœ°ه€¼20058 = è¾“ه…¥ه€¼.split(',').map(ç؟»è¯‘ه€¼20057 => ç؟»è¯‘ه€¼20057.trim()).filter(ç؟»è¯‘ه€¼20056 => ç؟»è¯‘ه€¼20056);
      if (وœ¬هœ°ه€¼20058.length === 0) return;
      ه¼€ه§‹وµ‹è¯•ه€¼.style.display = 'none';
      ه€¼وµ‹è¯•ه€¼.style.display = 'inline-block';
      وµ‹è¯•çٹ¶و€پ.style.display = 'block';
      وµ‹è¯•ç»“و‍œهˆ—è،¨ه€¼.style.display = 'block';
      ç»“و‍œهˆ—è،¨هˆ—è،¨.innerHTML = '';
      وµ‹è¯•ç»“و‍œهˆ—è،¨ = [];
      if (هںژه¸‚ç­›é€‰ه€¼) {
        هںژه¸‚ç­›é€‰ه€¼.style.display = 'none';
      }
      وµ‹è¯•ه€¼وژ§هˆ¶ه™¨ = new AbortController();
      let وœ¬هœ°ه€¼20055 = 0;
      const وœ¬هœ°ه€¼20054 = وœ¬هœ°ه€¼20058.length;
      function è§£و‍گç›®و ‡(ç›®و ‡20053) {
        let ن¸»وœ؛20052 = ç›®و ‡20053;
        let ç«¯هڈ£20051 = é»کè®¤ç«¯هڈ£;
        let èٹ‚ç‚¹هگچç§°20050 = '';
        if (ç›®و ‡20053.includes('#')) {
          const éƒ¨هˆ†هˆ—è،¨20049 = ç›®و ‡20053.split('#');
          èٹ‚ç‚¹هگچç§°20050 = éƒ¨هˆ†هˆ—è،¨20049[1] || '';
          ن¸»وœ؛20052 = éƒ¨هˆ†هˆ—è،¨20049[0];
        }
        if (ن¸»وœ؛20052.includes(':') && !ن¸»وœ؛20052.startsWith('[')) {
          const ه€¼ه€¼20048 = ن¸»وœ؛20052.lastIndexOf(':');
          const ه€¼ç«¯هڈ£ = ن¸»وœ؛20052.substring(ه€¼ه€¼20048 + 1);
          if (/^[0-9]+$/.test(ه€¼ç«¯هڈ£)) {
            ç«¯هڈ£20051 = ه€¼ç«¯هڈ£;
            ن¸»وœ؛20052 = ن¸»وœ؛20052.substring(0, ه€¼ه€¼20048);
          }
        } else if (ن¸»وœ؛20052.includes(']:')) {
          const éƒ¨هˆ†هˆ—è،¨20047 = ن¸»وœ؛20052.split(']:');
          ن¸»وœ؛20052 = éƒ¨هˆ†هˆ—è،¨20047[0] + ']';
          ç«¯هڈ£20051 = éƒ¨هˆ†هˆ—è،¨20047[1];
        }
        return {
          host: ن¸»وœ؛20052,
          port: ç«¯هڈ£20051,
          nodeName: èٹ‚ç‚¹هگچç§°20050
        };
      }
      function و¸²وں“ç»“و‍œ(ç»“و‍œ20046, ç´¢ه¼•20045, ه€¼ه€¼20044 = true) {
        // هڈھه±•ç¤؛هœ¨ç؛؟ن¼کé€‰وˆگهٹںçڑ„ç»“و‍œï¼Œه¤±è´¥/è¶…و—¶çڑ„ن¸چه†چوک¾ç¤؛
        if (!ç»“و‍œ20046.success) {
          return null;
        }
        const ç»“و‍œé،¹ç›® = document.createElement('div');
        ç»“و‍œé،¹ç›®.style.cssText = 'display: flex; align-items: center; padding: 8px; border-bottom: 1px solid #003300; gap: 10px;';
        ç»“و‍œé،¹ç›®.dataset.index = ç´¢ه¼•20045;
        ç»“و‍œé،¹ç›®.dataset.colo = ç»“و‍œ20046.colo || '';
        if (!ه€¼ه€¼20044) {
          ç»“و‍œé،¹ç›®.style.display = 'none';
        }
        const ه¤چé€‰و،†20043 = document.createElement('input');
        ه¤چé€‰و،†20043.type = 'checkbox';
        ه¤چé€‰و،†20043.checked = true;
        ه¤چé€‰و،†20043.disabled = false;
        ه¤چé€‰و،†20043.dataset.index = ç´¢ه¼•20045;
        ه¤چé€‰و،†20043.style.cssText = 'width: 18px; height: 18px; cursor: pointer;';
        const وœ¬هœ°ه€¼20042 = document.createElement('div');
        وœ¬هœ°ه€¼20042.style.cssText = 'flex: 1; font-family: monospace; font-size: 13px;';
        const وœ؛وˆ؟هگچç§°20041 = ç»“و‍œ20046.colo ? èژ·هڈ–وœ؛وˆ؟هگچç§°(ç»“و‍œ20046.colo) : '';
        const وœ؛وˆ؟وک¾ç¤؛ = وœ؛وˆ؟هگچç§°20041 ? ' <span style="color: #00aaff;">[' + وœ؛وˆ؟هگچç§°20041 + ']</span>' : '';
        وœ¬هœ°ه€¼20042.innerHTML = '<span style="color: #D0BCFF;">' + ç»“و‍œ20046.host + ':' + ç»“و‍œ20046.port + '</span>' + وœ؛وˆ؟وک¾ç¤؛ + ' <span style="color: #ffff00;">' + ç»“و‍œ20046.latency + 'ms</span>';
        ç»“و‍œé،¹ç›®.appendChild(ه¤چé€‰و،†20043);
        ç»“و‍œé،¹ç›®.appendChild(وœ¬هœ°ه€¼20042);
        ç»“و‍œهˆ—è،¨هˆ—è،¨.appendChild(ç»“و‍œé،¹ç›®);
        return ç»“و‍œé،¹ç›®;
      }
      async function وµ‹è¯•هچ•é،¹(ç›®و ‡) {
        if (وµ‹è¯•ه€¼وژ§هˆ¶ه™¨.signal.aborted) return null;
        const {
          host: ن¸»وœ؛20040,
          port: ç«¯هڈ£20039,
          nodeName: èٹ‚ç‚¹هگچç§°
        } = è§£و‍گç›®و ‡(ç›®و ‡);
        const ç»“و‍œ20038 = await وµ‹è¯•ه»¶è؟ں(ن¸»وœ؛20040, ç«¯هڈ£20039, وµ‹è¯•ه€¼وژ§هˆ¶ه™¨.signal);
        ç»“و‍œ20038.host = ن¸»وœ؛20040;
        ç»“و‍œ20038.port = ç«¯هڈ£20039;
        ç»“و‍œ20038.nodeName = ç»“و‍œ20038.success && ç»“و‍œ20038.colo ? èٹ‚ç‚¹هگچç§° || 'CF-' + ç»“و‍œ20038.colo : èٹ‚ç‚¹هگچç§° || ن¸»وœ؛20040;
        return ç»“و‍œ20038;
      }
      for (let ç´¢ه¼•ه€¼20037 = 0; ç´¢ه¼•ه€¼20037 < وœ¬هœ°ه€¼20054; ç´¢ه¼•ه€¼20037 += ç؛؟ç¨‹و•°) {
        if (وµ‹è¯•ه€¼وژ§هˆ¶ه™¨.signal.aborted) break;
        const وœ¬هœ°ه€¼20036 = وœ¬هœ°ه€¼20058.slice(ç´¢ه¼•ه€¼20037, Math.min(ç´¢ه¼•ه€¼20037 + ç؛؟ç¨‹و•°, وœ¬هœ°ه€¼20054));
        وµ‹è¯•çٹ¶و€پ.textContent = '${وک¯هگ¦ه€¼236 ? 'ط¯ط± ط­ط§ظ„ طھط³طھ' : 'وµ‹è¯•ن¸­'}: ' + (ç´¢ه¼•ه€¼20037 + 1) + '-' + Math.min(ç´¢ه¼•ه€¼20037 + ç؛؟ç¨‹و•°, وœ¬هœ°ه€¼20054) + '/' + وœ¬هœ°ه€¼20054 + ' (${وک¯هگ¦ه€¼236 ? 'ط±ط´طھظ‡â€Œظ‡ط§' : 'ç؛؟ç¨‹'}: ' + ç؛؟ç¨‹و•° + ')';
        const ç»“و‍œهˆ—è،¨ = await Promise.all(وœ¬هœ°ه€¼20036.map(ç؟»è¯‘ه€¼ => وµ‹è¯•هچ•é،¹(ç؟»è¯‘ه€¼)));
        for (const ç»“و‍œ20035 of ç»“و‍œهˆ—è،¨) {
          if (ç»“و‍œ20035) {
            const ç´¢ه¼•20034 = وµ‹è¯•ç»“و‍œهˆ—è،¨.length;
            وµ‹è¯•ç»“و‍œهˆ—è،¨.push(ç»“و‍œ20035);
            و¸²وں“ç»“و‍œ(ç»“و‍œ20035, ç´¢ه¼•20034);
            وœ¬هœ°ه€¼20055++;
          }
        }
      }
      وµ‹è¯•çٹ¶و€پ.textContent = '${وک¯هگ¦ه€¼236 ? 'طھط³طھ ع©ط§ظ…ظ„ ط´ط¯' : 'وµ‹è¯•ه®Œوˆگ'}: ' + وœ¬هœ°ه€¼20055 + '/' + وœ¬هœ°ه€¼20054;
      ه¼€ه§‹وµ‹è¯•ه€¼.style.display = 'inline-block';
      ه€¼وµ‹è¯•ه€¼.style.display = 'none';

      // و›´و–°هںژه¸‚é€‰و‹©ه™¨
      و›´و–°هںژه¸‚ç­›é€‰();
    });
  }
  if (ه€¼وµ‹è¯•ه€¼) {
    ه€¼وµ‹è¯•ه€¼.addEventListener('click', function () {
      if (وµ‹è¯•ه€¼وژ§هˆ¶ه™¨) {
        وµ‹è¯•ه€¼وژ§هˆ¶ه™¨.abort();
      }
      ه¼€ه§‹وµ‹è¯•ه€¼.style.display = 'inline-block';
      ه€¼وµ‹è¯•ه€¼.style.display = 'none';
      وµ‹è¯•çٹ¶و€پ.textContent = '${وک¯هگ¦ه€¼236 ? 'طھط³طھ ظ…طھظˆظ‚ظپ ط´ط¯' : 'وµ‹è¯•ه·²هپœو­¢'}';
    });
  }
  if (é€‰و‹©ه€¼ه€¼) {
    é€‰و‹©ه€¼ه€¼.addEventListener('click', function () {
      const وœ¬هœ°ه€¼20033 = ç»“و‍œهˆ—è،¨هˆ—è،¨.querySelectorAll('input[type="checkbox"]:not(:disabled)');
      وœ¬هœ°ه€¼20033.forEach(وœ¬هœ°ه€¼20032 => وœ¬هœ°ه€¼20032.checked = true);
    });
  }
  if (ه€¼ه€¼ه€¼) {
    ه€¼ه€¼ه€¼.addEventListener('click', function () {
      const وœ¬هœ°ه€¼20031 = ç»“و‍œهˆ—è،¨هˆ—è،¨.querySelectorAll('input[type="checkbox"]');
      وœ¬هœ°ه€¼20031.forEach(وœ¬هœ°ه€¼20030 => وœ¬هœ°ه€¼20030.checked = false);
    });
  }

  // èژ·هڈ–é€‰ن¸­é،¹çڑ„é€ڑç”¨ه‡½و•°
  function èژ·هڈ–ه·²é€‰é،¹ç›®() {
    const وœ¬هœ°ه€¼20029 = ç»“و‍œهˆ—è،¨هˆ—è،¨.querySelectorAll('input[type="checkbox"]:checked');
    if (وœ¬هœ°ه€¼20029.length === 0) {
      وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ظ„ط·ظپط§ ط­ط¯ط§ظ‚ظ„ غŒع© ظ…ظˆط±ط¯ ط§ظ†طھط®ط§ط¨ ع©ظ†غŒط¯' : 'è¯·è‡³ه°‘é€‰و‹©ن¸€é،¹'}', 'error');
      return null;
    }
    const ه·²é€‰é،¹ç›®هˆ—è،¨20028 = [];
    وœ¬هœ°ه€¼20029.forEach(وœ¬هœ°ه€¼20027 => {
      const ç´¢ه¼•20026 = parseInt(وœ¬هœ°ه€¼20027.dataset.index);
      const ç»“و‍œ20025 = وµ‹è¯•ç»“و‍œهˆ—è،¨[ç´¢ه¼•20026];
      if (ç»“و‍œ20025 && ç»“و‍œ20025.success) {
        const وœ؛وˆ؟هگچç§° = ç»“و‍œ20025.colo ? èژ·هڈ–وœ؛وˆ؟هگچç§°(ç»“و‍œ20025.colo) : ç»“و‍œ20025.nodeName;
        const é،¹ç›®ه­—ç¬¦ن¸² = ç»“و‍œ20025.host + ':' + ç»“و‍œ20025.port + '#' + وœ؛وˆ؟هگچç§°;
        ه·²é€‰é،¹ç›®هˆ—è،¨20028.push(é،¹ç›®ه­—ç¬¦ن¸²);
      }
    });
    return ه·²é€‰é،¹ç›®هˆ—è،¨20028;
  }

  // è¦†ç›–و·»هٹ 
  if (è¦†ç›–ه·²é€‰ه€¼) {
    è¦†ç›–ه·²é€‰ه€¼.addEventListener('click', async function () {
      const ه·²é€‰é،¹ç›®هˆ—è،¨20024 = èژ·هڈ–ه·²é€‰é،¹ç›®();
      if (!ه·²é€‰é،¹ç›®هˆ—è،¨20024 || ه·²é€‰é،¹ç›®هˆ—è،¨20024.length === 0) return;
      const ه€¼è¾“ه…¥20023 = document.getElementById('yx');
      const و–°ه€¼20022 = ه·²é€‰é،¹ç›®هˆ—è،¨20024.join(',');
      ه€¼è¾“ه…¥20023.value = و–°ه€¼20022;
      è¦†ç›–ه·²é€‰ه€¼.disabled = true;
      è؟½هٹ ه·²é€‰ه€¼.disabled = true;
      è¦†ç›–ه·²é€‰ه€¼.textContent = '${وک¯هگ¦ه€¼236 ? 'ط¯ط± ط­ط§ظ„ ط°ط®غŒط±ظ‡...' : 'ن؟‌ه­کن¸­...'}';
      try {
        const é…چç½®و•°وچ®20021 = {
          customIP: document.getElementById('customIP').value,
          yx: و–°ه€¼20022,
          yxURL: document.getElementById('yxURL').value,
          s: document.getElementById('socksConfig').value
        };
        await ن؟‌ه­کé…چç½®(é…چç½®و•°وچ®20021);
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ظ…ظˆظپظ‚غŒطھâ€Œط¢ظ…غŒط² ط¨ظˆط¯' : 'ه·²è¦†ç›–'} ' + ه·²é€‰é،¹ç›®هˆ—è،¨20024.length + ' ${وک¯هگ¦ه€¼236 ? 'ظ…ظˆط±ط¯ ظˆ ط°ط®غŒط±ظ‡ ط´ط¯' : 'é،¹ه¹¶ه·²ن؟‌ه­ک'}', 'success');
      } catch (é”™è¯¯20020) {
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ط®ط·ط§ ط¯ط± ط°ط®غŒط±ظ‡' : 'ن؟‌ه­که¤±è´¥'}: ' + é”™è¯¯20020.message, 'error');
      } finally {
        è¦†ç›–ه·²é€‰ه€¼.disabled = false;
        è؟½هٹ ه·²é€‰ه€¼.disabled = false;
        è¦†ç›–ه·²é€‰ه€¼.textContent = '${وک¯هگ¦ه€¼236 ? 'è¦†ç›–و·»هٹ ' : 'è¦†ç›–و·»هٹ '}';
      }
    });
  }

  // è؟½هٹ و·»هٹ 
  if (è؟½هٹ ه·²é€‰ه€¼) {
    è؟½هٹ ه·²é€‰ه€¼.addEventListener('click', async function () {
      const ه·²é€‰é،¹ç›®هˆ—è،¨ = èژ·هڈ–ه·²é€‰é،¹ç›®();
      if (!ه·²é€‰é،¹ç›®هˆ—è،¨ || ه·²é€‰é،¹ç›®هˆ—è،¨.length === 0) return;
      const ه€¼è¾“ه…¥ = document.getElementById('yx');
      const ه½“ه‰چه€¼ = ه€¼è¾“ه…¥.value.trim();
      const و–°é،¹ç›®هˆ—è،¨ = ه·²é€‰é،¹ç›®هˆ—è،¨.join(',');
      const و–°ه€¼ = ه½“ه‰چه€¼ ? ه½“ه‰چه€¼ + ',' + و–°é،¹ç›®هˆ—è،¨ : و–°é،¹ç›®هˆ—è،¨;
      ه€¼è¾“ه…¥.value = و–°ه€¼;
      è¦†ç›–ه·²é€‰ه€¼.disabled = true;
      è؟½هٹ ه·²é€‰ه€¼.disabled = true;
      è؟½هٹ ه·²é€‰ه€¼.textContent = '${وک¯هگ¦ه€¼236 ? 'ط¯ط± ط­ط§ظ„ ط°ط®غŒط±ظ‡...' : 'ن؟‌ه­کن¸­...'}';
      try {
        const é…چç½®و•°وچ® = {
          customIP: document.getElementById('customIP').value,
          yx: و–°ه€¼,
          yxURL: document.getElementById('yxURL').value,
          s: document.getElementById('socksConfig').value
        };
        await ن؟‌ه­کé…چç½®(é…چç½®و•°وچ®);
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ظ…ظˆظپظ‚غŒطھâ€Œط¢ظ…غŒط² ط¨ظˆط¯' : 'ه·²è؟½هٹ '} ' + ه·²é€‰é،¹ç›®هˆ—è،¨.length + ' ${وک¯هگ¦ه€¼236 ? 'ظ…ظˆط±ط¯ ظˆ ط°ط®غŒط±ظ‡ ط´ط¯' : 'é،¹ه¹¶ه·²ن؟‌ه­ک'}', 'success');
      } catch (é”™è¯¯20019) {
        وک¾ç¤؛çٹ¶و€پ('${وک¯هگ¦ه€¼236 ? 'ط®ط·ط§ ط¯ط± ط°ط®غŒط±ظ‡' : 'ن؟‌ه­که¤±è´¥'}: ' + é”™è¯¯20019.message, 'error');
      } finally {
        è¦†ç›–ه·²é€‰ه€¼.disabled = false;
        è؟½هٹ ه·²é€‰ه€¼.disabled = false;
        è؟½هٹ ه·²é€‰ه€¼.textContent = '${وک¯هگ¦ه€¼236 ? 'è؟½هٹ و·»هٹ ' : 'è؟½هٹ و·»هٹ '}';
      }
    });
  }
  function هœ°ه‌€è½¬هچپه…­è؟›هˆ¶(هœ°ه‌€) {
    const éƒ¨هˆ†هˆ—è،¨ = هœ°ه‌€.split('.');
    if (éƒ¨هˆ†هˆ—è،¨.length !== 4) return null;
    let هچپه…­è؟›هˆ¶ = '';
    for (let ç´¢ه¼•ه€¼ = 0; ç´¢ه¼•ه€¼ < 4; ç´¢ه¼•ه€¼++) {
      const و•°ه­— = parseInt(éƒ¨هˆ†هˆ—è،¨[ç´¢ه¼•ه€¼]);
      if (isNaN(و•°ه­—) || و•°ه­— < 0 || و•°ه­— > 255) return null;
      هچپه…­è؟›هˆ¶ += و•°ه­—.toString(16).padStart(2, '0');
    }
    return هچپه…­è؟›هˆ¶;
  }
  const وœ؛وˆ؟وک ه°„ = {
    'SJC': 'ًں‡؛ًں‡¸ هœ£ن½•ه،‍',
    'LAX': 'ًں‡؛ًں‡¸ و´›و‌‰çں¶',
    'SEA': 'ًں‡؛ًں‡¸ è¥؟é›…ه›¾',
    'SFO': 'ًں‡؛ًں‡¸ و—§é‡‘ه±±',
    'DFW': 'ًں‡؛ًں‡¸ è¾¾و‹‰و–¯',
    'ORD': 'ًں‡؛ًں‡¸ èٹ‌هٹ ه“¥',
    'IAD': 'ًں‡؛ًں‡¸ هچژç››é،؟',
    'ATL': 'ًں‡؛ًں‡¸ ن؛ڑç‰¹ه…°ه¤§',
    'MIA': 'ًں‡؛ًں‡¸ è؟ˆéک؟ه¯†',
    'DEN': 'ًں‡؛ًں‡¸ ن¸¹ن½›',
    'PHX': 'ًں‡؛ًں‡¸ ه‡¤ه‡°هںژ',
    'BOS': 'ًں‡؛ًں‡¸ و³¢ه£«é،؟',
    'EWR': 'ًں‡؛ًں‡¸ ç؛½ç“¦ه…‹',
    'JFK': 'ًں‡؛ًں‡¸ ç؛½ç؛¦',
    'LAS': 'ًں‡؛ًں‡¸ و‹‰و–¯ç»´هٹ و–¯',
    'MSP': 'ًں‡؛ًں‡¸ وکژه°¼éک؟و³¢هˆ©و–¯',
    'DTW': 'ًں‡؛ًں‡¸ ه؛•ç‰¹ه¾‹',
    'PHL': 'ًں‡؛ًں‡¸ è´¹هںژ',
    'CLT': 'ًں‡؛ًں‡¸ ه¤ڈو´›ç‰¹',
    'SLC': 'ًں‡؛ًں‡¸ ç›گو¹–هںژ',
    'PDX': 'ًں‡؛ًں‡¸ و³¢ç‰¹ه…°',
    'SAN': 'ًں‡؛ًں‡¸ هœ£هœ°ن؛ڑه“¥',
    'TPA': 'ًں‡؛ًں‡¸ ه‌¦ه¸•',
    'IAH': 'ًں‡؛ًں‡¸ ن¼‘و–¯é،؟',
    'MCO': 'ًں‡؛ًں‡¸ ه¥¥ه…°ه¤ڑ',
    'AUS': 'ًں‡؛ًں‡¸ ه¥¥و–¯و±€',
    'BNA': 'ًں‡؛ًں‡¸ ç؛³ن»€ç»´ه°”',
    'RDU': 'ًں‡؛ًں‡¸ ç½—هˆ©',
    'IND': 'ًں‡؛ًں‡¸ هچ°ç¬¬ه®‰ç؛³و³¢هˆ©و–¯',
    'CMH': 'ًں‡؛ًں‡¸ ه“¥ن¼¦ه¸ƒ',
    'MCI': 'ًں‡؛ًں‡¸ ه ھèگ¨و–¯هںژ',
    'OMA': 'ًں‡؛ًں‡¸ ه¥¥é©¬ه“ˆ',
    'ABQ': 'ًں‡؛ًں‡¸ éک؟ه°”ن¼¯ه…‹هں؛',
    'OKC': 'ًں‡؛ًں‡¸ ن؟„ه…‹و‹‰èچ·é©¬هںژ',
    'MEM': 'ًں‡؛ًں‡¸ ه­ںèڈ²و–¯',
    'JAX': 'ًں‡؛ًں‡¸ و‌°ه…‹é€ٹç»´ه°”',
    'RIC': 'ًں‡؛ًں‡¸ é‡Œه£«و»،',
    'BUF': 'ًں‡؛ًں‡¸ ه¸ƒو³•ç½—',
    'PIT': 'ًں‡؛ًں‡¸ هŒ¹ه…¹ه ،',
    'CLE': 'ًں‡؛ًں‡¸ ه…‹هˆ©ه¤«ه…°',
    'CVG': 'ًں‡؛ًں‡¸ è¾›è¾›é‚£وڈگ',
    'MKE': 'ًں‡؛ًں‡¸ ه¯†ه°”و²ƒهں؛',
    'STL': 'ًں‡؛ًں‡¸ هœ£è·¯وک“و–¯',
    'SAT': 'ًں‡؛ًں‡¸ هœ£ه®‰ن¸œه°¼ه¥¥',
    'HNL': 'ًں‡؛ًں‡¸ وھ€é¦™ه±±',
    'ANC': 'ًں‡؛ًں‡¸ ه®‰ه…‹é›·ه¥‡',
    'SMF': 'ًں‡؛ًں‡¸ èگ¨ه…‹و‹‰é—¨و‰ک',
    'ONT': 'ًں‡؛ًں‡¸ ه®‰ه¤§ç•¥',
    'OAK': 'ًں‡؛ًں‡¸ ه¥¥ه…‹ه…°',
    'HKG': 'ًں‡­ًں‡° é¦™و¸¯',
    'TPE': 'ًں‡¹ًں‡¼ هڈ°هŒ—',
    'TSA': 'ًں‡¹ًں‡¼ هڈ°هŒ—و‌¾ه±±',
    'KHH': 'ًں‡¹ًں‡¼ é«کé›„',
    'NRT': 'ًں‡¯ًں‡µ ن¸œن؛¬وˆگç”°',
    'HND': 'ًں‡¯ًں‡µ ن¸œن؛¬ç¾½ç”°',
    'KIX': 'ًں‡¯ًں‡µ ه¤§éکھه…³è¥؟',
    'ITM': 'ًں‡¯ًں‡µ ه¤§éکھن¼ٹن¸¹',
    'NGO': 'ًں‡¯ًں‡µ هگچهڈ¤ه±‹',
    'FUK': 'ًں‡¯ًں‡µ ç¦ڈه†ˆ',
    'CTS': 'ًں‡¯ًں‡µ وœ­ه¹Œ',
    'OKA': 'ًں‡¯ًں‡µ ه†²ç»³',
    'ICN': 'ًں‡°ًں‡· é¦–ه°”ن»په·‌',
    'GMP': 'ًں‡°ًں‡· é¦–ه°”é‡‘وµ¦',
    'PUS': 'ًں‡°ًں‡· é‡œه±±',
    'SIN': 'ًں‡¸ًں‡¬ و–°هٹ ه‌،',
    'BKK': 'ًں‡¹ًں‡­ و›¼è°·',
    'DMK': 'ًں‡¹ًں‡­ و›¼è°·ه»ٹو›¼',
    'KUL': 'ًں‡²ًں‡¾ هگ‰éڑ†ه‌،',
    'CGK': 'ًں‡®ًں‡© é›…هٹ è¾¾',
    'MNL': 'ًں‡µًں‡­ é©¬ه°¼و‹‰',
    'CEB': 'ًں‡µًں‡­ ه®؟هٹ،',
    'HAN': 'ًں‡»ًں‡³ و²³ه†…',
    'SGN': 'ًں‡»ًں‡³ èƒ،ه؟—وکژ',
    'DAD': 'ًں‡»ًں‡³ ه²کو¸¯',
    'RGN': 'ًں‡²ًں‡² ن»°ه…‰',
    'PNH': 'ًں‡°ًں‡­ é‡‘è¾¹',
    'REP': 'ًں‡°ًں‡­ وڑ¹ç²’',
    'VTE': 'ًں‡±ًں‡¦ ن¸‡è±،',
    'BOM': 'ًں‡®ًں‡³ ه­ںن¹°',
    'DEL': 'ًں‡®ًں‡³ و–°ه¾·é‡Œ',
    'MAA': 'ًں‡®ًں‡³ é‡‘ه¥ˆ',
    'BLR': 'ًں‡®ًں‡³ çڈ­هٹ ç½—ه°”',
    'CCU': 'ًں‡®ًں‡³ هٹ ه°”هگ„ç­”',
    'HYD': 'ًں‡®ًں‡³ وµ·ه¾—و‹‰ه·´',
    'AMD': 'ًں‡®ًں‡³ è‰¾ه“ˆè؟ˆè¾¾ه·´ه¾·',
    'COK': 'ًں‡®ًں‡³ ç§‘é’¦',
    'PNQ': 'ًں‡®ًں‡³ وµ¦é‚£',
    'GOI': 'ًں‡®ًں‡³ و‍œéک؟',
    'CMB': 'ًں‡±ًں‡° ç§‘ن¼¦ه‌،',
    'DAC': 'ًں‡§ًں‡© è¾¾هچ،',
    'KTM': 'ًں‡³ًں‡µ هٹ ه¾·و»،éƒ½',
    'ISB': 'ًں‡µًں‡° ن¼ٹو–¯ه…°ه ،',
    'KHI': 'ًں‡µًں‡° هچ،و‹‰ه¥‡',
    'LHE': 'ًں‡µًں‡° و‹‰هگˆه°”',
    'LHR': 'ًں‡¬ًں‡§ ن¼¦و•¦ه¸Œو€‌ç½—',
    'LGW': 'ًں‡¬ًں‡§ ن¼¦و•¦ç›–ç‰¹ه¨په…‹',
    'STN': 'ًں‡¬ًں‡§ ن¼¦و•¦و–¯ه‌¦و–¯ç‰¹ه¾·',
    'LTN': 'ًں‡¬ًں‡§ ن¼¦و•¦هچ¢é،؟',
    'MAN': 'ًں‡¬ًں‡§ و›¼ه½»و–¯ç‰¹',
    'EDI': 'ًں‡¬ًں‡§ çˆ±ن¸په ،',
    'BHX': 'ًں‡¬ًں‡§ ن¼¯وکژç؟°',
    'CDG': 'ًں‡«ًں‡· ه·´é»ژوˆ´é«کن¹گ',
    'ORY': 'ًں‡«ًں‡· ه·´é»ژه¥¥هˆ©',
    'MRS': 'ًں‡«ًں‡· é©¬èµ›',
    'LYS': 'ًں‡«ًں‡· é‡Œوک‚',
    'NCE': 'ًں‡«ًں‡· ه°¼و–¯',
    'FRA': 'ًں‡©ًں‡ھ و³•ه…°ه…‹ç¦ڈ',
    'MUC': 'ًں‡©ًں‡ھ و…•ه°¼é»‘',
    'TXL': 'ًں‡©ًں‡ھ وںڈو‍—',
    'BER': 'ًں‡©ًں‡ھ وںڈو‍—ه‹ƒه…°ç™»ه ،',
    'HAM': 'ًں‡©ًں‡ھ و±‰ه ،',
    'DUS': 'ًں‡©ًں‡ھ و‌œه،‍ه°”ه¤ڑه¤«',
    'CGN': 'ًں‡©ًں‡ھ ç§‘éڑ†',
    'STR': 'ًں‡©ًں‡ھ و–¯ه›¾هٹ ç‰¹',
    'AMS': 'ًں‡³ًں‡± éک؟ه§†و–¯ç‰¹ن¸¹',
    'BRU': 'ًں‡§ًں‡ھ ه¸ƒé²په،‍ه°”',
    'LUX': 'ًں‡±ًں‡؛ هچ¢و£®ه ،',
    'ZRH': 'ًں‡¨ًں‡­ è‹ڈé»ژن¸–',
    'GVA': 'ًں‡¨ًں‡­ و—¥ه†…ç“¦',
    'BSL': 'ًں‡¨ًں‡­ ه·´ه،‍ه°”',
    'VIE': 'ًں‡¦ًں‡¹ ç»´ن¹ںç؛³',
    'PRG': 'ًں‡¨ًں‡؟ ه¸ƒو‹‰و ¼',
    'BUD': 'ًں‡­ًں‡؛ ه¸ƒè¾¾ن½©و–¯',
    'WAW': 'ًں‡µًں‡± هچژو²™',
    'KRK': 'ًں‡µًں‡± ه…‹و‹‰ç§‘ه¤«',
    'MXP': 'ًں‡®ًں‡¹ ç±³ه…°é©¬ه°”ه½­èگ¨',
    'LIN': 'ًں‡®ًں‡¹ ç±³ه…°هˆ©ç؛³ç‰¹',
    'FCO': 'ًں‡®ًں‡¹ ç½—é©¬',
    'VCE': 'ًں‡®ًں‡¹ ه¨په°¼و–¯',
    'NAP': 'ًں‡®ًں‡¹ é‚£ن¸چه‹’و–¯',
    'FLR': 'ًں‡®ًں‡¹ ن½›ç½—ن¼¦èگ¨',
    'BGY': 'ًں‡®ًں‡¹ è´‌هٹ èژ«',
    'MAD': 'ًں‡ھًں‡¸ é©¬ه¾·é‡Œ',
    'BCN': 'ًں‡ھًں‡¸ ه·´ه،‍ç½—é‚£',
    'PMI': 'ًں‡ھًں‡¸ ه¸•ه°”é©¬',
    'AGP': 'ًں‡ھًں‡¸ é©¬و‹‰هٹ ',
    'VLC': 'ًں‡ھًں‡¸ ç“¦ن¼¦è¥؟ن؛ڑ',
    'SVQ': 'ًں‡ھًں‡¸ ه،‍ç»´هˆ©ن؛ڑ',
    'BIO': 'ًں‡ھًں‡¸ و¯•ه°”ه·´é„‚',
    'LIS': 'ًں‡µًں‡¹ é‡Œو–¯وœ¬',
    'OPO': 'ًں‡µًں‡¹ و³¢ه°”ه›¾',
    'FAO': 'ًں‡µًں‡¹ و³•é²پ',
    'DUB': 'ًں‡®ًں‡ھ éƒ½وںڈو‍—',
    'CPH': 'ًں‡©ًں‡° ه“¥وœ¬ه“ˆو ¹',
    'ARN': 'ًں‡¸ًں‡ھ و–¯ه¾·ه“¥ه°”و‘©',
    'GOT': 'ًں‡¸ًں‡ھ ه“¥ه¾·ه ،',
    'OSL': 'ًں‡³ًں‡´ ه¥¥و–¯é™†',
    'BGO': 'ًں‡³ًں‡´ هچ‘ه°”و ¹',
    'HEL': 'ًں‡«ًں‡® èµ«ه°”è¾›هں؛',
    'RIX': 'ًں‡±ًں‡» é‡Œهٹ ',
    'TLL': 'ًں‡ھًں‡ھ ه،”و‍—',
    'VNO': 'ًں‡±ًں‡¹ ç»´ه°”ç؛½و–¯',
    'ATH': 'ًں‡¬ًں‡· é›…ه…¸',
    'SKG': 'ًں‡¬ًں‡· ه،‍èگ¨و´›ه°¼هں؛',
    'SOF': 'ًں‡§ًں‡¬ ç´¢é‌‍ن؛ڑ',
    'OTP': 'ًں‡·ًں‡´ ه¸ƒهٹ ه‹’و–¯ç‰¹',
    'BEG': 'ًں‡·ًں‡¸ è´‌ه°”و ¼èژ±ه¾·',
    'ZAG': 'ًں‡­ًں‡· èگ¨و ¼ه‹’ه¸ƒ',
    'LJU': 'ًں‡¸ًں‡® هچ¢ه¸ƒه°”é›…é‚£',
    'KBP': 'ًں‡؛ًں‡¦ هں؛è¾…',
    'IEV': 'ًں‡؛ًں‡¦ هں؛è¾…èŒ¹è‰¯ه°¼',
    'ODS': 'ًں‡؛ًں‡¦ و•–ه¾·èگ¨',
    'SVO': 'ًں‡·ًں‡؛ èژ«و–¯ç§‘è°¢هˆ—و¢…وچ·و²ƒ',
    'DME': 'ًں‡·ًں‡؛ èژ«و–¯ç§‘ه¤ڑèژ«و‌°ه¤ڑو²ƒ',
    'VKO': 'ًں‡·ًں‡؛ èژ«و–¯ç§‘ن¼ڈهٹھç§‘و²ƒ',
    'LED': 'ًں‡·ًں‡؛ هœ£ه½¼ه¾—ه ،',
    'IST': 'ًں‡¹ًں‡· ن¼ٹو–¯ه‌¦ه¸ƒه°”',
    'SAW': 'ًں‡¹ًں‡· ن¼ٹو–¯ه‌¦ه¸ƒه°”èگ¨و¯”ه“ˆ',
    'ESB': 'ًں‡¹ًں‡· ه®‰هچ،و‹‰',
    'AYT': 'ًں‡¹ًں‡· ه®‰ه،”هˆ©ن؛ڑ',
    'ADB': 'ًں‡¹ًں‡· ن¼ٹه…¹ه¯†ه°”',
    'TLV': 'ًں‡®ًں‡± ç‰¹و‹‰ç»´ه¤«',
    'AMM': 'ًں‡¯ًں‡´ ه®‰و›¼',
    'BEY': 'ًں‡±ًں‡§ è´‌é²پç‰¹',
    'BAH': 'ًں‡§ًں‡­ ه·´و‍—',
    'KWI': 'ًں‡°ًں‡¼ ç§‘ه¨پç‰¹',
    'DXB': 'ًں‡¦ًں‡ھ è؟ھو‹œ',
    'AUH': 'ًں‡¦ًں‡ھ éک؟ه¸ƒو‰ژو¯”',
    'SHJ': 'ًں‡¦ًں‡ھ و²™è؟¦',
    'DOH': 'ًں‡¶ًں‡¦ ه¤ڑه“ˆ',
    'MCT': 'ًں‡´ًں‡² é©¬و–¯ه–€ç‰¹',
    'RUH': 'ًں‡¸ًں‡¦ هˆ©é›…ه¾—',
    'JED': 'ًں‡¸ًں‡¦ هگ‰è¾¾',
    'DMM': 'ًں‡¸ًں‡¦ è¾¾و›¼',
    'CAI': 'ًں‡ھًں‡¬ ه¼€ç½—',
    'HBE': 'ًں‡ھًں‡¬ ن؛ڑهژ†ه±±ه¤§',
    'SSH': 'ًں‡ھًں‡¬ و²™ه§†و²™ن¼ٹèµ«',
    'CMN': 'ًں‡²ًں‡¦ هچ،èگ¨ه¸ƒه…°هچ،',
    'RAK': 'ًں‡²ًں‡¦ é©¬و‹‰ه–€ن»€',
    'TUN': 'ًں‡¹ًں‡³ çھپه°¼و–¯',
    'ALG': 'ًں‡©ًں‡؟ éک؟ه°”هڈٹه°”',
    'LOS': 'ًں‡³ًں‡¬ و‹‰هگ„و–¯',
    'ABV': 'ًں‡³ًں‡¬ éک؟ه¸ƒè´¾',
    'ACC': 'ًں‡¬ًں‡­ éک؟ه…‹و‹‰',
    'NBO': 'ًں‡°ًں‡ھ ه†…ç½—و¯•',
    'MBA': 'ًں‡°ًں‡ھ è’™ه·´èگ¨',
    'ADD': 'ًں‡ھًں‡¹ ن؛ڑçڑ„و–¯ن؛ڑè´‌ه·´',
    'DAR': 'ًں‡¹ًں‡؟ è¾¾ç´¯و–¯èگ¨و‹‰ه§†',
    'JNB': 'ًں‡؟ًں‡¦ ç؛¦ç؟°ه†…و–¯ه ،',
    'CPT': 'ًں‡؟ًں‡¦ ه¼€و™®و•¦',
    'DUR': 'ًں‡؟ًں‡¦ ه¾·çڈ­',
    'HRE': 'ًں‡؟ًں‡¼ ه“ˆو‹‰é›·',
    'LUN': 'ًں‡؟ًں‡² هچ¢èگ¨هچ،',
    'MRU': 'ًں‡²ًں‡؛ و¯›é‡Œو±‚و–¯',
    'SEZ': 'ًں‡¸ًں‡¨ ه،‍èˆŒه°”',
    'SYD': 'ًں‡¦ًں‡؛ و‚‰ه°¼',
    'MEL': 'ًں‡¦ًں‡؛ ه¢¨ه°”وœ¬',
    'BNE': 'ًں‡¦ًں‡؛ ه¸ƒé‡Œو–¯çڈ­',
    'PER': 'ًں‡¦ًں‡؛ çڈ€و–¯',
    'ADL': 'ًں‡¦ًں‡؛ éک؟ه¾·èژ±ه¾·',
    'CBR': 'ًں‡¦ًں‡؛ ه ھهں¹و‹‰',
    'OOL': 'ًں‡¦ًں‡؛ é»„é‡‘وµ·ه²¸',
    'CNS': 'ًں‡¦ًں‡؛ ه‡¯وپ©و–¯',
    'AKL': 'ًں‡³ًں‡؟ ه¥¥ه…‹ه…°',
    'WLG': 'ًں‡³ًں‡؟ وƒ çپµé،؟',
    'CHC': 'ًں‡³ًں‡؟ هں؛ç‌£هںژ',
    'ZQN': 'ًں‡³ًں‡؟ çڑ‡هگژé•‡',
    'NAN': 'ًں‡«ًں‡¯ و¥ è؟ھ',
    'PPT': 'ًں‡µًں‡« ه¸•çڑ®وڈگ',
    'GUM': 'ًں‡¬ًں‡؛ ه…³ه²›',
    'GRU': 'ًں‡§ًں‡· هœ£ن؟‌ç½—ç“œé²پوں³و–¯',
    'CGH': 'ًں‡§ًں‡· هœ£ن؟‌ç½—ه­”وˆˆه°¼ن؛ڑو–¯',
    'GIG': 'ًں‡§ًں‡· é‡Œç؛¦çƒ­ه†…هچ¢',
    'BSB': 'ًں‡§ًں‡· ه·´è¥؟هˆ©ن؛ڑ',
    'CNF': 'ًں‡§ًں‡· è´‌و´›ه¥¥é‡Œè—ڈç‰¹',
    'POA': 'ًں‡§ًں‡· éک؟é›·و ¼é‡Œو¸¯',
    'CWB': 'ًں‡§ًں‡· ه؛“é‡Œè’‚ه·´',
    'FOR': 'ًں‡§ًں‡· ç¦ڈه،”èژ±èگ¨',
    'REC': 'ًں‡§ًں‡· ç´¯è¥؟è…“',
    'SSA': 'ًں‡§ًں‡· èگ¨ه°”ç“¦ه¤ڑ',
    'EZE': 'ًں‡¦ًں‡· ه¸ƒه®œè¯؛و–¯è‰¾هˆ©و–¯',
    'AEP': 'ًں‡¦ًں‡· ه¸ƒه®œè¯؛و–¯è‰¾هˆ©و–¯هںژ',
    'COR': 'ًں‡¦ًں‡· ç§‘ه°”ه¤ڑç“¦',
    'MDZ': 'ًں‡¦ًں‡· é—¨ه¤ڑèگ¨',
    'SCL': 'ًں‡¨ًں‡± هœ£هœ°ن؛ڑه“¥',
    'LIM': 'ًں‡µًں‡ھ هˆ©é©¬',
    'BOG': 'ًں‡¨ًں‡´ و³¢ه“¥ه¤§',
    'MDE': 'ًں‡¨ًں‡´ é؛¦ه¾·و‍—',
    'CLO': 'ًں‡¨ًں‡´ هچ،هˆ©',
    'UIO': 'ًں‡ھًں‡¨ هں؛ه¤ڑ',
    'GYE': 'ًں‡ھًں‡¨ ç“œن؛ڑهں؛ه°”',
    'CCS': 'ًں‡»ًں‡ھ هٹ و‹‰هٹ و–¯',
    'MVD': 'ًں‡؛ًں‡¾ è’™ه¾—ç»´çڑ„ن؛ڑ',
    'ASU': 'ًں‡µًں‡¾ ن؛ڑو‌¾و£®',
    'PTY': 'ًں‡µًں‡¦ ه·´و‹؟é©¬هںژ',
    'SJO': 'ًں‡¨ًں‡· هœ£ن½•ه،‍',
    'GUA': 'ًں‡¬ًں‡¹ هچ±هœ°é©¬و‹‰هںژ',
    'SAL': 'ًں‡¸ًں‡» هœ£èگ¨ه°”ç“¦ه¤ڑ',
    'TGU': 'ًں‡­ًں‡³ ç‰¹هڈ¤è¥؟هٹ ه°”ه·´',
    'MGA': 'ًں‡³ًں‡® é©¬é‚£ç“œ',
    'BZE': 'ًں‡§ًں‡؟ ن¼¯هˆ©ه…¹هںژ',
    'MEX': 'ًں‡²ًں‡½ ه¢¨è¥؟ه“¥هںژ',
    'GDL': 'ًں‡²ًں‡½ ç“œè¾¾و‹‰ه“ˆو‹‰',
    'MTY': 'ًں‡²ًں‡½ è’™ç‰¹é›·',
    'CUN': 'ًں‡²ًں‡½ ه‌ژوک†',
    'TIJ': 'ًں‡²ًں‡½ è’‚هچژç؛³',
    'SJD': 'ًں‡²ًں‡½ هœ£ن½•ه،‍ه¾·ه°”هچ،و²ƒ',
    'YYZ': 'ًں‡¨ًں‡¦ ه¤ڑن¼¦ه¤ڑ',
    'YVR': 'ًں‡¨ًں‡¦ و¸©ه“¥هچژ',
    'YUL': 'ًں‡¨ًں‡¦ è’™ç‰¹هˆ©ه°”',
    'YYC': 'ًں‡¨ًں‡¦ هچ،ه°”هٹ é‡Œ',
    'YEG': 'ًں‡¨ًں‡¦ هںƒه¾·è’™é،؟',
    'YOW': 'ًں‡¨ًں‡¦ و¸¥ه¤ھهچژ',
    'YWG': 'ًں‡¨ًں‡¦ و¸©ه°¼ن¼¯',
    'YHZ': 'ًں‡¨ًں‡¦ ه“ˆهˆ©و³•ه…‹و–¯',
    'HAV': 'ًں‡¨ًں‡؛ ه“ˆç“¦é‚£',
    'SJU': 'ًں‡µًں‡· هœ£èƒ،ه®‰',
    'SDQ': 'ًں‡©ًں‡´ هœ£ه¤ڑوکژهگ„',
    'PAP': 'ًں‡­ًں‡¹ ه¤ھه­گو¸¯',
    'KIN': 'ًں‡¯ًں‡² é‡‘و–¯é،؟',
    'NAS': 'ًں‡§ًں‡¸ و‹؟éھڑ',
    'MBJ': 'ًں‡¯ًں‡² è’™ç‰¹ه“¥è´‌'
  };
  function èژ·هڈ–وœ؛وˆ؟هگچç§°(وœ؛وˆ؟20018) {
    return وœ؛وˆ؟وک ه°„[وœ؛وˆ؟20018] || وœ؛وˆ؟20018;
  }

  // هںژه¸‚ç­›é€‰ç›¸ه…³ه‡½و•°
  const هںژه¸‚ç­›é€‰ه€¼ = document.getElementById('cityFilterContainer');
  const هںژه¸‚ه€¼ه€¼ = document.getElementById('cityCheckboxesContainer');
  function و›´و–°هںژه¸‚ç­›é€‰() {
    if (!هںژه¸‚ç­›é€‰ه€¼ || !هںژه¸‚ه€¼ه€¼) return;

    // ن»ژوµ‹è¯•ç»“و‍œن¸­وڈگهڈ–و‰€وœ‰هڈ¯ç”¨çڑ„هںژه¸‚
    const هںژه¸‚وک ه°„ = new Map();
    وµ‹è¯•ç»“و‍œهˆ—è،¨.forEach((ç»“و‍œ20017, ç´¢ه¼•20016) => {
      if (ç»“و‍œ20017.success && ç»“و‍œ20017.colo) {
        const وœ؛وˆ؟20015 = ç»“و‍œ20017.colo;
        if (!هںژه¸‚وک ه°„.has(وœ؛وˆ؟20015)) {
          هںژه¸‚وک ه°„.set(وœ؛وˆ؟20015, {
            colo: وœ؛وˆ؟20015,
            name: èژ·هڈ–وœ؛وˆ؟هگچç§°(وœ؛وˆ؟20015),
            count: 0
          });
        }
        هںژه¸‚وک ه°„.get(وœ؛وˆ؟20015).count++;
      }
    });
    if (هںژه¸‚وک ه°„.size === 0) {
      هںژه¸‚ç­›é€‰ه€¼.style.display = 'none';
      return;
    }
    هںژه¸‚ç­›é€‰ه€¼.style.display = 'block';
    هںژه¸‚ه€¼ه€¼.innerHTML = '';

    // وŒ‰هںژه¸‚هگچç§°وژ’ه؛ڈ
    const هںژه¸‚هˆ—è،¨ = Array.from(هںژه¸‚وک ه°„.values()).sort((ç”²ه€¼20014, ن¹™ه€¼20013) => ç”²ه€¼20014.name.localeCompare(ن¹™ه€¼20013.name));
    هںژه¸‚هˆ—è،¨.forEach(هںژه¸‚ => {
      const و ‡ç­¾ = document.createElement('label');
      و ‡ç­¾.style.cssText = 'display: inline-flex; align-items: center; cursor: pointer; color: #D0BCFF; font-size: 0.85rem; padding: 4px 8px; background: rgba(20, 5, 50, 0.4); border: 1px solid #CAC4D0; border-radius: 4px;';
      const ه¤چé€‰و،†20012 = document.createElement('input');
      ه¤چé€‰و،†20012.type = 'checkbox';
      ه¤چé€‰و،†20012.value = هںژه¸‚.colo;
      ه¤چé€‰و،†20012.checked = true;
      ه¤چé€‰و،†20012.dataset.colo = هںژه¸‚.colo;
      ه¤چé€‰و،†20012.style.cssText = 'margin-right: 6px; width: 16px; height: 16px; cursor: pointer;';
      const وœ¬هœ°ه€¼20011 = document.createElement('span');
      وœ¬هœ°ه€¼20011.textContent = هںژه¸‚.name + ' (' + هںژه¸‚.count + ')';
      و ‡ç­¾.appendChild(ه¤چé€‰و،†20012);
      و ‡ç­¾.appendChild(وœ¬هœ°ه€¼20011);
      هںژه¸‚ه€¼ه€¼.appendChild(و ‡ç­¾);
      ه¤چé€‰و،†20012.addEventListener('change', وŒ‰هںژه¸‚ç­›é€‰ç»“و‍œ);
    });

    // ç›‘هگ¬ç­›é€‰و¨،ه¼ڈهڈکهŒ–
    const ç­›é€‰ه€¼ه€¼ = document.querySelectorAll('input[name="cityFilterMode"]');
    ç­›é€‰ه€¼ه€¼.forEach(هچ•é€‰و،† => {
      هچ•é€‰و،†.addEventListener('change', function () {
        if (this.value === 'all') {
          // هˆ‡وچ¢هˆ°"ه…¨éƒ¨هںژه¸‚"و¨،ه¼ڈو—¶ï¼Œè‡ھهٹ¨é€‰ن¸­و‰€وœ‰هںژه¸‚ه¤چé€‰و،†
          const هںژه¸‚ه€¼20010 = هںژه¸‚ه€¼ه€¼.querySelectorAll('input[type="checkbox"]');
          هںژه¸‚ه€¼20010.forEach(وœ¬هœ°ه€¼20009 => {
            وœ¬هœ°ه€¼20009.checked = true;
            وœ¬هœ°ه€¼20009.disabled = false;
          });
        }
        وŒ‰هںژه¸‚ç­›é€‰ç»“و‍œ();
      });
    });
  }
  function وŒ‰هںژه¸‚ç­›é€‰ç»“و‍œ() {
    if (!ç»“و‍œهˆ—è،¨هˆ—è،¨ || !هںژه¸‚ه€¼ه€¼) return;
    const ç­›é€‰ه€¼ = document.querySelector('input[name="cityFilterMode"]:checked')?.value || 'all';
    const ç»“و‍œé،¹ç›®هˆ—è،¨ = ç»“و‍œهˆ—è،¨هˆ—è،¨.querySelectorAll('[data-index]');
    const هںژه¸‚ه€¼ = هںژه¸‚ه€¼ه€¼.querySelectorAll('input[type="checkbox"]');
    if (ç­›é€‰ه€¼ === 'fastest10') {
      // هڈھé€‰و‹©وœ€ه؟«çڑ„10ن¸ھ
      const ه€¼ç»“و‍œهˆ—è،¨ = وµ‹è¯•ç»“و‍œهˆ—è،¨.map((ç»“و‍œ, ç´¢ه¼•20008) => ({
        result: ç»“و‍œ,
        index: ç´¢ه¼•20008
      })).filter(é،¹ç›®20007 => é،¹ç›®20007.result.success).sort((ç”²ه€¼, ن¹™ه€¼) => ç”²ه€¼.result.latency - ن¹™ه€¼.result.latency).slice(0, 10);
      const وœ€ه؟«ç´¢ه¼•é›†هگˆ = new Set(ه€¼ç»“و‍œهˆ—è،¨.map(é،¹ç›®20006 => é،¹ç›®20006.index));
      ç»“و‍œé،¹ç›®هˆ—è،¨.forEach(é،¹ç›®20005 => {
        const ç´¢ه¼• = parseInt(é،¹ç›®20005.dataset.index);
        const ه¤چé€‰و،†20004 = é،¹ç›®20005.querySelector('input[type="checkbox"]');
        if (وœ€ه؟«ç´¢ه¼•é›†هگˆ.has(ç´¢ه¼•)) {
          é،¹ç›®20005.style.display = 'flex';
          if (ه¤چé€‰و،†20004) ه¤چé€‰و،†20004.checked = true;
        } else {
          é،¹ç›®20005.style.display = 'none';
          if (ه¤چé€‰و،†20004) ه¤چé€‰و،†20004.checked = false;
        }
      });

      // ç¦پç”¨هںژه¸‚ه¤چé€‰و،†
      هںژه¸‚ه€¼.forEach(وœ¬هœ°ه€¼20003 => وœ¬هœ°ه€¼20003.disabled = true);
    } else {
      // و ¹وچ®é€‰ن¸­çڑ„هںژه¸‚ç­›é€‰
      const ه·²é€‰هںژه¸‚هˆ—è،¨ = new Set();
      هںژه¸‚ه€¼.forEach(وœ¬هœ°ه€¼20002 => {
        if (وœ¬هœ°ه€¼20002.checked) {
          ه·²é€‰هںژه¸‚هˆ—è،¨.add(وœ¬هœ°ه€¼20002.value);
        }
      });

      // ه¦‚و‍œو‰€وœ‰هںژه¸‚éƒ½è¢«é€‰ن¸­ï¼ˆوˆ–و²،وœ‰é€‰ن¸­ن»»ن½•هںژه¸‚ï¼‰ï¼Œوک¾ç¤؛و‰€وœ‰ç»“و‍œ
      const ه€¼ه€¼20001 = هںژه¸‚ه€¼.length > 0 && ه·²é€‰هںژه¸‚هˆ—è،¨.size === هںژه¸‚ه€¼.length;
      const ه€¼ه€¼ = ه·²é€‰هںژه¸‚هˆ—è،¨.size === 0;
      ç»“و‍œé،¹ç›®هˆ—è،¨.forEach(é،¹ç›® => {
        const وœ؛وˆ؟20000 = é،¹ç›®.dataset.colo || '';
        const ه¤چé€‰و،† = é،¹ç›®.querySelector('input[type="checkbox"]');
        if (ه€¼ه€¼20001 || ه€¼ه€¼ || ه·²é€‰هںژه¸‚هˆ—è،¨.has(وœ؛وˆ؟20000)) {
          é،¹ç›®.style.display = 'flex';
          // هگŒو­¥و›´و–°ç»“و‍œé،¹ه¤چé€‰و،†çڑ„é€‰ن¸­çٹ¶و€پ
          if (ه¤چé€‰و،†) {
            if (ه€¼ه€¼20001) {
              // و‰€وœ‰هںژه¸‚éƒ½é€‰ن¸­و—¶ï¼Œو‰€وœ‰ç»“و‍œé،¹ه¤چé€‰و،†éƒ½é€‰ن¸­
              ه¤چé€‰و،†.checked = true;
            } else if (ه€¼ه€¼) {
              // و²،وœ‰é€‰ن¸­ن»»ن½•هںژه¸‚و—¶ï¼Œو‰€وœ‰ç»“و‍œé،¹ه¤چé€‰و،†éƒ½هڈ–و¶ˆé€‰ن¸­
              ه¤چé€‰و،†.checked = false;
            } else {
              // و ¹وچ®هںژه¸‚é€‰و‹©çٹ¶و€پهگŒو­¥ه¤چé€‰و،†
              ه¤چé€‰و،†.checked = ه·²é€‰هںژه¸‚هˆ—è،¨.has(وœ؛وˆ؟20000);
            }
          }
        } else {
          é،¹ç›®.style.display = 'none';
          // هڈ–و¶ˆé€‰ن¸­éڑگè—ڈçڑ„ç»“و‍œé،¹ه¤چé€‰و،†
          if (ه¤چé€‰و،†) {
            ه¤چé€‰و،†.checked = false;
          }
        }
      });

      // هگ¯ç”¨هںژه¸‚ه¤چé€‰و،†
      هںژه¸‚ه€¼.forEach(وœ¬هœ°ه€¼ => وœ¬هœ°ه€¼.disabled = false);
    }
  }
  async function وµ‹è¯•ه»¶è؟ں(ن¸»وœ؛, ç«¯هڈ£, ن؟،هڈ·) {
    const è¶…و—¶ = 8000;
    let وœ؛وˆ؟ = '';
    let وµ‹è¯•ç½‘ه‌€ = '';
    try {
      const وژ§هˆ¶ه™¨ = new AbortController();
      const è¶…و—¶و ‡è¯† = setTimeout(() => وژ§هˆ¶ه™¨.abort(), è¶…و—¶);
      if (ن؟،هڈ·) {
        ن؟،هڈ·.addEventListener('abort', () => وژ§هˆ¶ه™¨.abort());
      }
      const و¸…çگ†ن¸»وœ؛ = ن¸»وœ؛.replace(/^\\[|\\]$/g, '');
      const هچپه…­è؟›هˆ¶هœ°ه‌€ = هœ°ه‌€è½¬هچپه…­è؟›هˆ¶(و¸…çگ†ن¸»وœ؛);
      const وµ‹è¯•هںںهگچ = هچپه…­è؟›هˆ¶هœ°ه‌€ ? هچپه…­è؟›هˆ¶هœ°ه‌€ + '.nip.lfree.org' : و¸…çگ†ن¸»وœ؛ + '.nip.lfree.org';
      وµ‹è¯•ç½‘ه‌€ = 'https://' + وµ‹è¯•هںںهگچ + ':' + ç«¯هڈ£ + '/';
      console.log('[LatencyTest] Testing:', وµ‹è¯•ç½‘ه‌€, 'Original:', ن¸»وœ؛ + ':' + ç«¯هڈ£, 'HexIP:', هچپه…­è؟›هˆ¶هœ°ه‌€);
      const é¦–و¬،ه¼€ه§‹ = Date.now();
      const ه“چه؛”1 = await fetch(وµ‹è¯•ç½‘ه‌€, {
        signal: وژ§هˆ¶ه™¨.signal
      });
      const é¦–و¬،ه€¼ = Date.now() - é¦–و¬،ه¼€ه§‹;
      if (!ه“چه؛”1.ok) {
        clearTimeout(è¶…و—¶و ‡è¯†);
        return {
          success: false,
          latency: é¦–و¬،ه€¼,
          error: 'HTTP ' + ه“چه؛”1.status + ' ' + ه“چه؛”1.statusText,
          colo: '',
          testUrl: وµ‹è¯•ç½‘ه‌€
        };
      }
      try {
        const و–‡وœ¬ = await ه“چه؛”1.text();
        console.log('[LatencyTest] Response body:', و–‡وœ¬.substring(0, 200));
        const و•°وچ® = JSON.parse(و–‡وœ¬);
        if (و•°وچ®.colo) {
          وœ؛وˆ؟ = و•°وچ®.colo;
        }
      } catch (ن؛‹ن»¶ه€¼) {
        console.log('[LatencyTest] Parse error:', ن؛‹ن»¶ه€¼.message);
      }
      const ه€¼ه¼€ه§‹ = Date.now();
      const ه“چه؛”2 = await fetch(وµ‹è¯•ç½‘ه‌€, {
        signal: وژ§هˆ¶ه™¨.signal
      });
      await ه“چه؛”2.text();
      const ه»¶è؟ں = Date.now() - ه€¼ه¼€ه§‹;
      clearTimeout(è¶…و—¶و ‡è¯†);
      console.log('[LatencyTest] First:', é¦–و¬،ه€¼ + 'ms (DNS+TLS+RTT)', 'Second:', ه»¶è؟ں + 'ms (RTT only)');
      return {
        success: true,
        latency: ه»¶è؟ں,
        colo: وœ؛وˆ؟,
        testUrl: وµ‹è¯•ç½‘ه‌€
      };
    } catch (é”™è¯¯) {
      const é”™è¯¯و¶ˆوپ¯ = é”™è¯¯.name === 'AbortError' ? '${وک¯هگ¦ه€¼236 ? 'ط²ظ…ط§ظ† طھظ…ط§ظ… ط´ط¯' : 'è¶…و—¶'}' : é”™è¯¯.message;
      console.log('[LatencyTest] Error:', é”™è¯¯و¶ˆوپ¯, 'URL:', وµ‹è¯•ç½‘ه‌€);
      return {
        success: false,
        latency: -1,
        error: é”™è¯¯و¶ˆوپ¯,
        colo: '',
        testUrl: وµ‹è¯•ç½‘ه‌€
      };
    }
  }
});
</script>
    </body>
    </html>`;
  return new Response(ه€¼é،µé‌¢, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}
async function è§£و‍گوœ¨é©¬ه¤´éƒ¨(ç¼“ه†²234, وœ¬هœ°ه€¼233) {
  const ه­—èٹ‚ = ه¤„çگ†ه€¼ه€¼8و•°ç»„(ç¼“ه†²234);
  const ه¯†ç په€¼ن؛•هڈ· = ن¼ è¾“è·¯ه¾„ || وœ¬هœ°ه€¼233;
  const ه€¼224ه¯†ç پ = await ه¤„çگ†ه€¼224ن؛•هڈ·(ه¯†ç په€¼ن؛•هڈ·);
  if (ه­—èٹ‚.byteLength < 56) {
    return {
      hasError: true,
      message: "invalid " + atob('dHJvamFu') + " data - too short"
    };
  }
  let ه€¼ه€¼ç´¢ه¼• = 56;
  if (ه­—èٹ‚[56] !== 0x0d || ه­—èٹ‚[57] !== 0x0a) {
    return {
      hasError: true,
      message: "invalid " + atob('dHJvamFu') + " header format (missing CR LF)"
    };
  }
  const ه¯†ç پ232 = ه…±ن؛«è§£ç په™¨.decode(ه­—èٹ‚.subarray(0, ه€¼ه€¼ç´¢ه¼•));
  if (ه¯†ç پ232 !== ه€¼224ه¯†ç پ) {
    return {
      hasError: true,
      message: "invalid " + atob('dHJvamFu') + " password"
    };
  }
  const ن»£çگ†5و•°وچ®ç¼“ه†² = ه­—èٹ‚.subarray(ه€¼ه€¼ç´¢ه¼• + 2);
  if (ن»£çگ†5و•°وچ®ç¼“ه†².byteLength < 6) {
    return {
      hasError: true,
      message: atob('aW52YWxpZCBTT0NLUzUgcmVxdWVzdCBkYXRh')
    };
  }
  const è§†ه›¾231 = new DataView(ن»£çگ†5و•°وچ®ç¼“ه†².buffer, ن»£çگ†5و•°وچ®ç¼“ه†².byteOffset, ن»£çگ†5و•°وچ®ç¼“ه†².byteLength);
  const ه‘½ن»¤230 = è§†ه›¾231.getUint8(0);
  if (ه‘½ن»¤230 !== 1) {
    return {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const وœ¬هœ°ه€¼229 = è§†ه›¾231.getUint8(1);
  let هœ°ه‌€é•؟ه؛¦ = 0;
  let هœ°ه‌€ç´¢ه¼•228 = 2;
  let هœ°ه‌€227 = "";
  switch (وœ¬هœ°ه€¼229) {
    case 1:
      هœ°ه‌€é•؟ه؛¦ = 4;
      هœ°ه‌€227 = ن»£çگ†5و•°وچ®ç¼“ه†².subarray(هœ°ه‌€ç´¢ه¼•228, هœ°ه‌€ç´¢ه¼•228 + هœ°ه‌€é•؟ه؛¦).join(".");
      break;
    case 3:
      هœ°ه‌€é•؟ه؛¦ = ن»£çگ†5و•°وچ®ç¼“ه†²[هœ°ه‌€ç´¢ه¼•228];
      هœ°ه‌€ç´¢ه¼•228 += 1;
      هœ°ه‌€227 = ه…±ن؛«è§£ç په™¨.decode(ن»£çگ†5و•°وچ®ç¼“ه†².subarray(هœ°ه‌€ç´¢ه¼•228, هœ°ه‌€ç´¢ه¼•228 + هœ°ه‌€é•؟ه؛¦));
      break;
    case 4:
      هœ°ه‌€é•؟ه؛¦ = 16;
      const و•°وچ®è§†ه›¾ = new DataView(ن»£çگ†5و•°وچ®ç¼“ه†².buffer, ن»£çگ†5و•°وچ®ç¼“ه†².byteOffset + هœ°ه‌€ç´¢ه¼•228, هœ°ه‌€é•؟ه؛¦);
      const ه€¼6 = [];
      for (let ç´¢ه¼•ه€¼226 = 0; ç´¢ه¼•ه€¼226 < 8; ç´¢ه¼•ه€¼226++) {
        ه€¼6.push(و•°وچ®è§†ه›¾.getUint16(ç´¢ه¼•ه€¼226 * 2).toString(16));
      }
      هœ°ه‌€227 = ه€¼6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invalid addressType is ${وœ¬هœ°ه€¼229}`
      };
  }
  if (!هœ°ه‌€227) {
    return {
      hasError: true,
      message: `address is empty, addressType is ${وœ¬هœ°ه€¼229}`
    };
  }
  const ç«¯هڈ£ç´¢ه¼•225 = هœ°ه‌€ç´¢ه¼•228 + هœ°ه‌€é•؟ه؛¦;
  const ç«¯هڈ£è؟œç¨‹ = new DataView(ن»£çگ†5و•°وچ®ç¼“ه†².buffer, ن»£çگ†5و•°وچ®ç¼“ه†².byteOffset + ç«¯هڈ£ç´¢ه¼•225, 2).getUint16(0);
  return {
    hasError: false,
    addressRemote: هœ°ه‌€227,
    addressType: وœ¬هœ°ه€¼229,
    port: ç«¯هڈ£è؟œç¨‹,
    hostname: هœ°ه‌€227,
    rawClientData: ن»£çگ†5و•°وچ®ç¼“ه†².subarray(ç«¯هڈ£ç´¢ه¼•225 + 4)
  };
}
async function ه¤„çگ†ه€¼224ن؛•هڈ·(و–‡وœ¬224) {
  const ç¼–ç په™¨ = new TextEncoder();
  const و•°وچ®223 = ç¼–ç په™¨.encode(و–‡وœ¬224);
  const وœ¬هœ°ه€¼222 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  let ه¤´éƒ¨و¸¸و ‡ = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
  const و¶ˆوپ¯é•؟ه؛¦ = و•°وچ®223.length;
  const ه€¼é•؟ه؛¦221 = و¶ˆوپ¯é•؟ه؛¦ * 8;
  const ه€¼é•؟ه؛¦220 = Math.ceil((و¶ˆوپ¯é•؟ه؛¦ + 9) / 64) * 64;
  const وœ¬هœ°ه€¼219 = new Uint8Array(ه€¼é•؟ه؛¦220);
  وœ¬هœ°ه€¼219.set(و•°وچ®223);
  وœ¬هœ°ه€¼219[و¶ˆوپ¯é•؟ه؛¦] = 0x80;
  const è§†ه›¾ = new DataView(وœ¬هœ°ه€¼219.buffer);
  è§†ه›¾.setUint32(ه€¼é•؟ه؛¦220 - 4, ه€¼é•؟ه؛¦221, false);
  for (let ه‌—218 = 0; ه‌—218 < ه€¼é•؟ه؛¦220; ه‌—218 += 64) {
    const ه†™ه…¥ه™¨هŒ…è£… = new Uint32Array(64);
    for (let ç´¢ه¼•ه€¼217 = 0; ç´¢ه¼•ه€¼217 < 16; ç´¢ه¼•ه€¼217++) {
      ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼217] = è§†ه›¾.getUint32(ه‌—218 + ç´¢ه¼•ه€¼217 * 4, false);
    }
    for (let ç´¢ه¼•ه€¼216 = 16; ç´¢ه¼•ه€¼216 < 64; ç´¢ه¼•ه€¼216++) {
      const ه€¼0215 = ه¤„çگ†ه€¼ه€¼200(ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 15], 7) ^ ه¤„çگ†ه€¼ه€¼200(ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 15], 18) ^ ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 15] >>> 3;
      const ه€¼1214 = ه¤„çگ†ه€¼ه€¼200(ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 2], 17) ^ ه¤„çگ†ه€¼ه€¼200(ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 2], 19) ^ ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 2] >>> 10;
      ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216] = ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 16] + ه€¼0215 + ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼216 - 7] + ه€¼1214 >>> 0;
    }
    let [ç”²ه€¼213, ن¹™ه€¼, ن¸™ه€¼212, ن¸په€¼211, ن؛‹ن»¶ه€¼210, è،¨هچ•ه€¼, وœ¬هœ°ه€¼209, ه¤´ه€¼208] = ه¤´éƒ¨و¸¸و ‡;
    for (let ç´¢ه¼•ه€¼207 = 0; ç´¢ه¼•ه€¼207 < 64; ç´¢ه¼•ه€¼207++) {
      const ه€¼1206 = ه¤„çگ†ه€¼ه€¼200(ن؛‹ن»¶ه€¼210, 6) ^ ه¤„çگ†ه€¼ه€¼200(ن؛‹ن»¶ه€¼210, 11) ^ ه¤„çگ†ه€¼ه€¼200(ن؛‹ن»¶ه€¼210, 25);
      const وœ¬هœ°ه€¼205 = ن؛‹ن»¶ه€¼210 & è،¨هچ•ه€¼ ^ ~ن؛‹ن»¶ه€¼210 & وœ¬هœ°ه€¼209;
      const ه€¼1 = ه¤´ه€¼208 + ه€¼1206 + وœ¬هœ°ه€¼205 + وœ¬هœ°ه€¼222[ç´¢ه¼•ه€¼207] + ه†™ه…¥ه™¨هŒ…è£…[ç´¢ه¼•ه€¼207] >>> 0;
      const ه€¼0 = ه¤„çگ†ه€¼ه€¼200(ç”²ه€¼213, 2) ^ ه¤„çگ†ه€¼ه€¼200(ç”²ه€¼213, 13) ^ ه¤„çگ†ه€¼ه€¼200(ç”²ه€¼213, 22);
      const وœ¬هœ°ه€¼204 = ç”²ه€¼213 & ن¹™ه€¼ ^ ç”²ه€¼213 & ن¸™ه€¼212 ^ ن¹™ه€¼ & ن¸™ه€¼212;
      const ه€¼2203 = ه€¼0 + وœ¬هœ°ه€¼204 >>> 0;
      ه¤´ه€¼208 = وœ¬هœ°ه€¼209;
      وœ¬هœ°ه€¼209 = è،¨هچ•ه€¼;
      è،¨هچ•ه€¼ = ن؛‹ن»¶ه€¼210;
      ن؛‹ن»¶ه€¼210 = ن¸په€¼211 + ه€¼1 >>> 0;
      ن¸په€¼211 = ن¸™ه€¼212;
      ن¸™ه€¼212 = ن¹™ه€¼;
      ن¹™ه€¼ = ç”²ه€¼213;
      ç”²ه€¼213 = ه€¼1 + ه€¼2203 >>> 0;
    }
    ه¤´éƒ¨و¸¸و ‡[0] = ه¤´éƒ¨و¸¸و ‡[0] + ç”²ه€¼213 >>> 0;
    ه¤´éƒ¨و¸¸و ‡[1] = ه¤´éƒ¨و¸¸و ‡[1] + ن¹™ه€¼ >>> 0;
    ه¤´éƒ¨و¸¸و ‡[2] = ه¤´éƒ¨و¸¸و ‡[2] + ن¸™ه€¼212 >>> 0;
    ه¤´éƒ¨و¸¸و ‡[3] = ه¤´éƒ¨و¸¸و ‡[3] + ن¸په€¼211 >>> 0;
    ه¤´éƒ¨و¸¸و ‡[4] = ه¤´éƒ¨و¸¸و ‡[4] + ن؛‹ن»¶ه€¼210 >>> 0;
    ه¤´éƒ¨و¸¸و ‡[5] = ه¤´éƒ¨و¸¸و ‡[5] + è،¨هچ•ه€¼ >>> 0;
    ه¤´éƒ¨و¸¸و ‡[6] = ه¤´éƒ¨و¸¸و ‡[6] + وœ¬هœ°ه€¼209 >>> 0;
    ه¤´éƒ¨و¸¸و ‡[7] = ه¤´éƒ¨و¸¸و ‡[7] + ه¤´ه€¼208 >>> 0;
  }
  const ç»“و‍œ202 = [];
  for (let ç´¢ه¼•ه€¼201 = 0; ç´¢ه¼•ه€¼201 < 7; ç´¢ه¼•ه€¼201++) {
    ç»“و‍œ202.push((ه¤´éƒ¨و¸¸و ‡[ç´¢ه¼•ه€¼201] >>> 24 & 0xff).toString(16).padStart(2, '0'), (ه¤´éƒ¨و¸¸و ‡[ç´¢ه¼•ه€¼201] >>> 16 & 0xff).toString(16).padStart(2, '0'), (ه¤´éƒ¨و¸¸و ‡[ç´¢ه¼•ه€¼201] >>> 8 & 0xff).toString(16).padStart(2, '0'), (ه¤´éƒ¨و¸¸و ‡[ç´¢ه¼•ه€¼201] & 0xff).toString(16).padStart(2, '0'));
  }
  return ç»“و‍œ202.join('');
}
function ه¤„çگ†ه€¼ه€¼200(ه€¼199, وœ¬هœ°ه€¼198) {
  return ه€¼199 >>> وœ¬هœ°ه€¼198 | ه€¼199 << 32 - وœ¬هœ°ه€¼198;
}
let ه€¼ه€¼197 = 0;
const ه€¼è¶…و–‡وœ¬ç¼“ه†²ه¤§ه°ڈ = 128 * 1024;
const è؟‍وژ¥è¶…و—¶ه€¼ = 5000;
const ه€¼è¶…و—¶ه€¼ = 45000;
const ن¸ٹé™گه€¼196 = 2;
const ن¸ٹé™گه€¼ = 32;
function ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(وœ¬هœ°ه€¼194) {
  return new Promise(ç»“و‍œه€¼193 => setTimeout(ç»“و‍œه€¼193, وœ¬هœ°ه€¼194));
}
function éھŒè¯په”¯ن¸€و ‡è¯†و‰©ه±•è¶…و–‡وœ¬(و ‡è¯†192, ه”¯ن¸€و ‡è¯†191) {
  for (let ç´¢ه¼•190 = 0; ç´¢ه¼•190 < 16; ç´¢ه¼•190++) {
    if (و ‡è¯†192[ç´¢ه¼•190] !== ه”¯ن¸€و ‡è¯†191[ç´¢ه¼•190]) {
      return false;
    }
  }
  return true;
}
class و‰©ه±•è¶…و–‡وœ¬è®،و•°ه™¨ {
  #total;
  constructor() {
    this.#total = 0;
  }
  get() {
    return this.#total;
  }
  add(ه¤§ه°ڈ189) {
    this.#total += ه¤§ه°ڈ189;
  }
}
function ه¤„çگ†ه€¼ه€¼ه€¼(é¦–و¬،, ...وœ¬هœ°ه€¼188) {
  let é•؟ه؛¦ = é¦–و¬،.length;
  for (let ç”²ه€¼187 of وœ¬هœ°ه€¼188) {
    é•؟ه؛¦ += ç”²ه€¼187.length;
  }
  const ç»“و‍œه€¼186 = new é¦–و¬،.constructor(é•؟ه؛¦);
  ç»“و‍œه€¼186.set(é¦–و¬،, 0);
  é•؟ه؛¦ = é¦–و¬،.length;
  for (let ç”²ه€¼185 of وœ¬هœ°ه€¼188) {
    ç»“و‍œه€¼186.set(ç”²ه€¼185, é•؟ه؛¦);
    é•؟ه؛¦ += ç”²ه€¼185.length;
  }
  return ç»“و‍œه€¼186;
}
function è§£و‍گه”¯ن¸€و ‡è¯†و‰©ه±•è¶…و–‡وœ¬(ه”¯ن¸€و ‡è¯†184) {
  ه”¯ن¸€و ‡è¯†184 = ه”¯ن¸€و ‡è¯†184.replaceAll('-', '');
  const ç»“و‍œه€¼183 = [];
  for (let ç´¢ه¼•182 = 0; ç´¢ه¼•182 < 16; ç´¢ه¼•182++) {
    const هڈ–ه€¼181 = parseInt(ه”¯ن¸€و ‡è¯†184.substr(ç´¢ه¼•182 * 2, 2), 16);
    ç»“و‍œه€¼183.push(هڈ–ه€¼181);
  }
  return ç»“و‍œه€¼183;
}
function èژ·هڈ–و‰©ه±•è¶…و–‡وœ¬ç¼“ه†²(ه¤§ه°ڈ) {
  return new Uint8Array(new ArrayBuffer(ه¤§ه°ڈ || ه€¼è¶…و–‡وœ¬ç¼“ه†²ه¤§ه°ڈ));
}
async function è¯»هڈ–و‰©ه±•è¶…و–‡وœ¬ه¤´éƒ¨(وœ¬هœ°ه€¼180, ه”¯ن¸€و ‡è¯†ه­—ç¬¦ن¸²) {
  const è¯»هڈ–ه™¨179 = وœ¬هœ°ه€¼180.getReader({
    mode: 'byob'
  });
  try {
    let ç»“و‍œه€¼178 = await è¯»هڈ–ه™¨179.readAtLeast(1 + 16 + 1, èژ·هڈ–و‰©ه±•è¶…و–‡وœ¬ç¼“ه†²());
    let وœ¬هœ°ه€¼177 = 0;
    let ç´¢ه¼• = 0;
    let ç¼“ه­ک = ç»“و‍œه€¼178.value;
    وœ¬هœ°ه€¼177 += ç»“و‍œه€¼178.value.length;
    const وœ¬هœ°ه€¼176 = ç¼“ه­ک[0];
    const و ‡è¯†175 = ç¼“ه­ک.slice(1, 1 + 16);
    const ه”¯ن¸€و ‡è¯†174 = è§£و‍گه”¯ن¸€و ‡è¯†و‰©ه±•è¶…و–‡وœ¬(ه”¯ن¸€و ‡è¯†ه­—ç¬¦ن¸²);
    if (!éھŒè¯په”¯ن¸€و ‡è¯†و‰©ه±•è¶…و–‡وœ¬(و ‡è¯†175, ه”¯ن¸€و ‡è¯†174)) {
      return `invalid UUID`;
    }
    const ه€¼é•؟ه؛¦173 = ç¼“ه­ک[1 + 16];
    const هœ°ه‌€ه€¼1 = 1 + 16 + 1 + ه€¼é•؟ه؛¦173 + 1 + 2 + 1;
    if (هœ°ه‌€ه€¼1 + 1 > وœ¬هœ°ه€¼177) {
      if (ç»“و‍œه€¼178.done) {
        return `header too short`;
      }
      ç´¢ه¼• = هœ°ه‌€ه€¼1 + 1 - وœ¬هœ°ه€¼177;
      ç»“و‍œه€¼178 = await è¯»هڈ–ه™¨179.readAtLeast(ç´¢ه¼•, èژ·هڈ–و‰©ه±•è¶…و–‡وœ¬ç¼“ه†²());
      وœ¬هœ°ه€¼177 += ç»“و‍œه€¼178.value.length;
      ç¼“ه­ک = ه¤„çگ†ه€¼ه€¼ه€¼(ç¼“ه­ک, ç»“و‍œه€¼178.value);
    }
    const ه‘½ن»¤ = ç¼“ه­ک[1 + 16 + 1 + ه€¼é•؟ه؛¦173];
    if (ه‘½ن»¤ !== 1) {
      return `unsupported command: ${ه‘½ن»¤}`;
    }
    const ç«¯هڈ£172 = (ç¼“ه­ک[هœ°ه‌€ه€¼1 - 1 - 2] << 8) + ç¼“ه­ک[هœ°ه‌€ه€¼1 - 1 - 1];
    const وœ¬هœ°ه€¼171 = ç¼“ه­ک[هœ°ه‌€ه€¼1 - 1];
    let ه¤´éƒ¨é•؟ه؛¦ = -1;
    if (وœ¬هœ°ه€¼171 === هœ°ه‌€ç±»ه‍‹_ه››ç‰ˆ) {
      ه¤´éƒ¨é•؟ه؛¦ = هœ°ه‌€ه€¼1 + 4;
    } else if (وœ¬هœ°ه€¼171 === هœ°ه‌€ç±»ه‍‹_ه…­ç‰ˆ) {
      ه¤´éƒ¨é•؟ه؛¦ = هœ°ه‌€ه€¼1 + 16;
    } else if (وœ¬هœ°ه€¼171 === هœ°ه‌€ç±»ه‍‹_ç½‘ه‌€) {
      ه¤´éƒ¨é•؟ه؛¦ = هœ°ه‌€ه€¼1 + 1 + ç¼“ه­ک[هœ°ه‌€ه€¼1];
    }
    if (ه¤´éƒ¨é•؟ه؛¦ < 0) {
      return 'read address type failed';
    }
    ç´¢ه¼• = ه¤´éƒ¨é•؟ه؛¦ - وœ¬هœ°ه€¼177;
    if (ç´¢ه¼• > 0) {
      if (ç»“و‍œه€¼178.done) {
        return `read address failed`;
      }
      ç»“و‍œه€¼178 = await è¯»هڈ–ه™¨179.readAtLeast(ç´¢ه¼•, èژ·هڈ–و‰©ه±•è¶…و–‡وœ¬ç¼“ه†²());
      وœ¬هœ°ه€¼177 += ç»“و‍œه€¼178.value.length;
      ç¼“ه­ک = ه¤„çگ†ه€¼ه€¼ه€¼(ç¼“ه­ک, ç»“و‍œه€¼178.value);
    }
    let ن¸»وœ؛هگچ170 = '';
    ç´¢ه¼• = هœ°ه‌€ه€¼1;
    switch (وœ¬هœ°ه€¼171) {
      case هœ°ه‌€ç±»ه‍‹_ه››ç‰ˆ:
        ن¸»وœ؛هگچ170 = ç¼“ه­ک.slice(ç´¢ه¼•, ç´¢ه¼• + 4).join('.');
        break;
      case هœ°ه‌€ç±»ه‍‹_ç½‘ه‌€:
        ن¸»وœ؛هگچ170 = new TextDecoder().decode(ç¼“ه­ک.slice(ç´¢ه¼• + 1, ç´¢ه¼• + 1 + ç¼“ه­ک[ç´¢ه¼•]));
        break;
      case هœ°ه‌€ç±»ه‍‹_ه…­ç‰ˆ:
        ن¸»وœ؛هگچ170 = ç¼“ه­ک.slice(ç´¢ه¼•, ç´¢ه¼• + 16).reduce((ه­—ç¬¦ن¸²ه€¼, ه€¼2169, ه€¼2, ç”²ه€¼) => ه€¼2 % 2 ? ه­—ç¬¦ن¸²ه€¼.concat(((ç”²ه€¼[ه€¼2 - 1] << 8) + ه€¼2169).toString(16)) : ه­—ç¬¦ن¸²ه€¼, []).join(':');
        break;
    }
    if (ن¸»وœ؛هگچ170.length < 1) {
      return 'failed to parse hostname';
    }
    const و•°وچ® = ç¼“ه­ک.slice(ه¤´éƒ¨é•؟ه؛¦);
    return {
      hostname: ن¸»وœ؛هگچ170,
      port: ç«¯هڈ£172,
      data: و•°وچ®,
      resp: new Uint8Array([وœ¬هœ°ه€¼176, 0]),
      reader: è¯»هڈ–ه™¨179,
      done: ç»“و‍œه€¼178.done
    };
  } catch (é”™è¯¯168) {
    try {
      è¯»هڈ–ه™¨179.releaseLock();
    } catch (ه؟½ç•¥ه€¼167) {}
    throw é”™è¯¯168;
  }
}
async function ه¤„çگ†ه€¼ه€¼è؟œç¨‹و‰©ه±•è¶…و–‡وœ¬(è®،و•°ه™¨166, ه†™ه…¥ه™¨165, وœ¬هœ°ه€¼164) {
  async function ه¤„çگ†ه€¼ه€¼(ن¸په€¼) {
    if (!ن¸په€¼ || ن¸په€¼.length === 0) {
      return;
    }
    è®،و•°ه™¨166.add(ن¸په€¼.length);
    try {
      await ه†™ه…¥ه™¨165.write(ن¸په€¼);
    } catch (é”™è¯¯163) {
      throw é”™è¯¯163;
    }
  }
  try {
    await ه¤„çگ†ه€¼ه€¼(وœ¬هœ°ه€¼164.data);
    let ه‌—و•°é‡ڈ162 = 0;
    while (!وœ¬هœ°ه€¼164.done) {
      const ç»“و‍œه€¼161 = await وœ¬هœ°ه€¼164.reader.read(èژ·هڈ–و‰©ه±•è¶…و–‡وœ¬ç¼“ه†²());
      if (ç»“و‍œه€¼161.done) break;
      await ه¤„çگ†ه€¼ه€¼(ç»“و‍œه€¼161.value);
      وœ¬هœ°ه€¼164.done = ç»“و‍œه€¼161.done;
      ه‌—و•°é‡ڈ162++;
      if (ه‌—و•°é‡ڈ162 % 10 === 0) {
        await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(0);
      }
      if (!ç»“و‍œه€¼161.value || ç»“و‍œه€¼161.value.length === 0) {
        await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(2);
      }
    }
  } catch (é”™è¯¯160) {
    throw é”™è¯¯160;
  }
}
function هˆ›ه»؛و‰©ه±•è¶…و–‡وœ¬ه€¼159(وœ¬هœ°ه€¼158, وœ¬هœ°ه€¼157) {
  const è®،و•°ه™¨156 = new و‰©ه±•è¶…و–‡وœ¬è®،و•°ه™¨();
  const ه†™ه…¥ه™¨155 = وœ¬هœ°ه€¼157.getWriter();
  const وœ¬هœ°ه€¼154 = (async () => {
    try {
      await ه¤„çگ†ه€¼ه€¼è؟œç¨‹و‰©ه±•è¶…و–‡وœ¬(è®،و•°ه™¨156, ه†™ه…¥ه™¨155, وœ¬هœ°ه€¼158);
    } catch (é”™è¯¯153) {
      throw é”™è¯¯153;
    } finally {
      try {
        await ه†™ه…¥ه™¨155.close();
      } catch (é”™è¯¯152) {}
    }
  })();
  return {
    counter: è®،و•°ه™¨156,
    done: وœ¬هœ°ه€¼154,
    abort: () => {
      try {
        ه†™ه…¥ه™¨155.abort();
      } catch (ه؟½ç•¥ه€¼151) {}
    }
  };
}
function هˆ›ه»؛و‰©ه±•è¶…و–‡وœ¬ه€¼(وœ¬هœ°ه€¼150, è؟œç¨‹ه€¼) {
  const è®،و•°ه™¨ = new و‰©ه±•è¶…و–‡وœ¬è®،و•°ه™¨();
  let وµپ;
  const وœ¬هœ°ه€¼149 = new Promise((وœ¬هœ°ه€¼148, وœ¬هœ°ه€¼147) => {
    وµپ = new TransformStream({
      start(وژ§هˆ¶ه™¨146) {
        è®،و•°ه™¨.add(وœ¬هœ°ه€¼150.length);
        وژ§هˆ¶ه™¨146.enqueue(وœ¬هœ°ه€¼150);
      },
      transform(ه‌—, وژ§هˆ¶ه™¨145) {
        è®،و•°ه™¨.add(ه‌—.length);
        وژ§هˆ¶ه™¨145.enqueue(ه‌—);
      },
      cancel(وœ¬هœ°ه€¼144) {
        وœ¬هœ°ه€¼147(`download cancelled: ${وœ¬هœ°ه€¼144}`);
      }
    }, null, new ByteLengthQueuingStrategy({
      highWaterMark: ه€¼è¶…و–‡وœ¬ç¼“ه†²ه¤§ه°ڈ
    }));
    let ه€¼ه€¼143 = Date.now();
    const ه€¼è®،و—¶ه™¨ = setInterval(() => {
      if (Date.now() - ه€¼ه€¼143 > ه€¼è¶…و—¶ه€¼) {
        try {
          وµپ.writable.abort?.('idle timeout');
        } catch (ه؟½ç•¥ه€¼142) {}
        clearInterval(ه€¼è®،و—¶ه™¨);
        وœ¬هœ°ه€¼147('idle timeout');
      }
    }, 5000);
    const è¯»هڈ–ه™¨ = è؟œç¨‹ه€¼.getReader();
    const ه†™ه…¥ه™¨ = وµپ.writable.getWriter();
    ;
    (async () => {
      try {
        let ه‌—و•°é‡ڈ = 0;
        while (true) {
          const ç»“و‍œه€¼141 = await è¯»هڈ–ه™¨.read();
          if (ç»“و‍œه€¼141.done) {
            break;
          }
          ه€¼ه€¼143 = Date.now();
          await ه†™ه…¥ه™¨.write(ç»“و‍œه€¼141.value);
          ه‌—و•°é‡ڈ++;
          if (ه‌—و•°é‡ڈ % 5 === 0) {
            await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(0);
          }
        }
        await ه†™ه…¥ه™¨.close();
        وœ¬هœ°ه€¼148();
      } catch (é”™è¯¯140) {
        وœ¬هœ°ه€¼147(é”™è¯¯140);
      } finally {
        try {
          è¯»هڈ–ه™¨.releaseLock();
        } catch (ه؟½ç•¥ه€¼139) {}
        try {
          ه†™ه…¥ه™¨.releaseLock();
        } catch (ه؟½ç•¥ه€¼138) {}
        clearInterval(ه€¼è®،و—¶ه™¨);
      }
    })();
  });
  return {
    readable: وµپ.readable,
    counter: è®،و•°ه™¨,
    done: وœ¬هœ°ه€¼149,
    abort: () => {
      try {
        وµپ.readable.cancel();
      } catch (ه؟½ç•¥ه€¼137) {}
      try {
        وµپ.writable.abort();
      } catch (ه؟½ç•¥ه€¼136) {}
    }
  };
}
async function è؟‍وژ¥ه€¼è؟œç¨‹و‰©ه±•è¶…و–‡وœ¬(وœ¬هœ°ه€¼135, ...وœ¬هœ°ه€¼134) {
  let وœ¬هœ°ه€¼133 = 0;
  let ه€¼é”™è¯¯;
  const è؟‍وژ¥هˆ—è،¨ = [وœ¬هœ°ه€¼135.hostname, ...وœ¬هœ°ه€¼134.filter(ç»“و‍œه€¼ => ç»“و‍œه€¼ && ç»“و‍œه€¼ !== وœ¬هœ°ه€¼135.hostname)];
  for (const ن¸»وœ؛هگچ of è؟‍وژ¥هˆ—è،¨) {
    if (!ن¸»وœ؛هگچ) continue;
    وœ¬هœ°ه€¼133 = 0;
    while (وœ¬هœ°ه€¼133 < ن¸ٹé™گه€¼196) {
      وœ¬هœ°ه€¼133++;
      try {
        const è؟œç¨‹ = è؟‍وژ¥({
          hostname: ن¸»وœ؛هگچ,
          port: وœ¬هœ°ه€¼135.port
        });
        const è¶…و—¶و‰؟è¯؛ = ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(è؟‍وژ¥è¶…و—¶ه€¼).then(() => {
          throw new Error(atob('Y29ubmVjdCB0aW1lb3V0'));
        });
        await Promise.race([è؟œç¨‹.opened, è¶…و—¶و‰؟è¯؛]);
        const وœ¬هœ°ه€¼132 = هˆ›ه»؛و‰©ه±•è¶…و–‡وœ¬ه€¼159(وœ¬هœ°ه€¼135, è؟œç¨‹.writable);
        const وœ¬هœ°ه€¼131 = هˆ›ه»؛و‰©ه±•è¶…و–‡وœ¬ه€¼(وœ¬هœ°ه€¼135.resp, è؟œç¨‹.readable);
        return {
          downloader: وœ¬هœ°ه€¼131,
          uploader: وœ¬هœ°ه€¼132,
          close: () => {
            try {
              è؟œç¨‹.close();
            } catch (ه؟½ç•¥ه€¼130) {}
          }
        };
      } catch (é”™è¯¯129) {
        ه€¼é”™è¯¯ = é”™è¯¯129;
        if (وœ¬هœ°ه€¼133 < ن¸ٹé™گه€¼196) {
          await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(500 * وœ¬هœ°ه€¼133);
        }
      }
    }
  }
  return null;
}
async function ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه®¢وˆ·ç«¯(ن¸»ن½“128, ه”¯ن¸€و ‡è¯†) {
  if (ه€¼ه€¼197 >= ن¸ٹé™گه€¼) {
    return new Response('Too many connections', {
      status: 429
    });
  }
  ه€¼ه€¼197++;
  let وœ¬هœ°ه€¼127 = false;
  const وœ¬هœ°ه€¼126 = () => {
    if (!وœ¬هœ°ه€¼127) {
      ه€¼ه€¼197 = Math.max(0, ه€¼ه€¼197 - 1);
      وœ¬هœ°ه€¼127 = true;
    }
  };
  try {
    const وœ¬هœ°ه€¼125 = await è¯»هڈ–و‰©ه±•è¶…و–‡وœ¬ه¤´éƒ¨(ن¸»ن½“128, ه”¯ن¸€و ‡è¯†);
    if (typeof وœ¬هœ°ه€¼125 !== 'object' || !وœ¬هœ°ه€¼125) {
      return null;
    }
    const è؟œç¨‹è؟‍وژ¥ = await è؟‍وژ¥ه€¼è؟œç¨‹و‰©ه±•è¶…و–‡وœ¬(وœ¬هœ°ه€¼125, ه›‍é€€هœ°ه‌€, '13.230.34.30');
    if (è؟œç¨‹è؟‍وژ¥ === null) {
      return null;
    }
    const è؟‍وژ¥ه€¼ = Promise.race([(async () => {
      try {
        await è؟œç¨‹è؟‍وژ¥.downloader.done;
      } catch (é”™è¯¯124) {}
    })(), (async () => {
      try {
        await è؟œç¨‹è؟‍وژ¥.uploader.done;
      } catch (é”™è¯¯123) {}
    })(), ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼195(ه€¼è¶…و—¶ه€¼).then(() => {})]).finally(() => {
      try {
        è؟œç¨‹è؟‍وژ¥.close();
      } catch (ه؟½ç•¥ه€¼122) {}
      try {
        è؟œç¨‹è؟‍وژ¥.downloader.abort();
      } catch (ه؟½ç•¥ه€¼121) {}
      try {
        è؟œç¨‹è؟‍وژ¥.uploader.abort();
      } catch (ه؟½ç•¥ه€¼) {}
      وœ¬هœ°ه€¼126();
    });
    return {
      readable: è؟œç¨‹è؟‍وژ¥.downloader.readable,
      closed: è؟‍وژ¥ه€¼
    };
  } catch (é”™è¯¯120) {
    وœ¬هœ°ه€¼126();
    return null;
  }
}
async function ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه€¼(è¯·و±‚119) {
  try {
    return await ه¤„çگ†و‰©ه±•è¶…و–‡وœ¬ه®¢وˆ·ç«¯(è¯·و±‚119.body, è®¤è¯پن»¤ç‰Œ);
  } catch (é”™è¯¯118) {
    return null;
  }
}
function ه¤„çگ†هں؛ç،€64ه€¼و•°ç»„(ه€¼64ه­—ç¬¦ن¸²) {
  if (!ه€¼64ه­—ç¬¦ن¸²) return {
    error: null
  };
  try {
    ه€¼64ه­—ç¬¦ن¸² = ه€¼64ه­—ç¬¦ن¸².replace(/-/g, '+').replace(/_/g, '/');
    return {
      earlyData: Uint8Array.from(atob(ه€¼64ه­—ç¬¦ن¸²), ن¸™ه€¼117 => ن¸™ه€¼117.charCodeAt(0)).buffer,
      error: null
    };
  } catch (é”™è¯¯116) {
    return {
      error: é”™è¯¯116
    };
  }
}
function ه…³é—­ه¥—وژ¥ه­—ه€¼(ه¥—وژ¥ه­—) {
  try {
    if (ه¥—وژ¥ه­—.readyState === 1 || ه¥—وژ¥ه­—.readyState === 2) ه¥—وژ¥ه­—.close();
  } catch (é”™è¯¯115) {}
}
const هچپه…­è؟›هˆ¶ه€¼ = Array.from({
  length: 256
}, (هڈ–ه€¼, ç´¢ه¼•ه€¼) => (ç´¢ه¼•ه€¼ + 256).toString(16).slice(1));
function ه¤„çگ†و ¼ه¼ڈه€¼(وœ¬هœ°ه€¼114, هپڈç§» = 0) {
  const و ‡è¯† = (هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§»]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 1]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 2]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 3]] + "-" + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 4]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 5]] + "-" + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 6]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 7]] + "-" + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 8]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 9]] + "-" + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 10]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 11]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 12]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 13]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 14]] + هچپه…­è؟›هˆ¶ه€¼[وœ¬هœ°ه€¼114[هپڈç§» + 15]]).toLowerCase();
  if (!وک¯هگ¦وœ‰و•ˆو ¼ه¼ڈ(و ‡è¯†)) throw new TypeError(é”™è¯¯_و— و•ˆو ‡è¯†ه­—ç¬¦ن¸²);
  return و ‡è¯†;
}
async function èژ·هڈ–ه€¼è§£و‍گو–°هœ°ه‌€هˆ—è،¨() {
  const ç½‘ه‌€113 = ن¼کé€‰هœ°ه‌€و؛گ;
  try {
    const ç½‘ه‌€هˆ—è،¨112 = ç½‘ه‌€113.includes(',') ? ç½‘ه‌€113.split(',').map(ç½‘ه‌€ه€¼111 => ç½‘ه‌€ه€¼111.trim()).filter(ç½‘ه‌€ه€¼ => ç½‘ه‌€ه€¼) : [ç½‘ه‌€113];
    const وژ¥هڈ£ç»“و‍œهˆ—è،¨ = await èژ·هڈ–ن¼کé€‰وژ¥هڈ£(ç½‘ه‌€هˆ—è،¨112, '443', 5000);
    if (وژ¥هڈ£ç»“و‍œهˆ—è،¨.length > 0) {
      const ç»“و‍œهˆ—è،¨110 = [];
      const و­£هˆ™ = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
      for (const é،¹ç›®109 of وژ¥هڈ£ç»“و‍œهˆ—è،¨) {
        const وœ¬هœ°ه€¼108 = é،¹ç›®109.match(و­£هˆ™);
        if (وœ¬هœ°ه€¼108) {
          ç»“و‍œهˆ—è،¨110.push({
            ip: وœ¬هœ°ه€¼108[1],
            port: parseInt(وœ¬هœ°ه€¼108[2] || '443', 10),
            name: وœ¬هœ°ه€¼108[3]?.trim() || وœ¬هœ°ه€¼108[1]
          });
        }
      }
      return ç»“و‍œهˆ—è،¨110;
    }
    const ه“چه؛”107 = await fetch(ç½‘ه‌€113);
    if (!ه“چه؛”107.ok) return [];
    const و–‡وœ¬106 = await ه“چه؛”107.text();
    const ç»“و‍œهˆ—è،¨105 = [];
    const è،Œهˆ—è،¨104 = و–‡وœ¬106.trim().replace(/\r/g, "").split('\n');
    const ه€¼و­£هˆ™ = /^([^:]+):(\d+)#(.*)$/;
    for (const è،Œ103 of è،Œهˆ—è،¨104) {
      const ه€¼è،Œ = è،Œ103.trim();
      if (!ه€¼è،Œ) continue;
      const وœ¬هœ°ه€¼102 = ه€¼è،Œ.match(ه€¼و­£هˆ™);
      if (وœ¬هœ°ه€¼102) {
        ç»“و‍œهˆ—è،¨105.push({
          ip: وœ¬هœ°ه€¼102[1],
          port: parseInt(وœ¬هœ°ه€¼102[2], 10),
          name: وœ¬هœ°ه€¼102[3].trim() || وœ¬هœ°ه€¼102[1]
        });
      }
    }
    return ç»“و‍œهˆ—è،¨105;
  } catch (é”™è¯¯101) {
    return [];
  }
}
function ç”ںوˆگé“¾وژ¥هˆ—è،¨و‌¥و؛گو–°هœ°ه‌€هˆ—è،¨(هˆ—è،¨100, ç”¨وˆ·99, ه·¥ن½œه™¨هںںهگچ98, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®97 = null, è·³è؟‡ç¼–هڈ·96 = false, هˆ«هگچه‘½هگچه™¨95 = null) {
  const ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£94 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£93 = [443, 2053, 2083, 2087, 2096, 8443];
  const é“¾وژ¥هˆ—è،¨92 = [];
  const ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„91 = '/?ed=2048';
  const هچڈè®® = atob('dmxlc3M=');
  const هˆ¶ن½œèٹ‚ç‚¹هگچç§°90 = هˆ«هگچه‘½هگچه™¨95 || هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·96);
  for (const é،¹ç›®89 of هˆ—è،¨100) {
    const ç«¯هڈ£88 = é،¹ç›®89.port;
    const ه®‰ه…¨هœ°ه‌€87 = é،¹ç›®89.ip.includes(':') ? `[${é،¹ç›®89.ip}]` : é،¹ç›®89.ip;
    if (ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£93.includes(ç«¯هڈ£88)) {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°86 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°90(é،¹ç›®89);
      let é“¾وژ¥85 = `${هچڈè®®}://${ç”¨وˆ·99}@${ه®‰ه…¨هœ°ه‌€87}:${ç«¯هڈ£88}?encryption=none&security=tls&sni=${ه·¥ن½œه™¨هںںهگچ98}&fp=${هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ ? 'chrome' : 'randomized'}&type=ws&host=${ه·¥ن½œه™¨هںںهگچ98}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„91}`;
      if (è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†) é“¾وژ¥85 += `&alpn=${encodeURIComponent(è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†)}`;

      // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
      if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        const هںںهگچç³»ç»ںه€¼84 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ83 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        é“¾وژ¥85 += `&ech=${encodeURIComponent(`${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ83}+${هںںهگچç³»ç»ںه€¼84}`)}`;
      }
      é“¾وژ¥85 += `#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°86)}`;
      é“¾وژ¥هˆ—è،¨92.push(é“¾وژ¥85);
    } else if (ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£94.includes(ç«¯هڈ£88)) {
      if (!ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨) {
        const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°82 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°90(é،¹ç›®89);
        const é“¾وژ¥81 = `${هچڈè®®}://${ç”¨وˆ·99}@${ه®‰ه…¨هœ°ه‌€87}:${ç«¯هڈ£88}?encryption=none&security=none&type=ws&host=${ه·¥ن½œه™¨هںںهگچ98}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„91}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°82)}`;
        é“¾وژ¥هˆ—è،¨92.push(é“¾وژ¥81);
      }
    } else {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°80 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°90(é،¹ç›®89);
      let é“¾وژ¥79 = `${هچڈè®®}://${ç”¨وˆ·99}@${ه®‰ه…¨هœ°ه‌€87}:${ç«¯هڈ£88}?encryption=none&security=tls&sni=${ه·¥ن½œه™¨هںںهگچ98}&fp=${هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ ? 'chrome' : 'randomized'}&type=ws&host=${ه·¥ن½œه™¨هںںهگچ98}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„91}`;
      if (è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†) é“¾وژ¥79 += `&alpn=${encodeURIComponent(è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†)}`;

      // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
      if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        const هںںهگچç³»ç»ںه€¼78 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ77 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        é“¾وژ¥79 += `&ech=${encodeURIComponent(`${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ77}+${هںںهگچç³»ç»ںه€¼78}`)}`;
      }
      é“¾وژ¥79 += `#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°80)}`;
      é“¾وژ¥هˆ—è،¨92.push(é“¾وژ¥79);
    }
  }
  return é“¾وژ¥هˆ—è،¨92;
}
function ç”ںوˆگو‰©ه±•è¶…و–‡وœ¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو؛گ(هˆ—è،¨76, ç”¨وˆ·75, ه·¥ن½œه™¨هںںهگچ74, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½®73 = null, è·³è؟‡ç¼–هڈ·72 = false, هˆ«هگچه‘½هگچه™¨71 = null) {
  const é“¾وژ¥هˆ—è،¨70 = [];
  const èٹ‚ç‚¹è·¯ه¾„ = ç”¨وˆ·75.substring(0, 8);
  const هˆ¶ن½œèٹ‚ç‚¹هگچç§°69 = هˆ«هگچه‘½هگچه™¨71 || هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·72);
  for (const é،¹ç›®68 of هˆ—è،¨76) {
    const ه®‰ه…¨هœ°ه‌€67 = é،¹ç›®68.ip.includes(':') ? `[${é،¹ç›®68.ip}]` : é،¹ç›®68.ip;
    const ç«¯هڈ£66 = é،¹ç›®68.port || 443;
    const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°65 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°69(é،¹ç›®68);
    const هڈ‚و•° = new URLSearchParams({
      encryption: 'none',
      security: 'tls',
      sni: ه·¥ن½œه™¨هںںهگچ74,
      fp: 'chrome',
      type: 'xhttp',
      host: ه·¥ن½œه™¨هںںهگچ74,
      path: `/${èٹ‚ç‚¹è·¯ه¾„}`,
      mode: 'stream-one'
    });
    ه¤„çگ†ه€¼ه؛”ç”¨ه±‚هچڈè®®هچڈه•†ه€¼(هڈ‚و•°);
    if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
      const هںںهگچç³»ç»ںه€¼64 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
      const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ63 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
      هڈ‚و•°.set('ech', `${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ63}+${هںںهگچç³»ç»ںه€¼64}`);
    }
    é“¾وژ¥هˆ—è،¨70.push(`${è§£ç پ64('dmxlc3M6Ly8=')}${ç”¨وˆ·75}@${ه®‰ه…¨هœ°ه‌€67}:${ç«¯هڈ£66}?${هڈ‚و•°.toString()}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°65)}`);
  }
  return é“¾وژ¥هˆ—è،¨70;
}
async function ç”ںوˆگوœ¨é©¬é“¾وژ¥هˆ—è،¨و‌¥و؛گو–°هœ°ه‌€هˆ—è،¨(هˆ—è،¨, ç”¨وˆ·, ه·¥ن½œه™¨هںںهگچ, هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™é…چç½® = null, è·³è؟‡ç¼–هڈ· = false, هˆ«هگچه‘½هگچه™¨ = null) {
  const ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£ = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£ = [443, 2053, 2083, 2087, 2096, 8443];
  const é“¾وژ¥هˆ—è،¨ = [];
  const ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„ = '/?ed=2048';
  const ه¯†ç پ = ن¼ è¾“è·¯ه¾„ || ç”¨وˆ·;
  const هˆ¶ن½œèٹ‚ç‚¹هگچç§° = هˆ«هگچه‘½هگچه™¨ || هˆ›ه»؛ه€¼èٹ‚ç‚¹ه‘½هگچه™¨(è·³è؟‡ç¼–هڈ·);
  for (const é،¹ç›®62 of هˆ—è،¨) {
    const ç«¯هڈ£61 = é،¹ç›®62.port;
    const ه®‰ه…¨هœ°ه‌€ = é،¹ç›®62.ip.includes(':') ? `[${é،¹ç›®62.ip}]` : é،¹ç›®62.ip;
    if (ن؛‘ه¢™ه®‰ه…¨è¶…و–‡وœ¬ç«¯هڈ£.includes(ç«¯هڈ£61)) {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°60 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°(é،¹ç›®62);
      let é“¾وژ¥59 = `${atob('dHJvamFuOi8v')}${ه¯†ç پ}@${ه®‰ه…¨هœ°ه‌€}:${ç«¯هڈ£61}?security=tls&sni=${ه·¥ن½œه™¨هںںهگچ}&fp=chrome&type=ws&host=${ه·¥ن½œه™¨هںںهگچ}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„}`;
      if (è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†) é“¾وژ¥59 += `&alpn=${encodeURIComponent(è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†)}`;

      // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
      if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        const هںںهگچç³»ç»ںه€¼58 = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ57 = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        é“¾وژ¥59 += `&ech=${encodeURIComponent(`${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ57}+${هںںهگچç³»ç»ںه€¼58}`)}`;
      }
      é“¾وژ¥59 += `#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°60)}`;
      é“¾وژ¥هˆ—è،¨.push(é“¾وژ¥59);
    } else if (ن؛‘ه¢™è¶…و–‡وœ¬ç«¯هڈ£.includes(ç«¯هڈ£61)) {
      if (!ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨) {
        const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°56 = هˆ¶ن½œèٹ‚ç‚¹هگچç§°(é،¹ç›®62);
        const é“¾وژ¥55 = `${atob('dHJvamFuOi8v')}${ه¯†ç پ}@${ه®‰ه…¨هœ°ه‌€}:${ç«¯هڈ£61}?security=none&type=ws&host=${ه·¥ن½œه™¨هںںهگچ}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„}#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°56)}`;
        é“¾وژ¥هˆ—è،¨.push(é“¾وژ¥55);
      }
    } else {
      const ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§° = هˆ¶ن½œèٹ‚ç‚¹هگچç§°(é،¹ç›®62);
      let é“¾وژ¥ = `${atob('dHJvamFuOi8v')}${ه¯†ç پ}@${ه®‰ه…¨هœ°ه‌€}:${ç«¯هڈ£61}?security=tls&sni=${ه·¥ن½œه™¨هںںهگچ}&fp=chrome&type=ws&host=${ه·¥ن½œه™¨هںںهگچ}&path=${ç½‘é،µه¥—وژ¥ه­—è·¯ه¾„}`;
      if (è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†) é“¾وژ¥ += `&alpn=${encodeURIComponent(è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•†)}`;

      // ه¦‚و‍œهگ¯ç”¨ن؛†ECHï¼Œو·»هٹ echهڈ‚و•°ï¼ˆECHéœ€è¦پن¼ھè£…وˆگChromeوµڈè§ˆه™¨ï¼‰
      if (هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™) {
        const هںںهگچç³»ç»ںه€¼ = è‡ھه®ڑن¹‰هںںهگچç³»ç»ں || 'https://223.5.5.5/dns-query';
        const هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ = è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ || 'cloudflare-ech.com';
        é“¾وژ¥ += `&ech=${encodeURIComponent(`${هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ}+${هںںهگچç³»ç»ںه€¼}`)}`;
      }
      é“¾وژ¥ += `#${encodeURIComponent(ç½‘é،µه¥—وژ¥ه­—èٹ‚ç‚¹هگچç§°)}`;
      é“¾وژ¥هˆ—è،¨.push(é“¾وژ¥);
    }
  }
  return é“¾وژ¥هˆ—è،¨;
}
async function ه¤„çگ†é…چç½®وژ¥هڈ£(è¯·و±‚54, çژ¯ه¢ƒه€¼ = {}) {
  if (è¯·و±‚54.method === 'GET') {
    if (!é”®ه€¼ه­که‚¨) {
      return new Response(JSON.stringify({
        error: 'KVه­که‚¨وœھé…چç½®',
        kvEnabled: false
      }), {
        status: 503,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    return new Response(JSON.stringify({
      ...èژ·هڈ–وœ‰و•ˆé…چç½®ه؟«ç…§(çژ¯ه¢ƒه€¼),
      kvEnabled: true
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else if (è¯·و±‚54.method === 'POST') {
    if (!é”®ه€¼ه­که‚¨) {
      return new Response(JSON.stringify({
        success: false,
        message: 'KVه­که‚¨وœھé…چç½®ï¼Œو— و³•ن؟‌ه­کé…چç½®'
      }), {
        status: 503,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    try {
      const و–°é…چç½® = await è¯·و±‚54.json();
      for (const [é”®, ه€¼] of Object.entries(و–°é…چç½®)) {
        if (ه€¼ === '' || ه€¼ === null || ه€¼ === undefined) {
          delete é”®ه€¼é…چç½®[é”®];
        } else {
          é”®ه€¼é…چç½®[é”®] = ه€¼;
        }
      }
      await ن؟‌ه­کé”®ه€¼é…چç½®();
      و›´و–°é…چç½®ه€¼();
      if (و–°é…چç½®.yx !== undefined) {
        و›´و–°è‡ھه®ڑن¹‰ن¼کé€‰و‌¥و؛گه€¼();
      }
      return new Response(JSON.stringify({
        success: true,
        message: 'é…چç½®ه·²ن؟‌ه­ک',
        config: èژ·هڈ–وœ‰و•ˆé…چç½®ه؟«ç…§(çژ¯ه¢ƒه€¼)
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (é”™è¯¯53) {
      return new Response(JSON.stringify({
        success: false,
        message: 'ن؟‌ه­کé…چç½®ه¤±è´¥: ' + é”™è¯¯53.message
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  return new Response(JSON.stringify({
    error: 'Method not allowed'
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
async function ه¤„çگ†ن¼کé€‰هœ°ه‌€هˆ—è،¨وژ¥هڈ£(è¯·و±‚) {
  if (!é”®ه€¼ه­که‚¨) {
    return new Response(JSON.stringify({
      success: false,
      error: 'KVه­که‚¨وœھé…چç½®',
      message: 'éœ€è¦پé…چç½®KVه­که‚¨و‰چèƒ½ن½؟ç”¨و­¤هٹںèƒ½'
    }), {
      status: 503,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const وœ¬هœ°ه€¼52 = èژ·هڈ–é…چç½®ه€¼('ae', '') === 'yes';
  if (!وœ¬هœ°ه€¼52) {
    return new Response(JSON.stringify({
      success: false,
      error: 'APIهٹںèƒ½وœھهگ¯ç”¨',
      message: 'ه‡؛ن؛ژه®‰ه…¨è€ƒè™‘ï¼Œن¼کé€‰IP APIهٹںèƒ½é»کè®¤ه…³é—­م€‚è¯·هœ¨é…چç½®ç®،çگ†é،µé‌¢ه¼€هگ¯"ه…پè®¸APIç®،çگ†"é€‰é،¹هگژن½؟ç”¨م€‚'
    }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  try {
    if (è¯·و±‚.method === 'GET') {
      const ه€¼ه€¼51 = èژ·هڈ–é…چç½®ه€¼('yx', '');
      const وœ¬هœ°ه€¼50 = è§£و‍گه€¼ه€¼و•°ç»„(ه€¼ه€¼51);
      return new Response(JSON.stringify({
        success: true,
        count: وœ¬هœ°ه€¼50.length,
        data: وœ¬هœ°ه€¼50
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else if (è¯·و±‚.method === 'POST') {
      const ن¸»ن½“49 = await è¯·و±‚.json();
      const هœ°ه‌€هˆ—è،¨ه€¼و·»هٹ  = Array.isArray(ن¸»ن½“49) ? ن¸»ن½“49 : [ن¸»ن½“49];
      if (هœ°ه‌€هˆ—è،¨ه€¼و·»هٹ .length === 0) {
        return new Response(JSON.stringify({
          success: false,
          error: 'è¯·و±‚و•°وچ®ن¸؛ç©؛',
          message: 'è¯·وڈگن¾›IPو•°وچ®'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const ه€¼ه€¼48 = èژ·هڈ–é…چç½®ه€¼('yx', '');
      let وœ¬هœ°ه€¼47 = è§£و‍گه€¼ه€¼و•°ç»„(ه€¼ه€¼48);
      const ه€¼هœ°ه‌€هˆ—è،¨46 = [];
      const ه€¼هœ°ه‌€هˆ—è،¨45 = [];
      const é”™è¯¯هˆ—è،¨ = [];
      for (const é،¹ç›®44 of هœ°ه‌€هˆ—è،¨ه€¼و·»هٹ ) {
        if (!é،¹ç›®44.ip) {
          é”™è¯¯هˆ—è،¨.push({
            ip: 'وœھçں¥',
            reason: 'IPهœ°ه‌€وک¯ه؟…éœ€çڑ„'
          });
          continue;
        }
        const ç«¯هڈ£43 = é،¹ç›®44.port || 443;
        const هگچç§° = é،¹ç›®44.name || `APIن¼کé€‰-${é،¹ç›®44.ip}:${ç«¯هڈ£43}`;
        if (!وک¯هگ¦وœ‰و•ˆهœ°ه‌€(é،¹ç›®44.ip) && !وک¯هگ¦وœ‰و•ˆهںںهگچ(é،¹ç›®44.ip)) {
          é”™è¯¯هˆ—è،¨.push({
            ip: é،¹ç›®44.ip,
            reason: 'و— و•ˆçڑ„IPوˆ–هںںهگچو ¼ه¼ڈ'
          });
          continue;
        }
        const وœ¬هœ°ه€¼42 = وœ¬هœ°ه€¼47.some(ه€¼é،¹ç›® => ه€¼é،¹ç›®.ip === é،¹ç›®44.ip && ه€¼é،¹ç›®.port === ç«¯هڈ£43);
        if (وœ¬هœ°ه€¼42) {
          ه€¼هœ°ه‌€هˆ—è،¨45.push({
            ip: é،¹ç›®44.ip,
            port: ç«¯هڈ£43,
            reason: 'ه·²ه­کهœ¨'
          });
          continue;
        }
        const و–°هœ°ه‌€ = {
          ip: é،¹ç›®44.ip,
          port: ç«¯هڈ£43,
          name: هگچç§°,
          addedAt: new Date().toISOString()
        };
        وœ¬هœ°ه€¼47.push(و–°هœ°ه‌€);
        ه€¼هœ°ه‌€هˆ—è،¨46.push(و–°هœ°ه‌€);
      }
      if (ه€¼هœ°ه‌€هˆ—è،¨46.length > 0) {
        const و–°ه€¼ه€¼41 = ه¤„çگ†و•°ç»„ه€¼ه€¼(وœ¬هœ°ه€¼47);
        await è®¾ç½®é…چç½®ه€¼('yx', و–°ه€¼ه€¼41);
        و›´و–°è‡ھه®ڑن¹‰ن¼کé€‰و‌¥و؛گه€¼();
      }
      return new Response(JSON.stringify({
        success: ه€¼هœ°ه‌€هˆ—è،¨46.length > 0,
        message: `وˆگهٹںو·»هٹ  ${ه€¼هœ°ه‌€هˆ—è،¨46.length} ن¸ھIP`,
        added: ه€¼هœ°ه‌€هˆ—è،¨46.length,
        skipped: ه€¼هœ°ه‌€هˆ—è،¨45.length,
        errors: é”™è¯¯هˆ—è،¨.length,
        data: {
          addedIPs: ه€¼هœ°ه‌€هˆ—è،¨46,
          skippedIPs: ه€¼هœ°ه‌€هˆ—è،¨45.length > 0 ? ه€¼هœ°ه‌€هˆ—è،¨45 : undefined,
          errors: é”™è¯¯هˆ—è،¨.length > 0 ? é”™è¯¯هˆ—è،¨ : undefined
        }
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else if (è¯·و±‚.method === 'DELETE') {
      const ن¸»ن½“ = await è¯·و±‚.json();
      if (ن¸»ن½“.all === true) {
        const ه€¼ه€¼40 = èژ·هڈ–é…چç½®ه€¼('yx', '');
        const وœ¬هœ°ه€¼39 = è§£و‍گه€¼ه€¼و•°ç»„(ه€¼ه€¼40);
        const ه€¼و•°é‡ڈ = وœ¬هœ°ه€¼39.length;
        await è®¾ç½®é…چç½®ه€¼('yx', '');
        و›´و–°è‡ھه®ڑن¹‰ن¼کé€‰و‌¥و؛گه€¼();
        return new Response(JSON.stringify({
          success: true,
          message: `ه·²و¸…ç©؛و‰€وœ‰ن¼کé€‰IPï¼Œه…±هˆ é™¤ ${ه€¼و•°é‡ڈ} ن¸ھ`,
          deletedCount: ه€¼و•°é‡ڈ
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (!ن¸»ن½“.ip) {
        return new Response(JSON.stringify({
          success: false,
          error: 'IPهœ°ه‌€وک¯ه؟…éœ€çڑ„',
          message: 'è¯·وڈگن¾›è¦پهˆ é™¤çڑ„ipه­—و®µï¼Œوˆ–ن½؟ç”¨ {"all": true} و¸…ç©؛و‰€وœ‰'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const ç«¯هڈ£38 = ن¸»ن½“.port || 443;
      const ه€¼ه€¼37 = èژ·هڈ–é…چç½®ه€¼('yx', '');
      let وœ¬هœ°ه€¼36 = è§£و‍گه€¼ه€¼و•°ç»„(ه€¼ه€¼37);
      const ه€¼é•؟ه؛¦ = وœ¬هœ°ه€¼36.length;
      const ه€¼هœ°ه‌€هˆ—è،¨ = وœ¬هœ°ه€¼36.filter(é،¹ç›®35 => !(é،¹ç›®35.ip === ن¸»ن½“.ip && é،¹ç›®35.port === ç«¯هڈ£38));
      if (ه€¼هœ°ه‌€هˆ—è،¨.length === ه€¼é•؟ه؛¦) {
        return new Response(JSON.stringify({
          success: false,
          error: 'ن¼کé€‰IPن¸چه­کهœ¨',
          message: `${ن¸»ن½“.ip}:${ç«¯هڈ£38} وœھو‰¾هˆ°`
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const و–°ه€¼ه€¼ = ه¤„çگ†و•°ç»„ه€¼ه€¼(ه€¼هœ°ه‌€هˆ—è،¨);
      await è®¾ç½®é…چç½®ه€¼('yx', و–°ه€¼ه€¼);
      و›´و–°è‡ھه®ڑن¹‰ن¼کé€‰و‌¥و؛گه€¼();
      return new Response(JSON.stringify({
        success: true,
        message: 'ن¼کé€‰IPه·²هˆ é™¤',
        deleted: {
          ip: ن¸»ن½“.ip,
          port: ç«¯هڈ£38
        }
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'ن¸چو”¯وŒپçڑ„è¯·و±‚و–¹و³•',
        message: 'و”¯وŒپçڑ„و–¹و³•: GET, POST, DELETE'
      }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (é”™è¯¯34) {
    return new Response(JSON.stringify({
      success: false,
      error: 'ه¤„çگ†è¯·و±‚ه¤±è´¥',
      message: é”™è¯¯34.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
function و›´و–°é…چç½®ه€¼() {
  const وœ‰و•ˆé…چç½® = èژ·هڈ–وœ‰و•ˆé…چç½®ه؟«ç…§();
  const و‰‹هٹ¨هœ°هŒ؛ = وœ‰و•ˆé…چç½®.wk;
  if (و‰‹هٹ¨هœ°هŒ؛ && و‰‹هٹ¨هœ°هŒ؛.trim()) {
    و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛ = و‰‹هٹ¨هœ°هŒ؛.trim().toUpperCase();
    ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛;
  } else {
    const وœ¬هœ°ه€¼ = وœ‰و•ˆé…چç½®.p;
    if (وœ¬هœ°ه€¼ && وœ¬هœ°ه€¼.trim()) {
      ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = 'CUSTOM';
    } else {
      و‰‹هٹ¨ه·¥ن½œه™¨هœ°هŒ؛ = '';
      ه½“ه‰چه·¥ن½œه™¨هœ°هŒ؛ = '';
    }
  }
  هگ¯ç”¨هœ°هŒ؛هŒ¹é…چ = !(وœ‰و•ˆé…چç½®.rm && وœ‰و•ˆé…چç½®.rm.toLowerCase() === 'no');
  هگ¯ç”¨وکژو–‡ = وœ‰و•ˆé…چç½®.ev === 'yes';
  هگ¯ç”¨وœ¨é©¬ = وœ‰و•ˆé…چç½®.et === 'yes';
  هگ¯ç”¨و‰©ه±•ن¼ è¾“ = وœ‰و•ˆé…چç½®.ex === 'yes';
  ن¼ è¾“è·¯ه¾„ = وœ‰و•ˆé…چç½®.tp || '';
  è®¢éک…è½¬وچ¢وژ¥هڈ£ = وœ‰و•ˆé…چç½®.scu || é…چç½®é»کè®¤ه€¼.scu;
  هگ¯ç”¨ن¼کé€‰هںںهگچ = وœ‰و•ˆé…چç½®.epd === 'yes';
  هگ¯ç”¨ن¼کé€‰هœ°ه‌€ = وœ‰و•ˆé…چç½®.epi === 'yes';
  هگ¯ç”¨ن»“ه؛“ن¼کé€‰ = وœ‰و•ˆé…چç½®.egi === 'yes';
  هگ¯ç”¨هژںç”ںهœ°ه‌€ = وœ‰و•ˆé…چç½®.ena === 'yes';
  هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™ = وœ‰و•ˆé…چç½®.ech === 'yes';
  è‡ھه®ڑن¹‰هںںهگچç³»ç»ں = وœ‰و•ˆé…چç½®.customDNS || é…چç½®é»کè®¤ه€¼.customDNS;
  è‡ھه®ڑن¹‰هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™هںںهگچ = وœ‰و•ˆé…چç½®.customECHDomain || é…چç½®é»کè®¤ه€¼.customECHDomain;
  è‡ھه®ڑن¹‰ه؛”ç”¨ه±‚هچڈè®®هچڈه•† = è§„èŒƒهŒ–ه؛”ç”¨ه±‚هچڈè®®هچڈه•†(وœ‰و•ˆé…چç½®.alpn || '');
  ç¦پç”¨é‌‍ن¼ è¾“ه±‚ه®‰ه…¨ = وœ‰و•ˆé…چç½®.dkby === 'yes' || هگ¯ç”¨هٹ ه¯†ه®¢وˆ·ç«¯é—®ه€™;
  هگ¯ç”¨ن»£çگ†é™چç؛§ = !!(وœ‰و•ˆé…چç½®.qj && وœ‰و•ˆé…چç½®.qj.toLowerCase() === 'no');
  è‡ھه®ڑن¹‰è·¯ه¾„ = وœ‰و•ˆé…چç½®.d || '';
  ن¼کé€‰هœ°ه‌€و؛گ = وœ‰و•ˆé…چç½®.yxURL || '';
  ه›‍é€€هœ°ه‌€ = وœ‰و•ˆé…چç½®.p ? وœ‰و•ˆé…چç½®.p.trim() : '';
  ن»£çگ†5é…چç½® = وœ‰و•ˆé…چç½®.s || '';
  if (ن»£çگ†5é…چç½®) {
    try {
      ه·²è§£و‍گن»£çگ†5é…چç½® = è§£و‍گن»£çگ†é…چç½®(ن»£çگ†5é…چç½®);
      وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = true;
    } catch (é”™è¯¯31) {
      وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = false;
    }
  } else {
    ه·²è§£و‍گن»£çگ†5é…چç½® = {};
    وک¯هگ¦ن»£çگ†ه·²هگ¯ç”¨ = false;
  }
  ç¦پç”¨ن¼کé€‰ = !!(وœ‰و•ˆé…چç½®.yxby && وœ‰و•ˆé…چç½®.yxby.toLowerCase() === 'yes');
}
function و›´و–°è‡ھه®ڑن¹‰ن¼کé€‰و‌¥و؛گه€¼() {
  const ه€¼ه€¼30 = èژ·هڈ–é…چç½®ه€¼('yx', '');
  if (ه€¼ه€¼30) {
    try {
      const ن¼کé€‰هˆ—è،¨ = ه€¼ه€¼30.split(',').map(é،¹ç›®29 => é،¹ç›®29.trim()).filter(é،¹ç›®28 => é،¹ç›®28);
      è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
      è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
      ن¼کé€‰هˆ—è،¨.forEach(é،¹ç›®27 => {
        let èٹ‚ç‚¹هگچç§°26 = '';
        let هœ°ه‌€éƒ¨هˆ†25 = é،¹ç›®27;
        if (é،¹ç›®27.includes('#')) {
          const éƒ¨هˆ†هˆ—è،¨24 = é،¹ç›®27.split('#');
          هœ°ه‌€éƒ¨هˆ†25 = éƒ¨هˆ†هˆ—è،¨24[0].trim();
          èٹ‚ç‚¹هگچç§°26 = éƒ¨هˆ†هˆ—è،¨24[1].trim();
        }
        const {
          address: هœ°ه‌€23,
          port: ç«¯هڈ£22
        } = è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(هœ°ه‌€éƒ¨هˆ†25);
        if (!èٹ‚ç‚¹هگچç§°26) {
          èٹ‚ç‚¹هگچç§°26 = 'è‡ھه®ڑن¹‰ن¼کé€‰-' + هœ°ه‌€23 + (ç«¯هڈ£22 ? ':' + ç«¯هڈ£22 : '');
        }
        if (وک¯هگ¦وœ‰و•ˆهœ°ه‌€(هœ°ه‌€23)) {
          è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨.push({
            ip: هœ°ه‌€23,
            port: ç«¯هڈ£22,
            isp: èٹ‚ç‚¹هگچç§°26
          });
        } else {
          è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨.push({
            domain: هœ°ه‌€23,
            port: ç«¯هڈ£22,
            name: èٹ‚ç‚¹هگچç§°26
          });
        }
      });
    } catch (é”™è¯¯) {
      è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
      è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
    }
  } else {
    è‡ھه®ڑن¹‰ن¼کé€‰هœ°ه‌€هˆ—è،¨ = [];
    è‡ھه®ڑن¹‰ن¼کé€‰هںںهگچهˆ—è،¨ = [];
  }
}
function è§£و‍گه€¼ه€¼و•°ç»„(ه€¼ه€¼) {
  if (!ه€¼ه€¼ || !ه€¼ه€¼.trim()) return [];
  const é،¹ç›®هˆ—è،¨ = ه€¼ه€¼.split(',').map(é،¹ç›®21 => é،¹ç›®21.trim()).filter(é،¹ç›®20 => é،¹ç›®20);
  const ç»“و‍œ = [];
  for (const é،¹ç›®19 of é،¹ç›®هˆ—è،¨) {
    let èٹ‚ç‚¹هگچç§° = '';
    let هœ°ه‌€éƒ¨هˆ† = é،¹ç›®19;
    if (é،¹ç›®19.includes('#')) {
      const éƒ¨هˆ†هˆ—è،¨ = é،¹ç›®19.split('#');
      هœ°ه‌€éƒ¨هˆ† = éƒ¨هˆ†هˆ—è،¨[0].trim();
      èٹ‚ç‚¹هگچç§° = éƒ¨هˆ†هˆ—è،¨[1].trim();
    }
    const {
      address: هœ°ه‌€,
      port: ç«¯هڈ£18
    } = è§£و‍گهœ°ه‌€ه€¼ç«¯هڈ£(هœ°ه‌€éƒ¨هˆ†);
    if (!èٹ‚ç‚¹هگچç§°) {
      èٹ‚ç‚¹هگچç§° = هœ°ه‌€ + (ç«¯هڈ£18 ? ':' + ç«¯هڈ£18 : '');
    }
    ç»“و‍œ.push({
      ip: هœ°ه‌€,
      port: ç«¯هڈ£18 || 443,
      name: èٹ‚ç‚¹هگچç§°,
      addedAt: new Date().toISOString()
    });
  }
  return ç»“و‍œ;
}
function ه¤„çگ†و•°ç»„ه€¼ه€¼(و•°ç»„) {
  if (!و•°ç»„ || و•°ç»„.length === 0) return '';
  return و•°ç»„.map(é،¹ç›® => {
    const ç«¯هڈ£17 = é،¹ç›®.port || 443;
    return `${é،¹ç›®.ip}:${ç«¯هڈ£17}#${é،¹ç›®.name}`;
  }).join(',');
}
function وک¯هگ¦وœ‰و•ˆهںںهگچ(هںںهگچ) {
  const هںںهگچو­£هˆ™ = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  return هںںهگچو­£هˆ™.test(هںںهگچ);
}
async function è§£و‍گو–‡وœ¬ه€¼و•°ç»„(ه†…ه®¹) {
  var ه·²ه¤„çگ† = ه†…ه®¹.replace(/[	"'\r\n]+/g, ',').replace(/,+/g, ',');
  if (ه·²ه¤„çگ†.charAt(0) == ',') ه·²ه¤„çگ† = ه·²ه¤„çگ†.slice(1);
  if (ه·²ه¤„çگ†.charAt(ه·²ه¤„çگ†.length - 1) == ',') ه·²ه¤„çگ† = ه·²ه¤„çگ†.slice(0, ه·²ه¤„çگ†.length - 1);
  return ه·²ه¤„çگ†.split(',');
}
async function èژ·هڈ–ن¼کé€‰وژ¥هڈ£(ç½‘ه‌€هˆ—è،¨, é»کè®¤ç«¯هڈ£ = '443', è¶…و—¶ = 3000) {
  if (!ç½‘ه‌€هˆ—è،¨?.length) return [];
  const ç»“و‍œهˆ—è،¨ = new Set();
  await Promise.allSettled(ç½‘ه‌€هˆ—è،¨.map(async ç½‘ه‌€ => {
    try {
      const وژ§هˆ¶ه™¨ = new AbortController();
      const è¶…و—¶و ‡è¯† = setTimeout(() => وژ§هˆ¶ه™¨.abort(), è¶…و—¶);
      const ه“چه؛” = await fetch(ç½‘ه‌€, {
        signal: وژ§هˆ¶ه™¨.signal
      });
      clearTimeout(è¶…و—¶و ‡è¯†);
      let و–‡وœ¬ = '';
      try {
        const ç¼“ه†² = await ه“چه؛”.arrayBuffer();
        const ه†…ه®¹ç±»ه‍‹ = (ه“چه؛”.headers.get('content-type') || '').toLowerCase();
        const ه­—ç¬¦é›† = ه†…ه®¹ç±»ه‍‹.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || '';
        let è§£ç په™¨هˆ—è،¨ = ['utf-8', 'gb2312'];
        if (ه­—ç¬¦é›†.includes('gb') || ه­—ç¬¦é›†.includes('gbk') || ه­—ç¬¦é›†.includes('gb2312')) {
          è§£ç په™¨هˆ—è،¨ = ['gb2312', 'utf-8'];
        }
        let è§£ç پوˆگهٹں = false;
        for (const è§£ç په™¨ of è§£ç په™¨هˆ—è،¨) {
          try {
            const ه·²è§£ç پ = new TextDecoder(è§£ç په™¨).decode(ç¼“ه†²);
            if (ه·²è§£ç پ && ه·²è§£ç پ.length > 0 && !ه·²è§£ç پ.includes('\ufffd')) {
              و–‡وœ¬ = ه·²è§£ç پ;
              è§£ç پوˆگهٹں = true;
              break;
            } else if (ه·²è§£ç پ && ه·²è§£ç پ.length > 0) {
              continue;
            }
          } catch (ن؛‹ن»¶ه€¼16) {
            continue;
          }
        }
        if (!è§£ç پوˆگهٹں) {
          و–‡وœ¬ = await ه“چه؛”.text();
        }
        if (!و–‡وœ¬ || و–‡وœ¬.trim().length === 0) {
          return;
        }
      } catch (ن؛‹ن»¶ه€¼15) {
        return;
      }
      const è،Œهˆ—è،¨ = و–‡وœ¬.trim().split('\n').map(è،Œه€¼14 => è،Œه€¼14.trim()).filter(è،Œه€¼ => è،Œه€¼);
      const وک¯هگ¦ه€¼ = è،Œهˆ—è،¨.length > 1 && è،Œهˆ—è،¨[0].includes(',');
      const ه…­ç‰ˆهœ°ه‌€و¨،ه¼ڈ = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
      if (!وک¯هگ¦ه€¼) {
        è،Œهˆ—è،¨.forEach(è،Œ13 => {
          const ن؛•هڈ·ç´¢ه¼• = è،Œ13.indexOf('#');
          const [ن¸»وœ؛éƒ¨هˆ†, ه¤‡و³¨] = ن؛•هڈ·ç´¢ه¼• > -1 ? [è،Œ13.substring(0, ن؛•هڈ·ç´¢ه¼•), è،Œ13.substring(ن؛•هڈ·ç´¢ه¼•)] : [è،Œ13, ''];
          let وک¯هگ¦وœ‰ç«¯هڈ£ = false;
          if (ن¸»وœ؛éƒ¨هˆ†.startsWith('[')) {
            وک¯هگ¦وœ‰ç«¯هڈ£ = /\]:(\d+)$/.test(ن¸»وœ؛éƒ¨هˆ†);
          } else {
            const ه€¼ç´¢ه¼• = ن¸»وœ؛éƒ¨هˆ†.lastIndexOf(':');
            وک¯هگ¦وœ‰ç«¯هڈ£ = ه€¼ç´¢ه¼• > -1 && /^\d+$/.test(ن¸»وœ؛éƒ¨هˆ†.substring(ه€¼ç´¢ه¼• + 1));
          }
          const ç«¯هڈ£12 = new URL(ç½‘ه‌€).searchParams.get('port') || é»کè®¤ç«¯هڈ£;
          ç»“و‍œهˆ—è،¨.add(وک¯هگ¦وœ‰ç«¯هڈ£ ? è،Œ13 : `${ن¸»وœ؛éƒ¨هˆ†}:${ç«¯هڈ£12}${ه¤‡و³¨}`);
        });
      } else {
        const ه¤´éƒ¨هˆ—è،¨ = è،Œهˆ—è،¨[0].split(',').map(ه¤´ه€¼11 => ه¤´ه€¼11.trim());
        const و•°وچ®è،Œهˆ—è،¨ = è،Œهˆ—è،¨.slice(1);
        if (ه¤´éƒ¨هˆ—è،¨.includes('IPهœ°ه‌€') && ه¤´éƒ¨هˆ—è،¨.includes('ç«¯هڈ£') && ه¤´éƒ¨هˆ—è،¨.includes('و•°وچ®ن¸­ه؟ƒ')) {
          const هœ°ه‌€ç´¢ه¼•10 = ه¤´éƒ¨هˆ—è،¨.indexOf('IPهœ°ه‌€'),
            ç«¯هڈ£ç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.indexOf('ç«¯هڈ£');
          const ه¤‡و³¨ç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.indexOf('ه›½ه®¶') > -1 ? ه¤´éƒ¨هˆ—è،¨.indexOf('ه›½ه®¶') : ه¤´éƒ¨هˆ—è،¨.indexOf('هںژه¸‚') > -1 ? ه¤´éƒ¨هˆ—è،¨.indexOf('هںژه¸‚') : ه¤´éƒ¨هˆ—è،¨.indexOf('و•°وچ®ن¸­ه؟ƒ');
          const ن¼ è¾“ه±‚ه®‰ه…¨ç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.indexOf('TLS');
          و•°وچ®è،Œهˆ—è،¨.forEach(è،Œ9 => {
            const هˆ—هˆ—è،¨8 = è،Œ9.split(',').map(ن¸™ه€¼7 => ن¸™ه€¼7.trim());
            if (ن¼ è¾“ه±‚ه®‰ه…¨ç´¢ه¼• !== -1 && هˆ—هˆ—è،¨8[ن¼ è¾“ه±‚ه®‰ه…¨ç´¢ه¼•]?.toLowerCase() !== 'true') return;
            const هŒ…è£¹هœ°ه‌€6 = ه…­ç‰ˆهœ°ه‌€و¨،ه¼ڈ.test(هˆ—هˆ—è،¨8[هœ°ه‌€ç´¢ه¼•10]) ? `[${هˆ—هˆ—è،¨8[هœ°ه‌€ç´¢ه¼•10]}]` : هˆ—هˆ—è،¨8[هœ°ه‌€ç´¢ه¼•10];
            ç»“و‍œهˆ—è،¨.add(`${هŒ…è£¹هœ°ه‌€6}:${هˆ—هˆ—è،¨8[ç«¯هڈ£ç´¢ه¼•]}#${هˆ—هˆ—è،¨8[ه¤‡و³¨ç´¢ه¼•]}`);
          });
        } else if (ه¤´éƒ¨هˆ—è،¨.some(ه¤´ه€¼5 => ه¤´ه€¼5.includes('IP')) && ه¤´éƒ¨هˆ—è،¨.some(ه¤´ه€¼4 => ه¤´ه€¼4.includes('ه»¶è؟ں')) && ه¤´éƒ¨هˆ—è،¨.some(ه¤´ه€¼3 => ه¤´ه€¼3.includes('ن¸‹è½½é€ںه؛¦'))) {
          const هœ°ه‌€ç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.findIndex(ه¤´ه€¼2 => ه¤´ه€¼2.includes('IP'));
          const ه»¶è؟ںç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.findIndex(ه¤´ه€¼1 => ه¤´ه€¼1.includes('ه»¶è؟ں'));
          const é€ںه؛¦ç´¢ه¼• = ه¤´éƒ¨هˆ—è،¨.findIndex(ه¤´ه€¼ => ه¤´ه€¼.includes('ن¸‹è½½é€ںه؛¦'));
          const ç«¯هڈ£ = new URL(ç½‘ه‌€).searchParams.get('port') || é»کè®¤ç«¯هڈ£;
          و•°وچ®è،Œهˆ—è،¨.forEach(è،Œ => {
            const هˆ—هˆ—è،¨ = è،Œ.split(',').map(ن¸™ه€¼ => ن¸™ه€¼.trim());
            const هŒ…è£¹هœ°ه‌€ = ه…­ç‰ˆهœ°ه‌€و¨،ه¼ڈ.test(هˆ—هˆ—è،¨[هœ°ه‌€ç´¢ه¼•]) ? `[${هˆ—هˆ—è،¨[هœ°ه‌€ç´¢ه¼•]}]` : هˆ—هˆ—è،¨[هœ°ه‌€ç´¢ه¼•];
            ç»“و‍œهˆ—è،¨.add(`${هŒ…è£¹هœ°ه‌€}:${ç«¯هڈ£}#CFن¼کé€‰ ${هˆ—هˆ—è،¨[ه»¶è؟ںç´¢ه¼•]}ms ${هˆ—هˆ—è،¨[é€ںه؛¦ç´¢ه¼•]}MB/s`);
          });
        }
      }
    } catch (ن؛‹ن»¶ه€¼) {}
  }));
  return Array.from(ç»“و‍œهˆ—è،¨);
}
