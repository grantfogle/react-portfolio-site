import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Me from '../images/me2.png'
import '../App.css';



class Home extends Component {

    displayBadges() {
        let badges = ['JavaScript', 'React', 'React Native', 'Angular', 'Redux', 'Node.js',
            'PostgreSQL', 'SQL', 'Git', 'Firebase', 'Knex.js', 'Express.js', 'HTML5', 'CSS',
            'Git', 'SEO', 'SEM']
        return badges.map(badge => <span className='badge badge-primary cta-badge'>{badge}</span>)
    }

    render() {
        return (
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1>Hey, I'm Grant</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='home-image'>
                                <img src={Me} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 home-flex'>
                            <div className='home-content'>
                                <h2>Full Stack Software Engineer</h2>
                                <div className='home-content-inner'>
                                    <h4>
                                        {this.displayBadges()}
                                    </h4>
                                    <br />
                                    <p>Currently, I am attending the Galvanize Web Development Immersive Program.
                                        I previously worked in the Search Engine Optimization industry, but understanding how sites were broken wasn’t enough,
                                    I wanted to learn how to fix and improve them. I am seeking an entry level full stack development position. </p>
                                    <p>I love spending my free time outdoors. On any given weekend I can be found at the local ski hill,
                                        in the middle of a river waving a stick, crashing down a mountain bike trail, or at the dojo working on my jiu jitsu.
                                    <Link to='/projects'> See what I'm working on today.</Link></p>
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
