import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
var Router  = BrowserRouter;
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);
