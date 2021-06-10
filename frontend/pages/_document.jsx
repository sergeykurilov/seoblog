import Document, {Html, Head, Main, NextScript} from 'next/document'
import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();


class MyDocument extends Document {

    setGoogleTags() {
        if (publicRuntimeConfig.PRODUCTION) {
            return {
                html: `window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);} 
                     gtag('js', new Date());
                     gtag('config', 'UA-179619384-1');
                     `
            }
        }
    }


    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/static/css/style.css"/>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/base.min.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/components.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind-dark.min.css"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/utilities.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
                    {/*<script dangerouslySetInnerHTML={this.setGoogleTags()}></script>*/}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
