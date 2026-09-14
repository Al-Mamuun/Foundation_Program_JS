import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
          minWidth: "300px",
        }}
      >
        <h1>My First React App 🚀</h1>

        <h2
          style={{
            fontSize: "40px",
            margin: "25px 0",
          }}
        >
          {count}
        </h2>

        <div>
          <button
            onClick={() => setCount(count + 1)}
            style={buttonStyle}
          >
            ➕ Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={buttonStyle}
          >
            ➖ Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            style={buttonStyle}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 15px",
  margin: "5px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#333",
  color: "white",
  cursor: "pointer",
  fontSize: "15px",
};

export default App;