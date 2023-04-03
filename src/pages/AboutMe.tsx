import Page from "../components/Page";
import Avatar from "../images/avatar.svg";
import { Github, Linkedin, Twitter, Instagram } from "react-bootstrap-icons";

function AboutMe() {
  return (
    <Page>
      <div className="container bg-transparent text-white md:max-w-screen-md p-5 overflow-hidden sm:rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-4xl font-bold">About me</h1>
          <img
            src={Avatar}
            className="w-16 mr-3 rounded-full border-2 border-white bg-slate-200"
            alt=""
          />
        </div>
        <p className="text-base text-zinc-400 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="flex">
          <Instagram className="text-3xl mr-3" />
          <Twitter className="text-3xl mr-3" />
          <Github className="text-3xl mr-3" />
          <Linkedin className="text-3xl" />
        </div>
      </div>
    </Page>
  );
}

export default AboutMe;
