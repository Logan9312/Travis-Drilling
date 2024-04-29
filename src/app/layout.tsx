import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import SchemaOrg from "~/components/SchemaOrg";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Travis Drilling LTD. | Water Well Drilling and Service | Alberta",
  description:
    "Locally owned water well drilling, servicing, repairing, testing, pump installation, abandonment and shocking.",

  openGraph: {
    title: "Travis Drilling LTD.",
    siteName: "Travis Drilling LTD.",
    description:
      "Locally owned water well drilling and servicing. We handle servicing, repairing, and testing wells. We can drill new wells and install pumps or abandon or shock old wells. Travis Drilling is located in Onoway, Alberta, Canada.",
    url: "https://www.travisdrilling.ca",
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
    },
    {
      url: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      url: "/safari-pinned-tab.svg",
      rel: "mask-icon",
      color: "#000000",
    },
    {
      url: "/site.webmanifest",
      rel: "manifest",
    },
  ],
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <div className="flex min-h-screen flex-col">
          <SchemaOrg />

          <Script
            src="https://kit.fontawesome.com/e6ae3fbb74.js"
            crossOrigin="anonymous"
          ></Script>
          <header>
            <Navbar />
          </header>
          <main className="flex flex-grow flex-col justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <Analytics />
    </html>
  );
}
