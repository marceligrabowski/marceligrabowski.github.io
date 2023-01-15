import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import { PageProps } from "../models/page";
const pagesDirectory = path.join(process.cwd(), "pages-mdx");

export async function getPage(id: string) {
  const fullPath = path.join(pagesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);

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
    mdx: htmlContent,
  } as PageProps;
}
