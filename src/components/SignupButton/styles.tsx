import styled from "styled-components";

export interface buttonProps {
  background?: string;
  fontSize?: string;
}

export const Button = styled.button<buttonProps>`
  all: unset;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
  font-weight: 700;
  background: ${(props) => (props.background ? props.background : "#e97b0c")};
  color: #e6e8e9;
  padding: 10px 0;
  border-radius: 18px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
