import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Genre.css'
import {getGenre} from "../../redux/slices/genreSlice.jsx";
const Genre = () => {
    const {genres} = useSelector((store) => store.genre)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenre())
    },[])
    return (
        <div className="genres">
            <ul>
                {genres && genres.map((genre, index) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Genre
