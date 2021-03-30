import { useContext, useEffect, useState } from "react";

import PeflixContext from "../../context/peliflix";
import PeliflixList from "./componentes/PeliflixList";

import "./style.css";

export default function Home() {
   const { getPeliflix, peliflix } = useContext(PeflixContext);
    
    useEffect(() => {
        getPeliflix().catch(null);
    }, []);

    return (
        <div className="search">
            <PeliflixList peliflix={peliflix} />
        </div>
    );

}