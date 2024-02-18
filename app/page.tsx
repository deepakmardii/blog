import Link from "next/link";
import getPostMetadata from "@/common/getPostMetadata";
import PostPreview from "./component/PostPreview";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreviews}</div>;
};

export default page;
