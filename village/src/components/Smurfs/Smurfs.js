import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Smurfs.css";
import Smurf from "../Smurf/Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className="title">Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
