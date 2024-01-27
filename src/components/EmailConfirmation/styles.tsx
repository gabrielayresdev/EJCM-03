import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 51px 0 64px;

  width: 80%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.25rem;
  width: 100%;
`;

export const ButtonUnderImageContainer = styled.div`
  width: 100%;
  transform: translateY(-33px);
  z-index: -1;
`;
