import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserTabs from './containers/Tabs';
import UserForm from './components/UserForm';
import GroupForm from './components/GroupForm'

const BaseRouter = () =>(
    <Switch>
        <Route exact path='/' component={UserTabs} />
        <Route exact path='/create-user' component={UserForm}/>
        <Route exact path='/create-group' component={GroupForm}/>    
    </Switch>
);
export default BaseRouter;
