import Page from "../components/Page";
import { mySkills } from "../data/skills";
import SkillBar from "../components/skills/SkillBar";

function Skills() {
  return (
    <Page className="min-w-screen overflow-y-hidden bg-zinc-800 pt-24">
      <div className="mx-5 md:mx-7 text-white md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">My skills</h1>
        <p className="text-lg text-zinc-200 mb-2">
          What can I do for you or your company?
        </p>
        <p className="text-sm text-zinc-400 mb-8">
          I've tried to rate my skills as honestly as possible. I am still
          learning and I believe you are never truly perfect at something.
          However, I always strive to be and my ambition is of course to improve
          these skills.
        </p>
        {mySkills.map((skillGroup) => (
          <div className="mb-5">
            <h2 className="text-2xl text-zinc-100 font-semibold mb-3">
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
