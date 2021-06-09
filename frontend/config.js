import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();



export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.PRODUCTION : publicRuntimeConfig.APP_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const DisqusShortname = publicRuntimeConfig.DISQUS_SHORTNAME

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID
export const OAUTH_CLIENT_SECRET = publicRuntimeConfig.OAUTH_CLIENT_SECRET
export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID
