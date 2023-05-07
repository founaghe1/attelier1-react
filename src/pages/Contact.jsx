import React from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Contact.css';

function Contact() {
    return (
        <div className='Contact pb-5 mt-5'>
            <h1 className='h1 text-center py-4'>Bien venu dans la page contact</h1>

            <div class="container text-light pb-4">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-sm-12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Envoyer un Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tapez votre message'></textarea>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Validez" />
                        </Form.Group>

                        <div className='text-end'>
                            <Button className='px-5 btn text-dark fw-bold shadow' >
                            Envoyez
                            </Button>
                        </div>
                        
                    </Form>
                    </div>
                </div>
            </div>
        </div>
        
        
    );}

export default Contact;