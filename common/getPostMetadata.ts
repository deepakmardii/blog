import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/interface/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slug = markdownPosts.map((file) => file.replace(".md", ""));
  // return slug;
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getPostMetadata;
