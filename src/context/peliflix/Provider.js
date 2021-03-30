import PeflixContext from "./index";


import apiCall from "../../api";
import { useState } from "react";


export default function PeliflixProvider({ children }) {
    const [peliflix, setPeliflix] = useState([]);

    const getPeliflix = async () => {
        try {
            const peliflixResult = await apiCall({ url:"http://www.omdbapi.com/?i=tt3896198&apikey=96ee0628&s=batman" });
            setPeliflix(peliflixResult.Search);
        } catch (error) {
            setPeliflix([]);
        }
    };

    return (
        <PeflixContext.Provider value={{
            getPeliflix,
            peliflix,
        }}>
            {children}
        </PeflixContext.Provider>
    );
} 