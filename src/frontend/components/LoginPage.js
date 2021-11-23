import React from 'react';
import './style.css';
import {Link} from "react-router-dom"
import axios from "axios"
import {useState} from 'react'


function LoginPage() {
    const [MemberList,setMemberList] = useState("")
    axios.get('http://localhost:4000/Member')
            .then(response => {
                console.log(response.data);
                // setMemberList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    console.log( "hihi"+MemberList)
    let check=0
    function Login() {

        if (document.getElementById("mail").value === "Halee" && document.getElementById("pass").value === "123123") {
            check = 1
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
    return (
        <div className="login-page">
            <div className="logo">
                <img src="source/logo-page.png" alt="" />
                <p className="slogan">Ôi bạn ơi !!! <br />
                    Hôm nay chưa cười là <br />
                    tại thiếu Vitamim đấy !</p>
            </div>
            <form className="login-form" method="POST">
                <p className="dangnhap">Đăng nhập</p>
                <input className="login" name="q" id="mail" type="text" placeholder="Email" />
                <input className="login" name="pass" id="pass" type="password" placeholder="Mật khẩu" />
                <div className="check-login">Sai tài khoản/mật khẩu</div>
                <div className="btn">
                    {check==1?<Link to="/"><button type ="submit" id="login-btn" className="dangnhap" onClick={Login}>Login</button></Link>:<button type="submit" id="login-btn" className="dangnhap" onClick={Login}>Login</button>}
                    <Link to="/signup"><p id="signup-btn" >Sign up</p></Link>
                </div>
                <a href="forgotpass" className="forgot">Quên mật khẩu</a>
            </form>
        </div>
    )
}
export default LoginPage