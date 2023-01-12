import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Head>
        <title>Marceli Grabowski</title>
        <meta name="description" content="Marceli Grabowski" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      
    </>
  );
}
