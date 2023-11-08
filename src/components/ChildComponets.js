import React from "react";

const ChildComponent = (props) => {
  return (
    <>
    <div>
        <h2>Child Component</h2>
      <div>Name: {props.name}</div>
      <div>College: {props.college}</div>
      <div>Id: {props.id}</div>
      </div>
    </>
  );
};

export default ChildComponent;