import { Swiper, SwiperSlide } from "swiper/react";
import Benefits from "../Benefits/Benefits";
import { BenefitsCarouselContainer, BenefitsTitle } from "./styles";

import "swiper/css";

const BenefitsCarousel = () => {
  return (
    <BenefitsCarouselContainer>
      <BenefitsTitle>Meus benefícios</BenefitsTitle>
      <Swiper
        spaceBetween={32}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Benefits />
        </SwiperSlide>
        <SwiperSlide>
          <Benefits />
        </SwiperSlide>
        <SwiperSlide>
          <Benefits />
        </SwiperSlide>
        <SwiperSlide>
          <Benefits />
        </SwiperSlide>
      </Swiper>
    </BenefitsCarouselContainer>
  );
};

export default BenefitsCarousel;
