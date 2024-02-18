import Link from "next/link";
import getPostMetadata from "@/common/getPostMetadata";
import PostPreview from "./component/PostPreview";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className=" grid md:grid-cols-2 gap-5 pb-20">{postPreviews}</div>;
};

export default page;
