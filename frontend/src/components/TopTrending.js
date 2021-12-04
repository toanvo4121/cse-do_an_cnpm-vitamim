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

function timeCalculate(time) {
    let d = new Date()
    if (time) {
        let x;
        let ngay = time.split("T")[0].split("-")
        // console.log('time')
        // console.log(time)
        let gio = time.split("T")[1].split(".")[0].split(":")
        if (parseInt(gio[0]) + 7 >= 24) {
            gio[0] = parseInt(gio[0]) + 7 - 24
            ngay[2] = parseInt(ngay[2]) + 1
            if (ngay[2] === 31 && parseInt(ngay[1]) === 11) {
                ngay[2] = 1
                ngay[1] = parseInt(12)
            }
        }
        else {
            gio[0] = parseInt(gio[0]) + 7
        }


        (d.getDate() - parseInt(ngay[2]) === 0) ?
        ((d.getHours() - parseInt(gio[0]) === 0)? 
        (x = String(d.getMinutes() - parseInt(gio[1]) <= 0 ? "Vừa xong" :
            (d.getMinutes() - parseInt(gio[1]) + " phút"))) :
            ((x = String(d.getHours() - parseInt(gio[0])) + " giờ"))):
            (x = String(ngay[2] + "/" + ngay[1] + "/" + ngay[0]))

        return x
    }
}

function pushPosts(a, n, scr, id) {
    var j, count = 0
    for (j = n - 1; j >= 0; j--) {
        if (a[j].user === id && a[j].isAccept !== 0) {
            scr.push(a[j].mim_src)
            //time.push(a[j].createdAt)
            count = count + 1
            if (count === 3)
                break
        }
    }
}

function pushTimes(a, n, scr, id) {
    var j, count = 0
    for (j = n - 1; j >= 0; j--) {
        if (a[j].user === id && a[j].isAccept !== 0) {
            scr.push(a[j].createdAt)
            //time.push(a[j].createdAt)
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
    let TimeTop1 = []
    let TimeTop2 = []
    let TimeTop3 = []

    if (Posts) {
        pushPosts(Posts, Posts.length, Top1, id[0])
        pushPosts(Posts, Posts.length, Top2, id[1])
        pushPosts(Posts, Posts.length, Top3, id[2])
        pushTimes(Posts, Posts.length, TimeTop1, id[0])
        pushTimes(Posts, Posts.length, TimeTop2, id[1])
        pushTimes(Posts, Posts.length, TimeTop3, id[2])
    }


    if (Top1 && Top2 && Top3 && TimeTop1 && TimeTop2 && TimeTop3) {

        return (
            <div className="top-trending">
                <p className="top-trending_name">Nơi vinh danh</p>
                <Carousel >
                    <Carousel.Item >
                        <div className="trending">
                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[0]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[0]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[0]} alt="" />
                                        <p className="trending-name">{name[0]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop1[0])}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[1]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[0]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[0]} alt="" />
                                        <p className="trending-name">{name[0]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop1[1])}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top1[2]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[0]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[0]} alt="" />
                                        <p className="trending-name">{name[0]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop1[2])}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="trending">
                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[0]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[1]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[1]} alt="" />
                                        <p className="trending-name">{name[1]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop2[0])}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[1]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[1]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[1]} alt="" />
                                        <p className="trending-name">{name[1]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop2[1])}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top2[2]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[1]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[1]} alt="" />
                                        <p className="trending-name">{name[1]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop2[2])}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="trending">
                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[0]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[2]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[2]} alt="" />
                                        <p className="trending-name">{name[2]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop3[0])}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[1]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[2]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[2]} alt="" />
                                        <p className="trending-name">{name[2]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop3[1])}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="trend" style={{ backgroundImage: ('url(' + String(Top3[2]) + ')') }}>
                                <div className="hov" onClick={() => { ShowUserPage(id[2]) }}>
                                    <div className="trending-info">
                                        <img className="trending-avt" src={avt[2]} alt="" />
                                        <p className="trending-name">{name[2]}</p>
                                    </div>
                                    <div className="trending-timer">
                                        <img className="time-clock" src="https://res.cloudinary.com/vitamim/image/upload/v1638602634/source/clock1_ovkoed.png" alt="" />
                                        <p className="trending-time">
                                            {timeCalculate(TimeTop3[2])}
                                        </p>
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
