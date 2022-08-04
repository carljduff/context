import React, { useContext } from "react";
import "../css/nav.css";
import { ListContext } from "./ListContext";



const Nav = () => {

    const [movies, setMovies] = useContext(ListContext);

    return(
        <div className="nav">
            <h1>CJD</h1>
            <h3># of movies: {movies.length} </h3>
        </div>
    )
}

export default Nav;