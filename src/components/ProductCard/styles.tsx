import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 0.5rem 0.625rem;
  background: #f2f3f3;
  border-radius: 1.125rem;
  max-width: 7.5rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const ImageContainer = styled.div`
  border-radius: 1.25rem;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const ProductName = styled.h4`
  font-size: 0.625rem;
  color: #154962;
  margin-bottom: 0.5rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: 0.625rem;
  color: #154962;
`;

export const TextHighlight = styled.span`
  font-weight: 700;
  margin-right: 0.25rem;
`;

export const AddCardButton = styled.button`
  all: unset;
  border-radius: 50%;
  background: #99dfeb;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
