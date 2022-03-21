import styled from 'styled-components';
import { Container as MContainer } from '../../styles/common';
import { CardUList } from '../PersonCard/styles';

export const Container = styled(MContainer)`
  flex-direction: column;
  gap: 15px;
  //flex-grow: 0.15;
`;
export const ImgContainer = styled(MContainer)`
  justify-content: flex-start;
  //margin: 1rem auto;
  border-radius: 50px;
  overflow: hidden;
  //flex-grow: 1;
  width: 225px;
  height: 225px;
  background-color: transparent;
`;

export const TabContentContainer = styled(MContainer)`
  flex-direction: column;
  flex-grow: 1;
  padding-top: 1rem;
  padding-left: 2rem;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2em;
`;

export const NavTabsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  margin: 0;
  flex-direction: column;
  padding-left: 1rem;
  letter-spacing: 0.8px;
`;

interface NavTabsItemProps {
  isActive?: boolean | false;
}

export const NavTabsItem = styled.li<NavTabsItemProps>`
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.primary.main
      : props.theme.colors.darkGray};

  display: flex;
  height: fit-content;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: ${(props) => (props.isActive ? '1.3rem' : '1rem')};

  transition: all 0.2s ease-in-out;
`;

export const PersonalItensList = styled(CardUList)`
  @media screen and (min-width: 1500px) {
  }
  width: 100%;
  padding-right: 2rem;
`;
