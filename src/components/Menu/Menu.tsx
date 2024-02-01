import React from "react";
import { MenuContainer } from "./styles";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <MenuContainer>
      <NavLink to={"/home"}>
        <img src="/src/assets/icons/house.svg" alt="ir para a home" />
      </NavLink>
      <NavLink to={"/pesquisar"}>
        <img
          src="/src/assets/icons/lupa.svg"
          alt="ir para a área de pesquisa"
        />
      </NavLink>
      <NavLink to={"/carrinho"}>
        <img src="/src/assets/icons/box.svg" alt="ir para a carrinho" />
      </NavLink>
      <NavLink to={"/perfil"}>
        <img src="/src/assets/icons/person.svg" alt="ir para a perfil" />
      </NavLink>
    </MenuContainer>
  );
};

export default Menu;
