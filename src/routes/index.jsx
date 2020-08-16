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
import CreateQuiz from '../pages/createquiz';
import User from '../pages/user';

function Routes() {
  return (
    <Switch>
      <RouteWithHeader showlogo path="/quizzes/play/:id" component={Playing} />
      <RouteWithHeader path="/signup" component={Signup} />
      <RouteWithHeader path="/login" component={Login} />
      <PrivateRoute
        showlogo
        style={{ position: 'absolute', zIndex: 1 }}
        path="/quizzes/show/:id"
        component={Show}
      />
      <PrivateRoute showlogo path="/quizzes/done/:id" component={Done} />
      <PrivateRoute showlogo path="/quizzes" component={Quizzes} />
      <RouteWithHeader showlogo path="/user/:username" component={User} />
      <PrivateRoute
        showlogo
        path="/user/:username/createquiz"
        component={CreateQuiz}
      />
      <RouteWithHeader showlogo component={FourHundredFour} />
    </Switch>
  );
}

export default Routes;
