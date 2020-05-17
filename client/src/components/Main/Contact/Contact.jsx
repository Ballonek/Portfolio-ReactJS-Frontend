import React from 'react';
import {Container} from 'reactstrap'
import { Profile } from '../../../assets/Images';
import './style.scss';

const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <Container>
                <h3>Contact</h3>
                <div className="contact-container">
                    <div className="contact-photo">
                        <div className="cp cp-1"></div>
                        <div className="cp cp-2"></div>
                        <div className="cp cp-3"></div>
                        <div className="cp cp-4"><img src={Profile} alt=""/></div>
                    </div>
                    <div className="contact-content">
                        <div><span>Name: </span>Dominik Míček</div>
                        <div><span>Phone: </span>+420 725 715 492</div>
                        <div><span>E-mail: </span>dominik@micek.cz</div>
                        <div><span>IČO: </span>09113606</div>
                        <div className="address">
                            <span>Address:</span>
                            <span>Zákrejsova 1067/6</span> 
                            <span>Ostrava - Přívoz, 702 00</span> 
                            <span>Czech rep.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
