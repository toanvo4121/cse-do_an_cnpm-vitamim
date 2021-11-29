import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import TopTrending from "../components/TopTrending"
import ShowMim from "../components/ShowMim"
import DangMim from "../components/DangMim"
const Posts = JSON.parse(localStorage.getItem('search'))
function HomePage() {
    console.log(Posts)
    if(Posts[0].length !== 0){
        return (
            <React.Fragment>
                <Header />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={Posts[0].reverse()} />
                {JSON.parse(localStorage.getItem('showdangmim')) === 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <Header />
                <SubHeader />
                <TopTrending />
                <ShowMim Post={null} />
                {JSON.parse(localStorage.getItem('showdangmim')) === 1 ? <DangMim /> : ''}
            </React.Fragment>
        )
    }

}
export default HomePage