import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselContainer, ProductCarouselTitle } from "./styles";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";

const ProductCarousel = () => {
  return (
    <ProductCarouselContainer>
      <ProductCarouselTitle>Recomendados para você</ProductCarouselTitle>
      <Swiper
        spaceBetween={32}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
