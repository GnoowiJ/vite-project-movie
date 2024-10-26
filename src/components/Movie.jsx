import React from 'react';
import { Link } from 'react-router-dom';


export default function Movie ({idx, id, title, openDt, rank}) {
  
  return (
        <div className='list-box'>
          <div key={idx} className='content'>
            <div>
              <h3>{title}</h3>
              <p>개봉일 : {openDt}</p>
              <p>순위 : {rank}</p>
            </div>
            <Link to={`/movie/${id}`}><button type='button' className='content-btn'>상세 보기</button></Link>
          </div>
        </div>

  );
}