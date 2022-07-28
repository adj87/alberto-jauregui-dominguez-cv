import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of FrontEnd application for a sales man of a company. The application allows the sales man to CRUD of orders and customers, fares and export catalogs as PDFS",
  "Development of a MVC backend architecture pattern from scratch in PHP",
  "Development of plugins for wordpress using PHP and vanilla JS.",
  "Development of a website application for football trainners and technical stuff. It enables you to create trainning footballs session  by selecting football trainning football exercises from a very large and extensive library of exercises"
];

const techs = [
  "React",
  "vanillaJS",
  "jQuery",
  "Taildwind",
  "Bootstrap",
  "nodeJS",
  "KeystoneJS",
  "graphQL",
  "PHP"
];

const Freelance = () => {
  return (
    <Layout
      company="Freelance"
      paragraphs={paragraphs}
      date={"feb-19 aug-21"}
      rol={"Full Stack Web Developer"}
      techs={techs}
    />
  );
};
export default Freelance;
