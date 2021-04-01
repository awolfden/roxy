import React, {Component} from 'react';

class HolidayGiftCard extends Component {

    render(){
        return(
            <div id="holidayGiftCard">
                <div className='flex-container image'>
                    <a href="https://www.toasttab.com/roxy-554-s-broadway/giftcards" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/summer_banner.png')} alt="click for holiday gift card"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default HolidayGiftCard;