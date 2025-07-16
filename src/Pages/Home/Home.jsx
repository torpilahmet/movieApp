import React from 'react'
import Genre from "../../componenets/Genre/Genre.jsx";
import MovieList from "../../componenets/MovieList/MovieList.jsx";

const Home = () => {
    return (
        <div className="Home">
            <Genre/>
            <MovieList />
        </div>
    )
}
export default Home
