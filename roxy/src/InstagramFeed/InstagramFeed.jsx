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
        const apiKey = 'IGQVJVSVZAWWHMzb2wwYU5NaUU4MmplLWxWVmJnMjZAQZA0RtMHhvQkFzQTBIbDhXQUtVMDhYQ0lYT1NtOVJzVU9iMW9kS1M4TEh5T2NrbWZAnYVhpMHhzSDl0MHhEbF9wNk55dG5xblJn';
        
        try {
          const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${apiKey}`);
          if(response.status !== 200){
            throw(Error(response.statusText));
          }
          const parsedResponse = await response.json();
        //   console.log(parsedResponse, "insta PR");
    
          const postsArray = parsedResponse.data.map((post) => {
            // console.log(post);
            return {
                id: post.id,
                img: post.media_url,
                hyperlink: post.permalink,
                caption: post.caption
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