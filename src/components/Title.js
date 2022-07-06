import React from "react";

const Title = ({ className, text }) => (
  <p className={`extra-bold text-4xl ${className ?? ""}`}>{text}</p>
);

export default Title;
