// import React from 'react'
import { useState } from 'react'
import './Card.css'

const Card = ({ name, email }) => {

    const [member, setMember] = useState("");

    const clickHandler = (memberName) => { 
        setMember(memberName);
    }



  return (
    <div onClick={() => clickHandler(name)} className="card">
      <h1>Name:{name} </h1>
      <h1>Email: {email} </h1>

      {member && <p>Member: {member}</p>}
    </div>
  );
}

export default Card;