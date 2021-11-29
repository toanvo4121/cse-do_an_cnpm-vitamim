import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import ShowTemplate from "../components/ShowTemplate"
import DangMim from "../components/DangMim"
import { useState } from 'react'
import axios from 'axios'

const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
function Template(){
    const [Posts,setPosts] = useState(null)
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res.filter(p=>p.categ === "Cs mim"))  
        })
    }
    if(Posts !== null){
        return (
            <React.Fragment>
                <Header />
                <SubHeader  checkMim={"template"}/>
                <ShowTemplate />
                {JSON.parse(localStorage.getItem('showdangmim')) === 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <Header />
                <SubHeader />
                <ShowTemplate />
                {JSON.parse(localStorage.getItem('showdangmim')) === 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }

}
export default Template