import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-montserrat antialiased flex flex-col",
          montserrat.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
