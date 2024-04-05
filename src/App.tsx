import { useEffect, useState } from "react";
import "./App.css";
import { Pokemon } from "./Components/Pokemon";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=1302";

  const [poks, setPoks] = useState([]);
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(url + "pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPoks(data.results);
      });
  }, []);

  return (
    <>
      <h2> Hover over each X to see Pokemon!</h2>
      {poks.map((pok, index) => (
        <Pokemon key={index} url={pok.url} setInfo={setInfo} />
      ))}
      {info && (
        <div>
          <h2>Pokemon Name: {info.name}</h2>
          <img src={info.sprites.front_default} alt={info.name} />
        </div>
      )}
    </>
  );
}

export default App;
