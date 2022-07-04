import React from "react";
import { ProfilePicture } from "../../components/ProfilePicture";

export const TopBar = () => {
  return (
    <div className="flex flex-row w-full justify-between p-4 bg-black ">
      <div className="w-12">
        <ProfilePicture />
      </div>
      <div>Right part</div>
    </div>
  );
};
