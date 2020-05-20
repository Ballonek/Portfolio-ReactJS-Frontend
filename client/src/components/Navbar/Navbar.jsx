import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import './style.scss';


const PageNavbar = ({nav, lang, setLang}) => {
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
      ><NavbarBrand href='/'>{nav.logo}</NavbarBrand></motion.h1>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} className='navbar-flex' navbar id="navbarNav">
        <motion.ul
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay: 1, duration: 2}}
          className='nav navbar-nav'>
        {nav.menu.map((item, idx)=> <NavItem key={idx} ><NavLink href={item.url}>{item.name}</NavLink></NavItem>)}
          <NavItem className="nav-social">
                {nav.social.map((item, idx) => <NavLink key={idx} href="#"><FontAwesomeIcon icon={item.icon} /></NavLink>)}       
        </NavItem>
        <select onChange={(e)=> setLang(e.target.value)}>
        <option value='en'>EN</option>
        <option value='cz'>CZ</option>
      </select>
      </motion.ul>
    </Collapse>
  </motion.nav>
    );
}

export default PageNavbar;
