import React from 'react';

const sidebar = (props) => {
    return (
        <div className='list-group' style={{width:'320px'}}>
            <a className='list-group-item'>Rainfall Sensor</a>
            <a className='list-group-item'>Wind Anemometer</a>
            <a className='list-group-item'>Weather Stations</a>
            <a className='list-group-item'>Controllers</a>
            <a className='list-group-item'>Indicators</a>
            <a className='list-group-item'>Humidity Sensor</a>
            <a className='list-group-item'>Barometric Pressure</a>
            <a className='list-group-item'>Solar Radiation</a>
            <a className='list-group-item'>Replacement Parts</a>
        </div>
    );
};

export default sidebar;