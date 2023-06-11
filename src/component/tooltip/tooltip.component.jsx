export const Tooltip = ({ message, children }) => {
  return (
    <div className="relative  flex flex-col items-center group">
      {children}
      <div className="absolute top-6 flex-col items-center hidden mb-6 group-hover:flex">
        <div className="w-3 h-3 -mb-2 rotate-45 bg-zinc-200"></div>
        <span className="relative z-40 p-2 text-sm w-24 whitespace-no-wrap text-zinc-900 bg-zinc-200 shadow-lg rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};
