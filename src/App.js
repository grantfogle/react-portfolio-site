import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/projects" component={() => <Portfolio />} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
