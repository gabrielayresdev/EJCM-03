import styled from "styled-components";

export const ProductCarouselContainer = styled.div`
  color: #154962;
  margin-bottom: 1.5rem;
`;

export const ProductCarouselTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1.75rem;
  width: fit-content;
  font-size: 1rem;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #154962;
    display: block;
    margin-top: 1px;
  }
`;
