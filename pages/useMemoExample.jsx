import React, { useMemo, useState } from "react";

const useMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunciton(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunciton = (num) => {
  console.log("Calling Slow Function");
  return num * 2;
};

export default useMemoExample;
