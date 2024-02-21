import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DB | Portfolio",
  metadataBase: new URL("https://diwashb.com.np"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Diwash Bhattarai", url: "https://github.com/diwashbhattarai999" },
    { name: "दिवस भट्टराई", url: "https://github.com/diwashbhattarai999" },
  ],
  description:
    "Diwash Bhattarai's personal portfolio website, दिवस भट्टराई को व्यक्तिगत वेबसाइट",
  openGraph: {
    title: "DB | Portfolio",
    description:
      "Diwash Bhattarai's personal portfolio website, दिवस भट्टराई को व्यक्तिगत वेबसाइट",
    images: [
      {
        url: "/profile.png",
        alt: "Diwash Bhattarai's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
