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
                                <img src="https://media.licdn.com/dms/image/C4E03AQH2I7CUuhnm3A/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=DRT36RxWo63m_zGLZgQIwIAnapqPILa6c8kZz3eCbIU" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 home-flex">
                            <div className="home-content">
                                <h2>Full Stack Software Engineer</h2>
                                <div className="home-content-inner">
                                    <h4>
                                        <span className="badge badge-primary cta-badge">JavaScript</span>
                                        <span className="badge badge-primary cta-badge">React.js</span>
                                        <span className="badge badge-primary cta-badge">React Native</span>
                                        <span className="badge badge-primary cta-badge">Angular</span>
                                        <span className="badge badge-primary cta-badge">Redux</span>
                                        <span className="badge badge-primary cta-badge">Node.js</span>
                                        <span className="badge badge-primary cta-badge">PostgreSQL</span>
                                        <span className="badge badge-primary cta-badge">SQL</span>
                                        <span className="badge badge-primary cta-badge">Git</span>
                                        <span className="badge badge-primary cta-badge">Firebase</span>
                                        <span className="badge badge-primary cta-badge">Knex.js</span>
                                        <span className="badge badge-primary cta-badge">Express.js</span>
                                        <span className="badge badge-primary cta-badge">HTML5</span>
                                        <span className="badge badge-primary cta-badge">CSS</span>
                                        <span className="badge badge-primary cta-badge">Git</span>
                                        <span className="badge badge-primary cta-badge">SEO</span>
                                        <span className="badge badge-primary cta-badge">SEM</span>
                                    </h4>
                                    <br />
                                    <p>Currently, I am attending the Galvanize Web Development Immersive Program.
                                        I previously worked in the Search Engine Optimization industry, but understanding how sites were broken wasn’t enough,
                                    I wanted to learn how to fix and improve them. I am seeking an entry level full stack development position. </p>
                                    <p>I love spending my free time outdoors. On any given weekend I can be found at the local ski hill,
                                        in the middle of a river waving a stick, crashing down a mountain bike trail, or at the dojo working on my jiu jitsu.
                                    <Link to="/projects"> See what I'm working on today.</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        );
    }
}

export default Home;
