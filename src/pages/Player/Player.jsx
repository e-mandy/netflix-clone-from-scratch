import React, { useEffect, useState } from 'react'
import './Player.css'
import { CircleArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState({
        key: "",
        name: "",
        published_at: "",
        type: ""
    })

    useEffect(()=>{
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDVlYTc2OTVlYjUzNzg0NDE0YzQxNGFiOTAxZmI5NyIsIm5iZiI6MTc1ODAzNDkyMi44OTMsInN1YiI6IjY4Yzk3YmVhZWEzMTRjZjVmYTIxOTRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLP2oQdkDwP1WRMNahKxg1cuS2vdSYLQVz8cI7XGFPY'
        }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setMovie(res.results[0]))
        .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <CircleArrowLeft size={35} className="arrow-down" onClick={() => navigate(-2)} />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${movie.key}`}
            title='trailer' frameBorder='0' allowFullScreen />
            <div className="player-info">
                <p>{movie.published_at.slice(0, 10)}</p>
                <p>{movie.name}</p>
                <p>{movie.type}</p>
            </div>
        </div>
    )
}

export default Player