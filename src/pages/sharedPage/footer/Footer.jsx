import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//import footer payment image
import footerImg from "../../../assets/footer image/imgbin_payment-gateway-logo-credit-card-paypal-png.png";

const Footer = () => {
  return (
    <>
      {/* footer section start */}
      <footer className="footer footer-center p-10 bg-neutral text-white rounded">
        <nav className="grid grid-cols-4 gap-4">
          <a className="link link-hover hover:text-[#ffd90c]">Home</a>
          <a className="link link-hover hover:text-[#ffd90c]">Shop</a>
          <a className="link link-hover hover:text-[#ffd90c]">Products</a>
          <a className="link link-hover hover:text-[#ffd90c]">Blog</a>
          <a className="link link-hover hover:text-[#ffd90c]">My cart</a>
          <a className="link link-hover hover:text-[#ffd90c]">Privacy policy</a>
          <a className="link link-hover hover:text-[#ffd90c]">
            Terms & condition
          </a>
          <a className="link link-hover hover:text-[#ffd90c]">FAQ</a>
        </nav>
        {/* social media icon */}
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a>
              <FaFacebook className="hover:text-[#ffd90c]" />
            </a>
            <a>
              <FaTwitter className="hover:text-[#ffd90c]" />
            </a>
            <a>
              <FaLinkedin className="hover:text-[#ffd90c]" />
            </a>
            <a>
              <FaInstagram className="hover:text-[#ffd90c]" />
            </a>
          </div>
        </nav>
        <div className="-mt-8">
          <img className="w-72" src={footerImg} alt="payment image" />
        </div>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
      {/* footer section close */}
    </>
  );
};

export default Footer;
