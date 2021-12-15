import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    console.log("use effect");
  }, [count]);

  useEffect(() => {
      const sIID = setInterval(() => setTimer(timer => timer + 1),1000);
      return () => clearInterval(sIID);
  },[])

useEffect(() => console.log(timer),[timer])

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default Counter;
