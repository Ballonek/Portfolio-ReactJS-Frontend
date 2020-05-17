import React from 'react';
import './style.scss';
import {SteelcomBG, MladezHC, DkbbBG, PortfolioImage } from '../../../assets/Images'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
                <h3>Portfolio</h3>
                <div className="portfolio-container container-xl">
                    <div className="portfolio-item card" style={{background: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${SteelcomBG})` }}>
                        <div className="portfolio-item-content">
                                <div className="project card-title"><i>Project:</i> Steelcom</div>
                                <div className="work card-text"><i>The work I did:</i> Set up WP industry tepmlate (including HTML/CSS changes), added content, UI design</div>
                                <div className="links"><a href="https://www.steelcom.cz">View page</a></div>
                        </div>
                    </div>
                    <div className="portfolio-item card" style={{background: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${MladezHC})` }}>
                        <div className="portfolio-item-content">
                                <div className="project card-title"><i>Project: </i>Mladez - HC Vítkovice</div>
                                <div className="work card-text"><i>The work I did: </i>Created new WP template according to the graphic design(delivered by graphic in Adobe xD), created custom pages, posts and taxonomies + connected them together (ACF). Made user access and permissions more then (10 users).</div>
                                <div className="links"><a href="https://mladez.hc-vitkovice.cz">View page</a></div>
                        </div>
                    </div>                    
                    <div className="portfolio-item card" style={{background: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${DkbbBG})` }}>
                        <div className="portfolio-item-content">
                                <div className="project card-title"><i>Project: </i>DKBB</div>
                                <div className="work card-text"><i>The work I did: </i>Created new WP template according to the graphic design(delivered by graphic in PDF!), added multilanguage content</div>
                                <div className="links"><a href="https://www.dkbb.cz">View page</a></div>
                        </div>
                    </div>                    
                    <div className="portfolio-item card" style={{background: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${PortfolioImage})` }}>
                        <div className="portfolio-item-content">
                            <div className="portfolio-item-content">
                                <div className="project card-title"><i>Project: </i>This page</div>
                                <div className="work card-text"><i>The work I did: </i>Created React.js frontend web app, in backend 'Invoicer'(Still in development) + small CMS for frontend in Node.js</div>
                                <div className="links"><a>View page</a> | <a href="https://github.com/Ballonek/portfolio">GitHub</a></div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Portfolio;
