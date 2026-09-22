import { useEffect, useState } from "react";
import Card from "./Card";

function DisplayUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <div>
      {data.map((user) => {
        return <Card name={user.name} email={user.email}></Card>;
      })}
    </div>
  );
}

export default DisplayUsers;
