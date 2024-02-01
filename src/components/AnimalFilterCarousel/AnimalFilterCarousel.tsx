import { Swiper, SwiperSlide } from "swiper/react";
import { AnimalCarouselContainer } from "./styles";

import "swiper/css";
import AnimalFilter from "../AnimalFilter/AnimalFilter";

const AnimalFilterCarousel = () => {
  return (
    <AnimalCarouselContainer>
      <Swiper
        spaceBetween={32}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <AnimalFilter />
        </SwiperSlide>
        <SwiperSlide>
          <AnimalFilter />
        </SwiperSlide>
        <SwiperSlide>
          <AnimalFilter />
        </SwiperSlide>
        <SwiperSlide>
          <AnimalFilter />
        </SwiperSlide>
      </Swiper>
    </AnimalCarouselContainer>
  );
};

export default AnimalFilterCarousel;
