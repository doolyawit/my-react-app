import { useEffect, useState } from "react";

const Random = () => {
  const [pokemon, setPokemon] = useState<any>();
  const [index, setIndex] = useState(0);

  const fetchUserData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h3 className="poke-name">{pokemon?.results[index].name}</h3>
      <br></br>
      <button
        onClick={() => setIndex((index) => index + 1)}
        className="roundButton new-poke"
      >
        Get new Pokemon ?
      </button>
    </>
  );
};

export default Random;
