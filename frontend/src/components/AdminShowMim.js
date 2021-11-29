import React from 'react';
import './style.css';
import ShowRank from '../components/ShowRank';
import ShowThongKe from '../components/ShowThongKe';
import './style.css';
import { useState } from 'react'
import axios from 'axios'
const getPosts = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
const getUsers = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

const User = JSON.parse(localStorage.getItem('user'))
function DeletePost(Post) {
    if (window.confirm("Ủa, bạn chắc chưa ???")) {
        axios.post('http://localhost:4000/upload/delete/' + String(Post._id))
            .then(res => console.log(res.data));
        window.location.reload()
    } else {
    }

}
function ShowMim({ CheckRank }) {

    const [Posts, setPosts] = useState(null)
    const [Users, setUsers] = useState(null)
    const [Member, setMember] = useState(null)
    let u 
    if (Posts === null) {
        getPosts().then((res) => {
            setPosts(res.filter(p => p.isAccept === 0))
        })
    }
    if (Users === null) {
        getUsers().then((res) => {
            setUsers(res)
        })
    }
    if (Member === null) {
        getUsers().then((res) => {
            setMember(res)
        })
    }
    function AcpHandler(Post) {
        
        // console.log(Users)
        Users.map((p) => {
            console.log(p._id)
            if(p._id === Post.user)
            {
                u = p
            }
        })
        if (User == null) {
            window.location = "/login"
        }
        else {
            try {
                axios.post("http://localhost:4000/upload/accept/" + String(Post._id), 1) 


                let count = u.so_bai_viet + 1
                const newInfo = {
                    email: u.email,
                    _id: u._id,
                    so_bai_viet: count,
                    ho: u.ho,
                    ten: u.ten,
                    ten_tai_khoan: u.ten_tai_khoan,
                    avatar: u.avatar,
                    slogan: u.slogan,
                    ngay_sinh: u.ngay_sinh,
                    thang_sinh: u.thang_sinh,
                    nam_sinh: u.nam_sinh,
                    gioi_tinh: u.gioi_tinh,
                }
                
                // console.log(newInfo)
                // console.log("newInfo")
                axios.post('http://localhost:4000/Member/update/' + String(u._id), newInfo)
                    .then(res => console.log(res.data));                 
                setTimeout(() => {
                    // setPosts(Posts.filter(p=>p._id !== Post._id))
                    window.location.reload()
                }, 500);
                localStorage.setItem('user', JSON.stringify(newInfo))
            } catch (err) { }
        }
    };
    let d = new Date()
    function timeCalculate(time) {
        let x;
        let ngay = time.split("T")[0].split("-")
        let gio = time.split("T")[1].split(".")[0].split(":")
        if (parseInt(gio[0]) + 7 >= 24) {
            gio[0] = parseInt(gio[0]) + 7 - 24
            ngay[2] = parseInt(ngay[2]) + 1
            if (ngay[2] === 31 && parseInt(ngay[1]) === 11) {
                ngay[2] = 1
                ngay[1] = parseInt(12)
            }
        }
        else {
            gio[0] = parseInt(gio[0]) + 7
        }

        
        (d.getHours() - parseInt(gio[0]) === 0) ?
        (x = String(d.getMinutes() - parseInt(gio[1]) <= 0 ? "Vừa xong" :
            (d.getMinutes() - parseInt(gio[1]) + " phút"))) :
        ((d.getDate() - parseInt(ngay[2]) === 0) ?
            (x = String(d.getHours() - parseInt(gio[0])) + " giờ") :
            (x = String(ngay[2] + "/" + ngay[1] + "/" + ngay[0])))
        
        return x
    }
    if (Posts !== null && Member !==null) {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            {Posts.map((Post, index) =>
                                <div className="user-post">
                                    <div className="user-info">
                                        <img className="user-avt" src={Member.find(m=>m._id===Post.user).avatar} alt="" />
                                        <div><p className="user-name">{Member.find(m=>m._id===Post.user).ten_tai_khoan}</p></div>
                                        <div className="space" ></div>
                                        <img className="timer" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/clock_fqwtxq.png" alt="" />
                                        <p className="thoigian">
                                        {timeCalculate(Post.createdAt)}
                                        </p>
                                    </div>
                                    <p className="status">{Post.caption} #{Post.hashtag}</p>
                                    <button className="mim" style={{ backgroundImage: ('url(' + String(Post.mim_src) + ')') }}></button>
                                    
                                    <div className="react_admin">
                                        <div className="delbtn" onClick={() => {AcpHandler(Post) }}>

                                            {(User !== null) ? <img src="https://res.cloudinary.com/vitamim/image/upload/v1637949264/source/tich-xanh_jff0gz.png" alt="" className="del-btn" /> : ""}

                                            {(User !== null) ? <div className="count">Duyệt bài</div> : ""}
                                        </div>
                                        <div className="delbtn" onClick={() => { DeletePost(Post) }}>

                                            {(User !== null) ? <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/del_qwb5qa.png" alt="" className="del-btn" /> : ""}

                                            {(User !== null) ? <div className="count">Xóa bài</div> : ""}
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="main-content_thong-ke">
                        {CheckRank === 1 ? <ShowRank /> : <ShowThongKe />}
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="source/fb.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />

                            <img id="ig" src="source/ig.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            <p className="khong-tim-thay-mim">không tìm thấy mim của bạn</p>
                        </div>
                    </div>
                    <div className="main-content_thong-ke">
                        {CheckRank === 1 ? <ShowRank /> : <ShowThongKe />}
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="source/fb.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />
                            <img id="ig" src="source/ig.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowMim