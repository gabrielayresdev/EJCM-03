import { Swiper, SwiperSlide } from "swiper/react";
import Benefits from "../Benefits/Benefits";
import { BenefitsCarouselContainer, BenefitsTitle } from "./styles";

import "swiper/css";

import { Pagination } from "swiper/modules";

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
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {benefits.map((benefit) => {
          return (
            <SwiperSlide key={benefit.text}>
              <Benefits img={benefit.src} text={benefit.text} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BenefitsCarouselContainer>
  );
};

export default BenefitsCarousel;
