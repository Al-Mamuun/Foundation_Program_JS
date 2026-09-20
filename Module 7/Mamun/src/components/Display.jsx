// import React from 'react'
// import Card from './Card'

import { useEffect, useState } from "react";
import Card from "./Card";

const Display = () => {

    const [members, setMembers] = useState([]);
    const [isLoding, setIsLoading] = useState(true);

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
            res.json().then((data) => { setMembers(data) }).finally(() => {
                setIsLoading(false);
            });
        });
    }, []);

    if (isLoding) { 
        return <h1>Loading...</h1>
    }

  return (
      <div>
          {members.map((member) => {
              return <Card key={member.id} name={member.name} email={member.email} />;
          })}
      
    </div>
  );
}

export default Display 