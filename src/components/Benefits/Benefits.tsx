import React from "react";
import { BenefitsContainer } from "./styles";

interface BenefitsInterface {
  img: string;
  text: string;
}

const Benefits = ({ img, text }: BenefitsInterface) => {
  return (
    <BenefitsContainer>
      <img src={img} />
      <p>{text}</p>
    </BenefitsContainer>
  );
};

export default Benefits;
