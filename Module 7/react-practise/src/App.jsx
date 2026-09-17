import "./App.css";
import Card from "./component/card";
import { useState } from "react";
// import Counter from "./component/Counter";

const member = [
  { name: "Mamun", age: 23 },
  { name: "Sakib", age: 24 },
  { name: "Nabila", age: 25 },
];

function App() {

  const [name,setName] = useState("");
  const handleSubmit = (e) => {    
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>

      {member.map((member) => (
        <Card name={member.name} age={member.age} />
      ))}

      {/* < Counter /> */}
    </div>
  );
}


export default App;
