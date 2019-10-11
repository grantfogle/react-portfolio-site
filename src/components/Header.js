import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';


class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-light text-white'>
                <div className='container'>
                    <div className='navigation-items'>
                        <div className='brand'>
                            <Link to='/'>
                                <div className='navbar-brand text text-white' href='#'>Grant Fogle</div>
                            </Link>
                        </div>
                        <div className='navigation'>
                            <ul className='nav'>
                                <Link to='/' className='navigation-link'>
                                    <li className='nav-item'>
                                        <div className='nav-link text-white' id='home-element' href='#'>Home</div>
                                    </li>
                                </Link>
                                <Link to='/projects' className='navigation-link'>
                                    <li className='nav-item'>
                                        <div className='nav-link text-white' id='contact-me'>Projects</div>
                                    </li>
                                </Link>

                                <div className='headerIcons'>
                                    <a href='https://github.com/grantfogle/'><FontAwesomeIcon icon={['fab', 'github']} color='#fff' size='1x' className='icons' /></a>
                                    <a href='https://www.linkedin.com/in/grantfogle/'><FontAwesomeIcon icon={['fab', 'linkedin']} color='#fff' size='1x' className='icons' /></a>
                                    <a href='mailto:grantjfogle@gmail.com'><FontAwesomeIcon icon={faEnvelope} color='#fff' size='1x' className='icons' /></a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Header;
