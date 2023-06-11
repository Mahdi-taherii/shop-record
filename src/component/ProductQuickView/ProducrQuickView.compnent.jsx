import { IProductQuickView } from "types/Interface";
import Button from "component/button/Button.component";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "component/carousel/productCarousel/ProductCarousel";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useDispatch } from "react-redux";
import { selectedProduct } from "Redux/actions/productsActions";
import Rating from "component/rating/Rating.component";
const QuickView = ({
  title,
  brand,
  price,
  src,
  category,
  condition,
  description,
  close,
  gender,
  id,
  model,
  data,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {condition ? (
        <>
          <div className="justify-center duration-500 items-center min-h-screen bg-zinc-500 bg-opacity-40 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:w-2/3 my-6 mx-auto">
              <div className="content overflow-y-auto max-h-screen  border-0 shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                <div className="header flex items-start justify-between p-5 border-b border-solid border-salmon ">
                  <div
                    className=" cursor-pointer hover:text-salmon "
                    onClick={() => {
                      close();
                    }}
                  >
                    <svg
                      className="w-6 h-6"
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
                </div>
                <div className="body relative p-6 flex flex-col lg:flex-row-reverse gap-5">
                  <ProductCarousel src={src} />
                  <div className="my-4 text-lg  lg:w-1/2 leading-relaxed">
                    <h3 className="text-2xl font-semibold mt-2.5 mb-5">
                      {title} {category} مدل {model} برند {brand}
                    </h3>
                    <Rating />
                    <div className="mt-2.5 mb-5 text-xl font-semibold">
                      {price} تومان
                    </div>

                    <p>{description}</p>
                  </div>
                </div>
                <div className="footer flex items-end justify-end p-6 gap-4 border-t border-solid border-salmon rounded-b">
                  <Button
                    Click={() => {
                      dispatch(selectedProduct(data));
                      navigate(
                        `/productDetails/${gender}/${title}/${category}+${brand}+مدل+${model}/${id}`
                      );
                      close();
                    }}
                    text="مشاهده جزییات "
                    config="w-2/3 mx-auto md:w-44"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default QuickView;
