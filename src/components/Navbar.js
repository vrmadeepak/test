import React from 'react';
import logoMain from '../assets/images/logo-main.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <Link class="navbar-brand link" to="/">
                    <img src={logoMain} alt="" width="143" class="d-inline-block align-center" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;