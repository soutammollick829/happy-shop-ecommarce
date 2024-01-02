import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/sharedPage/navbar/Navbar";
import Footer from "../../pages/sharedPage/footer/Footer";

const Main = () => {
    //hide header and footer 
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const isRegister = location.pathname.includes("register");
  return (
    <div>
      <Navbar />
      <Outlet />
      {isLogin || isRegister || <Footer />}
    </div>
  );
};

export default Main;
