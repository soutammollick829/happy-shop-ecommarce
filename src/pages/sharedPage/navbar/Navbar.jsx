//import logo img from folder
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/Horizontal Logo with White Background.png";
// import react icon
import { FaBars, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useCart from "../../../hooks/useCart";
import CartItems from "../../../components/cartItems/CartItems";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  //handel logout process
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  //Navbar options
  const navOptions = (
    <div className="space-x-10 font-semibold">
      <Link className="hover:text-amber-500" to="/">
        Home
      </Link>
      <Link className="hover:text-amber-500" to="/shop">
        Shop
      </Link>
      <Link className="hover:text-amber-500" to="/products">
        Products
      </Link>
      <Link className="hover:text-amber-500" to="/blog">
        Blog
      </Link>
    </div>
  );
  //hide navbar top option
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const isRegister = location.pathname.includes("register");
  return (
    <>
      {/* nav welcome section start */}
      {isLogin || isRegister || (
        <div className="flex justify-between mx-5 mt-2 mb-2">
          <p>Welcome to happy shop</p>
          <div className="space-x-2">
            {user ? (
              <>
                <button onClick={handelLogOut} className="btn btn-sm">
                  <FaRegUser />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn-sm hover:text-amber-500">Login</button>
                </Link>
              </>
            )}
            <Link to="/register">
              <button className="btn-sm hover:text-amber-500">Register</button>
            </Link>
          </div>
        </div>
      )}
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

          {/* use dropdown in shopping cart button  */}
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" m-1">
              <div className="badge badge-warning ml-3 lg:ml-5">
                {cart?.length || 0}
              </div>
              <FaShoppingCart className="ml-1 lg:ml-3 lg:mr-5 mr-2 text-xl lg:text-2xl -mt-1" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[2] menu p-6 shadow bg-slate-100 lg:w-72"
            >
              <p className="text-base font-medium text-center mb-5">There are <mark>{cart?.length || 0}</mark> product</p>
              {/* add to cart product map and show dropdown menu  */}
              {cart.map((item) => (
                <CartItems key={item.id} item={item}></CartItems>
              ))}
              <div className="divider"></div>
              <Link to="/viewcart">
              <button className="btn btn-wide rounded-none bg-slate-800 text-white uppercase hover:bg-[#ffd90c] hover:text-black">
                view cart
              </button>
              </Link>
              {/* <button className="btn btn-wide btn-outline mt-2 rounded-none bg-[#ffd90c] border-none uppercase">
                checkout
              </button> */}
            </ul>
          </div>
        </div>
      </div>
      {/* main navbar section close  */}
      <hr />
    </>
  );
};

export default Navbar;
