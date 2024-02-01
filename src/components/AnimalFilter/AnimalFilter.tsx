import React from "react";
import { AnimalFilterContainer, Image, ImageContainer, Text } from "./styles";

interface AnimalFilterInterface {
  img: string;
  text: string;
}

const AnimalFilter = ({ img, text }: AnimalFilterInterface) => {
  return (
    <AnimalFilterContainer>
      <ImageContainer>
        <Image src={img} alt={`Filtrar produtos para cachorros ${text}`} />
      </ImageContainer>
      <Text>{text}</Text>
    </AnimalFilterContainer>
  );
};

export default AnimalFilter;
