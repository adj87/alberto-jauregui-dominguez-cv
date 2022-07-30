import { Tag, Title2 } from "../../components";
import Title from "../../components/Title";
import { imgPrefix } from "../../utils";
import Layout from "../Layout";

const projects = [
  {
    name: "Technical Assignment for Bequest",
    description: "Address selector",
    href: "https://adj87.github.io/bequest-technical-test/",
    src: "bequest.png",
    technologies: ["React", "Typescript", "Taildwindcss", "Formik"]
  },
  {
    name: "Technical Assignment for Wellness",
    description: "Crud with backend in NODEJS with express",
    href: "https://kwhapp-front.herokuapp.com/",
    src: "kwhapp.png",
    technologies: ["React", "Styled Components"]
  },
  {
    name: "Technical Assignment for ATSistemas",
    description: "Movie library",
    href: "https://adj87.github.io/movie-library/",
    src: "at-sistemas.png",
    technologies: ["React", "Typescript", "NodeJS", "Express"]
  },
  {
    name: "Technical Assignment for X",
    description: "Simple crud using an external API, https://reqres.in/api",
    href: "https://adj87.github.io/simple-crud/",
    src: "2.png",
    technologies: ["React", "Redux", "Formik"]
  }
];

export const Portfolio = () => {
  return (
    <Layout size="lg">
      <Title text={"Portfolio"} className="green-gradient" />
      <h2 className="text-gray-400 text-xl mt-4">Some of my portfolio...</h2>
      <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-24 my-8">
        {projects.map((pr) => (
          <div>
            <h2 className="text-xl tracking-tighter mb-4 text-blue-100">
              {pr.name}
            </h2>
            <p className="text-gray-400 tracking-tighter mb-4 text-blue-100">
              {pr.description}
            </p>

            <a
              href={pr.href}
              target="_blank"
              rel="noreferrer"
              className="shadow-white box-shadow"
            >
              <img
                src={`${imgPrefix}/${pr.src}`}
                alt={`project-pr-${pr.name}`}
                className="hover:scale-105 transition transform-gpu rounded-md"
              />
            </a>
            <div className="flex justify-end mt-4 ml-4 flex-wrap">
              {pr.technologies.map((tech) => (
                <Tag text={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
