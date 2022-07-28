import { List, Tag, Title2 } from "../../components";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];

const Layout = (props) => {
  const { company, rol, date, paragraphs, techs } = props;

  const sDateIns = new Date(date[0][1], date[0][0] - 1);
  const eDateIns = new Date(date[1][1], date[1][0] - 1);

  const dateToString = (date) =>
    `${months[date.getMonth()]}/${date.getYear() - 100}`;

  return (
    <section className="w-full shrink-0 snap-center">
      <Title2 text={company} />

      <div className="flex items-center justify-between mt-4 ml-2">
        <h2 className="text-xl md:text-2xl tracking-tighter">{rol}</h2>
        <span className="md:text-lg text-sm text-blue-100">
          {`${dateToString(sDateIns)} - ${dateToString(eDateIns)}`}
        </span>
      </div>
      <List options={paragraphs} />
      <div className="mt-4 flex justify-end flex-wrap">
        {techs?.map((opt) => (
          <Tag text={opt} />
        ))}
      </div>
    </section>
  );
};
export default Layout;
