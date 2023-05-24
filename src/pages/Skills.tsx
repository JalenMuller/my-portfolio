import Page from "../components/Page";
import { mySkills } from "../data/skills";
import SkillBar from "../components/skills/SkillBar";
import LangString from "../components/LangString";

function Skills() {
  return (
    <Page className="min-w-screen overflow-y-hidden pt-7">
      <div className="mx-5 md:mx-10 text-white md:w-2/3">
        <h1 className="text-4xl text-gray-600 dark:text-white font-bold mb-2">
          <LangString stringName="skills_title" />
        </h1>
        <p className="text-lg font-semibold italic text-purple-500 mb-2">
          <LangString stringName="skills_subheading" />
        </p>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8">
          <LangString stringName="skills_description" />
        </p>
        {mySkills.map((skillGroup, i) => (
          <div key={i} className="mb-5">
            <h2 className="text-2xl text-gray-700 dark:text-zinc-100 font-semibold mb-3">
              {skillGroup.category}
            </h2>
            <div>
              {skillGroup.skills.map((skill) => (
                <SkillBar key={skill.title} data={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Skills;
