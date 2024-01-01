import { useState } from "react";
import ProductsItem from "../../../components/productsItem/ProductsItem";
import useProducts from "../../../hooks/useProducts";

//import react tab....
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Products = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //use custom hook for load API data
  const [product] = useProducts();
  const laptops = product.filter((item) => item.category === "laptops");
  const fragrances = product.filter((item) => item.category === "fragrances");
  const skincare = product.filter((item) => item.category === "skincare");
  const groceries = product.filter((item) => item.category === "groceries");
  const homeDecoration = product.filter(
    (item) => item.category === "home-decoration"
  );

  return (
    //products title
    <div className="pt-10">
      <h4 className="uppercase border-l-4 border-[#ffd90c] ml-5 text-2xl pl-2 font-semibold mb-5">
        Our Products
      </h4>
      {/* products title close  */}

      {/* use react tap  */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Laptops</Tab>
          <Tab>Fragrances</Tab>
          <Tab>skincare</Tab>
          <Tab>groceries</Tab>
          <Tab>home-decoration</Tab>
        </TabList>
        <TabPanel>
          {/* map product data and pass product item component  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
            {laptops.map((item) => (
              <ProductsItem key={item.id} item={item}></ProductsItem>
            ))}
          </div>
        </TabPanel>
        {/* fragrances items  */}
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
            {fragrances.map((item) => (
              <ProductsItem key={item.id} item={item}></ProductsItem>
            ))}
          </div>
        </TabPanel>
        {/* skincare items  */}
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
            {skincare.map((item) => (
              <ProductsItem key={item.id} item={item}></ProductsItem>
            ))}
          </div>
        </TabPanel>
        {/* groceries items  */}
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
            {groceries.map((item) => (
              <ProductsItem key={item.id} item={item}></ProductsItem>
            ))}
          </div>
        </TabPanel>
        {/* home-Decoration items  */}
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-20">
            {homeDecoration.map((item) => (
              <ProductsItem key={item.id} item={item}></ProductsItem>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;
