import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} className="mr-auto">
          Suspects Catalog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/persons')}>List</Nav.Link>
            <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
