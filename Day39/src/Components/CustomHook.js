import React from "react";
import CounterHook from "../Hooks/CounterHook";

function CustomHook() {
  const counter = CounterHook();

  return (
    <>
      <h4>Custom Hook</h4>
      <button onClick={() => counter.increase(10)}>+</button>
      <button onClick={() => counter.decrease(5)}>-</button>
      <button onClick={() => counter.reset()}>Reset</button>
      <h4>{counter.value}</h4>
    </>
  );
}

export default CustomHook;
