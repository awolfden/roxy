import React, {Component} from 'react';
import instaRoxy from '../images/insta-roxy-logo.png';


class InstagramFeed extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = async () => {
        try {
          const response = await fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=13458740759.da3c1a7.d73a57b3f5f94679bea9931bb4eb9d73");
          if(response.status !== 200){
            throw(Error(response.statusText));
          }
          const parsedResponse = await response.json();
          //console.log(parsedResponse, "insta PR");
    
          const postsArray = parsedResponse.data.map((post) => {
            //console.log(post);
            return {
                id: post.id,
                img: post.images.standard_resolution.url,
                hyperlink: post.link,
                caption: post.caption.text
            }
            
          });
    
          //console.log(postsArray, "posts array");
          this.setState({
            instaPosts: postsArray
          })
    
        } catch (error){
          console.log(error);
          
        }
    
      }

    

    render(){
        const showPosts = 
            this.state.instaPosts ? this.state.instaPosts.map((item, index) => {
                return(
                    <div className="posts" key={index}>
                        <a href={item.hyperlink} target="_blank" rel="noopener noreferrer" ><img src={item.img} alt={item.caption}/></a>
                    </div>
                )
            }) : null;
        
        

        return(
            <div id="insta">
                <header className="App-header">
                    <img src={instaRoxy} className="shop-logo" alt="logo" />
                </header>
                <div id="instagramFeed">
                    {this.state.instaPosts ? showPosts : null}
                </div>
            </div>
        )
    }
}

export default InstagramFeed;