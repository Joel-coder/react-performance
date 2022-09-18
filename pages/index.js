import List from "./components/List";
import React, { useState } from "react";
import { useCallback } from "react";

export default function Home() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark(!dark)}>Toogle theme</button>
        <List getItems={getItems} />
      </div>
    </>
  );
}
