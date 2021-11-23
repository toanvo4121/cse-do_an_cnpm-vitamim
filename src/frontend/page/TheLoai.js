import React from 'react'

import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import TopTrending from "../components/TopTrending"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import ShowPost from '../components/ShowPost'
import {UserPosts,dangmim,post,CheckLogin} from "../Constant/Variable"

function TheLoai(){
    return (
        <React.Fragment>
            <Header log={CheckLogin} />
            <SubHeader />
            <TopTrending />
            <ShowMim Post={UserPosts} />
            {dangmim === 1 ? <DangMim /> : ''}
            {post === '' ? '' : <ShowPost userpost={post} />}
        </React.Fragment>
    )
}
export default TheLoai