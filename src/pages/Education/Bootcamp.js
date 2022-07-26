import React from "react";
import List from "../../components/List";

const assignatures = [
  "Git, GitHub & SourceTree",
  "Fundamentals of Frontend development: HTML5, CSS3 and JavaScript ",
  "Advanced Frontend: Ajax, Grunt/Gulp, SASS, RWD ",
  "Advanced Backend with NodeJS, DevOps with NodeJS ",
  // "Angular",
  "React",
  "Python, Django y REST",
  "DataBases: PostgreSQL, MongoDB, Redis, ElasticSearch UX + IA",
  "SEO + Google Analytics + Social Media ",
  "SCRUM & Agile ",
  "Progressive Web Apps",
  "Web Components & Polymer",
  "Electron ",
  "Ionic Framework",
  "Docker",
  "Fundamentals of design",
  "Productivity"
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
