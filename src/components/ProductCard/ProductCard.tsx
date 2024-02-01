import React from "react";
import {
  AddCardButton,
  CardFooter,
  ImageContainer,
  Price,
  ProductCardContainer,
  ProductName,
  TextHighlight,
} from "./styles";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src="/src/assets/doguinho.png" />
      </ImageContainer>
      <ProductName>Coleira Peitoral ...</ProductName>
      <CardFooter>
        <Price>
          <TextHighlight>R$</TextHighlight>90,00
        </Price>
        <AddCardButton>
          <img src="/src/assets/add.svg" alt="adicionar ao carrinho" />
        </AddCardButton>
      </CardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
