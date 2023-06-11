import React from "react";
import AdminHeader from "layout/header/adminHeader/adminDashboardHeader.component";
import Pagination from "component/pagination/Pagination.component";
import { BsEraserFill, BsPencilSquare } from "react-icons/bs";
import Button from "component/button/Button.component";
import ProductModal from "component/adminModals/productModal/ProductModal.component";
import {
  paginateData,
  getSearchedData,
  getOrderedDataWithPaginate,
} from "api/api";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundLottie from "assets/lotties/84785-not-found.json";
import Swal from "sweetalert2";
import { deleteData } from "api/api";
import { useDispatch } from "react-redux";
import {
  selectedEditedProduct,
  addProduct,
} from "Redux/actions/productsActions";

const AdminDashboardPrices = () => {
  let timeOut;

  let { pageId } = useParams();

  const dispatch = useDispatch();

  const handleEdit = (product) => {
    dispatch(selectedEditedProduct(product));
  };

  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  const Navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(false);

  const [products, setProducts] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(Number(pageId ?? 1));

  const [changes, setChanges] = React.useState(false);

  const [totalPages, setTotalPages] = React.useState("");

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [activeFilter, setActiveFilter] = React.useState("all");

  const [activeProduct, setActiveProduct] = React.useState({});

  const [isEdit, setIsEdit] = React.useState(false);

  React.useEffect(() => {
    if (activeFilter === "all") {
      paginateData("Products", currentPage, 5)
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((error) => {
          alert(error);
        });
    } else if (activeFilter === "women") {
      getOrderedDataWithPaginate("products", currentPage, 5, "gender", "زنانه")
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    } else if (activeFilter === "men") {
      getOrderedDataWithPaginate("products", currentPage, 5, "gender", "مردانه")
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    } else if (activeFilter === "clothing") {
      getOrderedDataWithPaginate(
        "products",
        currentPage,
        5,
        "category",
        "پوشاک"
      )
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    } else if (activeFilter === "accessory") {
      getOrderedDataWithPaginate(
        "products",
        currentPage,
        5,
        "category",
        "اکسسوری"
      )
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    }
  }, [changes]);

  const handleSearch = (e) => {
    clearTimeout(timeOut);
    let searchedItem = e.target.value;
    let filteredData;
    getSearchedData("products", searchedItem, currentPage, 5).then((data) => {
      filteredData = data;
    });
    timeOut = setTimeout(() => {
      searchedItem.length === 0
        ? paginateData("Products", currentPage, 5).then((data) => {
            setProducts(data.data);
            setTotalPages(data.count);
          })
        : setProducts(filteredData);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-stone-200 to-zinc-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <AdminHeader active="products" />
      <ProductModal
        condition={showModal}
        data={activeProduct}
        isEdit={isEdit}
        submit={() => {
          setChanges(!changes);

          setShowModal(false);
        }}
        close={() => {
          setShowModal(false);
        }}
      />
      <div className="w-full admin-table md:w-11/12 mx-auto bg-white dark:bg-black h-126 mt-5 overflow-x-auto relative shadow-md ">
        <div className="flex flex-col md:flex-row justify-between items-center pb-4 bg-white dark:bg-black">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex w-28 mt-3 mx-3  items-center justify-center  bg-white border dark:text-white border-salmon focus:outline-none hover:bg-stone-100 focus:ring-4 focus:ring-stone-200 font-medium  text-sm px-3 py-1.5 dark:bg-black "
              type="button"
            >
              فیلتر کردن
              <svg
                className="mr-2 w-3 h-3"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                id="dropdownAction"
                className="z-10 w-28 right-3 border border-salmon  absolute bg-white divide-y divide-zinc-100 shadow dark:bg-black dark:divide-zinc-600 block"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("all");
                    paginateData("Products", currentPage, 5).then((data) => {
                      setProducts(data.data);
                      setTotalPages(data.count);
                      Navigate(`/admin/products/${1}`, { replace: true });
                    });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "all"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-black hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  همه
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("women");
                    setChanges(!changes);
                    Navigate(`/admin/products/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "women"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-black hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  زنانه
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("men");
                    setChanges(!changes);
                    Navigate(`/admin/products/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "men"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-black hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  مردانه
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("clothing");
                    setChanges(!changes);
                    Navigate(`/admin/products/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "clothing"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-black hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  پوشاک
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("accessory");
                    setChanges(!changes);
                    Navigate(`/admin/products/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "accessory"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-black hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  اکسسوری
                </div>
              </div>
            )}
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mx-3 mt-3">
            <div className="flex absolute inset-y-0 left-3 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-salmon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ml-3 pl-10 w-80 text-sm text-stone-900 bg-stone-50  border border-salmon  dark:bg-zinc-200  dark:placeholder-stone-900 outline-none"
              placeholder="جستجوی سفارشات"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <Button
            Click={() => {
              setShowModal(true);
              handleAdd({
                gender: "",
                category: "",
                title: "",
                model: "",
                brand: "",
                price: 0,
                inStock: 0,
                src: [],
                description: "",
              });
              setIsEdit(false);
            }}
            text="افزودن کالا"
            config="mt-4 ml-4"
          />
        </div>
        <Pagination
          divideBy={5}
          currentPage={currentPage}
          totalPages={totalPages}
          back={() => {
            currentPage < Math.ceil(+totalPages / 5) &&
              setCurrentPage(currentPage + 1);
            setChanges(!changes);
            Navigate(
              `/admin/products/${
                currentPage < Math.ceil(+totalPages / 5)
                  ? currentPage + 1
                  : currentPage
              }`,
              { replace: true }
            );
          }}
          forward={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
            setChanges(!changes);
            Navigate(
              `/admin/products/${
                currentPage > 1 ? currentPage - 1 : currentPage
              }`,
              { replace: true }
            );
          }}
        />
        {products.length > 0 ? (
          <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
            <thead className="text-sm md:text-lg text-white uppercase bg-salmon">
              <tr>
                <th scope="col" className="py-3.5 px-6 text-center">
                  تصویر کالا
                </th>
                <th scope="col" className=" py-3 px-6 text-center">
                  نام کالا
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  دسته بندی کالا
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  مدیریت
                </th>
              </tr>
            </thead>
            {
              <tbody>
                {products.map((product) => {
                  return (
                    <tr
                      key={product.id}
                      className="bg-white border-b dark:bg-black dark:border-gray-400 hover:bg-zinc-50 dark:hover:bg-zinc-600"
                    >
                      <td className="text-center py-0.5 px-6 flex justify-center items-center">
                        <img
                          className="w-18 h-20"
                          src={`http://localhost:3001/files/${product.src[0]}`}
                          alt="product"
                        />
                      </td>
                      <th className="text-center py-4 px-6 text-zinc-900 whitespace-nowrap dark:text-white">
                        <div>
                          {product.title} {product.gender} {product.brand} مدل{" "}
                          {product.model}
                        </div>
                      </th>
                      <td className="text-center py-4 px-6 dark:text-white">
                        {product.gender}/{product.category}/{product.title}
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="flex justify-center items-center gap-1 ">
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "آیا از حذف این کالا اطمینان دارید؟",
                                text: `${product.title} ${product.gender} ${product.brand} مدل
                                ${product.model}`,
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonColor: "#ff084e",
                                cancelButtonColor: "#383838",
                                confirmButtonText: "تایید",
                                cancelButtonText: "انصراف",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  deleteData("products", product.id)
                                    .then(() => {
                                      Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "کالا مورد نظر با موفقیت حذف شد",
                                        showConfirmButton: false,
                                        timer: 1500,
                                      });
                                      setChanges(!changes);
                                    })
                                    .catch((error) => {
                                      alert(error);
                                    });
                                }
                              });
                            }}
                            className="p-1 text-xl font-medium text-white bg-salmon shadow-xl  hover:bg-carbon duration-500"
                          >
                            <BsEraserFill />
                          </button>
                          <button
                            onClick={() => {
                              setShowModal(true);
                              handleEdit(product);
                              setIsEdit(true);
                            }}
                            className="p-1 text-xl font-medium text-white bg-salmon shadow-xl border-0 border-l border-black hover:bg-carbon duration-500"
                          >
                            <BsPencilSquare />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            }
          </table>
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-sm text-left text-zinc-500 dark:text-zinc-400">
            <div className="w-64">
              <Lottie animationData={notFoundLottie} />
            </div>
            <div className="text-xl">اطلاعات مورنظر یافت نشد</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminDashboardPrices;
