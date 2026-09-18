import "./counter.css";
import NestedDisplay from "./NestedDisplay.jsx";
const Display = () => {
  return (
    <div className="display">
        <h1>Child Component</h1>
        < NestedDisplay/>
    </div>
  );
};

export default Display;