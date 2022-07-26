import React from "react";
import { Github } from "../../icons/Github";

const links = [
  {
    component: () => <Github color="#c8c8c8" />,
    href: "https://github.com/adj87"
  }
];

export const Bottom = () => {
  return (
    <div className="md:max-w-screen-md flex justify-center m-auto py-12">
      {links.map(({ component: Component, href }) => (
        <a href={href} className="hover:scale-105">
          <Component />
        </a>
      ))}
    </div>
  );
};
