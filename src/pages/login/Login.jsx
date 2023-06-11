import React from "react";
import axios from "axios";
import { useLottie } from "lottie-react";
import loginLottie from "assets/lotties/70640-floating-magic-link-login.json";
import { BsArrowRightCircle, BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "component/button/Button.component";

const LoginForm = () => {
  const [adminData, setAdminData] = React.useState({
    username: "",
    password: "",
  });
  const [passType, setPassType] = React.useState("password");

  const authentication = async (obj) => {
    const response = await axios
      .post("http://localhost:3001/auth/login", obj)
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "خوش آمدید",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/ManagementPanel");
      })
      .catch((err) => {
        localStorage.clear();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminData.username === "" || adminData.password === "") {
      adminData.username === "" || adminData.password === ""
        ? Swal.fire({
            icon: "error",
            title: "خطا",
            text: "لطفا از پر بودن فیلد های ورودی اطمینان حاصل کنید",
            confirmButtonColor: "#ff084e",
            confirmButtonText: "تایید",
          })
        : Swal.fire({
            icon: "error",
            title: "خطا",
            text: "نام کاربری یا رمز عبور اشتباه است",
            confirmButtonColor: "#ff084e",
            confirmButtonText: "تایید",
          });
    } else {
      authentication(adminData);
    }
  };

  const navigate = useNavigate();

  const options = {
    animationData: loginLottie,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <div className="flex items-center dark:text-white text-xl md:text-2xl min-h-screen sm:justify-center  bg-gradient-to-r from-stone-200 to-zinc-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full md:w-10/12 mx-auto flex flex-col-reverse items-center justify-center bg-zinc-100 dark:bg-stone-900 p-5 md:flex-row shadow-2xl">
          <div className="w-full md:w-1/2 px-6 py-4 overflow-hidden">
            <form>
              <div className="relative mt-5">
                <input
                  onChange={(e) =>
                    setAdminData({ ...adminData, username: e.target.value })
                  }
                  type="text"
                  id="username"
                  className="block px-1 pr-12 pb-2.5 pt-7 w-full text-sm md:text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4 dark:border-white border-gray-300 appearance-none dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                  placeholder=" "
                  value={adminData.username}
                  required
                />
                <label
                  htmlFor="username"
                  className="absolute text-base md:text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  نام کاربری
                </label>
              </div>
              <div className="relative mt-5">
                <input
                  onChange={(e) =>
                    setAdminData({ ...adminData, password: e.target.value })
                  }
                  type={passType}
                  id="password"
                  className="block px-1 pr-12 pb-2.5 pt-7 w-full text-sm md:text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4 dark:border-white border-gray-300 appearance-none dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                  placeholder=" "
                  value={adminData.password}
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-base md:text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  رمز عبور
                </label>
                <div className="absolute left-3 top-5 cursor-pointer dark:text-carbon dark:hover:text-salmon text-2xl hover:text-salmon duration-500">
                  {passType === "password" ? (
                    <BsEye onClick={() => setPassType("text")} />
                  ) : (
                    <BsEyeSlash onClick={() => setPassType("password")} />
                  )}
                </div>
              </div>

              <div className="text-sm mt-2 md:text-md text-salmon hover:text-salmon hover:underline">
                رمز عبور خود را فراموش کرده اید؟
              </div>
              <div className="flex items-center mt-4">
                <Button
                  text="ورود"
                  config="w-full flex items-center justify-center h-18 pb-5"
                  Click={(e) => {
                    handleSubmit(e);
                  }}
                />
              </div>
            </form>

            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 ">یا</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 text-lg md:text-xl space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 hover:text-salmon-light dark:border-gray-400"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="w-3 h-3  md:w-5 md:h-5 ml-2 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p> ورود به وسیله جیمیل </p>
              </button>
            </div>
            <Link
              className=" flex text-base md:text-md items-center w-full justify-center gap-2 hover:text-salmon-light text-salmon"
              to="/"
            >
              <BsArrowRightCircle />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
          </div>
          <div className="mx-auto w-1/2">{View}</div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
