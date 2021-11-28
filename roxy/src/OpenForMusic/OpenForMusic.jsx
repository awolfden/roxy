import React, {Component} from 'react';

class OpenForMusic extends Component {    

    render(){
        return(
            <div id="openForMusic">
                <div class="description">
                    <div className='flex-container image'>
                        <img src={require('../images/openformusic.png')} alt="open"/>
                    </div>
                    <div className='flex-container'>
                        
                        <div >
                            <p>The Roxy is a Vintage-Modern restaurant and music venue with classic 1920s inspired cocktails and decor as well as locally sourced and internationally influenced share plates.</p>
                            <p>The experience is designed to create a sense of community between friends, family, and neighbors. Indulge, imbibe, relax, and converse until your heart is content and your belly is full.</p>
                            <p><b>Hospitality · Community · Respect · Quality · Consistency</b></p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default OpenForMusic;