import React from "react";
import Input from "../Input/Input";
import SignupAnchor from "../SignupAnchor/SignupAnchor";
import SignupButton from "../SignupButton/SignupButton";
import Logo from "../Logo/Logo";
import {
  ButtonContainer,
  LoginContainer,
  LogoContainer,
  SignupAnchorContainer,
} from "./styles";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <img src="./src/assets/picture_login.png" />
      <Input
        label={"login"}
        id={"login"}
        placeholder={"Digite o seu..."}
        iconPath="/src/assets/gitIcon.svg"
        value={login}
        setValue={setLogin}
      />
      <Input
        label={"Senha"}
        id={"senha"}
        placeholder={"Digite o seu..."}
        iconPath="/src/assets/gitIcon.svg"
        value={password}
        setValue={setPassword}
      />
      <SignupAnchorContainer>
        <SignupAnchor href={"#"} />
      </SignupAnchorContainer>

      <ButtonContainer>
        <SignupButton text="Entrar" onClick={() => {}} />
        <SignupButton text="Cadastrar" onClick={() => {}} />
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
