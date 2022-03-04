import React from 'react';
import Header from './headerComponent';
import Like from '../images/icons/Like.png';
import Calendar from '../images/icons/date.png';

import HomeStats from './stats';

const statsData = [
  {
    value:60,
    title:'label',
    icon:Like,
  },
  {
    value:0,
    title:'label',
    icon:Calendar,
  },
  {
    value:0,
    title:'label',
    icon:Calendar,
  },
  {
    value:0,
    title:'label',
    icon:Calendar,
  },
]

const Home = () => {
  return (
    <div className='homeWrapper'>
        <header>
          <Header/>
        </header>

        <div className="homeDetails">
          <h1 className='homeTitle'>Cari Cari</h1>
          <p className='homeTagline'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </div>

        <div className="homeStats">
          <HomeStats statsData={statsData[0]}/>
          <HomeStats statsData={statsData[1]}/>
          <HomeStats statsData={statsData[2]}/>
          <HomeStats statsData={statsData[3]}/>
        </div>
    </div>
  );
};

export default Home;
