import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import OpenForMusic from './OpenForMusic/OpenForMusic';
import Calendars from './Calendars/Calendars';
import FoodMenu from './FoodMenu/FoodMenu';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Loader from './Loader/Loader';
import InstagramFeed from './InstagramFeed/InstagramFeed';
import EmailCapture from './EmailCapture/EmailCapture';
import EmailCaptureV2 from './EmailCaptureV2/EmailCaptureV2';
import HolidayGiftCard from './HolidayGiftCard/HolidayGiftCard';



class App extends Component {
  constructor(){
    super();
    this.state = {
      showLoader : true
    }
  }
  
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        showLoader: false
      })
    }, 2000);
  }


  render(){
    return (
      <div className="App">
        
         
         

         {this.state.showLoader ? <Loader/> : null}


         {this.state.showLoader ? null : <Navigation/>}
         {this.state.showLoader ? null : <Home/>}
         {this.state.showLoader ? null : <OpenForMusic/>}
         {this.state.showLoader ? null : <HolidayGiftCard/>}

         {this.state.showLoader ? null : <EmailCaptureV2/>}

         {/* {this.state.showLoader ? null : <EmailCapture/>} */}
         {this.state.showLoader ? null : <Calendars/>}
         {this.state.showLoader ? null : <Navigation/>}
         {this.state.showLoader ? null : <FoodMenu/>}
         {this.state.showLoader ? null : <Contact/>}
         {this.state.showLoader ? null : <InstagramFeed/>}
         
         {/* <Shop/> */}
  
      </div>
    )
  }
  
}

export default App;

//Designed and Coded by Adam Wolfman, adamwolfman.com 