// import { ILayout } from "types/Interface"
import React from "react";
import Header from "layout/header/mainHeader/Header.component";
import Footer from "layout/footer/Footer";
import { FaChevronUp } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-secondary text-zinc-600 bg-gradient-to-r from-stone-100 to-zinc-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white">
        {children}
      </main>
      <div className="w-full flex  items-center justify-center gap-3 pb-10 pt-32 bg-gradient-to-r from-stone-100 to-zinc-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white">
        <span>بازگشت به بالای صفحه</span>
        <span
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center justify-center h-8 w-8 border-2 border-salmon hover:bg-carbon duration-300 cursor-pointer bg-salmon text-white"
        >
          <FaChevronUp />
        </span>
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
