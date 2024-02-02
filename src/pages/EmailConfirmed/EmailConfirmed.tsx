import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { ButtonUnderImageContainer, Container, ImageContainer } from "./styles";
import SignupButton from "../../components/SignupButton/SignupButton";

const EmailConfirmed = () => {
  return (
    <Container>
      <Logo />
      <ImageContainer>
        <img src="/src/assets/images/Dog paw-cuate 2.png" />
      </ImageContainer>
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
};

export default EmailConfirmed;
