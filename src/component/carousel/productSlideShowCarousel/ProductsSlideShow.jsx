import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "component/button/Button.component";
import { Autoplay, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import { ICardSlideShow } from "types/Interface";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "Redux/actions/productsActions";
const ProductsSlideShow = ({ products, view, header, color }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`relative text-carbon  shadow-2xl overflow-hidden  my-10 mx-auto p-2 pt-16 md:pl-56 md:pt-2 ${color}`}
    >
      <div className="absolute left-1 text-xl mx-auto w-full top-2 md:top-10 md:left-8 md:w-44 leading-loose text-white  md:text-2xl">
        {header}
        <div className="hidden mt-14 md:block">
          <img src={view} alt="icon" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          400: { slidesPerView: 2 },
          860: {
            slidesPerView: 3,
          },
          1245: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={5}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        rewind={true}
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id} className="m-0.5">
              <div className="relative ml-0 overflow-hidden duration-500 cursor-pointer group  pb-14  bg-white shadow-lg  dark:bg-gray-800">
                <img
                  onClick={() => {
                    dispatch(selectedProduct(product));
                    navigate(
                      `/productDetails/${product.gender}/${product.title}/${product.category}+${product.brand}+مدل+${product.model}/${product.id}`
                    );
                  }}
                  className="h-64 w-full  group-hover:scale-125 duration-500"
                  src={`http://localhost:3001/files/${product.src[0]}`}
                  alt="category"
                />
                <div className="absolute text-sm pt-1 bottom-0 w-full h-16  bg-carbon-light text-overflow:hidden">
                  <div className="text-base">
                    {product.title} مدل {product.model}
                  </div>
                  {product.price} تومان
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default ProductsSlideShow;
