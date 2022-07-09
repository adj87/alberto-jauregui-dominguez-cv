import React from "react";

const diplomas = [
  ["Business Diploma", "2005-2010"],
  ["Degree in business administration", "2010-2012"]
];

const Degrees = () => {
  return (
    <div className="w-full shrink-0 snap-center">
      <p className="mt-4 md:text-3xl text-2xl bold tracking-tighter ">
        University Education
      </p>
      {diplomas.map((el) => (
        <div className="mt-12 ">
          <span className="text-gray-400 ">{el[0]}</span>
          <span className="text-gray-600 ml-4">{el[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default Degrees;
