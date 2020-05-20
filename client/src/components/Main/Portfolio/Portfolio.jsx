import React, {useEffect} from 'react';
import './style.scss';
import { Spinner } from 'reactstrap';

    
const Portfolio = ({ refs }) => {
    if(!refs) return <Spinner />

    return (
        <section data-aos='slide-right' id="portfolio" className="portfolio">
            <h3>{refs.name}</h3>
            <div className="container-xl portfolio-description">{refs.description}</div>
            
            <div className="portfolio-container container-xl">
                {refs.projects.map((item, idx) => 
                    <div key={idx} className="portfolio-item card" style={{ background: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${item.bg})` }}>
                        <div className="portfolio-item-content">
                            <div className="project card-title"><i>Project:</i> {item.name}</div>
                            <div className="work card-text"><i>The work I did:</i> {item.description}</div>
                            <div className="links"><a href={item.url}>View page</a>{(item.github !== '') && <a href={item.github}>GitHub</a>}</div>
                        </div>
                    </div>    
                ) }  
            </div>
        </section>
    );
}

export default Portfolio;
