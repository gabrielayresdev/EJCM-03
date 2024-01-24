import { Anchor } from "./styles";

interface SignupAnchorInterface {
  href: string;
}

const SignupAnchor = ({ href }: SignupAnchorInterface) => {
  return <Anchor href={href}>Esqueceu sua senha</Anchor>;
};

export default SignupAnchor;
