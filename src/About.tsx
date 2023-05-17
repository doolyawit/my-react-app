import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About </h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true"
        alt=""
        width={200}
        height={200}
        className="logo-api"
      />
      <br />
      <p className="abt">
        PokeAPI is a powerful and comprehensive application programming
        interface (API) that provides developers with access to a vast amount of
        data related to the Pokémon franchise. Designed to be a valuable
        resource for Pokémon enthusiasts and developers alike, PokeAPI offers a
        treasure trove of information about the various Pokémon species, moves,
        abilities, types, and more. By making requests to the PokeAPI,
        developers can retrieve detailed data about individual Pokémon,
        including their names, images, statistics, evolution chains, and even
        the sounds they make. The API follows the principles of RESTful
        architecture, allowing developers to easily integrate its functionality
        into their applications. With its extensive documentation and
        well-structured endpoints, PokeAPI simplifies the process of fetching
        and utilizing Pokémon data, making it a go-to choice for developers
        looking to create Pokémon-related websites, apps, games, or any project
        requiring Pokémon data. Whether you're building a Pokédex, a battle
        simulator, or an educational resource, PokeAPI is an invaluable tool
        that brings the captivating world of Pokémon to life in your
        applications.
      </p>
      <Link to={`/`} className="roundButton back">
        Back To Home
      </Link>
      <Link
        to={"https://pokeapi.co/"}
        target="_blank"
        className="roundButton more"
      >
        {" "}
        Learn more ...
      </Link>
    </>
  );
}
