import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HttpRequest } from "../services/http.request";
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
    HttpRequest.getInstance()
      .getHttpRequest()
      .get<IPokemon>(`https://pokeapi.co/api/v2/${category}`)
      .then((res) => {
        setItems(res.data);
      });
  }, [category]);

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
