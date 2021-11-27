import React from 'react';
import './style.css';
import ShowRank from '../components/ShowRank';
import ShowThongKe from '../components/ShowThongKe';
import './style.css';
import { useState } from 'react'
import axios from 'axios'
const getMims = () => axios.get('http://localhost:4000/upload')
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
var d = new Date()
function ShowMim({ CheckRank }) {

    const [Posts, setPosts] = useState(null)
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res.filter(p => p.isAccept == 0))
        })
    }
    function AcpHandler(Post) {
        if (User == null) {
            window.location = "/login"
        }
        else {
            try {
                axios.post("http://localhost:4000/upload/accept/" + String(Post._id), 1)                  
                        setPosts(Posts.filter(p=>p._id !== Post._id))
            } catch (err) { }
        }
    };
    if (Posts !== null) {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            {Posts.map((Post, index) =>
                                <div className="user-post">
                                    <div className="user-info">
                                        <img className="user-avt" src={Post.avatar} alt="" />
                                        <div><p className="user-name">{Post.user_name}</p></div>
                                        <div className="space" ></div>
                                        <img className="timer" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/clock_fqwtxq.png" alt="" />
                                        <p className="thoigian">
                                            {(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 == 0) ?
                                                (String(d.getMinutes() - parseInt(Post.createdAt.split(":")[1]) == 0 ? "Vừa xong" :
                                                    (d.getMinutes() - parseInt(Post.createdAt.split(":")[1])) + " phút")) :
                                                (d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 > 0 ?
                                                    (String(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7) + " giờ") :
                                                    Post.createdAt.split(":")[0].split("T")[0])}
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