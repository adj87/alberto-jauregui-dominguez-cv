import React from "react";
import { Mongo, Node, ReactIcon } from "../../icons";

const Logos = () => {
  return (
    <>
      <div className="items-center justify-center">
        <span className="text-center block text-gray-500 mb-2">M</span>
        <Mongo />
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-500 mb-2">E</span>
        <span className="extra-bold text-5xl">E</span>
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-500 mb-2">R</span>
        <ReactIcon />
      </div>
      <div className="flex flex-col">
        <span className="text-center block text-gray-500 mb-2">N</span>
        <Node />
      </div>
    </>
  );
};

export default Logos;
