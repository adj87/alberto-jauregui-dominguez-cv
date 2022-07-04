import React from "react";
import { useState } from "react";

const Langs = () => {
  const [lang, setLang] = useState("Es");
  const langs = ["Es", "En"];
  return (
    <div className="flex ml-3 text-2xl">
      {langs.map((el) => (
        <span
          className={`md:ml-4 ml-3 cursor-pointer ${
            el === lang ? "text-white extra-bold" : "text-gray-600"
          }`}
          onClick={() => setLang(el)}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default Langs;
