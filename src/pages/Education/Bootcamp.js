import React from "react";
import { Title2, List } from "../../components";

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
    <div className="w-full row-span-2">
      <Title2 text="KeepCoding Web Startup Engineering Bootcamp" />

      <List options={assignatures} />
    </div>
  );
};

export default Bootcamp;
