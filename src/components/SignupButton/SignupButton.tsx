import { Button, buttonProps } from "./styles";

interface SignupButtonInterface extends buttonProps {
  text: string;
  onClick: VoidFunction;
}

const SignupButton = ({ text, onClick, ...args }: SignupButtonInterface) => {
  return (
    <Button onClick={onClick} {...args}>
      {text}
    </Button>
  );
};

export default SignupButton;
