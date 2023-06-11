import React from "react";
export default function Sidebar({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity duration-500 translate-x-0   "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg left-0 absolute bg-gradient-to-r from-carbon to-stone-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="h-20 relative">
          <svg
            onClick={() => {
              setIsOpen(false);
            }}
            className="w-6 h-6 top-5 right-5 text-white absolute cursor-pointer hover:text-salmon duration-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <article className="sidebar-body relative mx-auto max-w-lg text-white flex flex-col space-y-6 h-full">
          <div className="w-11/12 mx-auto">{children}</div>
        </article>
      </section>
      <section
        className="w-full h-full"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
}
