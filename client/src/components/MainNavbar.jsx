import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './mainNavbar.css'

const MainNavbar = () => {
  return (

    <Navbar className="bg-info bg-body-info">

      <Container className='navbar'>
        <Navbar.Brand href="#home"className='nav-logo fs-4 fw-bold'>FSMS</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav variant="dark" className="nav-links fs-5 fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Societies" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.1">
              Procom
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.2">ACM</NavDropdown.Item>
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.3">GDSC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.1">Procom</NavDropdown.Item>
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.2">Coders Cup</NavDropdown.Item>
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.3">Developers Day</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="drop-link bg-info" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MainNavbar;