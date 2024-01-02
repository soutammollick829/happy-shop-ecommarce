//import logo img from folder
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/Horizontal Logo with White Background.png";
// import react icon
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  //Navbar options
  const navOptions = (
    <div className="space-x-10 font-semibold">
        <Link className="hover:text-amber-500" to="/">Home</Link>
        <Link className="hover:text-amber-500" to="/shop">Shop</Link>
        <Link className="hover:text-amber-500" to="/products">Products</Link>
        <Link className="hover:text-amber-500" to="/blog">Blog</Link>
    </div>
  );
  //hide navbar top option
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const isRegister = location.pathname.includes("register");
  return (
    <>
      {/* nav welcome section start */}
      { isLogin || isRegister || <div className="flex justify-between mx-5 mt-2 mb-2">
        <p>Welcome to happy shop</p>
        <div className="space-x-2">
          <Link to="/login"><button className="btn-sm hover:text-amber-500">Login</button></Link>
          <Link to="/register">
          <button className="btn-sm hover:text-amber-500">Register</button>
          </Link>
        </div>
      </div>}
      {/* nav welcome section close*/}
      <hr />
      {/* main navbar section start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
            >
              {/* use navOptions */}
              {navOptions}
            </ul>
          </div>
          <img className="w-32 lg:w-48" src={logo} alt="logo brand" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* use navOptions */}
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="search"
            placeholder="Search here..."
            className="input input-bordered input-sm w-32 lg:w-48 max-w-xs"
          />
          <button className="btn btn-square btn-sm">
            <FaSearch />
          </button>
          <button>
            <FaShoppingCart className="ml-1 lg:ml-3 lg:mr-5 mr-2 text-xl lg:text-2xl" />
          </button>
        </div>
      </div>
      {/* main navbar section close  */}
      <hr />
    </>
  );
};

export default Navbar;
