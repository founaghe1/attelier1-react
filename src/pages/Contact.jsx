import React from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Contact.css';

function Contact() {
    return (
        <div className='Contact pb-5 mt-5'>
            <h1 className='h1 text-center py-4'>Bienvenu dans la page contact</h1>

            <div class="container text-light pb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6 col-sm-12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tapez votre message'></textarea>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Validez" />
                        </Form.Group>

                        <div className='text-end mb-5'>
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