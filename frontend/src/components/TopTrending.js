import React from 'react';

import './style.css';

import {TopTrend} from "../Constant/Variable"

function TopTrending() {
    return (
        <div className="top-trending">
            <p className="top-trending_name">Top trending</p>
            <div className="top-trending_overlay">
                <img src="source/back.png" alt="" className="move" />
                {
                    TopTrend.map((trend, index) =>
                        <img className="trend" alt="" id={index} key={index} src={trend.src}></img>
                    )}
                <img src="source/next.png" alt="" className="move" />
            </div>
        </div>
    )
}
export default TopTrending