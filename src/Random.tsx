import { useEffect, useState } from "react";

const Random = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);

  const fetchUserData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return <div>{pokemon.length !== 0 && {}}</div>;
};

export default Random;
