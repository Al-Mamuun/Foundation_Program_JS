import { useEffect, useState } from "react";
import Card from "./Card";

function DisplayUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
        
  //       if (!res.ok) {
  //         throw new Error(res.message || "Error in fetching data");
  //       }
  //       // throw new Error("Error in fetching data");
  //       return res.json();
        
  //     })
  //     .then((data) => setData(data))
  //     .catch((err) => setError(err.message))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => { 

    const fetchUseres = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
    
        if (!res.ok) {
          throw new Error(res.message || "Error in fetching data");
        }

        const data = await res.json();
        setData(data);

      } catch (err) {
        setError(err.message);
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchUseres();
  }, []);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <h1>{error}</h1>;
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
