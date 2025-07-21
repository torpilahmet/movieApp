import React, {useState} from 'react'
import Genre from "../../componenets/Genre/Genre.jsx";
import MovieList from "../../componenets/MovieList/MovieList.jsx";

const Home = () => {

    const [selectedGenre, setSelectedGenre] = useState(null);
    return (
        <div className="Home">
            <Genre setSelectedGenre={setSelectedGenre}/>
            <MovieList selectedGenre={selectedGenre}/>
        </div>
    )
}
export default Home
