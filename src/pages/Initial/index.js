import Name from "../../components/Name";
import { ProfilePicture } from "../../components/ProfilePicture";
import Role from "../../components/Role";
import { Mongo, ReactIcon, Node } from "../../icons";
import Layout from "../Layout";
import Logos from "./Logos";

export const Initial = () => (
  <Layout>
    <div className="flex flex-col items-center justify-between md:w-96 m-auto pt-14 h-screen">
      <div className="w-48 shadow-white-500/50">
        <ProfilePicture />
      </div>
      <div className="lg:text-5xl text-4xl flex flex-col m-auto w-full items-center justify-between">
        <Name className="text-center one-word" />
      </div>
      <div className="flex flex-col w-full items-center justify-between h-18 text-center">
        <Role />
      </div>
      <div className="text-2xl flex flex-row m-auto w-full items-start justify-around h-18">
        <Logos />
      </div>
    </div>
  </Layout>
);
