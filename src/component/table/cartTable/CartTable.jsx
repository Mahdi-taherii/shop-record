import { useSelector, useDispatch } from "react-redux";
import { selectedBuyProduct } from "Redux/actions/productsActions";
import { BsXSquare } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function CartTable() {
  const dispatch = useDispatch();

  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  const handleDelete = (id) => {
    Swal.fire({
      title: "حذف از سبد خرید",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ff084e",
      cancelButtonColor: "#383838",
      confirmButtonText: "تایید",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        let filteredCart = cart.filter((product) => +product.id !== id);
        dispatch(selectedBuyProduct(filteredCart));
        localStorage.setItem("cart", JSON.stringify(filteredCart));
      }
    });
  };

  const handleInc = (id) => {
    const addedProduct = cart.find((product) => +product.id === +id);

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

      dispatch(selectedBuyProduct(editedCart));
      localStorage.setItem("cart", JSON.stringify(editedCart));
    } else {
      toast.error("سقف موجودی کالا");
    }
  };

  const handleDec = (id) => {
    const addedProduct = cart.find((product) => +product.id === id);

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
      dispatch(selectedBuyProduct(editedCart));
      localStorage.setItem("cart", JSON.stringify(editedCart));
    } else if (addedProduct.inCart === 1) {
      handleDelete(id);
    }
  };

  return (
    <>
      <Toaster />
      <table className="w-full text-sm text-left ">
        <thead className=" text-white bg-salmon">
          <tr>
            <th
              scope="col"
              className="hidden md:block py-3 px-1 md:px-6 text-center"
            >
              تصویر کالا
            </th>
            <th scope="col" className="text-center py-3 px-1 md:px-6">
              کالا
            </th>
            <th scope="col" className="text-center py-3 px-1 ">
              تعداد
            </th>
            <th scope="col" className="text-center py-3 px-1 md:px-6">
              قیمت
            </th>
            <th scope="col" className="text-center py-3 px-1 md:px-6">
              حذف
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto ">
          {cart.length > 0 &&
            cart.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-black dark:border-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-600"
                >
                  <td className="hidden md:block px-4 w-20">
                    <img
                      src={`http://localhost:3001/files/${item.image}`}
                      alt="product"
                    />
                  </td>
                  <td className="py-4 px-1 md:px-6 text-center  font-semibold text-gray-900 dark:text-white">
                    {item.title} {item.gender} {item.model} برند {item.brand}
                  </td>
                  <td className="py-4  h-10 px-1 text-center">
                    <div className="flex justify-center items-center gap-0.5 md:gap-3">
                      <button
                        onClick={() => handleDec(item.id)}
                        className="inline-flex items-center p-1 text-sm font-medium  bg-salmon border-2 text-white border-salmon focus:outline-none hover:bg-carbon focus:ring-4 focus:ring-gray-200 "
                        type="button"
                      >
                        <svg
                          className="w-3  h-3 md:w-5 md:h-5"
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
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-8 h-6 md:h-auto md:w-14 border-2 border-salmon text-gray-900 text-sm  focus:ring-salmon focus:border-salmon block px-2.5 py-1 outline-none dark:bg-carbon  dark:text-white"
                          value={item.inCart}
                          readOnly
                        />
                      </div>
                      <button
                        onClick={() => handleInc(item.id)}
                        className="inline-flex items-center p-1 text-sm font-medium  bg-salmon border-2 text-white border-salmon focus:outline-none hover:bg-carbon focus:ring-4 focus:ring-gray-200 "
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3  h-3 md:w-5 md:h-5"
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
                  </td>
                  <td className="py-4 px-1 md:px-6 text-center font-semibold text-gray-900 dark:text-white">
                    {Number(item.price) * Number(item.inCart)}
                  </td>
                  <td className="py-4 px-1 md:px-6 text-center font-semibold text-salmon hover:text-salmon cursor-pointer">
                    <div className="w-full text-xl md:text-3xl flex justify-center items-center">
                      <BsXSquare
                        className="text-salmon font-semibold hover:text-salmon duration-200"
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default CartTable;
