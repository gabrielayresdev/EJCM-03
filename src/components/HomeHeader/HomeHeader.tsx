import React from "react";
import Location from "../Location/Location";
import { Header, Logo } from "./styles";

const HomeHeader = () => {
  return (
    <Header>
      <Logo>
        <img src="/src/assets/logo-fundo-escuro.png" />
      </Logo>
      <Location />
    </Header>
  );
};

export default HomeHeader;
