import React from "react";
import { Search, getOrderedDataWithPaginate } from "api/api";
import img1 from "assets/images/website/header1.webp";
import img2 from "assets/images/website/header2.webp";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "layout/mainLayout/main.layout";
import Card from "component/productCard/ProductCard.component";
import Pagination from "component/pagination/Pagination.component";
import { FaSlidersH } from "react-icons/fa";
import Sidebar from "component/sideBar/SideBar.component";
import Skeleton from "component/skeleton/Skeleton.component";
const ShopCategoryGroupPage = () => {
  let { page } = useParams();

  let { category } = useParams();

  let { topCategory } = useParams();

  let { subCategory } = useParams();

  const [loading, setLoading] = React.useState(true);

  const Navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);

  const [products, setProducts] = React.useState([]);

  const [currentTopCategory, setCurrentTopCategory] =
    React.useState(topCategory);

  const [currentCategory, setCurrentCategory] = React.useState(category);

  const [currentSubCategory, setCurrentSubCategory] = React.useState(
    subCategory ?? "همه"
  );

  const [currentPage, setCurrentPage] = React.useState(Number(page ?? 1));

  const [totalPages, setTotalPages] = React.useState("");

  const [changes, setChanges] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    if (currentSubCategory === "همه") {
      getOrderedDataWithPaginate(
        "products",
        currentPage,
        6,
        "gender",
        `${currentTopCategory}&category=${currentCategory}`
      )
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      getOrderedDataWithPaginate(
        "products",
        currentPage,
        6,
        "gender",
        `${topCategory}&title=${subCategory}`
      )
        .then((data) => {
          setProducts(data.data);
          setTotalPages(data.count);
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  }, [changes]);

  const handleCategory = (topCategory, category, subCategory) => {
    setCurrentTopCategory(topCategory);
    setCurrentCategory(category);
    setCurrentSubCategory(subCategory);
    setCurrentPage(1);
    Navigate(`/shop/${topCategory}/${category}/${subCategory}/${1}`, {
      replace: true,
    });
    setChanges(!changes);
  };
  return (
    <MainLayout>
      <div className="relative text-3xl md:text-5xl h-32 md:h-44 font-extrabold text-white border-b-8 border-salmon">
        {currentTopCategory === "زنانه" ? (
          <img className="w-full h-full" src={img1} alt="banner" />
        ) : (
          <img className="w-full h-full" src={img2} alt="banner" />
        )}
        <div className="absolute top-1/3 w-full">
          {currentCategory} {currentTopCategory}
        </div>
      </div>
      <div className=" flex flex-row justify-between pb-4 ">
        <div className="w-1/4 my-4 text-right h-full mr-5 p-5 border-4 border-salmon text-xl hidden md:flex flex-col  gap-3">
          <div className="text-2xl mt-1 gap-5">
            <h3>فیلتر ها</h3>
          </div>
          <h3 className="text-xl font-extrabold mt-5 text-salmon ">مردانه</h3>
          <ul className="border-t-2 border-stone-400 ">
            <li className="text-lg py-3">- پوشاک</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "پوشاک", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "پوشاک", "پیراهن");
              }}
            >
              پیراهن
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "پوشاک", "کت");
              }}
            >
              کت و پالتو
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "پوشاک", "سوییشرت");
              }}
            >
              سوییشرت و هودی
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "پوشاک", "کفش");
              }}
            >
              کفش و کتانی
            </li>
          </ul>
          <ul className="border-t-2 border-stone-400 ">
            <li className="text-lg py-3">- اکسسوری</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "اکسسوری", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "اکسسوری", "کیف");
              }}
            >
              کیف
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "اکسسوری", "ساعت");
              }}
            >
              ساعت
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("مردانه", "اکسسوری", "عینک");
              }}
            >
              عینک
            </li>
          </ul>
          <h3 className="text-xl font-extrabold mt-5 text-salmon ">زنانه</h3>
          <ul className="border-t-2 border-stone-400 ">
            <li className="text-lg py-3">- پوشاک</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "پوشاک", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "پوشاک", "پیراهن");
              }}
            >
              پیراهن
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "پوشاک", "کت");
              }}
            >
              کت و پالتو
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "پوشاک", "سوییشرت");
              }}
            >
              سوییشرت و هودی
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "پوشاک", "کفش");
              }}
            >
              کفش و کتانی
            </li>
          </ul>
          <ul className="border-t-2 border-stone-400 ">
            <li className="text-lg py-3">- اکسسوری</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "اکسسوری", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "اکسسوری", "کیف");
              }}
            >
              کیف
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "اکسسوری", "ساعت");
              }}
            >
              ساعت
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                handleCategory("زنانه", "اکسسوری", "عینک");
              }}
            >
              عینک
            </li>
          </ul>
        </div>
        <div className="w-11/12 md:w-3/4 mx-auto py-5 md:mx-5">
          <div className="flex gap-3">
            <button
              className="p-2 mb-5 flex gap-2 justify-center items-center md:hidden border-2 border-salmon focus:text-salmon dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaSlidersH /> فیلتر ها
            </button>
          </div>
          <div className="flex flex-wrap gap-10  justify-evenly ">
            {!loading ? (
              products.map((product) => {
                return (
                  <Card
                    data={product}
                    key={product.id}
                    id={product.id}
                    gender={product.gender}
                    title={product.title}
                    model={product.model}
                    brand={product.brand}
                    price={product.price}
                    inStock={product.inStock}
                    src={product.src}
                    description={product.description}
                    category={product.gender}
                  />
                );
              })
            ) : (
              <div className="flex flex-wrap gap-20  justify-evenly ">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            )}
          </div>
        </div>
      </div>

      {Math.ceil(+totalPages / 6) > 1 && (
        <Pagination
          divideBy={6}
          currentPage={currentPage}
          totalPages={totalPages}
          back={() => {
            currentPage < Math.ceil(+totalPages / 6) &&
              setCurrentPage(currentPage + 1);

            Navigate(
              `/shop/${currentTopCategory}/${currentCategory}/${currentSubCategory}/${
                currentPage < Math.ceil(+totalPages / 6)
                  ? currentPage + 1
                  : currentPage
              }`,
              { replace: true }
            );
            setChanges(!changes);
          }}
          forward={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
            Navigate(
              `/shop/${currentTopCategory}/${currentCategory}/${currentSubCategory}/${
                currentPage > 1 ? currentPage - 1 : currentPage
              }`,
              { replace: true }
            );
            setChanges(!changes);
          }}
        />
      )}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="h-120 overflow-y-auto bg-white text-carbon dark:text-white dark:bg-black py-16 px-5">
          <div className="text-2xl mt-1 gap-5">
            <h3>فیلتر ها</h3>
          </div>
          <h3 className="text-xl font-extrabold mt-5 text-salmon ">مردانه</h3>
          <ul>
            <li className="text-lg py-3">- پوشاک</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "پوشاک", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "پوشاک", "پیراهن");
              }}
            >
              پیراهن
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "پوشاک", "کت");
              }}
            >
              کت و پالتو
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "پوشاک", "سوییشرت");
              }}
            >
              سوییشرت و هودی
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "پوشاک", "کفش");
              }}
            >
              کفش و کتانی
            </li>
          </ul>
          <ul className="border-b-2 pb-5">
            <li className="text-lg py-3">- اکسسوری</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "اکسسوری", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "اکسسوری", "کیف");
              }}
            >
              کیف
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "اکسسوری", "ساعت");
              }}
            >
              ساعت
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("مردانه", "اکسسوری", "عینک");
              }}
            >
              عینک
            </li>
          </ul>
          <h3 className="text-xl font-extrabold mt-5 text-salmon ">زنانه</h3>
          <ul>
            <li className="text-lg py-3">- پوشاک</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "پوشاک", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "پوشاک", "پیراهن");
              }}
            >
              پیراهن
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "پوشاک", "کت");
              }}
            >
              کت و پالتو
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "پوشاک", "سوییشرت");
              }}
            >
              سوییشرت و هودی
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "پوشاک", "کفش");
              }}
            >
              کفش و کتانی
            </li>
          </ul>
          <ul>
            <li className="text-lg py-3">- اکسسوری</li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "اکسسوری", "همه");
              }}
            >
              همه
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "اکسسوری", "کیف");
              }}
            >
              کیف
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "اکسسوری", "ساعت");
              }}
            >
              ساعت
            </li>
            <li
              className="text-base hover:text-salmon  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                handleCategory("زنانه", "اکسسوری", "عینک");
              }}
            >
              عینک
            </li>
          </ul>
        </div>
      </Sidebar>
    </MainLayout>
  );
};
export default ShopCategoryGroupPage;
