import Button from "component/button/Button.component";
import React from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useDispatch, useSelector } from "react-redux";
import melat from "assets/images/website/melat.png";
import saderat from "assets/images/website/saderat.png";
import maskan from "assets/images/website/maskan.png";
import meli from "assets/images/website/meli.png";
import keshavarzi from "assets/images/website/keshavarzi.png";
import shahr from "assets/images/website/shahr.png";
import saman from "assets/images/website/saman.png";
import pasargad from "assets/images/website/pasargad.png";
import { contactInfo } from "Redux/actions/productsActions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-multi-date-picker";

function CheckOutForm() {
  let sum = 0;

  const navigate = useNavigate();

  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  const dispatch = useDispatch();

  const [bank, setBank] = React.useState("melat");

  const [info, setInfo] = React.useState({
    name: "",
    family: "",
    orderDate: "",
    deliveryDate: "---",
    totalPrice: 0,
    deliveryStatus: "pending",
    address: "",
    phone: "",
    cart: [],
  });

  const [error, setError] = React.useState({
    name: "",
    family: "",
    address: "",
    phone: "",
  });

  cart.forEach((item) => {
    sum += Number(item.price) * Number(item.inCart);
  });

  const handleError = () => {
    if (info.name.length === 0) {
      setError((oldState) => ({
        ...oldState,
        name: "* پر کردن این فیلد الزامی است.",
      }));
    }
    if (info.family.length === 0) {
      setError((oldState) => ({
        ...oldState,
        family: "* پر کردن این فیلد الزامی است.",
      }));
    }
    if (info.address.length < 10) {
      info.address.length === 0
        ? setError((oldState) => ({
            ...oldState,
            address: "* پر کردن این فیلد الزامی است.",
          }))
        : setError((oldState) => ({
            ...oldState,
            address: "* تعداد کاراکترهای ورودی از حد مجاز کمتر است.",
          }));
    }
    if (info.phone.length < 11) {
      info.phone.length === 0
        ? setError((oldState) => ({
            ...oldState,
            phone: "* پر کردن این فیلد الزامی است.",
          }))
        : setError((oldState) => ({
            ...oldState,
            phone: "* تعداد ارقام شماره تماس از حد مجاز کمتر است.",
          }));
    }
  };

  const handleSubmit = () => {
    const date = new DateObject({
      date: new Date(),
      calendar: persian,
      locale: persian_fa,
      format: "dddd D MMMM YYYY",
    });
    const newOrder = {
      ...info,
      totalPrice: sum,
      orderDate: date.format(),
      cart: cart,
    };

    dispatch(contactInfo({ ...newOrder }));
    navigate("/paymentStatus/success");
  };

  return (
    <form className="border-2 w-full dark:bg-black border-salmon shadow-xl">
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-1/2">
          <h2>مشخصات</h2>
          <div className="relative w-11/12 mx-auto mt-5">
            <input
              type="text"
              id="name"
              className={`block px-1 pr-12 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4 ${
                error.name.length > 0 ? "border-red-600" : "border-gray-300"
              } appearance-none dark:focus:border-salmon dark:border-white focus:outline-none focus:ring-0 focus:border-salmon peer`}
              placeholder=" "
              value={info.name}
              onChange={(e) => {
                setError({ ...error, name: "" });
                setInfo({ ...info, name: e.target.value });
              }}
              required
            />
            <label
              htmlFor="name"
              className="absolute text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-5 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نام
            </label>
            <div className="h-4 text-red-500">{error.name}</div>
          </div>
          <div className="relative w-11/12 mx-auto mt-5">
            <input
              type="text"
              id="family"
              className={`block px-1 pr-12 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4  ${
                error.family.length > 0 ? "border-red-600" : "border-gray-300"
              } appearance-none dark:focus:border-salmon dark:border-white focus:outline-none focus:ring-0 focus:border-salmon peer`}
              placeholder=" "
              value={info.family}
              onChange={(e) => {
                setError({ ...error, family: "" });
                setInfo({ ...info, family: e.target.value });
              }}
              required
            />
            <label
              htmlFor="family"
              className="absolute text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-5 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نام خانوادگی
            </label>
            <div className="h-4 text-red-500">{error.family}</div>
          </div>
          <div className="relative w-11/12 mx-auto mt-5">
            <input
              type="text"
              id="address"
              className={`block px-1 pr-12 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4 ${
                error.address.length > 0 ? "border-red-600" : "border-gray-300"
              } appearance-none dark:focus:border-salmon dark:border-white focus:outline-none focus:ring-0 focus:border-salmon peer`}
              placeholder=" "
              value={info.address}
              onChange={(e) => {
                setError({ ...error, address: "" });
                setInfo({ ...info, address: e.target.value });
              }}
              required
            />
            <label
              htmlFor="address"
              className="absolute text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-5 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              آدرس
            </label>
            <div className="h-4 text-red-500">{error.address}</div>
          </div>
          <div className="relative w-11/12 mx-auto mt-5">
            <input
              type="tel"
              id="phone"
              className={`block px-1 pr-12 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-50 dark:bg-carbon-light dark:text-carbon dark:placeholder-carbon border-0 border-b-4 ${
                error.phone.length > 0 ? "border-red-600" : "border-gray-300"
              } appearance-none dark:focus:border-salmon dark:border-white focus:outline-none focus:ring-0 focus:border-salmon peer`}
              placeholder=" "
              value={info.phone}
              onChange={(e) => {
                setError({ ...error, phone: "" });
                setInfo({ ...info, phone: e.target.value });
              }}
              required
            />
            <label
              htmlFor="phone"
              className="absolute text-md text-gray-700  duration-300 transform -translate-y-4 scale-75 top-4 z-5 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              شماره تماس
            </label>
            <div className="h-4 text-red-500">{error.phone}</div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="my-5 md:mb-5 md:mt-0">درگاه بانکی</h2>

          <ul className="w-11/12 mx-auto grid gap-4 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="melat"
                value="melat"
                className="hidden peer"
                checked={bank === "melat" && true}
                onChange={() => setBank("melat")}
                required=""
              />
              <label
                htmlFor="melat"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک ملت</div>
                  <img src={melat} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="keshavarzi"
                value="keshavarzi"
                className="hidden peer"
                checked={bank === "keshavarzi" && true}
                onChange={() => setBank("keshavarzi")}
              />
              <label
                htmlFor="keshavarzi"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک کشاورزی</div>
                  <img src={keshavarzi} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="meli"
                value="meli"
                className="hidden peer"
                checked={bank === "meli" && true}
                onChange={() => setBank("meli")}
              />
              <label
                htmlFor="meli"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک ملی</div>
                  <img src={meli} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="maskan"
                value="maskan"
                className="hidden peer"
                checked={bank === "maskan" && true}
                onChange={() => setBank("maskan")}
              />
              <label
                htmlFor="maskan"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک مسکن</div>
                  <img src={maskan} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="saderat"
                value="saderat"
                className="hidden peer"
                checked={bank === "saderat" && true}
                onChange={() => setBank("saderat")}
              />
              <label
                htmlFor="saderat"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک صادرات</div>
                  <img src={saderat} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="saman"
                value="saman"
                className="hidden peer"
                checked={bank === "saman" && true}
                onChange={() => setBank("saman")}
              />
              <label
                htmlFor="saman"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک سامان</div>
                  <img src={saman} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="pasargad"
                value="pasargad"
                className="hidden peer"
                checked={bank === "pasargad" && true}
                onChange={() => setBank("pasargad")}
              />
              <label
                htmlFor="pasargad"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک پاسارگاد</div>
                  <img src={pasargad} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="shahr"
                value="shahr"
                className="hidden peer"
                checked={bank === "shahr" && true}
                onChange={() => setBank("shahr")}
              />
              <label
                htmlFor="shahr"
                className="inline-flex justify-between items-center p-5 w-full bg-white border border-gray-200 cursor-pointer dark:hover:text-gray-300   peer-checked:border-salmon peer-checked:text-salmon hover:text-gray-600 hover:bg-gray-100  dark:bg-carbon dark:hover:bg-gray-700"
              >
                <div className="w-full flex justify-evenly items-center">
                  <div className="text-lg font-semibold">بانک شهر</div>
                  <img src={shahr} alt="bank" className="w-10 h-10" />
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-11/12 mx-auto mt-5">
        <div className="text-lg">مبلغ قابل پرداخت</div>
        <div className="text-xl font-semibold">{sum} تومان</div>
      </div>
      <Button
        Click={(e) => {
          e.preventDefault();
          if (
            info.name.length > 0 &&
            info.family.length > 0 &&
            info.address.length > 0 &&
            info.phone.length > 0
          ) {
            Swal.fire({
              title: "آیا از خرید خود اطمینان دارید؟",
              text: "",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: "#ff084e",
              cancelButtonColor: "#383838",
              confirmButtonText: "تایید",
              cancelButtonText: "انصراف",
            }).then((result) => {
              if (result.isConfirmed) {
                handleSubmit();
              }
            });
          } else {
            handleError();
          }
        }}
        text="پرداخت"
        config="mb-5 w-2/3"
      />
    </form>
  );
}

export default CheckOutForm;
