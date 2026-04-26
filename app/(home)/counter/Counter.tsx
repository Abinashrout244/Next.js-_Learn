"use client";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)} className="border p-2 ">
        Couneter:
      </button>
      <span>{count}</span>
    </>
  );
};

export default Counter;
