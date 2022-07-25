import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of FrontEnd application for a sales man of a company",
  "Development of Backend applications (MVC) with NodeJS and PHP",
  "Development of plugins for wordpress using PHP and vanilla JS."
];

const Freelance = () => {
  return (
    <Layout
      company="Freelance"
      paragraphs={paragraphs}
      date={"feb-19 aug-21"}
      rol={"Full Stack Web Developer"}
    />
  );
};
export default Freelance;
