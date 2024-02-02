import styled from "styled-components";

interface SideMenuProps {
  visible: boolean;
}

export const SideMenuContainer = styled.div<SideMenuProps>`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: ${({ visible }) => (visible ? 0 : "100%")};
  left: 0;
  z-index: 15;

  transition: all 0.3s;

  background-color: ${({ visible }) => (visible ? "#0000003b" : "#00000000")};

  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
`;

export const SideMenuContent = styled.div<SideMenuProps>`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;

  right: ${({ visible }) => (visible ? "0" : "-100%")};
  border-radius: 1.125rem 0 0 1.125rem;

  transition: all 0.3s;

  position: fixed;

  background: #99dfeb;
`;

export const Detail = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const UpperContent = styled.div`
  padding: 1.75rem 1.75rem 2.5rem;
`;

export const BottomContent = styled.div`
  padding: 2.5rem 1.75rem 1.75rem;
`;

export const Profile = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  margin: 0.5rem 0 2rem;
`;

export const WellcomeMessage = styled.p`
  font-weight: 700;
  color: #154962;
`;

export const ExitAccount = styled.p`
  color: #e97b0c;
  font-size: 0.75rem;
  text-decoration: underline;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  color: #154962;
`;

export const Image = styled.img`
  width: 1.25rem;
`;

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  background: #154962;
  display: block;
`;
