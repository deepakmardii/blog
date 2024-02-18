import getPostMetadata from "@/common/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  // return [{ slug: "this-is-mkardown-1.md" }];
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1 className="text-3xl font-bold">{post.data.title}</h1>
      <article className="prose prose-pink">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default page;
