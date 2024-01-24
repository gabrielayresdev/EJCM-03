import React from "react";
import { Button } from "./styles";

interface SignupButtonInterface {
  text: string;
  onClick: VoidFunction;
}

const SignupButton = ({ text, onClick }: SignupButtonInterface) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SignupButton;
