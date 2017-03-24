import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';


class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="main-component">
        <h1>App</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
