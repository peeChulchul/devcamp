import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>데브캠프</title>
      </Head>
      <div className={`${cn(inter.className)}`}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </>
  );
}
