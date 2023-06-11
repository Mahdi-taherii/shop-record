const Button = ({ text, Click, config }) => {
  return (
    <button
      onClick={(e) => Click(e)}
      className={`relative text-sm inline-flex items-center justify-start px-6 py-3 overflow-hidden mt-5 ${config}  font-medium transition-all bg-salmon group`}
    >
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-700 ease-in-out delay-200 bg-carbon  group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-0  w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-12 bg-carbon  group-hover:mb-12 group-hover:translate-x-0"></span>
      <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
    </button>
  );
};
export default Button;
