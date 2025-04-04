import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    if (inputRef.current.value == 0) {
      alert("Division by 0 omg wowowow");
    }
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
  }

  function resetResult(e) {
    setResult(0);
  }
  useEffect(() => {
    inputRef.current.value = null;
    console.log(result);
  }, [result]);
  return (
    <>
      <div className="App">
        <div>
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <p ref={resultRef}>{/* add the value of the current total */}</p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <button onClick={plus}>add</button>
          <button onClick={minus}>substract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>reset input</button>
          <button onClick={resetResult}>reset result</button>
          {/* Add the subtract button */}
          {/* Add the multiply button */}
          {/* Add the divide button */}
          {/* Add the resetInput button */}
          {/* Add the resetResult button */}
        </form>
        <p>result {result}</p>
      </div>
    </>
  );
}

export default App;
