import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import AddUser from './Components/addUser';
import EditUser from './Components/editUser';


const Router = () => {
    return (
        <Switch>
            <Route path="/adduser" component={AddUser} />
            <Route path="/edituser" component={EditUser} />
            <Route exact path="/" component={App} />
        </Switch>
    )
}

export default Router;