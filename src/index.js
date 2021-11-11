import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { useState } from 'react'

const Ngay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const Thang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Nam = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const Halee =
{
    ten: 'Halee',
    avt: "source/avatar.png",
    sobaiviet: 969,
    songuoitheodoi: 6969,
    dangtheodoi: 5,
    chamngon: 'Muốn đẹp hả, book lịch chụp hình đi',
    danhhieu: ['Người đặt nền móng', 'Trmúa hmề', 'Nô lệ của mim'],
    danhhieutamthoi: ['Top 1 danh hài'],
    post: [
        {
            avt: 'source/avatar.png',
            ten: 'Halee',
            thoigian: 1,
            stt: 'Mực ống trò chơi',
            hashtag: ['#squidgame'],
            src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
            quadark: 127578,
            soweak: 18742,
            comment: 69237
        },
        {
            avt: 'source/avatar.png',
            ten: 'Halee',
            thoigian: 2,
            stt: 'Ai rồi cũng wibu thôi',
            hashtag: ['#wibuneverdie', '#2D'],
            src: 'url(mimCollection/146416864_454196045774516_3779436581273031988_n.png)',
            quadark: 118346,
            soweak: 24520,
            comment: 2701
        }
        ,
        {
            avt: 'source/avatar.png',
            ten: 'Halee',
            thoigian: 2,
            stt: 'Ai rồi cũng lỳ đòn thôi',
            hashtag: ['#lydonneverdie', '#3D'],
            src: 'url(mimCollection/163973021_796538227967231_4931855032479318559_n.png)',
            quadark: 118346,
            soweak: 24520,
            comment: 2701
        }
        ,
        {
            avt: 'source/avatar.png',
            ten: 'Halee',
            thoigian: 2,
            stt: 'Chiến',
            hashtag: ['#chien'],
            src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
            quadark: 328346,
            soweak: 23520,
            comment: 2701
        }
        ,
        {
            avt: 'source/avatar.png',
            ten: 'Halee',
            thoigian: 2,
            stt: 'I am hecker',
            hashtag: ['#hecker', '#123'],
            src: 'url(mimCollection/245545926_601516814326028_1385808038578148858_n.png)',
            quadark: 338346,
            soweak: 23520,
            comment: 2701
        }

    ]
}

const TopTrend = [
    {
        src: 'mimCollection/146416864_454196045774516_3779436581273031988_n.png',
        avt: 'url(source/avatar.png)',
        caption: 'Wibu never die'
    },
    {
        src: 'mimCollection/245545926_601516814326028_1385808038578148858_n.png',
        avt: 'url(source/avatar.png)',
        caption: 'Kích thước quan trọng đến thế sao'
    },
    {
        src: 'mimCollection/246736027_929307174647021_6619103308168609391_n.png',
        avt: 'url(source/avatar.png)',
        caption: 'Anh lúc nào cũng quát em'
    },
]

