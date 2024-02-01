import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselContainer, ProductCarouselTitle } from "./styles";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import { ProductInterface } from "../../response";

import { Pagination } from "swiper/modules";

interface ProductCarouselInterface {
  text: string;
  content: ProductInterface[];
}

const ProductCarousel = ({ text, content }: ProductCarouselInterface) => {
  return (
    <ProductCarouselContainer>
      <ProductCarouselTitle>{text}</ProductCarouselTitle>
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
        {content.map((product) => {
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
