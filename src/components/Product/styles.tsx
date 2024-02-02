import styled from "styled-components";

export const ProductPageContainer = styled.div`
  padding: 1.125rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const ProductName = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #154962;
  margin: 1.125rem 0 2.125rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
`;

export const Value = styled.p`
  color: #154962;
  font-size: 1.75rem;
  font-weight: 600;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  padding: 0.625rem 2.625rem;
  background: #c8d0d4;
  border-radius: 1.25rem;

  font-size: 1.25rem;
  color: #154962;
  font-weight: 700;
`;

export const CounterButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 1.25rem;
`;

export const CarouselTitle = styled.p`
  color: #263238;
  padding: 1.25rem 1rem;
  width: fit-content;
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #263238;
    display: block;
    margin-top: 1px;
  }
`;
