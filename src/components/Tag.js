export const Tag = ({ text }) => {
  return (
    <span class="bg-blue-100 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 cursor-default">
      {`#${text}`}
    </span>
  );
};
