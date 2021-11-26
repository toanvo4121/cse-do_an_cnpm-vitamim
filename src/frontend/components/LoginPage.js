import React from 'react';
import './style.css';
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from 'react'
let login = -1
function Login(list) {
    for (let i = 0; i < list.length; i++) {
        if (document.getElementById("mail").value === list[i].email && document.getElementById("pass").value === list[i].mat_khau) {
            login = i
        }
    }
    if (login !== -1) {
            //post data to json
            var MemberInfo = list[login]
            MemberInfo = JSON.stringify(MemberInfo)
            localStorage.setItem('user',MemberInfo)
            if(document.getElementById("mail").value === "admin" && document.getElementById("pass").value === "admin")
            {
                window.location = '/admin'
            }
            else{
                window.location = '/'
            }
        
    }
    else {
        document.getElementsByClassName("check-login")[0].style.display = 'block';
        setTimeout(() => {
            document.getElementsByClassName("check-login")[0].style.display = 'none';
        }, 1000);
    }
}
for (let i = 0; i < document.getElementsByClassName("signup").length; i++) {
    document.getElementsByClassName("signup")[i].onclick = function () {
        document.getElementsByClassName("signup")[i].style.border = '1px solid black';
        document.getElementsByClassName("error")[0].style.display = 'none';
    }
}

const getMemberList = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function LoginPage() {
    const [MemberList, setMemberList] = useState(null)
    if (MemberList === null) {
        getMemberList().then((res) => {
            setMemberList(res)
        })
    }
    return (
        <div className="login-page">
            <div className="logo">
                <img src="source/logo-page.png" alt="" />
                <p className="slogan">Ôi bạn ơi !!! <br />
                    Hôm nay chưa cười là <br />
                    tại thiếu Vitamim đấy !</p>
            </div>
            <div className="login-form">
                <p className="dangnhap">Đăng nhập</p>
                <input className="login" name="q" id="mail" type="text" placeholder="Email" />
                <input className="login" name="pass" id="pass" type="password" placeholder="Mật khẩu" />
                <div className="check-login">Sai tài khoản/mật khẩu</div>
                <div className="btn">
                    <button id="login-btn" className="dangnhap" onClick={() => Login(MemberList)}>Login</button>
                    <Link to="/signup"><p id="signup-btn" >Sign up</p></Link>
                </div>
                {/* <a href="forgotpass" className="forgot">Quên mật khẩu</a> */}
            </div>
        </div>
    )

}
export default LoginPage