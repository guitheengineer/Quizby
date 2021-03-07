import { Switch } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import FourHundredFour from '../pages/four-hundred-four';
import Signup from '../pages/signup';
import Playing from '../pages/playing';
import Login from '../pages/login';
import Quizzes from '../pages/quizzes';
import RouteWithHeader from './RouteWithHeader';
import Show from '../pages/show';
import Done from '../pages/done';
import CreateQuiz from '../pages/create-quiz/CreateQuiz';
import User from '../pages/user';
import PrivateRouteUser from './PrivateRouteUser';
import Category from '../pages/category';
import EditQuiz from '../pages/edit-quiz';
import UnregisteredRoute from './UnregisteredRoute';

const Routes = () => (
  <Switch>
    <RouteWithHeader path="/quizzes/play/:id" component={Playing} />
    <UnregisteredRoute path="/signup" component={Signup} />
    <UnregisteredRoute path="/login" component={Login} />
    <RouteWithHeader
      headerClassName="Header--show"
      path="/quizzes/show/:id"
      component={Show}
    />
    <RouteWithHeader path="/quizzes/done/:quizId" component={Done} />
    <RouteWithHeader
      path="/quizzes/category/:quizCategory"
      component={Category}
    />
    <RouteWithHeader path="/quizzes" component={Quizzes} />
    <PrivateRouteUser
      path="/user/:username/createquiz"
      component={CreateQuiz}
    />
    <PrivateRouteUser path="/user/:username/editquiz" component={EditQuiz} />
    <RouteWithHeader path="/user/:usernameParam" component={User} />
    <RouteWithHeader
      path="/"
      exact
      showmenu="landing"
      headerClassName="Header--landing"
      component={Landing}
    />
    <RouteWithHeader component={FourHundredFour} />
  </Switch>
);

export default Routes;