const UserPosts = [
    {
        avt: 'source/avatar.png',
        ten: 'Cuong-chan',
        thoigian: 1,
        stt: 'Mực ống trò chơi',
        hashtag: ['#squidgame'],
        src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
        quadark: 127578,
        soweak: 18742,
        comment: 69237
    },
    {
        avt: 'source/avatar.png',
        ten: 'Hiếu ưbu',
        thoigian: 2,
        stt: 'Ai rồi cũng wibu thôi',
        hashtag: ['#wibuneverdie', '#2D'],
        src: 'url(mimCollection/146416864_454196045774516_3779436581273031988_n.png)',
        quadark: 118346,
        soweak: 24520,
        comment: 2701
    }
    ,
    {
        avt: 'source/avatar.png',
        ten: 'Vua lỳ đòn',
        thoigian: 2,
        stt: 'Ai rồi cũng lỳ đòn thôi',
        hashtag: ['#lydonneverdie', '#3D'],
        src: 'url(mimCollection/163973021_796538227967231_4931855032479318559_n.png)',
        quadark: 118346,
        soweak: 24520,
        comment: 2701
    }
    ,
    {
        avt: 'source/avatar.png',
        ten: 'Halee',
        thoigian: 2,
        stt: 'Chiến',
        hashtag: ['#chien'],
        src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
        quadark: 328346,
        soweak: 23520,
        comment: 2701
    }
    ,
    {
        avt: 'source/avatar.png',
        ten: 'Hecker',
        thoigian: 2,
        stt: 'I am hecker',
        hashtag: ['#hecker', '#123'],
        src: 'url(mimCollection/245545926_601516814326028_1385808038578148858_n.png)',
        quadark: 338346,
        soweak: 23520,
        comment: 2701
    }

]
const TopMem = [
    {
        avt: 'source/avatar.png',
        ten: 'Cuong-chan',
    },
    {
        avt: 'source/avatar.png',
        ten: 'Vua lỳ đòn',
    },
    {
        avt: 'source/avatar.png',
        ten: 'Halee',
    },
    {
        avt: 'source/avatar.png',
        ten: 'Simping man',
    },
    {
        avt: 'source/avatar.png',
        ten: 'Hecker',
    },
]
const Template = [
    'url(mimCollection/48356849_362746981150509_6223672989343285248_n.png)',
    'url(mimCollection/91626282_497058477849395_7193176124573089792_n.png)',
    'url(mimCollection/94035464_881056835744847_3984311357997580288_n.png)',
    'url(mimCollection/94230016_369580090594018_2317354694093045760_n.png)',
    'url(mimCollection/96095050_2584396275160388_89774308364124160_n.png)',
    'url(mimCollection/120960544_348524053022204_3768758301972747615_n.png)',
    'url(mimCollection/146416864_454196045774516_3779436581273031988_n.png)',
    'url(mimCollection/163973021_796538227967231_4931855032479318559_n.png)',
    'url(mimCollection/165819033_793654891254092_8731506906666193824_n.png)',
    'url(mimCollection/171852952_1857874154379082_4012555645833695387_n.png)',
    'url(mimCollection/186477947_313018590230940_1229834090150472427_n.png)',
    'url(mimCollection/210077778_2834937850101204_7888799615534156345_n.png)',
    'url(mimCollection/241528980_385269686317893_2487540847898972778_n.png)',
    'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
    'url(mimCollection/243457440_1080669792675361_8038221607725427392_n.png)',
    'url(mimCollection/243582861_219276823483920_202759126065177358_n.png)',
    'url(mimCollection/243707229_1032498574231306_4787131948793908916_n.png)',
    'url(mimCollection/245545926_601516814326028_1385808038578148858_n.png)',
    'url(mimCollection/246736027_929307174647021_6619103308168609391_n.png)',
]


var SubTitle = 'theloai'
var dangmim;
var CheckLogin = 0
var Mem = Halee

