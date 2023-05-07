import React from "react";
import {Outlet} from "react-router-dom";
import Navbars from "../Navbar";

const Layout = () => {
    return (
    <>
    <Navbars /> 
    <Outlet />
    </>
    );
};

export default Layout;