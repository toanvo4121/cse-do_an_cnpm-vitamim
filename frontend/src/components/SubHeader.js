import React from 'react';
import './style.css';
import { Link } from "react-router-dom"
const User = JSON.parse(localStorage.getItem('user'))

function SubHeader({checkMim}) {
    if(checkMim === "mimthuong"){
        document.getElementsByClassName("sub")[0].style.backgroundColor="#efb14d";
        document.getElementsByClassName("sub")[0].style.color="#fff";
    }
    if(checkMim === "darkmim"){
        document.getElementsByClassName("sub")[1].style.backgroundColor="#efb14d";
        document.getElementsByClassName("sub")[1].style.color="#fff";
    }
    if(checkMim === "csmim"){
        document.getElementsByClassName("sub")[2].style.backgroundColor="#efb14d";
        document.getElementsByClassName("sub")[2].style.color="#fff";
    }
    if(checkMim === "hotmim"){
        document.getElementsByClassName("sub")[3].style.backgroundColor="#efb14d";
        document.getElementsByClassName("sub")[3].style.color="#fff";
    }
    if(checkMim === "template"){
        document.getElementsByClassName("sub")[5].style.backgroundColor="#efb14d";
        document.getElementsByClassName("sub")[5].style.color="#fff";
    }
    function ClickDangMim() {
        if (User !== null) {
            localStorage.setItem('showdangmim', JSON.stringify(1));
            window.location.reload();
        }
        else{
            window.location = '/login'
        }
    }

    return (
        <React.Fragment>
            <div className="sub-header-space"></div>
            <div className="sub-header">
                <Link to="/mimthuong"><p  className="sub">Mim thường</p></Link>
                <Link to="/darkmim"><p className="sub" >Dảk mim</p></Link>
                <Link to="/csmim"><p className="sub" >CS mim</p></Link>
                <Link to="/hotmim"><p className="sub" >Hot mim</p></Link>
                <Link to=""><p className="sub" onClick={ClickDangMim}>Đăng mim</p></Link>
                <Link to="/template"><p className="sub">Template</p></Link>
            </div>
        </React.Fragment>
    )
}
export default SubHeader