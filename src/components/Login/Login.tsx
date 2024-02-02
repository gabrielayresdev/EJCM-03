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
import { NavLink } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <img src="./src/assets/images/picture_login.png" />
      <Input
        label={"login"}
        id={"login"}
        placeholder={"Digite o seu..."}
        iconPath="/src/assets/icons/gitIcon.svg"
        value={login}
        setValue={setLogin}
      />
      <Input
        label={"Senha"}
        id={"senha"}
        placeholder={"Digite o seu..."}
        iconPath="/src/assets/icons/lock.png"
        value={password}
        setValue={setPassword}
      />
      <SignupAnchorContainer>
        <SignupAnchor href={"#"} />
      </SignupAnchorContainer>

      <ButtonContainer>
        <NavLink to={"/home"}>
          <SignupButton text="Entrar" onClick={() => {}} />
        </NavLink>
        <NavLink to={"/cadastro"}>
          <SignupButton text="Cadastrar" onClick={() => {}} />
        </NavLink>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
