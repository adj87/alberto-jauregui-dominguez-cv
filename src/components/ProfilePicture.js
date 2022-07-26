import React from "react";
import { imgPrefix } from "../utils";

export const ProfilePicture = () => (
  <img
    alt="alberto"
    src={`${imgPrefix}/alberto.jpg`}
    className="w-full hover:animate-spin"
    style={{ clipPath: "circle(50% at 50% 50%)" }}
  />
);
