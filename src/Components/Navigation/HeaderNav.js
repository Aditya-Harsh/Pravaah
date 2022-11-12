import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Images/logo.png'
import { NavLink } from 'react-router-dom';
import './Nav.css'
function HeaderNav() {
  return (
    <Navbar bg="light" className = 'navBar' expand="lg">
      <Container>
        <div className='logo'> 
              <Nav.Link href="/"><img src={logo} alt='Pravaah'  width="50" height="50" /></Nav.Link>
        </div>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="justify-content-end flex-grow-1 pe-3" >
              <NavLink className='navClass' to="/"><b>Home</b></NavLink>
              <NavLink className='navClass' to="/Registration"><b>Registration</b></NavLink>
              <NavLink className='navClass' to="/Events"><b>Events</b></NavLink>
              <NavLink className='navClass' to="/Sponsor"><b>Sponsors</b></NavLink>
              <NavLink className='navClass' to="/OrganizingTeam"><b>OrganizingTeam</b></NavLink>
              <NavLink className='navClass' to="/About"><b>AboutUs</b></NavLink> 
              <div className="primary-btn"><NavLink className='navClass' to="/Contact"><b>Get Connected</b></NavLink></div>
          </Nav>
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default HeaderNav;