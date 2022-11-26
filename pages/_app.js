/**
 * @file Defines the wrapping layout for all other pages.
 *
 * We can add shared stylesheets and set the charset here.
 */

import "../styles/base.scss";

import Content from "../content";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{Content.siteName}</title>
        <meta name="description" content={Content.siteDescription} />
        <meta property="og:title" content={Content.siteName} />
        <meta property="og:description" content={Content.siteDescription} />
        <meta property="og:url" content={Content.siteUrl} />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://spacetypeco.com/social_image.png"
        />
        <meta property="twitter:title" content={Content.siteName} />
        <meta property="twitter:description" content={Content.siteDescription} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@spacetypeco" />
        <meta
          property="twitter:image"
          content="https://spacetypeco.com/social_image.png"
        />
        <meta property="twitter:image:alt" content="Space Type logo" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Generate favicons from https://realfavicongenerator.net/ */}
        {/* <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5BBAD5" />
        <meta name="msapplication-TileColor" content="#DA532C" />
        <meta name="theme-color" content="#FFFFFF" /> */}
      </Head>

      <div
        className="flex flex-col justify-start min-h-screen"
        style={{
          backgroundColor: "var(--color-black)",
          transition: "background-color 0.25s",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
