import "./App.css";
import Btn from "./components/Btn";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1> Test Vercel</h1>
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Error />
    </div>
  );
}

export default App;
