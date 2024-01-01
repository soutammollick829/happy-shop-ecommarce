import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import BrandLogo from "./brand&logo/BrandLogo";
import Products from "./products/Products";
import RecentNews from "./recentNews/RecentNews";
import Categories from "./shopCategories/Categories";
import Subscribe from "./subscribe/Subscribe";
import TrendingProducts from "./trendingProducts/TrendingProducts";
import FeatureProducts from "./featureProducts/FeatureProducts";

const Home = () => {
    return (
        <div>
            {/* use react helmet  */}
            <Helmet>
                <title>Happy shop | Home</title>
            </Helmet>
            <Banner/>
            <Categories/>
            <Products/>
            <BrandLogo/>
            <TrendingProducts/>
            <RecentNews/>
            <FeatureProducts/>
            <Subscribe/>
        </div>
    );
};

export default Home;