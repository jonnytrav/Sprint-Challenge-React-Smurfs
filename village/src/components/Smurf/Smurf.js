import React from "react";
import "./Smurf.css";

const Smurf = props => {
  return (
    <div className="smurf">
      <h3 className="smurf-name">{props.name}</h3>
      <p>{props.height} tall</p>
      <p>
        <strong>{props.age}</strong> smurf years old
      </p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
