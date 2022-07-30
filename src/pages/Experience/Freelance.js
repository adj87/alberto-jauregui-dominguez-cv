import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of FrontEnd application for company sales team. The application allows the sales team to create, read, edit and delete orders, customers and fares, and to export catalogs in PDF format.",
  "Build MVC backend architecture pattern in PHP from scratch",
  "Development of plugins for wordpress using PHP and vanilla JS.",
  "Development of a website application for football trainers and technical staff. It enables the creation of football training sessions with an extensive library of exercises"
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

const dates = [[6, 2016]];

const Freelance = () => {
  return (
    <Layout
      company="Freelance"
      paragraphs={paragraphs}
      date={dates}
      rol={"Full Stack Web Developer"}
      techs={techs}
    />
  );
};
export default Freelance;
