import React from "react";
import { Container, Nav, Navbar,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
const Navigation = () => {
  const {user,logOut}=useAuth();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='ms-3'>King-Laptop-Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-2">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#products">
              Products
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#reviews">
              Reviews
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
          <Nav className='mx-3'>
          {
              user?.email?
                <><NavLink style={{ color: 'white', textDecoration: 'none' }} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink><Button onClick={logOut} color="inherit">LogOut</Button></>
              :
              <NavLink style={{color:'white',textDecoration:'none'}} to='/login'><Button color="inherit">Login</Button></NavLink>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
