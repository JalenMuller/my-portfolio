import { useState } from "react";
import ProjectCardFull from "./ProjectCardFull";
import LinkComponent from "../LinkComponent";
import { ArrowRight } from "react-bootstrap-icons";

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
      <div className="container flex flex-col min-h-48 items-center md:items-start rounded border border-zinc-700 shadow text-black px-2 md:px-4 py-3">
        <h1 className="text-xl md:text-lg text-white font-semibold mb-2 md:mb-1">
          {project.name}
        </h1>
        <p className="text-base md:text-sm text-center md:text-left text-zinc-400 mb-2">
          {project.shortDesc}
        </p>
        <LinkComponent className="text-white" url={project.url} />

        <div className="flex flex-wrap items-center gap-1 text-sm mb-3 md:mb-0 mt-2 md:mt-0">
          {project.tags.map((tag) => (
            <span
              className="bg-white border-white cursor-default border rounded py-1 px-2 w-fit md:text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="ml-auto text-zinc-400 md:text-sm underline hover:text-purple-500 cursor-pointer"
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
