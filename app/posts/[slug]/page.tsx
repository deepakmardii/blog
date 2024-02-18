import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const page = (props: any) => {
  const slug = props.params.slug;
  const pageContent = getPostContent(slug);
  return (
    <div>
      This is page content: {slug}
      <Markdown>{pageContent}</Markdown>
    </div>
  );
};

export default page;
