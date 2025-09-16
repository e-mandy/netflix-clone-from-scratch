import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../Datas/Cards'
import { Link } from 'react-router'


const TitleCards = ({title, category}) => {

  const [moviesState, setMoviesState] = useState([])
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDVlYTc2OTVlYjUzNzg0NDE0YzQxNGFiOTAxZmI5NyIsIm5iZiI6MTc1ODAzNDkyMi44OTMsInN1YiI6IjY4Yzk3YmVhZWEzMTRjZjVmYTIxOTRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLP2oQdkDwP1WRMNahKxg1cuS2vdSYLQVz8cI7XGFPY'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setMoviesState(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])


  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {moviesState.map((card, index) =>{
          return (
            <Link to={`player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards