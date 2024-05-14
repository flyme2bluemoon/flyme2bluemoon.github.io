// from https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type postFrontmatter = {
  id: string;
  title: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
};

export const getSortedPostsData = (): postFrontmatter[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileNames) => fileNames.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title || undefined,
        author: matterResult.data.author || undefined,
        date: matterResult.data.date || undefined,
        slug: matterResult.data.slug || undefined,
        tags: matterResult.data.tags || undefined,
        ...matterResult.data,
      };
    });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getTagsList = (): string[] => {
  let tags: string[] = [];

  const posts = getSortedPostsData();

  for (let i = 0; i < posts.length; i++) {
    tags = tags.concat(posts[i].tags);
  }

  tags = Array.from(new Set(tags));

  return tags.sort();
};

export const getPost = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title || undefined,
    author: matterResult.data.author || undefined,
    date: matterResult.data.date || undefined,
    tags: matterResult.data.tags || undefined,
    contentHtml,
    ...matterResult.data,
  };
};
