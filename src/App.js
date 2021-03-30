
import './App.css';

import Routes from "./routes";
import PeliflixProvider from "./context/peliflix/Provider";

function App() {
  return (
   <PeliflixProvider>
     <Routes />
   </PeliflixProvider>
  );
}

export default App;
