import React from "react";
import { Github, Linkedin } from "../../icons";

const links = [
  {
    component: () => <Github color="#001a7a" size={"35px"} />,
    href: "https://github.com/adj87"
  },
  {
    component: () => <Linkedin color="#001a7a" size={"35px"} />,
    href: "https://www.linkedin.com/in/alberto-jauregui-dominguez/"
  }
];

export const Bottom = () => {
  return (
    <div className="md:max-w-screen-xs flex justify-around m-auto py-16">
      {links.map(({ component: Component, href }) => (
        <a href={href} className="hover:scale-110">
          <Component />
        </a>
      ))}
    </div>
  );
};
