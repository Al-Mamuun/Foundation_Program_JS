import { useEffect, useState } from "react";
import "./Counter.css";
function Display() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((data) => setData(data))
          .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <div>
          <h1>Display</h1>
          {data.map((item) => (<div key={item.id}>{item.title}</div>))}
    </div>
  );
}

export default Display;

