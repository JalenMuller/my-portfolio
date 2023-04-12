import Page from "../components/Page";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import { InfoCircle } from "react-bootstrap-icons";

function Projects() {
  console.log(projects);
  return (
    <Page className="min-h-screen min-w-screen bg-zinc-800 pt-20">
      <div className="mx-5 md:mx-7 w-50">
        <h1 className="text-4xl font-bold text-white mb-5">My projects</h1>
        <div className="md:w-1/2">
          <p className="text-lg text-zinc-200 mb-1">
            What are these projects for?
          </p>
          <p className="text-sm text-zinc-400 mb-1">
            These are my personal projects, all projects were made for fun and
            experience and any code is free to be used by anyone.
          </p>
          <p className="text-sm md:text-xs text-zinc-100 leading-6 mb-5">
            {/* <InfoCircle className="inline mr-1" /> */}
            Click on "More info" for a detailed description and screenshots for
            each project.
          </p>
        </div>
      </div>
      <div className="container-full mx-2 md:mx-5 grid grid-cols-auto md:grid-cols-3 gap-4 px-2 text-white">
        {Object.values(projects).map((project, i) => (
          <ProjectCard project={project} key={project.name + i} />
        ))}
      </div>
    </Page>
  );
}

export default Projects;
