import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ SignIn }/>
    <Route path="/signup" exact component={ SignUp }/>
  </Switch>
);

export default Routes;