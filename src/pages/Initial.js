import { Mongo, ReactIcon, Node } from "../icons";

export const Initial = () => (
  <div className="flex flex-col items-center justify-between w-96 m-auto pt-14 h-screen">
    <img
      alt="alberto"
      src="/alberto.jpg"
      className="w-48 shadow-white-500/50"
      style={{ clipPath: "circle(40% at 50% 40%)" }}
    />
    <div className="lg:text-6xl text-5xl flex flex-col m-auto w-full items-center justify-between text-white extra-bold">
      <span>Alberto </span>
      <span>Jauregui </span>
      <span>Domínguez </span>
    </div>
    <div className="lg:text-5xl text-4xl flex flex-col m-auto w-full items-center justify-between h-18 text-white extra-bold">
      <span className="blue-gradient">Full Stack</span>
      <span className="blue-gradient text-center">Web Developer</span>
    </div>
    <div className="text-2xl flex flex-row m-auto  w-full items-start justify-around h-18 text-white ">
      <div className="items-center justify-center">
        <span className="text-center block text-gray-600 mb-2">M</span>
        <Mongo />
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-600 mb-2">E</span>
        <span className="extra-bold text-5xl">E</span>
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-600 mb-2">R</span>
        <ReactIcon />
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-600 mb-2">N</span>
        <Node />
      </div>
    </div>
  </div>
);