function LoginPage() {
    function Login() {
        if (document.getElementById("mail").value === "Halee" && document.getElementById("pass").value === "123123") {
            // window.history.pushState(null,'','/homepage')
            // history.go(1)
            CheckLogin = 1
            SubTitle = 'theloai'
            ReactDOM.render(<HomePage />, document.getElementById("root"))
        }
        else {
            document.getElementsByClassName("check-login")[0].style.display = 'block';
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
            <div className="login-form">
                <p className="dangnhap">Đăng nhập</p>
                <input className="login" id="mail" type="text" placeholder="Tài khoản" />
                <input className="login" id="pass" type="password" placeholder="Mật khẩu" />
                <div className="check-login">Sai tài khoản/mật khẩu</div>
                <div className="btn">
                    <p id="login-btn" className="dangnhap" onClick={Login}>Login</p>
                    <p id="signup-btn" onClick={signup}>Sign up</p>
                </div>
                <a href="forgotpass" className="forgot">Quên mật khẩu</a>
            </div>
        </div>
    )
}
function SignUpPage() {
    function AcpSignUp() {
        let check = 0;
        for (let i = 0; i < document.getElementsByClassName("signup").length; i++) {
            if (document.getElementsByClassName("signup")[i].value === "") {
                document.getElementsByClassName("signup")[i].style.border = '1px solid red';
                document.getElementsByClassName("error")[0].style.display = 'block';
                check += 1;
            }
        }
        if (check === 0) {
            alert("Đăng ký tài khoản thành công")
            login()
        }
    }
    return (
        <div className="signup-page" id="signup-page">
            <div className="background">
                <div className="head">
                    <p className="dangky">Đăng ký</p>
                    <img className="exit-button" id="exit-button" src="source/exit.png" alt="" onClick={login} />
                </div>
                <form action="" className="signup-form" >
                    <div className="signup1">
                        <input className="signup" id="ho" type="text" placeholder="Họ" autoFocus />
                        <input className="signup" id="ten" type="text" placeholder="Tên" />
                    </div>
                    <input className="signup" id="username" type="text" placeholder="Tên tài khoản" />
                    <input className="signup" id="password" type="text" placeholder="Mật khẩu" />
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
                <p className="dieukhoan">Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="dieukhoan.html" target="_blank">Điều khoản</a>, <a href="dieukhoan.html" target="_blank">Chính sách dữ liệu</a> và <a href="dieukhoan.html" target="_blank">Chính
                    sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
                    hủy nhận bất kỳ lúc nào.
                </p>
                <p className="signup-btn" id="signup-acp" onClick={AcpSignUp} >Sign up</p>
            </div>
        </div >
    )
}
function RenderSignUpPage() {
    return (
        <React.Fragment>
            <LoginPage />
            <SignUpPage />
        </React.Fragment>
    )
}
function signup() {
    // history.pushState(null, '', '/signup')
    // history.go(1)
    ReactDOM.render(<RenderSignUpPage />, document.getElementById("root"))
}
function login() {
    // history.pushState(null,'','/login')
    //         history.go(1)
    ReactDOM.render(<LoginPage />, document.getElementById("root"))
}

function Header({ log }) {
    function ShowControl() {
        return (
            <React.Fragment>
                <div className="control-overlay"></div>
                <div className="control">
                    <p onClick={() => { handleShowOffControl(); SubTitle = 'viewownpage'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}><img src="source/avatar.png" />Xem trang cá nhân</p>
                    <p onClick={() => { handleShowOffControl()}}><img src="source/avatar.png" />Thông tin cá nhân</p>
                    <p onClick={() => { handleShowOffControl()}}><img src="source/avatar.png" />Trợ giúp & hỗ trợ</p>
                    <p onClick={() => { handleShowOffControl();SubTitle = 'theloai'; CheckLogin = 0; ReactDOM.render(<HomePage />, document.getElementById("root")) }}><img src="source/avatar.png" />Đăng xuất</p>
                </div>
            </React.Fragment>
        )
    }
    const [show, setShowControl] = useState(0)
    const handleControl = () => {
        show === 1 ? setShowControl(show - 1) : setShowControl(show + 1)
    }
    const handleShowOffControl = () => {
        show === 1 ? setShowControl(show - 1) : setShowControl(show + 0)
    }
    if (log === 0) {
        return (
            <div className="header">
                <img src="source/logo-page.png" onClick={window.location.reload} alt="" className="Logo" />
                <div className="search-bar">
                    <input type="text" className="search" placeholder="Search..." />
                    <img src="source/search-button.png" alt="" className="search-button" />
                </div>
                <div className="header-btn">
                    <p className="signup-btn" onClick={signup}>Signup</p>
                    <p className="login-btn" onClick={login}>Login</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="header">
                <img src="source/logo-page.png" onClick={window.location.reload} alt="" className="Logo" />
                <div className="search-bar">
                    <input type="text" className="search" placeholder="Search..." />
                    <img src="source/search-button.png" alt="" className="search-button" />
                </div>
                <div className="UserInfo">
                    <div className="name"><p>{Mem.ten}</p></div>
                    <img src={Mem.avt} className="avt" alt="" />
                    <img src="source/tamgiacxoxuong.png" className="tamgiacxoxuong" alt="" onClick={handleControl} />
                    {show === 1 ? <ShowControl /> : ''}
                </div>
            </div>
        )
    }
}


function SubHeader() {
    function TheLoai() {
        return (
            <div className="theloai">
                <p onClick={() => { handleShowOffTheLoai(); SubTitle = 'mimthuong'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Mim thường</p>
                <p onClick={() => { handleShowOffTheLoai(); SubTitle = 'darkmim'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Dảk mim</p>
                <p onClick={() => { handleShowOffTheLoai(); SubTitle = 'csmim'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>CS mim</p>
                <p onClick={() => { handleShowOffTheLoai(); SubTitle = 'hotmim'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Hot mim</p>
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
                <p className="sub" onClick={() => { handleShowOffTheLoai(); SubTitle = 'follow'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Follow</p>
                <p className="sub" onClick={() => { handleShowOffTheLoai(); dangmim = 1; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Đăng mim</p>
                <p className="sub" onClick={() => { handleShowOffTheLoai(); SubTitle = 'template'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Template</p>
                <p className="sub" onClick={() => { handleShowOffTheLoai(); SubTitle = 'binhchon'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Bình chọn</p>
            </div>
        </React.Fragment>
    )
}

function TopTrending() {
    return (
        <div className="top-trending">
            <p className="top-trending_name">Top trending</p>
            <div className="top-trending_overlay">
                <img src="source/back.png" alt="" className="move" />
                {
                    TopTrend.map((trend, index) =>
                        <img className="trend" id={index} key={index} src={trend.src}></img>
                    )}
                <img src="source/next.png" alt="" className="move" />
            </div>
        </div>
    )
}

function ShowThongKe() {
    return (
        <React.Fragment>
            <div className="top-thang">
                <p className="topdanhhaithang">Top danh hài tháng:</p>
                {TopMem.map((top, index) =>
                    <div className="top-mem" id={index}>
                        <h5>{index}</h5>
                        <img src={top.avt} alt="" className="top-avt" />
                        <p>{top.ten}</p>
                    </div>
                )}
            </div>
            <div className="ads">
                <p>Ads</p>
                <div className="ads-info" style={{ backgroundImage: "url(source/ads.png)" }}></div>
            </div>
        </React.Fragment>
    )
}

function ShowRank(){
    return(
        <React.Fragment>
            <div className="danhhieu" style={{ backgroundImage: "url(source/danhhieu.png)" }}>
                <h4>Danh hiệu</h4>
                {Mem.danhhieu.map((ls,index)=>
                <p>{ls}</p>
                )}
            </div>
            <div className="danhhieutamthoi" style={{ backgroundImage: "url(source/danhhieutamthoi.png)" }}>
            <h4>Danh hiệu tạm thời</h4>
                {Mem.danhhieutamthoi.map((ls,index)=>
                <p>{ls}</p>
                )}
            </div>
        </React.Fragment>
    )
}
function ShowMim({ Post, CheckRank }) {
    console.log(CheckRank)
    function convert(i) {
        if (i >= 1000) {
            return String((i - (i % 1000)) / 1000) + "k"
        }
        else {
            return String(i)
        }
    }
    return (
        <div className="main-content">
            <div className="main-content_overlay">
                <div className="post">
                    <div className="main-content_main-title">
                        {Post.map((UserPost, index) =>
                            <div className="user-post">
                                <div className="user-info">
                                    <img className="user-avt" src={UserPost.avt} alt="" />
                                    <p className="user-name">{UserPost.ten}</p>
                                    <img src="source/follow-icon.png" />
                                    <div className="space" ></div>
                                    <img className="timer" src="source/clock.png" alt="" />
                                    <p className="thoigian">{UserPost.thoigian} giờ</p>
                                </div>
                                <p className="status">{UserPost.stt} {UserPost.hashtag}</p>
                                <div className="mim" style={{ backgroundImage: UserPost.src }}></div>
                                <div className="react">
                                    <div className="react1" style={{ backgroundImage: 'url(source/react1.png)' }}></div>
                                    <div className="count">{convert(UserPost.quadark)}</div>
                                    <div className="react2" style={{ backgroundImage: 'url(source/react2.png)' }}></div>
                                    <div className="count">{convert(UserPost.soweak)}</div>
                                    <img src="source/comment.png" alt="" className="comment" />
                                    <div className="count">{convert(UserPost.comment)}</div>
                                    <div className="space" ></div>
                                    {(UserPost.ten===Mem.ten && CheckLogin === 1)?<img src="source/del.png" alt="" className="del-btn" />:<img src="source/report.png" alt="" className="del-btn" /> }
                                    {(UserPost.ten===Mem.ten && CheckLogin === 1)?<div className="count">Xóa bài</div>:<div className="count">Report</div> }
                                </div>
                            </div>
                        )}
                    </div>


                </div>
                <div className="main-content_thong-ke">
                    {CheckRank ===1?<ShowRank/>:<ShowThongKe />}
                    <div className="footer">
                        <p>Contact us:</p>
                        <img id="fb" src="source/fb.png" alt="" />
                        <img id="ig" src="source/ig.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
function ShowTemplate() {
    return (
        <div className="template-overlay">
            {Template.map((temp, index) =>
                <div className="template" style={{ backgroundImage: temp }} ></div>

            )}
        </div>
    )
}
function DangMim() {
    return (
        <div className="dangmim-overlay">
            <div className="dangmim-content">
                <div className="dangmim-header">
                    <p className="dangmim-template"  onClick={() => {SubTitle = 'template'; ReactDOM.render(<HomePage />, document.getElementById("root")) }}>Template</p>
                    <p className="dangmim-tieude">Đăng mim</p>
                    <img src="source/exit.png" className="dangmim-exit" onClick={() => { dangmim = 0; ReactDOM.render(<HomePage />, document.getElementById("root")) }} />
                </div>
                <div className="dangmim-title">
                    <div className="dangmim-input">
                        <p className="dangmim-post">Post</p>
                        <input type="text" className="dangmim-status" placeholder="Hôm nay bạn mang gì đến?" />
                    </div>
                    <div className="dangmim-loadanh"></div>
                </div>
                <p className="dangmim-check-button">Đăng</p>
            </div>
        </div>
    )
}
function ViewOwnPage() {
    return (
        <React.Fragment>
            <div className="ownpage-header">
                <div className="ownpage-user">
                    <img src={Mem.avt} className="ownpage-avt" alt="" />
                    <div className="ownpage-name"><p>{Mem.ten}</p></div>
                </div>
                <div className="ownpage-info">
                    <div className="ownpage-header-subcrible">
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{color:'#efb14d'}}>{Mem.sobaiviet}</p><br />Số bài viết </div>
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{color:'#a1a1ef'}}>{Mem.songuoitheodoi}</p><br />Số người theo dõi</div>
                        <div className="ownpage-header-sub"><p className="ownpage-header-sub-count" style={{color:'#e16de1'}}>{Mem.dangtheodoi}</p><br />Đang theo dõi</div>
                    </div>
                    <div className="ownpage-info-border"><p className="ownpage-info-chamngon">{Mem.chamngon}</p></div>
                </div>

            </div>
        </React.Fragment>
    )
}
function HomePage() {
    if (SubTitle === 'theloai') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'mimthuong') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'darkmim') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'csmim') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'hotmim') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'follow') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'template') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <ShowTemplate />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'binhchon') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={UserPosts} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
    if (SubTitle === 'viewownpage') {
        return (
            <React.Fragment>
                <Header log={CheckLogin} />
                <SubHeader />
                <ViewOwnPage />
                <ShowMim Post={Mem.post} CheckRank={1} />
                {dangmim===1?<DangMim />:''}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<HomePage />, document.getElementById("root"))