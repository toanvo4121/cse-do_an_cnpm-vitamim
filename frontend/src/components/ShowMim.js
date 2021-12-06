import React from 'react';
import './style.css';

import ShowThongKe from '../components/ShowThongKe';
import UserPost from './UserPost';

function ShowMim({ Post }) {
    if (Post !== null) {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            {Post.map((UserPosts, index) =>
                                <UserPost key={index} Post={UserPosts} />
                            )}
                        </div>
                    </div>
                    <div className="main-content_thong-ke">
                        <ShowThongKe />
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/fb_lkegwt.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />

                            <img id="ig" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/ig_znx86q.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="main-content">
                <div className="main-content_overlay">
                    <div className="post">
                        <div className="main-content_main-title">
                            <p className="khong-tim-thay-mim">không tìm thấy mim của bạn</p>
                        </div>
                    </div>
                    <div className="main-content_thong-ke">
                        <ShowThongKe />
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="https://res.cloudinary.com/vitamim/image/upload/v1637943119/source/fb_lkegwt.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />
                            <img id="ig" src="https://res.cloudinary.com/vitamim/image/upload/v1637943120/source/ig_znx86q.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowMim
