import React from 'react';
import './style.css';
import {TopMem} from "../Constant/Variable"

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
export default ShowThongKe