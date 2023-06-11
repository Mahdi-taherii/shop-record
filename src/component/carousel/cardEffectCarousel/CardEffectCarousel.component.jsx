import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
const CardEffectCarousel = ({ src }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-56 h-72 md:w-72 md:h-96  p-2 rounded-lg drop-shadow-2xl"
      >
        {src.map((item) => {
          return (
            <SwiperSlide key={item} className="rounded-lg">
              <img
                className="w-56 h-72 md:w-72 md:h-96 rounded-lg drop-shadow-2xl"
                src={`http://localhost:3001/files/${item}`}
                alt="product_image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CardEffectCarousel;
