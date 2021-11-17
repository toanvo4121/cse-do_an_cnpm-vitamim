import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowThongKe() {
  const [top_mems, setTopMems] = useState([]);

  useEffect(() => {
    const fetchTopMems = async () => {
      const { data } = await axios.get('/top_mems/');
      setTopMems(data);
    };

    fetchTopMems();
  }, []);

  return (
    <React.Fragment>
      <div className='top-thang'>
        <p className='topdanhhaithang'>Top danh hài tháng:</p>
        {top_mems.map((top, index) => (
          <div className='top-mem' id={index}>
            <h5>{index}</h5>
            <img src={top.avt} alt='' className='top-avt' />
            <p>{top.ten}</p>
          </div>
        ))}
      </div>
      <div className='ads'>
        <p>Ads</p>
        <div
          className='ads-info'
          style={{ backgroundImage: 'url(source/ads.png)' }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default ShowThongKe;
