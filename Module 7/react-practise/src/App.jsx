import "./App.css";

import Counter from "./component/Counter";
import Display from "./component/Display";
import NestedDisplay from "./component/NestedDisplay";

import Counterprovider from "./providers/Counter.provider";

function App() {
  return (
    <Counterprovider>
      <div className="App">
        <h1>Parent Component</h1>

        <Display />

        <Counter />

        {/* <NestedDisplay /> */}
      </div>
    </Counterprovider>
  );
}

export default App;