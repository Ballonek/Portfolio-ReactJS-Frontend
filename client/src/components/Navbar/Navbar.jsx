import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion';
import './style.scss';


const PageNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      className="navbar navbar-expand-md">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{delay: 1, duration: 2}}
      ><NavbarBrand href='/'>Dominik Míček</NavbarBrand></motion.h1>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} className='navbar-flex' navbar id="navbarNav">
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay: 1, duration: 2}}
          className='nav navbar-nav'>
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

      </motion.ul>
    </Collapse>
  </motion.nav>
    );
}

export default PageNavbar;
