import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";

const robot = Roboto({ subsets: ["latin"], weight:['300','400'] });

export const metadata: Metadata = {
  title: "Wilbrord",
  description: "Wilbrord a fullstack software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robot.className}>{children}</body>
    </html>
  );
}
