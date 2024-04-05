import { useEffect, useState } from "react";
import "./App.css";
import { Pokemon } from "./Components/Pokemon";

function App() {
  const url = "https://pokeapi.co/api/v2/";
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
      {poks.map((pok, index) => (
        <Pokemon key={index} name={pok.name} url={pok.url} setInfo={setInfo} />
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
