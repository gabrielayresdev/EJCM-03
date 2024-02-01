import styled from "styled-components";

export const BenefitsCarouselContainer = styled.div`
  color: #154962;
  margin-bottom: 1.5rem;
`;

export const BenefitsTitle = styled.h2`
  font-size: 0.93rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
  width: fit-content;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #154962;
    display: block;
    margin-top: 1px;
  }
`;
