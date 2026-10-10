import type { Metadata } from "next";
import localFont from "next/font/local";

import "./style/globals.css";
import "./style/about.css";
import "./style/opportunities.css";
import "./style/plans.css";
import "./style/training.css";
import "./style/event.css";
import "./style/contact.css";
import "./style/women.css";
import "./style/emasStory.css";
import "./style/productInfo.css";

const jakarta = localFont({
  src: "./Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
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
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}