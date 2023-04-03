import Page from "../components/Page";
import SkillBar from "../components/skills/SkillBar";

function Skills() {
  return (
    <Page className="min-h-screen min-w-screen bg-zinc-800 pt-20">
      <div className="mx-5 text-white">
        <h1 className="text-4xl font-bold mb-2">My skills</h1>
        <p className="text-base text-zinc-400 mb-5">
          What can I do for you or your company?
        </p>
        <h2 className="text-2xl font-semibold ml-2 mb-3">Programming</h2>
        <div className="ml-2">
          <SkillBar />
        </div>
      </div>
    </Page>
  );
}

export default Skills;
