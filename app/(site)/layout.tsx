"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import CustomCursor from '@/components/Common/CustomCursor';
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import { TracingBeam } from "@/components/Tracing-beam/tracing";
import { GridSmallBackground } from "@/components/Background";
import InfiniteScrollText from "@/components/Footer/InfiniteScroll";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={`dark:bg-black ${inter.className} overflow-x-hidden`}>
      <GridSmallBackground>
        {/* <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        > */}
          <Header />
          <CustomCursor />
          
          <ToasterContext />
          {children}
          <Footer />
          {/* <InfiniteScrollText/> */}
          <ScrollToTop />
        {/* </ThemeProvider> */}
      </GridSmallBackground>
      </body>
      
    </html>
  );
}
