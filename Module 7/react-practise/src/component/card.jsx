import "./card.css";

//* props and children

// export default function Card(props){
//     console.log(props);
//     return <div>
//         {props.children}
//         <p>First Name: {props.firstname}</p>
//         <p>Last Name: {props.lastname}</p>
//         <p>Age: {props.age}</p>
//     </div>
// };

// export default function Card({children,  firstname, lastname, age}) {
//   return(
//     <div>
//   {children}
//     <p>First Name: {firstname}</p>
//     <p>Last Name: {lastname}</p>
//     <p>Age: {age}</p>
//   </div>
//   );
// };


export default function Card({name, age}) {
  if (age <= 18){
    return <div className="card"> You are Too Young</div>
  }
  return(
    <div className="card">
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
  );
};

