import React, { Component } from 'react';
import Slider from 'react-slick';
import logo from './logo.svg';
import './App.css';
import leftArrow from './img/arrowL.png';

class LeftNavButton extends Component {
  render() {
    return <button className="bs-left-arrow" onClick={this.props.onClick}><img src={leftArrow} alt="Left Arrow" /></button>
  }
}

class RightNavButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>Next</button>
  }
}

class ReactSlickDemo extends Component {
  render() {
  	let settings = {
    	dots: true,
      slidesToShow: 6,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: { slidesToShow: 6 } } ],
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />
    };
    return (
    	<div className="container">
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
