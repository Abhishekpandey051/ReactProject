import React, { useState } from "react";

export default function Counter() {
  const [input1data, setinput1data] = useState();
  const [input2data, setinput2data] = useState();

  const handleinput1 = (event) => {
    setinput2data(Number(event.target.value) + 1);
  };
  const handleinput2 = (event) => {
    setinput1data(Number(event.target.value) - 1);
  };
  return (
    <div className="App">
      <input type="number" value={input1data} onChange={handleinput1} />
      <input type="number" value={input2data} onChange={handleinput2} />
      <button></button>
    </div>
  );
}
