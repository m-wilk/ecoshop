import "./App.scss";
import Home from "../src/pages/Home";
import Registration from "./pages/registration/Registration";
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Login from "./pages/login/Login";
import Seller from "./pages/seller/Seller";
import { Routes, Route } from "react-router-dom";




function App() {
  return (

    <div>
      <Routes>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/registration" element={ <Registration /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/seller" element={ <Seller /> }/>
      
      </Routes>
     
    </div>
  );
}

export default App;
