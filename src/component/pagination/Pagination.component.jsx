const Pagination = ({ currentPage, totalPages, divideBy, back, forward }) => {
  return (
    <div className="flex flex-col items-center pb-3 dark:text-white">
      <span className="text-sm ">
        صفحه <span className="font-semibold text-gray">{currentPage}</span> از{" "}
        <span className="font-semibold text-gray">
          {Math.ceil(+totalPages / divideBy)}
        </span>{" "}
      </span>

      <div className="flex gap-1 mt-2 xs:mt-0">
        <button
          onClick={() => back()}
          className={
            currentPage < Math.ceil(+totalPages / divideBy)
              ? `py-2 px-4 text-sm font-medium text-white bg-salmon shadow-xl border-0 border-l border-gray-700 hover:bg-salmon-light`
              : `py-2 px-4 text-sm font-medium text-white bg-carbon shadow-xl border-0 border-l border-gray-700 hover:bg-zinc-600`
          }
          disabled={
            currentPage < Math.ceil(+totalPages / divideBy) ? false : true
          }
        >
          بعدی
        </button>
        <button
          onClick={() => forward()}
          className={
            currentPage > 1
              ? `py-2 px-4 text-sm font-medium text-white bg-salmon shadow-xl border-0 border-l border-gray-700 hover:bg-salmon-light`
              : `py-2 px-4 text-sm font-medium text-white bg-carbon shadow-xl border-0 border-l border-gray-700 hover:bg-zinc-600`
          }
          disabled={currentPage > 1 ? false : true}
        >
          قبلی
        </button>
      </div>
    </div>
  );
};
export default Pagination;
