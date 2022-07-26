import React from "react";
import List from "../../components/List";

const assignatures = [
  "Git, GitHub & SourceTree ",
  "Fundamentos de Frontend: HTML5, CSS3 y JavaScript ",
  "Frontend Avanzado: Ajax, Grunt/Gulp, SASS, RWD ",
  "Backend Avanzado con Node.js DevOps con Node.js ",
  // "Angular",
  "REACT",
  "Python, Django y REST",
  "Bases de Datos: PostgreSQL, MongoDB, Redis, ElasticSearch UX + IA",
  "SEO + Google Analytics + Social Media ",
  "SCRUM & Agile ",
  "Progressive Web Apps",
  "Web Components & Polymer",
  "ReactJS. ",
  "Electron ",
  "Ionic Framework",
  "Bases de Datos",
  "Docker",
  "Fundamentos de Diseño ",
  "Productividad."
  //  "Entrepreneurship."
];

const Bootcamp = () => {
  return (
    <div className="w-full shrink-0 snap-center">
      <p className="mt-4 md:text-3xl text-2xl bold tracking-tighter">
        KeepCoding Web Startup Engineering Bootcamp
      </p>

      <List options={assignatures} />
    </div>
  );
};

export default Bootcamp;
