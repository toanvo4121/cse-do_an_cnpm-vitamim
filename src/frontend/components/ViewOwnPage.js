import React from 'react';
import './style.css';
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react'

const User = JSON.parse(localStorage.getItem('user'))

function ViewOwnPage() {

    if(User !== null)
    {
        return (
            <div className="ViewOwnPage-overlay">
                <div className="ownpage-header">
                    <div className="ownpage-user">
                        <img src={User.avatar} className="ownpage-avt" alt="" />
                        <div className="ownpage-name"><p>{User.ten_tai_khoan}</p></div>
                    </div>
                    <div className="ownpage-info">
                        <div className="ownpage-header-subcrible">
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#efb14d' }}>{User.so_bai_viet}</p><br />Số bài viết </div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#a1a1ef' }}>{User.ngay_sinh+"/"+User.thang_sinh+"/"+User.nam_sinh}</p><br />Sinh nhật</div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#e16de1' }}>{User.gioi_tinh}</p><br />Giới tính</div>
                        </div>
                        <div className="ownpage-info-border"><p className="ownpage-info-chamngon">{User.slogan}</p></div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        <div></div>
    }
}
export default ViewOwnPage