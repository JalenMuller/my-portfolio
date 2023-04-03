import { Link45deg, ArrowRight } from "react-bootstrap-icons";

function ProjectCard(props: {
  project: { name: string; description: string; url: string; tags: string[] };
}) {
  let project = props.project;
  return (
    <div className="container flex flex-col min-h-48 rounded border border-zinc-700 shadow text-black p-3">
      <h1 className="text-xl md:text-lg text-white font-semibold mb-1">
        {project.name}
      </h1>
      <p className="text-base md:text-sm text-zinc-400 mb-1">
        {project.description}
      </p>
      <div className="flex items-center text-white mb-3 md:mb-5">
        <Link45deg />
        <a
          className="md:text-sm truncate ml-1"
          href={`https://${project.url}`}
          target="_blank"
          rel="noreferrer"
        >
          {project.url}
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-1 text-sm">
        {project.tags.map((tag) => (
          <span
            className="bg-white border-white cursor-default border rounded py-1 px-2 w-fit md:text-xs"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-end text-zinc-400 md:text-sm underline hover:text-white cursor-pointer">
        <ArrowRight className="text-right" />
        <p className="ml-1">More info</p>
      </div>
    </div>
  );
}

export default ProjectCard;
