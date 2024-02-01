import styled from "styled-components";

export const AnimalFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ImageContainer = styled.div`
  background: #154962;
  border-radius: 50%;

  width: 7.5rem;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Text = styled.p`
  font-weight: 600;
  color: #154962;
`;
