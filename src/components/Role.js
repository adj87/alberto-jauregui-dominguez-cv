export const Role = ({ className }) => (
  <>
    <span
      className={`lg:text-3xl text-2xl tracking-tighter text-blue-100 ${
        className ?? ""
      }`}
    >
      Full Stack
    </span>
    <span
      className={`lg:text-4xl text-3xl tracking-tighter extra-bold ${
        className ?? ""
      }`}
    >
      Web Developer
    </span>
  </>
);

export default Role;
