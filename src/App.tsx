import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`💥`);
  });
  return (
    <>
      <Header />
      <h1>My React App 🤯</h1>
      <h3> count is {count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>Reset</button>
      </div>
    </>
  );
}

export default App;
