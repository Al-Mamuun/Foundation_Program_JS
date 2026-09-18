import "./App.css";
// import Card from "./component/card";
import { useState } from "react";
import Counter from "./component/Counter.jsx";
import Display from "./component/Display.jsx";

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" onChange={(e) => setAge(e.target.value)} value={age} />
        <button type="submit">Submit</button>
      </form>

      {member.map((member) => (
        <Card name={member.name} age={member.age} />
      ))} */}
      < Display count={count} />
      < Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;


// const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const [member, setMember] = useState([
  //   { name: "Mamun", age: 23 },
  //   { name: "Sakib", age: 24 },
  //   { name: "Nabila", age: 25 },
  // ]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setMember([...member, { name, age }]);
  //   setMember((prevMember) => [...prevMember, { name, age }]);
  //   setName("");
  //   setAge("");

  // };
