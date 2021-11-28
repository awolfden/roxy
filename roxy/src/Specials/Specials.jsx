import React, {Component} from 'react';
import sectionHeader from '../images/specials_header.png'


class Specials extends Component {


    render(){
        return(
            <div id="specials">
                <header className="header">
                    <img src={sectionHeader} className="shop-logo" alt="logo" />
                </header>
            <hr style={{"width": "99%"}}/>
            <div className=' specials-div flex-container space-evenly'>
                <div className='flex-container column'>
                    <h1>Tequila Tuesday</h1>
                    <ul>
                        <li>50% off Fortaleza Tequila</li>
                    </ul>
                </div>
                <div className='flex-container column'>
                    <h1>Service Industry Night</h1>
                    <ul>
                        <li>50% off bar tab on Tuesdays</li>
                        <li>Must show proof of being a bartender</li>
                    </ul>
                </div>
                <div className='flex-container column'>
                    <h1>Wine Wednesday</h1>
                    <ul>
                        <li>50% off Bottles of wine</li>
                    </ul>
                </div>

                <div className='flex-container column'>
                    <h1>Songwriters Open Mic</h1>
                    <ul>
                        <li>First and last Tuesday of each month</li>
                    </ul>
                </div>
                <div className='flex-container column'>
                    <h1>Comedy Showcase</h1>
                    <ul>
                        <li>Second Tuesday of each month, 8pm</li>
                    </ul>
                </div>
            </div>
            <hr style={{"width": "99%"}}/>
            </div>
        )
    }
}

export default Specials;