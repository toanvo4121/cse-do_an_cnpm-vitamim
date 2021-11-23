import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { useState } from 'react';

function ShowPostDetail(userpost) {
    post = userpost
    ReactDOM.render(<HomePage />, document.getElementById("root"))
    // onClick={() => { handleShowOffTheLoai(); dangmim = 1; ReactDOM.render(<HomePage />, document.getElementById("root")) }}
}
