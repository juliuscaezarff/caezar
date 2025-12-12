import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostPreview from "@/app/components/posts/post-preview";
import BlogListClient from "./BlogListClient";

export interface BlogPageProps {
  postsMetadata: PostMetadata[];
}

export interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string;
  emoji: string;
}

export const metadata: Metadata = {
  title: "Posts | Julius Caezar",
  description: "Pensamentos e publicações",
  openGraph: {
    title: "Posts | Julius Caezar",
    description: "Pensamentos e publicações",
    url: "https://caezar.vercel.app/blog",
    siteName: "Julius Caezar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posts | Julius Caezar",
    description: "Pensamentos e publicações",
  },
};

function getPostsMetadata(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const mdxFiles = fileNames.filter(
    (fileName) => path.extname(fileName) === ".mdx"
  );

  const posts = mdxFiles.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as PostMetadata;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function Blog() {
  const postsMetadata = getPostsMetadata();

  return (
    <div className="min-h-screen">
      <BlogListClient posts={postsMetadata} />
    </div>
  );
}
