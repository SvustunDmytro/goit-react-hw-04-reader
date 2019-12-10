import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import Reader from '../Reader/Reader';

const App = () => (
  <div className={styles.App}>
    <Switch>
      <Route path="/reader" exact component={Reader} />
      <Redirect to="/reader" component={Reader} />
    </Switch>
  </div>
);

export default App;
