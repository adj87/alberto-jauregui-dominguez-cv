import React from "react";
import Langs from "./Langs";
import Name from "./Name";
import { ProfilePicture } from "./ProfilePicture";
import Role from "./Role";

export const TopBar = () => {
  return (
    <div className="flex flex-row w-full justify-between py-2 px-4 sticky top-0 shadow-lg shadow-white">
      <div className="flex items-center">
        <div className="w-12">
          <ProfilePicture />
        </div>
      </div>
      <div className="flex items-center">
        <Role className="md:text-2xl text-xl bold" />
        <Langs />
      </div>
    </div>
  );
};
