import React from 'react';
import { NavLink  } from 'react-router-dom'

import { Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { menuList, drawerWidth } from '../../constants';

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
    navLink: {
        borderRadius:"0 42px 42px 0",
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
        }
    },
    active: {
        //backgroundColor: theme.palette.primary.main,
        boxShadow:"6px 0px 0px inset "+theme.palette.primary.main,
        color: theme.palette.primary.main+' !important',
        borderRadius:"0 42px 42px 0",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: '#fff !important',
            
        }
    }
}));

const DrawerLayout = (props) => {

    const classes = useStyles();
   
    const [selectedIndex, setSelectedIndex] = React.useState("")

    const handleClick = (index)  => {
        if (selectedIndex === index) {
            setSelectedIndex("")
        } else {
            setSelectedIndex(index)
        }
    }
   

    return(
        <Drawer open variant="permanent" onMouseEnter={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
            <Toolbar />

            <List component="nav" className={props.hoverClass} id={props.elId}/*  className={classes.navWidth} */>
            {
                menuList.map((menu, index) => (
                    (menu.submenu.length > 0)?
                        <React.Fragment key={menu.key}>
                            <ListItem key={menu.key} button onClick={() => handleClick(index)}>
                                {/* <ListItemIcon>{getIcon(menu.icon)}</ListItemIcon> */}
                                <ListItemIcon><i className={menu.icon}></i></ListItemIcon>
                                <ListItemText primary={menu.name} />
                                {(index === selectedIndex) ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        menu.submenu.map((m, i) => (
                                            <ListItem key={m.key} button className={classes.nested} component={NavLink} to={m.route}>
                                                {/* <ListItemIcon>
                                                    {getIcon(m.icon)}
                                                </ListItemIcon> */}
                                                <ListItemText primary={'-- '+m.name} />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Collapse>
                            <Divider />
                        </React.Fragment> 
                    :
                        <React.Fragment key={menu.key}>
                            {
                                (menu.route === '/')?
                                    <ListItem button key={menu.key} className={classes.navLink} component={NavLink} to={menu.route} exact  activeClassName={classes.active+' active'}>
                                        <ListItemIcon>{menu.icon}</ListItemIcon>
                                        
                                        <ListItemText primary={menu.name} style={{whiteSpace:'nowrap'}} />
                                    </ListItem>
                                :
                                    <ListItem button key={menu.key} className={classes.navLink} component={NavLink} to={menu.route} activeClassName={classes.active+' active'}>
                                        <ListItemIcon>{menu.icon}</ListItemIcon>
                                        <ListItemText primary={menu.name} style={{whiteSpace:'nowrap'}} />
                                    </ListItem>
                            }
                            {(menu.divider)?<Divider />:''}
                        </React.Fragment>
                ))
            }
            </List>
          </Drawer>
    );
}

export default DrawerLayout;