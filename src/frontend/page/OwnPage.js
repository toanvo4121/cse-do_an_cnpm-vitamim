import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import ViewOwnPage from "../components/ViewOwnPage"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import {Mem,dangmim,CheckLogin} from "../Constant/Variable"

function OwnPage(){
    return (
        <React.Fragment>
            <Header log={CheckLogin} />
            <SubHeader />
            <ViewOwnPage />
            <ShowMim Post={Mem.post} CheckRank={1} />
            {dangmim === 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default OwnPage