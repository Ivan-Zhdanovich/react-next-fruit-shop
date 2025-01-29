import type { Metadata } from "next";
import "./globals.css";
import "./reset.css"

import MainHeader from "@/components/mainLayout/mainHeader/mainHeader";


export const metadata: Metadata = {
  title: "Fruit shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
