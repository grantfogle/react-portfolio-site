import React, { Component } from 'react';
import '../App.css';
import reduxReddit from '../images/redux-reddit.png';
import reactInbox from '../images/react-inbox.png';
import galvanizeReads from '../images/galvanize-reads.png';
import pixelArtMaker from '../images/pixel-art-maker.png';
import inQuizlit from '../images/inQuizlitHome.png';
import Flor from '../images/flor-homescreen.png';

class Portfolio extends Component {

    render() {
        return (
            <main>
                <div className=''>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={Flor} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>Flor</h4>
                                <p><i>React Native, Node, Express, PostgreSQL, Knex, TensorFlow, Vize.ai</i></p>
                                <p>Flor utilizes the camera in your mobile device to identify wildflowers.
                                    It uses the machine learning platform Vize.ai to train for image recognition
                                    and receive and test photos.</p>
                                <p><a href='https://www.youtube.com/watch?v=l7ysO3HF318'>Demo Video</a></p>
                                <p><a href='https://github.com/grantfogle/flor-frontend'>Github Front-end</a></p>
                                <p><a href='https://github.com/grantfogle/flor-backend'>Github Back-end</a></p>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={inQuizlit} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>inQuizlit</h4>
                                <p><i>Angular, Bootstrap, Express, PostgreSQL, Knex.js</i></p>
                                <p>inQuizlit is a full stack application designed and built to allow fellow
                                    classmates the opportunity to ask and share programming related questions
                                    to help prepare for upcoming interviews. It was completed as a group project
                                    utilizing an Agile workflow.</p>
                                <p><a href='http://inquizlit.surge.sh/'>Deployed Site</a></p>
                                <p><a href='https://github.com/jimbucktoo/inquizlit-frontend/'>Github Front-end</a></p>
                                <p><a href='https://github.com/keschaefer/inquizlit-end'>Github Back-end</a></p>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={reduxReddit} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>Redux Reddit Clone</h4>
                                <p><i>React, Redux, Ajax, React Bootstrap</i> </p>
                                <p>This project is built as a clone to reddit. It allow users to upvote and downvote, add a post, add a comment, search by posts, and sort by total votes.</p>
                                <p><a href='http://fogle-redux-reddit.surge.sh/'>Deployed Site</a></p>
                                <p><a href='https://github.com/grantfogle/redux-unit-checkpoint'>View on Github</a></p>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={reactInbox} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>Galvanize Inbox</h4>
                                <p><i>React, Ajax, Bootstrap, Express, PostgreSQL</i></p>
                                <p>A Gmail clone. Allows users to favorite emails, add/remove labels, create a new post, remove posts.</p>
                                <p><a href='http://fogle-react-inbox.surge.sh/'>Deployed Site</a></p>
                                <p><a href='https://github.com/grantfogle/react-inbox'>View on Github</a></p>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={pixelArtMaker} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>Pixel Art Maker</h4>
                                <p><i>Javascript, HTML, CSS</i></p>
                                <p>Paint whatever your heart desires with this pixel art tool.</p>
                                <p><a href='http://fogle-pixel-art-maker.surge.sh/'>Deployed Site</a></p>
                                <p><a href='https://github.com/grantfogle/pixel-art-maker'>View on Github</a></p>
                            </div>
                        </div>
                        <div className='row portfolio-row'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='portfolio-image' src={galvanizeReads} />
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <h4>Galvanize Reads</h4>
                                <p><i>Firebase, Javascript, Material UI, HTML, CSS</i></p>
                                <p>Allows users to search for a book by title or author and sends a fetch request to the Goodreads api. It then allows users to add the title to a reading list.</p>
                                <p><a href='https://galvanize-reads-b65ee.firebaseapp.com/'>Deployed Site</a></p>
                                <p><a href='https://github.com/grantfogle/galvanize-eats'>View on Github</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}


export default Portfolio;