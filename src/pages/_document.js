import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/lyncs-logo-blue.png" sizes="any" />
      </Head>
      <body>
        <script crossorigin src="https://lyncs-web-widget.vercel.app/client.js"></script>
        <Script strategy={'beforeInteractive'} src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
