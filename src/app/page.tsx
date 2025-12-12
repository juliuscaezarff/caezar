"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import { Writing } from "./components/Writing";
import type { PostMetadata } from "./components/Writing";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  const [cardHeight, setCardHeight] = useState("100vh");
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const writingRef = useRef<HTMLDivElement>(null);
  const [postsMetadata, setPostsMetadata] = useState<PostMetadata[]>([]);

  // Calculate and update the card height based on content
  useEffect(() => {
    const calculateHeight = () => {
      // Wait for DOM to be fully rendered
      setTimeout(() => {
        if (
          headerRef.current &&
          heroRef.current &&
          projectsRef.current &&
          workRef.current
        ) {
          // Get the top position of header
          const headerTop =
            headerRef.current.getBoundingClientRect().top + window.scrollY;

          // Get the bottom position of the last content section (writing if present)
          const bottomEl = writingRef.current ?? workRef.current;
          const lastSectionBottom =
            bottomEl.getBoundingClientRect().bottom + window.scrollY;

          // Calculate the total height from header to work section
          const totalHeight = lastSectionBottom - headerTop;

          // Set the card height
          setCardHeight(`${totalHeight + 30}px`);
        }
      }, 100);
    };

    // Calculate on initial render
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  // Fetch posts metadata
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostsMetadata(data.postsMetadata ?? []);
      })
      .catch(() => {
        setPostsMetadata([]);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-0 font-[family-name:var(--font-geist-sans)]">
      <div
        className="card-wrapper mr-10 hidden lg:block"
        style={{ height: cardHeight, position: "absolute", top: 0, right: 0 }}
      >
        <Card />
      </div>

      <div className="relative flex-1">
        <header className="relative z-20 " ref={headerRef}>
          <Header />
        </header>

        <div className="hero-section relative z-0" ref={heroRef} id="hero">
          <Hero />
        </div>
        <hr className="border-t border-dotted w-full my-8" />

        <div
          className="relative min-h-[50vh] w-full z-0"
          ref={projectsRef}
          id="projects"
        >
          <Projects />
        </div>

        <hr className="border-t border-dotted w-full my-8" />
        <div
          className="relative min-h-[50vh] w-full z-0"
          ref={workRef}
          id="work"
        >
          <Work />
        </div>
        <hr className="border-t border-dotted w-full my-8" />
        <div className="relative w-full z-0" ref={writingRef} id="writing">
          <Writing postsMetadata={postsMetadata} />
        </div>
        <hr className="border-t border-dotted w-full my-8" />
        <Footer />
      </div>
    </div>
  );
}
