import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { inter } from "@/fonts/pages";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Manjot Singh",
  description: "Manjot is a developer specializing in optimzation and finetuning llms and fullstack development along with automation and scripting",
  openGraph: {
    title: "Manjot Singh",
    description: "Manjot is a developer specializing in optimzation and finetuning llms and fullstack development along with automation and scripting",
    url: "https://manjot.site",
  
    siteName: "Manjot Singh",
    images: [
      {
        url: "https://manjot.site/pic.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
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
        className={`${poppins.className} antialiased h-screen w-full relative overflow -x-hidden bg-slate-200`}
      >
        <div className="mx-auto max-md:w-full md:w-3/4 mt-12  max-md:flex-col flex flex-row overflow-x-hidden" >
        {children}
        </div>
      </body>
    </html>
  );
}
