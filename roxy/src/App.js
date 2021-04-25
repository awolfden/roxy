import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import OpenForMusic from './OpenForMusic/OpenForMusic';
import Calendars from './Calendars/Calendars';
import FoodMenu from './FoodMenu/FoodMenu';
import Contact from './Contact/Contact';
// import Shop from './Shop/Shop';
import Loader from './Loader/Loader';
import InstagramFeed from './InstagramFeed/InstagramFeed';
// import EmailCapture from './EmailCapture/EmailCapture';
import EmailCaptureV2 from './EmailCaptureV2/EmailCaptureV2';
import HolidayGiftCard from './HolidayGiftCard/HolidayGiftCard';
import Analytics from "@segment/analytics.js-core/build/analytics";
import SegmentIntegration from "@segment/analytics.js-integration-segmentio";

// instantiate the library
const analytics = new Analytics();

// add Segment's own integration ( or any other device mode integration ) 
analytics.use(SegmentIntegration);

// define the integration settings object. 
// Since we are using only Segment integration in this example, we only have 
// "Segment.io" in the integrationSettings object
const integrationSettings = {
  "Segment.io": {
    apiKey: "CCSausDWLBnBljkIISDht2F9P5FeZKJG",
    retryQueue: true,
    addBundledMetadata: true
  }
};


// Initialize the library
analytics.initialize(integrationSettings);

// Happy tracking! 
analytics.page('first page');

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

         {this.state.showLoader ? null : <EmailCaptureV2 analytics={analytics}/>}

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