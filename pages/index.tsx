import Head from "next/head";
import { getPage } from "../lib/pages";
import { PageProps } from "../models/page";
import Header from "./_header";

interface Props {
  data: PageProps;
}

export async function getStaticProps() {
  const data = await getPage("about-me");
  return {
    props: {
      data,
    },
  };
}

export default function AboutMe(props: Props) {
  return (
    <>
      <Head>
        <title>Marceli Grabowski</title>
        <meta name="description" content="Marceli Grabowski" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="container prose lg:prose-xl dark:prose-invert px-2">
        <h1 className="text-4xl font-extrabold text-center">About</h1>
        <div dangerouslySetInnerHTML={{ __html: props.data.mdx }}></div>
      </div>
    </>
  );
}
