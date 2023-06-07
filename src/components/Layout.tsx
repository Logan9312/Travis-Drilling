import type { PropsWithChildren } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Script from 'next/script'

interface Props {
  title?: string,
  transparent?: boolean
}

const Layout = (props: PropsWithChildren<Props>) => {

  return (

    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script src="https://kit.fontawesome.com/e6ae3fbb74.js" crossOrigin="anonymous"></Script>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout