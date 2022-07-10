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
    distance: "0px"
  });

  console.log(isNearScreen, fromRef);

  return (
    <>
      <div
        className="ref"
        ref={externalRef}
        // className="bg-white p-8 w-full"
      ></div>
      <div
        className="flex flex-row w-full justify-between py-2 px-4 sticky top-0 shadow-lg shadow-white main-bg"
        style={{ display: !isNearScreen ? "flex" : "none" }}
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
    </>
  );
};
