import React, { useState } from "react";

export default function Shows() {
  let [data, SetData] = useState("");
  let [data1, SetData1] = useState("");
  let [update, setUpdate] = useState(data);
  let [update2, setUpdate2] = useState(data1);

  const Setdata = (e) => {
    SetData(e.target.value);
  };
  const Setdata1 = (e1) => {
    SetData1(e1.target.value);
  };
  const handle = () => {
    setUpdate(data);
    setUpdate2(data1);
  };
  return (
    <>
      <h1>{update}</h1>
      <h1>{update2}</h1>
      <input type="text" value={data} onChange={Setdata} />
      <br />
      <input type="text" value={data1} onChange={Setdata1} />
      <br />
      <button onClick={handle}> Click</button>
    </>
  );
}
