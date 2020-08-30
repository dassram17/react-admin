import React, { useEffect } from 'react';

import theme from '../ui/Theme/Theme';
import DrawerLayout from '../ui/DrawerLayout/DrawerLayout';

import { drawerWidth } from '../constants';
import Header from '../Components/Header/Header';
import {
    ThemeProvider,
    makeStyles,
    Toolbar
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';


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

const Layout = (props) => {
    const classes = useStyles();
    const history = useHistory();
    
    const logoutHandler = () => {
        console.log(history)
        localStorage.clear();
        history.push('/login');
    }

    
  
    //let mini = true;

    useEffect(() => {
        console.log('com zzx');
        const isAuth = localStorage.getItem('auth');
        if(!isAuth){
            history.push('/login');
        }
    });

    const openNav = () => {
        document.getElementById('sideMenu').style.width = drawerWidth;
        document.getElementById('mainCont').style.marginLeft = drawerWidth;
    }

    const closeNav = () => {
        document.getElementById('sideMenu').style.width = '64px';
        document.getElementById('mainCont').style.marginLeft = '64px';
    }
    return(
            <ThemeProvider theme={theme}>
                <Header logoutClick={logoutHandler} />
                <Toolbar />
                <DrawerLayout hoverClass={classes.drawerhover} elId="sideMenu" onMouseOver={openNav} onMouseLeave={closeNav} />
                <main className={classes.mainCont} id="mainCont">
                    { props.children }
                </main>
                
            </ThemeProvider>
    );
    
}

export default Layout;