import React from 'react';

import './style.css';

import {Mem} from "../Constant/Variable"

function ViewOwnPage() {
    return (
        <React.Fragment>
            <div className="ownpage-header">
                <div className="ownpage-user">
                    <img src={Mem.avt} className="ownpage-avt" alt="" />
                    <div className="ownpage-name"><p>{Mem.ten}</p></div>
                </div>
                <div className="ownpage-info">
                    <div className="ownpage-header-subcrible">
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#efb14d' }}>{Mem.sobaiviet}</p><br />Số bài viết </div>
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#a1a1ef' }}>{Mem.songuoitheodoi}</p><br />Số người theo dõi</div>
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#e16de1' }}>{Mem.dangtheodoi}</p><br />Đang theo dõi</div>
                    </div>
                    <div className="ownpage-info-border"><p className="ownpage-info-chamngon">{Mem.chamngon}</p></div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default ViewOwnPage