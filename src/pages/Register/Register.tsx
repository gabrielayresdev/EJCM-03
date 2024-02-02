import React from "react";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import {
  ButtonContainer,
  CheckboxContainer,
  InputContainer,
  LogoContainer,
  RegisterContainer,
} from "./styles";
import SignupButton from "../../components/SignupButton/SignupButton";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  return (
    <RegisterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <InputContainer>
        <Input
          placeholder="Nome..."
          id="name"
          iconPath="/src/assets/icons/user.png"
          value={nome}
          setValue={setNome}
        />
        <Input
          placeholder="cpf..."
          id="cpf"
          iconPath="/src/assets/icons/toggle-on.png"
          value={cpf}
          setValue={setCpf}
        />
        <Input
          placeholder="Email..."
          id="email"
          iconPath="/src/assets/icons/email.png"
          value={email}
          setValue={setEmail}
        />
        <Input
          placeholder="Senha..."
          id="password"
          iconPath="/src/assets/icons/lock.png"
          value={password}
          setValue={setPassword}
        />
        <Input
          placeholder="confirmar senha..."
          id="password 2"
          iconPath="/src/assets/icons/lock.png"
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
        />
      </InputContainer>

      <CheckboxContainer>
        <CheckboxInput
          label="Concordo com os termos"
          checked={checked}
          setChecked={setChecked}
        />
      </CheckboxContainer>

      <ButtonContainer>
        <NavLink to={"/confirmar-email"}>
          <SignupButton text="Entrar" onClick={() => {}} />
        </NavLink>
      </ButtonContainer>
    </RegisterContainer>
  );
};

export default Register;
