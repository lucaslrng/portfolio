import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const MyContact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p5030se', 'template_f1q17w5', form.current, 'Ija64KfHIZlVBLhVz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2>Me contacter</h2>
                        <form id="contact-form" ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="hidden" name="contact_number"/>
                                    <input type="text" name="name" placeholder="Nom" id="name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" name="email" placeholder="Email" id="email" />    
                                </Col>
                                <Col>
                                    <textarea id="msg" placeholder="Message" name="message" />
                                    <input type="submit" value="Envoyer" id="submit" />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}