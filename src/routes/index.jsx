import React from 'react';
import { Switch } from 'react-router-dom';
import FourHundredFour from '../pages/fourhundredfour';
import Signup from '../components/forms/signup';
import Playing from '../pages/playing';
import Login from '../components/forms/login';
import Quizzes from '../components/quizzes';
import RouteWithHeader from '../components/header';

function Routes() {
  return (
    <Switch>
      <RouteWithHeader showlogo path="/play" component={Playing} />
      <RouteWithHeader path="/signup" component={Signup} />
      <RouteWithHeader path="/login" component={Login} />
      <RouteWithHeader showlogo path="/quizzes" component={Quizzes} />
      <RouteWithHeader showlogo component={FourHundredFour} />
    </Switch>
  );
}

export default Routes;
