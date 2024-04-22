import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = siteConfig;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            montserrat.variable,
            "antialiased flex flex-col min-h-screen bg-background"
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>

          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-B22FST6QWT"
          ></Script>
          <Script id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-B22FST6QWT');
            `}
          </Script>
        </body>
      </html>
    </SessionProvider>
  );
}
