import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselContainer, ProductCarouselTitle } from "./styles";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import { forYou } from "../../response";

import { Pagination } from "swiper/modules";

const ProductCarousel = () => {
  return (
    <ProductCarouselContainer>
      <ProductCarouselTitle>Recomendados para você</ProductCarouselTitle>
      <Swiper
        spaceBetween={32}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {forYou.map((product) => {
          return (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
