import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import { withSnackbar } from 'material-ui-snackbar-redux';

import './App.css';
import Login from './pages/Login/Login';
import Layout from './Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Patients from './pages/Patients/Patients';
import Forms from './pages/Forms/Forms';


function App(props) {
  //let history = useHistory();
  //console.log('Auth : '+localStorage.getItem('auth'))
  //console.log(props);
  let isAuth = localStorage.getItem('auth');
  

  

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => (!isAuth ? <Redirect to="/login" /> : <Redirect to="/admin/dashboard" />)} />
          <Route path="/admin" exact render={() => (!isAuth ? <Redirect to="/login" /> : <Redirect to="/admin/dashboard" />)} />
          <Route path='/login' component={Login} />
          <Route path='/admin' exact component={Layout} />
          <Layout>
            <Route path='/admin/dashboard' component={Dashboard} />
            <Route path='/admin/patients' component={Patients} />
            <Route path='/admin/forms' component={Forms} />
          </Layout>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
