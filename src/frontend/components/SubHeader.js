import React from 'react';
import './style.css';
import { useState } from 'react';
import {Link} from "react-router-dom"

function SubHeader() {
    function TheLoai() {
        return (
            <div className="theloai">
                <Link to="/mimthuong"><p onClick={() => { handleShowOffTheLoai(); }}>Mim thường</p></Link>
                <Link to="/darkmim"><p onClick={() => { handleShowOffTheLoai();  }}>Dảk mim</p></Link>
                <Link to="/csmim"><p onClick={() => { handleShowOffTheLoai();  }}>CS mim</p></Link>
                <Link to="/hotmim"><p onClick={() => { handleShowOffTheLoai();  }}>Hot mim</p></Link>
            </div>
        )
    }
    const [showTheLoai, setShowTheLoai] = useState(0)
    const handleShowTheLoai = () => {
        if (showTheLoai === 0) {
            setShowTheLoai(showTheLoai + 1)
        }
        else {
            setShowTheLoai(showTheLoai - 1)
        }
    }
    const handleShowOffTheLoai = () => {
        if (showTheLoai === 0) {
            setShowTheLoai(showTheLoai + 0)
        }
        else {
            setShowTheLoai(showTheLoai - 1)
        }
    }

    return (
        <React.Fragment>
            <div className="sub-header-space"></div>
            <div className="sub-header">
                <div className="sub" onClick={handleShowTheLoai} >
                    <p>Thể loại</p>
                    <img src="source/tamgiacxoxuong.png" className="tamgiacxoxuong1" alt="" />
                </div>
                <div className="control-overlay"></div>
                {showTheLoai === 1 ? <TheLoai /> : ''}
                <Link to="/follow"><p className="sub" onClick={() => { handleShowOffTheLoai(); }}>Follow</p></Link>
                <Link to="dangmim"><p className="sub" onClick={() => { handleShowOffTheLoai(); }}>Đăng mim</p></Link>
                <Link to="/template"><p className="sub" onClick={() => { handleShowOffTheLoai(); }}>Template</p></Link>
                <Link to="/binhchon"><p className="sub" onClick={() => { handleShowOffTheLoai(); }}>Bình chọn</p></Link>
            </div>
        </React.Fragment>
    )
}
export default SubHeader