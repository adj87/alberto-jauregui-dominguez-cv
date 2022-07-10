import React, { useRef } from "react";
import Title from "../../components/Title";
import useNearScreen from "../../hooks/useNearScreen";
import Layout from "../Layout";
import Bootcamp from "./Bootcamp";
import Courses from "./Courses";
import Degrees from "./Degrees";

export const Education = () => {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef,
    //distance: "50px",
    once: false,
    threshold: 0.3
  });

  return (
    <div
      className={`h-screen transition duration-1000 ${
        isNearScreen ? "opacity-1" : "opacity-40"
      }`}
      ref={externalRef}
    >
      <Layout>
        <Title text={"Education"} className="orange-gradient" />
        <section className="flex w-full overflow-auto snap-x snap-mandatory">
          <Bootcamp />
          <Courses />
          <Degrees />
        </section>
      </Layout>
    </div>
  );
};
