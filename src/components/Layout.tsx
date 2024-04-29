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
    <div className="flex min-h-screen flex-col">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="en" />
        <link rel="icon" href="https://www.travisdrilling.ca/favicon.ico" />
        <link
          rel="shortcut icon"
          href="https://www.travisdrilling.ca/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
      <main className="flex flex-grow flex-col justify-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
