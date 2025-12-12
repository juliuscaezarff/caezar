import { motion } from "motion/react";
import PostPreview from "./posts/post-preview";
import LinkArrow from "./ui/link-arrow";

export interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
  emoji: string;
}

export interface BlogPageProps {
  postsMetadata: PostMetadata[];
}

export function Writing({ postsMetadata }: BlogPageProps) {
  const sortedPostsMetadata = postsMetadata
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="py-4 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        writing
      </h1>
      <div className="max-w-2xl">
        <div className="flex justify-between pb-4 align-middle text-sm tracking-[0.01em] text-neutral-400">
          <span>recent</span>
          <LinkArrow href="/blog" className="flex w-fit text-sm text-neutral-400">
            Older
          </LinkArrow>
        </div>
        <ul className="flex flex-col pb-2">
          {sortedPostsMetadata.map((postMetadata) => (
            <motion.li key={postMetadata.slug}>
              <PostPreview
                title={postMetadata.title}
                description={postMetadata.description}
                date={postMetadata.date}
                slug={postMetadata.slug}
                showDate={false}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
