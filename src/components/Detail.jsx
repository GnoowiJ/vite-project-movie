import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail () {
  const [loading, setLoading] = useState(true)
  const [movieInfo, setMovieInfo] = useState([])
  const [actors, setActors] = useState([])
  const [posterImg, setPosterImg] = useState('')
  const {id} = useParams()
  console.log('id->', id);
  
  const getPoster = async () => {
    const json =  await (await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&query=${id}&ServiceKey=99UC0FB521R3FT7V4CFG`)
    ).json()
    let result = json.Data[0].Result[0]
    setMovieInfo(result)
    setActors(() => {
      if(result.actors.actor.length > 5){
        return result.actors.actor.slice(0, 5)
      }else{
        return result.actors.actor
      }
    })
    setPosterImg((json.Data[0].Result[0].posters).split("|")[0])
    setLoading(false)
  }

  useEffect(() => {
    getPoster()

  }, [])
  console.log('moviePoster->', movieInfo);
  return (<>{
    loading ? <div>"loading..."</div> :
    <div className='detail'>
      <div className='d-content'>
        <div className='d-text'>
          <h2 className='d-title'>{id}</h2>
          <h3 className='d-title'>{movieInfo.titleEng}</h3>
          <p className='d-desc'>줄거리 : {movieInfo.plots.plot[0].plotText}</p>
          <p className='d-desc'>배우 : {actors.map((item) => (
            `${item.actorNm}, `
          ))}
          </p>
          <p className='d-desc'>개봉일 : {movieInfo.repRlsDate}</p>
        </div>
        <div className='d-poster'>
            <img src={posterImg} alt={posterImg} />
        </div>
      </div>
    </div>
  }</>)
  
}