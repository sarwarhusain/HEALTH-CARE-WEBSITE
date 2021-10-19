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
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
            {user?.email ?
              <Button onClick={logOut} variant="info">Logout</Button> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
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



      // <Container className="bg-light" fluid="md">
      //   <Row>
      //     <Col></Col>
      //   </Row>
      // </Container>