export const Role = ({ className }) => (
  <>
    <span className={`tracking-tighter text-gray-400 ${className ?? ""}`}>
      Full Stack
    </span>
    <span className={`tracking-tighter extra-bold ${className ?? ""}`}>
      Web Developer
    </span>
  </>
);

export default Role;
