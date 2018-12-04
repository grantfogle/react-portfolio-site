import React, { Component } from 'react';
import '../App.css';

class Portfolio extends Component {
    render() {
        return (
            <main>
                <h1>Stuff</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Skills</h2>
                        <p>
                            <span className="badge badge-primary">HTML5</span>
                            <span className="badge badge-primary">CSS3</span>
                            <span className="badge badge-primary">Javascript</span>
                            <span className="badge badge-primary">React</span>
                            <span className="badge badge-primary">Redux</span>
                            <span className="badge badge-primary">Express</span>
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}


export default Portfolio;