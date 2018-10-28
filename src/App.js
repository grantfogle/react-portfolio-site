import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
