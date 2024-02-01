import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import { HomeContainer } from "./styles";
import AnimalFilter from "../AnimalFilter/AnimalFilter";
import Benefits from "../Benefits/Benefits";
import ProductCard from "../ProductCard/ProductCard";

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <AnimalFilter />
      <Benefits />
      <ProductCard />
    </HomeContainer>
  );
};

export default HomePage;
