import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Navigation } from "swiper";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

const ProductCarousel = ({ src }) => {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-56 h-72 md:w-72 md:h-96 p-2 shadow-2xl border"
      >
        {src.map((item) => {
          return (
            <SwiperSlide key={item} className="h-72 md:w-72 md:h-96">
              <InnerImageZoom
                width={300}
                height={384}
                src={`http://localhost:3001/files/${item}`}
                zoomSrc={`http://localhost:3001/files/${item}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
