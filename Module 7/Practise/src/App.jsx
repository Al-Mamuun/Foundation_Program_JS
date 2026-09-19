import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [anotherCount,setAnotherCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect called");
  },[count,anotherCount]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>Another  Increment ({anotherCount})</button>
    </>
  );
}

export default App;
