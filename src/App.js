import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { AppBar, Toolbar, IconButton,Typography, Box } from '@material-ui/core';


import DrawerLayout from './ui/DrawerLayout/DrawerLayout';
import {ThemeProvider, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import theme from './ui/Theme/Theme';

import Aux from './Auxiliary/Auxiliary';
import { menuList, drawerWidth, getIcon } from './constants';
import SimpleLineIcon from 'react-simple-line-icons';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  navWidth: {
      width:drawerWidth
  },
  mainCont: {
    marginLeft:'64px',
    transition: theme.transitions.create('margin-left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerhover: {
      width:'64px',
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
    /* "&:hover": {
      width: drawerWidth,
      mainCont:{
        width: '240px'
      }
    }, */
  },
}));

function App() {
  const classes = useStyles();

  let mini = true;

  const [hoverState, setHoverState] = useState({
      hover: false
  })

  const toggleHover = () => {
    if(mini){
        document.getElementById('sideMenu').style.width = '240px';
        document.getElementById('mainCont').style.marginLeft = '240px';
        
        mini=false;
    }else{
        document.getElementById('sideMenu').style.width = '64px';
        document.getElementById('mainCont').style.marginLeft = '64px';
        mini=true;
    }
    
    /* setHoverState({hover: !hoverState.hover})
    setSelectedIndex('') */
}

  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppBar color="grey" position="fixed" style={{zIndex: theme.zIndex.drawer + 1,}} elevation={0}>
            <Toolbar>
              {/* <IconButton aria-label="menu" style={{color:theme.palette.primary.contrastText}}>
                <MenuIcon />
              </IconButton> */}
              <Box display="flex" flexDirection="row" justifyContent="space-between" style={{width:'100%'}}>
                <Typography variant="h6" noWrap>
                  LOGO
                </Typography>
                <Box component="div">
                  <IconButton>
                    <SimpleLineIcon name="bell" />
                  </IconButton>
                  <IconButton>
                    <SimpleLineIcon name="settings" />
                  </IconButton>
                  <IconButton>
                    <SimpleLineIcon name="logout" />
                  </IconButton>
                </Box>
              </Box>
              
            </Toolbar>
          </AppBar>
          <Toolbar />
          <DrawerLayout hoverClass={classes.drawerhover} elId="sideMenu" onHover={toggleHover} />
          <main className={classes.mainCont} id="mainCont">
            <Route path="/" exact component={Dashboard} />
            <Route path="/patients" component={Patients} />
          </main>
          
        </ThemeProvider>
        
      </BrowserRouter>
  );
}

export default App;
