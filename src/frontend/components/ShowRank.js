import React from 'react';

import './style.css';

import {Mem} from "../Constant/Variable"

function ShowRank() {
    return (
        <React.Fragment>
            <div className="danhhieu" style={{ backgroundImage: "url(source/danhhieu.png)" }}>
                <h4>Danh hiệu</h4>
                {Mem.danhhieu.map((ls, index) =>
                    <p>{ls}</p>
                )}
            </div>
            <div className="danhhieutamthoi" style={{ backgroundImage: "url(source/danhhieutamthoi.png)" }}>
                <h4>Danh hiệu tạm thời</h4>
                {Mem.danhhieutamthoi.map((ls, index) =>
                    <p>{ls}</p>
                )}
            </div>
        </React.Fragment>
    )
}
export default ShowRank