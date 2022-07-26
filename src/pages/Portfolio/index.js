import Title from "../../components/Title";
import { imgPrefix } from "../../utils";
import Layout from "../Layout";

const projects = [
  {
    name: "Technical Assignment Bequest",
    href: "https://adj87.github.io/bequest-technical-test/",
    src: "bequest.png",
    technologies: ["React", "Typescript", "Taildwindcss", "Formik"]
  },
  {
    name: "Technical Assignment Wellness",
    href: "https://kwhapp-front.herokuapp.com/",
    src: "kwhapp.png",
    technologies: ["React", "Styled Components"]
  },
  {
    name: "Technical Assignment ATSistemas",
    href: "https://adj87.github.io/movie-library/",
    src: "at-sistemas.png",
    technologies: ["React", "Typescript", "NodeJS", "Express"]
  },
  {
    name: "Technical Assignment X",
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
      <div className="grid grid-cols md:grid-cols-3 gap-x-4 gap-y-8 my-8">
        {projects.map((pr) => (
          <div>
            <p className="mb-8 text-md">{pr.name}</p>
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
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 cursor-default">
                  {`#${tech}`}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
