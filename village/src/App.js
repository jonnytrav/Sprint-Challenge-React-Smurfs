import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.error(err));
  }
  addSmurf = smurf => {
    axios.post(`http://localhost:3333/smurfs`, smurf).then(res => {
      this.setState({ smurfs: res.data });
    });
  };
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </div>

        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
