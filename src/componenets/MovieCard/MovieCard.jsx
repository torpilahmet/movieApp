import React from 'react'
import './MovieCard.css'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
import {API_IMG} from "../../constans/api.jsx";

const MovieCard = ({movie}) => {
    const { id,title, poster_path, vote_average } = movie;

    return (
        <Link to={`/${id}`}>
            <div className='Movie-Card'>
                <div className="gradient"></div>
                <img src={`${API_IMG}/${poster_path}`} alt={title} />
                <div className="movie-info">
                    <div className="movie-rating">
                        <p>{vote_average?.toFixed(1)}</p>
                        <FaStar />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard