import React from 'react';
import { Switch } from 'react-router-dom';
import FourHundredFour from '../components/pages/fourhundredfour';
import Signup from '../components/pages/signup';
import Playing from '../components/pages/playing';
import Login from '../components/pages/login';
import Quizzes from '../components/pages/quizzes';
import RouteWithHeader from './RouteWithHeader';
import PrivateRoute from './PrivateRoute';
import Show from '../components/pages/show';
import Done from '../components/pages/done';
import CreateQuiz from '../components/pages/createquiz';
import User from '../components/pages/user';
import PrivateRouteUser from './PrivateRouteUser';
import Category from '../components/pages/category';
import EditQuiz from '../components/pages/editquiz';

const Routes = () => (
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
    <RouteWithHeader path="/quizzes/category/:category" component={Category} />
    <RouteWithHeader path="/quizzes" component={Quizzes} />
    <PrivateRouteUser
      path="/user/:username/createquiz"
      component={CreateQuiz}
    />
    <PrivateRouteUser path="/user/:username/editquiz" component={EditQuiz} />
    <RouteWithHeader path="/user/:username" component={User} />

    <RouteWithHeader component={FourHundredFour} />
  </Switch>
);

export default Routes;
