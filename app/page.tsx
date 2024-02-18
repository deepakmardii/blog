import fs from "fs";
import Link from "next/link";
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

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <Link href={`posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default page;
