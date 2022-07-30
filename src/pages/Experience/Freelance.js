import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of FrontEnd application for the sales man of a company. The application allows the sales man to create,read,edit and delete orders,customers,fares as well as to export catalogs in PDF format",
  "Development of a MVC backend architecture pattern in PHP from scratch",
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
