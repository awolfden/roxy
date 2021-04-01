import React, { useState, useEffect } from 'react';
import MusicEvent from './MusicEvent/MusicEvent';
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../App.css';


const localizer = momentLocalizer(moment);


export default function MusicCal() {

  const [cal_events, setCalEvents] = useState([]);
  const [selected, setSelected] = useState(false);
  const [thisEvent, setThisEvent] = useState(null);



  const convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  useEffect(()=> {
    const getEvents = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/broadwayroxy.com_76kjffbp3se29lk10ptsqr2bm0@group.calendar.google.com/events?key=AIzaSyAMcCW7mJqkNNPoAWNG7VnI3n7pjo-3bcg&maxResults=2500&orderBy=updated");
        if(response.status !== 200){
          throw(Error(response.statusText));
        }
        const parsedResponse = await response.json();
        // console.log(parsedResponse);
  
        const eventsArray = parsedResponse.items.map((event) => {
          if(event.status !== "confirmed"){
            return null;
          }
              
          let dateStart = event.start.dateTime ? convertDate(event.start.dateTime).toISOString() : null;        
          let dateEnd = convertDate(event.end.dateTime).toISOString();
  
          if (event.start.dateTime){
            
            return(
              {
                "title": event.summary,
                "start": dateStart,
                "end": dateEnd,
                "description" : event.description,
                "allDay?": false,
                "resource?": null,
                "location": event.location
              }
            )
          } else if (event.start.date){
            let dateStart = convertDate(event.start.date);
  
            return(
              {
                "title": event.summary,
                "start": dateStart,
                "end": dateStart,
                "description" : event.description,
                "allDay?": false,
                "resource?": null,
                "location": event.location
              }
            )
          } else {
            return(console.log("error"));
          }
        });
        
        // console.log(eventsArray);
        setCalEvents(eventsArray)
  
      } catch (error){
        console.log(error);
        
      }
    }
    getEvents();
  }, [])
  
  

  const showEvent = (e) => {
    setSelected(true);
    setThisEvent(e);
  }

  const hideEvent = (e) => {
    if (selected){
      setSelected(false);
      setThisEvent(null);
    }    
  }

    return (
      <div onClick={hideEvent} style={{height: 700}}>
        <div className="App calendar" >
          <header className="App-header">
            {/* <h2 className="App-title" id="musiccal">Music Calendar</h2> */}
          </header>
          <div style={{ height: 700 }}>
            <Calendar
              localizer={localizer}
              events={cal_events}
              step={30}
              defaultView='month'
              views={['month']}
              defaultDate={new Date()}
              onSelectEvent={(e) => {
                showEvent(e);
              }}
              popup= {false}
              truncateEvents={false}
            />
          </div>
        </div>
        {selected ? <MusicEvent event={thisEvent}/> : null}
       
      </div>
    );

}
