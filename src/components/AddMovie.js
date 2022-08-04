import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "./ListContext";

const AddMovie = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(ListContext);
    
    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }


    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prev => [...prev, {name: name, price: price, id: Math.random() * 1}]);
        setName("");
        setPrice("")
    }
    // useEffect(() => {
    //     // const movies = JSON.parse(localStorage.getItem('movies'))
    //     // if(movies) {
    //     //     setMovies(movies)
    //     // }
    //     setMovies(JSON.parse(localStorage.getItem("work")))
    //    }, []);

    // useEffect(() => {
    //     localStorage.setItem("work", JSON.stringify(movies))
    //    }, [movies]);

    


    return(
        <div>
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={updateName}></input>
                <input type="text" name="price" value={price} onChange={updatePrice}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie;
