import React from "react";
import {
  BottomContent,
  Detail,
  ExitAccount,
  Image,
  List,
  ListItem,
  Profile,
  Separator,
  SideMenuContainer,
  SideMenuContent,
  UpperContent,
  WellcomeMessage,
} from "./styles";
import { NavLink } from "react-router-dom";

interface SideMenuInterface {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ visible, setVisible }: SideMenuInterface) => {
  return (
    <SideMenuContainer
      visible={visible}
      onClick={(event) => {
        const { currentTarget, target } = event;

        if (currentTarget === target) setVisible(false);
      }}
    >
      <SideMenuContent visible={visible}>
        <UpperContent>
          <Detail>
            <img src="/src/assets/freepik--Character--inject-64.png" />
          </Detail>
          <div>
            <img src="/src/assets/icons/settings.png" alt="configuração" />
          </div>
          <Profile>
            <img src="/src/assets/picture.png" alt="foto de perfil" />
            <WellcomeMessage>Olá, Rayssa!</WellcomeMessage>
            <NavLink to={"/"}>
              <ExitAccount>Sai da conta</ExitAccount>
            </NavLink>
          </Profile>
          <List>
            <ListItem>
              <Image src="/src/assets/icons/department.svg" />
              Departamentos
            </ListItem>
            <ListItem>
              <Image src="/src/assets/icons/heart.svg" />
              Favoritos
            </ListItem>
            <ListItem>
              <Image src="/src/assets/icons/shopping.svg" />
              Meus pedidos
            </ListItem>
            <ListItem>
              <Image src="/src/assets/icons/edit.svg" />
              Lista de compras
            </ListItem>
            <ListItem>
              <Image src="/src/assets/icons/message.svg" />
              Mensagens
            </ListItem>
            <ListItem>
              <Image src="/src/assets/icons/star-regular.svg" />
              Suas Avaliações
            </ListItem>
          </List>
        </UpperContent>
        <Separator />
        <BottomContent>
          <List>
            <ListItem>Fale conosco</ListItem>
            <ListItem>Seja um vendedor</ListItem>
            <ListItem>Regas da fidelidade</ListItem>
            <ListItem>Termos de uso</ListItem>
            <ListItem>Políticas de privacidade</ListItem>
          </List>
        </BottomContent>
      </SideMenuContent>
    </SideMenuContainer>
  );
};

export default SideMenu;
