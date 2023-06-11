import React from "react";
import { IOrderQuickView } from "types/Interface";
import { editData } from "api/api";
import Swal from "sweetalert2";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const OrderModal = ({ data, condition, close, submit }) => {
  return (
    <>
      {condition ? (
        <>
          <div className="justify-center text-right duration-500 items-center bg-zinc-600 bg-opacity-70 flex overflow-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-salmon">
                  <h3 className="text-2xl font-semibold">نمایش سفارش</h3>
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

                <div className="relative dark:text-white text-slate-500 text-base p-6 flex-auto">
                  <ul>
                    <li>
                      نام مشتری: {data.name} {data.family}
                    </li>
                    <li>آدرس: {data.address}</li>
                    <li>تلفن: {data.phone}</li>
                    <li>زمان تحویل: {data.deliveryDate}</li>
                    <li>زمان سفارش: {data.orderDate}</li>
                  </ul>
                  <table className="w-fit mt-5">
                    <thead className="text-sm md:text-lg text-white uppercase bg-cinnamon bg-salmon">
                      <tr>
                        <th scope="col" className="py-1 px-6 text-center">
                          کالا
                        </th>
                        <th scope="col" className="py-1 px-6 text-center">
                          قیمت
                        </th>
                        <th scope="col" className="py-1 px-6 text-center">
                          تعداد
                        </th>
                      </tr>
                    </thead>
                    <tbody className="my-4 mx-h-72 overflow-y-auto leading-relaxed">
                      {data.cart.map((item) => {
                        return (
                          <tr
                            key={item.id}
                            className="bg-white font-bold border-b dark:bg-carbon dark:border-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-800"
                          >
                            <th
                              scope="row"
                              className=" py-4 px-6 dark:text-white"
                            >
                              {item.title} {item.gender} طرح {item.model} برند{" "}
                              {item.brand}
                            </th>
                            <td className="text-center dark:text-white py-4 px-6">
                              {item.price}
                            </td>
                            <td className="text-center dark:text-white py-4 px-6">
                              {item.inCart}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-center p-6 border-t border-solid border-salmon rounded-b">
                  {data.deliveryStatus === "fulfilled" ? (
                    <p className="py-2 text-xl text-salmon font-semibold">
                      تاریخ تحویل: {data.deliveryDate}
                    </p>
                  ) : (
                    <button
                      onClick={() => {
                        const date = new DateObject({
                          date: new Date(),
                          calendar: persian,
                          locale: persian_fa,
                          format: "dddd D MMMM YYYY",
                        });
                        let edited = {
                          ...data,
                          deliveryStatus: "fulfilled",
                          deliveryDate: date.format(),
                        };
                        Swal.fire({
                          title: "آیا از تغییر ایجاد شده اطمینان دارید؟",
                          text: "",
                          icon: "question",
                          showCancelButton: true,
                          confirmButtonColor: "#ff084e",
                          cancelButtonColor: "#383838",
                          confirmButtonText: "تایید",
                          cancelButtonText: "انصراف",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            editData("orders", data.id, edited)
                              .then(() => {
                                Swal.fire({
                                  position: "center",
                                  icon: "success",
                                  title: "کالا مورد نظر با موفقیت تحویل شد",
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                                submit();
                                close();
                              })
                              .catch((error) => {
                                alert(error);
                              });
                          }
                        });
                      }}
                      className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden  font-medium transition-all w-full bg-salmon group`}
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-700 ease-in-out delay-200 bg-carbon group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0  w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-12 bg-carbon group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        تحویل شد
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default OrderModal;
