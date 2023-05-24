import { useState } from "react";
import ProjectCardFull from "./ProjectCardFull";
import LinkComponent from "../LinkComponent";
import { ArrowRight } from "react-bootstrap-icons";
import LangString from "../LangString";

function ProjectCard(props: {
  project: {
    name: string;
    desc: string;
    shortDesc: string;
    url: string;
    images: string[];
    tags: string[];
  };
}) {
  const [showFullCard, setShowFullCard] = useState(false);
  const toggleFullCard = () => {
    setShowFullCard(!showFullCard);
  };
  const project = props.project;
  return (
    <>
      <div className="container flex flex-col min-h-48 items-center md:items-start rounded border border-gray-400 dark:border-zinc-400 shadow text-black px-2 md:px-4 py-3">
        <h1 className="text-xl md:text-lg text-gray-800 dark:text-white font-semibold mb-2 md:mb-1">
          {project.name}
        </h1>
        <p className="text-base md:text-sm text-center md:text-left text-gray-500 dark:text-zinc-400 mb-2">
          <LangString stringName={project.shortDesc} />
        </p>
        <LinkComponent
          className="text-gray-800 dark:text-white"
          url={project.url}
        />

        <div className="flex flex-wrap items-center gap-1 text-sm mb-3 md:mb-0 mt-2 md:mt-0">
          {project.tags.map((tag) => (
            <span
              className="bg-purple-500 text-white font-semibold cursor-default border border-gray-400 dark:border-gray-900 rounded py-1 px-2 w-fit md:text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="ml-auto text-gray-700 dark:text-zinc-300 md:text-sm underline dark:hover:text-purple-500 hover:text-purple-500 cursor-pointer"
          onClick={toggleFullCard}
        >
          <ArrowRight className="text-right inline" />
          <p className="ml-1 inline">More info</p>
        </div>
      </div>
      {showFullCard && (
        <ProjectCardFull project={project} toggleFullCard={toggleFullCard} />
      )}
    </>
  );
}

export default ProjectCard;
