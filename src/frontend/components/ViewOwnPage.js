import React from 'react';
import './style.css';
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react'

const User = JSON.parse(localStorage.getItem('user'))
const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
const getUser = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function ViewOwnPage() {
    const [Posts,setPosts] = useState("")
    if (Posts === "") {
        getMims().then((res) => {
            setPosts(res.filter(p=>p.user == User._id))  
        })
    }
    const [Users,setUsers] = useState("")
    if (Users === "") {
        getUser().then((res) => {
            setUsers(res.find(p=>p._id == User._id))  
        })
    }
    if(Users !== null)
    {
        return (
            <div className="ViewOwnPage-overlay">
                <div className="ownpage-header">
                    <div className="ownpage-user">
                        <img src={Users.avatar} className="ownpage-avt" alt="" />
                        <div className="ownpage-name"><p className="name-user">{Users.ten_tai_khoan}</p></div>
                    </div>
                    <div className="ownpage-info">
                        <div className="ownpage-header-subcrible">
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#efb14d' }}>{Users.so_bai_viet}</p><br />Số bài viết </div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#a1a1ef' }}>{Users.ngay_sinh+"/"+Users.thang_sinh+"/"+Users.nam_sinh}</p><br />Sinh nhật</div>
                            <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{ color: '#e16de1' }}>{Users.gioi_tinh}</p><br />Giới tính</div>
                        </div>
                        <div className="ownpage-info-border"><p className="ownpage-info-chamngon">{Users.slogan}</p></div>
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
