import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { patchData, postData } from "api/api";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import successLottie from "assets/lotties/102129-card-payment-successful.json";
import failedLottie from "assets/lotties/116089-payment-failed.json";
import { selectedBuyProduct } from "Redux/actions/productsActions";

function PaymentStatus() {
  const { status } = useParams();

  const dispatch = useDispatch();

  const [isSuccess, setIsSuccess] = React.useState(true);

  const navigate = useNavigate();

  const newOrder = useSelector((state) => state.contactInfo);

  React.useEffect(() => {
    if (status === "success") {
      postData("orders", newOrder).then(() => {
        setIsSuccess(true);
        dispatch(selectedBuyProduct([]));
      });
      localStorage.removeItem("cart");

      newOrder.cart.forEach((item) => {
        patchData("products", item.id, { inStock: item.inStock });
      });
    } else {
      setIsSuccess(false);
    }
  }, []);
  return (
    <div className={`${isSuccess ? "bg-green-500" : "bg-red-500"} h-screen`}>
      {isSuccess ? (
        <div className="w-1/3 mx-auto">
          <Lottie animationData={successLottie} />
          <div className="text-xl md:text-4xl mb-5 text-white">
            پرداخت موفق <br /> سفارش شما با موفقیت ثبت شد.
          </div>
        </div>
      ) : (
        <div className="w-1/3 mx-auto">
          <Lottie animationData={failedLottie} />
          <div className="text-xl md:text-4xl mb-5 text-white">
            پرداخت نا موفق <br />
            سفارش شما ثبت نشد لطفا مجددا تلاش کنید.
          </div>
        </div>
      )}
      <div
        onClick={() => navigate("/", { replace: true })}
        className="underline text-white mx-auto text-xl cursor-pointer"
      >
        بازگشت به صفحه اصلی
      </div>
    </div>
  );
}

export default PaymentStatus;
