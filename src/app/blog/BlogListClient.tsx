'use client';

import { motion } from "framer-motion";
import PostPreview from "@/app/components/posts/post-preview";

type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
  emoji: string;
};

export default function BlogListClient({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="mx-auto max-w-[48rem] lg:max-w-[52rem] pt-2 md:pt-[5.3rem]">
      <motion.ul className="flex flex-col pt-0 pb-2 pl-10 pr-10 md:pl-16 md:pr-16">
        {posts.map((post) => (
          <motion.li key={post.slug} className="w-full">
            <PostPreview
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
