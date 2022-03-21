import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 85px;

  display: flex;
  justify-content: space-between;
  z-index: 12;
  background: linear-gradient(
    90deg,
    rgba(77, 74, 74, 1) 0%,
    rgba(110, 128, 147, 1) 0%,
    rgba(0, 87, 146, 1) 100%,
    rgba(217, 250, 255, 1) 100%
  );
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.8rem;

  &.active {
    transition: all 0.1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.text};
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
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
  width: 100%;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const RightBtns = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtns = styled.nav`
  display: flex;
  margin-right: 10rem;
  margin-left: auto;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary.light};
  padding: 10px 22px;
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
