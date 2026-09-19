import { useEffect , useState} from "react";
import "./App.css";

function App() {
  const [second,setSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
    return () => clearInterval(id);
  },[]);

  return (
    <h1>
     {second}
    </h1>
  );
}

export default App;
