import React from "react";

const paragraphs = [
  "Development of Frontend applications using React, Typescript, Ant design, and Apollo-GraphQL for managing application states.",
  "Use of Webpack Module Federation for creating a Microfrontends environment",
  "Development of a ApolloServer as a gateway using NodeJS, Express and typescript",
  "Development of multiples microservers using NodeJS with express framework and mongoDB",
  "Use of dockers to deploy every microservices,gateway and frontend application"
];

const Fujitsu = () => {
  return (
    <section className="w-full shrink-0 snap-center">
      <h1 className="header-education">Fujitsu</h1>
      <div className="flex items-center justify-between mt-4 text-gray-300">
        <h2 className="sub-header-education">Full Stack Web Developer</h2>
        <span className="bold md:text-lg text-sm">feb-19 aug-21</span>
      </div>
      <ul className="list-disc list-inside mt-10 md:ml-4">
        {paragraphs.map((par) => {
          return (
            <li className="my-3 text-lg text-justify text-gray-400">{par}</li>
          );
        })}
      </ul>
    </section>
  );
};
export default Fujitsu;
