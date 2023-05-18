import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
export default function Category() {
  const [category, setCategory] = useState("pokemon");
  const [items, setItems] = useState<IPokemon>();

  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        console.log(`Sending request to ${config.url}`);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    axios
      .get(` https://pokeapi.co/api/v2/${category}`)
      .then((res) => res.data)
      .then((data: IPokemon) => setItems(data));
  }, [category]);

  axios.interceptors.response.use(
    function (response) {
      console.log(`data was sent back from ${response.config.url}`);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <h1>Category</h1>

      <button onClick={() => setCategory("pokemon")} className="roundButton">
        Pokemon
      </button>
      <button onClick={() => setCategory("ability")} className="roundButton">
        Ability
      </button>
      <button onClick={() => setCategory("berry")} className="roundButton">
        Food
      </button>
      <h2>{category.toUpperCase()}</h2>
      <ol>
        {items?.results.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ol>
      <Link to={`/`} className="roundButton back">
        Back To Home
      </Link>
    </>
  );
}
