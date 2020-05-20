import React, { useEffect } from 'react';
import { Container, Card, CardText, CardTitle } from 'reactstrap';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faWordpressSimple, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    return (
        <section data-aos='slide-left' id="about" className="about">
            <Container className="about-container">
                <h3>About me</h3>
                <div className="about-content">
                    My name is Dominik and I'm junior fullstack developer from Ostrava, Czech republic. 
                    I specialize in building web applications. I have done work in web development, 
                    front-end/back-end web, social marketing and IT specialist. 
                </div>
                <div className="about-cards">
                    <Card>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <CardTitle>HTML/CSS</CardTitle>
                        <CardText>Coding clean HTML5 and CSS3 webpages or parts of it.</CardText>
                    </Card>
                    <Card>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faWordpressSimple}/>
                        </div>
                        <CardTitle>Wordpress</CardTitle>
                        <CardText>Wordpress templates, pages, plugins</CardText>
                    </Card>
                    <Card>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faNodeJs}/>
                        </div>
                        <CardTitle>REST API</CardTitle>
                        <CardText>Create REST API with node.js with autentications and more..</CardText>
                    </Card>
                    <Card>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                        <CardTitle>React.js</CardTitle>
                        <CardText>Create React + Redux applications (Beginner), with connection to REST API custom or existing</CardText>
                    </Card>
                    <Card>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faHeadset}/>
                        </div>
                        <CardTitle>Support</CardTitle>
                        <CardText>Ajdustmensts for current sites and more...</CardText>
                    </Card>
                </div>
            </Container>
        </section>
    );
}

export default About;
