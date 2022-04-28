import React, { Component } from 'react';

class HolidayGiftCard extends Component {


    render() {
        return (
            <div id="holidayGiftCard">
                <div className='flex-container image'>
                    <a href="https://roxyonbroadway.thundertix.com/gifts/new" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/summer_banner.png')} alt="click for holiday gift card" style={{ "width": "100vw" }} />
                    </a>
                </div>
            </div>
        )
    }
}

export default HolidayGiftCard;