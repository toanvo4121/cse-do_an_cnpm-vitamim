import React, { useState } from 'react';
import './style.css';
import axios from "axios"
const User = JSON.parse(localStorage.getItem('user'))
function DangMim() {
    const [UploadImg,setUploadImg] = useState("")
    const [Loading,setLoading] = useState(0)
    const [Image,setImage] = useState(null)
    const Upload = ()=>{
        const formData = new FormData()
        formData.append("file",UploadImg)
        formData.append("upload_preset","vitamim")
        setLoading(1)
        axios.post("https://api.cloudinary.com/v1_1/vitamim/image/upload",formData)
        .then((res)=>{
            setImage(res.data.url)
            setLoading(0)
        })
    }
    function PostMim(){
        const Mim = {
            user: User._id,
            user_name:User.ten_tai_khoan,
            mim_src: Image,
            avatar:User.avatar,
            caption: document.getElementById('status').value,
            hashtag: document.getElementById('hashtag').value,
            categ: document.getElementById('category').value,
        }
        // console.log(newMem)
        axios.post('http://localhost:4000/upload/img', Mim)
            .then(res => console.log(res.data));
        alert("Your mim is mine!!")
        localStorage.removeItem('showdangmim')
        window.location = "/"
    }
    return (
        <div className="dangmim-overlay">
            <form className="dangmim-content">
                <div className="dangmim-header">
                    <p className="dangmim-template">Template</p>
                    <p className="dangmim-tieude">Đăng mim</p>
                    <img src="../source/exit.png" className="dangmim-exit" alt="exit" onClick={()=>{localStorage.removeItem('showdangmim');window.location.reload()}}/>
                </div>
                <div className="dangmim-title">
                    <div className="dangmim-input">
                        <p className="dangmim-post">Post</p>
                        <textarea type="text" className="dangmim-status" id="status" placeholder="Hôm nay bạn mang gì đến?"></textarea>
                        <p className="dangmim-post">Hashtag</p>
                        <input type="text" className="dangmim-hashtag" id="hashtag" placeholder="Hashtag" />
                        <p className="dangmim-post">Thể loại</p>
                        <select className="dangmim-hashtag" id="category">
                            <option value="Mim thường">Mim thường</option>
                            <option value="Dark mim">Dark mim</option>
                            <option value="Cs mim">Cs mim</option>
                            <option value="Hotmim">Hot mim</option>
                        </select>
                    </div>
                <div className="loadanh-overlay">
                <div className="dangmim-loadanh">
                        <div id="showanh" style={{backgroundImage:('url('+String(Image)+')')}}></div>
                        <input id="loadanh" type="file" onChange={(event)=>{setUploadImg(event.target.files[0])}} />
                    </div>
                    <img className="upload-button" src="../source/upload.jpg"  onClick={Upload}/>
                </div>
                </div>
                {Loading===1?<p>Loading...</p>:''}
                <p className="dangmim-check-button" onClick={PostMim}>Đăng</p>
            </form>
        </div>
    )
}
export default DangMim