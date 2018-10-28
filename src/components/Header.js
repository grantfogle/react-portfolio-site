import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-primary text-white">
                <div class="brand">
                    <a className="navbar-brand text text-white" href="#">Grant Fogle</a>
                </div>
                <div className="navigation">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item" id="contact-me">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
