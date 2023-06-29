import type { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import SchemaOrg from "../components/SchemaOrg";

interface Props {
  transparent?: boolean;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>
          Travis Drilling LTD. | Water Well Drilling and Service | Alberta
        </title>
        <meta
          name="description"
          content="Locally owned water well drilling, servicing, repairing, testing, pump installation, abandonment and shocking."
        />
        <meta property="og:title" content="Travis Drilling LTD." />
        <meta
          property="og:description"
          content="Locally owned water well drilling and servicing. We handle servicing, repairing, and testing wells. We can drill new wells and install pumps or abandon or shock old wells. Travis Drilling is located in Onoway, Alberta, Canada."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/*<link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />*/}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
        <SchemaOrg />
      </Head>
      <Script
        src="https://kit.fontawesome.com/e6ae3fbb74.js"
        crossOrigin="anonymous"
      ></Script>
      <header>
        <Navbar transparent={props.transparent} />
      </header>
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
