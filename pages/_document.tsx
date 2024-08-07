import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          src="https://publish.aviou.io/assets/latest-stable/web-component.js"
          strategy="afterInteractive"
        />
      </body>
    </Html>
  );
}
