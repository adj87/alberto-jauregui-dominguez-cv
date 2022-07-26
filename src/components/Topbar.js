import React, { useRef } from "react";
import useNearScreen from "../hooks/useNearScreen";
import Langs from "./Langs";
import { ProfilePicture } from "./ProfilePicture";
import Role from "./Role";

export const TopBar = () => {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef,
    once: false,
    distance: "0px"
  });

  const isTopBarShown = !isNearScreen;
  const className = isTopBarShown ? "opacity-1" : "opacity-0";

  return (
    <>
      <div
        className="ref"
        ref={externalRef}
        style={{ marginTop: "-250px", position: "absolute" }}
      ></div>
      <div
        className={`flex flex-row w-full justify-between py-2 px-4 sticky top-0 shadow-lg shadow-white main-bg transition-all duration-1000 ${className} z-10 `}
      >
        <div className="flex items-center">
          <div className="w-12">
            <ProfilePicture />
          </div>
        </div>
        <div className="flex items-center">
          <Role className="xxl:text-2xl text-xl" />
          {/*     <Langs /> */}
        </div>
      </div>
    </>
  );
};
