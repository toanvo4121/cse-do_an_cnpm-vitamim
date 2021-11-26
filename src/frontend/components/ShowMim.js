import React from 'react';
import './style.css';

import ShowRank from '../components/ShowRank';
import ShowThongKe from '../components/ShowThongKe';
import UserPost from './UserPost';

function ShowMim({ Post, CheckRank }) {
    if (Post !==null) {
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
                        {CheckRank === 1 ? <ShowRank /> : <ShowThongKe />}
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="source/fb.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />

                            <img id="ig" src="source/ig.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
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
                        </div>
                    </div>
                    <div className="main-content_thong-ke">
                        {CheckRank === 1 ? <ShowRank /> : <ShowThongKe />}
                        <div className="footer">
                            <p>Contact us:</p>
                            <img id="fb" src="source/fb.png" alt="" onClick={() => { window.location = "https://www.facebook.com/hailinh.nguyen.359126/" }} />
                            <img id="ig" src="source/ig.png" alt="" onClick={() => { window.location = "https://www.instagram.com/halee_4u_/" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowMim