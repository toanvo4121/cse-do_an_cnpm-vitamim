import React from 'react';
import './style.css';
import { Ngay, Thang, Nam } from "../Constant/Variable"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react';
const getMemberList = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function SignUpPage() {
    const [MemberList, setMemberList] = useState(null)
    if (MemberList === null) {
        getMemberList().then((res) => {
            setMemberList(res)
        })
    }
    function AcpSignUp(list) {
        console.log(list)
        let check = 0;
        for (let i = 0; i < document.getElementsByClassName("signup").length; i++) {
            if (document.getElementsByClassName("signup")[i].value === "") {
                document.getElementsByClassName("signup")[i].style.border = '1px solid red';
                document.getElementsByClassName("error")[0].style.display = 'block';
                setTimeout(() => {
                    document.getElementsByClassName("error")[0].style.display = 'none';
                }, 3000)
                check += 1
            }
        }
        for (let i = 0; i < list.length; i++) {
            if (document.getElementById("email").value === list[i].email) {
                document.getElementsByClassName("signup")[4].style.border = '1px solid red';
                if(check === 0){
                    document.getElementsByClassName("error1")[0].style.display = 'block';
                    setTimeout(() => {
                        document.getElementsByClassName("error1")[0].style.display = 'none';
                    }, 3000)
                }
                check += 1
            }
        }
        console.log(check)
        if (check === 0) {
            // alert("Đăng ký tài khoản thành công")

            const newMem = {
                ho: document.getElementById('ho').value,
                ten: document.getElementById('ten').value,
                ten_tai_khoan: document.getElementById('username').value,
                mat_khau: document.getElementById('password').value,
                email: document.getElementById('email').value,
                ngay_sinh: document.getElementById('ngay').value,
                thang_sinh: document.getElementById('thang').value,
                nam_sinh: document.getElementById('nam').value,
                gioi_tinh: document.getElementById('gioitinh').value,
            }
            // console.log(newMem)
            axios.post('http://localhost:4000/Member/signup', newMem)
                .then(res => console.log(res.data));
            alert("added")
            // window.location = '/login'
        }
    }
    return (
        <div className="signup-page" id="signup-page">
            <div className="background">
                <div className="head">
                    <p className="dangky">Đăng ký</p>
                    <Link to="/login"><img className="exit-button" id="exit-button" src="source/exit.png" alt="" /></Link>
                </div>
                <form action="" className="signup-form" >
                    <div className="signup1">
                        <input className="signup" id="ho" type="text" placeholder="Họ" autoFocus />
                        <input className="signup" id="ten" type="text" placeholder="Tên" />
                    </div>
                    <input className="signup" id="username" type="text" placeholder="Tên người dùng" />
                    <input className="signup" id="password" type="text" placeholder="Mật khẩu" />
                    <input className="signup" id="email" type="text" placeholder="Email" />
                    <div className="birthday">
                        <p>Ngày sinh</p>
                        <p className="thangsinh">Tháng sinh</p>
                        <p>Năm sinh</p>
                    </div>
                    <div className="signup2">
                        <select name="ngay" id="ngay" aria-label="Ngày" title="Ngày">
                            {Ngay.map((ngay, index) =>
                                <option value={ngay} key={index}>{ngay}</option>
                            )}
                        </select>
                        <select name="thang" id="thang" aria-label="Tháng" title="Tháng">
                            {Thang.map((thang, index) =>
                                <option value={thang} key={index}>{thang}</option>
                            )}
                        </select>
                        <select name="nam" id="nam" aria-label="Năm" title="Năm sinh">
                            {Nam.map((nam, index) =>
                                <option value={nam} key={index}>{nam}</option>
                            )}
                        </select>
                    </div>
                    <div className="gent">
                        <p>Giới tính:</p>
                        <select name="gioitinh" id="gioitinh" aria-label="Giới tính" title="Giới tính">
                            <option value="nam">Nam</option>
                            <option value="nu">Nữ</option>
                            <option value="khac">Khác</option>

                        </select>
                    </div>
                </form>
                <div className="error">Vui lòng điền đầy đủ thông tin cá nhân</div>
                <div className="error1">Email đã tồn tại</div>
                <p className="dieukhoan">Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="dieukhoan.html" target="_blank">Điều khoản</a>, <a href="dieukhoan.html" target="_blank">Chính sách dữ liệu</a> và <a href="dieukhoan.html" target="_blank">Chính
                    sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
                    hủy nhận bất kỳ lúc nào.
                </p>
                <p className="signup-btn" id="signup-acp" onClick={() => { AcpSignUp(MemberList) }} >Sign up</p>
            </div>
        </div >
    )
}
export default SignUpPage