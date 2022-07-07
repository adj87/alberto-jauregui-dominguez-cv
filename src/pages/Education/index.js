import React from "react";
import Title from "../../components/Title";
import Layout from "../Layout";

export const Education = () => {
  return (
    <div className="h-screen">
      <Layout>
        <Title text={"Education"} className="orange-gradient" />
        <section>
          <p className="mt-4 text-3xl bold tracking-tighter">
            KeepCoding Web Startup Engineering Bootcamp
          </p>

          <div className="mt-4 text-gray-400">
            <p>Git, GitHub & SourceTree </p>
            <p>Fundamentos de Frontend: HTML5, CSS3 y JavaScript </p>
            <p>Frontend Avanzado: Ajax, Grunt/Gulp, SASS, RWD </p>
            <p>Backend Avanzado con Node.js DevOps con Node.js </p>
            <p>Angular </p>
            <p>REACT</p>
            <p>Python, Django y REST</p>
            <p>
              Bases de Datos: PostgreSQL, MongoDB, Redis, ElasticSearch UX + IA
            </p>
            <p>SEO + Google Analytics + Social Media </p>
            <p>SCRUM & Agile </p>
            <p>Progressive Web Apps</p>
            <p>Web Components & Polymer.</p>
            <p>ReactJS. </p>
            <p>Electron. </p>
            <p>Ionic Framework.</p>
            <p>Bases de Datos. Docker Fundamentos de Diseño. </p>
            <p>Productividad.</p>
            <p>Entrepreneurship.</p>
          </div>
        </section>
      </Layout>
    </div>
  );
};
