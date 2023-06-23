import './Testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from "swiper";
import StarIcon from "@mui/icons-material/Star";


// Import Swiper styles
import 'swiper/css';

const Testimonials = () => {
  return (
    <section className=" mt-7 w-full flex flex-col ">
      <h4 className="m-auto">Our Customers Feed Back</h4>
      <Swiper 
        modules={[EffectCoverflow]}
        effect='coverflow'
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
     
        breakpoints={{
          100:{slidesPerView:1},
          500:{slidesPerView:2},
          890:{slidesPerView:3}
        }}
        className="card_container  container m-auto mt-10">

        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

const Card = () => {
  return (
    <div className="w-full md:w-[290px] p-3   ">
      <div className=" p-6 bg-white flex flex-col gap-4 border-2 rounded-md border-gray-100 border-solid ">
        <div className='flex '>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
        </div>
        <p className="  mb-2 ">
          I like the way the staff advises me. Thank you for the very good
          quality of the case. I will come back and buy more stuff.
        </p>
        <div className="  m-1.5 flex flex-wrap items-center">
          <div className="w-auto p-1.5">
            <img
              src="https://source.unsplash.com/featured/30x30"
              className=" rounded-full"
              alt=""
            />
          </div>
          <div className="w-auto p-1.5">
            <h5 className=" text-step-0">Kate Smith</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <label className="rating_logo">
      <input type="checkbox" />
      <StarIcon/>
    </label>
  );
};
