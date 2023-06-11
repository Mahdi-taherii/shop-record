import React from "react";
import MainLayout from "layout/mainLayout/main.layout";
import Button from "component/button/Button.component";
import CartTable from "component/table/cartTable/CartTable";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import loginLottie from "assets/lotties/112087-empty.json";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Cart = () => {
  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  const navigate = useNavigate();

  let sum = 0;

  cart.length > 0 &&
    cart.forEach((item) => {
      sum += Number(item.price) * Number(item.inCart);
    });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {cart.length > 0 ? (
        <>
          <div className="overflow-auto w-11/12 mx-auto relative pt-10">
            <CartTable />
          </div>
          <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-5 shadow-xl">
            <Button
              Click={() => {
                Swal.fire({
                  title: "نهایی کردن سبد خرید",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#ff084e",
                  cancelButtonColor: "#383838",
                  confirmButtonText: "پرداخت",
                  cancelButtonText: "ادامه خرید",
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/payment");
                  }
                });
              }}
              text=" نهایی کردن سبد خرید"
              config="mt-0"
            />
            <div className="text-2xl">{sum} تومان</div>
          </div>
        </>
      ) : (
        <div className="w-64 sm:w-96 mx-auto py-20 gap-10 flex flex-col items-center justify-center text-sm text-left text-gray-500 dark:text-white">
          <Lottie animationData={loginLottie} />
          <div className="text-2xl font-bold"> سبد خرید شما خالی است !</div>
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
