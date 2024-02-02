import HomeHeader from "../../components/HomeHeader/HomeHeader";
import { Content, HomeContainer } from "./styles";
import BenefitsCarousel from "../../components/BenefitsCarousel/BenefitsCarousel";
import AnimalFilterCarousel from "../../components/AnimalFilterCarousel/AnimalFilterCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { forYou, products } from "../../response";
import Menu from "../../components/Menu/Menu";
import SideMenu from "../../components/SideMenu/SideMenu";
import React from "react";

const HomePage = () => {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
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

      <SideMenu visible={menuVisibility} setVisible={setMenuVisibility} />
    </HomeContainer>
  );
};

export default HomePage;
