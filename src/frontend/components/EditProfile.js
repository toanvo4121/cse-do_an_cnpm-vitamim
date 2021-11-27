import React, { useState } from 'react';
import './style.css';
import axios from "axios"
import { Ngay, Thang, Nam } from "../Constant/Variable"

const User = JSON.parse(localStorage.getItem('user'))
const getUsers = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function EditProfile() {
    const [UploadImg,setUploadImg] = useState("")
    const [Loading,setLoading] = useState(0)
    const [Image,setImage] = useState("")
    const [Users,setUsers] = useState("")
    if (Users === "") {
        getUsers().then((res) => {
            setUsers(res.find(p=>p._id == User._id))  
        })
    }
if(Users){
    if(Image === "" )
    {
        setImage(Users.avatar)
    }
}

    const Upload = ()=>{
        const formData = new FormData()
        formData.append("file",UploadImg)
        formData.append("upload_preset","avatar")
        setLoading(1)
        axios.post("https://api.cloudinary.com/v1_1/vitamim/image/upload",formData)
        .then((res)=>{
            setImage(res.data.url)
            setLoading(0)
        })
    }
    if(UploadImg!==""){
        document.getElementById("upload-avt").style.opacity = 1;
    }
    const ChangeUserInfo = ()=>{
        let Img;
        if(document.getElementById('loadavt').value == '')
        {
            Img = Users.avatar
        }
        else{
            Img = Image
        }
        const newInfo = {
            email:Users.email,
            _id:Users._id,
            so_bai_viet:User.so_bai_viet,
            ho: document.getElementById('ho').value,
            ten: document.getElementById('ten').value,
            ten_tai_khoan: document.getElementById('username').value,
            avatar:Img,
            slogan: document.getElementById('slogan').value,
            ngay_sinh: document.getElementById('ngay').value,
            thang_sinh: document.getElementById('thang').value,
            nam_sinh: document.getElementById('nam').value,
            gioi_tinh: document.getElementById('gioitinh').value,
        }
        // console.log(newMem)
        axios.post('http://localhost:4000/Member/update/'+String(Users._id), newInfo)
            .then(res => console.log(res.data));
            localStorage.setItem('user',JSON.stringify(newInfo))
        alert("cập nhật tài khoản thành công")
        window.location = '/edit-profile'
    }
    return (
        <div className="ViewOwnPage-overlay">
            <div className="ownpage-header">
                <div className="edit-user">
                    <div className="edit-user1">
                    <div id="showavt" style={{ backgroundImage: ('url(' + String(Image) + ')') }}></div>
                    <img id="loadavt1" src="source/camera.png" />
                    <input id="loadavt" type="file" onChange={(event)=>{console.log(event.target.files[0]);setUploadImg(event.target.files[0])}}/>
                    </div>
                    <button  id="upload-avt" onClick={Upload}>upload</button>
                </div>
                
                <div className="ownpage-info">
                    <form action="" className="signup-form" >
                        <div className="signup1">
                            <input className="signup" id="ho" type="text" placeholder="Họ" defaultValue={Users.ho}/>
                            <input className="signup" id="ten" type="text" placeholder="Tên"  defaultValue={Users.ten}/>
                        </div>
                        <input className="signup" id="username" type="text" placeholder="Tên người dùng"  defaultValue={Users.ten_tai_khoan}/>
                        <input className="signup" id="slogan" type="text" placeholder="Slogan"  defaultValue={Users.slogan}/>
                        <div className="birthday">
                            <p>Ngày sinh</p>
                            <p className="thangsinh">Tháng sinh</p>
                            <p>Năm sinh</p>
                        </div>
                        <div className="signup2">
                            <select name="ngay" id="ngay" aria-label="Ngày" title="Ngày"  defaultValue={Users.ngay_sinh}>
                                {Ngay.map((ngay, index) =>
                                    <option defaultValue={ngay} key={index}>{ngay}</option>
                                )}
                            </select>
                            <select name="thang" id="thang" aria-label="Tháng" title="Tháng"  defaultValue={Users.thang_sinh}>
                                {Thang.map((thang, index) =>
                                    <option defaultValue={thang} key={index}>{thang}</option>
                                )}
                            </select>
                            <select name="nam" id="nam" aria-label="Năm" title="Năm sinh"  defaultValue={Users.nam_sinh}>
                                {Nam.map((nam, index) =>
                                    <option defaultValue={nam} key={index}>{nam}</option>
                                )}
                            </select>
                        </div>
                        <div className="gent">
                            <p>Giới tính:</p>
                            <select name="gioitinh" id="gioitinh" aria-label="Giới tính" title="Giới tính"  defaultValue={Users.gioi_tinh}>
                                <option defaultValue="nam">Nam</option>
                                <option defaultValue="nu">Nữ</option>
                                <option defaultValue="khac">Khác</option>

                            </select>
                        </div>
                        <div className="button">
                            <p className="xacnhan" onClick={ChangeUserInfo}>Xác nhận</p>
                            <p className="huybo">Hủy bỏ</p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}
export default EditProfile