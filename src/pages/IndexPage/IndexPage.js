import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import Layout from '../../Layout/Layout';

const IndexPage = (props) => {
    console.log('Index props ');
    console.log(props);
    console.log('Index props ends');
    let isAuth = localStorage.getItem('auth');
    return(
        <div>
            Loading...
        <BrowserRouter>
            <Switch>
            <Route path="/login" render={() => (!isAuth ? <Login /> : <Redirect to="/dashboard" />)} />
            <Route path="/dashboard" render={() => (isAuth ? <Layout /> : <Redirect to="/login" />)} />
            <Route exact path="/" render={props => <Redirect to="/dashboard" />} />     
          </Switch>
        
      </BrowserRouter>
        </div>
        
    )
}
export default IndexPage;