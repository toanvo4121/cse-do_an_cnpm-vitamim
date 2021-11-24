import React from 'react'
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import EditProfile from "../components/EditProfile"
import DangMim from "../components/DangMim"

function EditProfilePage(){
    return (
        <React.Fragment>
            <Header />
            <SubHeader />
            <EditProfile />
            {JSON.parse(localStorage.getItem('showdangmim'))== 1 ? <DangMim /> : ''}
        </React.Fragment>
    )
}
export default EditProfilePage