import React from "react";

const List = ({ options, render, noJustify }) => {
  const classLi = `my-3 text-lg ${!noJustify && "text-justify"} text-gray-400`;
  return (
    <ul className="list-disc list-inside mt-8 md:mt-14 md:ml-4">
      {options.map((opt) => {
        if (render) return <li className={classLi}>{render(opt)}</li>;
        if (!opt.every) return <li className={classLi}>{opt}</li>;
        return (
          <li className={`${classLi} hover:text-white transition`}>
            {<a href={opt[1]}>{opt[0]}</a>}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
