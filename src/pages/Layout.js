import React, { useRef } from "react";
import useNearScreen from "../hooks/useNearScreen";

const Layout = ({ children }) => {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef,
    distance: "10px",
    once: false,
    threshold: 0.4
  });

  const className = isNearScreen ? "opacity-1" : "opacity-20";
  return (
    <div
      className={`md:max-w-screen-md px-6 md:px-8 m-auto mt-12 transition duration-1000  ${className}`}
      ref={externalRef}
    >
      {children}
    </div>
  );
};

export default Layout;
