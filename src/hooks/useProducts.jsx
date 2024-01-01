import { useEffect, useState } from "react";

const useProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        setProduct(products);
        setLoading(false);
      });
  }, []);
  return [product, loading];
};

export default useProducts;
