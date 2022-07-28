import React from "react";
import { List, Title2 } from "../../components";

const diplomas = [
  ["Diploma in business management", "2005-2010"],
  ["Degree in business administration", "2010-2012"]
];

const Degrees = () => {
  return (
    <div className="w-full">
      <Title2 text="University Education" />

      <List
        noJustify
        options={diplomas}
        render={(el) => (
          <>
            <span className="text-gray-500 ">{el[0]}</span>
            <span className="text-gray-600 ml-4">{el[1]}</span>
          </>
        )}
      />
    </div>
  );
};

export default Degrees;
