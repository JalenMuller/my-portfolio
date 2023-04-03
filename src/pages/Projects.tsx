import Page from "../components/Page";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

function Projects() {
  console.log(projects);
  return (
    <Page className="min-h-screen min-w-screen bg-zinc-800 pt-20">
      <div className="mx-5 w-50">
        <h1 className="text-4xl font-bold text-white mb-5">My projects</h1>
        <p className="text-base text-zinc-400 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>
      <div className="container-full mx-auto grid grid-cols-auto md:grid-cols-3 gap-4 px-2 text-white">
        {Object.values(projects).map((project, i) => (
          <ProjectCard project={project} key={project.name + i} />
        ))}
      </div>
    </Page>
  );
}

export default Projects;
