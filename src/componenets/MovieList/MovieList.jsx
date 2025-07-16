import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getMovieList} from "../../redux/slices/movieListSlice.jsx";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'

const MovieList = () => {
    const dispatch = useDispatch();
    const {movieList} = useSelector((store) => store.movieList);

    useEffect(() => {
        dispatch(getMovieList());
    }, [])

    console.log('Movie List: ', movieList);
    return (
        <div className='movie-list'>
            <ul>
            {
                movieList && movieList.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
            }
            </ul>
        </div>
    )
}
export default MovieList
