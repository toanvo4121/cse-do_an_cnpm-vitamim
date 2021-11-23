import React from 'react';
import './style.css';
import {post,CheckLogin,Mem} from "../Constant/Variable"
import convert from "../action/convert"

function ShowPost({ userpost }) {
    return (
        <div className="dangmim-overlay">
            <div className="showpost-content">
                <div className="dangmim-header">
                    <div className="user-info">
                    </div>
                    <img src="source/exit.png" className="dangmim-exit" onClick={() => { post = ''}} />
                </div>
                <div className="dangmim-title">
                    <div className="user-show-post">
                        <div className="user-info">
                            <img className="user-avt" src={userpost.avt} alt="" />
                            <p className="user-name">{userpost.ten}</p>
                            {(userpost.ten === Mem.ten && CheckLogin === 1) ? '' : <img src="source/follow-icon.png" />}
                            <div className="space" ></div>
                            <img className="timer" src="source/clock.png" alt="" />
                            <p className="thoigian">{userpost.thoigian} giờ</p>
                        </div>
                        <p className="status">{userpost.stt} {userpost.hashtag}</p>
                        <div className="mim" style={{ backgroundImage: userpost.src }}></div>
                        <div className="react">
                                    <div className="react1" style={{ backgroundImage: 'url(source/react1.png)' }}></div>
                                    <div className="count">{convert(userpost.quadark)}</div>
                                    <div className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></div>
                                    <div className="count">{convert(userpost.soweak)}</div>
                                    <img src="source/comment.png" alt="" className="comment" />
                                    <div className="count">{convert(userpost.comment)}</div>
                                    <div className="space" ></div>
                                    {(userpost.ten === Mem.ten && CheckLogin === 1) ? <img src="source/del.png" alt="" className="del-btn" /> : <img src="source/report.png" alt="" className="del-btn" />}
                                    {(userpost.ten === Mem.ten && CheckLogin === 1) ? <div className="count">Xóa bài</div> : <div className="count">Report</div>}
                                </div>
                    </div>
                    <div className="comment-overlay">
                        <div className="showcomment"></div>
                        <div className="writecomment">
                            <input type="text"className="write"/>
                            <button className="postcomment">Đăng</button>
                        </div>
                    </div>

                </div>
                {/* <p className="dangmim-check-button">Đăng</p> */}
            </div>
        </div>
    )
}
export default ShowPost