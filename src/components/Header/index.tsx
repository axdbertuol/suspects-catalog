import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import {
  Nav,
  NavLink,
  NavBtnLink,
  NavBtn,
  HeaderContainer,
  NavMenu,
  Bars
} from './styles';

const Header = () => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/people">Suspects</NavLink>
          <NavLink to="/register">Registration</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
