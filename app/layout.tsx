import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from "@/fonts/pages";

export const metadata: Metadata = {
  title: "Manjot Singh",
  description: "PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen w-full `}
      >
        <div className="mx-auto w-3/4 mt-12  flex flex-row" >
        {children}
        </div>
      </body>
    </html>
  );
}
