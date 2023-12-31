// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//import banner image
import bannerImg1 from "../../../assets/Banner/Blue and Purple Gradient Laptop Sale Banner.png";
import bannerImg2 from "../../../assets/Banner/Blue Modern Gadget Banner.png";
import bannerImg3 from "../../../assets/Banner/Green and Black Vivid Bold Blocks Electronics and Appliances Banner.png";
import bannerImg4 from "../../../assets/Banner/Smartphone Flash Sale - Banner Template.png";
import bannerImg5 from "../../../assets/Banner/White Blue Elegant Promotion Offer Watch Medium Banner.png";

const Banner = () => {
  return (
    // carousel with banner image
    <Carousel className="mx-5" autoPlay interval="5000" axis="horizontal" infiniteLoop>
      <div>
        <img src={bannerImg1} />
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
      <div>
        <img src={bannerImg4} />
      </div>
      <div>
        <img src={bannerImg5} />
      </div>
    </Carousel>
  );
};

export default Banner;
