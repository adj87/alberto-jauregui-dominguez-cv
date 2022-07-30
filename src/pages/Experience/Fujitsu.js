import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of react applications using redux for managing application states and duck as modular pattern.",
  "Development of API REST with SpringBoot with JAVA.",
  "Development of react-native applications using apolloclient as manager state",
  "Maintenance of old frontend applications with jQuery and vanillaJS",
  "Use of dockers to deploy API RESTS"
];

const dates = [
  [2, 2019],
  [8, 2021]
];

const techs = [
  "React",
  "Redux",
  "MaterialUI",
  "Java",
  "Springboot",
  "vanillaJS",
  "jQuery"
];

const Fujitsu = () => {
  return (
    <Layout
      company="Fujitsu"
      paragraphs={paragraphs}
      date={dates}
      rol={"Full Stack Web Developer"}
      techs={techs}
    />
  );
};
export default Fujitsu;
