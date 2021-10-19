import Button from '@restart/ui/esm/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import logo from '../../../images/Banners';
const Header = () => {

  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className="text-info fw-bold" >Al Haramain Hospital</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fw-bold text-black ">
            <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/findDoctor">FIND DOCTORS</Nav.Link>
            {user?.email ?
              <Button className="fw-bold border-2 text-info border border-info" onClick={logOut} variant="info">Logout</Button> :
              <Button className="rounded-circle"><Nav.Link as={Link} to="/login">Login</Nav.Link></Button>
            }
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;



      //

