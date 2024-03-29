import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Drinks from './Drinks/Drinks';
import SmallPlates from './SmallPlates/SmallPlates';
import Brunch from './Brunch/Brunch';
import menuRoxy from '../images/menu-roxy-logo.png';
import Specials from './Specials/Specials';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = useState(1);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const showTab = () => {

    if (tab === 1) {
      return (
        <Specials />
      )
    } else if (tab === 2) {
      return (
        <SmallPlates />
      )
    } else if (tab === 3) {
      return (
        <Brunch />
      )
    } else if (tab === 4) {
      return (
        <Drinks />
      )
    }
  }

  return (
    <div id="menu" >
      <header className="App-header">
        <img src={menuRoxy} className="shop-logo" alt="logo" />
      </header>

      <div>
        <p>Menu is subject to change</p>
      </div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick={() => setTab(1)} label="Specials" />
          <Tab onClick={() => setTab(2)} label="Dinner" />
          <Tab onClick={() => setTab(3)} label="Brunch" />
          <Tab onClick={() => setTab(4)} label="Cocktails" />
        </Tabs>
      </Paper>
      {<h1>{showTab()}</h1>}
    </div>

  );
}