import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FourHundredFour from '../pages/fourhundredfour';
import Signup from '../components/forms/signup';
import Container from '../components/container';
import Login from '../components/forms/login';
import Quizzes from '../components/quizzes';
import RouteWithHeader from '../components/header';

function Routes() {
  return (
    <Switch>
      <RouteWithHeader showlogo path="/play" component={Container} />
      <RouteWithHeader path="/signup" component={Signup} />
      <RouteWithHeader path="/login" component={Login} />
      <RouteWithHeader showlogo path="/quizzes" component={Quizzes} />
      <RouteWithHeader showlogo component={FourHundredFour} />
    </Switch>
  );
}

export default Routes;
