import React, { Component } from 'react';
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
                        <div className="col-md-6 col-sm-12">
                            <div className="home-image">
                                <img src="https://media.licdn.com/dms/image/C4E03AQH2I7CUuhnm3A/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=QX5KKwJMv-oHLx7-nWb0iJYCCCd3adI6D08XuhwFA-c" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h4>Full Stack Developer</h4>
                            <p>Developer, skier, shredder <br></br>I'm just out here havin' fun.</p>
                            <p>My passion is creating functional apps that
                                    help make the world a better place and people's lives easier.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div class="ctas">
                            <button type="button" class="btn btn-outline-primary">View Work</button>
                            <button type="button" class="btn btn-outline-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </main >
        );
    }
}

export default Home;
