import React from "react";
import Title from "../../components/Title";
import Layout from "../Layout";
import Fujitsu from "./Fujitsu";

export const Experience = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Title text={"Experience"} className="pink-gradient" />
        <section className="flex w-full overflow-auto snap-x snap-mandatory">
          <Fujitsu />
        </section>
      </Layout>
    </div>
  );
};
