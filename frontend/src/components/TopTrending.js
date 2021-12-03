import React from 'react';
import { Carousel } from "react-bootstrap";
import './style.css';
import { useState } from 'react'
import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';

import { TopTrend } from "../Constant/Variable"

const getUser = () => axios.get('http://localhost:4000/Member')
    .then((res) => res.data)
const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)

function InterchangeSort(a, n, name, avt, id) {
    var i, j
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (a[i].so_bai_viet < a[j].so_bai_viet) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
        name.push(a[i].ten_tai_khoan)
        avt.push(a[i].avatar)
        id.push(a[i]._id)
    }
}


function pushPosts(a, n, scr, id) {
    var j, count = 0
    for (j = n - 1; j >= 0; j--) {
        if (a[j].user === id) {
            scr.push(a[j].mim_src)
            count = count + 1
            if (count === 3)
                break
        }
    }
}

function ShowUserPage(User) {
    localStorage.setItem('userpage', JSON.stringify(User))
    window.location = "/userpage/" + User
}


function TopTrending() {
    const [Users, setUsers] = useState("")
    const [Posts, setMims] = useState(null)

    if (Users === "") {
        getUser().then((res) => {
            setUsers(res)
        })
    }


    let name = []
    let avt = []
    let id = []
    InterchangeSort(Users, Users.length, name, avt, id)

    if (Posts === null) {
        getMims().then((res) => {
            setMims(res)
        })
    }

    let Top1 = []
    let Top2 = []
    let Top3 = []

    if (Posts) {
        pushPosts(Posts, Posts.length, Top1, id[0])
        pushPosts(Posts, Posts.length, Top2, id[1])
        pushPosts(Posts, Posts.length, Top3, id[2])
    }


    if (Top1 && Top2 && Top3) {
        
        return (
            <div className="top-trending">
                <p className="top-trending_name">Nơi vinh danh</p>
                <Carousel >
                    <Carousel.Item >
                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[0]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[0]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[0]) }}><p className="user-name">{name[0]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[1]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[0]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[0]) }}><p className="user-name">{name[0]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[2]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[0]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[0]) }}><p className="user-name">{name[0]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[0]) + ')') }}>   
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[1]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[1]) }}><p className="user-name">{name[1]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[1]) + ')') }}>   
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[1]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[1]) }}><p className="user-name">{name[1]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                                <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[2]) + ')') }}>   
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[1]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[1]) }}><p className="user-name">{name[1]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="trending">
                               <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[0]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[2]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[2]) }}><p className="user-name">{name[2]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                               <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[1]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[2]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[2]) }}><p className="user-name">{name[2]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>

                        <div className="trending">
                               <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[2]) + ')') }}>
                                    <div className="hover">
                                        <div className="user-info">
                                            <img className="user-avt" src={avt[2]} alt="" />
                                            <div onClick={() => { ShowUserPage(id[2]) }}><p className="user-name">{name[2]}</p></div>
                                        </div>
                                    </div>
                               </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
    else {
        return (
            <div> qq </div>
        )
    }
}
export default TopTrending
