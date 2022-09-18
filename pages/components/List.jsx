import React, { useState, useEffect, useCallback } from "react";

const increaseCount = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("running");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default increaseCount;
