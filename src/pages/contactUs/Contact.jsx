import React from "react";
import MainLayout from "layout/mainLayout/main.layout";
import img1 from "assets/images/website/mobile.png";
import img2 from "assets/images/website/tablet.png";
import img3 from "assets/images/website/social.jpg";
import img4 from "assets/images/website/bazaar.jpg";
import img5 from "assets/images/website/google-play.jpg";
import img6 from "assets/images/website/myket.jpg";
import socaial1 from "assets/images/website/instagram.png";
import socaial2 from "assets/images/website/facebook.png";
import socaial3 from "assets/images/website/whatsapp.png";
import socaial4 from "assets/images/website/twitter.png";
import header from "assets/images/website/contact.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "component/button/Button.component";
import { BsTelephone, BsEnvelope, BsBuilding } from "react-icons/bs";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayout>
      <div className="relative text-3xl md:text-5xl h-32 md:h-44 font-extrabold text-white border-b-8 border-salmon">
        <img src={header} alt="header" className="w-full h-full" />
        <div className="absolute top-1/3 w-full">تماس با ما</div>
      </div>
      <div className="shadow-xl border-2 border-stone-400 w-11/12 mx-auto flex flex-col md:flex-row my-14">
        <div className="w-full md:w-1/2 p-5 dark:bg-black flex flex-col justify-around items-center">
          <h2 className="pb-5 font-semibold text-2xl">راه های ارتباطی </h2>
          <ul className="text-right md:text-xl h-11/12">
            <li className="my-5 flex gap-4">
              <BsBuilding className="text-5xl md:text-3xl text-salmon" /> آدرس:
              <br />
              خیابان لورم کوچه ایپسوم پلاک 7 واحد 32 دفتر مرکزی کوزا استور
            </li>
            <li className="my-5 flex gap-4">
              <BsTelephone className="text-3xl text-salmon" /> شماره تماس:
              <br /> 999 99 999 - 021
            </li>
            <li className="my-5 flex gap-4">
              <BsEnvelope className="text-3xl text-salmon" /> آدرس الکترونیکی:
              <br /> www.kozaStore@gmail.com
            </li>
          </ul>
        </div>
        <form className="mx-h-72 w-full md:w-1/2 dark:bg-black mx-auto p-10 overflow-y-auto leading-relaxed md:border-r-2 md:border-stone-400">
          <h2 className="pb-5 font-semibold text-2xl">
            نظر خود را با ما در میان بگذارید
          </h2>
          <div className="relative  w-full">
            <input
              type="email"
              className="block pr-14 pb-4 pt-4 w-full text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] right-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
            >
              آدرس الکترونیکی
            </label>
          </div>
          <div className="my-4 w-full ">
            <textarea
              id="comment"
              rows="6"
              className="p-2 w-full text-sm bg-gray-50 dark:bg-zinc-200 outline-none border-gray-300 border-b-4 focus:border-salmon duration-300 text-md placeholder:text-lg placeholder:text-gray-500"
              placeholder="نظر خود را بنویسید"
              required=""
            ></textarea>
            <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center p-2">
              <Button text="ارسال" config="mt-0 w-44" />
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 cursor-pointer hover:text-salmon"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center p-2 cursor-pointer hover:text-salmon"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center p-2 cursor-pointer hover:text-salmon"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-6 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="h-120 p-14 w-11/12 mx-auto border-2 border-stone-400 dark:bg-black shadow-xl">
        <h3 className="text-lg md:text-2xl mb-5 font-semibold">موقعیت مکانی</h3>
        <iframe
          className="border-2 border-stone-400"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25904.181798893987!2d51.31118940743418!3d35.75024620351079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd521c1511b9%3A0x65aa85e10132d7c2!2sIM13!5e0!3m2!1sen!2s!4v1662027901275!5m2!1sen!2s"
          width="100%"
          height="90%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="shadow-xl my-14">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              { image: img3, speed: 25 },
              {
                speed: -10,
                children: (
                  <div className="absolute inset-0 flex flex-col gap-10 text-white items-center justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl drop-shadow-2xl shadow-white">
                      ما را در شبکه های اجتماعی دنبال کنید
                    </h2>

                    <div className="flex gap-10">
                      <div className="w-12 cursor-pointer hover:scale-110 duration-100 md:w-20 shadow-2xl">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <img src={socaial4} alt="social" />
                        </AnimationOnScroll>
                      </div>
                      <div className="w-12 cursor-pointer hover:scale-110 duration-100 md:w-20 shadow-2xl">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <img src={socaial3} alt="social" />
                        </AnimationOnScroll>
                      </div>
                      <div className="w-12 cursor-pointer hover:scale-110 duration-100 md:w-20 shadow-2xl">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <img src={socaial2} alt="social" />
                        </AnimationOnScroll>
                      </div>
                      <div className="w-12 cursor-pointer hover:scale-110 duration-100 md:w-20 shadow-2xl">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <img src={socaial1} alt="social" />
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            className="aspect-[3/1] h-64 md:h-80  lg:h-96"
          />
        </ParallaxProvider>
      </div>

      <div className="w-11/12 overflow-hidden mx-auto flex flex-col-reverse md:flex-row">
        <fieldset className="w-11/12 md:w-1/2 md:text-xl self-center text-right mx-auto mb-20 border-4 border-stone-400 p-5">
          <legend className="text-lg md:text-2xl mb-5 font-semibold text-white bg-salmon p-2">
            دانلود اپلیکیشن
          </legend>
          <div>
            داشتن ظاهری زیبا و شیک اهمیت بسیار بالای دارد، همه آقایان و بانوان
            دوست دارند که جذاب به نظر برسند. شما می‌خواهید لباس‌هایی را انتخاب
            کنید که علاوه بر زیبایی، مدرن و به روز نیز باشند، انتخاب دقیق و
            مناسب لباس‌های مختلف نشان‌دهنده سلیقه شماست و علاوه بر این ست کردن
            مناسب لباس‌ها می‌تواند اعتماد به نفستان را افزایش دهد. داشتن ظاهر
            زیبا در خرید لباس‌های گران قیمت خلاصه نمی‌شود بلکه انتخاب هوشمندانه
            شما برایتان زیبایی، شکوه و وقار را به ارمغان خواهند آورد.با دانلود
            اپلیکیشن کوزا استور دسترسی سریع و آسان به تمامی موارد ذکر شده را در
            کمترین زمان خواهید داشت.
          </div>
          <div className="flex overflow-hidden p-10 flex-col items-center md:flex-row gap-3 mt-10">
            <div className="cursor-pointer w-11/12 md:w-1/3 hover:shadow-xl hover:scale-105 duration-300">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img src={img4} alt="" />
              </AnimationOnScroll>
            </div>
            <div className="cursor-pointer w-11/12 md:w-1/3 hover:shadow-xl hover:scale-105 duration-300">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img src={img5} alt="" />
              </AnimationOnScroll>
            </div>
            <div className="cursor-pointer w-11/12 md:w-1/3 hover:shadow-xl hover:scale-105 duration-300">
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <img src={img6} alt="" />
              </AnimationOnScroll>
            </div>
          </div>
        </fieldset>
        <div className="w-full md:w-1/2 relative my-10 xsm:h-56 h-60 sm:h-96 md:h-120">
          <div className="w-1/2 absolute top-0 right-1/3 md:right-1/2">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <img src={img2} alt="" />
            </AnimationOnScroll>
          </div>
          <div className="w-1/4 absolute top-1/4 right-1/4 md:right-1/3">
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <img src={img1} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
