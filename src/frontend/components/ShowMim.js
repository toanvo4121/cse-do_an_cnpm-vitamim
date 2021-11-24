import React from 'react';
import './style.css';
import { CheckLogin, Mem } from "../Constant/Variable"
import convert from "../action/convert"
import ShowRank from '../components/ShowRank';
import ShowThongKe from '../components/ShowThongKe';

function ShowMim({ Post, CheckRank }) {
    if (Post !== null) {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            {Post.reverse().map((UserPost, index) =>
                                <div key={index} className="user-post">
                                    <div className="user-info">
                                        <img className="user-avt" src={UserPost.avatar} alt="" />
                                        <p className="user-name">{UserPost.user_name}</p>
                                        {(UserPost.ten === Mem.ten && CheckLogin === 1) ? '' : <img src="source/follow-icon.png" alt="" />}
                                        <div className="space" ></div>
                                        <img className="timer" src="source/clock.png" alt="" />
                                        <p className="thoigian">{UserPost.thoigian} giờ</p>
                                    </div>
                                    <p className="status">{UserPost.caption} #{UserPost.hashtag}</p>
                                    <div className="mim" style={{ backgroundImage:('url('+String(UserPost.mim_src)+')')}}></div>
                                    <div className="react">
                                        <div className="react1" style={{ backgroundImage: 'url(source/react1.png)' }}></div>
                                        <div className="count">{convert(UserPost.likes)}</div>
                                        <div className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></div>
                                        <div className="count">{convert(UserPost.dislikes)}</div>
                                        <img src="source/comment.png" alt="" className="comment" />
                                        <div className="count">{convert(UserPost.comments.numOfComments)}</div>
                                        <div className="space" ></div>
                                        {(UserPost.ten === Mem.ten && CheckLogin === 1) ? <img src="source/del.png" alt="" className="del-btn" /> : <img src="source/report.png" alt="" className="del-btn" />}
                                        {(UserPost.ten === Mem.ten && CheckLogin === 1) ? <div className="count">Xóa bài</div> : <div className="count">Report</div>}
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
    else{
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
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