import React from 'react';
import './style.css';
import convert from "../action/convert"
import ShowMimDetail from './ShowMimDetail';
import { useState } from 'react'
import Popup from "reactjs-popup"
import axios from 'axios'
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
function UserPost({ Post }) {
    const [like, setLike] = useState(Post.likers.length);
    const [Dislike, setDislike] = useState(Post.haters.length);
    const [ShowPostDetail, setShowPostDetail] = useState(0)

    const likeHandler = () => {
        if (User == null) {
            window.location = "/login"
        }
        else {
            try {
                axios.post("http://localhost:4000/upload/like/" + String(Post._id), { userId: Post._id });
            } catch (err) { }
            setLike(like + 1);
        }
    };
    const DislikeHandler = () => {
        if (User == null) {
            window.location = "/login"
        }
        else {
            try {
                axios.post("http://localhost:4000/upload/dislike/" + String(Post._id), { userId: Post._id });
            } catch (err) { }
            setDislike(Dislike + 1);
        }
    };
    return (
        <React.Fragment>
            <div className="user-post">
                <div className="user-info">
                    <img className="user-avt" src={Post.avatar} alt="" />
                    <p className="user-name">{Post.user_name}</p>
                    <div className="space" ></div>
                    <img className="timer" src="source/clock.png" alt="" />
                    <p className="thoigian">{(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 == 0) ? (String(d.getMinutes() - parseInt(Post.createdAt.split(":")[1]) == 0 ? "Vừa xong" : (d.getMinutes() - parseInt(Post.createdAt.split(":")[1])) + " phút")) : (d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 < 24 ? (String(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7) + " giờ") : Post.createdAt.split(":")[0].split("T")[0])}</p>
                </div>
                <p className="status">{Post.caption} #{Post.hashtag}</p>
                <Popup modal trigger={<button className="mim" style={{ backgroundImage: ('url(' + String(Post.mim_src) + ')') }}></button>}>
                    {close=><ShowMimDetail userpost={Post} close={close}/>}
                    </Popup>
                <div className="react">

                    <button onClick={likeHandler} className="react1" style={{ backgroundImage: 'url(source/react1.png)' }}></button>

                    <div className="count">{convert(like)}</div>

                    <button onClick={DislikeHandler} className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></button>

                    <div className="count">{convert(Dislike)}</div>

                    <img src="source/comment.png" alt="" className="comment" />

                    <div className="count">{convert(Post.comments.length)}</div>

                    <div className="space" ></div>
                    <div className="delbtn"  onClick={() => { DeletePost(Post) }}>

                        {(User !== null) ? ((Post.user === User._id) ? <img src="source/del.png" alt="" className="del-btn" /> : "") : ""}

                        {(User !== null) ? ((Post.user === User._id) ? <div className="count">Xóa bài</div> : "") : ""}
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default UserPost