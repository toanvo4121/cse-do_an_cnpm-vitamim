
import './App.css';
import React from "react";
import {Routes, Route } from "react-router-dom";

import SignUp from "./frontend/action/SignUp"
import Login from "./frontend/components/LoginPage"
import OwnPage from './frontend/page/OwnPage';
import UserPage from './frontend/page/UserPage';
import TheLoai from "./frontend/page/HomePage";
import MimThuong from "./frontend/page/MimThuong";
import DarkMim from "./frontend/page/DarkMim";
import CsMim from "./frontend/page/CsMim";
import HotMim from "./frontend/page/HotMim";
import Follow from "./frontend/page/Follow";
import Template from './frontend/page/Template'
import BinhChon from './frontend/page/BinhChon'
import EditProfilePage from './frontend/page/EditProfilePage'
import Search from './frontend/page/Search'
import Admin from './frontend/page/Admin'
import ShowMimDetail from './frontend/components/ShowMimDetail'

function App() {
  return (
      <Routes>
        <Route path="/signup" element = {<SignUp/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/" element = {<TheLoai/>}/>
        <Route path="/mimthuong" element = {<MimThuong/>}/>
        <Route path="/darkmim" element = {<DarkMim/>}/>
        <Route path="/csmim" element = {<CsMim/>}/>
        <Route path="/hotmim" element = {<HotMim/>}/>
        <Route path="/follow" element = {<Follow/>}/>
        <Route path="/template" element = {<Template/>}/>
        <Route path="/binhchon" element = {<BinhChon/>}/>
        <Route path="/search" element = {<Search/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/show-mim-detail" element = {<ShowMimDetail/>}/>
        <Route path="/user/" element = {<OwnPage/>}/>
        <Route path="/userpage/:id" element = {<UserPage/>}/>
        <Route path="/edit-profile" element = {<EditProfilePage/>}/>
      </Routes>
  )
  }
export default App;
