import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.875rem 1.75rem;

  background: #154962;

  z-index: 10;
`;

export const Link = styled(NavLink)`
  &.active::after {
    content: "";
    height: 2px;
    width: 100%;
    background: #f2f3f3;
    display: block;
    margin-top: 1px;
  }
`;
