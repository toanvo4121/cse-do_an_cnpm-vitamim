import React from 'react';
import variables from './Variables.js';

function ViewOwnPage() {
  return (
    <React.Fragment>
      <div className='ownpage-header'>
        <div className='ownpage-user'>
          <img src={variables.Mem.avt} className='ownpage-avt' alt='' />
          <div className='ownpage-name'>
            <p>{variables.Mem.ten}</p>
          </div>
        </div>
        <div className='ownpage-info'>
          <div className='ownpage-header-subcrible'>
            <div className='ownpage-header-sub'>
              <p
                className='ownpage-header-sub-count'
                style={{ color: '#efb14d' }}
              >
                {variables.Mem.sobaiviet}
              </p>
              <br />
              Số bài viết{' '}
            </div>
            <div className='ownpage-header-sub'>
              <p
                className='ownpage-header-sub-count'
                style={{ color: '#a1a1ef' }}
              >
                {variables.Mem.songuoitheodoi}
              </p>
              <br />
              Số người theo dõi
            </div>
            <div className='ownpage-header-sub'>
              <p
                className='ownpage-header-sub-count'
                style={{ color: '#e16de1' }}
              >
                {variables.Mem.dangtheodoi}
              </p>
              <br />
              Đang theo dõi
            </div>
          </div>
          <div className='ownpage-info-border'>
            <p className='ownpage-info-chamngon'>{variables.Mem.chamngon}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewOwnPage;
