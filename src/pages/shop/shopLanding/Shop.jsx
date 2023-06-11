import React from "react";
import MainLayout from "layout/mainLayout/main.layout";
import { Link } from "react-router-dom";
import Card from "component/productCard/ProductCard.component";
import { getOrderedDataWithPaginate } from "api/api";
import banner1 from "assets/images/website/clothing-women.jpg";
import banner2 from "assets/images/website/clothing-men.jpg";
import banner4 from "assets/images/website/accessory-men.jpg";
import banner3 from "assets/images/website/accessory-women.jpg";
import { BsChevronDoubleLeft } from "react-icons/bs";
import Skeleton from "component/skeleton/Skeleton.component";
const Shop = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      getOrderedDataWithPaginate(
        "products",
        1,
        4,
        "gender",
        "زنانه&category=پوشاک"
      ),

      getOrderedDataWithPaginate(
        "products",
        1,
        4,
        "gender",
        "مردانه&category=پوشاک"
      ),

      getOrderedDataWithPaginate(
        "products",
        1,
        4,
        "gender",
        "زنانه&category=اکسسوری"
      ),
      getOrderedDataWithPaginate(
        "products",
        1,
        4,
        "gender",
        "مردانه&category=اکسسوری"
      ),
    ]).then((data) => {
      setProducts(data);
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <MainLayout>
      {
        <>
          <div className="relative shadow-xl text-center text-xl md:text-2xl lg:text-3xl font-extrabold flex gap-2 items-center">
            <img className="w-full h-full" src={banner1} alt="banner" />

            <Link
              to={`/shop/${"زنانه"}/${"پوشاک"}/${"همه"}/1`}
              className="flex items-center justify-center gap-3 absolute bottom-0 right-0 group text-carbon bg-white p-1 md:px-5 md:py-3 cursor-pointer"
            >
              <span className="bg-white z-10">پوشاک زنانه</span>
              <BsChevronDoubleLeft className="text-salmon translate-x-10 group-hover:translate-x-0 duration-500" />
            </Link>
          </div>
          <div className="flex py-10 justify-evenly gap-5 flex-wrap">
            {products.length > 0 ? (
              products[0].data.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    data={product}
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
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </div>
          <div className="relative shadow-xl text-center text-xl md:text-2xl lg:text-3xl font-extrabold flex gap-2 items-center">
            <img className="w-full h-full" src={banner2} alt="banner" />

            <Link
              to={`/shop/${"مردانه"}/${"پوشاک"}/${"همه"}/1`}
              className="flex items-center justify-center gap-3 absolute bottom-0 right-0 group text-carbon bg-white p-1 md:px-5 md:py-3 cursor-pointer"
            >
              <span className="bg-white z-10">پوشاک مردانه</span>
              <BsChevronDoubleLeft className="text-salmon translate-x-10 group-hover:translate-x-0 duration-500" />
            </Link>
          </div>
          <div className="flex py-10 justify-evenly gap-5 flex-wrap">
            {products.length > 0 ? (
              products[1].data.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    gender={product.gender}
                    data={product}
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
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </div>
          <div className="relative shadow-xl text-center text-xl md:text-2xl lg:text-3xl font-extrabold flex gap-2 items-center">
            <img className="w-full h-full" src={banner3} alt="banner" />
            <Link
              to={`/shop/${"زنانه"}/${"اکسسوری"}/${"همه"}/1`}
              className="flex items-center justify-center gap-3 absolute bottom-0 right-0 group text-carbon bg-white p-1 md:px-5 md:py-3 cursor-pointer"
            >
              <span className="bg-white z-10">اکسسوری زنانه</span>
              <BsChevronDoubleLeft className="text-salmon translate-x-10 group-hover:translate-x-0 duration-500" />
            </Link>
          </div>
          <div className="flex py-10 justify-evenly gap-5 flex-wrap">
            {products.length > 0 ? (
              products[2].data.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    gender={product.gender}
                    data={product}
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
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </div>
          <div className="relative shadow-xl text-center text-xl md:text-2xl lg:text-3xl font-extrabold flex gap-2 items-center">
            <img className="w-full h-full" src={banner4} alt="banner" />
            <Link
              to={`/shop/${"مردانه"}/${"اکسسوری"}/${"همه"}/1`}
              className="flex items-center justify-center gap-3 absolute bottom-0 right-0 group text-carbon bg-white p-1 md:px-5 md:py-3 cursor-pointer"
            >
              <span className="bg-white z-10">اکسسوری مردانه</span>
              <BsChevronDoubleLeft className="text-salmon translate-x-10 group-hover:translate-x-0 duration-500" />
            </Link>
          </div>
          <div className="flex py-10 justify-evenly gap-5 flex-wrap">
            {products.length > 0 ? (
              products[3].data.map((product) => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    gender={product.gender}
                    data={product}
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
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </div>
        </>
      }
    </MainLayout>
  );
};

export default Shop;
