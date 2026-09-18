import "./counter.css";
import { useContext } from "react";
import { CounterContext } from "../providers/Counter.provider";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementByValue = (value) => {
    setCount(count + value);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <div className="button-group">
        <button
          className="btn btn-decrement"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          className="btn btn-increment"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="btn btn-plus5"
          onClick={() => handleIncrementByValue(5)}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;