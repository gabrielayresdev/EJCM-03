import HomeHeader from "../HomeHeader/HomeHeader";
import { Content, HomeContainer } from "./styles";
import BenefitsCarousel from "../BenefitsCarousel/BenefitsCarousel";
import AnimalFilterCarousel from "../AnimalFilterCarousel/AnimalFilterCarousel";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <Content>
        <AnimalFilterCarousel />
        <BenefitsCarousel />
        <ProductCarousel />
      </Content>
    </HomeContainer>
  );
};

export default HomePage;
