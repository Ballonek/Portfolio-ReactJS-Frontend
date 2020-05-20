import React, { useEffect } from 'react';
import { Container, Card, CardText, CardTitle } from 'reactstrap';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = ({about}) => {

    return (
        <section id="about" className="about">
            <Container className="about-container">
                <h3>{about.name}</h3>
                <div className="about-content">{about.description}</div>
                <div className="about-cards">
                    {about.knowledge.map((item, idx) =>
                        <Card key={idx}>
                            <div className="card-icon">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                        </Card>)}
                </div>
            </Container>
        </section>
    );
}

export default About;
