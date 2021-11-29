import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import ViewOwnPage from "../components/ViewOwnPage"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import {useState} from 'react'
import axios from 'axios'
const User = JSON.parse(localStorage.getItem('user'))
const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
function OwnPage(){
    const [Posts,setPosts] = useState(null)
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res.filter(p=>p.user === User._id))   
        })
    }
    return (
        <React.Fragment>
            <Header/>
            <SubHeader />
            <ViewOwnPage />
            <ShowMim Post={Posts} CheckRank={1}/>
            {JSON.parse(localStorage.getItem('showdangmim')) === 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default OwnPage