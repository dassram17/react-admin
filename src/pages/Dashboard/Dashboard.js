import React, { useEffect, useState } from 'react';
import logoImage from '../../assets/images/logo.svg';

import { Grid, Paper, Box, CardContent, Card,List, ListItem, ListItemAvatar, ListItemText, Typography, Avatar, IconButton } from '@material-ui/core';
import {ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { Chart } from "react-google-charts";

import theme from '../../ui/Theme/Theme';

import './Dashboard.css';

import AppointmentTable from '../../Components/AppointmentTable/AppointmentTable';

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

const Dashboard = (props) => {
    const classes = useStyles();
    const data = [
        ["Year", "Hospital Income", 'Pharmacy Income', 'Stock Expenses'],
        ['2017', 12300, 8945, 12005],
        ['2018', 24030, 6000, 5600],
        ['2019', 30000, 21000, 20005],
        ['2020', 50233, 45000, 10000],
    ];

    const dashCardData = [
        {
            'icon':'icon-people',
            'count':86,
            'label': 'Today\'s appointment',
            'classNm': classes.primaryBg
        },{
            'icon':'icon-people',
            'count':86,
            'label': 'Total Appointments',
            'classNm': classes.secondaryBg
        },{
            'icon':'icon-people',
            'count': '45%',
            'label': 'Stocks',
            'classNm': classes.infoBg
        },{
            'icon':'icon-people',
            'count':'80k',
            'label': 'Total Revenue',
            'classNm': classes.warningBg
        }
    ];

    const recentQueries = [{
        'avatar': logoImage, 
        'name': 'John',
        'mobile': '+919000000009', 
        'email': 'test@mail.com',
        'primary': 'Is home visit is vailable?', 
        'secondary': ' I am looking for a home visit, is this available please reply me...', 
    },{
        'avatar': logoImage, 
        'name': 'Agbar',
        'mobile': '+919000000009', 
        'email': 'test@mail.com',
        'primary': 'Is home visit is vailable?', 
        'secondary': ' I am looking for a home visit, is this available please reply me...', 
    },{
        'avatar': logoImage, 
        'name': 'George',
        'mobile': '+919000000009', 
        'email': 'test@mail.com',
        'primary': 'Is home visit is vailable?', 
        'secondary': ' I am looking for a home visit, is this available please reply me...', 
    }];

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        setTimeout(function(){
            fetchTodo();
        },5000);
        
    });

    const fetchTodo = () => {
        let data = [{
            'title':'Purchase stocks',
            'key':'Pharma',
            'description':'Pharmacy item stocklist'
        },{
            'title':'Purchase equiments',
            'key':'Equipment',
            'description':'Equipment needed.'
        },{
            'title':'Meeting',
            'key':'Tambaram',
            'description':'Attend seminar meeting at Tambaram.'
        }]
    
        setTodo(data);
    }

    

    

    return(
        <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3}>
                    <Paper p={2} className={classes.paper +' profileCard'}>
                        <Box component="div" className={"profileCardImg"} elevation={2}>
                            <img src={logoImage} alt="image" />
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
                                {
                                    recentQueries.map((val, ind) => {
                                        return (<ListItem key={'query-'+ind} alignItems="flex-start" divider>
                                            <ListItemAvatar>
                                            <Avatar src={val.avatar} /> 
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary={val.primary}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography 
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {val.name}
                                                    </Typography>
                                                    {' -- '+val.secondary}
                                                    <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width:'100%'}}>
                                                        <IconButton component="a" href={'tel:'+val.mobile} style={{fontSize:'16px'}}>
                                                            {/* <SimpleLineIcon component="span" name="phone" /> */}
                                                            <i className="icon-phone"></i>
                                                        </IconButton>
                                                        <IconButton component="a" href={'mailto:'+val.email} style={{fontSize:'16px'}}>
                                                            {/* <SimpleLineIcon component="span" name="envelope" /> */}
                                                            <i className="icon-envelope"></i>
                                                        </IconButton>
                                                    </Box>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>)
                                    })
                                }
                                
                                
                            </List>
                        </Box>
                    </Paper>

                    <Paper style={{marginTop:'16px'}} className={classes.paper}>
                        <Box component="h4" m={1}>
                            ToDo List
                        </Box>
                        <Box component="div" mb={2}>
                            <List className={classes.root}>
                                {
                                    (todo.length === 0)? 
                                        <Box component="p">No data found!..</Box>
                                    :
                                        todo.map((val, ind) => {
                                            return (
                                                <ListItem alignItems="flex-start" divider key={'todo-'+ind}>
                                                    <ListItemText
                                                    primary={val.title}
                                                    secondary={
                                                        <React.Fragment>
                                                        <Typography 
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="primary"
                                                        >
                                                            {val.key}
                                                        </Typography>
                                                        {" — "+val.description}
                                                        </React.Fragment>
                                                    }
                                                    />
                                                </ListItem>
                                            )
                                        })
                                }                               
                                
                            </List>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Grid container spacing={3}>
                        {
                            dashCardData.map((val, ind) => {
                                return (<Grid item xs={12} sm={6} md={3} key={ind}>
                                            <Box component="div" className={" dashCard"}>
                                                <Box component="div" className={val.classNm +" card-body"}>
                                                    <Box component="span" className="dashIcon"><i className={val.icon}></i></Box>
                                                    <Box component="div" className="counterInside">
                                                        <Box component="h3" className="dashCount">{val.count}</Box>
                                                        <Box component="p" m={0} className="dashLabel">{val.label}</Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>);
                            })
                        }
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
                                <CardContent className={classes.paper}>
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
        
        
    )
}

export default Dashboard;