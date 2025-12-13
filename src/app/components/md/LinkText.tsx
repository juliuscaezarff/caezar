"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getGoogleFavicon } from "@/utils/google-favicon";
import { useTheme } from "@/app/theme-provider";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
  subtle?: boolean;
}

const LinkText = ({ children, href, subtle }: LinkTextProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={`group inline-block cursor-pointer underline transition-all duration-200 ease-in-out`}
      style={{
        color: subtle
          ? isDark
            ? "#d4d4d4"
            : "#525252"
          : isDark
          ? "#ffffff"
          : "#171717",
        textDecorationColor: subtle
          ? isDark
            ? "rgba(212,212,212,0.6)"
            : "#a3a3a3"
          : isDark
          ? "rgba(255,255,255,0.7)"
          : "#a3a3a3",
      }}
    >
      {href.startsWith("http") && (
        <Image
          src={getGoogleFavicon(href || "")}
          alt=""
          width={256}
          height={256}
          className="my-0 mb-[3px] ml-[3px] mr-1.5 inline-block size-[13px] rounded-sm"
        />
      )}

      <p
        className={`inline-block underline decoration-1 underline-offset-2 transition-all duration-200 ease-in-out ${
          subtle ? "font-normal" : "font-medium"
        }`}
      >
        {children}
      </p>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: -4, filter: "blur(4px)", width: 0 }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)", width: "auto" }}
            exit={{ opacity: 0, x: -4, filter: "blur(4px)", width: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block"
          >
            <ArrowUpRight
              className="ml-0.5 size-3 translate-x-[1px] translate-y-[1px] transition-all duration-200 ease-in-out"
              style={{ color: isDark ? "#e5e5e5" : "#525252" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default LinkText;
