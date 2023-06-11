import React from "react";
import AdminHeader from "layout/header/adminHeader/adminDashboardHeader.component";
import Pagination from "component/pagination/Pagination.component";
import Swal from "sweetalert2";
import {
  paginateData,
  getSearchedData,
  getOrderedDataWithPaginate,
  getInRangeData,
  patchData,
} from "api/api";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundLottie from "assets/lotties/84785-not-found.json";

const AdminDashboardPrices = () => {
  let timeOut;

  let { pageId } = useParams();

  const Navigate = useNavigate();

  const [products, setProducts] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(Number(pageId ?? 1));

  const [changes, setChanges] = React.useState(false);

  const [totalPages, setTotalPages] = React.useState("");

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [activeFilter, setActiveFilter] = React.useState("all");

  const [codeChangedPrice, setCodeChangedPrice] = React.useState([]);

  const [codeChangedStock, setCodeChangedStock] = React.useState([]);
  ////////////////////////////////////////////////////////
  const saveEditedData = () => {
    const hash = new Map();
    codeChangedPrice.concat(codeChangedStock).forEach(function (obj) {
      hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj));
    });
    const codes = Array.from(hash.values());

    codes.map(async (item) => {
      await patchData("products", item.id, item);
    });
    paginateData("Products", currentPage, 5)
      .then((data) => {
        setProducts(data.data);
        setTotalPages(data.count);
      })
      .catch((error) => {
        alert(error);
      });
  };

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
    } else if (activeFilter === "unavailable") {
      getOrderedDataWithPaginate("products", currentPage, 5, "inStock", 0)
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    } else if (activeFilter === "available") {
      getInRangeData("products", "inStock", 1, 1000, currentPage, 5)
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
      <AdminHeader active="prices" />
      <div className="admin-table w-full md:w-11/12 mx-auto bg-white dark:bg-black h-126 mt-5 overflow-x-auto relative shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center pb-4 bg-white dark:bg-black">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex w-28 mt-3 mx-3  items-center justify-center text-zinc-500 bg-white border border-salmon focus:outline-none hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-200 font-medium text-sm px-3 py-1.5 dark:bg-black dark:text-white  dark:hover:bg-black "
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
                className="z-10 w-28  right-3 border border-salmon   absolute bg-white  divide-y divide-zinc-100 shadow dark:bg-black dark:divide-zinc-600 block"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("all");
                    setChanges(!changes);
                    Navigate(`/admin/prices/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "all"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-zinc-700 hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  همه
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("available");
                    setChanges(!changes);
                    Navigate(`/admin/prices/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "available"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-zinc-700 hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  موجود در انبار
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("unavailable");
                    setChanges(!changes);
                    Navigate(`/admin/prices/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "unavailable"
                      ? "text-white bg-salmon hover:bg-salmon"
                      : "text-zinc-700 hover:bg-zinc-100"
                  } dark:hover:bg-salmon dark:text-zinc-200 dark:hover:text-white`}
                >
                  اتمام موجودی
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
                className="w-5 h-5 text-salmon "
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
              className="block p-2 ml-3 pl-10 w-80 text-sm text-stone-900 bg-stone-50 border border-salmon dark:bg-zinc-200  dark:placeholder-stone-900 outline-none"
              placeholder="جستجوی سفارشات"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div>
            <button
              className={
                codeChangedPrice.length > 0 || codeChangedStock.length > 0
                  ? `relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium ml-4 mt-4 transition-all bg-salmon group`
                  : `relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium ml-4 mt-4 transition-all bg-carbon group`
              }
              disabled={
                codeChangedPrice.length > 0 || codeChangedStock.length > 0
                  ? false
                  : true
              }
              onClick={() => {
                Swal.fire({
                  title: "آیا از تغییر ایجاد شده اطمینان دارید؟",
                  text: "",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#ff084e",
                  cancelButtonColor: "#383838",
                  confirmButtonText: "تایید",
                  cancelButtonText: "انصراف",
                })
                  .then((result) => {
                    if (result.isConfirmed) {
                      saveEditedData();
                      setChanges(!changes);
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "اطلاعات مورد نظر با موفقیت ویرایش شد",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((error) => {
                    alert(error);
                  });
              }}
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-700 ease-in-out delay-200 bg-carbon group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0  w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-12 bg-carbon group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                ذخیره
              </span>
            </button>
          </div>
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
              `/admin/prices/${
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
              `/admin/prices/${
                currentPage > 1 ? currentPage - 1 : currentPage
              }`,
              { replace: true }
            );
          }}
        />
        {products.length > 0 ? (
          <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
            <thead className="text-sm md:text-lg text-white uppercase bg-salmon  ">
              <tr>
                <th scope="col" className="py-3.5 px-6 text-center">
                  تصویر کالا
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  نام کالا
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  قیمت کالا
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  وضعیت موجودی
                </th>
              </tr>
            </thead>
            {
              <tbody>
                {products.map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className="bg-white border-b dark:bg-black dark:border-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-500"
                    >
                      <td className="text-center flex justify-center items-center py-0.5  px-6">
                        <img
                          className="w-18 h-20"
                          src={`http://localhost:3001/files/${row.src[0]}`}
                          alt="product"
                        />
                      </td>
                      <th
                        scope="row"
                        className="text-center text-lg  px-6 text-zinc-900 whitespace-nowrap dark:text-white"
                      >
                        {row.title} {row.gender} {row.brand}
                      </th>
                      <td className="text-center text-lg text-carbon font-semibold px-6">
                        <input
                          type={"number"}
                          defaultValue={row.price}
                          className="w-fit text-center"
                          onDoubleClick={(e) => {
                            e.target.readOnly = false;
                            e.target.style.backgroundColor = "whitesmoke";
                          }}
                          readOnly
                          onBlur={(e) => {
                            e.target.readOnly = true;

                            if (e.target.value !== e.target.defaultValue) {
                              e.target.style.backgroundColor = "whitesmoke";
                              codeChangedPrice.length > 0
                                ? codeChangedPrice.forEach((item) => {
                                    if (item.id !== row.id) {
                                      setCodeChangedPrice([
                                        ...codeChangedPrice,

                                        { id: row.id, price: e.target.value },
                                      ]);
                                    }
                                  })
                                : setCodeChangedPrice([
                                    ...codeChangedPrice,
                                    { id: row.id, price: e.target.value },
                                  ]);
                            } else {
                              e.target.style.backgroundColor = "transparent";
                              const filterData = codeChangedPrice.filter(
                                (item) => item.id !== row.id
                              );
                              setCodeChangedPrice(filterData);
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              e.target.readOnly = true;
                              e.target.value = e.target.defaultValue;
                              e.target.style.backgroundColor = "transparent";
                            }
                          }}
                        />
                      </td>

                      <th className="text-center text-lg  text-carbon px-6">
                        <input
                          type={"number"}
                          className="w-fit text-center"
                          defaultValue={row.inStock}
                          onDoubleClick={(e) => {
                            e.target.readOnly = false;
                            e.target.style.backgroundColor = "whitesmoke";
                          }}
                          readOnly
                          onBlur={(e) => {
                            e.target.readOnly = true;

                            if (e.target.value !== e.target.defaultValue) {
                              e.target.style.backgroundColor = "whitesmoke";
                              codeChangedStock.length > 0
                                ? codeChangedStock.forEach((item) => {
                                    if (item.id !== row.id) {
                                      setCodeChangedStock([
                                        ...codeChangedStock,
                                        {
                                          id: row.id,
                                          inStock: e.target.value,
                                        },
                                      ]);
                                    }
                                  })
                                : setCodeChangedStock([
                                    ...codeChangedStock,
                                    {
                                      id: row.id,
                                      inStock: e.target.value,
                                    },
                                  ]);
                            } else {
                              e.target.style.backgroundColor = "transparent";
                              const filterData = codeChangedStock.filter(
                                (item) => item.id !== row.id
                              );
                              setCodeChangedStock(filterData);
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              e.target.readOnly = true;
                              e.target.value = e.target.defaultValue;
                              e.target.style.backgroundColor = "transparent";
                            }
                          }}
                        />
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            }
          </table>
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-sm text-left text-zinc-500 dark:text-zinc-200">
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
