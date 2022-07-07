import React from "react";
import { useState } from "react";

const Langs = () => {
  const [lang, setLang] = useState("es");
  const langs = ["es", "en"];
  return (
    <div className="flex ml-3 text-xl">
      {langs.map((el) => (
        <span
          className={`md:ml-4 ml-3 cursor-pointer ${
            el === lang ? "text-gray-300" : "text-gray-600"
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
