import React from "react";
import './inscription.css';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import logo from '../Connecter/imgCon/bakeli.png';
import { Link } from "react-router-dom";


function Inscription() {
    return (
        <div className="container mt-lg-2 pt-lg-2"> 
            <div className="row mt-2 pt-1 shadow inscript">
                <div className="col-md-12">

                    <div className="logoIns my-3">
                        <img src={logo} alt="" />
                    </div>
                <div class="container  pb-3">
                <div class="row d-flex justify-content-center">
                    <div class="col-md col-sm-12 ">
                        <h3 className="create text-center">Créer un compte</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="votre nom" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="telephone / email" />
                        <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                    

                        <div className='text-end'>
                            <Button className='px-5 btn bg-warning w-100 rounded-3 border-0 text-dark fw-bold shadow' >
                                S'inscrire
                            </Button>
                        </div>
                        <div className="text-end  w-100 mt-2 retour">
                            {/* <a href="/" className="dejaCompt">Avez-vous un compte</a> */}
                            <Link className="nav-link fs-6 text-decoration-underline dejaCompt"  to="/">Avez-vous un compte?</Link>
                        </div>
                        
                    </Form>
                    </div>
                </div>
            </div>

                </div>
            </div>
        </div>
    );
};

export default Inscription;
