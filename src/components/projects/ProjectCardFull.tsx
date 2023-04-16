import { X } from "react-bootstrap-icons";
import Carousel from "../carousel/Carousel";
import LinkComponent from "../LinkComponent";

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
          className="flex min-h-full items-center justify-center"
        >
          <div className="h-full mx-4 overflow-y-auto max-h-full shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white text-gray-500 text-center rounded-lg border  border-zinc-600 dark:text-white dark:border-purple-800 dark:bg-zinc-800 dark:text-gray-400 px-2 pb-4 pt-3 sm:p-4 sm:pb-4">
              <div
                className="relative h-0 cursor-pointer top-0 text-right text-black dark:text-purple-600"
                onClick={() => props.toggleFullCard()}
              >
                <X className="ml-auto text-3xl" />
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 sm:ml-4 sm:mt-2">
                  <h3 className="text-xl font-semibold leading-5 mb-3 text-gray-6 dark:text-purple-600">
                    {project.name}
                  </h3>
                  <p
                    className="text-sm px-1 md:px-0 mt-2 mb-4 text-inherit"
                    dangerouslySetInnerHTML={createDescriptionMarkup()}
                  />

                  <Carousel
                    images={project.images}
                    className="px-2 md:px-0"
                    key={project.name + "-carousel"}
                  />
                  <div className="relative mt-3 md:mt-5 text-xl dark:text-purple-600 font-semibold md:mt-10 md:text-lg">
                    <LinkComponent
                      url={project.url}
                      className="justify-center"
                    />
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
