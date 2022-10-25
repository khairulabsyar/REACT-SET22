import { useState } from "react";

const CounterHook = () => {
  const [value, setValue] = useState(0);

  const increase = (newVal) => {
    setValue(value + newVal);
  };

  const decrease = (newVal) => {
    setValue(value - newVal);
  };

  const reset = () => {
    setValue(0);
  };

  return { increase, value, decrease, reset };
};

export default CounterHook;
