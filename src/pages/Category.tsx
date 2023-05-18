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
    fetch(` https://pokeapi.co/api/v2/${category}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [category]);

  return (
    <>
      <h1>Category</h1>

      <button onClick={() => setCategory("pokemon")}>Pokemon</button>
      <button onClick={() => setCategory("ability")}>Ability</button>
      <button onClick={() => setCategory("berry")}>Food</button>
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
