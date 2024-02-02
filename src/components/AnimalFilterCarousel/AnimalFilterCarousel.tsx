import { Swiper, SwiperSlide } from "swiper/react";
import { AnimalCarouselContainer } from "./styles";

import "swiper/css";
import AnimalFilter from "../AnimalFilter/AnimalFilter";

import { Pagination } from "swiper/modules";

const AnimalFilterCarousel = () => {
  const animals = [
    { src: "/src/assets/pets/cachorros.png", name: "Cachorros" },
    { src: "/src/assets/pets/gatos.png", name: "Gatos" },
    { src: "/src/assets/pets/peixes.png", name: "Peixes" },
    { src: "/src/assets/pets/aves.png", name: "Aves" },
    { src: "/src/assets/pets/exoticos.png", name: "Exóticos" },
  ];
  return (
    <AnimalCarouselContainer>
      <Swiper
        spaceBetween={32}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {animals.map((animal) => {
          return (
            <SwiperSlide key={animal.name}>
              <AnimalFilter img={animal.src} text={animal.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </AnimalCarouselContainer>
  );
};

export default AnimalFilterCarousel;
