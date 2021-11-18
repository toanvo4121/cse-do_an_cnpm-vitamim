import { useState, useEffect } from 'react';
import axios from 'axios';

function TopTrending() {
  const [top_trends, setTopTrends] = useState([]);

  useEffect(() => {
    const fetchTopTrends = async () => {
      const { data } = await axios.get('/api/top_trends/');
      setTopTrends(data);
    };

    fetchTopTrends();
  }, []);

  return (
    <div className='top-trending'>
      <p className='top-trending_name'>Top trending</p>
      <div className='top-trending_overlay'>
        <img src='source/back.png' alt='' className='move' />
        {top_trends.map((trend, index) => (
          <img
            className='trend'
            id={index}
            key={index}
            src={trend.src}
            alt=''
          ></img>
        ))}
        <img src='source/next.png' alt='' className='move' />
      </div>
    </div>
  );
}

export default TopTrending;
