import {
  BsEye,
  BsShop,
  BsHandbag,
  BsPerson,
  BsQuestionDiamond,
  BsAt,
  BsSun,
  BsMoon,
} from "react-icons/bs";
import { FaStudiovinari } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "component/sideBar/SideBar.component";
import { Tooltip } from "component/tooltip/tooltip.component";
import { useSelector } from "react-redux";
import Lottie, { useLottie } from "lottie-react";
import loginLottie from "assets/lotties/112087-empty.json";
import SearchBar from "component/searchBar/Searchbar";
import Badge from "component/badge/Badge.component";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState();

  const Token = localStorage.getItem("TOKEN");

  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  useEffect(() => {
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    darkMode && setIsDarkMode(darkMode);
    const html = document.getElementById("root");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <nav className="sticky w-full bg-gradient-to-r from-stone-200 to-zinc-300 dark:bg-gradient-to-r dark:from-stone-800 dark:via-stone-900 dark:to-black top-0 z-20">
      <div className=" w-11/12 mx-auto text-xl h-16 text-carbon dark:text-white">
        <div className="justify-between mx-auto lg:max-w-8xl md:items-center md:flex">
          <div className="flex items-center justify-between py-3 lg:py-2 cursor-pointer">
            <Link
              to="/"
              className="flex text-2xl font-semibold gap-1 items-center justify-center duration-500"
            >
              <span>کوزا استور</span>
              <FaStudiovinari className="text-4xl text-salmon lg:text-5xl" />
            </Link>
            <div className="md:hidden">
              <button
                className="pt-2 rounded-md outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {
                  <svg
                    className="w-6 h-6 hover:text-salmon duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                }
              </button>
            </div>
          </div>

          <div className="hidden items-center text-xl lg:text-xl justify-between md:flex">
            <Link
              to="/shop"
              className="cursor-pointer hover:text-salmon duration-500 py-1 px-4"
            >
              فروشگاه
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer hover:text-salmon duration-500 py-1 pr-4"
            >
              تماس با ما
            </Link>
          </div>
        </div>
        <Sidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen}>
          {cart.length > 0 ? (
            <div className="p-4 h-120 overflow-y-auto duration-500 bg-white dark:bg-black border shadow-md sm:p-8 dark:border-gray-700">
              <div className="flex flex-col gap-5 md:flex-row justify-between items-center mb-4">
                <div className=" text-lg font-bold leading-none text-carbon dark:text-white">
                  محصولات موجود در سبد
                </div>
                <Link
                  to="/cart"
                  className="text-sm font-medium text-salmon hover:underline"
                  onClick={() => {
                    setIsCartOpen(false);
                  }}
                >
                  مشاهده جزییات
                </Link>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((item) => {
                    return (
                      <li key={item.id} className="py-0.5 border-y">
                        <div className="flex items-center space-x-4">
                          <Link
                            onClick={() => setIsCartOpen(false)}
                            to={`/productDetails/${item.gender}/${item.title}/${item.category}+${item.brand}+مدل+${item.model}/${item.id}`}
                            className="flex-shrink-0"
                          >
                            <img
                              className="w-14 h-16"
                              src={`http://localhost:3001/files/${item.image}`}
                              alt="product"
                            />
                          </Link>
                          <div className="flex-1 min-w-0">
                            <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                              {item.inCart} X
                            </p>
                            <p className="text-sm text-gray-400 truncate dark:text-gray-400"></p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {item.price} تومان
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <div className="w-72 mx-auto pt-28 dark:text-white">
              <Lottie animationData={loginLottie} height={400} width={400} />{" "}
              سبد خرید شما خالی است !
            </div>
          )}
        </Sidebar>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
          <Link
            to="/shop"
            className="flex items-center gap-3 justify-end text-xl cursor-pointer w-2/3 mx-auto  border-b-2 border-salmon  py-8 "
          >
            <span>فروشگاه</span>
            <BsShop />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-3 justify-end text-xl cursor-pointer w-2/3 mx-auto   py-8 "
          >
            <span>تماس با ما</span>
            <BsAt />
          </Link>
        </Sidebar>
      </div>
      <div className="w-full bg-gradient-to-r from-carbon to-stone-900  dark:text-white dark:text-emerald-800-heavy  py-2 shadow-xl">
        <div className="flex gap-3 w-11/12 h-full mx-auto justify-between items-center">
          <div className="w-full lg:w-1/3">
            <SearchBar />
          </div>
          <div className=" flex justify-center items-center gap-3 md:gap-5">
            {!isDarkMode ? (
              <Tooltip message="حالت شب">
                <BsMoon
                  onClick={() => {
                    localStorage.setItem("darkMode", "true");
                    setIsDarkMode(true);
                  }}
                  className="text-sm lg:text-lg text-white hover:text-salmon hover:scale-110 dark:text-white dark:hover:text-salmon duration-300 cursor-pointer "
                />
              </Tooltip>
            ) : (
              <Tooltip message="حالت روز">
                <BsSun
                  onClick={() => {
                    localStorage.setItem("darkMode", "false");
                    setIsDarkMode(false);
                  }}
                  className="text-lg lg:text-xl text-white hover:text-salmon hover:scale-110 dark:text-white dark:hover:text-salmon duration-300 cursor-pointer "
                />
              </Tooltip>
            )}
            <Tooltip message="مشاهده سریع سبد خرید">
              <div className="absolute -top-3 -right-2">
                <Badge />
              </div>
              <BsEye
                onClick={() => setIsCartOpen(true)}
                className="md:text-xl lg:text-xl text-white hover:text-salmon hover:scale-110 dark:text-white dark:hover:text-salmon duration-300 cursor-pointer "
              />
            </Tooltip>

            <Link
              to="/cart"
              className="flex relative items-center justify-center md:text-lg lg:text-xl text-white dark:text-white dark:hover:text-salmon duration-300"
            >
              <div className="absolute -top-3 -right-2">
                <Badge />
              </div>
              <BsHandbag className="hover:text-salmon hover:scale-110 duration-300" />
            </Link>

            <div className="flex justify-center items-center">
              <Link
                to={Token === null ? "/login" : "/admin/managementPanel"}
                className=" text-xl lg:text-2xl text-white hover:text-salmon dark:text-white hover:scale-110 dark:hover:text-salmon duration-300"
              >
                <BsPerson />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
