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
        const apiKey = 'IGQVJYNWRqRjBnNWthZAGpDaUhTdXcyN2FMSzN6WGJfQ0RWLTFCVXItUHIwUng3ZA28wTEpQdF9OcTA5ZAFFPZA2Q1aGtuaVllUjZALd1VnN2xmOU0tQ2F5SC1WZAlBnVFg0V2xsNTJkOFlYU2FpMVFmXzBENwZDZD';
        
        try {
          const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${apiKey}`);
          if(response.status !== 200){
            throw(Error(response.statusText));
          }
          const parsedResponse = await response.json();

          const postsArray = parsedResponse.data.map((post, index) => {
              return {
                  id: post.id,
                  img: post.media_url,
                  hyperlink: post.permalink,
                  caption: post.caption,
                  media_type: post.media_type
                }              
          });
          
          postsArray.forEach((post, index) => {
            if (post.media_type == "VIDEO") {
              postsArray.splice(index, 1)
            } 
          })

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