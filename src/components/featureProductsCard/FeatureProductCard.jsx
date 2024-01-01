import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const FeatureProductCard = ({ item }) => {
  const { title, thumbnail, rating, price } = item;
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
        <button className="btn btn-sm btn-outline mt-2 rounded-none bg-[#ffd90c] border-none">Buy Now</button>
      </div>
    </div>
  );
};

export default FeatureProductCard;
