import React, { useState } from 'react';
import './style.css';

function DangMim() {
    const [urlImg,seturlImg] = useState('')
    const loadimg=()=>{
        seturlImg(document.getElementById('loadanh').value)
    }
    return (
        <div className="dangmim-overlay">
            <div className="dangmim-content">
                <div className="dangmim-header">
                    <p className="dangmim-template">Template</p>
                    <p className="dangmim-tieude">Đăng mim</p>
                    <img src="../source/exit.png" className="dangmim-exit" alt="exit" onClick={()=>{localStorage.removeItem('showdangmim');window.location.reload()}}/>
                </div>
                <div className="dangmim-title">
                    <div className="dangmim-input">
                        <p className="dangmim-post">Post</p>
                        <input type="text" className="dangmim-status" placeholder="Hôm nay bạn mang gì đến?" />
                    </div>
                    <div className="dangmim-loadanh">
                        <input id="loadanh" type="file" onChange={loadimg} />
                        <img src = {urlImg}/>
                        </div>
                </div>
                <p className="dangmim-check-button">Đăng</p>
            </div>
        </div>
    )
}
export default DangMim