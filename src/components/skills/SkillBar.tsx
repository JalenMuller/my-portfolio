import { useEffect, useState } from "react";

function SkillBar(props: { data: { title: string; rating: number } }) {
  const skill = props.data;
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = skill.rating * 10;
  let pct = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      pct++;
      //   if variable pct is below target, increase state. Else, clear interval.
      //   done this way because getting percentage value from state will give an unupdated number
      if (pct >= targetPercentage) {
        clearInterval(interval);
      } else {
        setPercentage((percentage) => percentage + 1);
      }
      //   randomized speed/interval because it looks better
    }, Math.floor(Math.random() * 10));
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-80">
        <dl>
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {skill.title}
          </dt>
          <dd className="flex items-center mb-3">
            <div className="w-full bg-gray-300 dark:bg-gray-400 rounded h-2.5 dark:bg-gray-700 mr-2">
              <div
                className="bg-purple-700 h-2.5 rounded"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
              {skill.rating}
            </span>
          </dd>
        </dl>
      </div>
    </>
  );
}

export default SkillBar;
