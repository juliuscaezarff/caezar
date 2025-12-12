import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostHeader from "@/app/components/posts/post-header";
import Code from "@/app/components/md/Code";
import CustomImage from "@/app/components/md/CustomImage";
import H1 from "@/app/components/md/H1";
import H2 from "@/app/components/md/H2";
import H3 from "@/app/components/md/H3";
import Hr from "@/app/components/md/Hr";
import Li from "@/app/components/md/Li";
import LinkText from "@/app/components/md/LinkText";
import OrderedList from "@/app/components/md/Ol";
import P from "@/app/components/md/P";
import Quote from "@/app/components/md/Quote";
import Strong from "@/app/components/md/Strong";
import UnorderedList from "@/app/components/md/Ul";

interface PostMetadata {
  title: string;
  description: string;
  date: string;
  readTime: string;
  emoji: string;
}

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => path.extname(fileName) === ".mdx")
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  const meta = data as Partial<PostMetadata>;

  return {
    title: `${meta.title} | Julius Caezar`,
    description: meta.description,
    openGraph: {
      title: meta.title ?? "Post",
      description: meta.description ?? "",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title ?? "Post",
      description: meta.description ?? "",
    },
  };
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src", "posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const readTime = `${Math.ceil(content.split(" ").length / 150)} min`;
  const metadata = data as PostMetadata;

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    strong: Strong,
    li: Li,
    p: P,
    a: LinkText,
    blockquote: Quote,
    ul: UnorderedList,
    ol: OrderedList,
    img: CustomImage,
    pre: Code,
    hr: Hr,
  };

  return (
    <div className="flex flex-col pb-48">
      <div className="mx-auto max-w-[48rem] lg:max-w-[52rem] pt-0 md:pt-[5.3rem] pl-10 md:pl-16">
        <PostHeader
          title={metadata.title}
          date={metadata.date}
          readTime={readTime}
          emoji={metadata.emoji}
        />
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
}
