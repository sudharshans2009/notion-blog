import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    window.addEventListener("load", async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/worker.js");
        } catch (e) {
          console.log("SW registration failed");
        }
      }
    });
    
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link rel="icon" href="/madlad.jpg" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/madlad.jpg"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          <link
            rel="manifest"
            href="/manifest.json"
          ></link>
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
          {CONFIG.naverSearchAdvisor.enable === true && (
            <>
              <meta
                name="naver-site-verification"
                content={CONFIG.naverSearchAdvisor.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
