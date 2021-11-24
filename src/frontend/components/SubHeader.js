import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link } from "react-router-dom"
const User = JSON.parse(localStorage.getItem('user'))

function SubHeader() {
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
                <p className="sub" onClick={ClickDangMim}>Đăng mim</p>
                <Link to="/template"><p className="sub">Template</p></Link>
            </div>
        </React.Fragment>
    )
}
export default SubHeader