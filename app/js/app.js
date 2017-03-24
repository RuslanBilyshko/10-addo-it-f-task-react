//import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import TaskList from './task/Component';

import Button from 'react-bootstrap/lib/Button';
import axios from 'axios'


axios.get('http://127.0.0.1:5000')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


class App extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div className="main-component">
                <h1>App</h1>
                <TaskList/>
                <Button onClick={() => {
                    alert(1)
                }} bsSize="large">Button</Button>

            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
