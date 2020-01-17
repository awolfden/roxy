import React, {Component} from 'react';
import brunchImage from '../../images/champagne.png';

class Brunch extends Component {
    constructor(){
        super();
        this.state = {
            brunchItems: [
                {'name': 'Everything But The Kitchen Sink',
                 'description': '24oz made from scratch bloody mary, topped with... lemon, lime, olive, pickle, pepperoncini, onion, celery, cheeseburger slider, buffalo chicken tender, shrimp, thick cut pepper bacon, and yes served with a mini miller high life'}

            ]
        }
    }

    render(){

        const showBrunchItems = 
            this.state.brunchItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            })
        
    
        return(
            <div id="brunch">
                <h3>Brunch Served Saturday and Sunday 10am - 3pm</h3>
                <div className="brunchList">
                    {/* {showBrunchItems} */}
                    <img src={brunchImage} alt="champagne glasses clinking"/>
                </div>
            </div>
        )
    }
}


export default Brunch;

