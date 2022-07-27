import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of Frontend applications using React, Typescript, Ant design, and Apollo-GraphQL for managing application states.",
  "Use of Webpack Module Federation for creating a Microfrontends environment",
  "Development of a ApolloServer as a gateway using NodeJS, Express and typescript",
  "Development of multiples microservers using NodeJS with express framework and mongoDB",
  "Use of dockers to deploy every microservices, gateway and frontend application"
];

const Wellness = () => {
  return (
    <Layout
      company="Wellness Techgroup"
      paragraphs={paragraphs}
      date={"feb-19 aug-21"}
      rol={"Full Stack Web Developer"}
    />
  );
};
export default Wellness;
