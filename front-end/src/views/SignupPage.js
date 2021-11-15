import React from 'react';
import ReactDOM from 'react-dom';
import { renderLogin } from './LoginPage.js';
import LoginPage from './LoginPage.js';

const Ngay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const Thang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Nam = [
  2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
  2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996,
  1995, 1994, 1993, 1992, 1991, 1990,
];

export function renderSignup() {
  // history.pushState(null, '', '/signup')
  // history.go(1)
  ReactDOM.render(
    <React.Fragment>
      <LoginPage />
      <SignupPage />
    </React.Fragment>,
    document.getElementById('root')
  );
}

const SignupPage = () => {
  const AcpSignUp = () => {
    let check = 0;
    for (let i = 0; i < document.getElementsByClassName('signup').length; i++) {
      if (document.getElementsByClassName('signup')[i].value === '') {
        document.getElementsByClassName('signup')[i].style.border =
          '1px solid red';
        document.getElementsByClassName('error')[0].style.display = 'block';
        check += 1;
      }
    }
    if (check === 0) {
      alert('Đăng ký tài khoản thành công');
      renderLogin();
    }
  };
  return (
    <React.Fragment>
      <div className='signup-page' id='signup-page'>
        <div className='background'>
          <div className='head'>
            <p className='dangky'>Đăng ký</p>
            <img
              className='exit-button'
              id='exit-button'
              src='source/exit.png'
              alt=''
              onClick={renderLogin}
            />
          </div>
          <form action='' className='signup-form'>
            <div className='signup1'>
              <input
                className='signup'
                id='ho'
                type='text'
                placeholder='Họ'
                autoFocus
              />
              <input
                className='signup'
                id='ten'
                type='text'
                placeholder='Tên'
              />
            </div>
            <input
              className='signup'
              id='username'
              type='text'
              placeholder='Tên tài khoản'
            />
            <input
              className='signup'
              id='password'
              type='text'
              placeholder='Mật khẩu'
            />
            <div className='birthday'>
              <p>Ngày sinh</p>
              <p className='thangsinh'>Tháng sinh</p>
              <p>Năm sinh</p>
            </div>
            <div className='signup2'>
              <select name='ngay' id='ngay' aria-label='Ngày' title='Ngày'>
                {Ngay.map((ngay, index) => (
                  <option value={ngay} key={index}>
                    {ngay}
                  </option>
                ))}
              </select>
              <select name='thang' id='thang' aria-label='Tháng' title='Tháng'>
                {Thang.map((thang, index) => (
                  <option value={thang} key={index}>
                    {thang}
                  </option>
                ))}
              </select>
              <select name='nam' id='nam' aria-label='Năm' title='Năm sinh'>
                {Nam.map((nam, index) => (
                  <option value={nam} key={index}>
                    {nam}
                  </option>
                ))}
              </select>
            </div>
            <div className='gent'>
              <p>Giới tính:</p>
              <select
                name='gioitinh'
                id='gioitinh'
                aria-label='Giới tính'
                title='Giới tính'
              >
                <option value='nam'>Nam</option>
                <option value='nu'>Nữ</option>
                <option value='khac'>Khác</option>
              </select>
            </div>
          </form>
          <div className='error'>Vui lòng điền đầy đủ thông tin cá nhân</div>
          <p className='dieukhoan'>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
            <a href='dieukhoan.html' target='_blank'>
              Điều khoản
            </a>
            ,{' '}
            <a href='dieukhoan.html' target='_blank'>
              Chính sách dữ liệu
            </a>{' '}
            và{' '}
            <a href='dieukhoan.html' target='_blank'>
              Chính sách cookie
            </a>{' '}
            của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS
            và hủy nhận bất kỳ lúc nào.
          </p>
          <p className='signup-btn' id='signup-acp' onClick={AcpSignUp}>
            Sign up
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupPage;
