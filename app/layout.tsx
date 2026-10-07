import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./style/globals.css";
import "./style/about.css";
import "./style/opportunities.css";
import "./style/plans.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMAS",
  description: "EMAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}