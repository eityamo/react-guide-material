import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    return setCount((prev) => ++prev);
  };
  return {
    count,
    countUp,
  };
};
