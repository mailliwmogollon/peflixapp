
import { useState } from "react";
import "./style.css";

export default function PeliflixList({ peliflix }) {

    const [newSearch, setNewSearch] = useState("")

    const handleChange = (event) => {
        setNewSearch(event.target.value)
    };

    const handleClick = (event) => {

        const newMovie = newSearch;
        
    };
 
    return (
     
        <div className="search-box">
            <form>
                <input  type="text" onChange={handleChange} value={newSearch}/>
                <button onClick={handleClick}>Buscar</button>
            </form>
             <div className="search-box-card">
                    {peliflix?.map(({ Poster }) => (
                <div className="search-box-card-movie">
                    <img src={Poster} />
                </div>
                  ))}
              </div>


        </div>


    );
}