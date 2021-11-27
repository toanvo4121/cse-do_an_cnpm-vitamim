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
        let count = User.so_bai_viet - 1
        const newInfo = {
            email:User.email,
            _id:User._id,
            so_bai_viet:count,
            ho: User.ho,
            ten: User.ten,
            ten_tai_khoan: User.ten_tai_khoan,
            avatar:User.avatar,
            slogan: User.slogan,
            ngay_sinh: User.ngay_sinh,
            thang_sinh: User.thang_sinh,
            nam_sinh: User.nam_sinh,
            gioi_tinh: User.gioi_tinh,
        }
    
        // console.log(newMem)
        axios.post('http://localhost:4000/Member/update/'+String(User._id), newInfo)
            .then(res => console.log(res.data));
            localStorage.setItem('user',JSON.stringify(newInfo))    

        axios.post('http://localhost:4000/upload/delete/' + String(Post._id))
            .then(res => console.log(res.data));
        window.location.reload()
    } 
    else {}
}
var d = new Date()
function UserPost({ Post }) {

    const [like, setLike] = useState(Post.likers.length);
    const [Dislike, setDislike] = useState(Post.haters.length);
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

    function ShowUserPage(User){
        // console.log(User)
        // axios.post( 'http://localhost:3000/userpage', User )
        localStorage.setItem('userpage',JSON.stringify(User))
        window.location = "/userpage/"+User
    }
    let ngay = Post.createdAt.split("T")[0]
    let gio = Post.createdAt.split("T")[1].split(".")[0]
    return (
        <React.Fragment>
            <div className="user-post">
                <div className="user-info">
                    <img className="user-avt" src={Post.avatar} alt="" />
                    <div onClick={()=>{ShowUserPage(Post.user)}}><p className="user-name">{Post.user_name}</p></div>
                    <div className="space" ></div>
                    <img className="timer" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/clock_fqwtxq.png" alt="" />
                    <p className="thoigian">
                        {/* {(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 == 0) ?
                            (String(d.getMinutes() - parseInt(Post.createdAt.split(":")[1]) == 0 ? "Vừa xong" :
                                (d.getMinutes() - parseInt(Post.createdAt.split(":")[1])) + " phút")) :
                            (d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7 > 0 ?
                                (String(d.getHours() - parseInt(Post.createdAt.split(":")[0].split("T")[1]) - 7) + " giờ") :
                                Post.createdAt.split(":")[0].split("T")[0])} */}
                    </p>
                </div>
                <p className="status">{Post.caption} #{Post.hashtag}</p>
                <Popup modal trigger={<button className="mim" style={{ backgroundImage: ('url(' + String(Post.mim_src) + ')') }}></button>}>
                    {close => <ShowMimDetail userpost={Post} close={close} />}
                </Popup>
                <div className="react">

                    <button onClick={likeHandler} className="react1" style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/react1_xgjunq.png)' }}></button>

                    <div className="count">{convert(like)}</div>

                    <button onClick={DislikeHandler} className="react2" style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/react2_uf5zj1.png)' }}></button>

                    <div className="count">{convert(Dislike)}</div>

                    <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/comment_itv1py.png" alt="" className="comment" />

                    <div className="count">{convert(Post.comments.length)}</div>

                    <div className="space" ></div>
                    <div className="delbtn" onClick={() => { DeletePost(Post) }}>

                        {(User !== null) ? ((Post.user === User._id) ? <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/del_qwb5qa.png" alt="" className="del-btn" /> : "") : ""}

                        {(User !== null) ? ((Post.user === User._id) ? <div className="count">Xóa bài</div> : "") : ""}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default UserPost
