import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import AdminShowMim from "../components/AdminShowMim"
import TopTrending from "../components/TopTrending"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import { useState } from 'react'
import axios from 'axios'

const User = JSON.parse(localStorage.getItem('user'))

function Admin(){
        if(User.email !== "admin") {
            return(
                <React.Fragment>
                    <Header />
                    <SubHeader />
                    <div className="admin"><p className="quay-lai">Quay lại đi bạn, khum có gì ở đây đâu</p></div>
                </React.Fragment>
            )
        }
    
        return (
            <React.Fragment>
                <Header />
                <div className="admin"><p className="admin-duyetbai">Duyệt bài</p></div>
                <AdminShowMim />
            </React.Fragment>
        )
}
export default Admin