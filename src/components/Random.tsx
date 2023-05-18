import { useCallback, useEffect, useMemo, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import axios from "axios";

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
  const [color, setColor] = useState([0, 0, 0]);
  const [sampleNumber, setSampleNumber] = useState(5);

  const slowResult = useMemo<number>(() => {
    for (let i = 0; i <= 900; i++) {
      console.log(`slow function is running 🐢`);
    }
    return sampleNumber + 900;
  }, [sampleNumber]);
  const memoizedSetIndex = useCallback(() => setIndex(index + 1), [index]);
  const memoizedSetColor = useCallback(
    () =>
      setColor(
        color.map(() => {
          return Math.floor(Math.random() * 256);
        })
      ),
    [color]
  );
  const { name, setName } = useTitle();

  const fetchPokeData = () => {
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
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200")
      .then((res) => res.data)
      .then((data: IPokemon) => {
        setPokemon(data);
      });
    axios.interceptors.response.use(
      function (response) {
        console.log(`data was sent back from ${response.config.url}`);
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    const colorElem = document.querySelector(".poke-name");
    colorElem!.style.color = `rgb(${color.join(",")})`;
  }, [color]);

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <>
      <h3>Welcome, Master {name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insert your name"
      />
      <p className="poke-name">{pokemon?.results?.[index]?.name}</p>
      <br></br>
      <button onClick={memoizedSetIndex} className="roundButton new-poke">
        Get new Pokemon ?
      </button>
      <button onClick={memoizedSetColor} className="roundButton new-poke">
        Get new Color?
      </button>
      <h3>useMemo-Example</h3>
      <h4>Result is {slowResult}</h4>
      <button
        onClick={() => setSampleNumber(sampleNumber + 5)}
        className="roundButton "
      >
        Get new Result?
      </button>
    </>
  );
};
export default Random;
