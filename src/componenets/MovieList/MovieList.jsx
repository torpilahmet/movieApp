import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getMovieList, getMovieListByGenre} from "../../redux/slices/movieListSlice.jsx";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'

const MovieList = ({selectedGenre}) => {
    const dispatch = useDispatch();
    const {movieList} = useSelector((store) => store.movieList);

    useEffect(() => {
        if (!selectedGenre) {
            dispatch(getMovieList());
        } else {
            dispatch(getMovieListByGenre(selectedGenre.id));
        }
    }, [selectedGenre, dispatch])

    return (
        <div className='movie-list'>
            {selectedGenre ? selectedGenre.name : null}
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
