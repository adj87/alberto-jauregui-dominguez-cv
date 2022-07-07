import React from "react";

const Name = ({ className }) => (
  <p
    className={`blue-gradient text-white tracking-tighter extra-bold ${
      className ?? ""
    }`}
  >
    Alberto Jauregui Domínguez
  </p>
);

export default Name;
