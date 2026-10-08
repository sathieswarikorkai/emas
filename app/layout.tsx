import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./style/globals.css";
import "./style/about.css";
import "./style/opportunities.css";
import "./style/plans.css";
import "./style/training.css";
import "./style/event.css";
import "./style/contact.css";
import "./style/women.css";
import "./style/emasStory.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}