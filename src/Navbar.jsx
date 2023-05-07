import React from "react";
import './Navbar.css';
import {  Link } from "react-router-dom";



export const Navbars = () => {
  return (

    <div>

        <nav className="navbar BgNav navbar-expand-lg fixed-top  px-md-5">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold founa" href="home">FOUNAGHE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                <Link className="nav-link fs-6 fw-bold" aria-current="page" to="home">Home</Link>
                </li>
                <li className="nav-item mx-md-5">
                <Link className="nav-link fs-6 fw-bold" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link fs-6 fw-bold"  to="/contact">Contact</Link>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn py-2 ms-md-5 mt-sm-2 deconnect">
                <Link className="nav-link fs-6 fw-bold "  to="/">Deconnection</Link>
            </button>
            </div>
        </div>
        </nav>

        

    </div>
    
    
            

    // <nav>
    //     <ul>
    //         <li>
    //             <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //         <Link   to="/blogs">Blogs</Link>
    //         </li>
    //         <li>
    //         <Link to="/contact">Contact</Link>
    //         </li>
    //     </ul>
    // </nav>
    );
}

export default Navbars;