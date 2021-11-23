import React from 'react';

import './style.css';

import {Template} from "../Constant/Variable"

function ShowTemplate() {
    return (
        <div className="template-overlay">
            {Template.map((temp, index) =>
                <div className="template" style={{ backgroundImage: temp }}></div>

            )}
        </div>
    )
}
export default ShowTemplate