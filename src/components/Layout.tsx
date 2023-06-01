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
        <link href="/logo.png" rel="icon" />
        <Script src="https://kit.fontawesome.com/e6ae3fbb74.js" crossOrigin="anonymous"></Script>
      </Head>
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