import React, {useEffect} from 'react';
import {Container, Spinner} from 'reactstrap'
import './style.scss';



const Contact = ({ contact }) => {
    if(!contact) return <Spinner />
    return (
        <section data-aos='slide-left' id='contact' className='contact'>
            <Container>
                <h3>{contact.name}</h3>
                <div className="contact-container">
                    <div className="contact-photo">
                        <div className="cp cp-1"></div>
                        <div className="cp cp-2"></div>
                        <div className="cp cp-3"></div>
                        <div className="cp cp-4"><img src={contact.avatar} alt=""/></div>
                    </div>
                    <div className="contact-content">
                        <div><span>Name: </span>{contact.person.name}</div>
                        <div><span>Phone: </span>{contact.person.phone}</div>
                        <div><span>E-mail: </span>{contact.person.email}</div>
                        <div><span>IČO: </span>{contact.person.ico}</div>
                        <div className="address">
                            <span>Address:</span>
                            <span>{contact.address.street}</span> 
                            <span>{contact.address.city}, {contact.address.postcode}</span> 
                            <span>{contact.address.state}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
