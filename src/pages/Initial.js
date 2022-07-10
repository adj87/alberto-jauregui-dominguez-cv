import Name from "../components/Name";
import { ProfilePicture } from "../components/ProfilePicture";
import Role from "../components/Role";
import { Mongo, ReactIcon, Node } from "../icons";
import Layout from "./Layout";

export const Initial = () => (
  <Layout>
    <div className="flex flex-col items-center justify-between w-96 m-auto pt-14 h-screen">
      <div className="w-48 shadow-white-500/50">
        <ProfilePicture />
      </div>

      <div className="lg:text-5xl text-4xl flex flex-col m-auto w-full items-center justify-between">
        <Name className="text-center one-word" />
      </div>
      <div className="lg:text-4xl text-3xl flex flex-col w-full items-center justify-between h-18 text-center">
        <Role />
      </div>
      <div className="text-2xl flex flex-row m-auto  w-full items-start justify-around h-18 text-white ">
        <div className="items-center justify-center">
          <span className="text-center block text-gray-500 mb-2">M</span>
          <Mongo />
        </div>
        <div className="flex flex-col">
          <span className="text-center block text-gray-500 mb-2">E</span>
          <span className="extra-bold text-5xl">E</span>
        </div>
        <div className="flex flex-col">
          <span className="text-center block text-gray-500 mb-2">R</span>
          <ReactIcon />
        </div>
        <div className="flex flex-col">
          <span className="text-center block text-gray-500 mb-2">N</span>
          <Node />
        </div>
      </div>
    </div>
  </Layout>
);
