import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-[#1f1f28] rounded-xl overflow-hidden p-4 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-green-500/50 hover:-translate-y-1">
      <div className="relative rounded-lg overflow-hidden mb-4 h-40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
            Tech Stack
          </h4>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-gray-700/80 text-gray-200 text-xs px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
