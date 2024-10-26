import React, { useEffect, useState } from 'react';
import Navbar from '../components/Header';
import Movie from '../components/Movie';

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [movieList, setMovieList] = useState([])
  const [moviePoster, setMoviePoster] = useState([])

  const getMovie = async () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth()+1).padStart(2,'0');
    let date = String(today.getDate()-1).padStart(2,'0');
    let serchDate = `${year}${month}${date}`
    const json = await ( await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=${serchDate}`)
  ).json()
    const list = json.boxOfficeResult.dailyBoxOfficeList
    setMovieList(list)
    setLoading(false)
    
  }
  const getPoster = () => {
    fetch('https://dapi.kakao.com/v2/search/image')
    .then( res => res.json())
    .then( img => setMoviePoster(img))
  }
  // console.log('moviePoset->', moviePoster);
  
  useEffect( () => {
  getMovie()
  }, [])
  console.log(movieList);
  return (
    <div>
      { loading ? "loading..." 
    : <div className='list-box'>
          {movieList.map((list, idx) => (
            <Movie 
              key={idx}
              id={list.movieCd}
              title={list.movieNm}
              openDt={list.openDt}
              rank={list.rank}/>
          ))}
      </div> }
    </div>
  );
}