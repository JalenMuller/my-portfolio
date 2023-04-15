import Page from "../components/Page";
import Avatar from "../images/avatar.svg";
import { Github, Linkedin, Twitter, Instagram } from "react-bootstrap-icons";

function AboutMe() {
  return (
    <Page className="min-w-screen overflow-y-hidden bg-zinc-800 pt-24">
      <div className="container bg-transparent text-white md:max-w-screen-md px-5 overflow-hidden sm:rounded-lg">
        <div className="flex justify-between mb-5">
          <div>
            <h1 className="text-4xl font-bold shadow mb-2">About me</h1>
            <p className="text-lg text-zinc-200">Some things about me</p>
          </div>
          <img
            src="images/bio_picture.jpg"
            className="w-20 h-20 mr-3 rounded-full border-2 border-white bg-slate-200"
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
        <div className="flex text-3xl">
          <Instagram className="mr-3" />
          <Twitter className="mr-3" />
          <Github className="mr-3" />
          <Linkedin className="" />
        </div>
      </div>
    </Page>
  );
}

export default AboutMe;
