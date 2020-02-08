import React, { Component } from "react";
import "./App.css";
import styled from 'styled-components'
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Header">WELCOME TO THE SMURFS!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;