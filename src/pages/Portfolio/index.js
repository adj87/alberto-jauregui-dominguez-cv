import Title from "../../components/Title";
import Layout from "../Layout";

const imgPrefix = "/alberto-jauregui-dominguez-cv";

const projects = [
  {
    name: "Technical Assignment Bequest",
    href: "https://adj87.github.io/bequest-technical-test/",
    src: "bequest.png"
  },
  {
    name: "Technical Assignment Wellness",
    href: "https://kwhapp-front.herokuapp.com/",
    src: "kwhapp.png"
  },
  {
    name: "Technical Assignment ATSistemas",
    href: "https://adj87.github.io/movie-library/",
    src: "at-sistemas.png"
  },
  {
    name: "Technical Assignment X",
    href: "https://adj87.github.io/simple-crud/",
    src: "2.png"
  }
];

export const Portfolio = () => {
  return (
    <Layout>
      <Title text={"Portfolio"} className="green-gradient" />
      <div className="grid grid-cols md:grid-cols-2 gap-x-4 gap-y-8 my-8">
        {projects.map((pr) => (
          <div>
            <p className="mb-8">{pr.name}</p>
            <a href={pr.href}>
              <img
                src={`${imgPrefix}/${pr.src}`}
                alt={`project-pr-${pr.name}`}
                className="hover:scale-105 transition transform-gpu"
              />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
