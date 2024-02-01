import React from "react";
import { AnimalFilterContainer, ImageContainer, Text } from "./styles";

const AnimalFilter = () => {
  return (
    <AnimalFilterContainer>
      <ImageContainer>
        <img
          src="/src/assets/cachorros.png"
          alt="Filtrar produtos para cachorros"
        />
      </ImageContainer>
      <Text>Cachorros</Text>
    </AnimalFilterContainer>
  );
};

export default AnimalFilter;
