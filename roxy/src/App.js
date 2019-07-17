import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import OpenForMusic from './OpenForMusic/OpenForMusic';
import Calendars from './Calendars/Calendars';
import FoodMenu from './FoodMenu/FoodMenu';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';



function App() {
  return (
    <div className="App">

        <Navigation/>
        <Home/>
        <OpenForMusic/>
        <Calendars/>
        <FoodMenu/>
        <Contact/>
        {/* <Shop/> */}

    </div>
  );
}

export default App;

//Designed and Coded by Adam Wolfman, adamwolfman.com 