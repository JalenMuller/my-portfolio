import Page from "../components/Page";
import { mySkills } from "../data/skills";
import SkillBar from "../components/skills/SkillBar";

function Skills() {
  return (
    <Page className="min-w-screen overflow-y-hidden bg-zinc-800 pt-20">
      <div className="mx-5 md:mx-7 text-white md:w-1/2">
        <h1 className="text-4xl font-bold mb-3">My skills</h1>
        <p className="text-lg text-zinc-200 mb-1">
          What can I do for you or your company?
        </p>
        <p className="text-sm text-zinc-400 mb-10">
          I've tried to rate my skills as honestly as possible. I am still
          learning and I believe you are never truly perfect at something.
          However, I always strive to be and my ambition is of course to improve
          these skills. Click on more info for a detailed description and
          screenshots for each project.
        </p>
        {mySkills.map((skillGroup) => (
          <div className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">
              {skillGroup.category}
            </h2>
            <div className="">
              {skillGroup.skills.map((skill) => (
                <SkillBar data={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Skills;
