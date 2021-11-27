import React from 'react';
import './style.css';
import { post, CheckLogin, Mem } from "../Constant/Variable"
import convert from "../action/convert"
import { useState } from 'react'
import axios from 'axios'

const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
const User = JSON.parse(localStorage.getItem('user'))
var d = new Date()
function ShowMimDetail({ userpost,close }) {
    const [like, setLike] = useState(userpost.likers.length);
    const [Dislike, setDislike] = useState(userpost.haters.length);
    const [Comment, setComment] = useState(userpost.comments.length);
    const [ShowComment, setShowComment] = useState(userpost.comments);
    const [CheckLike, setCheckLike] =useState(0)
    const [CheckDislike, setCheckDislike] =useState(0)

    const likeHandler = () => {
        if (User == null) {
            window.location = "/login"
        }
        else {
            if(CheckLike === 0){
                try {
                    console.log(User._id)
                    axios.post("http://localhost:4000/upload/like/" + String(userpost._id), {likers:User._id} );
                } catch (err) { }
                setLike(like + 1);
                setCheckLike(1)
            }
            else{
                try {
                    axios.post("http://localhost:4000/upload/unlike/" + String(userpost._id), { likers:User._id});
                } catch (err) { }
                setLike(like - 1);
                setCheckLike(0)
            }
        }
    };
    const DislikeHandler = () => {
        if (User == null) {
            window.location = "/login"
        }
        else {
            if(CheckDislike ===0 ){
                try {
                    axios.post("http://localhost:4000/upload/dislike/" + String(userpost._id), { haters:User._id});
                } catch (err) { }
                setDislike(Dislike + 1);
                setCheckDislike(1)
            }
            else{
                try {
                    axios.post("http://localhost:4000/upload/undislike/" + String(userpost._id), { haters:User._id});
                } catch (err) { }
                setDislike(Dislike - 1);
                setCheckDislike(0)
            }
        }
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
    var d = new Date()
    function timeCalculate(time){
        var x;
        let ngay = time.split("T")[0].split("-")
        let gio = time.split("T")[1].split(".")[0].split(":")
        if (parseInt(gio[0])+ 7 >= 24) {
            gio[0] = parseInt(gio[0]) + 7 - 24
            ngay[2] = parseInt(ngay[2])+ 1
            if(ngay[2] == 31 && parseInt(ngay[1]) == 11){
                ngay[2] = 1
                ngay[1] = parseInt(12)
            }
        }
        else {
            gio[0] = parseInt(gio[0]) + 7
        }

        {(d.getHours() - parseInt(gio[0]) == 0) ?
                            ( x = String(d.getMinutes() - parseInt(gio[1]) <= 0 ? "Vừa xong" :
                                (d.getMinutes() - parseInt(gio[1]) + " phút"))) :
                            ((d.getDate() - parseInt(ngay[2]) == 0 ) ?
                                    (x = String(d.getHours() - parseInt(gio[0])) + " giờ") :
                                    (x = String(ngay[2] + "/" + ngay[1] + "/" + ngay[0])))}
        return x            
    }
    return (
        <div className="dangmim-overlay" id="post" >
            <div className="showpost-content">
                <div className="dangmim-header">
                    <div className="user-info">
                    </div>
                    <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/exit_y0l2wz.png" alt="" className="dangmim-exit" onClick={close}/>
                </div>
                <div className="showpost-title">
                    <div className="user-show-post">
                        <div className="user-info">
                            <img className="user-avt" src={userpost.avatar} alt="" />
                            <p className="user-name">{userpost.user_name}</p>
                            <div className="space" ></div>
                            <img className="timer" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/clock_fqwtxq.png" alt="" />
                            <p className="thoigian">
                            {timeCalculate(userpost.createdAt)}
                                     </p>
                        </div>
                        <p className="status">{userpost.caption} #{userpost.hashtag}</p>
                        <div className="mim" style={{ backgroundImage: ('url(' + String(userpost.mim_src) + ')') }}></div>
                        <div className="react">
                            <button className="react1" onClick={likeHandler} style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/react1_xgjunq.png)' }}></button>
                            <div className="count">{convert(like)}</div>
                            <button onClick={DislikeHandler} className="react2" style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/react2_uf5zj1.png)' }}></button>
                            <div className="count">{convert(Dislike)}</div>
                            <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/comment_itv1py.png" alt="" className="comment" />
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