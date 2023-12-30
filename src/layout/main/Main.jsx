import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharedPage/navbar/Navbar";
import Footer from "../../pages/sharedPage/footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;