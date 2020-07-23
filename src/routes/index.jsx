import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FourHundredFour from '../components/errors/FourHundredFour';
import Signup from '../components/signup';
import Container from '../components/container';
import Login from '../components/login';
import Quizzes from '../components/quizzes';
import Header from '../components/header';

function Routes() {
  return (
    <Switch>
      <Route path="/play">
        <Header logo />
        <Container />
      </Route>
      <Route path="/signup">
        <Header />
        <Signup />
        {/* <Redirect from="/signup" to="/login"> */}
      </Route>
      <Route path="/login">
        <Header />
        <Login />
      </Route>
      <Route path="/quizzes">
        <Header logo />
        <Quizzes />
      </Route>
      <Route>
        <Header logo />
        <FourHundredFour />
      </Route>
    </Switch>
  );
}

export default Routes;
