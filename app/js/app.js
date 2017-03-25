//import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import TaskListContainer from './task/Component';
import ProjectContainer from './project/Component';

import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'
import cookie from 'react-cookie';
import fetch from 'react-fetch'


class App extends React.Component {

    render() {
        return (
            <div>
                <div className="container-fluid header-container">
                    <div className="row">
                        <header><h1>TODO</h1></header>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ProjectContainer/>
                        </div>
                        <div className="col-md-9 main-content">
                            <TaskListContainer/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
