import Page from "../components/Page";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import LangString from "../components/LangString";

function Projects() {
  return (
    <Page className="md:mx-auto min-h-screen w-screen h-full pt-7 pb-5">
      <div className="mx-5 md:mx-10 text-white">
        <div className="md:w-2/3">
          <h1 className="text-4xl text-gray-600 dark:text-white font-bold mb-2">
            <LangString stringName="projects_title" />
          </h1>
          <div className="mb-5">
            <p className="text-lg font-semibold italic text-purple-500 mb-2">
              <LangString stringName="projects_subheading" />
            </p>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              <LangString stringName="projects_description" />
            </p>
          </div>
        </div>
        <div className="container-full mt-2 grid grid-cols-auto md:grid-cols-2 gap-4 px-2 text-white">
          {Object.values(projects).map((project, i) => (
            <ProjectCard project={project} key={project.name + i} />
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Projects;
