import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'relative',
      bottom: 500,
      zIndex: 10,
      width: 390,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #808080',
      borderRadius: 4,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    bandName: {
        fontSize: 20
    }
  }));
  



export default function MusicEvent(props) {
    const classes = useStyles();    
    const time = props.event.start.toString();
    let newTime = moment(time).format("hh:mm:ss a");
    newTime = newTime[0] != 0 ? newTime.slice(0, 5) + ' ' + newTime.slice(8) : newTime.slice(1, 5) + ' ' + newTime.slice(8);
    
        return (
            <div className="flexContainer">
                <div className={classes.paper}>
                    <h1 className={classes.bandName}>{props.event.title}</h1>
                    <h1>{`${newTime}`}</h1>
                    <h1>{props.event.description}</h1>
                    {props.event.location ? <a href={props.event.location} target="_blank" rel="noopener noreferrer">Get Tickets Here!</a> : null}
                </div>
            </div>
           
            
        );
}
