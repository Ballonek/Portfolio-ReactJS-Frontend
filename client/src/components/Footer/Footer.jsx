import React from 'react';
import './style.scss';
import { Container, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <footer data-aos='slide-right' data-aos-dutation='3000'>
        <Container>
            <div className="social" data-aos='fade-left'>
                <NavLink href="https://www.facebook.com/dominik.micek.1/"><FontAwesomeIcon icon={faFacebookF} /></NavLink>
                <NavLink href="https://www.linkedin.com/in/dominik-m%C3%AD%C4%8Dek-77b160151/"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                <NavLink href="https://github.com/Ballonek/"><FontAwesomeIcon icon={faGithub} /></NavLink>
            </div>
        </Container>
    </footer>
    );
}

export default Footer;
