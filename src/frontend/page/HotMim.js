import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import TopTrending from "../components/TopTrending"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import {UserPosts,dangmim,CheckLogin} from "../Constant/Variable"

function HotMim(){
    return (
        <React.Fragment>
            <Header log={CheckLogin} />
            <SubHeader />
            <TopTrending />
            <ShowMim Post={UserPosts} />
            {JSON.parse(localStorage.getItem('showdangmim'))== 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default HotMim