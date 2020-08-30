import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import SimpleLineIcon from 'react-simple-line-icons';
import { ThemeProvider  } from '@material-ui/core';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
 

import './Login.css';
import theme from '../../ui/Theme/Theme';
import doctortoon from '../../assets/images/doctor_toon.png';

import {
    Box,
    Card,
    makeStyles,
    Typography,
    Button,
} from '@material-ui/core';

import Inputs from '../../ui/Inputs/Inputs';
import {validate} from '../../validate';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      /* marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1), */
    },
    invalid: {
        color:'red'
    },
    form: {
        width: '65%',
        margin: "0 auto"
    }
}));


const Login = (props) => {
    const classes = useStyles();
    const history = useHistory();
    
    useEffect(() => {
        const isAuth = localStorage.getItem('auth');
        if(isAuth){
            history.push('/admin/dashboard');
        }
    });
    const [logInput, setLogInput ] = useState({
        formValid: false,
        loginForm: {
            username: {
                elType: 'Input',
                elConfig: {
                    type:'input',
                    label: 'Username',
                    placeholder: 'Username',
                    name:'username',
                    icon: <SimpleLineIcon name="user" />,
                    iconPosition: 'start',
                    variant: 'outlined',
                    fullWidth: true,
                    helperText: ''
                },
                value:'',
                touched: false,
                isValid: false,
                /* rules: {
                    required: true,
                    minLength:6,
                    email: true
                    //maxLength:8
                } */
                rules:[{
                    required: true,
                    message: 'Please enter username'
                },{
                    minLength: 6,
                    message: 'Must be 6 characters long!.'
                },{
                    email: true,
                    message: 'Not an email'
                }]
            },
            password: {
                elType: 'Input',
                elConfig: {
                    type:'password',
                    label: 'Password',
                    placeholder: 'Password',
                    name:'password',
                    icon: <SimpleLineIcon name="key" />,
                    iconPosition: 'start',
                    variant: 'outlined',
                    fullWidth: true,
                    helperText: ''
                },
                value:'',
                touched: false,
                isValid: false,
                //rules: null
                rules:[{
                    required: true,
                    message: 'Please enter password'
                },{
                    minLength: 6,
                    message: 'Must be 6 characters long!.'
                }]
            },
        },
    });    

    const formElements = [];
    
    for(let key in logInput.loginForm){
        formElements.push({
            id: key,
            config: logInput.loginForm[key]
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(logInput.loginForm.username.value, logInput.loginForm.password.value);
        
    }

    if(props.loading){
        
    }
    
    if(props.error){
        props.enqueueSnackbar(props.message,{variant: 'error'})
    }
    

    if(props.status === 'success'){
        props.enqueueSnackbar(props.message,{variant: 'success'});
        localStorage.setItem('auth', props.token);
        history.push('/admin/dashboard');
    }

    const inputChangeHandler = (event, element) => {
        let changedLoginForm = {
            ...logInput.loginForm
        }
        let changedFormElement = {
            ...changedLoginForm[element]
        }
        changedFormElement.touched = true;
        changedFormElement.value = event.target.value;
        changedLoginForm[element] = changedFormElement; 

        

        if(changedFormElement.rules === null){
            changedFormElement.isValid = true;
        }else{
            changedFormElement.isValid = (validate(event.target.value, changedFormElement.rules) === '')?true: false;
            changedFormElement.elConfig.helperText = validate(event.target.value, changedFormElement.rules);
        }

        let formIsValid = true;
        for(let element in changedLoginForm){
            formIsValid = changedLoginForm[element].isValid && formIsValid;
        }

        setLogInput({loginForm: changedLoginForm, formValid: formIsValid});
    }
    
    return(
        <ThemeProvider theme={theme}>
            <Box display="flex" alignItems="center" justifyContent="center" className="loginCont" style={{height:'100vh'}}>
                <Card >
                    <Box display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="center" alignItems="center" style={{width:'50vw'}}>
                        <Box className="loginLeftBox">
                            <Box style={{fontSize:'32px', marginBottom:'24px', color:'#fff'}}>Logo</Box>
                            <Box component="img" src={doctortoon} className="toonImg"></Box>
                            <Box color="white" m={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Box>
                        </Box>
                        <Box className="loginFormBox">
                             <form className={classes.form} onSubmit={submitHandler}>
                                <Box mt={12} mb={6}>
                                    <Typography variant="h5" component="h5" color="primary">LOGIN</Typography>
                                    <Typography component="span">Please login to your account</Typography>
                                </Box>

                                {
                                    formElements.map((v,index) => <Inputs key={v.id} config={v.config} changed={(event) => inputChangeHandler(event, v.id)}/>)
                                }
                                <Box display="flex" flexDirection="row" justifyContent="flex-end">
                                    <Button variant="contained" color="primary" disabled={!logInput.formValid || props.loading} type="submit">
                                        {(!props.loading)?'Login':'Please wait...'}
                                    </Button>
                                </Box>
                             </form>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider >
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token,
        message: state.auth.message,
        status: state.auth.status
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Login));