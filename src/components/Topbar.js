import React, { useRef } from "react";
import useNearScreen from "../hooks/useNearScreen";
import Langs from "./Langs";
import { ProfilePicture } from "./ProfilePicture";
import Role from "./Role";

export const TopBar = () => {
  const externalRef = useRef();
  const { isNearScreen, fromRef } = useNearScreen({
    externalRef,
    once: false,
    distance: "50px"
  });

  console.log(isNearScreen, fromRef);

  return (
    <div
      className="flex flex-row w-full justify-between py-2 px-4 sticky top-0 shadow-lg shadow-white main-bg"
      ref={externalRef}
    >
      <div className="flex items-center">
        <div className="w-12">
          <ProfilePicture />
        </div>
      </div>
      <div className="flex items-center">
        <Role className="md:text-2xl text-xl" />
        <Langs />
      </div>
    </div>
  );
};
