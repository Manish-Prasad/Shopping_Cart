import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItem.css';

const navItem = (props) => {
    return (
        <div>
            <ul className='nav nav1'>
                <li><NavLink exact to='/' activeClassName='active1'>Home</NavLink></li>
                <li><NavLink to='/about-us' activeClassName='active1'>About Us</NavLink></li>
                <li><NavLink to='/product-details' activeClassName='active1'>Products</NavLink></li>
                <li><NavLink to='/blog' activeClassName='active1'>Blog</NavLink></li>
                <li><NavLink to='/news' activeClassName='active1'>News</NavLink></li>
                <li><NavLink to='/support' activeClassName='active1'>Support</NavLink></li>
                <li><NavLink to='/contact' activeClassName='active1'>Contact</NavLink></li>
            </ul>
            <span className='contact'>&#9743; : 900-999-9999</span>
        </div>
    );
};

export default navItem;