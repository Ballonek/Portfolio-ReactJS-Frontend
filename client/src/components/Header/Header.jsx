import React from 'react';
import { Container } from 'reactstrap';
import './style.scss';

const Header = () => {
    return (
        <header className="top">
            <Container>
                <div className="top-heading">
                    <h2>Junior Fullstack web developer</h2>
                </div>
            </Container>
        </header>
    );
}

export default Header;
