import React, { Component } from 'react';
import Slider from 'react-slick';
import logo from './logo.svg';
import './App.css';


class ReactSlickDemo extends Component {
  render() {
  	let settings = {
    	dots: true
    };
    return (
    	<div className='container'>
      	<Slider {...settings}>
        	<div><img alt="" src='http://placekitten.com/g/400/200' /></div>
          <div><img alt="" src='http://placekitten.com/g/400/200' /></div>
          <div><img alt="" src='http://placekitten.com/g/400/200' /></div>
          <div><img alt="" src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ReactSlickDemo/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
