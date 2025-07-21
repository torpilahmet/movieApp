import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Genre.css'
import {getGenre} from "../../redux/slices/genreSlice.jsx";
const Genre = ({setSelectedGenre}) => {
    const {genres} = useSelector((store) => store.genre)
    const dispatch = useDispatch()
    const [activeGenre, setActiveGenre] = useState(null)

    const handleGenre = (genre) => {
        setSelectedGenre(genre)
        setActiveGenre(genre.id)
    }

    useEffect(() => {
        dispatch(getGenre())
    },[])
    return (
        <div className="genres">
            <ul>
                {genres && genres.map((genre) => (
                    <li
                        className={`${activeGenre === genre.id ? 'active' : ''}`}
                        key={genre.id}
                        onClick={() => handleGenre(genre)}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Genre
