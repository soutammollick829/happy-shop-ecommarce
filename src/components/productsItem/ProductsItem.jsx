import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";


const ProductsItem = ({ item }) => {
  const {
    id,
    title,
    thumbnail,
    rating,
    price,
    description,
    discountPercentage,
  } = item;
  //auth context
  const { user } = useContext(AuthContext);
  
  const [,refetch] = useCart();

  //even hendaler post data in server
  const handelAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const addToCart = {
        productId: id,
        title,
        thumbnail,
        price,
        description,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCart),
      })
        .then((res) => res.json())
        .then((data) => {
          //sweet alert
          if (data.insertedId) {
            refetch() //data refetch tanstack query hook
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Add to cart successfully",
            });
          }
        });
    }
  };
  //even hendaler post data in server section close

  return (
    <div className="mx-5 mt-5">
      {/* product showing card  */}
      <div className="card lg:w-80 h-[500px] rounded-none bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-full" src={thumbnail} alt="product image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <span className="flex">
            <p className="font-bold">$ {price}</p>
            <p>
              <mark className="p-1">Discount : {discountPercentage}%</mark>
            </p>
          </span>
          {/* React rating  */}
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          <div className="card-actions">
            <button
              onClick={() => handelAddToCart(item)}
              className="btn btn-square w-28 rounded-none bg-slate-800 text-white uppercase hover:bg-[#ffd90c] hover:text-black"
            >
              Add to Cart
            </button>
            <FaShoppingCart className="text-4xl mt-2" />
          </div>
        </div>
      </div>
    </div>
    // product showing card close
  );
};

export default ProductsItem;
