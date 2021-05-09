import React, { useState } from 'react';
import './CounterApp.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const syncincrement = () => {
    setCount((count) => count + 1);
  };

  const syncdecrement = () => {
    setCount((count) => count - 1);
  };
  const incrementAsync = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const decrementAsync = () => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  };

  return (
    <div className='main'>
      <div>
        <h2>Current Count</h2>
        <p>{count}</p>
        <button className='btn-inc' onClick={syncincrement}>
          Sync +
        </button>
        <button className='btn-dec' onClick={syncdecrement}>
          Sync -
        </button>
        <div>
          <button className='btn-inc' onClick={incrementAsync}>
            Async +
          </button>
          <button className='btn-dec' onClick={decrementAsync}>
            Async -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
