import { Roll, Slide } from "react-awesome-reveal";
import { FaHeadset, FaShippingFast, FaWallet } from "react-icons/fa";

import newsImg1 from "../../../assets/recent news/Banner-1.webp";
import newsImg2 from "../../../assets/recent news/Banner.webp";

const RecentNews = () => {
  return (
    <>
      {/* recent news section start  */}
      <div className="lg:stats lg:rounded-none mx-5 lg:mx-0 lg:ml-5 lg:w-[966px] border-2 bg-slate-50 lg:h-32 items-center mb-10">
        <div className="stat">
          <div className="stat-figure text-[#ffd90c] text-4xl">
            <Roll>
              <FaShippingFast />
            </Roll>
          </div>
          <div className="stat-title font-semibold">Free shipping</div>
          <div className="stat-desc">Shipping in 5 days</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-[#ffd90c] text-4xl">
            <Roll>
              <FaWallet />
            </Roll>
          </div>
          <div className="stat-title font-semibold">Money back</div>
          <div className="stat-desc">Within 30 days</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-[#ffd90c] text-4xl">
            <Roll>
              <FaHeadset />
            </Roll>
          </div>
          <div className="stat-title font-semibold">Customer support</div>
          <div className="stat-desc">24X7 support</div>
        </div>
      </div>
      {/* recent news section close  */}

      {/* discount image  */}
      <div className="flex gap-5 mx-5 justify-between">
        <Slide>
          <img className="w-40 lg:w-[460px]" src={newsImg1} alt="news image" />
        </Slide>
        <Slide direction="right">
          <img className="w-40 lg:w-[460px]" src={newsImg2} alt="news image" />
        </Slide>
      </div>
    </>
  );
};

export default RecentNews;
