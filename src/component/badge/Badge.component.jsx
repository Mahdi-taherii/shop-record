import React from "react";
import { useSelector } from "react-redux";

function Badge() {
  const localCart = localStorage.getItem("cart");

  const reduxCart = useSelector((state) => state.buyProducts);

  const cart = JSON.parse(localCart) || reduxCart;

  let sum = 0;

  cart.length > 0 &&
    cart.forEach((item) => {
      sum += item.inCart;
    });

  return cart.length > 0 ? (
    <div className="bg-salmon-light text-white font-semibold px-1 md:px-1.5 rounded-full text-xs">
      {sum}
    </div>
  ) : null;
}

export default Badge;
