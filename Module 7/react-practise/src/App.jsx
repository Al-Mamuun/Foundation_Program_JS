import "./App.css";
import Card from "./component/card";

// function App() {
//   return (
//     <Card firstname="Mamun" lastname="Love" age={23}>
//     <div>
//       <h1>Welcome</h1>
//       <p>Hello World</p>
//     </div>
//   </Card>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <Card name="Mamun" age={19} />
      <Card name="Sakib" age={20} />
      <Card name="Nabila" age={24} />
    </div>
  );
}

export default App;
