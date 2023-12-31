import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ProductsItem from "../../../components/productsItem/ProductsItem";
import Trending from "../../../components/trendingProducts/Trending";

const TrendingProducts = () => {
  //fetch product data
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products.filter(item => item.category === 'smartphones');
        setProduct(products);
        console.log(product);
      });
  }, []);
  return (
    //Trending products title
    <div className="pt-10">
      <h4 className="uppercase border-l-4 border-[#ffd90c] ml-5 text-2xl pl-2 font-semibold">
      Trending Products
      </h4>
      <hr className="mt-5 mx-5" />
      {/* Trending products title close  */}

      {/* map product data and pass product item component  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
        {product.map((item) => (
          <Trending key={item.id} item={item}></Trending>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
