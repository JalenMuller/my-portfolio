import React from "react";

function SkillBar() {
  return (
    <>
      <h3 className="text-lg mb-2 text-zinc-300">JavaScript</h3>
      <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </>
  );
}

export default SkillBar;
