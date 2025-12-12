import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const fileNames = fs.readdirSync(postsDirectory);
    const mdxFiles = fileNames.filter((fileName) => path.extname(fileName) === ".mdx");

    const postsMetadata = mdxFiles.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data;
    });

    return Response.json({ postsMetadata });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load posts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
