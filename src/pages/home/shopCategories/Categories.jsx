// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

//categories photo import..
import categorieImg1 from "../../../assets/categories photo/computer.webp";
import categorieImg2 from "../../../assets/categories photo/laptop.webp";
import categorieImg3 from "../../../assets/categories photo/keyboard.webp";
import categorieImg4 from "../../../assets/categories photo/mobile.webp";
import categorieImg5 from "../../../assets/categories photo/monitor-screen.webp";
import categorieImg6 from "../../../assets/categories photo/mouse.webp";
import categorieImg7 from "../../../assets/categories photo/radio.webp";
import categorieImg8 from "../../../assets/categories photo/usb.webp";
import categorieImg9 from "../../../assets/categories photo/trimmer.webp";

const Categories = () => {
  return (
    // Categories title 
    <div className="mt-16 mb-10">
      <h4 className="uppercase border-l-4 border-[#ffd90c] ml-5 text-2xl pl-2 font-semibold ">
        Shop Categories
      </h4>
      <hr  className="mt-5 mx-5"/>
      {/* Categories title close  */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Categories image with swiper  */}
        <SwiperSlide>
          <img className="w-80 ml-5" src={categorieImg1} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-12">Computer</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60 lg:mt-10 mx-auto" src={categorieImg2} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-5">Laptop</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-72" src={categorieImg3} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-10">Keyboard</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60 lg:mt-10" src={categorieImg4} alt="categories image" />
          <h5 className="text-xl lg:font-semibold ml-8 lg:ml-24 lg:-mt-5">Mobile</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60 lg:mt-10" src={categorieImg5} alt="categories image" />
          <h5 className="text-xl lg:font-semibold ml-8 lg:ml-24 lg:-mt-5">Smart TV</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-72" src={categorieImg6} alt="categories image" />
          <h5 className="text-xl lg:font-semibold ml-8 lg:ml-28 lg:-mt-6">Mouse</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-72" src={categorieImg7} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-10">Radio</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-80" src={categorieImg8} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-20">USB</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-60 lg:mt-10" src={categorieImg9} alt="categories image" />
          <h5 className="text-xl lg:font-semibold text-center lg:-mt-5">Trimmer</h5>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
