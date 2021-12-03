import React from 'react';
import { Carousel } from "react-bootstrap";
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { TopTrend } from "../Constant/Variable"

function TopTrending() {
    return (
        <div className="top-trending">
            <p className="top-trending_name">Top trending</p>

            <Carousel >
                <Carousel.Item >
                <div className="trending">
                        {TopTrend.map((trend, index) =>
                            <div className="trend" style={{ backgroundImage: ('url(' + String(trend.src) + ')') }}>
                                <div className="hover">
                                    <img className="download-icon" alt="" src="source/download.png" />
                                    <p>avt</p>
                                    <p>username</p>
                                    <p>caption</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="trending">
                        {TopTrend.map((trend, index) =>
                            <div className="trend" style={{ backgroundImage: ('url(' + String(trend.src) + ')') }}>
                                <div className="hover">
                                    <img className="download-icon" alt="" src="source/download.png" />
                                    <p>avt</p>
                                    <p>username</p>
                                    <p>caption</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className="trending">
                        {TopTrend.map((trend, index) =>
                            <div className="trend" style={{ backgroundImage: ('url(' + String(trend.src) + ')') }}>
                                <div className="hover">
                                    <img className="download-icon" alt="" src="source/download.png" />
                                    <p>avt</p>
                                    <p>username</p>
                                    <p>caption</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
export default TopTrending