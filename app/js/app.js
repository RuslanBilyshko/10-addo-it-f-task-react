//import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import TaskListContainer from './task/Component';

import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'
import cookie from 'react-cookie';
import fetch from 'react-fetch'




class App extends React.Component {

    render() {
        return (
            <div className="main-component">
                <h1>App</h1>
                <TaskListContainer/>


                <Button onClick={() => {
                    alert(1)
                }} bsSize="large">Button111</Button>

            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
