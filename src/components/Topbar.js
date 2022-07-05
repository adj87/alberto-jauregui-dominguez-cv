import React from "react";
import Langs from "./Langs";
import Name from "./Name";
import { ProfilePicture } from "./ProfilePicture";
import Role from "./Role";

export const TopBar = () => {
  return (
    <div className="flex flex-row w-full justify-between py-2 px-4 bg-black sticky top-0">
      <div className="flex items-center">
        <div className="w-12">
          <ProfilePicture />
        </div>

        <div className="ml-4">
          <Name className="text-2xl hidden md:block" />
        </div>
      </div>
      <div className="flex items-center">
        <Role className="md:text-2xl text-xl" />
        <Langs />
      </div>
    </div>
  );
};
