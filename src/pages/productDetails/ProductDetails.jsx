import React from "react";
import { Link, useParams } from "react-router-dom";
import { getFilteredData } from "api/api";
import Button from "component/button/Button.component";
import MainLayout from "layout/mainLayout/main.layout";
import img1 from "assets/images/website/delivery.svg";
import img2 from "assets/images/website/similar.svg";
import Tabs from "component/tabs/Tabs.component";
import ProductsSlideShow from "component/carousel/productSlideShowCarousel/ProductsSlideShow";
import ProductCarousel from "component/carousel/productCarousel/ProductCarousel";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedBuyProduct,
  selectedProduct,
} from "Redux/actions/productsActions";
import toast, { Toaster } from "react-hot-toast";
import { FaFrown } from "react-icons/fa";
import Rating from "component/rating/Rating.component";

function ProductDetails() {
  let { id } = useParams();

  let { title } = useParams();

  const [product, setProduct] = React.useState();

  const [similar, setSimilar] = React.useState([]);

  const [count, setCount] = React.useState(1);

  const dispatch = useDispatch();

  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  React.useEffect(() => {
    window.scrollTo(0, 0);

    getFilteredData("products", "id", Number(id)).then((data) => {
      setProduct(data[0]);
      dispatch(selectedProduct(data[0]));
    });

    getFilteredData("products", "title", `${title}`).then((data) => {
      setSimilar(data);
    });

    if (cart.length > 0) {
      const addedProduct = cart.find((item) => +item.id === +id);
      addedProduct !== undefined ? setCount(addedProduct.inCart) : setCount(1);
    } else {
      setCount(1);
    }
  }, [id]);

  const selectProduct = () => {
    if (cart.length > 0) {
      product.inStock > 0 &&
        dispatch(
          selectedBuyProduct([
            ...cart,
            {
              id: product.id,
              title: product.title,
              gender: product.gender,
              category: product.category,
              model: product.model,
              brand: product.brand,
              price: product.price,
              image: product.src[0],
              inStock: product.inStock - count,
              inCart: count,
            },
          ])
        );
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cart,
          {
            id: product.id,
            title: product.title,
            gender: product.gender,
            category: product.category,
            model: product.model,
            brand: product.brand,
            price: product.price,
            image: product.src[0],
            inStock: product.inStock - count,
            inCart: count,
          },
        ])
      );
    } else {
      if (product.inStock > 0) {
        dispatch(
          selectedBuyProduct([
            {
              id: product.id,
              title: product.title,
              gender: product.gender,
              category: product.category,
              model: product.model,
              brand: product.brand,
              price: product.price,
              image: product.src[0],
              inStock: product.inStock - count,
              inCart: count,
            },
          ])
        );
        localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              id: product.id,
              title: product.title,
              gender: product.gender,
              category: product.category,
              model: product.model,
              brand: product.brand,
              price: product.price,
              image: product.src[0],
              inStock: product.inStock - count,
              inCart: count,
            },
          ])
        );
      } else {
        toast.error("سقف موجودی کالا");
      }
    }
  };

  const increment = () => {
    const addedProduct = cart.find((item) => +item.id === +product.id);

    if (addedProduct.inStock > 0) {
      let editedCart = [];
      cart.forEach((item) => {
        if (+item.id !== +addedProduct.id) {
          editedCart.push(item);
        } else {
          editedCart.push({
            ...item,
            inCart: item.inCart + 1,
            inStock: item.inStock - 1,
          });
        }
      });
      setCount(count + 1);
      dispatch(selectedBuyProduct(editedCart));
      localStorage.setItem("cart", JSON.stringify(editedCart));
    } else {
      toast.error("سقف موجودی کالا");
    }
  };

  const decrement = () => {
    const addedProduct = cart.find((item) => +item.id === +product.id);

    if (addedProduct.inCart > 1) {
      let editedCart = [];
      cart.forEach((item) => {
        if (+item.id !== +addedProduct.id) {
          editedCart.push(item);
        } else {
          editedCart.push({
            ...item,
            inCart: item.inCart - 1,
            inStock: item.inStock + 1,
          });
        }
      });
      setCount(count - 1);
      dispatch(selectedBuyProduct(editedCart));
      localStorage.setItem("cart", JSON.stringify(editedCart));
    } else if (addedProduct.inCart === 1) {
      let filteredCart = cart.filter((item) => +item.id !== +product.id);
      dispatch(selectedBuyProduct(filteredCart));
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    }
  };

  return (
    <MainLayout>
      {product && (
        <div key={id}>
          <Toaster />
          <div className="flex gap-2 w-fit mr-1 sm:mr-10 text-sm md:text-base md:mr-20 py-5 pb-10 font-semibold text-gray-500  dark:text-white">
            <Link to="/" className="cursor-pointe hover:text-salmon">
              کوزا استور
            </Link>
            <p>/ </p>
            <Link
              to={`/shop/${product.gender}/${product.category}/${"همه"}/1`}
              className="cursor-pointer hover:text-salmon"
            >
              {product.category} {product.gender}
            </Link>
            <p>/ </p>
            <Link
              to={`/shop/${product.gender}/${product.category}/${product.title}/1`}
              className="cursor-pointer hover:text-salmon"
            >
              {product.title}
            </Link>
            <p>/ </p>
            <p className="text-salmon">
              {product.title} {product.model} برند {product.brand}
            </p>
          </div>
          <fieldset className="w-11/12 text-right border-4 border-stone-400 mx-auto p-10 items-center justify-evenly gap-10 flex flex-col-reverse md:flex-row">
            <legend className="text-lg md:text-2xl font-semibold p-2">
              {product.title} {product.gender} طرح {product.model} برند{" "}
              {product.brand}
            </legend>

            <div className="w-2/3 text-right ">
              <div className="flex justify-start items-center mt-2.5 ">
                <Rating />
              </div>
              <h2 className=" w-fit border-salmon text-lg mb-2 border-b-2">
                مشخصات تکمیلی:
              </h2>
              <ul className="list-disc text-lg pr-6">
                <li> سایز : 32</li>
                <li> طرح : {product.model}</li>
                <li> رنگ : چند رنگ</li>
                <li> برند : {product.brand}</li>
                <li> مورد استفاده : روزمره</li>
              </ul>

              <div className="flex flex-col h-56 md:flex-row md:h-20 justify-start items-center py-10  gap-10 w-full">
                {cart.length > 0 &&
                cart.find((item) => +item.id === +product.id) ? (
                  <div className="flex items-center space-x-3 py-5">
                    <p className="mx-3 font-semibold">تعداد</p>
                    <button
                      onClick={() => decrement()}
                      className="inline-flex items-center p-1 ml-3 text-sm font-medium text-white bg-salmon border-2 border-salmon focus:outline-none hover:bg-carbon duration-500 focus:ring-4 focus:ring-gray-200 dark:hover:bg-carbon dark:focus:ring-carbon"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div>
                      <input
                        type="text"
                        id="first_product"
                        className="bg-gray-50 w-14 border-2 border-salmon text-gray-900 text-sm  focus:ring-salmon focus:border-salmon block px-2.5 py-1 outline-none dark:bg-carbon  dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                        value={count}
                        readOnly
                      />
                    </div>
                    <button
                      onClick={() => increment()}
                      className="inline-flex items-center p-1 text-sm font-medium text-white bg-salmon border-2 border-salmon focus:outline-none hover:bg-carbon duration-500 focus:ring-4 focus:ring-gray-200 dark:hover:bg-carbon dark:focus:ring-carbon"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                ) : product.inStock > 0 ? (
                  <Button
                    text="افزودن به سبد خرید"
                    Click={() => selectProduct()}
                    config={"mb-2 mt-0"}
                  />
                ) : (
                  <h2 className="text-2xl flex gap-3 self-start justify-center items-center text-salmon font-bold">
                    نا موجود <FaFrown />
                  </h2>
                )}
                {product.inStock > 0 ? (
                  <h2 className="text-2xl  font-bold">{product.price} تومان</h2>
                ) : null}
              </div>
              <div className="flex flex-col md:flex-row border-2 border-stone-400 w-full  md:w-10/12 items-center justify-between py-1 px-5 mb-10">
                <div>
                  <p className="font-semibold">ارسال رایگان</p>
                  <p className="text-gray-500 dark:text-gray-300  text-xs lg:text-base">
                    برای خرید های بالای 500 هزار تومان
                  </p>
                </div>
                <img src={img1} alt="delivery" />
              </div>
            </div>
            <div className="scale-125 mb-20 md:mb-0">
              <ProductCarousel src={product && product.src} />
            </div>
          </fieldset>
        </div>
      )}
      <ProductsSlideShow
        products={similar}
        view={img2}
        header="کالا های مشابه"
        color="bg-salmon"
      />
      <Tabs color="salmon" />
    </MainLayout>
  );
}

export default ProductDetails;
