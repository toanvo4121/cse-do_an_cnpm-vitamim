import React from 'react';
import Header from '../components/Header.js';
import SubHeader from '../components/SubHeader.js';
import TopTrending from '../components/TopTrending.js';
import ShowMim from '../components/ShowMim.js';
import DangMim from '../components/DangMim.js';
import ShowTemplate from '../components/ShowTemplate.js';
import ViewOwnPage from '../components/ViewOwnPage.js';
import variables from '../components/Variables.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [user_posts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const { data } = await axios.get('/api/posts/:id');
      setUserPosts(data);
    };

    fetchUserPosts();
  }, []);

  if (variables.SubTitle === 'theloai') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'mimthuong') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'darkmim') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'csmim') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'hotmim') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'follow') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'template') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <ShowTemplate />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'binhchon') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={user_posts} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
  if (variables.SubTitle === 'viewownpage') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <ViewOwnPage />
        <ShowMim Post={variables.Mem.post} CheckRank={1} />
        {variables.dangmim === 1 ? <DangMim /> : ''}
      </React.Fragment>
    );
  }
};

export default HomePage;
