import React from "react";
import { Container, InputContainer, InputField, LabelField } from "./styles";

interface InputInterface {
  label: string;
  id: string;
  placeholder?: string;
  iconPath: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  label,
  id,
  placeholder,
  iconPath,
  value,
  setValue,
}: InputInterface) => {
  return (
    <Container>
      <LabelField htmlFor={id}>{label}</LabelField>
      <InputContainer>
        <div>
          <img src={iconPath} />
        </div>
        <InputField
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            const target = event.target;
            setValue(target.value);
          }}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
