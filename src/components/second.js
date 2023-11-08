import React, { useState } from "react";
import ChildComponent from "./ChildComponent.js"; 

const SecondComponent = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [id, setId] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCollege = (e) => {
    setCollege(e.target.value);
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  return (
    <>
    <div>
      <h2>Child class</h2>
      <ChildComponent name={name} college={college} id={id} />
      <h2>Child component</h2>
      <input type="text" value={name} onChange={handleChangeName} placeholder="Name" />
      <input type="text" value={college} onChange={handleChangeCollege} placeholder="College" />
      <input type="text" value={id} onChange={handleChangeId} placeholder="ID" />
    </div>
    </>
  );
};

export default SecondComponent;