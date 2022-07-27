import React, { useRef } from "react";
import Title from "../../components/Title";
import useNearScreen from "../../hooks/useNearScreen";
import Layout from "../Layout";
import Bootcamp from "./Bootcamp";
import Courses from "./Courses";
import Degrees from "./Degrees";

export const Education = () => {
  return (
    <Layout size="lg">
      <Title text={"Education"} className="orange-gradient" />
      <section className="flex w-full grid md:grid-rows-2 md:grid-flow-col gap-6">
        <Bootcamp />
        <Courses />
        <Degrees />
      </section>
    </Layout>
  );
};
