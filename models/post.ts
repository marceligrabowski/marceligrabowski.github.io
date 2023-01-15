export type PostProps = {
  excerptMdx: string;
  metaInformation: { title: string; date: string; slug: string };
};

export type SinglePostProps = {
  id: string;
  mdx: string;
  metaInformation: { title: string; date: string; slug: string };
};
