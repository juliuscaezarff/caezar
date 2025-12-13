"use client";

import { Cambio } from "cambio";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CustomImage = ({ src, alt, width = 1920, height = 1080 }: ImageProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <Cambio.Root motion="smooth">
      <Cambio.Trigger>
        <button
          type="button"
          className="group w-full text-left focus:outline-none"
        >
          <div className="text-center">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 832px"
              className="rounded-xl w-full h-auto transition-transform duration-200 ease-out group-hover:scale-[1.01]"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px -1px rgba(0, 0, 0, 0.06), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
              }}
            />
            <div className="pt-3 text-xs italic text-neutral-400/80">{alt}</div>
          </div>
        </button>
      </Cambio.Trigger>
      <Cambio.Portal>
        <Cambio.Backdrop />
        <Cambio.Popup className="w-[min(90vw,960px)] max-h-[90vh] overflow-auto rounded-xl bg-[var(--background)] p-3 sm:p-4">
          <div className="text-center">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 832px"
              className="rounded-xl w-full h-auto"
            />
            <div className="pt-3 text-xs italic text-neutral-400/80">{alt}</div>
          </div>
        </Cambio.Popup>
      </Cambio.Portal>
    </Cambio.Root>
  );
};

export default CustomImage;
