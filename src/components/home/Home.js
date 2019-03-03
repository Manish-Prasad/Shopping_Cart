import React from 'react';
import FeaturedProducts from './featuredProducts/FeaturedProducts';
import Home from '../../assets/images/home.jpg';
import Prod1 from '../../assets/images/prod1.jpg';
import Prod2 from '../../assets/images/prod2.jpg';
import Prod3 from '../../assets/images/prod3.jpg';
import Prod4 from '../../assets/images/prod4.jpg';
import './Home.css'
const home = (props) => {
    return (
        <div>
            <div >
                <img className='img-home' alt='img-home' src={Home} />
            </div><br/>
            <h4 className='sub-head'>Featured Products</h4>
            <div className='row'>
                <div className='col-md-6'>
                    <FeaturedProducts image={Prod1}/>
                </div>
                <div className='col-md-6'>
                    <FeaturedProducts image={Prod2}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <FeaturedProducts image={Prod3}/>
                </div>
                <div className='col-md-6'>
                    <FeaturedProducts image={Prod4}/>
                </div>
            </div>
        </div>

    );
};

export default home;