import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';

ReactDOM.render(
  <BrowserRouter basename="/goit-react-hw-04-reader">
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
