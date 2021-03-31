const withCSS = require("@zeit/next-css")

module.exports = withCSS({
    publicRuntimeConfig: {
        "APP_NAME": "SEOBLOG",
        "APP_DEVELOPMENT": "http://localhost:8000/api/",
        "PRODUCTION": false
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