import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Restaurant Management System",
      description:
        "A full-stack web application for managing restaurant operations, including menus, orders, user roles, and billing.",
      image: "/images/Katiya House (2).png",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "TypeScript",
      ],
      githubLink: "https://github.com/username/restaurant-management",
      demoLink: "#",
    },
    {
      title: "News Application",
      description:
        "A modern news app to display categorized articles fetched from APIs with search and filter functionality.",
      image: "/images/NewsNext.png",
      techStack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
      githubLink: "https://github.com/username/news-application",
      demoLink: "#",
    },
    {
      title: "Booking System",
      description:
        "A comprehensive property booking platform with search filters, user roles, booking flows, dashboard, and insurance support.",
      image: "/images/ICON_WHITE.png",
      techStack: [
        "React",
        "Tailwind",
        "Apollo Client",
        "TypeScript",
        "MongoDB",
        "shadcn/ui",
        "Node.js",
        "Jira",
      ],
      githubLink: "https://github.com/username/booking-system",
      demoLink: "https://ghumnepal.com/",
    },
  ];

  return (
    <div className="w-full my-4 justify-center flex items-center">
      <div className="max-w-screen-xl border rounded-md border-green-900 p-8 md:p-12">
        <p className="text-green-500 text-lg  font-normal">
          Showcasing My Work
        </p>
        <h1 className="text-4xl font-bold mb-10 bg-clip-text  text-white">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
