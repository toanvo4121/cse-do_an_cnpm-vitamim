import React from 'react'
import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = JSON.parse(localStorage.getItem('user'))
const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)


function Header() {
    const [Posts,setPosts] = useState(null)
    const [SearchPost,setSearchPost] = useState([])
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res)   
        })
    }
    function ShowControl() {
        return (
            <React.Fragment>
                <div className="control-overlay"></div>
                <div className="control">
                    <a href="/user"><p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Xem trang cá nhân</p></a>
                    <a href="/edit-profile"><p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Sửa thông tin cá nhân</p></a>
                    <p onClick={() => { handleShowOffControl() }}><img src="source/avatar.png" alt="anh" />Trợ giúp & hỗ trợ</p>
                    <a href='/login'><p onClick={() => { handleShowOffControl();localStorage.removeItem('user')}}><img src="source/avatar.png" alt="anh" />Đăng xuất</p></a>
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

    function SearchHandle(){
            localStorage.removeItem('search')
        setSearchPost(SearchPost.push(Posts.filter(p=>p.hashtag == document.getElementById("search").value)))
            localStorage.setItem('search',JSON.stringify(SearchPost))
            localStorage.setItem('khongtimthay',JSON.stringify(Posts.filter(p=>p.hashtag == "khonghashtag")))
    }
    if (User == null) {
        return (
            <div className="header">
                <Link to="/"><img src="source/logo-page.png" onClick={window.location.reload} alt="" className="Logo" /></Link>
                <div className="search-bar">
                    <input type="text" className="search" placeholder="Search..." />
                    <img src="source/search.png" alt="" className="search-button"  alt="search"/>
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
                <a href="/"><img src="source/logo-page.png" onClick={window.location.reload} alt="" className="Logo" /></a>
                <div className="search-bar">
                    <input type="text" className="search" id="search" name="q" placeholder="Search..." />
                    <a className="button-search" href="/search"><img onClick={SearchHandle} src="source/search.png" alt="" className="search-button"  alt="search"/></a>
                </div>
                <div className="UserInfo">
                    <div className="name"><p>{User.ten_tai_khoan}</p></div>
                    <img src={User.avatar} className="avt" alt="avt" />
                    <img src="source/tamgiacxoxuong.png" className="tamgiacxoxuong" alt="anh" onClick={handleControl} />
                    {show === 1 ? <ShowControl /> : ''}
                </div>
            </div>
        )
    }
}
export default Header