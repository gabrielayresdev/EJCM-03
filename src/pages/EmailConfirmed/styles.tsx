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

export const ImageContainer = styled.div`
  pointer-events: none;
  z-index: 1;
`;

export const ButtonUnderImageContainer = styled.div`
  width: 100%;
  transform: translateY(-34px);
  z-index: 0;
`;
