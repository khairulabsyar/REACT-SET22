import React from "react";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [clickMe, setClickMe] = useState(0);
  const [show, setshow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  useEffect(() => {
    if (show === true) {
      alert(`You have clicked me: ${clickMe}`);
    }
  }, [clickMe]);

  const handleClick = () => {
    setshow(true);
    setClickMe((clickMe) => clickMe + 1);
  };

  return (
    <>
      <div>UseEffectExample</div>
      <h4>Timer count: {count}</h4>
      <button onClick={() => handleClick()}>Click me</button>
    </>
  );
}

export default Counter;
