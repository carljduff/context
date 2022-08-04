import React, {useState, useEffect, createContext} from "react"

export const ListContext = createContext();

export const ListProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1
        },
        {
            name: 'Game of Thrones',
            price: '$15',
            id: 2
        },
        {
            name: 'Twilight',
            price: 'Priceless',
            id: 0
        }
    ])

    useEffect(() => {
        setMovies(JSON.parse(localStorage.getItem("movies")))
       }, []);
    
       useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies))
       }, [movies]);

    return(
        <div>
            <ListContext.Provider value={[movies, setMovies]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}

