import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductInterface, products } from "../../response";
import {
  Counter,
  CounterButton,
  Image,
  ImageContainer,
  Price,
  ProductName,
  ProductPageContainer,
  Value,
  ButtonContainer,
  CarouselTitle,
} from "./styles";
import SignupButton from "../../components/SignupButton/SignupButton";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Menu from "../../components/Menu/Menu";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<ProductInterface | null>(null);
  const [amount, setAmount] = React.useState(1);
  const navigate = useNavigate();

  React.useEffect(() => {
    const product = products.find((product) => product.id === Number(id));
    if (product) {
      setData(product);
      setAmount(1);
    } else {
      navigate("notfound");
    }
  }, [id, navigate]);

  if (!data) return <p>Loading...</p>;
  return (
    <>
      <ProductPageContainer>
        <ImageContainer>
          <Image src={data.img} />
        </ImageContainer>
        <ProductName>{data.name}</ProductName>
        <Price>
          <Value>R$ {(amount * data.price).toFixed(2)}</Value>
          <Counter>
            <CounterButton
              onClick={() => {
                if (amount > 1) setAmount(amount - 1);
              }}
            >
              <img
                src="/src/assets/icons/minus.svg"
                alt="diminuir quantidade"
              />
            </CounterButton>
            <div>{amount}</div>
            <CounterButton
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              <img src="/src/assets/icons/plus.svg" alt="aumentar quantidade" />
            </CounterButton>
          </Counter>
        </Price>
        <ButtonContainer>
          <SignupButton
            background="#EDA61A"
            color="#F2F3F3"
            text="Adicionar ao carrinho"
            onClick={() => {}}
          />
        </ButtonContainer>
        <CarouselTitle>Que tal pedir também</CarouselTitle>
        <ProductCarousel
          content={products.filter(
            (item) => item.group === data.group && item.id !== data.id
          )}
        />
      </ProductPageContainer>
      <Menu />
    </>
  );
};

export default Product;
