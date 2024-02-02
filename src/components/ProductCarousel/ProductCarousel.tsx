import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCarouselContainer, ProductCarouselTitle } from "./styles";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import { ProductInterface } from "../../response";

import { Pagination } from "swiper/modules";

interface ProductCarouselInterface {
  text?: string;
  content: ProductInterface[];
}

const ProductCarousel = ({ text, content }: ProductCarouselInterface) => {
  return (
    <ProductCarouselContainer>
      {text ? <ProductCarouselTitle>{text}</ProductCarouselTitle> : null}
      <Swiper
        spaceBetween={32}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {content.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;
