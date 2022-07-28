import React from "react";
import { Github, Linkedin } from "../../icons";

const links = [
  {
    component: () => <Github color="#dbeafe" size={"35px"} />,
    href: "https://github.com/adj87"
  },
  {
    component: () => <Linkedin color="#dbeafe" size={"35px"} />,
    href: "https://www.linkedin.com/in/alberto-jauregui-dominguez/"
  }
];

export const Bottom = () => {
  return (
    <footer className="flex flex-col w-full my-8 ">
      <div className="md:max-w-screen-xs  w-full flex justify-around m-auto pb-4 pt-20">
        {links.map(({ component: Component, href }) => (
          <a href={href} className="hover:scale-110">
            <Component />
          </a>
        ))}
      </div>
      <p className="text-center text-lg text-blue-100 bold">mr_jaurewi</p>
      <p className="text-center text-gray-400 text-blue-100">
        {new Date().getFullYear()}
      </p>
      <p className="text-center text-gray-500 mt-4">
        Made with{" "}
        <a
          href="https://reactjs.org/"
          className="text-blue-200 hover:text-blue-400 transition"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
        <span>{" and "}</span>
        <a
          href="https://tailwindcss.com/"
          className="text-blue-200 hover:text-blue-400 transition"
          target="_blank"
          rel="noreferrer"
        >
          TaildwindCSS
        </a>
      </p>
    </footer>
  );
};
