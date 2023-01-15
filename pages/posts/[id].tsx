import Head from "next/head";
import Header from "../_header";
import { getPost, getPostsRoutes } from "../../lib/posts";
import { SinglePostProps } from "../../models/post";
import Date from "../../components/date";
interface Props {
  data: SinglePostProps;
}

export default function BlogPost(props: Props) {
  const post = props.data;
  return (
    <>
      <Head>
        <title>{post.metaInformation.title} | Marceli Grabowski</title>
        <meta name="description" content="Marceli Grabowski" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <article className="container prose lg:prose-xl dark:prose-invert px-2">
        <h2 className="font-bold">{post.metaInformation.title}</h2>
        <small className="font-light text-md">
          Posted on <Date dateString={post.metaInformation.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.mdx }}></div>
        <hr />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getPostsRoutes();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { id: string; file: string };
}) {
  console.log(params);
  const data = await getPost(params);
  return {
    props: {
      data,
    },
  };
}
