import React from "react";
import List from "../../components/List";

const diplomas = [
  ["Business Diploma", "2005-2010"],
  ["Degree in business administration", "2010-2012"]
];

const Degrees = () => {
  return (
    <div className="w-full">
      <p className="mt-4 md:text-3xl text-2xl bold tracking-tighter ">
        University Education
      </p>
      <List
        noJustify
        options={diplomas}
        render={(el) => (
          <>
            <span className="text-gray-400 ">{el[0]}</span>
            <span className="text-gray-600 ml-4">{el[1]}</span>
          </>
        )}
      />
    </div>
  );
};

export default Degrees;
