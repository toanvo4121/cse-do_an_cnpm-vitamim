import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import TopTrending from "../components/TopTrending"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
import { useState } from 'react'
import axios from 'axios'

const getMims = () => axios.get('http://localhost:4000/upload')
    .then((res) => res.data)
function CsMim(){
    const [Posts,setPosts] = useState(null)
    if (Posts === null) {
        getMims().then((res) => {
            setPosts(res.filter(p=>p.categ == "Cs mim"))
            setPosts(Posts.filter(p=>p.isAccept !== 0))
        })
    }
    if(Posts !== null){
        return (
            <React.Fragment>
                <Header />
                <SubHeader  checkMim={"csmim"}/>
                <TopTrending />
                <ShowMim Post={Posts.reverse()} />
                {JSON.parse(localStorage.getItem('showdangmim')) == 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <Header />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={Posts} />
                {JSON.parse(localStorage.getItem('showdangmim')) == 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }

}
export default CsMim