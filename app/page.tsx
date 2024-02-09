"use state"
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={add}>Add</button>
      <span>{count}</span>
      <button onClick={subtract}>Subtract</button>
    </>
  );
}
