import "./App.css";
import Random from "./components/Random";
import Navbar from "./components/Navbar";
import Clicked from "./components/Clicked";

function App() {
  return (
    <>
      <Navbar />
      <h1>
        {" "}
        My React <span>Pokémon</span> API{" "}
      </h1>
      <img
        src="https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif"
        alt=""
        width={300}
        height={200}
      />
      <Random />
      <Clicked />
    </>
  );
}

export default App;
