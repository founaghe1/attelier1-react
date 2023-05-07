import React from "react";
import { Form } from 'react-bootstrap';
import './ForgotPass.css';
import logo from '../Connecter/imgCon/bakeli.png';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ForgotPassW (){
    return (
        <div className="forgot-pass mt-5 pt-5">
            <div className="forgot-pass-header">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-md-6 col-sm-12 shadow rounded-3 monCol">
                        <div className="logo my-3">
                            <img src={logo} alt="" />
                        </div>
                        <p className="notice">Pour reinsialiser votre mot de pass veuillez entrer votre Email et nous vous enverons une notfication.</p>
                        <form action="">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="">
                            <p className="privatMail">
                                We'll never share your email with anyone else.
                            </p>
                         
                            </Form.Text>
                            </Form.Group>
                            <div className='text-end'>
                            <Button className='px-5 mb-3 btn bg-warning w-100 rounded-3 border-0 text-dark fw-bold shadow' >
                                Envoyer
                            </Button>
                        </div>
                        <div>
                            <button className="myBtn border-0 mb-3 px-4">
                            <Link className="nav-link fs-6 fw-bold "  to="/"> ...Retour </Link>
                            </button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassW;