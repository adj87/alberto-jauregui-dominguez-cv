import React from "react";
import Title from "../../components/Title";
import Layout from "../Layout";
import Wellness from "./Wellness";
import Fujitsu from "./Fujitsu";
import Freelance from "./Freelance";

export const Experience = () => {
  return (
    <Layout size="lg">
      <Title text={"Experience"} className="pink-gradient" />
      <section className="flex w-full grid lg:grid-cols-2 gap-6">
        <Wellness />
        <Fujitsu />
        <Freelance />
      </section>
    </Layout>
  );
};
