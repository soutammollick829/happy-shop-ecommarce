import FeatureProductCard from "../../../components/featureProductsCard/FeatureProductCard";
import useProducts from "../../../hooks/useProducts";

const FeatureProducts = () => {
  //use custom hook for load API data
  const [product] = useProducts();
  
  return (
    //Feature products title
    <div className="pt-10">
      <h4 className="uppercase border-l-4 border-[#ffd90c] ml-5 text-2xl pl-2 font-semibold">
      Feature Products
      </h4>
      <hr className="mt-5 mx-5" />
      {/* feature products title close  */}

      {/* map product data and pass product item component  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-20 mb-20">
        {product.map((item) => (
          <FeatureProductCard key={item.id} item={item}></FeatureProductCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
