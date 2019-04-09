import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from './ButtonGroup';
import { store } from './store';
import { connect } from 'react-redux';

class App extends Component {
  // state object removed.
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ]; 
  };
};

export default connect(null, {})(App);
