"use client";

import React from "react";
import { ProjectItem } from "./ui/ProjectItem";

const projects = [
  {
    title: "HelpMind",
    link: "https://helpmind.com.br",
    logo: "/projects/helpmind.png",
    description:
      "Online platform for psychologists with scheduling, sessions, and insights.",
    preview: "/projects/helpmind-preview.png",
  },
  {
    title: "Memora",
    link: "https://memora-web-ten.vercel.app/",
    logo: "/projects/brain.svg",
    description:
      "Memora is a place to organize and share your bookmarks, without the usual noise.",
    preview: "/projects/memora-preview.png",
  },
  {
    title: "Troko",
    link: "https://marketplace.visualstudio.com/items?itemName=dakshie.waverider",
    logo: "/projects/troko.png",
    description:
      "Smart finance hub with AI expense tracking and custom categories.",
    preview: "/projects/troko-preview.png",
  },
  {
    title: "Daility",
    link: "https://daility.vercel.app/",
    logo: "/projects/daility.jpg",
    description: "Online planner for students with tasks and Pomodoro focus.",
    preview: "/projects/daility-preview.png",
  },
  // {
  //   title: "Docsy",
  //   link: "https://github.com/Dksie09/Docsy",
  //   logo: "/projects/docsy.png",
  //   description:
  //     "A smart extension that skims through the documentation for you, and delivers you the exact parts you were looking for.",
  //   preview: "/projects/docsy-preview.mp4",
  // },
];

const Projects: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        projects
      </h1>
      <div className="max-w-2xl">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            link={project.link}
            logo={project.logo}
            description={project.description}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
