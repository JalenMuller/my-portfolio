import LangString from "../components/LangString";
import Page from "../components/Page";
import { Github, Linkedin, EnvelopeAtFill } from "react-bootstrap-icons";

function AboutMe() {
  return (
    <Page className="w-screen h-screen pt-7">
      <div className="mx-5 md:ml-10 bg-transparent text-white sm:rounded-lg">
        <div className="flex justify-between md:mr-5 mb-5">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-600 dark:text-white">
              <LangString stringName="aboutme_title" />
            </h1>
            <p className="text-lg font-semibold italic text-purple-500 mb-2">
              <LangString stringName="aboutme_subheading" />
            </p>
          </div>
          <img
            src="images/bio_picture.jpg"
            className="w-20 h-20 mr-3 rounded-full border-2 border-gray-500 dark:border-white bg-slate-200"
            alt=""
          />
        </div>
        <p className="text-base leading-[1.4rem] text-gray-500 dark:text-zinc-400 mb-5">
          <LangString stringName="aboutme_text" />
        </p>
        <div className="flex text-gray-700 dark:text-white text-4xl">
          <a
            href="mailto:jalen@jalenmuller.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600"
          >
            <EnvelopeAtFill className="mr-4 scale-[110%]" />
          </a>
          <a
            href="https://github.com/jalenmuller"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600"
          >
            <Github className="mr-4" />
          </a>
          <a
            href="https://github.com/jalenmuller"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600"
          >
            <a
              href="https://www.linkedin.com/in/jalen-muller-374578277"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-600"
            >
              <Linkedin className="" />
            </a>
          </a>
        </div>
      </div>
    </Page>
  );
}

export default AboutMe;
