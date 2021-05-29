const withCSS = require("@zeit/next-css")

module.exports = withCSS({
    publicRuntimeConfig: {
        "APP_NAME": "SEOBLOG",
        "APP_DEVELOPMENT": "http://localhost:8000/api/",
        "PRODUCTION": false,
        "DOMAIN_DEVELOPMENT": "http://localhost:3000/",
        "DOMAIN_PRODUCTION": "http/seoblog.com",
        "FB_APP_ID": "1003192733841680",
        DISQUS_SHORTNAME: "spozumi"
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/',
    //             permanent: true,
    //         },
    //     ]
    // },
})
