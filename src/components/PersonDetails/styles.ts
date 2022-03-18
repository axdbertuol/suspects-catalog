import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';

export const Container = styled(MContainer)`
  margin-top: 2rem;
  bottom: 10rem;
`;

export const ImgContainer = styled(MContainer)`
  justify-content: center;
  bottom: 1rem;
`;

export const NavContainer = styled(MContainer)`
  flex-direction: row;
`;

export const NavTabsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: unset;
`;

interface NavTabsItemProps {
  isActive?: boolean | false;
}

export const NavTabsItem = styled.li<NavTabsItemProps>`
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid salmon;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.colors.secondary};
    border-bottom: 1px solid blue;
  }
`;
