import { useState } from "react";
import "./card.css";

//* props and children

export default function Card({name, age}) {

  const [member, setMember] = useState(" ");

  const clickHandler = (memberName) => {
    console.log("Greetings from " + memberName);
  }
  console.log(member);

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
  </div>
  );
};

