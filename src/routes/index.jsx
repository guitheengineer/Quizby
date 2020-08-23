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
import PrivateRouteUser from './PrivateRouteUser';
import Category from '../pages/category';
import EditQuiz from '../pages/editquiz';

function Routes() {
  return (
    <Switch>
      <RouteWithHeader path="/quizzes/play/:id" component={Playing} />
      <RouteWithHeader showlogo={false} path="/signup" component={Signup} />
      <RouteWithHeader showlogo={false} path="/login" component={Login} />
      <PrivateRoute
        style={{ position: 'absolute', zIndex: 1 }}
        path="/quizzes/show/:id"
        component={Show}
      />
      <PrivateRoute path="/quizzes/done/:id" component={Done} />
      <RouteWithHeader
        path="/quizzes/category/:category"
        component={Category}
      />
      <PrivateRoute path="/quizzes" component={Quizzes} />
      <PrivateRouteUser
        path="/user/:username/createquiz"
        component={CreateQuiz}
      />
      <PrivateRouteUser path="/user/:username/editquiz" component={EditQuiz} />
      <RouteWithHeader path="/user/:username" component={User} />

      <RouteWithHeader component={FourHundredFour} />
    </Switch>
  );
}

export default Routes;
