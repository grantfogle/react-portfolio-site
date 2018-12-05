import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="text-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="https://github.com/grantfogle/"><FontAwesomeIcon icon={["fab", "github"]} color="#fff" size="4x" className="icons" /></a>
                            <a href="https://www.linkedin.com/in/grant-fogle-092b8698/"><FontAwesomeIcon icon={["fab", "linkedin"]} color="#fff" size="4x" className="icons" /></a>
                            <a href="mailto:grantjfogle@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="#fff" size="lg" size="4x" className="icons" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center text-white py-3">© 2018 Copyright</div>
            </footer >
        );
    }
}

export default Footer;
