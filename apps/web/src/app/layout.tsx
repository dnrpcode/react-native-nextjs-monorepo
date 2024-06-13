import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextTamaguiProvider } from "./NextTamaguiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("haloo ini server")
  return (
    <html lang="en">
      <body className={inter.className}><NextTamaguiProvider>{children}</NextTamaguiProvider></body>
    </html>
  );
}
