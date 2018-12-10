import React, { Component } from 'react';
import '../App.css';
import reduxReddit from "../images/redux-reddit.png";
import reactInbox from "../images/react-inbox.png";
import galvanizeReads from "../images/galvanize-reads.png";
import pixelArtMaker from "../images/pixel-art-maker.png";

class Portfolio extends Component {

    render() {
        return (
            <main>
                <div className="">
                    <div className="container">
                        <h1>Projects</h1>
                        <div className="row portfolio-row">
                            <div className="col-md-6 col-sm-12">
                                <img className="portfolio-image" src={reduxReddit} />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h4>Redux Reddit Clone</h4>
                                <p><i>Tech used: React, Redux, Ajax, React Bootstrap</i> </p>
                                <p>This project is built as a clone to reddit. It allow users to upvote and downvote, add a post, add a comment, search by posts, and sort by total votes.</p>
                                <p><a href="https://fogle-redux-reddit.herokuapp.com/">Deployed Site</a></p>
                                <p><a href="https://github.com/grantfogle/redux-unit-checkpoint">View on Github</a></p>
                            </div>
                            <div class="row portfolio-row">
                                <div className="col-md-6 col-sm-12">
                                    <img className="portfolio-image" src={reactInbox} />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Galvanize Inbox</h4>
                                    <p><i>Tech used: React, Ajax, Bootstrap, Express, Postgresql</i></p>
                                    <p>A Gmail clone. Allows users to favorite emails, add/remove labels, create a new post, remove posts.</p>
                                    <p><a href="https://fogle-react-inbox.herokuapp.com/">Deployed Site</a></p>
                                    <p><a href="https://github.com/grantfogle/react-inbox">View on Github</a></p>
                                </div>
                            </div>
                            <div class="row portfolio-row">
                                <div className="col-md-6 col-sm-12">
                                    <img className="portfolio-image" src={pixelArtMaker} />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Pixel Art Maker</h4>
                                    <p><i>Tech used: Javascript, HTML, CSS</i></p>
                                    <p>Paint whatever your heart desires with this pixel art tool.</p>
                                    <p><a href="http://fogle-pixel-art-maker.surge.sh/">Deployed Site</a></p>
                                    <p><a href="https://github.com/grantfogle/pixel-art-maker">View on Github</a></p>
                                </div>
                            </div>
                            <div className="row portfolio-row">
                                <div className="col-md-6 col-sm-12">
                                    <img className="portfolio-image" src={galvanizeReads} />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Galvanize Reads</h4>
                                    <p><i>Tech used: Firebase, Javascript, Material Ui</i></p>
                                    <p>Allows users to search for a book by title or author and sends a fetch request to the Goodreads api. It then allows users to add the title to a reading list.</p>
                                    <p><a href="https://galvanize-reads-b65ee.firebaseapp.com/">Deployed Site</a></p>
                                    <p><a href="https://github.com/grantfogle/galvanize-eats">View on Github</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Portfolio;