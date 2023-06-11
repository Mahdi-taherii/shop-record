import React from "react";
import AdminHeader from "layout/header/adminHeader/adminDashboardHeader.component";
import Pagination from "component/pagination/Pagination.component";
import OrderModal from "component/adminModals/orderModal/OrderModal.component";
import {
  paginateData,
  getSearchedData,
  getOrderedDataWithPaginate,
} from "api/api";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundLottie from "assets/lotties/84785-not-found.json";
const AdminDashboardOrders = () => {
  let timeOut;

  let { pageId } = useParams();

  const Navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(false);

  const [orders, setOrders] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(Number(pageId ?? 1));

  const [changes, setChanges] = React.useState(false);

  const [totalPages, setTotalPages] = React.useState("");

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const [activeFilter, setActiveFilter] = React.useState("all");

  const [activeOrder, setActiveOrder] = React.useState();

  React.useEffect(() => {
    if (activeFilter === "all") {
      paginateData("orders", currentPage, 8)
        .then((data) => {
          setOrders(data.data);
          setTotalPages(data.count);
        })
        .catch((error) => {
          alert(error);
        });
    } else if (activeFilter === "fulfilled") {
      getOrderedDataWithPaginate(
        "orders",
        currentPage,
        8,
        "deliveryStatus",
        "fulfilled"
      )
        .then((data) => {
          setOrders(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    } else if (activeFilter === "pending") {
      getOrderedDataWithPaginate(
        "orders",
        currentPage,
        8,
        "deliveryStatus",
        "pending"
      )
        .then((data) => {
          setOrders(data.data);
          setTotalPages(data.count);
        })
        .catch((err) => alert(err));
    }
  }, [changes]);

  const handleSearch = (e) => {
    clearTimeout(timeOut);
    let searchedItem = e.target.value;
    let filteredData;
    getSearchedData("orders", searchedItem, currentPage, 8).then((data) => {
      filteredData = data;
    });
    timeOut = setTimeout(() => {
      searchedItem.length === 0
        ? paginateData("orders", currentPage, 8).then((data) => {
            setOrders(data.data);
            setTotalPages(data.count);
          })
        : setOrders(filteredData);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-stone-200 to-zinc-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white text-carbon min-h-screen">
      <AdminHeader active="orders" />
      <OrderModal
        condition={showModal}
        data={activeOrder}
        submit={() => {
          setChanges(!changes);
        }}
        close={() => {
          setShowModal(false);
        }}
      />
      <div className="admin-table w-full md:w-11/12 mx-auto bg-white dark:bg-black h-126 mt-5  relative shadow-md ">
        <div className="flex flex-col md:flex-row justify-between items-center pb-4 bg-white dark:bg-black">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex w-28 mt-3 mx-3  items-center justify-center  bg-white border border-salmon focus:outline-none hover:bg-salmon focus:ring-4 focus:ring-stone-200 font-medium  text-sm px-3 py-1.5 dark:bg-black "
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
                className="z-10 w-28 right-3 border border-salmon   absolute bg-white divide-y divide-stone-100 shadow dark:bg-black dark:divide-stone-600 block"
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
                    Navigate(`/admin/orders/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "all"
                      ? "text-white bg-salmon hover:bg-salmon-light"
                      : " hover:bg-salmon"
                  } dark:hover:bg-e-600 dark:text-stone-200 dark:hover:text-white`}
                >
                  همه
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("fulfilled");
                    setChanges(!changes);
                    Navigate(`/admin/orders/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "fulfilled"
                      ? "text-white bg-salmon hover:bg-salmon-light"
                      : " hover:bg-salmon"
                  } dark:hover:bg-e-600 dark:text-stone-200 dark:hover:text-white`}
                >
                  ارسال شده
                </div>
                <div
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setCurrentPage(1);
                    setActiveFilter("pending");
                    setChanges(!changes);
                    Navigate(`/admin/orders/${1}`, { replace: true });
                  }}
                  className={`block cursor-pointer py-2 px-4 text-sm ${
                    activeFilter === "pending"
                      ? "text-white bg-salmon hover:bg-salmon-light"
                      : " hover:bg-salmon"
                  } dark:hover:bg-e-600 dark:text-stone-200 dark:hover:text-white`}
                >
                  در حال بررسی
                </div>
              </div>
            )}
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mx-3 mt-3">
            <div className="flex absolute inset-y-0 left-3 items-center text-salmon pl-3 pointer-events-none">
              <svg
                className="w-5 h-5  "
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
              className="block w-full p-2 ml-3 pl-10 md:w-80 text-sm text-stone-900 bg-stone-50  border border-salmon  dark:bg-zinc-200  dark:placeholder-stone-900 outline-none"
              placeholder="جستجوی سفارشات"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <Pagination
          divideBy={8}
          currentPage={currentPage}
          totalPages={totalPages}
          back={() => {
            currentPage < Math.ceil(+totalPages / 8) &&
              setCurrentPage(currentPage + 1);
            setChanges(!changes);
            Navigate(
              `/admin/orders/${
                currentPage < Math.ceil(+totalPages / 8)
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
              `/admin/orders/${
                currentPage > 1 ? currentPage - 1 : currentPage
              }`,
              { replace: true }
            );
          }}
        />
        {orders.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left overflow-x-auto ">
              <thead className="text-sm md:text-lg text-white uppercase bg-salmon ">
                <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                    نام کاربر
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    مجموع مبلغ
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    وضعیت ارسال
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    زمان ثبت سفارش
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    بررسی جزییات
                  </th>
                </tr>
              </thead>

              <tbody className="overflow-x-auto">
                {orders.map((order) => {
                  return (
                    <tr
                      key={order.id}
                      className="bg-white border-b dark:bg-black dark:border-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-600"
                    >
                      <th
                        scope="row"
                        className="flex items-center justify-center py-4 px-6 text-stone-900 whitespace-nowrap dark:text-white"
                      >
                        {order.name} {order.family}
                      </th>
                      <td className="text-center py-4 px-6">
                        {order.totalPrice}
                      </td>
                      {order.deliveryStatus === "fulfilled" ? (
                        <td className="py-4 px-6">
                          <div className="text-center lg:w-1/2 mx-auto rounded-xl border border-green-400 bg-green-200 text-green-700">
                            ارسال شده
                          </div>
                        </td>
                      ) : (
                        <td className="py-4 px-6">
                          <div className="text-center lg:w-1/2 mx-auto rounded-xl border border-orange-400 bg-orange-200 text-orange-600">
                            در حال بررسی
                          </div>
                        </td>
                      )}
                      <td className="text-center py-4 px-6">
                        {order.orderDate}
                      </td>
                      <td className="text-center py-4 px-6">
                        <div
                          onClick={() => {
                            setShowModal(true);
                            setActiveOrder(order);
                          }}
                          className="font-medium cursor-pointer text-salmon hover:text-salmon-light hover:underline"
                        >
                          بررسی سفارش
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center text-sm text-left  ">
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
export default AdminDashboardOrders;
