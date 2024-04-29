import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "~/styles/globals.css";

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
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
