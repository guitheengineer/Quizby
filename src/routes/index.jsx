import React from 'react';
import { Switch } from 'react-router-dom';
import FourHundredFour from '../pages/fourhundredfour';
import Signup from '../components/forms/signup';
import Playing from '../pages/playing';
import Login from '../components/forms/login';
import Quizzes from '../pages/quizzes';
import RouteWithHeader from './RouteWithHeader';
import PrivateRoute from './PrivateRoute';
import Show from '../pages/show';
import Done from '../pages/done';

function Routes() {
  return (
    <Switch>
      <RouteWithHeader showlogo path="/quizzes/play/:id" component={Playing} />
      <RouteWithHeader path="/signup" component={Signup} />
      <RouteWithHeader path="/login" component={Login} />
      <RouteWithHeader
        showlogo
        style={{ position: 'absolute', zIndex: 1 }}
        path="/quizzes/show/:id"
        component={Show}
      />
      <RouteWithHeader showlogo path="/quizzes/done/:id" component={Done} />
      <PrivateRoute showlogo path="/quizzes" component={Quizzes} />
      <RouteWithHeader showlogo component={FourHundredFour} />
    </Switch>
  );
}

export default Routes;
