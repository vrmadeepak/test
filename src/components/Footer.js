import React from 'react';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="container py-5">
            <div class="row">
                <div class="col-12 col-md">
                <Link to='/'><img src={logo} alt="logo" width='55' /></Link>
                <small class="d-block mb-3 text-muted">&copy; 2020 WebDev</small>
                </div>
                <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-secondary" href="https://vermadeepak.in">Cool stuff</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Random feature</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Team feature</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Stuff for developers</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Another one</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Last time</a></li>
                </ul>
                </div>
                <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-secondary" href="https://vermadeepak.in">Resource name</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Resource</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Another resource</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Final resource</a></li>
                </ul>
                </div>
                <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-secondary" href="https://vermadeepak.in">Business</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Education</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Government</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Gaming</a></li>
                </ul>
                </div>
                <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="link-secondary" href="https://vermadeepak.in">Team</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Locations</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Privacy</a></li>
                    <li><a class="link-secondary" href="https://vermadeepak.in">Terms</a></li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;