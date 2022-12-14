import React, { useState } from "react";

const Error = () => {
  const [error, setError] = useState(false);

  const errorHandler = () => {
    console.log("Error");
    setError(!error);
  };

  function loopy() {
    while (true) {
      console.log("Hello, world!");
    }
  }

  return (
    <>
      <button onClick={errorHandler}>Error Generator</button>
      <br />

      <div>{error ? <p>Error was detected</p> : <p>No Error was found</p>}</div>

      <button onClick={loopy}>Crash App</button>
    </>
  );
};

export default Error;
