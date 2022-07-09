import React from "react";

const courses = [
  [
    "MicroFrontends with ReactJS",
    "https://www.udemy.com/certificate/UC-35f980e5-5199-4ebb-80e0-1ed7820d8e11/"
  ],
  [
    "Advanced React and Redux 2020 Edition",
    "https://www.udemy.com/certificate/UC-db67c89b-e8b1-41cf-abc2-e3d29e349973/"
  ],
  [
    "Curso BBDD relaciones, SQL & MySQL",
    "https://plataforma.keepcoding.io/courses/251020/certificate"
  ],
  ["Curso ReactJS ", "https://www.udemy.com/certificate/UC-9LLOIRKD/"],
  [
    "The Complete Oracle SQL Certification Course ",
    "https://www.udemy.com/certificate/UC-DF7WVLW4/"
  ],
  ["Curso Git, GitHub & SourceTree", "a"]
];

const Courses = () => {
  return (
    <div className="w-full shrink-0 snap-center">
      <p className="mt-4 md:text-3xl text-2xl bold tracking-tighter">
        Online Courses
      </p>

      <div className="mt-12 text-gray-400 flex justify-around flex-col">
        {courses.map((c) => (
          <a href={c[1]} className="mt-4 hover:text-white transition">
            {c[0]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Courses;
