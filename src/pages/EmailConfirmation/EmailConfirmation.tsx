import Logo from "../../components/Logo/Logo";
import SignupButton from "../../components/SignupButton/SignupButton";
import { Container } from "./styles";
import { ButtonContainer } from "./styles";
import { NavLink } from "react-router-dom";

const EmailConfirmation = () => {
  return (
    <Container>
      <Logo />
      <img src="/src/assets/images/Cat astronaut-cuate 2.png" />
      <ButtonContainer>
        <NavLink to={"/confirmado"}>
          <SignupButton
            onClick={() => {}}
            text="Confirme seu email"
            background="#053D58"
            fontSize="1rem"
          />
        </NavLink>
      </ButtonContainer>
    </Container>
  );
};

export default EmailConfirmation;
