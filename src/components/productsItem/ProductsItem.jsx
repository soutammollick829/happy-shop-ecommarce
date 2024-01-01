import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { FaShoppingCart,} from "react-icons/fa";

const ProductsItem = ({ item }) => {
  const { title, thumbnail, rating, price, description, discountPercentage } =
    item;
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
          <Rating style={{ maxWidth: 120}} value={rating} readOnly />
          <div className="card-actions">
            <div className="btn btn-square w-28 rounded-none bg-slate-800 text-white uppercase hover:bg-[#ffd90c] hover:text-black">
              Add to Cart
            </div>
            <FaShoppingCart className="text-4xl mt-2" />
          </div>
        </div>
      </div>
    </div>
    // product showing card close
  );
};

export default ProductsItem;
