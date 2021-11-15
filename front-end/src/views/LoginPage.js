import React from 'react';
import ReactDOM from 'react-dom';
import variables from '../variables';
import HomePage from './HomePage.js';
import { renderSignup } from './SignupPage.js';

export function renderLogin() {
  // history.pushState(null,'','/login')
  //         history.go(1)
  ReactDOM.render(<LoginPage />, document.getElementById('root'));
}

const LoginPage = () => {
  const login = () => {
    if (
      document.getElementById('mail').value === 'Halee' &&
      document.getElementById('pass').value === '123123'
    ) {
      // window.history.pushState(null,'','/homepage')
      // history.go(1)
      variables.CheckLogin = 1;
      variables.SubTitle = 'theloai';
      ReactDOM.render(<HomePage />, document.getElementById('root'));
    } else {
      document.getElementsByClassName('check-login')[0].style.display = 'block';
    }
  };
  for (let i = 0; i < document.getElementsByClassName('signup').length; i++) {
    document.getElementsByClassName('signup')[i].onclick = function () {
      document.getElementsByClassName('signup')[i].style.border =
        '1px solid black';
      document.getElementsByClassName('error')[0].style.display = 'none';
    };
  }
  return (
    <div className='login-page'>
      <div className='logo'>
        <img src='source/logo-page.png' alt='' />
        <p className='slogan'>
          Ôi bạn ơi !!! <br />
          Hôm nay chưa cười là <br />
          tại thiếu Vitamim đấy !
        </p>
      </div>
      <div className='login-form'>
        <p className='dangnhap'>Đăng nhập</p>
        <input
          className='login'
          id='mail'
          type='text'
          placeholder='Tài khoản'
        />
        <input
          className='login'
          id='pass'
          type='password'
          placeholder='Mật khẩu'
        />
        <div className='check-login'>Sai tài khoản/mật khẩu</div>
        <div className='btn'>
          <p id='login-btn' className='dangnhap' onClick={login}>
            Login
          </p>
          <p id='signup-btn' onClick={renderSignup}>
            Sign up
          </p>
        </div>
        <a href='forgotpass' className='forgot'>
          Quên mật khẩu
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
