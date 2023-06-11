import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ICarousel } from "types/Interface";
import Button from "component/button/Button.component";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "assets/styles.css";
import { useNavigate } from "react-router-dom";

const BannerCarousel = ({ src, description }) => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/Shop");
  };
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="text-carbon"
      >
        {src.map((item) => {
          return (
            <SwiperSlide key={item}>
              <img
                src={`${item}`}
                alt="banner"
                className="w-full lg:h-128"
                onClick={() => {
                  navigateToContacts();
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BannerCarousel;
