'use client';

import { AnimatePresence, motion } from "motion/react";
import { Redo2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const pathname = usePathname();
  const backHref = pathname.includes("/blog/") ? "/blog" : "/";

  return (
    <AnimatePresence>
      {pathname !== "/" && (
        <motion.div
          initial={{ opacity: 0, x: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 4, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="sticky top-0 pb-4 pt-0 md:fixed md:left-[calc(50%-26rem)] md:top-[5.3rem] md:pb-0 md:pt-0 lg:left-[calc(50%-28rem)]"
        >
          <Link
            href={backHref}
            className="group flex items-center gap-1.5 text-neutral-300 transition-all duration-200 ease-in-out hover:text-neutral-400"
          >
            <Redo2Icon
              className="mb-0.5 size-3 rotate-180 -scale-y-100 cursor-pointer text-xl"
              strokeWidth={2.5}
            />
            <span className="text-sm">Back</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackButton;
