import React from "react";
import { MenuContainer } from "./styles";
import { NavLink } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const Menu = () => {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

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
      <div onClick={() => setMenuVisibility(true)}>
        <img src="/src/assets/icons/person.svg" alt="ir para a perfil" />
      </div>

      <SideMenu visible={menuVisibility} setVisible={setMenuVisibility} />
    </MenuContainer>
  );
};

export default Menu;
