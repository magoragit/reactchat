import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Actions from "./Actions.js";

// Create list of emmett for access to all actions of app
Actions();

window.React = React;

render(
  (<Router>
    <Route path="/" component={App}>
    </Route>
  </Router>), document.getElementById('content')
);
