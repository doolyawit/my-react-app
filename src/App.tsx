import "./App.css";
import Random from "./Random";
import Navbar from "./Navbar";
import Clicked from "./Clicked";

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
