import { BsCart4 } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
const CategoryCardGroup = ({ src, titles }) => {
  return (
    <div className=" py-4 ">
      <div className="text-2xl md:text-3xl font-semibold w-full  ">
        خرید بر اساس دسته بندی
      </div>
      <div className="overflow-hidden">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-10">
            <div className="relative overflow-hidden hover:scale-105 duration-500 cursor-pointer group w-full sm:w-1/2 md:w-1/2 lg:w-1/4  bg-white border-2 border-zinc-300 mt-6  shadow-lg  dark:bg-gray-800">
              <img className="" src={src[0]} alt="category" />
              <div className="absolute top-24 font-semibold text-xl left-6">
                {titles[0]}
              </div>
              <Link
                to="/shop"
                className="absolute flex justify-center gap-5 items-center p-10 text-xl font-bold bg-salmon text-white w-full h-1/3 translate-y-96 top-0 left-0 group-hover:translate-y-44 duration-500"
              >
                <p> مشاهده محصولات</p>
                <BsCart4 className="text-4xl" />
              </Link>
            </div>
            <div className="relative overflow-hidden hover:scale-105 duration-500 cursor-pointer group w-full sm:w-1/2 md:w-1/2 lg:w-1/4  mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white border-2 border-zinc-300 shadow-lg  dark:bg-gray-800">
              <img className="" src={src[1]} alt="category" />
              <div className="absolute top-24 font-semibold text-xl left-6">
                {titles[1]}
              </div>
              <Link
                to="/shop"
                className="absolute flex justify-center gap-5 items-center p-10 text-xl font-bold bg-salmon text-white w-full h-1/3 translate-y-96 top-0 left-0 group-hover:translate-y-44 duration-500"
              >
                <p> مشاهده محصولات</p> <BsCart4 className="text-4xl" />
              </Link>
            </div>
            <div className="relative overflow-hidden hover:scale-105 duration-500  cursor-pointer group w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  bg-white border-2 border-zinc-300 shadow-lg dark:bg-gray-800">
              <img className="" src={src[2]} alt="category" />
              <div className="absolute top-24 font-semibold text-xl left-6">
                {titles[2]}
              </div>
              <Link
                to="/shop"
                className="absolute flex justify-center gap-5 items-center p-10 text-xl font-bold bg-salmon text-white w-full h-1/3 translate-y-96 top-0 left-0 group-hover:translate-y-44 duration-500"
              >
                <p> مشاهده محصولات</p> <BsCart4 className="text-4xl" />
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default CategoryCardGroup;
