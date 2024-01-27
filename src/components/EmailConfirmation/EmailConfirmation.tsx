import React from "react";
import Logo from "../Logo/Logo";
import SignupButton from "../SignupButton/SignupButton";
import { ButtonUnderImageContainer, Container } from "./styles";
import { ButtonContainer } from "./styles";
import { NavLink } from "react-router-dom";

const EmailConfirmation = () => {
  const [emailConfirmed, setEmailConfirmed] = React.useState(false);

  if (emailConfirmed) {
    return (
      <Container>
        <Logo />
        <img src="/src/assets/Dog paw-cuate 2.png" />
        <ButtonUnderImageContainer>
          <NavLink to="/">
            <SignupButton
              text="E-mail confirmado"
              onClick={() => {}}
              background="#053D58"
              fontSize="1rem"
            />
          </NavLink>
        </ButtonUnderImageContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Logo />
        <img src="/src/assets/Cat astronaut-cuate 2.png" />
        <ButtonContainer>
          <SignupButton
            text="Confirme seu email"
            onClick={() => {
              setEmailConfirmed(true);
            }}
            background="#053D58"
            fontSize="1rem"
          />
        </ButtonContainer>
      </Container>
    );
  }
};

export default EmailConfirmation;
