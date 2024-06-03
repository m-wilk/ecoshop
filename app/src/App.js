import "./App.scss";
import Home from "../src/pages/Home";
import Registration from "./pages/registration/Registration";
import "swiper/css/bundle";
import "swiper/css/pagination";
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Login from "./pages/login/Login";
import Seller from "./pages/seller/Seller";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductCategories from "./pages/product-categories/ProductCategories";
import ProductDetails from "./pages/product-details/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/user-dashboard/*" element={<Dashboard />} />
        {/* <Route path="/shop" element={<ProductCategories />} /> */}
        <Route path="/shop" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
