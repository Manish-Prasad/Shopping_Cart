import React, { Component } from 'react';
import Header from './components/navigation/header/Header';
import Sidebar from './components/navigation/sidebar/Sidebar';
import Footer from './components/navigation/footer/Footer';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import ProductDetails from './components/productDetails/ProductDetails';
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/><br/>
          <div className='row'>
            <div className='col-md-3'>
              <Sidebar/>
            </div>
            <div className='col-md-9'>
              <Route  exact path='/' component={Home}/>
              <Route path='/about-us' component={AboutUs}/>
              <Route path='/product-details' component={ProductDetails}/>
            </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
