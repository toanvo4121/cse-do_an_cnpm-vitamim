import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import HomePage from '../views/HomePage.js';
import variables from '../variables.js';

function SubHeader() {
  function TheLoai() {
    return (
      <div className='theloai'>
        <p
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'mimthuong';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Mim thường
        </p>
        <p
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'darkmim';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Dảk mim
        </p>
        <p
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'csmim';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          CS mim
        </p>
        <p
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'hotmim';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Hot mim
        </p>
      </div>
    );
  }
  const [showTheLoai, setShowTheLoai] = useState(0);
  const handleShowTheLoai = () => {
    if (showTheLoai === 0) {
      setShowTheLoai(showTheLoai + 1);
    } else {
      setShowTheLoai(showTheLoai - 1);
    }
  };
  const handleShowOffTheLoai = () => {
    if (showTheLoai === 0) {
      setShowTheLoai(showTheLoai + 0);
    } else {
      setShowTheLoai(showTheLoai - 1);
    }
  };

  return (
    <React.Fragment>
      <div className='sub-header-space'></div>
      <div className='sub-header'>
        <div className='sub' onClick={handleShowTheLoai}>
          <p>Thể loại</p>
          <img
            src='source/tamgiacxoxuong.png'
            className='tamgiacxoxuong1'
            alt=''
          />
        </div>
        <div className='control-overlay'></div>
        {showTheLoai === 1 ? <TheLoai /> : ''}
        <p
          className='sub'
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'follow';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Follow
        </p>
        <p
          className='sub'
          onClick={() => {
            handleShowOffTheLoai();
            variables.dangmim = 1;
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Đăng mim
        </p>
        <p
          className='sub'
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'template';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Template
        </p>
        <p
          className='sub'
          onClick={() => {
            handleShowOffTheLoai();
            variables.SubTitle = 'binhchon';
            ReactDOM.render(<HomePage />, document.getElementById('root'));
          }}
        >
          Bình chọn
        </p>
      </div>
    </React.Fragment>
  );
}

export default SubHeader;
