import React from "react";
import { LocationContainer, TextContainer } from "./styles";

const Location = () => {
  return (
    <LocationContainer>
      <div>
        <img src="/src/assets/location.svg" />
      </div>
      <TextContainer>
        <p>Receber em</p>
        <p>rua Dionísio, 72- apt 402</p>
      </TextContainer>
      <div>
        <img src="/src/assets/arrow.svg" alt="selecionar local de entrega" />
      </div>
    </LocationContainer>
  );
};

export default Location;
