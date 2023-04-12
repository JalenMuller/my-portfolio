import React from "react";
import { Link45deg } from "react-bootstrap-icons";

function Link(props: {
  url: string;
  className?: string;
  linkClassName?: string;
}) {
  return (
    <div
      className={`flex items-end mb-3 md:mb-5 hover:text-purple-500 ${props?.className}`}
    >
      <Link45deg className="align-[20px]" />
      <a
        className={`truncate ml-1 ${props?.linkClassName}`}
        href={`https://${props.url}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.url}
      </a>
    </div>
  );
}

export default Link;
