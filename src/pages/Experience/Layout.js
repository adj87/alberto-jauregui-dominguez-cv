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

  const sDateIns = date[0] && new Date(date[0][1], date[0][0] - 1);
  const eDateIns = date[1] && new Date(date[1][1], date[1][0] - 1);

  const dateToString = (date) =>
    date && `${months[date.getMonth()]}/${date.getYear() - 100}`;

  return (
    <section className="w-full shrink-0 snap-center">
      <Title2 text={company} />

      <div className="flex items-center justify-between mt-4 ml-2">
        <h2 className="text-xl md:text-2xl tracking-tighter">{rol}</h2>
        <div className="flex items-center">
          <span className="md:text-lg text-sm text-blue-100">
            {`${dateToString(sDateIns)}`}
          </span>
          <span className="md:text-lg text-sm text-blue-100 mx-2"> - </span>

          {eDateIns ? (
            <span className="md:text-lg text-sm text-blue-100">
              {`${dateToString(eDateIns)}`}
            </span>
          ) : (
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-3 w-3 w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
        </div>
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
