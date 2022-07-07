import React from "react";

const Title = ({ className, text }) => (
  <p
    className={`bold text-4xl tracking-tighter md:text-5xl md:mt-34 ${
      className ?? ""
    }`}
  >
    {text}
  </p>
);

export default Title;
