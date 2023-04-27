import { useRef } from "react";
import "./styles.css";

export default function App() {
  const inputRef = useRef(null);

  const handleclick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <h1>useRef</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleclick}>Click</button>
    </div>
  );
}
