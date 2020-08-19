import React from 'react';
import logoImage from '../../assets/images/logo.svg';

import { Grid, Paper, Box, CardContent, Card,List, ListItem, ListItemAvatar, ListItemText, Divider, Typography, Avatar, IconButton } from '@material-ui/core';
import {ThemeProvider, makeStyles } from '@material-ui/core/styles';
import SimpleLineIcon from 'react-simple-line-icons';

import { Chart } from "react-google-charts";

import theme from '../../ui/Theme/Theme';

import './Dashboard.css';

import Aux from '../../Auxiliary/Auxiliary';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    primaryBg: {
        backgroundColor: theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
    },
    secondaryBg: {
        backgroundColor: theme.palette.secondary.main
    },
    infoBg: {
        backgroundColor: theme.palette.info.main
    },
    warningBg: {
        backgroundColor: theme.palette.warning.main
    }
}));

const options = {
    title: "Revenue comparison",
    hAxis: { title: "Year", },
    vAxis: { title: "Revenue",},
    colors:['#ff9800', '#2196f3', '#4caf50'],
    //legend: "none"
};

const Dashboard = () => {
    const classes = useStyles();
    const data = [
        ["Year", "Hospital Income", 'Pharmacy Income', 'Stock Expenses'],
        ['2017', 12300, 8945, 12005],
        ['2018', 24030, 6000, 5600],
        ['2019', 30000, 21000, 20005],
        ['2020', 50233, 45000, 10000],
      ];

    return(
        <Aux>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper p={2} className={classes.paper +' profileCard'}>
                            <Box component="div" className={"profileCardImg"} elevation={2}>
                                <img src={logoImage} />
                            </Box>
                            <Box component="h3" m={1}>
                                Dr. Radhakrishnan. MBBS,PhD
                            </Box>
                            <Box component="p" mb={2}>Specialist in Veterinary treatment for pets</Box>
                            <Grid container>
                                <Grid item xs={3}>
                                    <span className="countSpan">206</span>
                                    <span>Clients</span>
                                </Grid>
                                <Grid item xs={1}>
                                </Grid>
                                
                                <Grid item xs={4}>
                                    <span className="countSpan">1282</span>
                                    <span>Appointments</span>
                                </Grid>
                                <Grid item xs={1}>
                                </Grid>
                                <Grid item xs={3}>
                                    <span className="countSpan">4.8/5</span>
                                    <span>Rating</span>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper style={{marginTop:'16px'}} className={classes.paper}>
                            <Box component="h4" m={1}>
                                Recent queries
                            </Box>
                            <Box component="div" mb={2}>
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar src={logoImage} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Is home visit is available?"
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Raj
                                            </Typography>
                                            {" — I am looking for a home visit, is this available please reply me"}
                                            <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width:'100%'}}>
                                                <IconButton>
                                                    <SimpleLineIcon name="phone" />
                                                </IconButton>
                                                <IconButton>
                                                    <SimpleLineIcon name="envelope" />
                                                </IconButton>
                                            </Box>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar src={logoImage} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Is home visit is available?"
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Raj
                                            </Typography>
                                            {" — I am looking for a home visit, is this available please reply me"}
                                            <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width:'100%'}}>
                                                <IconButton>
                                                    <SimpleLineIcon name="phone" />
                                                </IconButton>
                                                <IconButton>
                                                    <SimpleLineIcon name="envelope" />
                                                </IconButton>
                                            </Box>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar src={logoImage} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary="Is home visit is available?"
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Raj
                                            </Typography>
                                            {" — I am looking for a home visit, is this available please reply me"}
                                            <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width:'100%'}}>
                                                <IconButton>
                                                    <SimpleLineIcon name="phone" />
                                                </IconButton>
                                                <IconButton>
                                                    <SimpleLineIcon name="envelope" />
                                                </IconButton>
                                            </Box>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    
                                </List>
                            </Box>
                        </Paper>

                        <Paper style={{marginTop:'16px'}} className={classes.paper}>
                            <Box component="h4" m={1}>
                                ToDo List
                            </Box>
                            <Box component="div" mb={2}>
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText
                                        primary="Need to purchase stocks!."
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Pharma
                                            </Typography>
                                            {" — Pharmacy item stocklist"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText
                                        primary="Appointment with client at 3'O clock."
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Raj
                                            </Typography>
                                            {" — #100, 7th street, Gandhi road, +91-9999999999"}
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemText
                                        primary="Attend seminar at Gandhi park"
                                        secondary={
                                            <React.Fragment>
                                            <Typography 
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                 #100, 7th street, Gandhi road, +91-9999999999
                                            </Typography>
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider />
                                    
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Box component="div" className={" dashCard"}>
                                    <Box component="div" className={classes.primaryBg +" card-body"}>
                                        <Box component="span" className="dashIcon"><i className="icon-people"></i></Box>
                                        <Box component="div" className="counterInside">
                                            <Box component="h3" className="dashCount">80</Box>
                                            <Box component="p" m={0} className="dashLabel">Todays Appointments</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box component="div" className={" dashCard"}>
                                    <Box component="div" className={classes.secondaryBg +" card-body"}>
                                        <Box component="span" className="dashIcon"><i className="icon-people"></i></Box>
                                        <Box component="div" className="counterInside">
                                            <Box component="h3" className="dashCount">80</Box>
                                            <Box component="p" m={0} className="dashLabel">Total Appointments</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box component="div" className={" dashCard"}>
                                    <Box component="div" className={classes.infoBg +" card-body"}>
                                        <Box component="span" className="dashIcon"><i className="icon-people"></i></Box>
                                        <Box component="div" className="counterInside">
                                            <Box component="h3" className="dashCount">45%</Box>
                                            <Box component="p" m={0} className="dashLabel">Stocks</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box component="div" className={" dashCard"}>
                                    <Box component="div" className={classes.warningBg +" card-body"}>
                                        <Box component="span" className="dashIcon"><i className="icon-people"></i></Box>
                                        <Box component="div" className="counterInside">
                                            <Box component="h3" className="dashCount">80k</Box>
                                            <Box component="p" m={0} className="dashLabel">Total Revenue</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{minHeight:'400px'}}>
                                    <CardContent>
                                    <Chart
                                        chartType="AreaChart"
                                        data={data}
                                        options={options}
                                        width="100%"
                                        height="400px"
                                        legendToggle
                                    />
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12}>
                                <Card style={{minHeight:'400px'}}>
                                    <CardContent class={classes.paper}>
                                        <Box component="h4" m={1} style={{textAlign:'left'}}>
                                            Recent appointments
                                        </Box>
                                        <AppointmentTable />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Aux>
        
    )
}

export default Dashboard;