import React, { useContext } from "react";
import { ListContext } from "./ListContext";

const Item = ({name, price, item}) => {
    const [movies, setMovies] = useContext(ListContext);

    const del = () => {
        setMovies(movies.filter((stateItem) => stateItem.id !== item.id))
    }
    return(
        <div>
            <h1>{name}</h1>
            <h4>{price}</h4>
            <button onClick={del}>DEL</button>
        </div>
    )
}

export default Item;