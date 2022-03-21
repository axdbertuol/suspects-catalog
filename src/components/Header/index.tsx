import {
  Nav,
  NavLink,
  NavBtnLink,
  NavBtns,
  RightBtns,
  NavMenu,
  Bars
} from './styles';

const Header = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">Suspects</NavLink>
        <NavLink to="/register">Registration</NavLink>
        <RightBtns>
          <NavBtns>
            <NavBtnLink to="/">Sign In</NavBtnLink>
          </NavBtns>
        </RightBtns>
      </NavMenu>
    </Nav>
  );
};

export default Header;
