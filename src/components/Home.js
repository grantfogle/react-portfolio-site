import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="home-image">
                                <img src="https://via.placeholder.com/300.png" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="side-bar-info">
                                <h1 className="text-primary">Full Stack Developer</h1>
                                <h4>Full Stack Developer</h4>
                                <p>Developer, skier, shredder <br></br>I'm just out here havin' fun.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="ctas">
                            <button type="button" class="btn btn-outline-primary">View Work</button>
                            <button type="button" class="btn btn-outline-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
