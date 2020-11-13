import React, {Component} from 'react';
import rwWeek from "../../images/rw2020nov.jpg";

class RWWeek extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){

        
        return(
            <>
                
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={rwWeek} alt='restaurant week menu' style={{width: '70%'}}></img>
                </div>
                
            </>
        )
    }
    
}


export default RWWeek;

