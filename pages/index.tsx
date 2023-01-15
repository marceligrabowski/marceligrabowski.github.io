import Head from "next/head";
import Header from "./_header";
import { getSortedPostsData } from "../lib/posts";
import { PostProps } from "../models/post";
import Date from "../components/date";
import Link from "next/link";

interface Props {
  posts: PostProps[];
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: "/about-me",
      permanent: false,
    },
  };
  // const posts = await getSortedPostsData();
  // return {
  //   props: {
  //     posts,
  //   },
  // };
}

export default function Blog(props: Props) {
  return (
    <>
      <Head>
        <title>Marceli Grabowski</title>
        <meta name="description" content="Marceli Grabowski" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div>
        {props.posts.map((post) => (
          <article
            key={post.metaInformation.slug}
            className="container mx-auto prose lg:prose-xl dark:prose-invert px-2"
          >
            <Link href={`posts/${post.metaInformation.slug}`}>
              <h2 className="font-bold">{post.metaInformation.title} </h2>
            </Link>
            <small className="font-light text-md">
              Posted on <Date dateString={post.metaInformation.date} />
            </small>
            <div dangerouslySetInnerHTML={{ __html: post.excerptMdx }}></div>
            <Link href={`posts/${post.metaInformation.slug}`}>[Read more]</Link>
            <hr />
          </article>
        ))}
      </div>
    </>
  );
}
