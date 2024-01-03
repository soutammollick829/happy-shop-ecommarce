import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FeatureProductCard = ({ item }) => {
  const {id, title, thumbnail, rating, price, description} = item;

  const {user} = useContext(AuthContext);
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
    <div className="flex items-center gap-5">
      <img
        className="w-36 h-32 rounded-md"
        src={thumbnail}
        alt="products image"
      />
      <div>
        <p>{title}</p>
        <p>$ {price}</p>
        <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
        <button onClick={()=>handelAddToCart(item)} className="btn btn-sm btn-outline mt-2 rounded-none bg-[#ffd90c] border-none">Buy Now</button>
      </div>
    </div>
  );
};

export default FeatureProductCard;
