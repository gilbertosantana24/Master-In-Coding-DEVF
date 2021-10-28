import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "../Views/Home";
import Login from "../Views/Login";
import Item from "../Views/Item";
import Signup from "../Views/Signup";

// JSX
const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

function route(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/item" component={Item}></Route>
                <Route exact path="/logout" component={Logout}></Route>
            </Switch>
        </Router>
    )
}

export default route;