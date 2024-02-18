import { PostMetadata } from "@/interface/PostMetadata";
import Link from "next/link";
import React from "react";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default PostPreview;
