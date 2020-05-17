import React from 'react';
import About from './About/About'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'

const Main = () => {
    return (
        <main>
            <About />
            <Portfolio />
            <Contact />
        </main>
    );
}

export { Main, About, Portfolio, Contact };