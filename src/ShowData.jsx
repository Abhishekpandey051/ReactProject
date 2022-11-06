import React, { useState } from "react";

export default function ShowData() {
  let [data1, setData1] = useState("");
  let [data2, setData2] = useState("");
  let [data3, setData3] = useState("");
  let [update1, setUpdate1] = useState(data1);
  let [update2, setUpdate2] = useState(data2);
  let [update3, setUpdate3] = useState(data3);

  const addValue1 = (e) => {
    setData1(e.target.value);
  };
  const addValue2 = (e) => {
    setData2(e.target.value);
  };
  const addValue3 = (e) => {
    setData3(e.target.value);
  };
  const showData = () => {
    setUpdate1(data1);
    setUpdate2(data2);
    setUpdate3(data3);
  };

  return (
    <>
      <h1>Hello from ShowData</h1>
      
      <h1>data:{update1}</h1>
      <h1>{update2}</h1>
      <h1>{update3}</h1>
      <label>Data.1 </label>
      <input type="text" value={data1} onChange={addValue1} />
      <br />

      <label htmlFor="">Data.2 </label>
      <input type="text" value={data2} onChange={addValue2} />
      <br />

      <label htmlFor="">Data.3 </label>
      <input type="text" value={data3} onChange={addValue3} />
      <br />
      <button onClick={showData}>ShowData</button>
    </>
  );
}
