import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { inter } from "@/fonts/pages";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Manjot Singh",
  description: "PortFolio",
 
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
   width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen w-screen  relative bg-white overflow-x-hidden`}
      >
        <div className="mx-auto w-3/4 mt-12  max-md:flex-col flex flex-row" >
        {children}
        </div>
      </body>
    </html>
  );
}
