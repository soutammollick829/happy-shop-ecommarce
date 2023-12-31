import Banner from "./banner/Banner";
import BrandLogo from "./brand&logo/BrandLogo";
import Products from "./products/Products";
import Categories from "./shopCategories/Categories";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Products/>
            <BrandLogo/>
        </div>
    );
};

export default Home;