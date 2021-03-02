import React from 'react';
import Presentation from '../../components/common/presentation';
import LoginContainer from './components/LoginContainer';

const Login = () => (
  <div className="Sign__container">
    <Presentation
      title="Login"
      description="Enter to start creating and sharing fun quizzes to your friends!"
    />
    <LoginContainer />
  </div>
);

export default Login;
