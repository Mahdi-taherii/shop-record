import React from "react";
import { useNavigate } from "react-router-dom";
import { BsEye, BsStarHalf } from "react-icons/bs";
import QuickView from "component/ProductQuickView/ProducrQuickView.compnent";
import { Tooltip } from "component/tooltip/tooltip.component";
import { useDispatch } from "react-redux";
import { selectedProduct } from "Redux/actions/productsActions";

const Card = ({
  data,
  gender,
  title,
  brand,
  model,
  description,
  category,
  price,
  inStock,
  src,
  id,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="box-border border max-w-xs relative w-36 sm:w-48 md:80 lg:w-96 bg-white shadow-xl dark:bg-black dark:border-zinc-700">
      <QuickView
        data={data}
        gender={gender}
        close={() => setShowModal(false)}
        condition={showModal}
        title={title}
        brand={brand}
        category={category}
        price={price}
        src={src}
        description={description}
        model={model}
        id={id}
      />
      <div className=" absolute top-1 right-1 z-10">
        <Tooltip message="مشاهده سریع محصول">
          <span
            onClick={() => setShowModal(true)}
            className="cursor-pointer bg-white px-1.5 py-0.25 ml-2 text-sm md:text-xl text-salmon"
          >
            <BsEye />
          </span>
        </Tooltip>
      </div>
      <div className="flex justify-center text-carbon bg-white items-center gap-2 text-xs sm:text-sm md:text-base absolute top-0.5 left-2 z-10 cursor-pointer">
        <BsStarHalf className=" text-salmon" />
        3.4
      </div>
      <img
        className="w-full h-32 sm:h-44 md:h-64 lg:h-96 "
        src={`http://localhost:3001/files/${src[0]}`}
        alt="product"
      />
      <div
        className=" cursor-pointer"
        onClick={() => {
          dispatch(selectedProduct(data));
          navigate(
            `/productDetails/${gender}/${title}/${category}+${brand}+مدل+${model}/${id}`
          );
        }}
      >
        {inStock > 0 ? (
          <img
            className="w-full h-32 sm:h-44 md:h-64 lg:h-96 absolute top-0 left-0 opacity-0 hover:opacity-100 transition:all duration-700 "
            src={`http://localhost:3001/files/${src[1]}`}
            alt="product"
          />
        ) : (
          <img
            className="w-full h-32 sm:h-44 md:h-64 lg:h-96 absolute top-0 left-0 grayscale "
            src={`http://localhost:3001/files/${src[0]}`}
            alt="product"
          />
        )}
      </div>
      <fieldset className="px-5 pb-5 flex flex-col justify-between border-2 m-1">
        <legend className="text-sm md:text-base lg:text-xl my-2 tracking-tight dark:text-white p-1 w-full lg:w-3/4">
          {title} {category} مدل {model} برند {brand}
        </legend>
        <div className="text-sm md:text-xl font-semibold dark:text-white">
          {inStock === 0 ? (
            <p className="text-red-600">ناموجود</p>
          ) : (
            <p className="text-salmon">{price} تومان</p>
          )}
        </div>
      </fieldset>
    </div>
  );
};
export default Card;
