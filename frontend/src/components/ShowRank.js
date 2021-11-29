import React from 'react';

import './style.css';

import {Mem} from "../Constant/Variable"

function ShowRank() {
    return (
        <React.Fragment>
            <div className="danhhieu" style={{ backgroundImage: "url(https://res.cloudinary.com/vitamim/image/upload/v1637990482/source/danhhieu_juq5hk.png)" }}>
                <h4>Danh hiệu</h4>
                {Mem.danhhieu.map((ls, index) =>
                    <p>{ls}</p>
                )}
            </div>
            <div className="danhhieutamthoi" style={{ backgroundImage: "url(https://res.cloudinary.com/vitamim/image/upload/v1637990476/source/danhhieutamthoi_rduln5.png)" }}>
                <h4>Danh hiệu tạm thời</h4>
                {Mem.danhhieutamthoi.map((ls, index) =>
                    <p>{ls}</p>
                )}
            </div>
        </React.Fragment>
    )
}
export default ShowRank