import React, { useEffect, useState } from 'react';
import './MovieList.css';
import fire from '../../assets/fireemoji.png';
import MovieCard from './MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rating,setRating] = useState(0)
    const [sort, setSort] = useState({
        by: "default",
        order: "asc",

    })

    useEffect(() => {
        getMovies();
    }, []);


    const getMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3543f54558b03e88ac8f47ee93ee1eda");
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data.results); // Use data.results to set the list of movies
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filter = rate => {
        setRating(rate)

       const filtered = movies.filter((movie) => movie.vote_average >= rate);
        setMovies(filtered)
    }

    const handleSort = e => {
        const{name, value} = e.target;
        setSort(prev => ({...prev,[name]: value}))
        
    }

    console.log(sort)




    return (
        <section className='movie_list'>
            <header className='align_center movie_list_header'>
                <h2 className='align_center movie_list_heading'>
                    Popular <img src={fire} alt='Fire Emoji' className='navbar_emoji' />
                </h2>

                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <li className="movie_filter_item" onClick={()=>filter(8)}>8+ Star</li>
                        <li className="movie_filter_item" onClick={()=>filter(7)}>7+ Star</li>
                        <li className="movie_filter_item" onClick={()=>filter(6)}>6+ Star</li>
                    </ul>

                    <select name='by' id='' onChange={handleSort} value={sort.by} className="movie_sorting">
                        <option value="default">Sort By</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select name='order' id='' onChange={handleSort} value={sort.order} className="movie_sorting">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}

export default MovieList;
