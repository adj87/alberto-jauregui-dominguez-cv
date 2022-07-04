import React from "react";
import Name from "../../components/Name";
import { ProfilePicture } from "../../components/ProfilePicture";
import Role from "../../components/Role";

export const TopBar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-2 bg-black">
      <div className="flex items-center text-2xl">
        <div className="w-12">
          <ProfilePicture />
        </div>

        <div className="ml-4">
          <Name />
        </div>
      </div>
      <div className="flex items-center">
        <Role className="text-2xl" />
      </div>
    </div>
  );
};
