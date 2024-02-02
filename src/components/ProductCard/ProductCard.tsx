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
import { NavLink /* useNavigate */ } from "react-router-dom";
import { ProductInterface } from "../../response";

const ProductCard = ({ product }: { product: ProductInterface }) => {
  /* const navigate = useNavigate(); */
  return (
    <NavLink to={`/produto/${product.id}`}>
      <ProductCardContainer /* onClick={() => navigate(`/produto/${product.id}`) */
      >
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
    </NavLink>
  );
};

export default ProductCard;
