import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <div id="navigation">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar id="toolbar">
              <img src={require("../images/gramophone_logo_white.png")} alt="gramophone"></img>
              <Typography variant="h6"><a href="#home" style={{ textDecoration: 'none' }}>Roxy Broadway</a></Typography>
              <Typography variant="h6"><a href="#calendars" style={{ textDecoration: 'none' }}>Calendar</a></Typography>
              <Typography variant="h6"><a href="#menu" style={{ textDecoration: 'none' }}>Menu</a></Typography>
              <Typography variant="h6"><a href="#contact" style={{ textDecoration: 'none' }}>Contact</a></Typography>
              <Typography variant="h6"><a href="#shop" style={{ textDecoration: 'none' }}>Shop</a></Typography>
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </div>
  );
}
