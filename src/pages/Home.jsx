import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

export default function Home () {
  const [loading, setLoading] = useState(true)
  const [movieList, setMovieList] = useState([])


  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth()+1).padStart(2,'0');
  let date = String(today.getDate()-1).padStart(2,'0');
  let serchDate = `${year}${month}${date}`
  const getMovie = async () => {
    const json = await ( await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4b41397b7aaf1ee41dcd40c21314f501&targetDt=${serchDate}`)
  ).json()
    const list = json.boxOfficeResult.dailyBoxOfficeList
    setMovieList(list)
    setLoading(false)
  }

  
  useEffect( () => {
  getMovie()

  }, [])
  // console.log(movieList);
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