import React from 'react'

import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import ShowTemplate from "../components/ShowTemplate"
import DangMim from "../components/DangMim"
import {dangmim,CheckLogin} from "../Constant/Variable"

function Template(){
    return (
        <React.Fragment>
            <Header log={CheckLogin} />
            <SubHeader />
            <ShowTemplate />
            {JSON.parse(localStorage.getItem('showdangmim'))== 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default Template