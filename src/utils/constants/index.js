// const BASE_URL = 'https://api-internmatch.outcome-hub.com';
const BASE_URL = 'http://alyson3.genny.life';
const GET_NEW_JOBS =
  '/qwanda/baseentitys/GRP_NEW_ITEMS/linkcodes/LNK_CORE/attributes?pageStart=0&pageSize=1000';
// const GET_TOKEN_URL = 'https://bouncer.outcome-hub.com/auth/realms/internmatch/protocol/openid-connect/token';
const GET_TOKEN_URL =
  'http://keycloak.genny.life:8180/auth/realms/genny/protocol/openid-connect/token';
const FETCH_IMAGE = id =>
  `qwanda/baseentitys/${id}/linkcodes/LNK_BEG/attributes`;
const SEARCH_BE = '/qwanda/baseentitys/search';
const emailSearchJSON = email => ({
  baseEntityAttributes: [
    {
      baseEntityCode: 'SBE_USER',
      attributeCode: 'PRI_EMAIL',
      attributeName: '=',
      created: '2018-04-26T14:05:06.843',
      valueString: email,
      weight: 1.0,
      inferred: false,
      privacyFlag: false
    }
  ],
  links: [],
  code: 'SBE_USER',
  index: 0,
  created: '2018-04-26T14:05:06.842',
  name: 'List of Users',
  realm: 'genny'
});

const searchBEByAttributesAndValue = ( code, value ) => ({
  realm: 'genny',
  name: 'Get All Industry',
  code: 'SBE_INDUSTRY',
  baseEntityAttributes: [
    {
      baseEntityCode: 'SBE_INDUSTRY',
      attributeCode: code,
      attributeName: 'LIKE',
      valueString: value,
      weight: 1,
      inferred: false,
      privacyFlag: false
    },
    {
      baseEntityCode: 'SBE_INDUSTRY',
      attributeCode: 'SCH_PAGE_SIZE',
      attributeName: 'PageSize',
      valueInteger: 10000,
      weight: 2,
      inferred: false,
      privacyFlag: false
    },
    {
      baseEntityCode: 'SBE_INDUSTRY',
      attributeCode: 'SCH_PAGE_START',
      attributeName: 'PageStart',
      valueInteger: 0,
      weight: 3,
      inferred: false,
      privacyFlag: false
    }
  ]
});

export {
  BASE_URL,
  GET_NEW_JOBS,
  GET_TOKEN_URL,
  FETCH_IMAGE,
  SEARCH_BE,
  emailSearchJSON,
  searchBEByAttributesAndValue
};