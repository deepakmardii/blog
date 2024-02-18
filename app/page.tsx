import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slug = markdownPosts.map((file) => file.replace(".md", ""));
  return slug;
};

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default page;
