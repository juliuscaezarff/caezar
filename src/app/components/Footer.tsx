import React from "react";
import { TextLoop } from "./ui/TextLoop";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto text-center">
        <TextLoop className="text-sm font-normal text-[var(--muted-foreground)]">
          <span>© 2025 Julius Caezar.</span>
          <span>Never Stop Learning</span>
        </TextLoop>
      </div>
    </footer>
  );
}
