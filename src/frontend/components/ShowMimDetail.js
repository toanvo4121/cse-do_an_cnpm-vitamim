import React from 'react';
import './style.css';
import { post, CheckLogin, Mem } from "../Constant/Variable"
import convert from "../action/convert"
import { useState } from 'react'
import axios from 'axios'

const User = JSON.parse(localStorage.getItem('user'))
var d = new Date()
function ShowMimDetail({ userpost,close }) {
    const [like, setLike] = useState(userpost.likers.length);
    const [Dislike, setDislike] = useState(userpost.haters.length);
    const [Comment, setComment] = useState(userpost.comments.length);
    const [ShowComment, setShowComment] = useState(userpost.comments);
    console.log(ShowComment)

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
    function CommentHandler (cmts){
        if(User == null){
            window.location = "/login"
        }
        else{
            if(cmts==="")
            {
                document.getElementById("write").style.border = "2px solid rgb(255,0,0)"
                setTimeout(()=>{
                    document.getElementById("write").style.border = "2px solid rgb(0,0,0)"
                },1000)
            }
            else{
                const Commt={
                    comments: {cmt: cmts,
                                user:User.ten_tai_khoan}
                }
                console.log(Commt)
                try {
                    axios.post("http://localhost:4000/upload/comment/" + String(userpost._id), Commt);
                } catch (err) { }
                document.getElementById("write").value=""
                setShowComment(ShowComment.concat(Commt.comments))
                setComment(Comment + 1);
                
            }
        }
        
    };
    return (
        <div className="dangmim-overlay" id="post" >
            <div className="showpost-content">
                <div className="dangmim-header">
                    <div className="user-info">
                    </div>
                    <img src="source/exit.png" alt="" className="dangmim-exit" onClick={close}/>
                </div>
                <div className="showpost-title">
                    <div className="user-show-post">
                        <div className="user-info">
                            <img className="user-avt" src={userpost.avatar} alt="" />
                            <p className="user-name">{userpost.user_name}</p>
                            <div className="space" ></div>
                            <img className="timer" src="source/clock.png" alt="" />
                            <p className="thoigian">
                                {(d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7 == 0) ?
                                 (String(d.getMinutes() - parseInt(userpost.createdAt.split(":")[1]) == 0 ? "Vừa xong" :
                                  (d.getMinutes() - parseInt(userpost.createdAt.split(":")[1])) + " phút")) :
                                   (d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7 >0 ?
                                    (String(d.getHours() - parseInt(userpost.createdAt.split(":")[0].split("T")[1]) - 7) + " giờ") :
                                     userpost.createdAt.split(":")[0].split("T")[0])}
                                     </p>
                        </div>
                        <p className="status">{userpost.caption} #{userpost.hashtag}</p>
                        <div className="mim" style={{ backgroundImage: ('url(' + String(userpost.mim_src) + ')') }}></div>
                        <div className="react">
                            <button className="react1" onClick={likeHandler} style={{ backgroundImage: 'url(source/react1.png)' }}></button>
                            <div className="count">{convert(like)}</div>
                            <button onClick={DislikeHandler} className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></button>
                            <div className="count">{convert(Dislike)}</div>
                            <img src="source/comment.png" alt="" className="comment" />
                            <div className="count">{convert(Comment)}</div>
                        </div>
                    </div>
                    <div className="comment-overlay">
                        <div className="showcomment">{ShowComment.map((c, index) =>
                                <p key={index}>{c.user} : {c.cmt}</p>
                            )}
                        </div>
                        <p style={{margin:"5px 0px 5px 20px"}}>Viết bình luận:</p>
                        <div className="writecomment">
                            <textarea type="text" id="write" className="write"></textarea>
                            <button onClick={()=>{CommentHandler(document.getElementById("write").value)}} className="postcomment">Đăng</button>
                        </div>
                    </div>

                </div>
                {/* <p className="dangmim-check-button">Đăng</p> */}
            </div>
        </div>
    )
}
export default ShowMimDetail