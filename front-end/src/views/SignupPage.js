import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage.js';
import SignupForm from '../components/SignupForm.js';

export function renderSignUp() {
  ReactDOM.render(
    <React.Fragment>
      <LoginPage />
      <SignupForm />
    </React.Fragment>,
    document.getElementById('root')
  );
}

const SignupPage = () => {
  // history.pushState(null, '', '/signup')
  // history.go(1)
  return (
    <React.Fragment>
      <LoginPage />
      <SignupForm />
    </React.Fragment>
  );
};

export default SignupPage;
