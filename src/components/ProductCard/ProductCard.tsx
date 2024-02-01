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

interface ProductInterface {
  img: string;
  price: number;
  name: string;
}

const ProductCard = ({ product }: { product: ProductInterface }) => {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.img} />
      </ImageContainer>
      <ProductName>{product.name}</ProductName>
      <CardFooter>
        <Price>
          <TextHighlight>R$</TextHighlight>
          {product.price.toFixed(2)}
        </Price>
        <AddCardButton>
          <img src="/src/assets/icons/add.svg" alt="adicionar ao carrinho" />
        </AddCardButton>
      </CardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
