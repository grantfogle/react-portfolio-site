import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light text-white">
                <div className="container">
                    <div className="navigation-items">
                        <div className="brand">
                            <Link to="/">
                                <a className="navbar-brand text text-white" href="#">Grant Fogle</a>
                            </Link>
                        </div>
                        <div className="navigation">
                            <ul className="nav">
                                <Link to="/">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Home</a>
                                    </li>
                                </Link>
                                <Link to="/projects">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" id="contact-me" href="#">Projects</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
