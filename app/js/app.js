"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import TaskListContainer from './task/Component';
import ProjectContainer from './project/Component';

import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'
import cookie from 'react-cookie';
import fetch from 'react-fetch'


// axios.post('http://localhost:5000/login', {
//     username: 'root',
//     password: '123'
// })
//     .then(function (response) {
//         console.log(response.data.access_token);
//         cookie.save("token",response.data.access_token)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

//console.log(cookie.load("token"));

// axios.get('http://localhost:5000/api/task')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//

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
