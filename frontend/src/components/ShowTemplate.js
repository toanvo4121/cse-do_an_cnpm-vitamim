import React from 'react';

import './style.css';

import { Template } from "../Constant/Variable"

function ShowTemplate() {
    return (
        <div className="template-overlay">
            {Template.map((temp, index) =>
                <a href={temp} className="templategr" download="">
                    <div className="template" style={{ backgroundImage: ('url(' + String(temp) + ')') }}>
                        <div className="hover">
                            <img className="download-icon" alt="" src="source/download.png" />
                        </div>
                    </div>
                </a>
            )}
        </div>
    )
}
export default ShowTemplate