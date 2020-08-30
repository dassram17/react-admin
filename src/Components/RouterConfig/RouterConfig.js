import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard/Dashboard';
import Patients from '../../pages/Patients/Patients';
import Forms from '../../pages/Forms/Forms';

const RouterConfig = (props) => {    
    
    return (
        <Switch>
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/patients" render={() => <Patients />} />
            <Route path="/admin/forms" render={() => <Forms />} />
        </Switch>
    );
}

export default RouterConfig;