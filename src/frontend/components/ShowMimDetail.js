import React from 'react';
import './style.css';
import { post, CheckLogin, Mem } from "../Constant/Variable"
import convert from "../action/convert"
import { useState } from 'react'
import axios from 'axios'
var d = new Date()
function ShowMimDetail({ userpost }) {
    const [like, setLike] = useState(userpost.likers.length);
    const [Dislike, setDislike] = useState(userpost.haters.length);

    const likeHandler = () => {

        try {
            axios.post("http://localhost:4000/upload/like/" + String(userpost._id), { userId: userpost._id });
        } catch (err) { }
        setLike(like + 1);

    };
    const DislikeHandler = () => {

        try {
            axios.post("http://localhost:4000/upload/dislike/" + String(userpost._id), { userId: userpost._id });
        } catch (err) { }
        setDislike(Dislike + 1);

    };
    return (
        <div className="dangmim-overlay">
            <div className="showpost-content">
                <div className="dangmim-header">
                    <div className="user-info">
                    </div>
                    <img src="source/exit.png" alt="" className="dangmim-exit" onClick={() => { post = '' }} />
                </div>
                <div className="dangmim-title">
                    <div className="user-show-post">
                        <div className="user-info">
                            <img className="user-avt" src={userpost.avatar} alt="" />
                            <p className="user-name">{userpost.user_name}</p>
                            <div className="space" ></div>
                            <img className="timer" src="source/clock.png" alt="" />
                            <p className="thoigian">{(d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7 == 0) ? (String(d.getMinutes() - parseInt(userpost.createdAt.split(":")[1]) == 0 ? "Vừa xong" : (d.getMinutes() - parseInt(userpost.createdAt.split(":")[1])) + " phút")) : (d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7 < 24 ? (String(d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7) + " giờ") : userpost.createdAt.split(":")[0].split("T")[0])}</p>
                        </div>
                        <p className="status">{userpost.caption} #{userpost.hashtag}</p>
                        <div className="mim" style={{ backgroundImage: ('url(' + String(userpost.mim_src) + ')') }}></div>
                        <div className="react">
                            <button className="react1" onClick={likeHandler} style={{ backgroundImage: 'url(source/react1.png)' }}></button>
                            <div className="count">{convert(like)}</div>
                            <button onClick={DislikeHandler} className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></button>
                            <div className="count">{convert(Dislike)}</div>
                            <img src="source/comment.png" alt="" className="comment" />
                            <div className="count">{convert(userpost.comments.length)}</div>
                            <div className="space" ></div>
                            {(userpost.ten === Mem.ten && CheckLogin === 1) ? <img src="source/del.png" alt="" className="del-btn" /> : <img src="source/report.png" alt="" className="del-btn" />}
                            {(userpost.ten === Mem.ten && CheckLogin === 1) ? <div className="count">Xóa bài</div> : <div className="count">Report</div>}
                        </div>
                    </div>
                    <div className="comment-overlay">
                        <div className="showcomment"></div>
                        <div className="writecomment">
                            <input type="text" className="write" />
                            <button className="postcomment">Đăng</button>
                        </div>
                    </div>

                </div>
                {/* <p className="dangmim-check-button">Đăng</p> */}
            </div>
        </div>
    )
}
export default ShowMimDetail