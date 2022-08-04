import React, { useState, useContext, useEffect } from 'react';
import Item from './Item';
import { ListContext } from './ListContext';

const List = () => {
   const [movies, setMovies] = useContext(ListContext)
   
//    useEffect(() => {
//     setMovies(JSON.parse(localStorage.getItem("movies")))
//    }, []);

//    useEffect(() => {
//     localStorage.setItem("movies", JSON.stringify(movies))
//    }, [movies]);

    return(
        <div className='list'>
           
            {movies.map((item) => (
                <Item name={item.name} price={item.price} key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List;

