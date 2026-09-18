import "./counter.css";
import { useContext } from "react";
import { CounterContext } from "../providers/Counter.provider";

const NestedDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="nested-display">
      <h1>Nested Grand Child</h1>

      <h2 className="counter-value">
        Count: {count}
      </h2>
    </div>
  );
};

export default NestedDisplay;