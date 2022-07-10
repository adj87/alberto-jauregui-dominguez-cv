import React, { useRef } from "react";
import Title from "../../components/Title";
import useNearScreen from "../../hooks/useNearScreen";
import Layout from "../Layout";
import Bootcamp from "./Bootcamp";
import Courses from "./Courses";
import Degrees from "./Degrees";

export const Education = () => {
  return (
    <Layout>
      <Title text={"Education"} className="orange-gradient" />
      <section className="flex w-full overflow-auto snap-x snap-mandatory">
        <Bootcamp />
        <Courses />
        <Degrees />
      </section>
    </Layout>
  );
};
