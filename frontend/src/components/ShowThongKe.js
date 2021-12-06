import React from 'react';
import './style.css';
import axios from "axios"
import { useState } from 'react'

const getUser = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)

function InterchangeSort(a, n, ans, avt, id) {
    var i, j
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (a[i].so_bai_viet < a[j].so_bai_viet) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
        ans.push(a[i].ten_tai_khoan)
        avt.push(a[i].avatar)
        id.push(a[i]._id)
    }
}

function ShowThongKe() {
    const [User, setUser] = useState("")
    if (User === "") {
        getUser().then((res) => {
            setUser(res)
        })
    }
    let ans = []
    let avt = []
    let id = []
    InterchangeSort(User, User.length, ans, avt, id)

    function ShowUserPage(User){
        localStorage.setItem('userpage',JSON.stringify(User))
        window.location = "/userpage/"+User
    }
    return (
        <React.Fragment>
            <div className="top-thang">
                <h3 className="topdanhhaithang">Top danh hài:</h3>

                <div className="top-mem">
                    <div className="mem">
                        <h3>{1}</h3>
                        <img src={avt[0]} alt="" className="top-avt" />
                        <div className="user">
                            <h3 className="user-name" onClick={()=>{ShowUserPage(id[0])}}>{ans[0]}</h3>
                            <span class="tooltiptext">Xem trang cá nhân</span>
                        </div>

                    </div>
                    <div className="mem">
                        <h3>{2}</h3>
                        <img src={avt[1]} alt="" className="top-avt" />
                        <div className="user">
                            <h3 className="user-name" onClick={()=>{ShowUserPage(id[1])}}>{ans[1]}</h3>
                            <span class="tooltiptext">Xem trang cá nhân</span>
                        </div>
                    </div>

                    <div className="mem">
                        <h3>{3}</h3>
                        <img src={avt[2]} alt="" className="top-avt" />
                        <div className="user">
                            <h3 className="user-name" onClick={()=>{ShowUserPage(id[2])}}>{ans[2]}</h3>
                            <span class="tooltiptext">Xem trang cá nhân</span>
                        </div>
                    </div>

                    <div className="mem">
                        <h3>{4}</h3>
                        <img src={avt[3]} alt="" className="top-avt" />
                        <div className="user">
                            <h3 className="user-name" onClick={()=>{ShowUserPage(id[3])}}>{ans[3]}</h3>
                            <span class="tooltiptext">Xem trang cá nhân</span>
                        </div>
                    </div>


                    <div className="mem">
                        <h3>{5}</h3>
                        <img src={avt[4]} alt="" className="top-avt" />
                        <div className="user">
                            <h3 className="user-name" onClick={()=>{ShowUserPage(id[4])}}>{ans[4]}</h3>
                            <span class="tooltiptext">Xem trang cá nhân</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ads">
                <p>Ads</p>
                <div className="ads-info" style={{ backgroundImage: "url(https://res.cloudinary.com/vitamim/image/upload/v1638640102/source/ads_mz1rwf.png)" }}></div>
            </div>
        </React.Fragment>
    )
}
export default ShowThongKe