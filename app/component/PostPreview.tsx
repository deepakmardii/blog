"use client";
import { PostMetadata } from "@/interface/PostMetadata";
import Link from "next/link";
import { useRef, useState } from "react";

const PostPreview = (props: PostMetadata) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <Link href={`posts/${props.slug}`}>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center overflow-hidden rounded-xl h-full border border-gray-800 bg-gradient-to-r from-black to-gray-950 p-5 shadow-2xl"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
          }}
        />
        <div className="">
          <p className="text-xs text-gray-400">{props.date}</p>
          <h2 className="pb-4 bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent text-xl">
            {props.title}
          </h2>
          <p className="line-clamp-2">{props.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
