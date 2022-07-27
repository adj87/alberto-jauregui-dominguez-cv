import React from "react";

const Title = ({ className, text }) => (
  <h1
    className={`bold text-4xl tracking-tighter md:text-5xl md:mt-34 ${
      className ?? ""
    }`}
  >
    {text}
  </h1>
);

export default Title;
