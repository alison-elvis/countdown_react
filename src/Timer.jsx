import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(1000);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <h1>Countdown: {count}</h1>;
};
export default Timer;