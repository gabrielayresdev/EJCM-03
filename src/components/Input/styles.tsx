import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

export const LabelField = styled.label`
  color: #154962;
  font-weight: 700;
  text-transform: capitalize;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #154962;
    display: block;
  }
`;

export const InputPaddingContainer = styled.div`
  padding: 0 0 10px 10px;
  width: 100%;
`;

export const InputContainer = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #053d58cc;
  width: 100%;
`;

export const InputField = styled.input`
  all: unset;
`;
