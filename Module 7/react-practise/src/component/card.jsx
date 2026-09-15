//* props and children
// export default function Card(props){
//     console.log(props);
//     return <div>
//         <p>First Name: {props.firstname}</p>
//         <p>Last Name: {props.lastname}</p>
//         <p>Age: {props.age}</p>
//     </div>
// };

export default function Card(firstname, lastname, age) {
  return(
    <div>
    <p>First Name: {firstname}</p>
    <p>Last Name: {lastname}</p>
    <p>Age: {age}</p>
  </div>
  );
};
