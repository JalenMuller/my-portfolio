import { SyntheticEvent } from "react";
import Carousel from "../carousel/Carousel";
import Link from "../Link";

function ProjectCardFull(props: {
  project: {
    name: string;
    desc: string;
    shortDesc: string;
    url: string;
    images: string[];
    tags: string[];
  };
  toggleFullCard: Function;
}) {
  const project = props.project;
  const detectClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    if (target?.id === "backdrop") props.toggleFullCard();
  };
  function createDescriptionMarkup() {
    return { __html: project.desc };
  }
  return (
    <div className="z-10" onClick={(e) => detectClick(e)}>
      <div className="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity"></div>

      <div className="fixed w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 overflow-y-auto">
        <div
          id="backdrop"
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div className="relative transform overflow-x-hidden overflow-y-auto rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white text-center px-4 pb-4 pt-3 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:ml-4 sm:mt-0">
                  <h3 className="text-lg font-semibold leading-5 mb-3 text-gray-900">
                    {project.name}
                  </h3>
                  <p
                    className="text-sm px-1 md:px-0 mt-2 mb-3 text-gray-500"
                    dangerouslySetInnerHTML={createDescriptionMarkup()}
                  />
                  <Carousel
                    images={project.images}
                    key={project.name + "-carousel"}
                  />
                  <div className="text-black font-semibold md:mt-10 md:text-lg">
                    <Link url={project.url} className="justify-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardFull;
