import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import './style.scss';


const PageNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar expand="md" dark color="dark">
      <h1><NavbarBrand href='/'>Dominik Míček</NavbarBrand></h1>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} className='navbar-flex' navbar id="navbarNav">
        <Nav className='navbar-nav'>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem className="nav-social">
                  <NavLink href="#"><FontAwesomeIcon icon={faFacebookF} /></NavLink>
                  <NavLink href="#"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                  <NavLink href="#"><FontAwesomeIcon icon={faGithub} /></NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>
    );
}

export default PageNavbar;
