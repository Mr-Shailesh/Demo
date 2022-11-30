import React, { useState } from "react";

const Btn = () => {
  const [count, setCount] = useState(0);
  console.log("count", count);
  return <button onClick={() => setCount(count + 1)}>Count {count}</button>;
};

export default Btn;
