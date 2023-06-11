import PieChart from "component/charts/PieChart/PieChart";
import DoughnutChart from "component/charts/doghnutChart/DoughtnutChart.component";
import AdminHeader from "layout/header/adminHeader/adminDashboardHeader.component";
import { useNavigate } from "react-router-dom";
import PolarAreaChart from "component/charts/PolarAreaChart/PolarAreaChart.component";
import React from "react";
import Button from "component/button/Button.component";

function ManagementPanel() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AdminHeader />
      <div className="bg-gradient-to-r from-stone-200 to-zinc-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-carbon flex  gap-2 justify-evenly items-center flex-wrap py-[3.7rem]">
        <fieldset className="flex flex-col items-center justify-evenly px-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-2xl border-1 h-120 font-bold text-2xl">
          <legend className="bg-white p-2 rounded-lg border">
            <PolarAreaChart />
          </legend>
          <Button
            text="کالا ها"
            config={"w-full text-2xl"}
            Click={() => {
              navigate("/admin/products/1");
            }}
          />
        </fieldset>

        <fieldset className="flex flex-col items-center justify-evenly px-10 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 shadow-2xl border-1 h-120 font-bold text-2xl">
          <legend className="bg-white p-2 rounded-lg border">
            <DoughnutChart />
          </legend>
          <Button
            text="موجودی و قیمت ها"
            config={"w-full text-2xl"}
            Click={() => {
              navigate("/admin/prices/1");
            }}
          />
        </fieldset>

        <fieldset className="flex flex-col items-center justify-evenly px-10 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-2xl border-1 h-120 font-bold text-2xl">
          <legend className="bg-white p-2 rounded-lg border">
            <PieChart />
          </legend>
          <Button
            text="سفارش ها"
            config={"w-full text-2xl"}
            Click={() => {
              navigate("/admin/orders/1");
            }}
          />
        </fieldset>
      </div>
    </React.Fragment>
  );
}

export default ManagementPanel;
