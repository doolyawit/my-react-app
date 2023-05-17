import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAtuh";

interface IPokemonDetail {
  name: string;
  url: string;
}

interface IPokemon {
  count: number;
  next: string;
  previous?: string;
  results: IPokemonDetail[];
}

const Random = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [index, setIndex] = useState(0);

  const { isAuth, setAuth } = useAuth();

  const fetchUserData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data: IPokemon) => {
        setPokemon(data);
      });
  };

  useEffect(() => {
    console.log(isAuth)
    setAuth(true)
    fetchUserData();

    console.log("here");

    return () => {
      console.log("clear");
    };
  }, []);

  return (
    <>
      <h3 className="poke-name">{pokemon?.results?.[index]?.name}</h3>
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
