import React from "react";

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

      <div className="mt-12 text-gray-400">
        {assignatures.map((el) => (
          <p className="mt-2">{el}</p>
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;
