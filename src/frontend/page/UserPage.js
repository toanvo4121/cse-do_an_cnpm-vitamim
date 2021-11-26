import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import ViewUserPage from "../components/ViewUserPage"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import {useState} from 'react'
import axios from 'axios'
const user_id = JSON.parse(localStorage.getItem('userpage'))
const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
function OwnPage(){
    const [Posts,setPosts] = useState(null)
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res.filter(p=>p.user == user_id))   
        })
    }
    return (
        <React.Fragment>
            <Header/>
            <SubHeader />
            <ViewUserPage />
            <ShowMim Post={Posts} CheckRank={1}/>
            {JSON.parse(localStorage.getItem('showdangmim'))== 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default OwnPage