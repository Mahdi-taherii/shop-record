import React from "react";
import "jodit/build/jodit.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedEditedProduct,
  addProduct,
} from "Redux/actions/productsActions";
import { FaPaperclip } from "react-icons/fa";
import { postData, patchData } from "api/api";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
const ProductModal = ({ data, condition, close, submit, isEdit }) => {
  const dispatch = useDispatch();

  const shouldEdit = useSelector((state) => state.editedProduct);

  const shouldAdd = useSelector((state) => state.addProduct);

  const product = isEdit ? shouldEdit : shouldAdd;

  const [editedProduct, setEditedProduct] = React.useState(product);

  const [value, setValue] = React.useState(`${product.description}`);

  const [selectedFile, setSelectedFile] = React.useState("");

  React.useEffect(() => {
    setEditedProduct(product);
  }, []);

  ///////////////////////
  //file upload
  ///////////////////////
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append("image", selectedFile, selectedFile.name);

    postData("upload", formData).then((res) => {
      isEdit
        ? dispatch(
            selectedEditedProduct({
              ...product,
              src: [...product.src, res.filename],
            })
          )
        : dispatch(
            addProduct({
              ...product,
              src: [...product.src, res.filename],
            })
          );
    });
  };
  //
  return (
    <>
      {condition ? (
        <>
          <div className="justify-center  text-right duration-500 items-center bg-zinc-900 bg-opacity-70 flex overflow-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mt-48 sm:mt-16 lg:mt-12  w-full my-6 mx-auto max-w-xl">
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white dark:text-white dark:bg-black outline-none focus:outline-none p-1">
                <div className="flex items-start justify-between p-2 border-b border-solid border-salmon t">
                  <h3 className="text-xl font-semibold">
                    {isEdit ? "ویرایش کالا" : "افزودن کالا"}
                  </h3>
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
                <div className="relative text-slate-500 text-base p-2 flex-auto">
                  <form className="my-4 mx-h-72 overflow-y-auto leading-relaxed">
                    <div className="relative">
                      <input
                        type="file"
                        className="block file:bg-salmon file:border-none file:text-white file: px-4 file:cursor-pointer file:hover:bg-carbon file:duration-200 pb-2.5 pt-2 w-full  text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                        placeholder=" "
                        multiple={true}
                        onChange={onFileChange}
                      />
                      <label
                        htmlFor="username"
                        className="absolute text-md text-salmon duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        تصویر کالا
                      </label>
                    </div>
                    <div className="flex relative mt-1 h-24 px-1 gap-2 pb-2.5 pt-2 w-full  text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer">
                      <button
                        className="absolute left-2 bg-salmon text-white p-2 hover:bg-carbon duration-500"
                        onClick={(e) => {
                          e.preventDefault();
                          onFileUpload();
                        }}
                      >
                        <FaPaperclip />
                      </button>
                      {product.src &&
                        product.src.map((data) => {
                          return (
                            <div
                              key={data}
                              className="relative border border-salmon overflow-hidden"
                            >
                              <img
                                className="w-14 h-20 "
                                src={`http://localhost:3001/files/${data}`}
                                alt="product"
                              />
                              <div
                                id={data}
                                className="absolute top-0 right-0 bg-white cursor-pointer hover:text-salmon duration-500 "
                                onClick={(e) => {
                                  let id = e.currentTarget.id;
                                  let filteredSrc = product.src.filter(
                                    (item) => item !== id
                                  );
                                  dispatch(
                                    selectedEditedProduct({
                                      ...product,
                                      src: filteredSrc,
                                    })
                                  );
                                }}
                              >
                                <svg
                                  className="w-4 h-4"
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
                          );
                        })}
                    </div>
                    <div className="relative my-1">
                      <div className="relative  w-full">
                        <label
                          htmlFor="underline_select"
                          className="absolute text-md text-salmon duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          پوشاک / اکسسوری
                        </label>
                        <select
                          onChange={(e) => {
                            isEdit
                              ? dispatch(
                                  selectedEditedProduct({
                                    ...product,
                                    category: e.target.value,
                                  })
                                )
                              : dispatch(
                                  addProduct({
                                    ...product,
                                    category: e.target.value,
                                  })
                                );
                          }}
                          id="underline_select"
                          className="block px-1 pr-12 pb-2.5 pt-2 w-full text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                          defaultValue={product.category}
                        >
                          <option value="پوشاک">پوشاک</option>
                          <option value="اکسسوری">اکسسوری</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full flex gap-1 flex-col sm:flex-row">
                      <div className="relative  w-full">
                        <label
                          htmlFor="underline_select"
                          className="absolute text-md text-salmon duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          زنانه/ مردانه
                        </label>
                        <select
                          onChange={(e) => {
                            isEdit
                              ? dispatch(
                                  selectedEditedProduct({
                                    ...product,
                                    gender: e.target.value,
                                  })
                                )
                              : dispatch(
                                  addProduct({
                                    ...product,
                                    gender: e.target.value,
                                  })
                                );
                          }}
                          id="underline_select"
                          className="block px-1 pr-12 pb-2.5 pt-2 w-full text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                          defaultValue={product.gender}
                        >
                          <option value="زنانه">زنانه</option>
                          <option value="مردانه">مردانه</option>
                        </select>
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="underline_select"
                          className="absolute text-md text-salmon duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          دسته بندی فرعی
                        </label>
                        <select
                          onChange={(e) => {
                            isEdit
                              ? dispatch(
                                  selectedEditedProduct({
                                    ...product,
                                    title: e.target.value,
                                  })
                                )
                              : dispatch(
                                  addProduct({
                                    ...product,
                                    title: e.target.value,
                                  })
                                );
                          }}
                          id="underline_select"
                          className="block px-1 pr-12 pb-2.5 pt-2 w-full text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                          defaultValue={product.title}
                        >
                          <option value="پیراهن">پیراهن</option>
                          <option value="سوییشرت">سوییشرت</option>
                          <option value="پالتو">پالتو</option>
                          <option value="کت">کت</option>
                          <option value="کفش">کفش</option>
                          <option value="کیف">کیف</option>
                          <option value="عینک">عینک</option>
                          <option value="ساعت">ساعت</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full flex mt-1 gap-1 flex-col sm:flex-row">
                      <div className="relative  w-full">
                        <input
                          type="text"
                          className="block px-1 pr-12 pb-2.5 pt-2 w-full text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                          placeholder=" "
                          value={product.model}
                          onChange={(e) => {
                            isEdit
                              ? dispatch(
                                  selectedEditedProduct({
                                    ...product,
                                    model: e.target.value,
                                  })
                                )
                              : dispatch(
                                  addProduct({
                                    ...product,
                                    model: e.target.value,
                                  })
                                );
                          }}
                          required
                        />
                        <label
                          htmlFor="username"
                          className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          مدل
                        </label>
                      </div>
                      <div className="relative  w-full">
                        <input
                          onChange={(e) => {
                            isEdit
                              ? dispatch(
                                  selectedEditedProduct({
                                    ...product,
                                    brand: e.target.value,
                                  })
                                )
                              : dispatch(
                                  addProduct({
                                    ...product,
                                    brand: e.target.value,
                                  })
                                );
                          }}
                          type="text"
                          className="block px-1 pr-12 pb-2.5 pt-2 w-full  text-gray-900 bg-gray-50 dark:bg-zinc-200 border-0 border-b-4 border-gray-300 dark:border-white appearance-none  dark:focus:border-salmon focus:outline-none focus:ring-0 focus:border-salmon peer"
                          placeholder=" "
                          value={product.brand}
                          required
                        />
                        <label
                          htmlFor="username"
                          className="absolute text-md text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-salmon peer-focus:dark:text-salmon peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                        >
                          برند
                        </label>
                      </div>
                    </div>
                  </form>
                  <div className="my-1 dark:text-white">
                    <JoditEditor
                      onChange={(content) => {
                        isEdit
                          ? dispatch(
                              selectedEditedProduct({
                                ...product,
                                description: content,
                              })
                            )
                          : dispatch(
                              addProduct({
                                ...product,
                                description: content,
                              })
                            );

                        setValue(content);
                      }}
                      value={product.description}
                      placeholder="توضیحات محصول"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center p-2 border-t border-solid border-salmon b">
                  <button
                    onClick={() => {
                      if (
                        product.gender.length === 0 ||
                        product.category.length === 0 ||
                        product.title.length === 0 ||
                        product.model.length === 0 ||
                        product.brand.length === 0 ||
                        product.price.length === 0 ||
                        product.inStock.length === 0 ||
                        product.src.length === 0 ||
                        product.description.length === 0
                      ) {
                        Swal.fire({
                          icon: "error",
                          title: "خطا",
                          text: "لطفا از پر بودن فیلد های ورودی اطمینان حاصل کنید",
                          confirmButtonColor: "#ff084e",
                          confirmButtonText: "تایید",
                        });
                      } else {
                        Swal.fire({
                          title: isEdit
                            ? "آیا از ویرایش این کالا اطمینان دارید؟"
                            : "آیا از افزودن این کالا اطمینان دارید؟",
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
                            isEdit
                              ? patchData("products", product.id, product)
                                  .then(() => {
                                    dispatch(selectedEditedProduct({}));
                                    setTimeout(() => {
                                      submit();
                                    }, 1000);
                                  })
                                  .then(() => {
                                    Swal.fire({
                                      position: "center",
                                      icon: "success",
                                      title:
                                        "کالا مورد نظر با موفقیت ویرایش شد",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });
                                  })
                                  .catch((error) => {
                                    alert(error);
                                  })
                              : postData("products", product)
                                  .then(() => {
                                    dispatch(selectedEditedProduct({}));
                                    setTimeout(() => {
                                      submit();
                                    }, 1000);
                                  })
                                  .then(() => {
                                    Swal.fire({
                                      position: "center",
                                      icon: "success",
                                      title: "کالا مورد نظر با موفقیت اضافه شد",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });
                                  })
                                  .catch((error) => {
                                    alert(error);
                                  });
                          }
                        });
                      }
                    }}
                    className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden  font-medium transition-all w-full bg-salmon group`}
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
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default ProductModal;
