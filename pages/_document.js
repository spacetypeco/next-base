import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  // Update this with your custom Google Analytics ID
  const GoogleAnalytics = (
    <>
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-[YOURANALYTICSID]"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-[YOURANALYTICSID]');
        `,
        }}
      /> */}
    </>
  );

  return (
    <Html>
      <Head>{GoogleAnalytics}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
