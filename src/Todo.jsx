import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("Enter text");
  const [data, setData] = useState([]);
  const changeHandle = (e) => {
    setTask(e.target.value);
  };
  const addToList = () => {
    const newData = task;
    console.log(newData);
  };
  return (
    <>
      <input type="text" value={task} onChange={changeHandle} />
      <button onClick={addToList}>Add To List</button>
    </>
  );
}
