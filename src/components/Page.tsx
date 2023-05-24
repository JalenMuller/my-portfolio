import React from "react";

function Page(props: { children: React.ReactNode; className?: string }) {
  let classNames: string;

  if (props.className) {
    classNames = props.className + " bg-gray-100 dark:bg-zinc-800";
  } else {
    classNames =
      "flex flex-col items-center justify-center w-screen h-screen bg-zinc-800";
  }
  return <div className={classNames}>{props.children}</div>;
}

export default Page;
