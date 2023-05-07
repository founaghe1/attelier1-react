import React from "react";
import './Connection.css';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import logo from './imgCon/bakeli.png';
import { Link } from "react-router-dom";




function Connection(){
    return (
        <div className="connection mt-5 pt-5 ">
            <div className="connection-inner connect w-50 shadow">
                
                <div className="logo mb-2">
                    <img src={logo} alt="Image" />
                </div>
                
                <div class="container pb-4 ">
                <div class="row connectRow d-flex justify-content-center w-100">
                    <div class="col-md-6 col-sm-12">
                    <h3 className="text-center mb-2 identifier">S'identifier</h3>
                    <Form className="ms-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="">
                            <p className="privatMail">
                            We'll never share your email with anyone else.
                            </p>
                         
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className="text-end my-4 ">
                            <a href="../ForgotenPassW/ForgotPassW" className="text-muted">Mot de pass oublier</a>
                        </div>


                        <div className='text-end'>
                            <Button className=' btn border-0 text-dark fw-bold shadow bg-warning w-100'  type="submit" >
                                <Link className="nav-link fs-6 fw-bold "  to="home">Connectez-vous</Link>
                            </Button>
                        </div>
                        <div className="text-end mt-2">
                            <a href="../Inscrir/Inscription">S'inscrire</a>
                        </div>
                        
                    </Form>
                    </div>
                </div>
            </div>
            </div>
        </div> 
    );
}

export default Connection;