
import './App.css';
import React from "react";
import {Routes, Route } from "react-router-dom";

import SignUp from "./frontend/action/SignUp"
import Login from "./frontend/components/LoginPage"
import OwnPage from './frontend/page/OwnPage';
import TheLoai from "./frontend/page/TheLoai";
import MimThuong from "./frontend/page/MimThuong";
import DarkMim from "./frontend/page/DarkMim";
import CsMim from "./frontend/page/CsMim";
import HotMim from "./frontend/page/HotMim";
import Follow from "./frontend/page/Follow";
import Template from './frontend/page/Template'
import BinhChon from './frontend/page/BinhChon'
import DangMim from './frontend/components/DangMim';

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
        <Route path="/dangmim" element = {<DangMim/>}/>
        <Route path="/template" element = {<Template/>}/>
        <Route path="/binhchon" element = {<BinhChon/>}/>
        <Route path="mimthuong/dangmim" element = {<DangMim/>}/>
        <Route path="darkmim/dangmim" element = {<DangMim/>}/>
        <Route path="csmim/dangmim" element = {<DangMim/>}/>
        <Route path="hotmim/dangmim" element = {<DangMim/>}/>
        <Route path="follow/dangmim" element = {<DangMim/>}/>
        <Route path="template/dangmim" element = {<DangMim/>}/>
        <Route path="binhchon/dangmim" element = {<DangMim/>}/>
        <Route path="/user" element = {<OwnPage/>}/>
      </Routes>
  )
  }
export default App;
