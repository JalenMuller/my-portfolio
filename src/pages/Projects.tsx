import Page from "../components/Page";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import { InfoCircle } from "react-bootstrap-icons";

function Projects() {
  console.log(projects);
  return (
    <Page className="md:mx-auto w-screen overflow-y-hidden bg-zinc-800 pt-24">
      <div className="mx-5 md:mx-7 text-white">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">My projects</h1>
          <div className="mb-5">
            <p className="text-lg text-zinc-200 dark:text-purple-500 mb-2">
              What are these projects for?
            </p>
            <p className="text-sm text-zinc-400">
              These are the personal projects I felt were worth showcasing. All
              of the projects were made for fun and to showcase and improve my
              experience. Any code is open-source and free to be used by anyone.
            </p>
          </div>
        </div>
        <div className="container-full my-2 grid grid-cols-auto md:grid-cols-2 gap-4 px-2 text-white">
          {Object.values(projects).map((project, i) => (
            <ProjectCard project={project} key={project.name + i} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Projects;
