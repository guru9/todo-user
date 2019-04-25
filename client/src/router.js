import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import AddUser from './Components/addUser';
import EditUser from './Components/editUser';


const Router = () => {
    return (
        <div className="App">
            <header className="App-header">
                Todo-User
            </header>
            <Switch>
                <Route path="/adduser" component={AddUser} />
                <Route path="/edituser/:id" component={EditUser} />
                <Route exact path="/" component={App} />
            </Switch>
        </div>

    )
}

export default Router;