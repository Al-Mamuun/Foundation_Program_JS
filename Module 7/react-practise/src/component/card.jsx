import "./card.css";

//* props and children

export default function Card({name, age}) {
  return(
    <div className="card">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
  );
};

