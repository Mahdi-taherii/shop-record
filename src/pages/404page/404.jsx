import React from "react";
import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";
import loginLottie from "assets/lotties/55873-404-error-page.json";
import Button from "component/button/Button.component";
const NotFoundPage = () => {
  const options = {
    animationData: loginLottie,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className=" border-gray-200 text-center pt-1">
          <h1 className="w-full md:w-1/2 mx-auto">{View}</h1>
          <h1 className="text-xl md:text-3xl font-medium py-4">
            خطا ! صفحه مورد نظر یافت نشد
          </h1>
          <Link to="/">
            <Button text="بازگشت به صفحه اصلی" config={"mb-5"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
