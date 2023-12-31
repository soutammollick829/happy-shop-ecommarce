import Banner from "./banner/Banner";
import BrandLogo from "./brand&logo/BrandLogo";
import Products from "./products/Products";
import Categories from "./shopCategories/Categories";
import Subscribe from "./subscribe/Subscribe";
import TrendingProducts from "./trendingProducts/TrendingProducts";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Products/>
            <BrandLogo/>
            <TrendingProducts/>
            <Subscribe/>
        </div>
    );
};

export default Home;