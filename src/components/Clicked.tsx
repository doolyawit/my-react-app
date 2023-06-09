import { useEffect, useState } from "react";

export default function Clicked() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Number ${count} was changed to next number`);
  }, [count]);
  return (
    <>
      <div className="clicked-num">
        <h3> The number clicked on this website is {count}</h3>
        <button
          onClick={() => setCount(count + 1)}
          className="roundButton increment-click"
        >
          Click! 💥
        </button>
        <button onClick={() => setCount(0)} className="roundButton reset">
          Reset ❌
        </button>
      </div>
    </>
  );
}
