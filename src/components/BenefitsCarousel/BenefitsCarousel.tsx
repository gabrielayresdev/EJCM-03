import { Swiper, SwiperSlide } from "swiper/react";
import Benefits from "../Benefits/Benefits";
import { BenefitsCarouselContainer, BenefitsTitle } from "./styles";

import "swiper/css";

const BenefitsCarousel = () => {
  const benefits = [
    { src: "/src/assets/benefits/frete.png", text: "Frete grátis" },
    { src: "/src/assets/benefits/cupons.png", text: "Cupons" },
    { src: "/src/assets/benefits/cashback.png", text: "Cashback" },
    { src: "/src/assets/benefits/premios.png", text: "Prêmios" },
  ];

  return (
    <BenefitsCarouselContainer>
      <BenefitsTitle>Meus benefícios</BenefitsTitle>
      <Swiper
        spaceBetween={32}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {benefits.map((benefit) => {
          return (
            <SwiperSlide>
              <Benefits img={benefit.src} text={benefit.text} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BenefitsCarouselContainer>
  );
};

export default BenefitsCarousel;
