import React, { Component } from 'react';
import specials from "../../images/roxy_specials.png";

class RWWeek extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {

        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={specials} alt='specials menu' style={{ width: '70%' }}></img>
                </div>

            </>
        )
    }

}


export default RWWeek;

