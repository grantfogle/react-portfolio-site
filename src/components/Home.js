import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Hey, I'm Grant</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="home-image">
                                <img src="https://media.licdn.com/dms/image/C4E03AQH2I7CUuhnm3A/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=QX5KKwJMv-oHLx7-nWb0iJYCCCd3adI6D08XuhwFA-c" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="home-content">
                                <h2>Full Stack Software Engineer</h2>
                                <br />
                                <h4>
                                    <span className="badge badge-primary cta-badge">JavaScript</span>
                                    <span className="badge badge-primary cta-badge">React.js</span>
                                    <span className="badge badge-primary cta-badge">React Native</span>
                                    <span className="badge badge-primary cta-badge">Redux.js</span>
                                    <span className="badge badge-primary cta-badge">Node.js</span>
                                    <span className="badge badge-primary cta-badge">Postgres</span>
                                    <span className="badge badge-primary cta-badge">Git</span>
                                    <span className="badge badge-primary cta-badge">SQL</span>
                                    <span className="badge badge-primary cta-badge">Knex.js</span>
                                    <span className="badge badge-primary cta-badge">Firebase</span>
                                    <span className="badge badge-primary cta-badge">Express.js</span>
                                    <span className="badge badge-primary cta-badge">HTML5</span>
                                    <span className="badge badge-primary cta-badge">CSS</span>
                                    <span className="badge badge-primary cta-badge">Git</span>
                                    <span className="badge badge-primary cta-badge">SEO</span>
                                    <span className="badge badge-primary cta-badge">SEM</span>
                                </h4>
                                <br />
                                <p>My passion is creating functional apps that
                                    help make the world a better place and peoples lives easier. Outside of work my passions include:
                                    fly fishing, skiing, and mountain biking. <Link to="/projects">See what I'm working on today.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        );
    }
}

export default Home;
