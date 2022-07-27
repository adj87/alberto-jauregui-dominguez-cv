import { List, Title2 } from "../../components";

const Layout = (props) => {
  const { company, rol, date, paragraphs } = props;
  return (
    <section className="w-full shrink-0 snap-center">
      <Title2 text={company} />

      <div className="flex items-center justify-between mt-4 ml-2">
        <h2 className="text-xl md:text-2xl tracking-tighter">{rol}</h2>
        <span className="md:text-lg text-sm">{date}</span>
      </div>
      <List options={paragraphs} />
    </section>
  );
};
export default Layout;
