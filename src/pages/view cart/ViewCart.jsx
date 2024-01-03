import CheckOut from "../../components/checkOut/CheckOut";
import useCart from "../../hooks/useCart";

import image1 from '../../assets/footer image/imgbin_payment-gateway-logo-credit-card-paypal-png.png';
import image2 from '../../assets/recent news/Banner-1.webp';
import image3 from '../../assets/recent news/Banner.webp';
import { Link } from "react-router-dom";

const ViewCart = () => {
  const [cart] = useCart();
  //emplement reduce total sum....
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="mb-20">
      <p className="p-2">Home / Your shopping cart</p>
      <hr />
      <div className="flex space-x-48 lg:space-x-[470px] mx-5 mt-10 text-xl font-bold">
        <p>My Cart :</p>
        <p>{cart.length} Item</p>
      </div>
      <hr className="w-[640px] ml-5 mt-3" />
      {/* left side section here  */}
      <div class="grid grid-col-3 lg:grid-flow-col gap-4 mx-5">
        <div class="col-span-2 space-y-10">
          {cart.map((item) => (
            <CheckOut key={item.id} item={item}></CheckOut>
          ))}
          <Link to="/">
          <button className="btn w-60 btn-outline mt-10 rounded-none bg-[#ffd90c] border-none uppercase ml-40">
            continue shopping</button>
          </Link>
        </div>
        {/* right side section here  */}
        <div class="lg:row-span-3 bg-slate-100 w-[300px]  h-[1260px]">
          <p className="text-center mt-5 text-xl font-bold">Shopping info</p>
          {/* select field  */}
          <select className="select select-warning w-60 mx-8 mt-4 max-w-xs rounded-none text-center">
            <option disabled selected>
              Select country
            </option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
            <option>China</option>
            <option>Pakistan</option>
          </select>

          <input
            type="text"
            placeholder="Zip/Postal code"
            className="input input-bordered input-warning w-60 mx-8 mt-4 max-w-xs rounded-none text-center"
          />
          {/* total amount use to reduce..sum */}
          <p className="text-lg font-bold text-center mt-10">Total: ${total}</p>
          {/* discount input field  */}
          <input
            type="text"
            placeholder="Discount code"
            className="input input-bordered input-warning w-60 mx-8 mt-4 max-w-xs rounded-none text-center"
          />
          {/* checkOut button  */}
          <button className="btn w-60 btn-outline mt-10 rounded-none bg-[#ffd90c] border-none uppercase mx-8">
            checkout
          </button>
          {/* simple image  */}
          <img className="w-72 px-2 mt-10" src={image1} alt="image" />
          <img className="mt-10 px-5" src={image2} alt="image" />
          <img className="mt-10 px-5" src={image3} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
