//import react marquee
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";

import brandLogo1 from "../../../assets/brand&logo/brand-logo1.svg";
import brandLogo2 from "../../../assets/brand&logo/brand-logo2.svg";
import brandLogo3 from "../../../assets/brand&logo/brand-logo3.svg";
import brandLogo4 from "../../../assets/brand&logo/brand-logo4.svg";
import brandLogo5 from "../../../assets/brand&logo/brand-logo5.svg";
import brandLogo6 from "../../../assets/brand&logo/brand-logo7.svg";

//product image
import image1 from "../../../assets/product image/Banner-2.webp";
import image2 from "../../../assets/product image/Banner-3.webp";


const BrandLogo = () => {
  return (
    // brand & logo title
    <div>
      <h4 className="uppercase border-l-4 border-[#ffd90c] ml-5 text-2xl pl-2 font-semibold">
        Brand logo
      </h4>
      <hr className="mt-5 mx-5" />
      {/* react marquee */}
      <Marquee className="mt-10 mb-10">
        <img className="w-36 mr-14" src={brandLogo1} alt="brand logo" />
        <img className="w-36 mr-14" src={brandLogo2} alt="brand logo" />
        <img className="w-36 mr-14" src={brandLogo3} alt="brand logo" />
        <img className="w-36 mr-14" src={brandLogo4} alt="brand logo" />
        <img className="w-36 mr-14" src={brandLogo5} alt="brand logo" />
        <img className="w-36 mr-14" src={brandLogo6} alt="brand logo" />
      </Marquee>
      {/* react marquee close  */}

      {/* display product section  */}
      <div className="lg:flex mx-5 gap-5 mb-20">
        <div className="lg:w-1/2">
          <img src={image1} alt="image" />
          <div className="-mt-48 ml-10 space-y-5">
            {/* used React Awesome Reveal  */}
            <Fade cascade>
              <h3 className="text-4xl">
                Hair <br />
                Dryer
              </h3>
              <button className="btn uppercase rounded-none bg-[#ffd90c] hover:bg-slate-800 hover:text-white">
                shop now
              </button>
            </Fade>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={image2} alt="image" />
          <div className="-mt-48 ml-10 space-y-5">
            <Fade cascade>
              <h3 className="text-4xl">
                Dropping <br />
                the bass
              </h3>
              <button className="btn uppercase rounded-none bg-[#ffd90c] hover:bg-slate-800 hover:text-white">
                shop now
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
    // display product section close 
  );
};

export default BrandLogo;
