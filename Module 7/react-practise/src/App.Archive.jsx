// import "./App.css";
// import Card from "./component/card";

// // function App() {
// //   return (
// //     <Card firstname="Mamun" lastname="Love" age={23}>
// //     <div>
// //       <h1>Welcome</h1>
// //       <p>Hello World</p>
// //     </div>
// //   </Card>
// //   );
// // }

// // export default App;

// const member = [
//   { name: "Mamun", age: 23 },
//   { name: "Sakib", age: 24 },
//   { name: "Nabila", age: 25 },
// ];

// function App() {
//   return (
//     <div>
//       {/* <Card name={member[0].name} age={member[0].age} />
//       <Card name={member[1].name} age={member[1].age} />
//       <Card name={member[2].name} age={member[2].age} /> */}
//       {member
//         .filter((member) => member.age > 23)
//         .sort((a,b) => a.age - b.age)
//         .map((member) => (
//           <Card name={member.name} age={member.age} />
//         ))}
//     </div>
//   );
// }

// export default App;



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
  const [age,setAge] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");
  const handleSubmit = (e) => {    
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedAge(age);
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <input type="text" onChange={(e) => setAge(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>

      {member.map((member) => (
        <Card name={member.name} age={member.age} submittedName={submittedName} submittedAge={submittedAge} />
      ))}

      {/* < Counter /> */}
    </div>
  );
}


export default App;
