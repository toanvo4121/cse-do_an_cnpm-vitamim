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

    const AcpHandler = () => {
        if (User == null) {
            window.location = "/login"
        }
        else {
            try {
                axios.post("http://localhost:4000/upload/accept/" + String(Post._id), 1);
            } catch (err) { }
        }
    };

    return (
        <React.Fragment>
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
                <Popup modal trigger={<button className="mim" style={{ backgroundImage: ('url(' + String(Post.mim_src) + ')') }}></button>}>
                    {close => <ShowMimDetail userpost={Post} close={close} />}
                </Popup>
                <div className="react">
                    <div className="delbtn" onClick={AcpHandler}>

                        {(User !== null) ? <img src="https://res.cloudinary.com/vitamim/image/upload/v1637949264/source/tich-xanh_jff0gz.png" alt="" className="del-btn" /> : ""}

                        {(User !== null) ? <div className="count">Duyệt bài</div> : ""}
                    </div>
                    <div className="space" ></div>
                    <div className="delbtn" onClick={() => { DeletePost(Post) }}>

                        {(User !== null) ? <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/del_qwb5qa.png" alt="" className="del-btn" /> : ""}

                        {(User !== null) ? <div className="count">Xóa bài</div> : ""}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default UserPost