import React from "react";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const Rating = () => {
  return (
    <div className="flex justify-center gap-1 items-center mt-2.5 mb-5 text-salmon">
      <BsStar />
      <BsStarHalf />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <span className="text-carbon dark:text-white font-semibold mr-2 px-2.5 py-0.5 ">
        3.4
      </span>
    </div>
  );
};

export default Rating;
