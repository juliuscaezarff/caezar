import { Clock } from "lucide-react";
import UserAvatar from "@/app/components/ui/Avatar";
import { CopyUrlLink } from "@/app/components/ui/CopyUrl";

interface PostHeaderProps {
  title: string;
  readTime: string;
  date: string;
  emoji: string;
}

const PostHeader = ({ title, readTime, date }: PostHeaderProps) => {
  const formattedDate = (() => {
    const d = new Date(date);
    return isNaN(d.getTime())
      ? date
      : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  })();
  return (
    <div className="w-full">
      <h1 className="text-center font-serif text-4xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>

      <div className="mt-3">
        <UserAvatar />
      </div>

      <div className="mt-10 mb-8 md:mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4 text-neutral-600">
          <div className="inline-flex items-center gap-2">
            <Clock className="size-4" />
            <span className="text-sm">{readTime} read</span>
          </div>
          <CopyUrlLink />
        </div>

        <span className="text-sm text-neutral-600">{formattedDate}</span>
      </div>
    </div>
  );
};

export default PostHeader;
