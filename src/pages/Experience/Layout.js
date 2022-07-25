const Layout = (props) => {
  const { company, rol, date, paragraphs } = props;
  return (
    <section className="w-full shrink-0 snap-center">
      <h1 className="mt-6 text-2xl md:text-3xl bold tracking-tighter">
        {company}
      </h1>
      <div className="flex items-center justify-between mt-4 text-gray-300 ml-2">
        <h2 className="text-xl md:text-2xl tracking-tighter">{rol}</h2>
        <span className="md:text-lg text-sm">{date}</span>
      </div>
      <ul className="list-disc list-inside mt-8 md:mt-14 md:ml-4">
        {paragraphs.map((par) => {
          return (
            <li className="my-3 text-lg text-justify text-gray-400">{par}</li>
          );
        })}
      </ul>
    </section>
  );
};
export default Layout;
