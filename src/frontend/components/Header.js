import React from 'react'
import './style.css'
import { useState } from 'react'
import {Mem} from "../Constant/Variable"
import { Link } from 'react-router-dom'


const User = JSON.parse(localStorage.getItem('user'))
function Header({ log }) {

    function ShowControl() {
        return (
            <React.Fragment>
                <div className="control-overlay"></div>
                <div className="control">
                    <p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Xem trang cá nhân</p>
                    <p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Thông tin cá nhân</p>
                    <p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Trợ giúp & hỗ trợ</p>
                    <a href='/'><p onClick={() => { handleShowOffControl();localStorage.removeItem('user'); }}><img src="source/avatar.png" alt="anh" />Đăng xuất</p></a>
                </div>
            </React.Fragment>
        )
    }
    const [show, setShowControl] = useState(0)
    const handleControl = () => {
        show === 1 ? setShowControl(show - 1) : setShowControl(show + 1)
    }
    const handleShowOffControl = () => {
        show === 1 ? setShowControl(show - 1) : setShowControl(show + 0)
    }
    if (User == null) {
        return (
            <div className="header">
                <img src="source/logo-page.png" onClick={window.location.reload} alt="" className="Logo" download />
                <div className="search-bar">
                    <input type="text" className="search" placeholder="Search..." />
                    <img src="source/search-button.png" alt="" className="search-button"  alt="search"/>
                </div>
                <div className="header-btn">
                    <Link to="/signup"><p className="signup-btn">Signup</p></Link>
                    <Link to="/login"><p className="login-btn">Login</p></Link>
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="header">
                <img src="source/logo-page.png" onClick={window.location.reload} alt="logo" className="Logo" />
                <div className="search-bar">
                    <input type="text" className="search" placeholder="Search..." />
                    <img src="source/search-button.png" alt="" className="search-button"  alt="search"/>
                </div>
                <div className="UserInfo">
                    <div className="name"><p>{User.ten_tai_khoan}</p></div>
                    <img src={Mem.avt} className="avt" alt="avt" />
                    <img src="source/tamgiacxoxuong.png" className="tamgiacxoxuong" alt="anh" onClick={handleControl} />
                    {show === 1 ? <ShowControl /> : ''}
                </div>
            </div>
        )
    }
}
export default Header