import React from 'react';
import './style.css';
import convert from "../action/convert"
import { useState } from 'react'
import axios from 'axios'
import ShowMimDetail from './ShowMimDetail'
import Popup from "reactjs-popup";


const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)

const getUsers = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)


const User = JSON.parse(localStorage.getItem('user'))


function DeletePost(Post) {

    if (window.confirm("Ủa, bạn chắc chưa ???")) {
        let count = User.so_bai_viet - 1
        const newInfo = {
            email: User.email,
            _id: User._id,
            so_bai_viet: count,
            ho: User.ho,
            ten: User.ten,
            ten_tai_khoan: User.ten_tai_khoan,
            avatar: User.avatar,
            slogan: User.slogan,
            ngay_sinh: User.ngay_sinh,
            thang_sinh: User.thang_sinh,
            nam_sinh: User.nam_sinh,
            gioi_tinh: User.gioi_tinh,
        }

        // console.log(newMem)
        axios.post('http://localhost:4000/Member/update/' + String(User._id), newInfo)
            .then(res => console.log(res.data));
        localStorage.setItem('user', JSON.stringify(newInfo))

        axios.post('http://localhost:4000/upload/delete/' + String(Post._id))
            .then(res => console.log(res.data));
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }
    else { }
}

function UserPost({ Post }) {

    const [like, setLike] = useState(Post.likers.length);
    const [Dislike, setDislike] = useState(Post.haters.length);
    const [CheckLike, setCheckLike] = useState(0)
    const [CheckDislike, setCheckDislike] = useState(0)
    const [Ps, setPs] = useState("")
    const [Users, setUsers] = useState("")

    if (Users === "") {
        getUsers().then((res) => {
            setUsers(res.find(p => p._id === Post.user))
        })
    }

    if (Ps === "") {
        setTimeout(() => {
            getMims().then((res) => {
                setPs(res.find(p => p._id === Post._id))
            })
        }, 500)
    };
    if (Ps) {
        if (Ps.likers && User) {
            if (Ps.likers.find(p => p === User._id)) {
                if (CheckLike === 0) {
                    setCheckLike(1)

                }
            }

        }
    }
    if (CheckLike === 1) {
        document.getElementById(`like${Post._id}`).style.border = "2px solid #18F607"
    }

    function LikeAction(id) {
        try {

            axios.post("http://localhost:4000/upload/like/" + String(Post._id), { likers: User._id });
        } catch (err) { }
        setCheckLike(1)
        setPs("")
        document.getElementById(`like${id}`).style.border = "2px solid #18F607"
        setLike(like + 1);
    }
    function UnlikeAction(id) {
        try {
            axios.post("http://localhost:4000/upload/unlike/" + String(Post._id), { likers: User._id });
        } catch (err) { }
        setCheckLike(0)
        setPs("")
        document.getElementById(`like${id}`).style.border = "1px solid #000"
        if (like >= 0) {
            setLike(like - 1);
        }
    }

    if (Ps.haters && User) {

        if (Ps.haters.find(p => p === User._id)) {
            if (CheckDislike === 0) {
                setCheckDislike(1)
            }
        }
    }
    if (CheckDislike === 1) {
        document.getElementById(`dislike${Post._id}`).style.border = "2px solid #18F607"
    }
    function DislikeAction(id) {
        try {
            axios.post("http://localhost:4000/upload/dislike/" + String(Post._id), { haters: User._id });
        } catch (err) { }
        setCheckDislike(1)
        document.getElementById(`dislike${id}`).style.border = "2px solid #18F607"
        setDislike(Dislike + 1);
        setPs("")
    }
    function UnDislikeAction(id) {
        try {
            axios.post("http://localhost:4000/upload/undislike/" + String(Post._id), { haters: User._id });
        } catch (err) { }
        setCheckDislike(0)
        document.getElementById(`dislike${id}`).style.border = "1px solid #000"
        if (Dislike >= 0) {
            setDislike(Dislike - 1);
        }
        setPs("")
    }

    function likeHandler(id) {
        if (User == null) {
            window.location = "/login"
        }
        else {
            if (CheckLike === 0) {
                LikeAction(id)
                if (CheckDislike === 1) {
                    UnDislikeAction(id)
                }
            }
            else {
                UnlikeAction(id)
            }
        }
    }

    function DislikeHandler(id) {
        if (User == null) {
            window.location = "/login"
        }
        else {
            if (CheckDislike === 0) {
                DislikeAction(id)
                if (CheckLike === 1) {
                    UnlikeAction(id)
                }
            }
            else {
                UnDislikeAction(id)
            }
        }
    };

    function ShowUserPage(User) {
        // console.log(User)
        // axios.post( 'http://localhost:3000/userpage', User )
        localStorage.setItem('userpage', JSON.stringify(User))
        window.location = "/userpage/" + User
    }
    let d = new Date()
    function timeCalculate(time) {
        let x;
        let ngay = time.split("T")[0].split("-")
        let gio = time.split("T")[1].split(".")[0].split(":")
        if (parseInt(gio[0]) + 7 >= 24) {
            gio[0] = parseInt(gio[0]) + 7 - 24
            ngay[2] = parseInt(ngay[2]) + 1
            if (ngay[2] === 31 && parseInt(ngay[1]) === 11) {
                ngay[2] = 1
                ngay[1] = parseInt(12)
            }
        }
        else {
            gio[0] = parseInt(gio[0]) + 7
        }

        (d.getDate() - parseInt(ngay[2]) === 0) ?
            ((d.getHours() - parseInt(gio[0]) === 0) ?
                (x = String(d.getMinutes() - parseInt(gio[1]) <= 0 ? "Vừa xong" :
                    (d.getMinutes() - parseInt(gio[1]) + " phút"))) :
                ((x = String(d.getHours() - parseInt(gio[0])) + " giờ"))) :
            (x = String(ngay[2] + "/" + ngay[1] + "/" + ngay[0]))

        return x
    }
    return (
        <React.Fragment>
            <div className="user-post">
                <div className="user-info">
                    <img className="user-avt" src={Users.avatar} alt="" />
                    <div onClick={() => { ShowUserPage(Post.user) }} className="user">
                        <p className="user-name">{Users.ten_tai_khoan}</p>
                        <span class="tooltiptext">Xem trang cá nhân</span>
                    </div>
                    <div className="space" ></div>
                    <img className="timer" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/clock_fqwtxq.png" alt="" />
                    <p className="thoigian">
                        {timeCalculate(Post.createdAt)}
                    </p>
                </div>
                <p className="status">{Post.caption} #{Post.hashtag}</p>
                <Popup modal trigger={<button className="mim" style={{ backgroundImage: ('url(' + String(Post.mim_src) + ')') }}></button>}>
                    {close => <ShowMimDetail userpost={Post} close={close} />}
                </Popup>
                <div className="react">
                    <div className="react1-overlay">
                        <button onClick={() => { likeHandler(Post._id) }} className="react1" id={`like${Post._id}`} style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/react1_xgjunq.png)' }}></button>
                        <div className="count">{convert(like)}</div>
                        <span class="tooltiptext">Quá dảk</span>
                    </div>
                    <div className="react2-overlay">
                        <button onClick={() => { DislikeHandler(Post._id) }} className="react2" id={`dislike${Post._id}`} style={{ backgroundImage: 'url(https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/react2_uf5zj1.png)' }}></button>
                        <div className="count">{convert(Dislike)}</div>
                        <span class="tooltiptext">So weak</span>
                    </div>
                    <img src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/comment_itv1py.png" alt="" className="comment" />
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