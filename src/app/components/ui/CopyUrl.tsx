"use client";

import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type LinkProps = {
  value?: string;
  className?: string;
};

export function CopyUrlLink({ value, className }: LinkProps) {
  const [isCopied, setCopied] = useState(false);

  const handleClipboard = async () => {
    try {
      const toCopy = value ?? window.location.href;
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={handleClipboard}
      className={cn(
        "inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors",
        className,
      )}
      aria-label="Copy URL"
    >
      <Link2 className="size-4" />
      {isCopied ? (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-sm"
        >
          Copied
        </motion.span>
      ) : (
        <span className="text-sm">Copy URL</span>
      )}
    </button>
  );
}
