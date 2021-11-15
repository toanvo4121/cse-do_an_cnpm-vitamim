import React from 'react';
import Header from '../components/Header.js';
import SubHeader from '../components/SubHeader.js';
import TopTrending from '../components/TopTrending.js';
import ShowMim from '../components/ShowMim.js';
import DangMim from './DangMim.js';
import ShowTemplate from './ShowTemplate.js';
import ViewOwnPage from './ViewOwnPage.js';
import variables from '../variables.js';

const UserPosts = [
  {
    avt: 'source/avatar.png',
    ten: 'Cuong-chan',
    thoigian: 1,
    stt: 'Mực ống trò chơi',
    hashtag: ['#squidgame'],
    src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
    quadark: 127578,
    soweak: 18742,
    comment: 69237,
  },
  {
    avt: 'source/avatar.png',
    ten: 'Hiếu ưbu',
    thoigian: 2,
    stt: 'Ai rồi cũng wibu thôi',
    hashtag: ['#wibuneverdie', '#2D'],
    src: 'url(mimCollection/146416864_454196045774516_3779436581273031988_n.png)',
    quadark: 118346,
    soweak: 24520,
    comment: 2701,
  },
  {
    avt: 'source/avatar.png',
    ten: 'Vua lỳ đòn',
    thoigian: 2,
    stt: 'Ai rồi cũng lỳ đòn thôi',
    hashtag: ['#lydonneverdie', '#3D'],
    src: 'url(mimCollection/163973021_796538227967231_4931855032479318559_n.png)',
    quadark: 118346,
    soweak: 24520,
    comment: 2701,
  },
  {
    avt: 'source/avatar.png',
    ten: 'Halee',
    thoigian: 2,
    stt: 'Chiến',
    hashtag: ['#chien'],
    src: 'url(mimCollection/242860568_910326049562160_4107595597808129557_n.png)',
    quadark: 328346,
    soweak: 23520,
    comment: 2701,
  },
  {
    avt: 'source/avatar.png',
    ten: 'Hecker',
    thoigian: 2,
    stt: 'I am hecker',
    hashtag: ['#hecker', '#123'],
    src: 'url(mimCollection/245545926_601516814326028_1385808038578148858_n.png)',
    quadark: 338346,
    soweak: 23520,
    comment: 2701,
  },
];

const HomePage = () => {
  if (variables.SubTitle === 'theloai') {
    return (
      <React.Fragment>
        <Header log={variables.CheckLogin} />
        <SubHeader />
        <TopTrending />
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
        <ShowMim Post={UserPosts} />
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
