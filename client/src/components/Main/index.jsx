import React from 'react';
import About from './About/About'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'

const Main = ({ main }) => {
    return (
        <main>
            <About about={main[0]}/>
            <Portfolio refs={main[1]} />
            <Contact contact={main[2]} />
        </main>
    );
}

export { Main, About, Portfolio, Contact };
