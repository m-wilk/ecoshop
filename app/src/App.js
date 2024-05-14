import "./App.scss";
import Home from "../src/pages/Home";
import Registration from "./pages/registration/Registration";
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Login from "./pages/login/Login";




function App() {
  return (
    <div>
      {/* <Home /> */}
     <Registration /> 
      <Login />
    </div>
  );
}

export default App;
