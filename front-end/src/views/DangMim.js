import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.js';
import variables from '../components/Variables.js';

function DangMim() {
  return (
    <div className='dangmim-overlay'>
      <div className='dangmim-content'>
        <div className='dangmim-header'>
          <p
            className='dangmim-template'
            onClick={() => {
              variables.SubTitle = 'template';
              ReactDOM.render(<HomePage />, document.getElementById('root'));
            }}
          >
            Template
          </p>
          <p className='dangmim-tieude'>Đăng mim</p>
          <img
            alt=''
            src='source/exit.png'
            className='dangmim-exit'
            onClick={() => {
              variables.dangmim = 0;
              ReactDOM.render(<HomePage />, document.getElementById('root'));
            }}
          />
        </div>
        <div className='dangmim-title'>
          <div className='dangmim-input'>
            <p className='dangmim-post'>Post</p>
            <input
              type='text'
              className='dangmim-status'
              placeholder='Hôm nay bạn mang gì đến?'
            />
          </div>
          <div className='dangmim-loadanh'></div>
        </div>
        <p className='dangmim-check-button'>Đăng</p>
      </div>
    </div>
  );
}

export default DangMim;
