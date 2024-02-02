import React from "react";
import { Link, MenuContainer } from "./styles";
import SideMenu from "../SideMenu/SideMenu";

const Menu = () => {
  const [menuVisibility, setMenuVisibility] = React.useState(false);

  return (
    <MenuContainer>
      <Link to={"/home"}>
        <img src="/src/assets/icons/house.svg" alt="ir para a home" />
      </Link>
      <Link to={"/pesquisar"}>
        <img
          src="/src/assets/icons/lupa.svg"
          alt="ir para a área de pesquisa"
        />
      </Link>
      <Link to={"/carrinho"}>
        <img src="/src/assets/icons/box.svg" alt="ir para a carrinho" />
      </Link>
      <div onClick={() => setMenuVisibility(true)}>
        <img src="/src/assets/icons/person.svg" alt="ir para a perfil" />
      </div>

      <SideMenu visible={menuVisibility} setVisible={setMenuVisibility} />
    </MenuContainer>
  );
};

export default Menu;
