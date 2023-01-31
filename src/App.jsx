import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
   //Create handleDecrement event handler
   const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div className="App">
      <div>
        <button onClick={handleIncrement}>+</button>
          <h5>This conuter is: {count}</h5>
        <button onClick={handleDecrement}>-</button>
      </div>
     <button onClick={() => setCount(0)}>
      Reset
     </button>
    </div>
  );
}

export default App
