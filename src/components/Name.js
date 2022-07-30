import React from "react";

const Name = ({ className }) => (
  <p
    className={`text-blue-100 tracking-tighter extra-bold  ${className ?? ""}`}
  >
    Alberto Jauregui Domínguez
  </p>
);

export default Name;
