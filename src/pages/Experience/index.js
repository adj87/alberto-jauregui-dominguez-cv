import React from "react";
import Title from "../../components/Title";
import Layout from "../Layout";
import Wellness from "./Wellness";
import Fujitsu from "./Fujitsu";
import Freelance from "./Freelance";

export const Experience = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Title text={"Experience"} className="pink-gradient" />
        <section className="flex w-full overflow-auto snap-x snap-mandatory">
          <Wellness />
          <Fujitsu />
          <Freelance />
        </section>
      </Layout>
    </div>
  );
};
