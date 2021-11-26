import React from 'react'
import Header from "../components/Header"
import AdminShowMim from "../components/AdminShowMim"
import { useState } from 'react'
import axios from 'axios'


function DarkMim(){
        return (
            <React.Fragment>
                <Header />
                <div className="admin"><p className="admin-duyetbai">Duyệt bài</p></div>
                <AdminShowMim />
            </React.Fragment>
        )
}
export default DarkMim