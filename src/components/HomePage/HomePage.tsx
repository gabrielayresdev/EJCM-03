import HomeHeader from "../HomeHeader/HomeHeader";
import { Content, HomeContainer } from "./styles";
import BenefitsCarousel from "../BenefitsCarousel/BenefitsCarousel";
import AnimalFilterCarousel from "../AnimalFilterCarousel/AnimalFilterCarousel";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { forYou, products } from "../../response";
import Menu from "../Menu/Menu";

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <Content>
        <AnimalFilterCarousel />
        <BenefitsCarousel />
        <ProductCarousel text="Recomendamos para você" content={forYou} />
        <ProductCarousel
          text="Rações"
          content={products.filter((product) => product.group === "racao")}
        />
        <ProductCarousel
          text="Brinquedos"
          content={products.filter((product) => product.group === "brinquedo")}
        />
        <ProductCarousel
          text="Farmácia"
          content={products.filter((product) => product.group === "remedio")}
        />
      </Content>
      <Menu />
    </HomeContainer>
  );
};

export default HomePage;
