import React from "react";
import Layout from "./Layout";

const paragraphs = [
  "Development of react applications using redux for managing application states and duck as modular pattern. Advance use of ES6 syntax.",
  "Development of API REST with SpringBoot with JAVA.",
  "Development of react-native applications using apolloclient as manager state",
  "Maintenance of old frontend applications with jQuery and vanillaJS",
  "Use of dockers to deploy API REST"
];

const Fujitsu = () => {
  return (
    <Layout
      company="Fujitsu"
      paragraphs={paragraphs}
      date={"feb-19 aug-21"}
      rol={"Full Stack Web Developer"}
    />
  );
};
export default Fujitsu;
