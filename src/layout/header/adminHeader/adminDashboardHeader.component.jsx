import React, { useEffect, useState } from "react";
import avatar from "assets/images/website/about-us-2.webp";
import {
  BsBoxArrowRight,
  BsHouse,
  BsTruck,
  BsCoin,
  BsUpcScan,
  BsBrightnessHigh,
  BsMoon,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "component/sideBar/SideBar.component";
import { Tooltip } from "component/tooltip/tooltip.component";
import Swal from "sweetalert2";

const AdminHeader = ({ active }) => {
  let isActive = active;

  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    darkMode && setIsDarkMode(darkMode);
    const html = document.getElementById("root");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [isDarkMode]);

  const exit = () => {
    Swal.fire({
      title: "آیا از خروج خود اطمینان دارید؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ff084e",
      cancelButtonColor: "#383838",
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "خدانگهدار",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.removeItem("TOKEN");
        navigate("/login");
      }
    });
  };
  return (
    <nav className="w-full h-20 bg-gradient-to-r from-carbon to-stone-900 dark:bg-gradient-to-r dark:from-stone-800 dark:via-stone-900 dark:to-black sticky top-0 shadow z-10  text-xl text-white">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-4 lg:px-10">
        <div>
          <div className="flex items-center justify-between py-3 cursor-pointer">
            <Link
              to="/admin/managementPanel"
              className="relative flex items-center justify-center gap-5 text-white hover:text-salmon duration-500"
            >
              <span className="flex absolute bottom-0 right-1 h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 border border-white bg-green-500"></span>
              </span>
              <img
                className="h-14 w-14 rounded-full border-slate-200 border-2"
                src={avatar}
                alt="avatar"
              />
              <div>
                <p className="text-md text-stone-400">پنل مدیریت</p>
                <p>الهه مظفری</p>
              </div>
            </Link>
            <div className="md:hidden flex justify-center items-center">
              {!isDarkMode ? (
                <Tooltip message="حالت شب">
                  <BsMoon
                    onClick={() => {
                      const html = document.getElementById("root");
                      setIsDarkMode(true);
                      html.classList.add("dark");
                    }}
                    className="text-sm lg:text-xl hover:text-salmon dark:text-white hover:scale-110 dark:hover:text-salmon duration-500 cursor-pointer "
                  />
                </Tooltip>
              ) : (
                <Tooltip message="حالت روز">
                  <BsBrightnessHigh
                    onClick={() => {
                      const html = document.getElementById("root");
                      setIsDarkMode(false);
                      html.classList.remove("dark");
                    }}
                    className="text-lg lg:text-2xl hover:text-salmon dark:text-white hover:scale-110 dark:hover:text-salmon duration-500 cursor-pointer "
                  />
                </Tooltip>
              )}
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setIsOpen(!isOpen)}
              >
                {
                  <svg
                    className="w-6 h-6 text-white hover:text-salmon"
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
        </div>
        <div className="hidden items-center gap-5 lg:gap-10 justify-between md:flex">
          <Link
            to="/admin/products/1"
            className={
              isActive === "products"
                ? "bg-white rounded-full py-1 px-4 text-salmon  cursor-pointer hover:text-carbon duration-500"
                : "cursor-pointer hover:text-salmon duration-500 py-1 px-4"
            }
          >
            کالا ها
          </Link>
          <Link
            to="/admin/prices/1"
            className={
              isActive === "prices"
                ? "bg-white rounded-full py-1 px-4 text-salmon  cursor-pointer hover:text-carbon duration-500"
                : "cursor-pointer hover:text-salmon duration-500 py-1 px-4"
            }
          >
            موجودی و قیمت ها
          </Link>
          <Link
            to="/admin/orders/1"
            className={
              isActive === "orders"
                ? "bg-white rounded-full py-1 px-4 text-salmon  cursor-pointer hover:text-carbon duration-500"
                : "cursor-pointer hover:text-salmon duration-500 py-1 px-4"
            }
          >
            سفارش ها
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 justify-center ">
          {!isDarkMode ? (
            <Tooltip message="حالت شب">
              <BsMoon
                onClick={() => {
                  localStorage.setItem("darkMode", "true");
                  setIsDarkMode(true);
                }}
                className="text-xl hover:text-salmon dark:text-white hover:scale-110 dark:hover:text-salmon duration-500 cursor-pointer "
              />
            </Tooltip>
          ) : (
            <Tooltip message="حالت روز">
              <BsBrightnessHigh
                onClick={() => {
                  localStorage.setItem("darkMode", "false");
                  setIsDarkMode(false);
                }}
                className="text-lg lg:text-2xl hover:text-salmon dark:text-white hover:scale-110 dark:hover:text-salmon duration-500 cursor-pointer "
              />
            </Tooltip>
          )}
          <Link
            to="/"
            className="flex items-center gap-3 justify-center text-2xl hover:scale-110 text-white hover:text-salmon duration-500"
          >
            <BsHouse />
          </Link>

          <div
            onClick={() => {
              exit();
            }}
            className="text-2xl text-white hover:text-salmon hover:scale-110 duration-500 cursor-pointer"
          >
            <BsBoxArrowRight />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <Link
          to="/admin/products/1"
          className="flex items-center gap-3 justify-end text-2xl border-b-2  border-salmon cursor-pointer w-11/12 dark:text-white sm:w-1/2 mx-auto hover:text-salmon duration-500  py-8 "
        >
          <div>کالا ها</div>
          <BsUpcScan />
        </Link>
        <Link
          to="/admin/prices/1"
          className="flex items-center gap-3 justify-end text-2xl border-b-2  border-salmon cursor-pointer w-11/12 dark:text-white sm:w-1/2 mx-auto hover:text-salmon duration-500  py-8 "
        >
          <div>موجودی و قیمت ها</div>
          <BsCoin />
        </Link>
        <Link
          to="/admin/orders/1"
          className="flex items-center gap-3 justify-end text-2xl border-b-2  border-salmon cursor-pointer w-11/12 dark:text-white sm:w-1/2 mx-auto hover:text-salmon duration-500  py-8 "
        >
          <div>سفارش ها</div>
          <BsTruck className="scale-125" />
        </Link>

        <Link
          to="/"
          className="flex items-center gap-3 justify-end text-2xl border-b-2  border-salmon cursor-pointer w-11/12 dark:text-white sm:w-1/2 mx-auto hover:text-salmon duration-500  py-8 "
        >
          <span> صفحه اصلی</span>
          <BsHouse className="scale-110" />
        </Link>
        <div
          onClick={() => {
            exit();
          }}
          className="flex items-center gap-3 justify-end text-2xl cursor-pointer w-11/12 sm:w-1/2 mx-auto dark:text-white  hover:text-salmon duration-500  py-8 "
        >
          <span>خروج از حساب</span>
          <BsBoxArrowRight />
        </div>
      </Sidebar>
    </nav>
  );
};
export default AdminHeader;
