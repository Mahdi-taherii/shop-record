import React from "react";

function Filter(handle) {
  return (
    <div className="w-1/4 my-5 text-right h-full mr-5 p-5 border-2 border-red-200 rounded-lg text-xl hidden md:flex flex-col  gap-3">
      <div className="text-2xl mt-1 gap-5">
        <h3>فیلتر ها</h3>
      </div>
      <h3 className="text-xl font-extrabold mt-5 text-cinnamon-heavy ">
        مردانه
      </h3>
      <ul className="border-t-2 ">
        <li className="text-lg my-3">- پوشاک</li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "پوشاک", "همه");
          }}
        >
          همه
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "پوشاک", "پیراهن");
          }}
        >
          پیراهن
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "پوشاک", "کت");
          }}
        >
          کت و پالتو
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "پوشاک", "سوییشرت");
          }}
        >
          سوییشرت و هودی
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "پوشاک", "کفش");
          }}
        >
          کفش و کتانی
        </li>
      </ul>
      <ul className="border-t-2 ">
        <li className="text-lg my-3">- اکسسوری</li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "اکسسوری", "همه");
          }}
        >
          همه
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "اکسسوری", "کیف");
          }}
        >
          کیف
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "اکسسوری", "ساعت");
          }}
        >
          ساعت
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("مردانه", "اکسسوری", "عینک");
          }}
        >
          عینک
        </li>
      </ul>
      <h3 className="text-xl font-extrabold mt-5 text-cinnamon-heavy ">
        زنانه
      </h3>
      <ul className="border-t-2 ">
        <li className="text-lg my-3">- پوشاک</li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "پوشاک", "همه");
          }}
        >
          همه
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "پوشاک", "پیراهن");
          }}
        >
          پیراهن
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "پوشاک", "کت");
          }}
        >
          کت و پالتو
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "پوشاک", "سوییشرت");
          }}
        >
          سوییشرت و هودی
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "پوشاک", "کفش");
          }}
        >
          کفش و کتانی
        </li>
      </ul>
      <ul className="border-t-2 ">
        <li className="text-lg my-3">- اکسسوری</li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "اکسسوری", "همه");
          }}
        >
          همه
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "اکسسوری", "کیف");
          }}
        >
          کیف
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "اکسسوری", "ساعت");
          }}
        >
          ساعت
        </li>
        <li
          className="text-base hover:text-cinnamon-heavy  cursor-pointer"
          onClick={() => {
            handle("زنانه", "اکسسوری", "عینک");
          }}
        >
          عینک
        </li>
      </ul>
    </div>
  );
}

export default Filter;
