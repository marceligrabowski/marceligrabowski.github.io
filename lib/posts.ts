import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostProps, SinglePostProps } from "../models/post";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsRoutes() {
  const fileNames = fs.readdirSync(postsDirectory)
  .filter((value) => value.includes("md"));
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPost(params: { id: string }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents, {
    excerpt: false,
  });

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism, {
      plugins: [
        "autolinker",
        "command-line",
        "data-uri-highlight",
        "diff-highlight",
        "inline-color",
        "keep-markup",
        "line-numbers",
      ],
    })
    .process(content!);
  const htmlContent = processedContent.toString();

  return {
    id: params.id,
    mdx: htmlContent,
    metaInformation: data,
  } as SinglePostProps;
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((value) => value.includes("md"));
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      // Read markdown file as string

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { excerpt, data } = matter(fileContents, {
        excerpt: true,
      });

      // Use remark to convert markdown into HTML string
      const processedExcerpt = await remark()
        .use(html, { sanitize: false })
        .use(prism, {
          plugins: [
            "autolinker",
            "command-line",
            "data-uri-highlight",
            "diff-highlight",
            "inline-color",
            "keep-markup",
            "line-numbers",
          ],
        })
        .process(excerpt!);
      const excerptHtml = processedExcerpt.toString();
      //TODO: Fix it!
      data.slug = id;

      // Combine the data with the id
      return {
        excerptMdx: excerptHtml,
        metaInformation: data,
      } as PostProps;
    })
  );
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.metaInformation.date < b.metaInformation.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
