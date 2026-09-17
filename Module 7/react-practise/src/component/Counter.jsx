import {useState} from "react";
import "./counter.css";
// const Counter = () => {
//     const [count, setCount] = useState(0);
    
//   return (
//     <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         {count}
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }

// export default Counter

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const handleIncrement = () => {
//         setCount(count + 1);
//     }

//     const handleIncrementByValue = (value) => {
//         setCount(count + value);
//     }

//     const handleDecrement = () => {
//         setCount(count - 1);
//     }
//   return (
//     <div>
//         <button onClick={handleIncrement}>Increment</button>
//         {count}
//         <button onClick={() => handleIncrementByValue(5)}>Increment by 5</button>
//         <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }

// export default Counter

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleIncrementByValue = (value) => {
        setCount(count + value);
    }

    const handleDecrement = () => {
        if ( count > 0 ) {
            setCount(count - 1);
        }
    }

  return (
    <div className="counter-container">
         <h2 className="counter-value">{count}</h2>
        <div className="button-group">
            <button className="btn btn-decrement" onClick={handleDecrement}>Decrement</button>
            <button className="btn btn-increment" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-plus5" onClick={() => handleIncrementByValue(5)}>Increment by 5</button>
        </div>
    </div>
  )
}

export default Counter