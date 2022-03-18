import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';

export const Container = styled(MContainer)`
  flex-direction: column;
  width: 270px;
  min-height: 700px;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

export const ImgContainer = styled(MContainer)`
  justify-content: center;
  margin: 1rem auto;
  width: 225px;
  overflow: hidden;
  background-color: transparent;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  //margin: 1rem auto;
`;

export const TabContentContainer = styled(MContainer)`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-self: stretch;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

export const NavTabsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  letter-spacing: 0.8px;
`;

interface NavTabsItemProps {
  isActive?: boolean | false;
}

export const NavTabsItem = styled.li<NavTabsItemProps>`
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.secondary
      : props.theme.colors.darkGray};

  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: ${(props) => (props.isActive ? '1.1rem' : '1rem')};
  font-style: ${(props) => (props.isActive ? 'italic' : 'unset')};
  transition: all 0.2s ease-in-out;
`;
