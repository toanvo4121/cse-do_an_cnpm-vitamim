import React from 'react';
import './style.css';
import { CheckLogin, Mem } from "../Constant/Variable"
import convert from "../action/convert"
import ShowRank from '../components/ShowRank';
import ShowThongKe from '../components/ShowThongKe';
import {useState} from 'react'
import axios from 'axios'
const User = JSON.parse(localStorage.getItem('user'))


  
function ShowMim({ Post, CheckRank }) {
    function Likes(UserPost){
        if(User===null){
            window.location = "/login"
        }
        else{
            const UpdateLike = {
                likers: UserPost.likers.concat(User._id),
                haters: UserPost.haters
            }
            axios.post('http://localhost:4000/upload/update/'+String(UserPost._id), UpdateLike)
                .then(res => console.log(res.data));
            // setLike(UserPost.likers.length)
            setTimeout(()=>{window.scrollY=0;document.location.reload(false);},500)
        }
    }
    function DisLikes(UserPost){
        if(User===null){
            window.location = "/login"
        }
        else{
            const UpdateDisLike = {
                likers: UserPost.likers,
                haters: UserPost.haters.concat(User._id)
            }
            axios.post('http://localhost:4000/upload/update/'+String(UserPost._id), UpdateDisLike)
            .then(res => console.log(res.data));
            // setLike(UserPost.likers.length)
            setTimeout(()=>{document.location.reload(false)},500)
        }
    }
    if (Post !== null) {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            {Post.map((UserPost, index) =>
                                <div key={index} className="user-post">
                                    <div className="user-info">
                                        <img className="user-avt" src={UserPost.avatar} alt="" />
                                        <p className="user-name">{UserPost.user_name}</p>
                                        <div className="space" ></div>
                                        <img className="timer" src="source/clock.png" alt="" />
                                        <p className="thoigian">{UserPost.thoigian} giờ</p>
                                    </div>
                                    <p className="status">{UserPost.caption} #{UserPost.hashtag}</p>
                                    <div className="mim" style={{ backgroundImage:('url('+String(UserPost.mim_src)+')')}}></div>
                                    <div className="react">

                                        <button onClick={()=>Likes(UserPost)} className="react1" style={{ backgroundImage: 'url(source/react1.png)' }}></button>

                                        <div className="count">{convert(UserPost.likers.length)}</div>

                                        <button onClick={()=>DisLikes(UserPost)} className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></button>

                                        <div className="count">{convert(UserPost.haters.length)}</div>

                                        <img src="source/comment.png" alt="" className="comment" />

                                        <div className="count">{convert(UserPost.comments.length)}</div>

                                        <div className="space" ></div>

                                        {(User!==null)?((UserPost.user === User._id ) ? <img src="source/del.png" alt="" className="del-btn" /> : ""):""}
                                        
                                        {(User!==null)?((UserPost.user === User._id ) ? <div className="count">Xóa bài</div>:""):""}
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