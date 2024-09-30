import React from 'react'
import './MovieCard.css'
import star from '../../assets/star.png'

function MovieCard({movie}) {
  return (
    < a href={`https://www.themoviedb.org/movie/${movie.id}`} className='movie_card'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
`}
         alt='' className='movie_poster'></img>


         <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.original_title}</h3>
            <div className="align_center movie_data_rate">
            <p>{movie.release_date}</p> 
            <p>{movie.vote_average} <img src={star} alt="" className='card_emoji' />   </p>
            </div>

            <p className='movie_description'>{movie.overview}</p>
         </div>
    </a>
  )
}

export default MovieCard