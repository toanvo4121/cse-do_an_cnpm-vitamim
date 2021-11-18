import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import HomePage from '../views/HomePage.js';
import { renderLogin } from '../views/LoginPage.js';
import { renderSignUp } from '../views/SignupPage.js';
import variables from './Variables.js';

function Header({ log }) {
  function ShowControl() {
    return (
      <React.Fragment>
        <div className='control-overlay'></div>
        <div className='control'>
          <p
            onClick={() => {
              handleShowOffControl();
              variables.SubTitle = 'viewownpage';
              ReactDOM.render(<HomePage />, document.getElementById('root'));
            }}
          >
            <img src='../../public/source/avatar.png' alt='' />
            Xem trang cá nhân
          </p>
          <p
            onClick={() => {
              handleShowOffControl();
            }}
          >
            <img src='../../public/source/avatar.png' alt='' />
            Thông tin cá nhân
          </p>
          <p
            onClick={() => {
              handleShowOffControl();
            }}
          >
            <img src='../../public/source/avatar.png' alt='' />
            Trợ giúp & hỗ trợ
          </p>
          <p
            onClick={() => {
              handleShowOffControl();
              variables.SubTitle = 'theloai';
              variables.CheckLogin = 0;
              ReactDOM.render(<HomePage />, document.getElementById('root'));
            }}
          >
            <img src='../../public/source/avatar.png' alt='' />
            Đăng xuất
          </p>
        </div>
      </React.Fragment>
    );
  }
  const [show, setShowControl] = useState(0);
  const handleControl = () => {
    show === 1 ? setShowControl(show - 1) : setShowControl(show + 1);
  };
  const handleShowOffControl = () => {
    show === 1 ? setShowControl(show - 1) : setShowControl(show + 0);
  };
  if (log === 0) {
    return (
      <div className='header'>
        <img
          src='source/logo-page.png'
          onClick={window.location.reload}
          alt=''
          className='Logo'
        />
        <div className='search-bar'>
          <input type='text' className='search' placeholder='Search...' />
          <img
            src='source/search-button.png'
            alt=''
            className='search-button'
          />
        </div>
        <div className='header-btn'>
          <p className='signup-btn' onClick={renderSignUp}>
            Signup
          </p>
          <p className='login-btn' onClick={renderLogin}>
            Login
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='header'>
        <img
          src='source/logo-page.png'
          onClick={window.location.reload}
          alt=''
          className='Logo'
        />
        <div className='search-bar'>
          <input type='text' className='search' placeholder='Search...' />
          <img
            src='source/search-button.png'
            alt=''
            className='search-button'
          />
        </div>
        <div className='UserInfo'>
          <div className='name'>
            <p>{variables.Mem.ten}</p>
          </div>
          <img src={variables.Mem.avt} className='avt' alt='' />
          <img
            src='source/tamgiacxoxuong.png'
            className='tamgiacxoxuong'
            alt=''
            onClick={handleControl}
          />
          {show === 1 ? <ShowControl /> : ''}
        </div>
      </div>
    );
  }
}

export default Header;
