
import './App.css';
import React from "react";
import {Routes, Route } from "react-router-dom";

import SignUp from "./action/SignUp"
import Login from "./components/LoginPage"
import OwnPage from './page/OwnPage';
import UserPage from './page/UserPage';
import TheLoai from "./page/HomePage";
import MimThuong from "./page/MimThuong";
import DarkMim from "./page/DarkMim";
import CsMim from "./page/CsMim";
import HotMim from "./page/HotMim";
import Follow from "./page/Follow";
import Template from './page/Template'
import BinhChon from './page/BinhChon'
import EditProfilePage from './page/EditProfilePage'
import Search from './page/Search'
import Admin from './page/Admin'
import ShowMimDetail from './components/ShowMimDetail'

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
