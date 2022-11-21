import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='pt' x-data="data()">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="/assets/css/styles.css" rel="stylesheet" />
                {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> */}
                {/* <script src="/assets/js/init-alpine.js"></script> */}
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" /> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" defer></script> */}
                {/* <script src="/assets/js/charts-lines.js" defer></script> */}
                {/* <script src="/assets/js/charts-pie.js" defer></script> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}