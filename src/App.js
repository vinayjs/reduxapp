import { useSelector } from 'react-redux';
import React from 'react';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter)
  const increment = ()=> {
     
  }
  const decrement = () => {
    
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default App;
