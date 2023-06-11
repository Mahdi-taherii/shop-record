import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "pages/contactUs/Contact";
import About from "pages/aboutUs/About";
import Login from "pages/login/Login";
import Cart from "pages/cart/Cart";
import Shop from "pages/shop/shopLanding/Shop";
import Home from "pages/Home/Home";
import NotFoundPage from "pages/404page/404";
import AdminDashboardProducts from "pages/adminDashboard/Products/AdminDashboardProducts";
import AdminDashboardPrices from "pages/adminDashboard/Prices/AdminDashboardPrices";
import AdminDashboardOrders from "pages/adminDashboard/Orders/AdminDashboardOrders";
import ShopCategoryGroupPage from "pages/shop/shopCategoryGroupPage/ShopCategoryGroupPage";
import ProductDetails from "pages/productDetails/ProductDetails";
import Payment from "pages/payment/Payment";
import PaymentStatus from "pages/paymentStatus/PaymentStatus";
import RequireAuth from "./ProtectedRouthes";
import ManagementPanel from "pages/adminDashboard/ManagementPanel/ManagementPanel";

function NavRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route
            path="/admin/ManagementPanel"
            element={<ManagementPanel />}
          ></Route>
          <Route
            path="/admin/products/:pageId"
            element={<AdminDashboardProducts />}
          ></Route>
          <Route
            path="/admin/prices/:pageId"
            element={<AdminDashboardPrices />}
          ></Route>
          <Route
            path={`/admin/orders/:pageId`}
            element={<AdminDashboardOrders />}
          ></Route>
        </Route>
        <Route
          path="/paymentStatus/:status"
          element={<PaymentStatus />}
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route
          path="/productDetails/:gender/:title/:info/:id"
          element={<ProductDetails />}
        ></Route>
        <Route
          path="/shop/:topCategory/:category/:subCategory/:page"
          element={<ShopCategoryGroupPage />}
        ></Route>
        <Route
          path="/shop/:Category/:page"
          element={<ShopCategoryGroupPage />}
        ></Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavRoutes;
