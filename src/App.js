import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headerBar/Header';
import Banner from './components/banner/Banner';
import FourShow from './components/fourShow/FourShow';
import ProductDisplay from './components/productDisplay/ProductDisplay'
import FooterBar from './components/footerBar/FooterBar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header ></Header>
        <Banner></Banner>
        <FourShow></FourShow>
        <ProductDisplay></ProductDisplay>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default App;
