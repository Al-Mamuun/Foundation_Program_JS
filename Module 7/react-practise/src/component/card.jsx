import { useState } from "react";
import "./card.css";

//* props and children

export default function Card({name, age, submittedName}) {

  const [member, setMember] = useState("");

  const clickHandler = (memberName) => {
    setMember(memberName);
  }

  // const anotherClickHandler = () => {
  //   console.log("Greetings from another click handler");
  // }

  // const greetings = (name) => {
  //   clickHandler(name);
  //   anotherClickHandler();
  // }
  return(
    <div 

    onClick={() => clickHandler(name)}
    className="card">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    {submittedName && <p>You submitted: {submittedName}</p>}
  </div>
  );
};

