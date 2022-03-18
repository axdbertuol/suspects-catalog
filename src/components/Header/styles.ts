import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { Container } from '../../styles/common';

export const HeaderContainer = styled(Container)`
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-style: italic;
    font-size: 1.05rem;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${(props) => props.theme.colors.secondary};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px 22px;
  color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;
